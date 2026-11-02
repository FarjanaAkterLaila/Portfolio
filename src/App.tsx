import React, { useState, useEffect, useCallback } from 'react';
import { useCosmicAudio } from './hooks/useCosmicAudio';
import CosmicCanvas from './components/CosmicCanvas';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import PersonalSection from './components/PersonalSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import CvSection from './components/CvSection';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import { AppViewport } from './styles/app.styles';
import { ViewId, AtmosphereTheme } from './types';

const ATMOSPHERES: AtmosphereTheme[] = [
  'theme-default',
  'theme-solar',
  'theme-aurora'
];

const VALID_VIEWS: ViewId[] = ['about', 'projects', 'personal', 'blog', 'contact', 'cv'];

export const resolveViewFromUrl = (): ViewId => {
  // Check pathname first (e.g. /projects, /cv, /personal, /contact, /blog, /transmissions, /about or /)
  let path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();

  // Backward compatibility fallback for hash links (e.g. /#cv, /#projects)
  if (!path && window.location.hash) {
    path = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  }

  if (path === 'transmissions') path = 'blog';
  if (!path || path === 'about') return 'about';

  return VALID_VIEWS.includes(path as ViewId) ? (path as ViewId) : 'about';
};

export const getPathForView = (viewId: ViewId): string => {
  return viewId === 'about' ? '/' : `/${viewId}`;
};

export default function App(): React.JSX.Element {
  const { isPlaying, toggleAudio, playSfx } = useCosmicAudio();

  const [activeView, setActiveView] = useState<ViewId>(() => resolveViewFromUrl());
  const [atmosphereIndex, setAtmosphereIndex] = useState<number>(0);
  const [selectedProjectCodex, setSelectedProjectCodex] = useState<string | null>(null);

  // Sync atmosphere with body class
  useEffect(() => {
    const currentTheme = ATMOSPHERES[atmosphereIndex];
    ATMOSPHERES.forEach(theme => {
      if (theme) document.body.classList.remove(theme);
    });
    if (currentTheme) {
      document.body.classList.add(currentTheme);
    }
  }, [atmosphereIndex]);

  // Clean up legacy hash if someone arrives via an old hash link
  useEffect(() => {
    if (window.location.hash) {
      const initialView = resolveViewFromUrl();
      const cleanPath = getPathForView(initialView);
      window.history.replaceState({ viewId: initialView }, '', cleanPath);
    }
  }, []);

  // Handle Browser Back / Forward buttons (HTML5 popstate)
  useEffect(() => {
    const handlePopState = () => {
      const resolved = resolveViewFromUrl();
      setActiveView(resolved);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // HTML5 History API Navigation
  const handleNavigate = useCallback((viewId: ViewId) => {
    setActiveView(viewId);
    const targetPath = getPathForView(viewId);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ viewId }, '', targetPath);
    }
    window.scrollTo(0, 0);
    playSfx('warp');
  }, [playSfx]);

  const handleCycleAtmosphere = useCallback(() => {
    setAtmosphereIndex((prev) => (prev + 1) % ATMOSPHERES.length);
    playSfx('click');
  }, [playSfx]);

  return (
    <>
      {/* 2D Canvas & Atmospheric Overlays */}
      <CosmicCanvas />

      {/* Global Navbar */}
      <Navbar
        activeView={activeView}
        onNavigate={handleNavigate}
        isPlaying={isPlaying}
        onToggleAudio={toggleAudio}
        onCycleAtmosphere={handleCycleAtmosphere}
        playSfx={playSfx}
      />

      {/* Dynamic Realm Views */}
      <AppViewport id="realm-viewport">
        {activeView === 'about' && <AboutSection />}
        {activeView === 'projects' && (
          <ProjectsSection
            onOpenCodex={(projectKey: string) => setSelectedProjectCodex(projectKey)}
            playSfx={playSfx}
          />
        )}
        {activeView === 'personal' && <PersonalSection />}
        {activeView === 'blog' && <BlogSection playSfx={playSfx} />}
        {activeView === 'contact' && <ContactSection playSfx={playSfx} />}
        {activeView === 'cv' && <CvSection />}
      </AppViewport>

      {/* Project Codex Modal */}
      <ProjectModal
        projectKey={selectedProjectCodex}
        onClose={() => setSelectedProjectCodex(null)}
        playSfx={playSfx}
      />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}

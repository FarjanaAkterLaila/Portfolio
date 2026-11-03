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
import ProjectSpecPage from './components/ProjectSpecPage';
import Footer from './components/Footer';
import { AppViewport } from './styles/app.styles';
import { ViewId, AtmosphereTheme } from './types';
import { PROJECT_CODEX } from './data/projectsData';

const ATMOSPHERES: AtmosphereTheme[] = [
  'theme-default',
  'theme-solar',
  'theme-aurora'
];

const VALID_VIEWS: ViewId[] = ['about', 'projects', 'personal', 'blog', 'contact', 'cv'];

export interface AppRoute {
  view: ViewId;
  projectId: string | null;
}

export const resolveRoute = (): AppRoute => {
  let path = window.location.pathname.replace(/^\/+|\/+$/g, '').toLowerCase();

  if (!path && window.location.hash) {
    path = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  }

  if (path === 'transmissions') path = 'blog';

  const [head, slug] = path.split('/');
  if (head === 'projects' && slug && PROJECT_CODEX[slug]) {
    return { view: 'projects', projectId: slug };
  }

  if (!head || head === 'about' || head === 'home') return { view: 'about', projectId: null };
  if (VALID_VIEWS.includes(head as ViewId)) return { view: head as ViewId, projectId: null };
  return { view: 'about', projectId: null };
};

export const resolveViewFromUrl = (): ViewId => resolveRoute().view;

export const getPathForView = (viewId: ViewId): string => {
  return viewId === 'about' ? '/' : `/${viewId}`;
};

export default function App(): React.JSX.Element {
  const { isPlaying, toggleAudio, playSfx } = useCosmicAudio();

  const [activeView, setActiveView] = useState<ViewId>(() => resolveRoute().view);
  const [projectId, setProjectId] = useState<string | null>(() => resolveRoute().projectId);
  const [atmosphereIndex, setAtmosphereIndex] = useState<number>(0);

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
      const initial = resolveRoute();
      const cleanPath = initial.projectId ? `/projects/${initial.projectId}` : getPathForView(initial.view);
      window.history.replaceState({ viewId: initial.view, projectId: initial.projectId }, '', cleanPath);
    }
  }, []);

  // Handle Browser Back / Forward buttons (HTML5 popstate)
  useEffect(() => {
    const handlePopState = () => {
      const resolved = resolveRoute();
      setActiveView(resolved.view);
      setProjectId(resolved.projectId);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // HTML5 History API Navigation
  const handleNavigate = useCallback((viewId: ViewId) => {
    setActiveView(viewId);
    setProjectId(null);
    const targetPath = getPathForView(viewId);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ viewId, projectId: null }, '', targetPath);
    }
    window.scrollTo(0, 0);
    playSfx('warp');
  }, [playSfx]);

  const openProject = useCallback((id: string) => {
    const targetPath = `/projects/${id}`;
    setActiveView('projects');
    setProjectId(id);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ viewId: 'projects', projectId: id }, '', targetPath);
    }
    window.scrollTo(0, 0);
  }, []);

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
        {activeView === 'projects' && !projectId && (
          <ProjectsSection
            onOpenSpec={openProject}
            playSfx={playSfx}
          />
        )}
        {activeView === 'projects' && projectId && (
          <ProjectSpecPage
            projectKey={projectId}
            onBack={() => handleNavigate('projects')}
            playSfx={playSfx}
          />
        )}
        {activeView === 'personal' && <PersonalSection />}
        {activeView === 'blog' && <BlogSection playSfx={playSfx} />}
        {activeView === 'contact' && <ContactSection playSfx={playSfx} />}
        {activeView === 'cv' && <CvSection />}
      </AppViewport>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </>
  );
}

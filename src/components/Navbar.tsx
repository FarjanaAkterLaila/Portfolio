import React, { useState } from 'react';
import { ViewId, SfxType } from '../types';
import {
  NavHeader,
  NavContainer,
  NavBar,
  BrandMonogram,
  MonogramSigil,
  SigilCore,
  SigilGlow,
  BrandTitles,
  BrandName,
  BrandRole,
  NavLinks,
  NavLinkItem,
  NavNum,
  NavText,
  NavActions,
  AudioButton,
  AudioWaves,
  WaveBar,
  AudioLabel,
  ThemeButton,
  MobileMenuButton,
  MobileDrawer,
  MobileDrawerContent,
  MobileNavLink
} from '../styles/navbar.styles';

interface NavbarProps {
  activeView: ViewId;
  onNavigate: (viewId: ViewId) => void;
  isPlaying: boolean;
  onToggleAudio: () => void;
  onCycleAtmosphere: () => void;
  playSfx: (type?: SfxType) => void;
}

interface NavItemConfig {
  id: ViewId;
  num: string;
  label: string;
  path: string;
}

export default function Navbar({
  activeView,
  onNavigate,
  isPlaying,
  onToggleAudio,
  onCycleAtmosphere,
  playSfx
}: NavbarProps): React.JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItemConfig[] = [
    { id: 'about', num: '01', label: 'About', path: '/' },
    { id: 'projects', num: '02', label: 'Projects', path: '/projects' },
    { id: 'personal', num: '03', label: 'Personal', path: '/personal' },
    { id: 'blog', num: '04', label: 'Transmissions', path: '/blog' },
    { id: 'contact', num: '05', label: 'Contact', path: '/contact' },
    { id: 'cv', num: '06', label: 'Dossier (CV)', path: '/cv' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: ViewId) => {
    e.preventDefault();
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <NavHeader id="realm-header">
      <NavContainer>
        <NavBar>
          {/* Brand / Monogram */}
          <BrandMonogram
            href="/"
            onClick={(e) => handleNavClick(e, 'about')}
            title="Farjana Akter Laila Portfolio"
          >
            <MonogramSigil>
              <SigilCore>&#10022;</SigilCore>
              <SigilGlow />
            </MonogramSigil>
            <BrandTitles>
              <BrandName>Farjana Akter Laila</BrandName>
              <BrandRole>MID-LEVEL DEVELOPER &middot; WEB &amp; MOBILE</BrandRole>
            </BrandTitles>
          </BrandMonogram>

          {/* Desktop Navigation Links */}
          <NavLinks id="nav-links">
            {navItems.map((item) => (
              <NavLinkItem
                key={item.id}
                href={item.path}
                $active={activeView === item.id}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <NavNum $active={activeView === item.id}>{item.num}</NavNum>
                <NavText>{item.label}</NavText>
              </NavLinkItem>
            ))}
          </NavLinks>

          {/* Action Controls */}
          <NavActions>
            {/* Ambient Audio Synthesizer Toggle (HIDDEN ON MOBILE) */}
            <AudioButton
              type="button"
              id="audio-toggle-btn"
              $playing={isPlaying}
              onClick={onToggleAudio}
              aria-label="Toggle Ambient Cosmic Soundscape"
              title="Cosmic Soundscape"
            >
              <AudioWaves aria-hidden="true">
                <WaveBar $playing={isPlaying} />
                <WaveBar $playing={isPlaying} />
                <WaveBar $playing={isPlaying} />
              </AudioWaves>
              {!isPlaying ? (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
              <AudioLabel>
                {isPlaying ? 'Active' : 'Muted'}
              </AudioLabel>
            </AudioButton>

            {/* Atmosphere Theme Switcher */}
            <ThemeButton
              type="button"
              id="theme-toggle-btn"
              onClick={onCycleAtmosphere}
              aria-label="Cycle Planetary Atmosphere"
              title="Cycle Atmosphere"
            >
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </ThemeButton>

            {/* Mobile Hamburger */}
            <MobileMenuButton
              type="button"
              id="mobile-menu-btn"
              onClick={() => {
                playSfx('click');
                setMobileOpen(!mobileOpen);
              }}
              aria-label="Open Navigation Menu"
            >
              <svg viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </MobileMenuButton>
          </NavActions>
        </NavBar>
      </NavContainer>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer $open={mobileOpen} id="mobile-drawer">
        <MobileDrawerContent>
          <MobileNavLink href="/" $active={activeView === 'about'} onClick={(e) => handleNavClick(e, 'about')}>01. About // The Bio-Archive</MobileNavLink>
          <MobileNavLink href="/projects" $active={activeView === 'projects'} onClick={(e) => handleNavClick(e, 'projects')}>02. Projects // Citadel of Xenotech</MobileNavLink>
          <MobileNavLink href="/personal" $active={activeView === 'personal'} onClick={(e) => handleNavClick(e, 'personal')}>03. Personal // The Lumina Glades</MobileNavLink>
          <MobileNavLink href="/blog" $active={activeView === 'blog'} onClick={(e) => handleNavClick(e, 'blog')}>04. Transmissions // Subspace Logs</MobileNavLink>
          <MobileNavLink href="/contact" $active={activeView === 'contact'} onClick={(e) => handleNavClick(e, 'contact')}>05. Contact // Quantum Uplink</MobileNavLink>
          <MobileNavLink href="/cv" $active={activeView === 'cv'} onClick={(e) => handleNavClick(e, 'cv')}>06. Dossier (Full CV)</MobileNavLink>
        </MobileDrawerContent>
      </MobileDrawer>
    </NavHeader>
  );
}

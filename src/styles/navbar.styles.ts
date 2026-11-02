import styled, { keyframes } from 'styled-components';

const sigilPulse = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.15) rotate(90deg); }
`;

const waveEqualize = keyframes`
  0%, 100% { height: 4px; }
  50% { height: 16px; }
`;

const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const NavHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: var(--nav-height, 4.75rem);
  z-index: 50;
  background: rgba(3, 6, 13, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: var(--transition-smooth, 280ms ease);

  @media (max-width: 768px) {
    height: 4.25rem;
  }
`;

export const NavContainer = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 0.85rem;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BrandMonogram = styled.a`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    gap: 0.6rem;
    max-width: 70%;
  }
`;

export const MonogramSigil = styled.div`
  position: relative;
  width: 2.6rem;
  height: 2.6rem;
  min-width: 2.6rem;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(0, 255, 200, 0.2), rgba(176, 38, 255, 0.25));
  border: 1px solid rgba(0, 255, 200, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 24px rgba(0, 255, 200, 0.35);

  @media (max-width: 768px) {
    width: 2.2rem;
    height: 2.2rem;
    min-width: 2.2rem;
  }
`;

export const SigilCore = styled.span`
  font-size: 1.25rem;
  color: var(--primary-cyan, #00ffc8);
  filter: drop-shadow(0 0 6px var(--primary-cyan, #00ffc8));
  animation: ${sigilPulse} 3.5s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const SigilGlow = styled.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 12px rgba(0, 255, 200, 0.4);
`;

export const BrandTitles = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BrandName = styled.span`
  font-family: var(--font-title, 'Cinzel', serif);
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: 0.04em;
  color: #fff;
  line-height: 1.2;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    font-size: 0.88rem;
  }
`;

export const BrandRole = styled.span`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  color: var(--accent-gold, #e8c36a);
  opacity: 0.9;

  /* HIDE completely on mobile so navbar text is never crowded or cut off */
  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const NavLinkItem = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-body, 'Outfit', sans-serif);
  font-weight: 500;
  font-size: 0.85rem;
  color: ${props => props.$active ? '#fff' : 'var(--text-muted, #cbd5e1)'};
  letter-spacing: 0.02em;
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    color: #fff;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: var(--primary-cyan, #00ffc8);
    box-shadow: 0 0 8px var(--primary-cyan, #00ffc8);
    transition: width 240ms ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const NavNum = styled.span<{ $active?: boolean }>`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.65rem;
  color: ${props => props.$active ? 'var(--primary-cyan, #00ffc8)' : 'var(--accent-gold, #e8c36a)'};
  opacity: ${props => props.$active ? '1' : '0.65'};
`;

export const NavText = styled.span`
  font-size: 0.85rem;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  @media (max-width: 768px) {
    gap: 0.35rem;
  }
`;

export const AudioButton = styled.button<{ $playing?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.85rem;
  border-radius: 12px;
  background: ${props => props.$playing ? 'rgba(0, 255, 200, 0.15)' : 'rgba(255, 255, 255, 0.05)'};
  border: 1px solid ${props => props.$playing ? 'var(--primary-cyan, #00ffc8)' : 'rgba(232, 195, 106, 0.3)'};
  color: ${props => props.$playing ? 'var(--primary-cyan, #00ffc8)' : 'var(--text-dim, #94a3b8)'};
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  transition: var(--transition-smooth, 280ms ease);
  cursor: pointer;

  &:hover {
    border-color: var(--primary-cyan, #00ffc8);
    color: #fff;
    box-shadow: 0 0 16px rgba(0, 255, 200, 0.2);
  }

  /* USER REQUEST: Hide audio icon in mobile view */
  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const AudioWaves = styled.span`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 16px;
`;

export const WaveBar = styled.span<{ $playing?: boolean }>`
  width: 2px;
  height: ${props => props.$playing ? '12px' : '4px'};
  background: currentColor;
  border-radius: 1px;
  animation: ${props => props.$playing ? waveEqualize : 'none'} 1.2s infinite ease-in-out;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

export const AudioLabel = styled.span`
  font-size: 0.72rem;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const ThemeButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(232, 195, 106, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-gold, #e8c36a);
  transition: var(--transition-smooth, 280ms ease);
  cursor: pointer;

  &:hover {
    background: rgba(232, 195, 106, 0.15);
    border-color: var(--accent-gold, #e8c36a);
    box-shadow: 0 0 16px rgba(232, 195, 106, 0.3);
    color: #fff;
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
  }

  @media (max-width: 768px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 200, 0.35);
  align-items: center;
  justify-content: center;
  color: var(--primary-cyan, #00ffc8);
  transition: var(--transition-smooth, 280ms ease);
  cursor: pointer;

  &:hover {
    background: rgba(0, 255, 200, 0.15);
    box-shadow: 0 0 16px rgba(0, 255, 200, 0.3);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    stroke: currentColor;
    stroke-width: 2;
  }

  @media (max-width: 768px) {
    display: flex !important;
    width: 2.2rem;
    height: 2.2rem;
  }
`;

export const MobileDrawer = styled.div<{ $open?: boolean }>`
  position: fixed;
  top: 4.75rem;
  left: 0.75rem;
  right: 0.75rem;
  max-width: calc(100vw - 1.5rem);
  background: rgba(9, 14, 28, 0.96);
  border: 1px solid var(--border-cyan, rgba(0, 255, 200, 0.35));
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 14px;
  padding: 1.25rem;
  display: ${props => props.$open ? 'block' : 'none'};
  z-index: 70;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.85);
  animation: ${fadeInDown} 220ms ease;

  @media (min-width: 769px) {
    display: none !important;
  }
`;

export const MobileDrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MobileNavLink = styled.a<{ $active?: boolean }>`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: ${props => props.$active ? 'var(--primary-cyan, #00ffc8)' : 'var(--text-surface, #f8fafc)'};
  background: ${props => props.$active ? 'rgba(0, 255, 200, 0.12)' : 'transparent'};
  text-decoration: none;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    background: rgba(0, 255, 200, 0.15);
    color: var(--primary-cyan, #00ffc8);
  }
`;
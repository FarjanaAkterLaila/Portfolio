import styled, { keyframes } from 'styled-components';

const radarSweep = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ProjectsView = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
`;

export const ProjectsPage = styled.div`
  min-height: 100vh;
  padding-top: var(--nav-height, 4.75rem);
  position: relative;
  z-index: 20;

  @media (max-width: 768px) {
    padding-top: var(--nav-height, 4.25rem);
    width: 100% !important;
    overflow-x: hidden !important;
  }
`;

export const CitadelHero = styled.section`
  position: relative;
  width: 100%;
  min-height: 480px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 3rem 3rem;

  @media (max-width: 1024px) {
    min-height: 400px;
    padding: 3rem 2rem 2.5rem;
  }

  @media (max-width: 768px) {
    min-height: 280px !important;
    padding: 2rem 1rem 1.5rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const CitadelHeroBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

export const CitadelHeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  filter: contrast(1.1) brightness(0.85);
`;

export const CitadelGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(3, 6, 13, 0.4) 0%,
    rgba(3, 6, 13, 0.8) 70%,
    var(--bg-deep, #03060d) 100%
  );
`;

export const CitadelContent = styled.div`
  position: relative;
  z-index: 5;
  max-width: 800px;
  width: 100%;
`;

export const CitadelKicker = styled.p`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.82rem;
  letter-spacing: 0.25em;
  color: var(--accent-gold, #e8c36a);
  text-transform: uppercase;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
  }
`;

export const CitadelTitle = styled.h1`
  font-family: var(--font-title, 'Cinzel', serif);
  font-weight: 900;
  font-size: 3.2rem;
  letter-spacing: 0.06em;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 5.5vw, 2.2rem) !important;
    letter-spacing: 0.04em !important;
  }
`;

export const CitadelSubtitle = styled.p`
  font-size: 1.05rem;
  color: var(--text-surface, #f8fafc);
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 0.92rem !important;
    margin-bottom: 1.25rem !important;
  }
`;

export const FilterPills = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.45rem !important;
    width: 100% !important;
  }
`;

export const FilterPillButton = styled.button<{ $active?: boolean }>`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  padding: 0.55rem 1.15rem;
  border-radius: 9999px;
  background: ${props => props.$active ? 'var(--primary-cyan, #00ffc8)' : 'rgba(255, 255, 255, 0.05)'};
  color: ${props => props.$active ? '#03060d' : 'var(--text-muted, #cbd5e1)'};
  border: 1px solid ${props => props.$active ? 'var(--primary-cyan, #00ffc8)' : 'rgba(255, 255, 255, 0.12)'};
  font-weight: ${props => props.$active ? '700' : '500'};
  box-shadow: ${props => props.$active ? '0 0 16px rgba(0, 255, 200, 0.4)' : 'none'};
  transition: var(--transition-smooth, 280ms ease);
  cursor: pointer;

  &:hover {
    border-color: var(--primary-cyan, #00ffc8);
    color: ${props => props.$active ? '#03060d' : '#fff'};
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.75rem !important;
    font-size: 0.75rem !important;
  }
`;

export const ProjectsContainer = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 8rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem 4rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 3.5rem 2rem;
  align-items: stretch;

  @media (max-width: 768px) {
    display: flex !important;
    flex-direction: column !important;
    gap: 2rem !important;
    width: 100% !important;
  }
`;

export const RealmCard = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    width: 100% !important;
    max-width: 100% !important;
  }
`;

export const CardRod = styled.div`
  position: relative;
  height: 24px;
  width: 100%;
  flex-shrink: 0;
`;

export const RodBar = styled.span`
  position: absolute;
  top: 12px;
  left: 5%;
  right: 5%;
  height: 5px;
  background: linear-gradient(90deg, #18233c, var(--accent-gold, #e8c36a), #18233c);
  border-radius: 3px;
  box-shadow: 0 0 10px rgba(232, 195, 106, 0.4);
`;

export const RodCord = styled.span<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 0;
  width: 2px;
  height: 14px;
  background: rgba(232, 195, 106, 0.6);
  left: ${props => props.$side === 'left' ? '18%' : 'auto'};
  right: ${props => props.$side === 'right' ? '18%' : 'auto'};
`;

export const CardShell = styled.div`
  position: relative;
  background: var(--bg-card, rgba(14, 23, 42, 0.72));
  border: 1px solid rgba(0, 255, 200, 0.3);
  border-radius: 12px;
  backdrop-filter: blur(14px);
  padding: 1.75rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.25rem 1rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const CornerSvg = styled.svg<{ $position: 'tl' | 'tr' | 'bl' | 'br' }>`
  position: absolute;
  width: 28px;
  height: 28px;
  color: var(--primary-cyan, #00ffc8);
  opacity: 0.6;
  pointer-events: none;
  top: ${props => props.$position.startsWith('t') ? '6px' : 'auto'};
  bottom: ${props => props.$position.startsWith('b') ? '6px' : 'auto'};
  left: ${props => props.$position.endsWith('l') ? '6px' : 'auto'};
  right: ${props => props.$position.endsWith('r') ? '6px' : 'auto'};
  transform: ${props => {
    switch(props.$position) {
      case 'tr': return 'scaleX(-1)';
      case 'bl': return 'scaleY(-1)';
      case 'br': return 'scale(-1, -1)';
      default: return 'none';
    }
  }};
`;

export const MediaWrap = styled.div`
  position: relative;
  width: 100%;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.25rem;
  background: #090e1c;
`;

export const MediaPattern = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

export const HoloPill = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  right: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BadgeCode = styled.span`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  color: var(--accent-gold, #e8c36a);
  background: rgba(3, 6, 13, 0.85);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`;

export const BadgeStatus = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.65rem;
  color: var(--primary-cyan, #00ffc8);
  background: rgba(3, 6, 13, 0.85);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`;

export const BeaconDot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--primary-cyan, #00ffc8);
  box-shadow: 0 0 6px var(--primary-cyan, #00ffc8);
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ArtifactKicker = styled.span`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  color: var(--accent-gold, #e8c36a);
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`;

export const ArtifactTitle = styled.h2`
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 1.4rem;
  color: #fff;
  margin-bottom: 0.75rem;
  line-height: 1.3;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 200ms ease;

    &:hover {
      color: var(--primary-cyan, #00ffc8);
    }
  }
`;

export const ArtifactDesc = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted, #cbd5e1);
  line-height: 1.45;
  margin-bottom: 1.25rem;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TechStackRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
`;

export const TechChip = styled.span`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.68rem;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-dim, #94a3b8);
`;

export const CardActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin-top: auto;
  flex-wrap: wrap;
`;

export const LiveLinkButton = styled.a`
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 0.9rem;
  border-radius: 8px;
  background: rgba(0, 255, 200, 0.16);
  border: 1px solid var(--primary-cyan, #00ffc8);
  color: var(--primary-cyan, #00ffc8);
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  font-weight: 700;
  transition: var(--transition-smooth, 280ms ease);
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: var(--primary-cyan, #00ffc8);
    color: #03060d;
    box-shadow: 0 0 16px rgba(0, 255, 200, 0.4);
  }

  svg {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }
`;

export const CodexButton = styled.a`
  flex: 1 1 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.65rem 0.9rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  font-weight: 700;
  transition: var(--transition-smooth, 280ms ease);
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #fff;
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
  }
`;

import styled, { keyframes } from 'styled-components';

const holoScan = keyframes`
  0% { top: 0; opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
`;

export const AboutView = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
`;

export const ManuscriptPage = styled.div`
  min-height: 100vh;
  padding-top: var(--nav-height, 4.75rem);
  position: relative;
  z-index: 20;

  @media (max-width: 768px) {
    padding-top: var(--nav-height, 4.25rem);
  }
`;

export const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  min-height: calc(100vh - var(--nav-height, 4.75rem));

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
  }
`;

export const ArtPane = styled.aside`
  position: sticky;
  top: var(--nav-height, 4.75rem);
  height: calc(100vh - var(--nav-height, 4.75rem));
  overflow: hidden;
  border-right: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    height: 320px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 480px) {
    height: 280px;
  }
`;

export const ArtSceneWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const VaultImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: contrast(1.08) brightness(0.9);
`;

export const VaultScrim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(3, 6, 13, 0.3) 0%,
    rgba(3, 6, 13, 0.1) 40%,
    rgba(3, 6, 13, 0.6) 80%,
    rgba(3, 6, 13, 0.95) 100%
  );
`;

/* USER REQUEST: Hide the top caption on mobile so it never clashes with navbar */
export const VaultCaption = styled.p`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  color: var(--accent-gold, #e8c36a);
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  margin: 0;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const HoloBadge = styled.div`
  position: absolute;
  bottom: 3.5rem;
  left: 2rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 0.85rem 1.25rem;
  background: rgba(9, 14, 28, 0.85);
  border: 1px solid rgba(0, 255, 200, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 24px rgba(0, 255, 200, 0.25);

  @media (max-width: 768px) {
    left: 0.75rem !important;
    right: 0.75rem !important;
    bottom: 0.85rem !important;
    max-width: calc(100% - 1.5rem) !important;
    padding: 0.6rem 0.85rem !important;
    gap: 0.75rem !important;
  }
`;

export const HoloAvatarRing = styled.div`
  position: relative;
  width: 64px;
  height: 64px;
  min-width: 64px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(135deg, var(--primary-cyan, #00ffc8), var(--accent-purple, #b026ff));
  overflow: hidden;

  @media (max-width: 768px) {
    width: 48px !important;
    height: 48px !important;
    min-width: 48px !important;
  }
`;

export const HoloAvatarImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

export const HoloScanLine = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-cyan, #00ffc8);
  box-shadow: 0 0 8px var(--primary-cyan, #00ffc8);
  animation: ${holoScan} 2.5s infinite linear;
`;

export const HoloBadgeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BadgeRole = styled.span`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--primary-cyan, #00ffc8);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 0.68rem;
  }
`;

export const BadgeOrg = styled.span`
  font-family: var(--font-body, 'Outfit', sans-serif);
  font-size: 0.8rem;
  color: var(--text-muted, #cbd5e1);

  @media (max-width: 768px) {
    font-size: 0.72rem;
  }
`;

export const BadgeLocation = styled.div`
  margin-top: 0.35rem;
  font-size: 0.72rem;
  color: var(--accent-gold, #e8c36a);
  font-family: var(--font-kicker, 'Orbitron', monospace);

  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
`;

export const DustField = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

export const DustMote = styled.span`
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--primary-cyan, #00ffc8);
  opacity: 0.6;
`;

export const ManuscriptPane = styled.main`
  padding: 3rem 4rem 6rem;
  background: var(--bg-deep, #03060d);

  @media (max-width: 1024px) {
    padding: 2.5rem 2rem 6rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem 4rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const ScrollWrapper = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const CyberRoller = styled.div<{ $position: 'top' | 'bottom' }>`
  height: 22px;
  background: linear-gradient(90deg, #18233c 0%, #2e4370 25%, #6282be 50%, #2e4370 75%, #18233c 100%);
  border-radius: 11px;
  position: relative;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.$position === 'top' ? '-6px' : '0'};
  margin-top: ${props => props.$position === 'bottom' ? '-6px' : '0'};
  z-index: 5;
`;

export const RollerCore = styled.div`
  position: absolute;
  inset: 2px 8px;
  border-radius: 9px;
  background: rgba(0, 0, 0, 0.4);
`;

export const RollerSpindle = styled.div`
  position: absolute;
  inset: 0;
  border: 1px solid rgba(0, 255, 200, 0.3);
  border-radius: inherit;
`;

export const RollerGlow = styled.div`
  width: 80%;
  height: 3px;
  background: var(--primary-cyan, #00ffc8);
  border-radius: 2px;
  box-shadow: 0 0 10px var(--primary-cyan, #00ffc8);
`;

export const ScrollBody = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

export const PaperAged = styled.div`
  background: var(--paper-bg, #090e1a);
  border: 1px solid rgba(232, 195, 106, 0.25);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(0, 255, 200, 0.03);
  border-radius: 4px;
  padding: 3.5rem 3.5rem 4rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 2rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const ManuscriptInk = styled.article`
  color: var(--ink-body, #e2e8f0);
  line-height: 1.8;
  font-family: var(--font-body, 'Outfit', sans-serif);
`;

export const Kicker = styled.p`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.75rem;
  letter-spacing: 0.22em;
  color: var(--accent-gold, #e8c36a);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h1`
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--ink-heading, #ffffff);
  letter-spacing: 0.03em;
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 5.5vw, 2rem);
    word-break: break-word;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.05rem;
  color: var(--ink-dim, #94a3b8);
  font-style: italic;
  margin-bottom: 1.75rem;
`;

export const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(232, 195, 106, 0.4), transparent);
  margin: 2rem 0 2.5rem;
`;

export const ChapterBlock = styled.section`
  margin-bottom: 3rem;
`;

export const ChapterTitle = styled.h2`
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 1.5rem;
  color: var(--accent-gold, #e8c36a);
  margin-bottom: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ChapterSubtitle = styled.p`
  font-size: 0.88rem;
  color: var(--text-dim, #94a3b8);
  margin-bottom: 1.25rem;
  font-style: italic;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.25rem;
  font-size: 0.98rem;
  color: var(--text-surface, #f8fafc);
  line-height: 1.75;
`;

export const TextGlow = styled.strong`
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 255, 200, 0.4);
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SkillGroupBox = styled.div`
  background: rgba(12, 18, 34, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.25rem;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    border-color: rgba(0, 255, 200, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }
`;

export const SkillGroupTitle = styled.h3`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--accent-gold, #e8c36a);
  margin-bottom: 0.85rem;
  text-transform: uppercase;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SkillItem = styled.li`
  font-size: 0.9rem;
  color: var(--text-surface, #f8fafc);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SkillGlyph = styled.span`
  color: var(--primary-cyan, #00ffc8);
  font-size: 0.8rem;
`;

export const Timeline = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0 0 0 0.5rem;
  border-left: 2px solid rgba(0, 255, 200, 0.25);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 1.5rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

export const TimelineNode = styled.li`
  position: relative;
`;

export const NodeMarker = styled.span<{ $gold?: boolean }>`
  position: absolute;
  top: 4px;
  left: -1.95rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.$gold ? 'var(--accent-gold, #e8c36a)' : 'var(--primary-cyan, #00ffc8)'};
  box-shadow: 0 0 10px ${props => props.$gold ? 'var(--accent-gold, #e8c36a)' : 'var(--primary-cyan, #00ffc8)'};

  @media (max-width: 768px) {
    left: -1.45rem;
  }
`;

export const NodeHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const NodeRole = styled.span`
  font-family: var(--font-title, 'Cinzel', serif);
  font-weight: 700;
  font-size: 1.15rem;
  color: #fff;
`;

export const NodeCompany = styled.span`
  color: var(--primary-cyan, #00ffc8);
  font-size: 0.95rem;
`;

export const NodeMeta = styled.p`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.78rem;
  color: var(--accent-gold, #e8c36a);
  margin: 0.25rem 0 0.75rem;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BulletItem = styled.li`
  font-size: 0.92rem;
  color: var(--text-muted, #cbd5e1);
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const Colophon = styled.p`
  margin-top: 3rem;
  text-align: center;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.78rem;
  color: var(--text-dim, #94a3b8);
  letter-spacing: 0.1em;
`;
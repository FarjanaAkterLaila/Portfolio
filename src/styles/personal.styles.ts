import styled from 'styled-components';

export const PersonalView = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
`;

export const PersonalPage = styled.div`
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

export const PersonalHero = styled.div`
  position: relative;
  width: 100%;
  min-height: 380px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 4rem 3rem 3rem;

  @media (max-width: 768px) {
    min-height: 240px !important;
    padding: 2rem 1rem 1.5rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const PersonalHeroBg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: contrast(1.1) brightness(0.85);
`;

export const PersonalHeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(3, 6, 13, 0.4) 0%,
    rgba(3, 6, 13, 0.8) 70%,
    var(--bg-deep, #03060d) 100%
  );
`;

export const PersonalHeroText = styled.div`
  position: relative;
  z-index: 5;
  max-width: 700px;
`;

export const HeroKicker = styled.p`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.82rem;
  letter-spacing: 0.25em;
  color: var(--accent-gold, #e8c36a);
  text-transform: uppercase;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 0.72rem;
  }
`;

export const HeroTitle = styled.h1`
  font-family: var(--font-title, 'Cinzel', serif);
  font-weight: 900;
  font-size: 3rem;
  letter-spacing: 0.06em;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 5.5vw, 2.2rem) !important;
  }
`;

export const HeroDesc = styled.p`
  font-size: 1.05rem;
  color: var(--text-surface, #f8fafc);
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 0.92rem;
  }
`;

export const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem 8rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0.75rem 4rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1.75rem;

  @media (max-width: 768px) {
    display: flex !important;
    flex-direction: column !important;
    gap: 1.25rem !important;
    width: 100% !important;
  }
`;

export const PersonalCard = styled.div`
  background: var(--bg-card, rgba(14, 23, 42, 0.72));
  border: 1px solid rgba(0, 243, 255, 0.25);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    border-color: var(--primary-cyan, #00ffc8);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 200, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
    &:hover { transform: none; }
  }
`;

export const CardIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.75rem;
  line-height: 1.35;
`;

export const CardDesc = styled.p`
  font-size: 0.92rem;
  color: var(--text-muted, #cbd5e1);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex: 1;
`;

export const CardTag = styled.div`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--accent-gold, #e8c36a);
  text-transform: uppercase;
  margin-top: auto;
`;
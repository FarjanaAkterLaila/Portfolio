import styled from 'styled-components';

export const TransmissionsView = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
`;

export const TransmissionsPage = styled.div`
  min-height: 100vh;
  padding: calc(var(--nav-height, 4.75rem) + 3rem) 1.5rem 8rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 20;

  @media (max-width: 768px) {
    padding: calc(var(--nav-height, 4.25rem) + 1.5rem) 0.75rem 4rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const TransmissionsHeader = styled.div`
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 2rem !important;
    padding: 0 0.5rem !important;
  }
`;

export const KickerTag = styled.p`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  color: var(--accent-gold, #e8c36a);
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

export const TransmissionsTitle = styled.h1`
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 2.8rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: clamp(1.6rem, 5.5vw, 2.2rem) !important;
  }
`;

export const TransmissionsSubtitle = styled.p`
  font-size: 1.05rem;
  color: var(--text-muted, #cbd5e1);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 0.92rem;
  }
`;

export const TransmissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.25rem !important;
    width: 100% !important;
  }
`;

export const TransmissionCard = styled.article`
  background: var(--bg-card, rgba(14, 23, 42, 0.72));
  border: 1px solid rgba(0, 255, 200, 0.25);
  border-radius: 16px;
  padding: 2.2rem 2.5rem;
  backdrop-filter: blur(14px);
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    border-color: var(--primary-cyan, #00ffc8);
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 24px rgba(0, 255, 200, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
    &:hover { transform: none; }
  }
`;

export const CardHeaderStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.75rem;

  @media (max-width: 768px) {
    gap: 0.4rem !important;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

export const CycleTag = styled.span`
  color: var(--accent-gold, #e8c36a);
  font-weight: 700;
`;

export const ReadTime = styled.span`
  color: var(--text-dim, #94a3b8);
`;

export const TopicTag = styled.span`
  color: var(--primary-cyan, #00ffc8);
  background: rgba(0, 255, 200, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
`;

export const CoherencePill = styled.span`
  color: var(--primary-cyan, #00ffc8);
  border: 1px solid rgba(0, 255, 200, 0.3);
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.68rem;
`;

export const TransmissionHeadline = styled.h2`
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 1.45rem;
  color: #fff;
  margin-bottom: 0.85rem;
  line-height: 1.35;

  @media (max-width: 768px) {
    font-size: 1.15rem !important;
  }
`;

export const TransmissionExcerpt = styled.p`
  font-size: 0.95rem;
  color: var(--text-muted, #cbd5e1);
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReadMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--primary-cyan, #00ffc8);
  font-weight: 700;
  text-decoration: none;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    color: #fff;
    text-shadow: 0 0 10px var(--primary-cyan, #00ffc8);
  }
`;

export const InternalNote = styled.span`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  color: var(--text-dim, #94a3b8);
  font-style: italic;
`;
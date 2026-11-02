import styled from 'styled-components';

export const CvView = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
`;

export const DossierPage = styled.div`
  min-height: 100vh;
  padding: calc(var(--nav-height, 4.75rem) + 2rem) 1.5rem 8rem;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 20;

  @media (max-width: 768px) {
    padding: calc(var(--nav-height, 4.25rem) + 1.25rem) 0.5rem 4rem !important;
    width: 100% !important;
    overflow-x: hidden !important;
  }
`;

export const ToolbarContainer = styled.div`
  width: 100%;
  max-width: 820px;
  margin-bottom: 2rem;
  position: sticky;
  top: 5rem;
  z-index: 40;

  /* On mobile: Never stick or float on top of the CV. Scrolls naturally so the CV is 100% visible */
  @media (max-width: 768px) {
    position: relative !important;
    top: auto !important;
    width: 100% !important;
    margin-bottom: 1.5rem !important;
    z-index: 10 !important;
  }
`;

export const ToolbarGlass = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.75rem 1.25rem;
  background: rgba(13, 20, 36, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border-cyan, rgba(0, 255, 200, 0.35));
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    flex-direction: row !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0.5rem 0.65rem !important;
    gap: 0.4rem !important;
  }
`;

export const ToolbarBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--accent-gold, #e8c36a);

  /* Hide badge text on mobile so buttons fit cleanly in a single compact row */
  @media (max-width: 768px) {
    display: none !important;
  }
`;

export const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-gold, #e8c36a);
  box-shadow: 0 0 8px var(--accent-gold, #e8c36a);
`;

export const ToolbarActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100% !important;
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between !important;
    align-items: center !important;
    gap: 0.4rem !important;
  }
`;

export const ActionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  line-height: 1.2;

  .full-text {
    display: inline;
  }
  .short-text {
    display: none;
  }

  @media (max-width: 768px) {
    .full-text {
      display: none !important;
    }
    .short-text {
      display: inline !important;
    }
  }
`;

export const CvActionLink = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.48rem 0.85rem;
  border-radius: 8px;
  background: ${props => props.$primary ? 'rgba(0, 255, 200, 0.16)' : 'rgba(255, 255, 255, 0.06)'};
  border: 1px solid ${props => props.$primary ? 'var(--primary-cyan, #00ffc8)' : 'rgba(255, 255, 255, 0.18)'};
  color: ${props => props.$primary ? 'var(--primary-cyan, #00ffc8)' : '#ffffff'};
  font-family: var(--font-body, 'Outfit', -apple-system, sans-serif);
  font-weight: 600;
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: var(--transition-smooth, 280ms ease);
  cursor: pointer;
  white-space: nowrap;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: var(--primary-cyan, #00ffc8);
    color: #03060d;
    box-shadow: 0 0 16px rgba(0, 255, 200, 0.3);
  }

  @media (max-width: 768px) {
    flex: 1 1 0 !important;
    min-width: 0 !important;
    padding: 0.5rem 0.5rem !important;
    font-size: 0.78rem !important;
    gap: 0.35rem !important;
  }

  @media (max-width: 360px) {
    padding: 0.45rem 0.35rem !important;
    font-size: 0.74rem !important;
    gap: 0.25rem !important;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const CvActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.48rem 0.85rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #ffffff;
  font-family: var(--font-body, 'Outfit', -apple-system, sans-serif);
  font-weight: 600;
  font-size: 0.82rem;
  letter-spacing: 0.02em;
  transition: var(--transition-smooth, 280ms ease);
  cursor: pointer;
  white-space: nowrap;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    background: var(--accent-gold, #e8c36a);
    color: #03060d;
    box-shadow: 0 0 16px rgba(232, 195, 106, 0.3);
  }

  @media (max-width: 768px) {
    flex: 1 1 0 !important;
    min-width: 0 !important;
    padding: 0.5rem 0.5rem !important;
    font-size: 0.78rem !important;
    gap: 0.35rem !important;
  }

  @media (max-width: 360px) {
    padding: 0.45rem 0.35rem !important;
    font-size: 0.74rem !important;
    gap: 0.25rem !important;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

export const CvDocument = styled.div`
  width: 100%;
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 100% !important;
    max-width: 100% !important;
    gap: 1.5rem !important;
    margin-top: 0.5rem !important;
  }
`;

export const CvPageCard = styled.article`
  position: relative;
  width: 100%;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.75), 0 0 1px rgba(255, 255, 255, 0.15);
  overflow: hidden;
  line-height: 0;
  transition: transform 240ms ease, box-shadow 240ms ease;

  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.85), 0 0 16px rgba(0, 255, 200, 0.15);
  }

  @media (max-width: 768px) {
    width: 100% !important;
    max-width: 100% !important;
    border-radius: 4px !important;
  }
`;

export const CvPageImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const CvHotspotsLayer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

export const CvHotspotLink = styled.a`
  position: absolute;
  pointer-events: auto;
  border-radius: 3px;
  transition: background 150ms ease;

  &:hover {
    background: rgba(0, 255, 200, 0.2);
  }
`;

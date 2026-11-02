import styled, { keyframes } from 'styled-components';

const radarRing = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.4); opacity: 0; }
`;

const radarSweep = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ContactView = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 10;
`;

export const ContactPage = styled.div`
  min-height: 100vh;
  padding: calc(var(--nav-height, 4.75rem) + 3rem) 1.5rem 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 20;

  @media (max-width: 768px) {
    padding: calc(var(--nav-height, 4.25rem) + 1rem) 0.75rem 3rem !important;
    width: 100% !important;
    overflow-x: hidden !important;
  }
`;

export const TerminalShell = styled.div`
  width: 100%;
  max-width: 1100px;
  background: rgba(7, 12, 24, 0.92);
  border: 1px solid var(--border-cyan, rgba(0, 255, 200, 0.35));
  border-radius: 18px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 255, 200, 0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  overflow: hidden;

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`;

export const TerminalBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1.5rem;
  background: rgba(3, 6, 13, 0.95);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    flex-wrap: wrap !important;
    gap: 0.5rem !important;
    padding: 0.75rem 0.85rem !important;
  }
`;

export const TerminalDots = styled.div`
  display: flex;
  gap: 6px;
`;

export const TerminalDot = styled.span<{ $color: 'red' | 'yellow' | 'green' }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => {
    switch (props.$color) {
      case 'red': return '#ff5f56';
      case 'yellow': return '#ffbd2e';
      case 'green': return '#27c93f';
    }
  }};
`;

export const TerminalTitle = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: var(--text-muted, #cbd5e1);

  @media (max-width: 768px) {
    order: 3 !important;
    width: 100% !important;
    font-size: 0.6rem !important;
    word-break: break-all !important;
    margin: 0.25rem 0 0 !important;
  }
`;

export const TerminalStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.68rem;
  color: var(--primary-cyan, #00ffc8);

  @media (max-width: 768px) {
    margin-left: auto;
    font-size: 0.62rem;
  }
`;

export const PingBeacon = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-cyan, #00ffc8);
  box-shadow: 0 0 8px var(--primary-cyan, #00ffc8);
  animation: ${radarRing} 1.5s infinite;
`;

export const TerminalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  padding: 3rem;
  gap: 3.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    display: flex !important;
    flex-direction: column !important;
    padding: 1.25rem 0.85rem !important;
    gap: 1.75rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const CommsDossier = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RelayBannerCard = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 255, 200, 0.3);
`;

export const RelayBannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: contrast(1.1) brightness(0.9);
`;

export const RelayScrim = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(3, 6, 13, 0.1) 0%,
    rgba(3, 6, 13, 0.7) 70%,
    rgba(3, 6, 13, 0.95) 100%
  );
`;

export const RelayBadge = styled.div`
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  right: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(9, 14, 28, 0.88);
  padding: 0.5rem 0.85rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 255, 200, 0.4);
`;

export const RadarCircle = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  min-width: 20px;
  border-radius: 50%;
  border: 1px solid var(--primary-cyan, #00ffc8);
`;

export const RadarSweep = styled.span`
  position: absolute;
  inset: 0;
  border-top: 2px solid var(--primary-cyan, #00ffc8);
  border-radius: 50%;
  animation: ${radarSweep} 2s infinite linear;
`;

export const RadarDot = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--primary-cyan, #00ffc8);
`;

export const RelayMeta = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RelayTag = styled.span`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.62rem;
  color: var(--primary-cyan, #00ffc8);
  font-weight: 700;
  letter-spacing: 0.05em;
`;

export const RelayCoords = styled.span`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.62rem;
  color: var(--text-dim, #94a3b8);
`;

export const DossierHeadline = styled.h2`
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 2.2rem;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem !important;
  }
`;

export const DossierDesc = styled.p`
  font-size: 0.98rem;
  color: var(--text-muted, #cbd5e1);
  line-height: 1.7;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export const ContactPointCard = styled.div`
  background: rgba(9, 14, 28, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 1rem 0.85rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const CpLabel = styled.span`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  color: var(--accent-gold, #e8c36a);
  display: block;
  margin-bottom: 0.5rem;
`;

export const CpValueRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 0.5rem !important;
  }
`;

export const CpValue = styled.span`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.95rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.85rem !important;
    word-break: break-all !important;
  }
`;

export const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.72rem;
  color: var(--primary-cyan, #00ffc8);
  background: rgba(0, 255, 200, 0.1);
  border: 1px solid rgba(0, 255, 200, 0.3);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  transition: var(--transition-smooth, 280ms ease);
  cursor: pointer;

  &:hover {
    background: var(--primary-cyan, #00ffc8);
    color: #03060d;
  }

  svg {
    width: 12px;
    height: 12px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
  }
`;

export const CoordsBox = styled.div`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.82rem;
  color: var(--text-muted, #cbd5e1);
  margin-top: 0.35rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const SocialDeck = styled.div`
  margin-top: 1rem;
`;

export const SocialHeader = styled.span`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  color: var(--accent-gold, #e8c36a);
  display: block;
  margin-bottom: 0.75rem;
`;

export const SocialButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem !important;
    width: 100% !important;
  }
`;

export const SocialBtn = styled.a`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.75rem;
  color: var(--text-surface, #f8fafc);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    border-color: var(--primary-cyan, #00ffc8);
    color: var(--primary-cyan, #00ffc8);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 0.5rem) !important;
    min-width: 110px !important;
    text-align: center !important;
    justify-content: center !important;
    display: flex !important;
  }

  @media (max-width: 480px) {
    flex: 1 1 100% !important;
    width: 100% !important;
  }
`;

export const CommsFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CommsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const FormLabel = styled.label`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.68rem;
  letter-spacing: 0.1em;
  color: var(--text-dim, #94a3b8);
`;

export const FormInput = styled.input`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.95rem;
  padding: 0.85rem 1.15rem;
  background: rgba(3, 6, 13, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #fff;
  transition: var(--transition-smooth, 280ms ease);
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: var(--primary-cyan, #00ffc8);
    box-shadow: 0 0 12px rgba(0, 255, 200, 0.25);
  }
`;

export const FormSelect = styled.select`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.9rem;
  padding: 0.85rem 1.15rem;
  background: #03060d;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #fff;
  transition: var(--transition-smooth, 280ms ease);
  outline: none;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: var(--primary-cyan, #00ffc8);
    box-shadow: 0 0 12px rgba(0, 255, 200, 0.25);
  }
`;

export const FormTextarea = styled.textarea`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.95rem;
  padding: 0.85rem 1.15rem;
  background: rgba(3, 6, 13, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: #fff;
  transition: var(--transition-smooth, 280ms ease);
  outline: none;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    border-color: var(--primary-cyan, #00ffc8);
    box-shadow: 0 0 12px rgba(0, 255, 200, 0.25);
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, rgba(0, 255, 200, 0.2), rgba(0, 243, 255, 0.3));
  border: 1px solid var(--primary-cyan, #00ffc8);
  border-radius: 10px;
  color: #fff;
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    background: var(--primary-cyan, #00ffc8);
    color: #03060d;
    box-shadow: 0 0 24px rgba(0, 255, 200, 0.5);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

export const BtnGlow = styled.span`
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 12px rgba(0, 255, 200, 0.3);
`;

export const BtnText = styled.span`
  position: relative;
  z-index: 2;
`;

export const StatusBanner = styled.div<{ $type: 'success' | 'error' }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-radius: 10px;
  background: ${props => props.$type === 'success' ? 'rgba(0, 255, 200, 0.1)' : 'rgba(255, 95, 86, 0.1)'};
  border: 1px solid ${props => props.$type === 'success' ? 'var(--primary-cyan, #00ffc8)' : '#ff5f56'};
  color: #fff;
  font-size: 0.85rem;
`;

export const StatusDot = styled.span<{ $type: 'success' | 'error' }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$type === 'success' ? 'var(--primary-cyan, #00ffc8)' : '#ff5f56'};
  box-shadow: 0 0 8px ${props => props.$type === 'success' ? 'var(--primary-cyan, #00ffc8)' : '#ff5f56'};
`;

export const StatusText = styled.span`
  flex: 1;
`;
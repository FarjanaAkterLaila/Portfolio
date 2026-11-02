import styled, { keyframes } from 'styled-components';

const modalFadeIn = keyframes`
  from { opacity: 0; transform: scale(0.96) translateY(12px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 4, 10, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const ModalDialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 760px;
  max-height: 85vh;
  overflow-y: auto;
  background: rgba(9, 14, 28, 0.98);
  border: 1px solid var(--border-cyan, rgba(0, 255, 200, 0.35));
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 255, 200, 0.15);
  animation: ${modalFadeIn} 240ms cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: 1.5rem 1.15rem !important;
    max-height: 90vh !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    background: rgba(255, 95, 86, 0.2);
    border-color: #ff5f56;
    color: #ff5f56;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-right: 2rem;
`;

export const ModalKicker = styled.p`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  color: var(--accent-gold, #e8c36a);
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`;

export const ModalTitle = styled.h2`
  font-family: var(--font-title, 'Cinzel', serif);
  font-size: 1.85rem;
  color: #fff;
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const CodexGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
    gap: 1.25rem !important;
  }
`;

export const CodexBlock = styled.div`
  background: rgba(12, 18, 34, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 1.25rem;
`;

export const CodexLabel = styled.h3`
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--primary-cyan, #00ffc8);
  margin-bottom: 0.6rem;
  text-transform: uppercase;
`;

export const CodexText = styled.p`
  font-size: 0.9rem;
  color: var(--text-muted, #cbd5e1);
  line-height: 1.65;
`;

export const MetricsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

export const MetricItem = styled.li`
  font-size: 0.88rem;
  color: var(--text-surface, #f8fafc);
  display: flex;
  align-items: baseline;
  gap: 0.45rem;

  &::before {
    content: '◈';
    color: var(--accent-gold, #e8c36a);
    font-size: 0.75rem;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  flex-wrap: wrap;
`;

export const ExternalLinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  border-radius: 8px;
  background: var(--primary-cyan, #00ffc8);
  color: #03060d;
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    box-shadow: 0 0 20px rgba(0, 255, 200, 0.5);
  }
`;
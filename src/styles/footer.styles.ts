import styled from 'styled-components';

export const RealmFooter = styled.footer`
  position: relative;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(3, 6, 13, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 2rem 0;
  z-index: 30;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

export const FooterInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
    gap: 0.85rem;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const CopyrightLine = styled.p`
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.78rem;
  color: var(--text-dim, #94a3b8);
  margin: 0;
`;

export const FooterNav = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

export const FooterLink = styled.a`
  font-size: 0.82rem;
  color: var(--text-muted, #cbd5e1);
  text-decoration: none;
  transition: var(--transition-smooth, 280ms ease);

  &:hover {
    color: var(--primary-cyan, #00ffc8);
  }
`;
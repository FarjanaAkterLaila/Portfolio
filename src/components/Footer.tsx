import React from 'react';
import { ViewId } from '../types';
import {
  RealmFooter,
  FooterInner,
  FooterLeft,
  CopyrightLine,
  FooterNav,
  FooterLink
} from '../styles/footer.styles';

interface FooterProps {
  onNavigate: (viewId: ViewId) => void;
}

export default function Footer({ onNavigate }: FooterProps): React.JSX.Element {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, viewId: ViewId) => {
    e.preventDefault();
    onNavigate(viewId);
  };

  return (
    <RealmFooter>
      <FooterInner>
        <FooterLeft>
          <CopyrightLine>&copy; 2026 Farjana Akter Laila</CopyrightLine>
        </FooterLeft>
        <FooterNav>
          <FooterLink href="/" onClick={(e) => handleNav(e, 'about')}>About</FooterLink>
          <FooterLink href="/projects" onClick={(e) => handleNav(e, 'projects')}>Projects</FooterLink>
          <FooterLink href="/personal" onClick={(e) => handleNav(e, 'personal')}>Personal</FooterLink>
          <FooterLink href="/blog" onClick={(e) => handleNav(e, 'blog')}>Transmissions</FooterLink>
          <FooterLink href="/contact" onClick={(e) => handleNav(e, 'contact')}>Contact</FooterLink>
          <FooterLink href="/cv" onClick={(e) => handleNav(e, 'cv')}>Dossier</FooterLink>
        </FooterNav>
      </FooterInner>
    </RealmFooter>
  );
}

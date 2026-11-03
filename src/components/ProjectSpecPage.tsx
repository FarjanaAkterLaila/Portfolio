import React, { useEffect } from 'react';
import { PROJECT_CODEX } from '../data/projectsData';
import { SfxType } from '../types';
import {
  ModalKicker,
  ModalTitle,
  CodexGrid,
  CodexBlock,
  CodexLabel,
  CodexText,
  MetricsList,
  MetricItem,
  ModalFooter,
  ExternalLinkBtn
} from '../styles/modal.styles';
import styled from 'styled-components';

const Page = styled.article`
  width: min(860px, calc(100% - 2rem));
  margin: 6.5rem auto 3rem;
  position: relative;
  z-index: 10;
`;

const Hero = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 14px;
  margin: 1rem 0 1.5rem;
  border: 1px solid rgba(0, 255, 200, 0.25);
`;

const BackLink = styled.a`
  display: inline-flex;
  margin-bottom: 1rem;
  color: var(--primary-cyan, #00ffc8);
  font-family: var(--font-kicker, 'Orbitron', monospace);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-decoration: none;
`;

interface ProjectSpecPageProps {
  projectKey: string;
  onBack: () => void;
  playSfx: (type?: SfxType) => void;
}

const DEFAULT_TITLE = 'Farjana Akter Laila';
const DEFAULT_DESCRIPTION = 'Portfolio of Farjana Akter Laila - Mid-level Developer with 1.5+ years experience in React Native, Expo, Next.js, and published AI/NLP researcher. Built with React.';

export default function ProjectSpecPage({ projectKey, onBack, playSfx }: ProjectSpecPageProps): React.JSX.Element {
  const project = PROJECT_CODEX[projectKey];

  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (!project) {
      document.title = `Project not found | ${DEFAULT_TITLE}`;
      return;
    }
    document.title = `${project.title} | ${DEFAULT_TITLE}`;
    meta?.setAttribute('content', project.description);
    return () => {
      document.title = DEFAULT_TITLE;
      meta?.setAttribute('content', DEFAULT_DESCRIPTION);
    };
  }, [project]);

  if (!project) {
    return (
      <Page>
        <BackLink href="/projects" onClick={(e) => { e.preventDefault(); onBack(); }}>← ALL PROJECTS</BackLink>
        <ModalTitle>Spec not found</ModalTitle>
      </Page>
    );
  }

  const links = [
    project.liveUrl ? { href: project.liveUrl, label: project.liveLabel || 'Live' } : null,
    project.playStoreUrl ? { href: project.playStoreUrl, label: 'Google Play' } : null,
    project.appStoreUrl ? { href: project.appStoreUrl, label: 'App Store' } : null,
    project.publicationUrl ? { href: project.publicationUrl, label: 'Publication' } : null,
    project.githubUrl ? { href: project.githubUrl, label: 'GitHub' } : null
  ].filter((link): link is { href: string; label: string } => Boolean(link));

  return (
    <Page>
      <BackLink
        href="/projects"
        onClick={(e) => {
          e.preventDefault();
          playSfx('click');
          onBack();
        }}
      >
        ← ALL PROJECTS
      </BackLink>
      <ModalKicker>{project.categoryBadge}</ModalKicker>
      <ModalTitle as="h1">{project.title}</ModalTitle>
      <Hero src={project.image} alt="" />

      <CodexGrid>
        <CodexBlock>
          <CodexLabel>Description</CodexLabel>
          <CodexText>{project.description}</CodexText>
        </CodexBlock>
        <CodexBlock>
          <CodexLabel>Stack</CodexLabel>
          <MetricsList>
            {project.stack.map((tech) => (
              <MetricItem key={tech}>{tech}</MetricItem>
            ))}
          </MetricsList>
        </CodexBlock>
      </CodexGrid>

      <CodexBlock style={{ marginBottom: '1.25rem' }}>
        <CodexLabel>What I built</CodexLabel>
        <MetricsList>
          {project.highlights.map((item) => (
            <MetricItem key={item}>{item}</MetricItem>
          ))}
        </MetricsList>
      </CodexBlock>

      {project.metrics.length > 0 && (
        <CodexBlock style={{ marginBottom: '1.25rem' }}>
          <CodexLabel>Outcomes</CodexLabel>
          <MetricsList>
            {project.metrics.map((item) => (
              <MetricItem key={item}>{item}</MetricItem>
            ))}
          </MetricsList>
        </CodexBlock>
      )}

      {links.length > 0 && (
        <ModalFooter>
          {links.map((link) => (
            <ExternalLinkBtn
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSfx('click')}
            >
              {link.label}
            </ExternalLinkBtn>
          ))}
        </ModalFooter>
      )}
    </Page>
  );
}

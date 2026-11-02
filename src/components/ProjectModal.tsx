import React, { useEffect } from 'react';
import { PROJECT_CODEX } from '../data/projectsData';
import { SfxType } from '../types';
import {
  ModalBackdrop,
  ModalDialog,
  ModalCloseBtn,
  ModalHeader,
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

interface ProjectModalProps {
  projectKey: string | null;
  onClose: () => void;
  playSfx: (type?: SfxType) => void;
}

export default function ProjectModal({ projectKey, onClose, playSfx }: ProjectModalProps): React.JSX.Element | null {
  const project = projectKey ? PROJECT_CODEX[projectKey] : null;

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  const handleClose = () => {
    playSfx('click');
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const externalLink = project.liveUrl || project.publicationUrl || project.playStoreUrl;

  return (
    <ModalBackdrop
      id="project-modal-backdrop"
      aria-hidden="false"
      onClick={handleBackdropClick}
    >
      <ModalDialog role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
        <ModalCloseBtn
          type="button"
          id="modal-close-btn"
          onClick={handleClose}
          aria-label="Close Project Codex"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </ModalCloseBtn>

        <ModalHeader>
          <ModalKicker>ARTIFACT CODEX // {project.id.toUpperCase()}</ModalKicker>
          <ModalTitle id="modal-project-title">{project.title}</ModalTitle>
        </ModalHeader>

        <CodexGrid>
          <CodexBlock>
            <CodexLabel>ARCHITECTURAL MISSION</CodexLabel>
            <CodexText>{project.description}</CodexText>
          </CodexBlock>

          <CodexBlock>
            <CodexLabel>ENGINEERED STACK</CodexLabel>
            <MetricsList>
              {project.stack.map((tech: string, i: number) => (
                <MetricItem key={i}>{tech}</MetricItem>
              ))}
            </MetricsList>
          </CodexBlock>
        </CodexGrid>

        <CodexBlock style={{ marginBottom: '1.5rem' }}>
          <CodexLabel>KEY HIGHLIGHTS &amp; ARCHITECTURAL SCOPE</CodexLabel>
          <MetricsList>
            {project.highlights.map((h: string, i: number) => (
              <MetricItem key={i}>{h}</MetricItem>
            ))}
          </MetricsList>
        </CodexBlock>

        <ModalFooter>
          {externalLink && (
            <ExternalLinkBtn
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSfx('warp')}
            >
              <span>ACCESS DEPLOYMENT</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
            </ExternalLinkBtn>
          )}
        </ModalFooter>
      </ModalDialog>
    </ModalBackdrop>
  );
}
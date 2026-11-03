import React, { useState } from 'react';
import { PROJECT_CODEX } from '../data/projectsData';
import { SfxType } from '../types';
import {
  ProjectsView,
  ProjectsPage,
  CitadelHero,
  CitadelHeroBg,
  CitadelHeroImg,
  CitadelGradient,
  CitadelContent,
  CitadelKicker,
  CitadelTitle,
  CitadelSubtitle,
  FilterPills,
  FilterPillButton,
  ProjectsContainer,
  ProjectsGrid,
  RealmCard,
  CardRod,
  RodBar,
  RodCord,
  CardShell,
  CornerSvg,
  MediaWrap,
  MediaPattern,
  HoloPill,
  BadgeCode,
  BadgeStatus,
  BeaconDot,
  CardBody,
  ArtifactKicker,
  ArtifactTitle,
  ArtifactDesc,
  TechStackRow,
  TechChip,
  CardActionsRow,
  CodexButton,
  LiveLinkButton
} from '../styles/projects.styles';

interface ProjectsSectionProps {
  onOpenSpec: (projectKey: string) => void;
  playSfx: (type?: SfxType) => void;
}

export default function ProjectsSection({ onOpenSpec, playSfx }: ProjectsSectionProps): React.JSX.Element {
  const [filter, setFilter] = useState<string>('all');

  const handleFilterClick = (newFilter: string) => {
    setFilter(newFilter);
    playSfx('click');

    // Smoothly scroll down so the filtered project cards are immediately visible in view
    setTimeout(() => {
      const gridElement = document.getElementById('projects-grid');
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const projects = Object.entries(PROJECT_CODEX);
  const filteredProjects = projects.filter(([_, project]) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <ProjectsView id="view-projects" aria-label="Projects Realm - Citadel of Xenotech">
      <ProjectsPage>
        {/* Citadel Hero Banner */}
        <CitadelHero>
          <CitadelHeroBg>
            <CitadelHeroImg src="/citadel_xenotech.jpg" alt="Crystalline Spire Citadel of Xenotech" />
            <CitadelGradient />
          </CitadelHeroBg>

          <CitadelContent>
            <CitadelKicker>High Spire of Xenotech</CitadelKicker>
            <CitadelTitle>PROJECTS &amp; ARTIFACTS</CitadelTitle>
            <CitadelSubtitle>Select a system to open its spec.</CitadelSubtitle>

            {/* Category Filter Pills */}
            <FilterPills id="project-filters">
              <FilterPillButton
                $active={filter === 'all'}
                onClick={() => handleFilterClick('all')}
              >
                All Systems (5)
              </FilterPillButton>
              <FilterPillButton
                $active={filter === 'mobile'}
                onClick={() => handleFilterClick('mobile')}
              >
                Mobile Apps (1)
              </FilterPillButton>
              <FilterPillButton
                $active={filter === 'web'}
                onClick={() => handleFilterClick('web')}
              >
                Web &amp; Platforms (3)
              </FilterPillButton>
              <FilterPillButton
                $active={filter === 'systems'}
                onClick={() => handleFilterClick('systems')}
              >
                AI &amp; Research (1)
              </FilterPillButton>
            </FilterPills>
          </CitadelContent>
        </CitadelHero>

        {/* Projects Grid */}
        <ProjectsContainer>
          <ProjectsGrid id="projects-grid" style={{ scrollMarginTop: '100px' }}>
            {filteredProjects.map(([key, item]) => {
              const externalLink = item.liveUrl || item.publicationUrl || item.playStoreUrl;

              return (
                <RealmCard
                  key={key}
                  id={`card-${key}`}
                >
                  <CardRod aria-hidden="true">
                    <RodBar />
                    <RodCord $side="left" />
                    <RodCord $side="right" />
                  </CardRod>

                  <CardShell>
                    <CornerSvg $position="tl" viewBox="0 0 56 56" fill="none"><path d="M3 30V9.5C3 5.9 5.9 3 9.5 3H30" stroke="currentColor" strokeWidth="1.2" /><circle cx="9" cy="9" r="2" fill="currentColor" /></CornerSvg>
                    <CornerSvg $position="tr" viewBox="0 0 56 56" fill="none"><path d="M3 30V9.5C3 5.9 5.9 3 9.5 3H30" stroke="currentColor" strokeWidth="1.2" /><circle cx="9" cy="9" r="2" fill="currentColor" /></CornerSvg>
                    <CornerSvg $position="bl" viewBox="0 0 56 56" fill="none"><path d="M3 30V9.5C3 5.9 5.9 3 9.5 3H30" stroke="currentColor" strokeWidth="1.2" /><circle cx="9" cy="9" r="2" fill="currentColor" /></CornerSvg>
                    <CornerSvg $position="br" viewBox="0 0 56 56" fill="none"><path d="M3 30V9.5C3 5.9 5.9 3 9.5 3H30" stroke="currentColor" strokeWidth="1.2" /><circle cx="9" cy="9" r="2" fill="currentColor" /></CornerSvg>

                    <MediaWrap>
                      <MediaPattern style={{ backgroundImage: `url('${item.image}')` }}>
                        <HoloPill>
                          <BadgeCode>{item.id.toUpperCase()}</BadgeCode>
                          <BadgeStatus>
                            <BeaconDot />
                            ACTIVE SYSTEM
                          </BadgeStatus>
                        </HoloPill>
                      </MediaPattern>
                    </MediaWrap>

                    <CardBody>
                      <ArtifactKicker>{item.categoryBadge}</ArtifactKicker>
                      <ArtifactTitle>{item.title}</ArtifactTitle>
                      <ArtifactDesc>{item.summary}</ArtifactDesc>

                      <TechStackRow>
                        {(item.stack || []).slice(0, 3).map((tech: string, i: number) => (
                          <TechChip key={i}>{tech}</TechChip>
                        ))}
                      </TechStackRow>

                      <CardActionsRow>
                        <CodexButton
                          href={`/projects/${key}`}
                          onClick={(e) => {
                            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                            e.preventDefault();
                            playSfx('warp');
                            onOpenSpec(key);
                          }}
                        >
                          <span>OPEN SPEC</span>
                          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </CodexButton>

                        {externalLink && (
                          <LiveLinkButton
                            href={externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit Live Application"
                            onClick={() => playSfx('click')}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                          </LiveLinkButton>
                        )}
                      </CardActionsRow>
                    </CardBody>
                  </CardShell>
                </RealmCard>
              );
            })}
          </ProjectsGrid>
        </ProjectsContainer>
      </ProjectsPage>
    </ProjectsView>
  );
}

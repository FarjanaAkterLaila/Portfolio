import React from 'react';
import { Article, SfxType } from '../types';
import {
  TransmissionsView,
  TransmissionsPage,
  TransmissionsHeader,
  KickerTag,
  TransmissionsTitle,
  TransmissionsSubtitle,
  TransmissionsContainer,
  TransmissionCard,
  CardHeaderStrip,
  HeaderLeft,
  CycleTag,
  ReadTime,
  TopicTag,
  CoherencePill,
  TransmissionHeadline,
  TransmissionExcerpt,
  CardFooter,
  ReadMoreButton,
  InternalNote
} from '../styles/blog.styles';

interface BlogSectionProps {
  playSfx: (type?: SfxType) => void;
}

export default function BlogSection({ playSfx }: BlogSectionProps): React.JSX.Element {
  const articles: Article[] = [
    {
      id: 1,
      cycle: 'CYCLE 2026.06',
      readTime: '12 MIN READ',
      tag: 'WILEY PUBLICATION // NLP',
      coherence: '99.8% COHERENCE',
      headline: 'Advanced Sarcasm Detection with Transformers: Dissecting Formal vs. Informal Language',
      excerpt: 'A deep dive into our peer-reviewed research published in Wiley on how transformer neural architectures capture subtle sarcastic cues across diverse syntactic structures and informal conversational registers.',
      link: 'https://onlinelibrary.wiley.com/journal/acisc'
    },
    {
      id: 2,
      cycle: 'CYCLE 2026.03',
      readTime: '8 MIN READ',
      tag: 'MOBILE & ARCHITECTURE',
      coherence: '99.4% COHERENCE',
      headline: 'Building Resilient Mobile Experiences with React Native, Expo Router & Apollo Client',
      excerpt: 'Architectural patterns for managing reactive GraphQL caches, real-time audio feeds, and seamless offline data queues in high-traffic cross-platform mobile products like Soundmade.',
      link: null
    },
    {
      id: 3,
      cycle: 'CYCLE 2026.01',
      readTime: '10 MIN READ',
      tag: 'FRONTEND ARCHITECTURE',
      coherence: '98.9% COHERENCE',
      headline: 'State Management at Scale: Balancing Zustand and React Query in Enterprise SaaS',
      excerpt: 'How decoupling server state caching with React Query and client operational state with Zustand delivers instant UI responsiveness across multi-tenant operational platforms like Foodime.',
      link: null
    },
    {
      id: 4,
      cycle: 'CYCLE 2025.11',
      readTime: '7 MIN READ',
      tag: 'ALGORITHMS & CP',
      coherence: '99.1% COHERENCE',
      headline: 'From C++ on Codeforces to Scalable Frontend Engineering: The Value of Algorithmic Rigor',
      excerpt: 'Reflections on solving 330+ competitive programming challenges on Codeforces and UVA, and how thinking in time and memory bounds elevates everyday application development.',
      link: null
    }
  ];

  return (
    <TransmissionsView id="view-blog" aria-label="Blog Realm - Subspace Transmissions">
      <TransmissionsPage>
        
        {/* Original Transmissions Header */}
        <TransmissionsHeader>
          <KickerTag>Subspace Relay Station</KickerTag>
          <TransmissionsTitle>SUBSPACE TRANSMISSIONS</TransmissionsTitle>
          <TransmissionsSubtitle>
            Deep architectural logs, engineering retrospectives, and peer-reviewed research insights.
          </TransmissionsSubtitle>
        </TransmissionsHeader>

        {/* Transmission Cards Container */}
        <TransmissionsContainer>
          {articles.map((art) => (
            <TransmissionCard
              key={art.id}
            >
              <CardHeaderStrip>
                <HeaderLeft>
                  <CycleTag>{art.cycle}</CycleTag>
                  <ReadTime>&middot; {art.readTime}</ReadTime>
                  <TopicTag>{art.tag}</TopicTag>
                </HeaderLeft>
                <CoherencePill>{art.coherence}</CoherencePill>
              </CardHeaderStrip>

              <TransmissionHeadline>{art.headline}</TransmissionHeadline>
              <TransmissionExcerpt>{art.excerpt}</TransmissionExcerpt>

              <CardFooter>
                {art.link ? (
                  <ReadMoreButton
                    href={art.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSfx('warp')}
                  >
                    <span>READ WILEY DISPATCH</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </ReadMoreButton>
                ) : (
                  <InternalNote>ARCHIVED INTERNAL CODENAME // RESTRICTED ACCESS</InternalNote>
                )}
              </CardFooter>
            </TransmissionCard>
          ))}
        </TransmissionsContainer>

      </TransmissionsPage>
    </TransmissionsView>
  );
}
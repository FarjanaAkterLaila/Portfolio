import React from 'react';
import {
  PersonalView,
  PersonalPage,
  PersonalHero,
  PersonalHeroBg,
  PersonalHeroOverlay,
  PersonalHeroText,
  HeroKicker,
  HeroTitle,
  HeroDesc,
  ContentContainer,
  CardsGrid,
  PersonalCard,
  CardIcon,
  CardTitle,
  CardDesc,
  CardTag
} from '../styles/personal.styles';

export default function PersonalSection(): React.JSX.Element {
  return (
    <PersonalView id="view-personal" aria-label="Personal Realm - The Lumina Glades">
      <PersonalPage>
        <PersonalHero>
          <PersonalHeroBg src="/alien_bg.jpg" alt="The Lumina Glades at twilight" />
          <PersonalHeroOverlay />
          <PersonalHeroText>
            <HeroKicker>Sanctuary of Curiosity</HeroKicker>
            <HeroTitle>THE LUMINA GLADES</HeroTitle>
            <HeroDesc>Where code gives way to wonder, exploration, and the quiet pursuits that replenish the intellect.</HeroDesc>
          </PersonalHeroText>
        </PersonalHero>

        <ContentContainer>
          <CardsGrid>
            {/* Card 1: Problem Solving & CP */}
            <PersonalCard>
              <CardIcon>&#9889;</CardIcon>
              <CardTitle>Competitive Programming &amp; Algorithmic Rigor</CardTitle>
              <CardDesc>Solved 253 problems on Codeforces and 80 problems on UVA in C/C++. Honed algorithmic sharpness, data structures, and computational optimization under strict constraints. Earned Best Performer at the IIUC CP Bootcamp 2021 and 3rd place in the IIUC Intra Dept. Contest.</CardDesc>
              <CardTag>Algorithmic Discipline</CardTag>
            </PersonalCard>

            {/* Card 2: Compiler Course TA */}
            <PersonalCard>
              <CardIcon>&#127891;</CardIcon>
              <CardTitle>Teaching &amp; Academic Mentorship</CardTitle>
              <CardDesc>Served as Teaching Assistant for the Compiler course at International Islamic University Chittagong (IIUC). Guided junior engineers through lexing, parsing algorithms, AST synthesis, syntax-directed translation, and semantic analysis.</CardDesc>
              <CardTag>Mentorship &amp; Academics</CardTag>
            </PersonalCard>

            {/* Card 3: IIUC Computer Club Leadership */}
            <PersonalCard>
              <CardIcon>&#127963;</CardIcon>
              <CardTitle>Community Leadership // IIUC Computer Club</CardTitle>
              <CardDesc>As an Executive Member of the IIUC Computer Club, I organized departmental programming contests, hackathons, and technology workshops. Passionate about empowering peers and fostering collaborative engineering growth.</CardDesc>
              <CardTag>Community Leadership</CardTag>
            </PersonalCard>

            {/* Card 4: Continuous Learning & Full Stack Craft */}
            <PersonalCard>
              <CardIcon>&#129355;</CardIcon>
              <CardTitle>Craft, Aesthetics &amp; Black Belt Achievement</CardTitle>
              <CardDesc>Earned the prestigious Black Belt achievement in Programming Hero (Batch-7), mastering the full-stack web lifecycle. Continually exploring the convergence of reactive mobile architectures, modern design systems, and deep NLP intelligence.</CardDesc>
              <CardTag>Engineering Ethos</CardTag>
            </PersonalCard>
          </CardsGrid>
        </ContentContainer>
      </PersonalPage>
    </PersonalView>
  );
}
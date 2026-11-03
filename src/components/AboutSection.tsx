import React from 'react';
import {
  AboutView,
  ManuscriptPage,
  SplitContainer,
  ArtPane,
  ArtSceneWrapper,
  VaultStage,
  VaultImage,
  FloatScreen,
  VaultScrim,
  VaultCaption,
  HoloBadge,
  HoloAvatarRing,
  HoloAvatarImage,
  HoloScanLine,
  HoloBadgeInfo,
  BadgeRole,
  BadgeOrg,
  BadgeLocation,
  DustField,
  DustMote,
  ManuscriptPane,
  ScrollWrapper,
  CyberRoller,
  RollerCore,
  RollerSpindle,
  RollerGlow,
  ScrollBody,
  PaperAged,
  ManuscriptInk,
  Kicker,
  Title,
  Subtitle,
  Divider,
  ChapterBlock,
  ChapterTitle,
  ChapterSubtitle,
  Paragraph,
  TextGlow,
  SkillsGrid,
  SkillGroupBox,
  SkillGroupTitle,
  SkillList,
  SkillItem,
  SkillGlyph,
  Timeline,
  TimelineNode,
  NodeMarker,
  NodeHeader,
  NodeRole,
  NodeCompany,
  NodeMeta,
  BulletList,
  BulletItem,
  Colophon
} from '../styles/about.styles';

export default function AboutSection(): React.JSX.Element {
  return (
    <AboutView id="view-about" aria-label="About Realm - The Bio-Archive Manuscript">
      <ManuscriptPage>
        <SplitContainer>
          
          {/* Left Side: Atmospheric Alien Vault Artwork & Holographic Avatar */}
          <ArtPane>
            <ArtSceneWrapper>
              <VaultStage>
                <VaultImage src="/alien_vault.jpg" alt="Ancient Alien Archive Vault with glowing data codex" />
                <VaultScrim />
                <FloatScreen aria-hidden="true" $top="38%" $left="6%" $w="54px" $h="36px" $tilt="-8deg" $delay="-1s" $duration="8s" />
                <FloatScreen aria-hidden="true" $top="52%" $left="10%" $w="42px" $h="28px" $tilt="6deg" $delay="-4s" $duration="10s" />
                <FloatScreen aria-hidden="true" $top="58%" $left="62%" $w="48px" $h="32px" $tilt="-4deg" $delay="-2s" $duration="9s" />
                <FloatScreen aria-hidden="true" $top="48%" $left="74%" $w="36px" $h="46px" $tilt="10deg" $delay="-6s" $duration="11s" />
              </VaultStage>
              
              {/* Holographic Engineer Card overlay */}
              <HoloBadge>
                <HoloAvatarRing>
                  <HoloAvatarImage src="/alien_avatar.jpg" alt="Farjana Akter Laila - Extraterrestrial Engineer" />
                  <HoloScanLine />
                </HoloAvatarRing>
                <HoloBadgeInfo>
                  <BadgeRole>MID-LEVEL DEVELOPER</BadgeRole>
                  <BadgeOrg>XIIA Remote &middot; Kepler Division</BadgeOrg>
                  <BadgeLocation>Chattogram, Bangladesh &middot; +880 1571736651</BadgeLocation>
                </HoloBadgeInfo>
              </HoloBadge>

              {/* Floating Dust Motes */}
              <DustField aria-hidden="true">
                <DustMote style={{ top: '20%', left: '30%' }} />
                <DustMote style={{ top: '45%', left: '70%' }} />
                <DustMote style={{ top: '65%', left: '25%' }} />
                <DustMote style={{ top: '80%', left: '60%' }} />
              </DustField>

              {/* Top caption (HIDDEN ON MOBILE to avoid navbar clash) */}
              <VaultCaption>THE SANCTUM OF XENOTECH ARCHIVES // SECTOR 01</VaultCaption>
            </ArtSceneWrapper>
          </ArtPane>

          {/* Right Side: The Cyber-Manuscript Scroll with Rollers */}
          <ManuscriptPane>
            <ScrollWrapper>
              
              {/* Top Roller */}
              <CyberRoller $position="top" aria-hidden="true">
                <RollerCore />
                <RollerSpindle />
                <RollerGlow />
              </CyberRoller>

              {/* Aged Cybernetic Paper Body */}
              <ScrollBody>
                <PaperAged>
                  <ManuscriptInk>
                    <Kicker>Sanctum of Kepler-452X</Kicker>
                    <Title>The Archive of Xenotech</Title>
                    <Subtitle>A manuscript of who I am, what I build, and where I have wandered.</Subtitle>

                    <Divider />

                    {/* Chapter I: Who I Am */}
                    <ChapterBlock>
                      <ChapterTitle>Chapter I &mdash; Who I Am</ChapterTitle>
                      <Paragraph>
                        I am <TextGlow>Farjana Akter Laila</TextGlow>, a Mid-level Software Developer with 1.5+ years of dedicated professional experience in web and mobile application engineering. Skilled in crafting responsive user interfaces, integrating mission-critical APIs, implementing new features, debugging and fixing complex issues, optimizing application performance, and collaborating closely with engineering cohorts. Looking to contribute to challenging projects while continuously improving my technical skills and growing as a software engineer.
                      </Paragraph>
                      <Paragraph>
                        Currently based at <strong>XIIA</strong>, my primary technical domain focuses on high-velocity client architectures across mobile and web: building fluid cross-platform applications with <strong>React Native, Expo, and Expo Router</strong>, paired with enterprise web platforms powered by <strong>React.js, Next.js, and TypeScript</strong>, with clean API and data layer integrations across <strong>Apollo Client, GraphQL, and PostgreSQL</strong>.
                      </Paragraph>
                      <Paragraph>
                        Beyond commercial product delivery, I have a deep passion for algorithmic problem solving &mdash; having solved over <strong>330+ competitive challenges on Codeforces and UVA</strong> &mdash; as well as artificial intelligence, having co-authored and published peer-reviewed research in <strong>Wiley</strong> on transformer-based sarcasm detection models.
                      </Paragraph>
                    </ChapterBlock>

                    {/* Chapter II: Technical Arsenal */}
                    <ChapterBlock>
                      <ChapterTitle>Chapter II &mdash; Technical Arsenal &amp; Skills</ChapterTitle>
                      <ChapterSubtitle>An inked inventory of technologies and specialized capabilities.</ChapterSubtitle>

                      <SkillsGrid>
                        {/* Mobile & Web Expertise */}
                        <SkillGroupBox>
                          <SkillGroupTitle>Expertise &amp; Frameworks</SkillGroupTitle>
                          <SkillList>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> React.js &amp; Next.js</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> React Native &amp; Expo</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Expo Router &amp; React Router</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Tailwind CSS &amp; Styled Components</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> React Query</SkillItem>
                          </SkillList>
                        </SkillGroupBox>

                        {/* Languages & Core */}
                        <SkillGroupBox>
                          <SkillGroupTitle>Languages &amp; Foundations</SkillGroupTitle>
                          <SkillList>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> TypeScript</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> JavaScript (ES6+)</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> C &amp; C++ (Algorithms)</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> HTML5 &amp; Modern CSS3</SkillItem>
                          </SkillList>
                        </SkillGroupBox>

                        {/* Backend & Data Layer */}
                        <SkillGroupBox>
                          <SkillGroupTitle>Backend &amp; State Management</SkillGroupTitle>
                          <SkillList>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> REST APIs &amp; Node.js / Express</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Apollo Client &amp; GraphQL</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> PostgreSQL &amp; MongoDB</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Redux, Zustand &amp; Firebase</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> i18next &amp; JWT Auth</SkillItem>
                          </SkillList>
                        </SkillGroupBox>

                        {/* Tools, QA & AI */}
                        <SkillGroupBox>
                          <SkillGroupTitle>Tools, QA &amp; AI Research</SkillGroupTitle>
                          <SkillList>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Docker &amp; GitHub Actions</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Playwright &amp; Sentry</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Amplitude Analytics</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Natural Language Processing (NLP)</SkillItem>
                            <SkillItem><SkillGlyph>&diams;</SkillGlyph> Git, GitHub, Figma, Vercel</SkillItem>
                          </SkillList>
                        </SkillGroupBox>
                      </SkillsGrid>
                    </ChapterBlock>

                    {/* Chapter III: Professional Chronicle */}
                    <ChapterBlock>
                      <ChapterTitle>Chapter III &mdash; Professional Chronicle</ChapterTitle>
                      <ChapterSubtitle>1.5+ years of software delivery chronicled at XIIA.</ChapterSubtitle>

                      <Timeline>
                        {/* Job 1: XIIA Mid-level Developer */}
                        <TimelineNode>
                          <NodeMarker $gold />
                          <NodeHeader>
                            <NodeRole>Mid-level Developer</NodeRole>
                            <NodeCompany>&middot; XIIA</NodeCompany>
                          </NodeHeader>
                          <NodeMeta>Apr 2026 &mdash; Present</NodeMeta>
                          <BulletList>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Designed scalable and reusable frontend solutions using React.js, Next.js, React Native, Expo, and TypeScript.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Worked on application architecture, performance optimization, and improving overall code quality and maintainability.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Integrated and managed REST and GraphQL APIs using React Query and Apollo Client.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Investigated complex technical issues and implemented solutions to improve application stability and user experience.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Collaborated with designers, backend developers, and QA to plan solutions, review code, and deliver features effectively.</BulletItem>
                          </BulletList>
                        </TimelineNode>

                        {/* Job 2: XIIA Software Developer */}
                        <TimelineNode>
                          <NodeMarker />
                          <NodeHeader>
                            <NodeRole>Software Developer</NodeRole>
                            <NodeCompany>&middot; XIIA</NodeCompany>
                          </NodeHeader>
                          <NodeMeta>Feb 2025 &mdash; Apr 2026</NodeMeta>
                          <BulletList>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Implemented responsive UI and application features based on provided designs and requirements.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Developed reusable components and contributed to maintaining existing web and mobile applications.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Integrated APIs and worked with forms, validation, and application state management.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Fixed UI and functional bugs and performed debugging across different application flows.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Participated in code reviews, testing, and development tasks under team guidance.</BulletItem>
                            <BulletItem><SkillGlyph>&diams;</SkillGlyph> Gained hands-on experience with Git, GitHub, React, React Native, and modern development practices while contributing to project delivery.</BulletItem>
                          </BulletList>
                        </TimelineNode>
                      </Timeline>
                    </ChapterBlock>

                    {/* Chapter IV: Academic Codex, Research & Problem Solving */}
                    <ChapterBlock>
                      <ChapterTitle>Chapter IV &mdash; Scholar&apos;s Codex &amp; Research</ChapterTitle>
                      <ChapterSubtitle>Academic foundation, competitive programming, and peer-reviewed research.</ChapterSubtitle>

                      <Timeline>
                        {/* Education 1: IIUC */}
                        <TimelineNode>
                          <NodeMarker $gold />
                          <NodeRole>International Islamic University Chittagong (IIUC)</NodeRole>
                          <NodeMeta>Bachelor of Computer Science &amp; Engineering (B.Sc. in CSE) &middot; July 2020 &mdash; Dec 2024</NodeMeta>
                          <Paragraph style={{ fontSize: '0.88rem' }}>
                            <TextGlow>CGPA: 3.681 out of 4.00</TextGlow> &mdash; Graduated with high academic distinction. Served as Executive Member of IIUC Computer Club and Teaching Assistant for the Compiler course.
                          </Paragraph>
                        </TimelineNode>

                        {/* Education 2: Navy College HSC */}
                        <TimelineNode>
                          <NodeMarker />
                          <NodeRole>Bangladesh Navy School and College, Chittagong</NodeRole>
                          <NodeMeta>Higher Secondary Certificate (HSC | Science) &middot; 2018 &middot; <strong>GPA: 4.50 / 5.00</strong></NodeMeta>
                          <NodeMeta style={{ marginTop: '0.25rem' }}>
                            Secondary School Certificate (SSC | Science) &middot; 2016 &middot; <strong>GPA: 5.00 / 5.00</strong>
                          </NodeMeta>
                        </TimelineNode>

                        {/* Research Publication: Wiley */}
                        <TimelineNode>
                          <NodeMarker $gold />
                          <NodeRole>Peer-Reviewed Research Publication &mdash; Wiley</NodeRole>
                          <NodeMeta>Applied Computational Intelligence and Soft Computing &middot; Published: 07 June 2026</NodeMeta>
                          <Paragraph style={{ fontSize: '0.88rem' }}>
                            <strong>&quot;Advanced Sarcasm Detection Using Transformer-Based Models: Analyzing Variations in Formal and Informal Languages.&quot;</strong> Researched neural transformer models for detecting nuanced sarcasm across formal and informal registers.
                          </Paragraph>
                        </TimelineNode>

                        {/* Competitive Programming & Accolades */}
                        <TimelineNode>
                          <NodeMarker />
                          <NodeRole>Algorithmic Problem Solving &amp; Accolades</NodeRole>
                          <NodeMeta>Codeforces: 253 Solved &middot; UVA Online Judge: 80 Solved</NodeMeta>
                          <Paragraph style={{ fontSize: '0.88rem' }}>
                            &diams; <strong>IIUC CP Bootcamp Autumn-2021:</strong> Awarded <em>Best Performer</em>.<br />
                            &diams; <strong>IIUC Intra Dept. Programming Contest:</strong> Awarded <em>3rd Place</em>.<br />
                            &diams; <strong>Programming Hero (Batch-7):</strong> Complete Web Development Course &mdash; earned the <em>Black Belt</em> distinction.
                          </Paragraph>
                        </TimelineNode>
                      </Timeline>
                    </ChapterBlock>

                    <Colophon>&mdash; End of this leaf // Kepler-452X Bio-Archive &mdash;</Colophon>
                  </ManuscriptInk>
                </PaperAged>
              </ScrollBody>

              {/* Bottom Roller */}
              <CyberRoller $position="bottom" aria-hidden="true">
                <RollerCore />
                <RollerSpindle />
                <RollerGlow />
              </CyberRoller>

            </ScrollWrapper>
          </ManuscriptPane>

        </SplitContainer>
      </ManuscriptPage>
    </AboutView>
  );
}
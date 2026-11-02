import React, { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '../data/projectsData';
import { SfxType } from '../types';
import {
  ContactView,
  ContactPage,
  TerminalShell,
  TerminalBar,
  TerminalDots,
  TerminalDot,
  TerminalTitle,
  TerminalStatus,
  PingBeacon,
  TerminalGrid,
  CommsDossier,
  RelayBannerCard,
  RelayBannerImg,
  RelayScrim,
  RelayBadge,
  RadarCircle,
  RadarSweep,
  RadarDot,
  RelayMeta,
  RelayTag,
  RelayCoords,
  DossierHeadline,
  DossierDesc,
  ContactPointCard,
  CpLabel,
  CpValueRow,
  CpValue,
  CopyButton,
  CoordsBox,
  SocialDeck,
  SocialHeader,
  SocialButtons,
  SocialBtn,
  CommsFormWrapper,
  CommsForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormSelect,
  FormTextarea,
  SubmitButton,
  BtnGlow,
  BtnText,
  StatusBanner,
  StatusDot,
  StatusText
} from '../styles/contact.styles';

interface ContactSectionProps {
  playSfx: (type?: SfxType) => void;
}

interface FormStatus {
  type: 'success' | 'error';
  text: string;
}

export default function ContactSection({ playSfx }: ContactSectionProps): React.JSX.Element {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'mobile',
    message: ''
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('farjanaakter7275@gmail.com');
      setCopied(true);
      playSfx('click');
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // fallback
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus(null);
    playSfx('warp');

    try {
      const payload = new FormData();
      payload.append('access_key', WEB3FORMS_ACCESS_KEY);
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('category', formData.category);
      payload.append('message', formData.message);
      payload.append('subject', `New Message from Portfolio: ${formData.name}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload
      });
      const data = await response.json();

      if (data.success) {
        setFormStatus({
          type: 'success',
          text: `SUBSPACE TRANSMISSION DELIVERED: Greetings ${formData.name}, your message was beamed directly to farjanaakter7275@gmail.com!`
        });
        setFormData({
          name: '',
          email: '',
          category: 'mobile',
          message: ''
        });
      } else {
        setFormStatus({
          type: 'error',
          text: `Transmission error: ${data.message || 'Please email directly to farjanaakter7275@gmail.com'}`
        });
      }
    } catch {
      setFormStatus({
        type: 'error',
        text: 'Subspace link error. Please transmit directly to farjanaakter7275@gmail.com'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ContactView id="view-contact" aria-label="Contact Realm - Quantum Uplink">
      <ContactPage>
        <TerminalShell>
          
          {/* Terminal Header Bar with Alien World Coordinates */}
          <TerminalBar>
            <TerminalDots>
              <TerminalDot $color="red" />
              <TerminalDot $color="yellow" />
              <TerminalDot $color="green" />
            </TerminalDots>
            <TerminalTitle>
              QUANTUM_UPLINK // KEPLER-452X // FARJANA_AKTER_LAILA_TRANSCEIVER
            </TerminalTitle>
            <TerminalStatus>
              <PingBeacon />
              <span>SUB-ORBITAL DISH 01 ACTIVE</span>
            </TerminalStatus>
          </TerminalBar>

          <TerminalGrid>
            {/* Left Column: Alien Relay Observatory Artwork & Comms Dossier */}
            <CommsDossier>
              {/* Alien Quantum Relay Visual Card */}
              <RelayBannerCard>
                <RelayBannerImg
                  src="/alien_quantum_relay.jpg"
                  alt="Kepler-452X Quantum Relay Station with glowing dish antenna and ringed planets"
                />
                <RelayScrim />
                
                <RelayBadge>
                  <RadarCircle>
                    <RadarSweep />
                    <RadarDot />
                  </RadarCircle>
                  <RelayMeta>
                    <RelayTag>QUANTUM ENTANGLEMENT LINK</RelayTag>
                    <RelayCoords>Kepler-452X Sector 05 &middot; Latency: 0.002ms</RelayCoords>
                  </RelayMeta>
                </RelayBadge>
              </RelayBannerCard>

              <DossierHeadline style={{ marginTop: '1.25rem' }}>Transmit a Signal</DossierHeadline>
              <DossierDesc>
                Whether you are looking to build fluid cross-platform mobile apps with React Native, engineer responsive enterprise web platforms with Next.js, or explore AI and full-stack solutions, my communication transceiver is open.
              </DossierDesc>

              <ContactPointCard>
                <CpLabel>PRIMARY TRANSMISSION CHANNEL (EMAIL)</CpLabel>
                <CpValueRow>
                  <CpValue id="email-text">farjanaakter7275@gmail.com</CpValue>
                  <CopyButton
                    type="button"
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email to Clipboard"
                  >
                    <svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </CopyButton>
                </CpValueRow>
              </ContactPointCard>

              <ContactPointCard style={{ marginTop: '0.85rem' }}>
                <CpLabel>SUBSPACE COORDINATES &amp; COMMS</CpLabel>
                <CoordsBox>
                  Location: <span style={{ color: '#fff' }}>Navy Colony-2, Chattogram, Bangladesh</span><br />
                  Comm Link: <span style={{ color: 'var(--accent-gold, #e8c36a)' }}>+880 1571736651</span>
                </CoordsBox>
              </ContactPointCard>

              <SocialDeck>
                <SocialHeader>INTERSTELLAR NETWORK NODES</SocialHeader>
                <SocialButtons>
                  <SocialBtn href="https://github.com/FarjanaAkterLaila" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                  </SocialBtn>
                  <SocialBtn href="https://www.linkedin.com/in/farjana-akter-laila-a92674278/" target="_blank" rel="noopener noreferrer">
                    <span>LinkedIn</span>
                  </SocialBtn>
                  <SocialBtn href="mailto:farjanaakter7275@gmail.com">
                    <span>Mail Direct</span>
                  </SocialBtn>
                </SocialButtons>
              </SocialDeck>
            </CommsDossier>

            {/* Right Column: Interactive Comms Form */}
            <CommsFormWrapper>
              <CommsForm id="uplink-form" onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="form-sender">TRANSMITTER CALLSIGN (YOUR NAME)</FormLabel>
                  <FormInput
                    type="text"
                    id="form-sender"
                    name="name"
                    required
                    placeholder="e.g. Commander Sarah Chen"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="form-freq">TRANSMISSION FREQUENCY (YOUR EMAIL)</FormLabel>
                  <FormInput
                    type="email"
                    id="form-freq"
                    name="email"
                    required
                    placeholder="e.g. sarah.chen@constellation.io"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="form-dept">MISSION PROFILE (SECTOR)</FormLabel>
                  <FormSelect
                    id="form-dept"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="mobile">Mobile Application Engineering (React Native / Expo)</option>
                    <option value="web">Web Application &amp; Frontend (Next.js / React / TypeScript)</option>
                    <option value="ai">AI / NLP Research &amp; Machine Learning Integration</option>
                    <option value="other">General Inquiries &amp; Interstellar Dialogue</option>
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="form-msg">ENCRYPTED PAYLOAD (MESSAGE)</FormLabel>
                  <FormTextarea
                    id="form-msg"
                    name="message"
                    rows={5}
                    required
                    placeholder="Detail the parameters of your project, opportunity, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </FormGroup>

                <SubmitButton
                  type="submit"
                  id="uplink-submit-btn"
                  disabled={submitting}
                >
                  <BtnGlow />
                  <BtnText>{submitting ? 'TRANSMITTING SUBSPACE PACKET...' : 'BEAM TRANSMISSION'}</BtnText>
                  <svg viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </SubmitButton>

                {formStatus && (
                  <StatusBanner $type={formStatus.type}>
                    <StatusDot $type={formStatus.type} />
                    <StatusText>{formStatus.text}</StatusText>
                  </StatusBanner>
                )}
              </CommsForm>
            </CommsFormWrapper>
          </TerminalGrid>
        </TerminalShell>
      </ContactPage>
    </ContactView>
  );
}
export type ViewId = 'about' | 'projects' | 'personal' | 'blog' | 'contact' | 'cv';

export type AtmosphereTheme = 'theme-default' | 'theme-solar' | 'theme-aurora';

export type SfxType = 'click' | 'warp' | 'sonar' | 'transmission';

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryBadge: string;
  role: string;
  description: string;
  stack: string[];
  metrics: string[];
  highlights: string[];
  liveUrl?: string | null;
  liveLabel?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  githubUrl?: string;
  publicationUrl?: string;
}

export type ProjectCodexMap = Record<string, Project>;

export interface Article {
  id: number;
  cycle: string;
  readTime: string;
  tag: string;
  coherence: string;
  headline: string;
  excerpt: string;
  link: string | null;
}

export interface NavItem {
  id: ViewId;
  num: string;
  label: string;
}

export interface CosmicAudioHook {
  isPlaying: boolean;
  toggleAudio: () => void;
  playSfx: (type?: SfxType) => void;
}

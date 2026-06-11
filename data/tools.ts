export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  website: string;
  logo?: string;
  tags: string[];
  featured?: boolean;
  pricing?: 'free' | 'freemium' | 'paid' | 'subscription';
}

// 分类定义
export const categories = [
  {
    id: 'assistant',
    name: 'AI Assistants',
    nameCn: '通用助手',
    icon: '🤖',
    color: 'bg-gradient-to-r from-violet-500 to-purple-600',
    description: 'General-purpose AI assistants for conversation, research, and everyday tasks'
  },
  {
    id: 'dev',
    name: 'Development & Coding',
    nameCn: '开发/编程',
    icon: '💻',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-600',
    description: 'AI-powered coding tools, IDEs, and development platforms'
  },
  {
    id: 'content',
    name: 'Content Creation',
    nameCn: '内容创作',
    icon: '✍️',
    color: 'bg-gradient-to-r from-pink-500 to-rose-600',
    description: 'AI tools for video, audio, writing, and multimedia content creation'
  },
  {
    id: 'productivity',
    name: 'Productivity & Efficiency',
    nameCn: '效率提升',
    icon: '⚡',
    color: 'bg-gradient-to-r from-emerald-500 to-green-600',
    description: 'Boost your workflow with AI-powered productivity and note-taking tools'
  },
  {
    id: 'creative',
    name: 'Design, Video & Audio',
    nameCn: '设计/视频/音频',
    icon: '🎨',
    color: 'bg-gradient-to-r from-orange-500 to-amber-600',
    description: 'AI creative tools for image generation, video editing, music, and design'
  },
  {
    id: 'automation',
    name: 'Automation & Integration',
    nameCn: '自动化&集成',
    icon: '🔗',
    color: 'bg-gradient-to-r from-slate-500 to-gray-700',
    description: 'Connect, automate, and integrate AI into your existing workflows'
  }
];

// 工具数据（基于2026年最佳AI工具金字塔精选清单）
export const aiTools: AITool[] = [
  // ===== 通用助手 (AI Assistants) =====
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s advanced AI assistant. Known for nuanced reasoning, long context windows, and safety-focused design. Excellent for analysis, coding, writing, and complex problem-solving.',
    category: 'assistant',
    website: 'https://claude.ai',
    tags: ['Chatbot', 'Assistant', 'Reasoning', 'Long Context'],
    featured: true,
    pricing: 'freemium'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s flagship conversational AI. Features GPT-4o with multimodal capabilities (text, image, voice), web browsing, code interpreter, and GPT Store for custom agents.',
    category: 'assistant',
    website: 'https://chat.openai.com',
    tags: ['Chatbot', 'Multimodal', 'GPT-4o', 'Plugins'],
    featured: true,
    pricing: 'freemium'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    description: 'AI-powered search engine that provides cited, real-time answers. Combines chat with web search, perfect for research and fact-finding with source attribution.',
    category: 'assistant',
    website: 'https://www.perplexity.ai',
    tags: ['Search', 'Research', 'Citations', 'Real-time'],
    featured: true,
    pricing: 'freemium'
  },

  // ===== 开发/编程 (Development & Coding) =====
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor built on VS Code. Features intelligent code completion, inline editing, chat-with-codebase, and multi-file editing powered by Claude and GPT-4.',
    category: 'dev',
    website: 'https://cursor.sh',
    tags: ['IDE', 'Code Editor', 'AI Completion', 'VS Code'],
    featured: true,
    pricing: 'freemium'
  },
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'AI-powered full-stack app builder. Describe your app in natural language and get a production-ready React application with backend, database, and deployment.',
    category: 'dev',
    website: 'https://lovable.dev',
    tags: ['No-code', 'Full-stack', 'React', 'App Builder'],
    pricing: 'freemium'
  },
  {
    id: 'replit',
    name: 'Replit',
    description: 'Browser-based IDE with AI Agent capabilities. Build, deploy, and collaborate on software projects instantly. Supports 50+ languages with built-in hosting.',
    category: 'dev',
    website: 'https://replit.com',
    tags: ['IDE', 'Cloud', 'Collaboration', 'Hosting'],
    pricing: 'freemium'
  },
  {
    id: 'base44',
    name: 'Base44',
    description: 'Rapid internal tool builder. Create admin panels, dashboards, and internal apps connected to your data sources in minutes without traditional coding.',
    category: 'dev',
    website: 'https://www.base44.com',
    tags: ['Internal Tools', 'Low-code', 'Dashboard', 'Rapid Dev'],
    pricing: 'freemium'
  },

  // ===== 内容创作 (Content Creation) =====
  {
    id: 'shotlab',
    name: 'Shotlab',
    description: 'AI-powered short-form video creation platform. Generate engaging social media clips from long-form content with auto-editing, captions, and trend-aware formatting.',
    category: 'content',
    website: 'https://shotlab.ai',
    tags: ['Video', 'Short-form', 'Social Media', 'Auto-edit'],
    pricing: 'freemium'
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'Professional AI video generation with realistic avatars. Create studio-quality videos with AI presenters in 40+ languages, perfect for training, marketing, and presentations.',
    category: 'content',
    website: 'https://www.heygen.com',
    tags: ['Avatar', 'Video', 'Translation', 'Presentation'],
    featured: true,
    pricing: 'freemium'
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Enterprise AI video platform. Generate videos from text with 140+ AI avatars, custom avatar creation, and professional templates for corporate communications.',
    category: 'content',
    website: 'https://www.synthesia.io',
    tags: ['Avatar', 'Video', 'Enterprise', 'Training'],
    pricing: 'subscription'
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one video and podcast editing tool. Edit media by editing text transcript — AI-powered overdub, screen recording, filler word removal, and transcription.',
    category: 'content',
    website: 'https://www.descript.com',
    tags: ['Video Editing', 'Podcast', 'Transcription', 'Audio'],
    pricing: 'freemium'
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    description: 'AI that repurposes long videos into viral short clips. Automatically identifies highlights, adds captions, and formats for TikTok, Reels, and YouTube Shorts.',
    category: 'content',
    website: 'https://www.opus.pro',
    tags: ['Short-form', 'Viral', 'Repurpose', 'Social Media'],
    pricing: 'freemium'
  },
  {
    id: 'beehiiv',
    name: 'Beehiiv',
    description: 'Newsletter platform built for growth. AI-powered writing tools, audience analytics, monetization features, and ad network for creators and publishers.',
    category: 'content',
    website: 'https://www.beehiiv.com',
    tags: ['Newsletter', 'Writing', 'Monetization', 'Growth'],
    pricing: 'freemium'
  },

  // ===== 效率提升 (Productivity & Efficiency) =====
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI writing assistant for grammar, tone, clarity, and style. Real-time suggestions across email, documents, and browsers with enterprise-grade security.',
    category: 'productivity',
    website: 'https://www.grammarly.com',
    tags: ['Writing', 'Grammar', 'Tone', 'Proofreading'],
    featured: true,
    pricing: 'freemium'
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    description: 'Google\'s AI-powered research notebook. Upload documents and get grounded summaries, Q&A, and connections between sources with citation support.',
    category: 'productivity',
    website: 'https://notebooklm.google.com',
    tags: ['Research', 'Notes', 'Documents', 'Citations'],
    pricing: 'free'
  },
  {
    id: 'otio-ai',
    name: 'Otio AI',
    description: 'Smart meeting assistant that records, transcribes, summarizes, and extracts action items from meetings. Integrates with calendar and task management tools.',
    category: 'productivity',
    website: 'https://otio.ai',
    tags: ['Meeting', 'Transcription', 'Summary', 'Calendar'],
    pricing: 'freemium'
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI presentation builder. Create beautiful decks, documents, and web pages in seconds. Transform outlines into polished presentations with one click.',
    category: 'productivity',
    website: 'https://gamma.app',
    tags: ['Presentation', 'Slides', 'Document', 'Design'],
    pricing: 'freemium'
  },
  {
    id: 'granola',
    name: 'Granola',
    description: 'AI meeting notes that work for you. Automatic transcription with smart templating, action item extraction, and CRM integration for sales and customer teams.',
    category: 'productivity',
    website: 'https://granola.so',
    tags: ['Meeting Notes', 'CRM', 'Sales', 'Transcription'],
    pricing: 'freemium'
  },
  {
    id: 'superhuman',
    name: 'Superhuman',
    description: 'The fastest email experience ever built. AI-powered inbox management, scheduling, follow-up reminders, and keyboard-first design for power users.',
    category: 'productivity',
    website: 'https://superhuman.com',
    tags: ['Email', 'Productivity', 'Inbox', 'Speed'],
    pricing: 'subscription'
  },
  {
    id: 'wispr-flow',
    name: 'Wispr Flow',
    description: 'Voice-to-text workflow automation. Dictate naturally and let AI structure your thoughts into emails, docs, tasks, and more with contextual understanding.',
    category: 'productivity',
    website: 'https://wisprflow.com',
    tags: ['Voice', 'Dictation', 'Workflow', 'Text'],
    pricing: 'freemium'
  },

  // ===== 设计/视频/音频 (Design, Video & Audio) =====
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Industry-leading AI voice synthesis. Generate ultra-realistic speech, clone voices, create audiobooks, and build voice applications with 29 languages.',
    category: 'creative',
    website: 'https://elevenlabs.io',
    tags: ['Voice', 'TTS', 'Cloning', 'Audio'],
    featured: true,
    pricing: 'freemium'
  },
  {
    id: 'suno',
    name: 'Suno',
    description: 'AI music generation platform. Create full songs with vocals, instruments, and lyrics from text prompts. Any genre, any style, professional quality output.',
    category: 'creative',
    website: 'https://suno.com',
    tags: ['Music', 'Generation', 'Songs', 'Audio'],
    featured: true,
    pricing: 'freemium'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Premier AI image generation tool. Creates stunning, artistic images from text prompts through Discord. Known for exceptional aesthetic quality and style variety.',
    category: 'creative',
    website: 'https://www.midjourney.com',
    tags: ['Image Generation', 'Art', 'Discord', 'Creative'],
    featured: true,
    pricing: 'subscription'
  },
  {
    id: 'kling',
    name: 'Kling AI',
    description: 'Kuaishou\'s AI video generator. Create high-quality videos up to 2 minutes from text or images with realistic physics and motion understanding.',
    category: 'creative',
    website: 'https://klingai.com',
    tags: ['Video Generation', 'Text-to-Video', 'Realistic'],
    pricing: 'freemium'
  },
  {
    id: 'pika-labs',
    name: 'Pika Labs',
    description: 'AI video creation platform. Generate and edit videos from text or images with features like lip-sync, style transfer, and motion control.',
    category: 'creative',
    website: 'https://pika.art',
    tags: ['Video Generation', 'Editing', 'Animation'],
    pricing: 'freemium'
  },
  {
    id: 'figma',
    name: 'Figma',
    description: 'Collaborative design platform with AI features. Design, prototype, and hand off with real-time collaboration. AI assists with auto-layout, content generation, and more.',
    category: 'creative',
    website: 'https://www.figma.com',
    tags: ['Design', 'UI/UX', 'Prototype', 'Collaboration'],
    pricing: 'freemium'
  },
  {
    id: 'canva',
    name: 'Canva',
    description: 'Online design platform with AI magic. Create graphics, presentations, social media posts, and videos with drag-and-drop simplicity and AI-powered design suggestions.',
    category: 'creative',
    website: 'https://www.canva.com',
    tags: ['Design', 'Templates', 'Graphics', 'Social Media'],
    pricing: 'freemium'
  },
  {
    id: 'google-veo',
    name: 'Google Veo',
    description: 'Google\'s most advanced AI video model. Generates high-quality, cinematic videos from text or image prompts with deep understanding of physics and cinematography.',
    category: 'creative',
    website: 'https://deepmind.google/technologies/veo/',
    tags: ['Video Generation', 'Google', 'Cinematic', 'Research'],
    pricing: 'paid'
  },
  {
    id: 'higgsfield',
    name: 'Higgsfield',
    description: 'AI-powered physics simulation and 3D content creation. Generate realistic physical interactions, simulations, and 3D scenes for entertainment and education.',
    category: 'creative',
    website: 'https://higgsfield.ai',
    tags: ['3D', 'Physics', 'Simulation', 'Entertainment'],
    pricing: 'freemium'
  },

  // ===== 自动化&集成 (Automation & Integration) =====
  {
    id: 'softr',
    name: 'Softr',
    description: 'No-code platform that turns Airtable/Google Sheets into client portals, partner portals, and internal tools. AI-assisted app building with pre-made templates.',
    category: 'automation',
    website: 'https://www.softr.io',
    tags: ['No-code', 'Portal', 'Airtable', 'Templates'],
    pricing: 'freemium'
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Open-source workflow automation tool. Connect 400+ services with visual programming. Self-hostable, fair-code license, AI-native with native AI agent support.',
    category: 'automation',
    website: 'https://n8n.io',
    tags: ['Automation', 'Workflow', 'Open Source', 'Self-hosted'],
    featured: true,
    pricing: 'free'
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Leading automation platform connecting 7,000+ apps. Create workflows (Zaps) between apps without code. AI features include natural language zap creation and data transformation.',
    category: 'automation',
    website: 'https://zapier.com',
    tags: ['Automation', 'Integration', 'No-code', 'Workflows'],
    pricing: 'freemium'
  },
  {
    id: 'lindy-ai',
    name: 'Lindy AI',
    description: 'AI employee that handles repetitive tasks. Create AI agents for email drafting, CRM updates, meeting prep, and more. Learns from your patterns and preferences.',
    category: 'automation',
    website: 'https://www.lindy.ai',
    tags: ['AI Agent', 'Automation', 'Tasks', 'Learning'],
    pricing: 'freemium'
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    description: 'Anthropic\'s agentic CLI coding tool. An AI agent that operates directly in your terminal — can read/write files, run commands, search codebases, and complete complex engineering tasks autonomously.',
    category: 'automation',
    website: 'https://docs.anthropic.com/en/docs/claude-code',
    tags: ['CLI', 'Coding', 'Agent', 'Terminal'],
    pricing: 'paid'
  },
  {
    id: 'chatbase',
    name: 'Chatbase',
    description: 'Build custom AI chatbots trained on your data. Create customer support bots, knowledge base assistants, and lead qualification agents in minutes.',
    category: 'automation',
    website: 'https://www.chatbase.com',
    tags: ['Chatbot', 'Custom', 'Support', 'Knowledge Base'],
    pricing: 'freemium'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Google\'s multimodal AI model with the largest context window. Native integration with Google Workspace, real-time information, and image/audio/video understanding.',
    category: 'automation',
    website: 'https://gemini.google.com',
    tags: ['Multimodal', 'Google', 'Workspace', 'Long Context'],
    featured: true,
    pricing: 'free'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI built into Notion workspace. Summarize pages, generate content, translate, brainstorm, and autofill databases — all within your notes and docs.',
    category: 'automation',
    website: 'https://www.notion.so/product/ai',
    tags: ['Notes', 'Workspace', 'Writing', 'Database'],
    pricing: 'subscription'
  },
  {
    id: 'apify',
    name: 'Apify',
    description: 'Web scraping and automation platform. Build, run, and deploy scrapers at scale. AI-powered data extraction, ready-made actors for popular sites, and API for data pipelines.',
    category: 'automation',
    website: 'https://apify.com',
    tags: ['Scraping', 'Data', 'Automation', 'API'],
    pricing: 'freemium'
  },
  {
    id: 'clay',
    name: 'Clay',
    description: 'AI-powered data enrichment and go-to-market platform. Automate prospecting, lead scoring, and personalized outreach with 85+ data sources and AI writing.',
    category: 'automation',
    website: 'https://www.clay.com',
    tags: ['Sales', 'Lead Gen', 'Enrichment', 'Outreach'],
    pricing: 'subscription'
  }
];

// 辅助函数
export function getToolsByCategory(categoryId: string): AITool[] {
  return aiTools.filter(tool => tool.category === categoryId);
}

export function getFeaturedTools(): AITool[] {
  return aiTools.filter(tool => tool.featured);
}

export function getToolById(id: string): AITool | undefined {
  return aiTools.find(tool => tool.id === id);
}

export function getCategoryById(id: string) {
  return categories.find(cat => cat.id === id);
}

export function searchTools(query: string): AITool[] {
  const q = query.toLowerCase();
  return aiTools.filter(tool =>
    tool.name.toLowerCase().includes(q) ||
    tool.description.toLowerCase().includes(q) ||
    tool.tags.some(tag => tag.toLowerCase().includes(q))
  );
}

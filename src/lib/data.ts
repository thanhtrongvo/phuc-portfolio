export interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "nike / motion campaign",
    category: "FPT Telecom",
    thumbnail: "/thumbnail/thumbnail1.webp",
    videoUrl: "https://www.youtube.com/embed/fnGmDuY6heI",
  },
  {
    id: 2,
    title: "editorial / fashion film",
    category: "Nexa InfoTech",
    thumbnail:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "salomon / trail run recap",
    category: "Nexa InfoTech",
    thumbnail:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    videoUrl: "https://www.tiktok.com/embed/v2/7130283733026360622",
  },
  {
    id: 4,
    title: "ferrari / track day edit",
    category: "Nexa InfoTech",
    thumbnail:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "adidas / streetwear promo",
    category: "Nexa InfoTech",
    thumbnail:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    videoUrl: "https://www.tiktok.com/embed/v2/7130283733026360622",
  },
  {
    id: 6,
    title: "lexus / hyper-lapse",
    category: "Nexa InfoTech",
    thumbnail:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export const skills = {
  tools: [
    { name: "CapCut Pro", icon: "capcut" },
    { name: "Canva", icon: "canva" },
    { name: "Adobe Premiere Pro", icon: "premiere" },
    { name: "Adobe After Effects", icon: "aftereffects" },
  ],
  services: [
    "Video Editing",
    "Basic Motion Design",
    "Sound Design",
    "Scriptwriting for Storytelling",
  ],
};

export const faqItems = [
  {
    id: "01",
    question: "What projects do you specialize in?",
    answer:
      "I focus on visual journalism and documentary-style storytelling. I specialize in taking complex topics—like finance, history, or film—and transforming them into high-retention, cinematic videos for YouTube and social media.",
  },
  {
    id: "02",
    question: "Can you edit in other styles?",
    answer:
      "Absolutely. While I love the cinematic look, I am built on adaptability. I study the pacing of your favorite creators to ensure the final edit is a perfect harmony of your voice and my technical vision. Whether it's high-energy cuts or a minimalist aesthetic, I pivot quickly to match your needs.",
  },
  {
    id: "03",
    question: "How involved are you in the creative process?",
    answer:
      "Completely. I am a research-first creator. I don't just edit footage; I help with planning, script interpretation, and finding the right 'pulse' for the audio. I'm here to be a creative partner, not just a pair of hands.",
  },
  {
    id: "04",
    question: "Can you match my existing brand aesthetic?",
    answer:
      "Yes. While I have my own style, my goal is to serve the script. I adapt my editing rhythm and designs to fit your existing brand voice while elevating the overall production value.",
  },
  {
    id: "05",
    question: "Do you work alone or with a team?",
    answer:
      "I am an independent creator. This means you get my full attention on every project. I personally handle the research, planning, and sound design to ensure the vision stays consistent from start to finish.",
  },
];

export const socialLinks = [
  { name: "YouTube", url: "#", icon: "youtube" },
  { name: "Instagram", url: "#", icon: "instagram" },
  { name: "TikTok", url: "#", icon: "tiktok" },
];

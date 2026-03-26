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
    question: "What types of projects do you specialize in?",
    answer:
      "I focus primarily on cinematic video production, motion graphics, and short-form content. My work ranges from high-end brand campaigns to social reels and YouTube videos.",
  },
  {
    id: "02",
    question: "How involved are you in the creative process?",
    answer:
      "Fully hands-on — from initial concept and shot planning, through direction and shooting, all the way to the final edit, color grading, and sound design.",
  },
  {
    id: "03",
    question: "Do you take on smaller projects, or only large campaigns?",
    answer:
      "I'm selective but open to all projects that align creatively. Whether it's a large-scale campaign or a short-form social shoot, if the vision resonates, I'm in.",
  },
  {
    id: "04",
    question: "How long does a typical project take?",
    answer:
      "Most projects run between 2 to 6 weeks from ideation to delivery, depending on the scope, complexity, and editing requirements. Quick-turnaround projects can also be discussed if timelines align.",
  },
  {
    id: "05",
    question: "Do you handle everything yourself, or do you have a team?",
    answer:
      "I lead every project personally, from direction and shooting to the final edit. But for larger or specialized projects, I bring in a carefully selected, small team of trusted collaborators tailored specifically to your needs.",
  },
  {
    id: "06",
    question: "Can you match my existing brand aesthetic?",
    answer:
      "Absolutely. I pride myself on adaptability — whether it's matching an existing visual style or helping define a fresh creative direction for your brand.",
  },
  {
    id: "07",
    question: "How do you structure pricing and payments?",
    answer:
      "Pricing is project-based and reflects the complexity, deliverables, and usage rights. After discussing your project needs, I'll provide a clear quote upfront. Typically, payments are structured as a 50% deposit, with the balance due upon final delivery.",
  },
];

export const socialLinks = [
  { name: "YouTube", url: "#", icon: "youtube" },
  { name: "Instagram", url: "#", icon: "instagram" },
  { name: "TikTok", url: "#", icon: "tiktok" },
];

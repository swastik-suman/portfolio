// ============================================================
// DATA/PROFILE.TS — SINGLE SOURCE OF TRUTH
// ============================================================
// This is the ONLY file you need to edit to update your site.
// Every section below maps directly to a page section.
// ============================================================

// ── PERSONAL INFO ───────────────────────────────────────────
export const profile = {
  name: "Swastik Suman Nayak",
  role: "AI/ML Engineer & Full-Stack Builder",
  tagline:
    "I design multi-agent AI systems and the dashboards that explain them — from LangGraph pipelines to Power BI reports.",
  location: "Bhubaneswar, Odisha, India",
  email: "swastiksuman28@gmail.com",
  phone: "+91 7815003693",
  github: "https://github.com/swastik-suman",
  linkedin: "https://www.linkedin.com/in/swastik-suman-a422a2302/",
  resumeUrl: "/resume.pdf",
  // ── PHOTO ──────────────────────────────────────────────────
  // Place your photo at public/profile.jpg and set this to "/profile.jpg"
  // See README for photo specifications
  photo: "/profile.jpeg",
};

// ── ABOUT ───────────────────────────────────────────────────
export const about = {
  summary:
    "I'm a Computer Science Engineering student at KIIT University, building at the intersection of agentic AI systems and data-driven decision tools. My recent work centers on AEGIS and SENTINEL-AI — multi-agent cybersecurity platforms — and Power BI dashboards that turn raw operational data into clear, decision-ready visuals using custom DAX measures.",
  highlights: [
    { label: "Agents orchestrated", value: "6+" },
    { label: "Custom DAX measures", value: "8+" },
    { label: "CGPA", value: "8.07" },
    { label: "Hackathons competed", value: "4" },
  ],
};

// ── TECH STACK (Skills section with logos) ──────────────────
// logoUrl: use https://cdn.simpleicons.org/<slug>/white for dark-bg visibility
export const techStack = [
  // Languages
  { name: "Python",      category: "Language",  logoUrl: "https://cdn.simpleicons.org/python" },
  { name: "Java",        category: "Language",  logoUrl: "https://cdn.simpleicons.org/openjdk/white" },
  { name: "JavaScript",  category: "Language",  logoUrl: "https://cdn.simpleicons.org/javascript" },
  { name: "C",           category: "Language",  logoUrl: "https://cdn.simpleicons.org/c/white" },
  { name: "SQL",         category: "Language",  logoUrl: "https://cdn.simpleicons.org/mysql/white" },
  { name: "HTML",        category: "Language",  logoUrl: "https://cdn.simpleicons.org/html5" },
  { name: "CSS",         category: "Language",  logoUrl: "https://cdn.simpleicons.org/css/white" },
  // AI / ML
  { name: "LangGraph",   category: "AI / ML",   logoUrl: "https://cdn.simpleicons.org/langchain/white" },
  { name: "FastAPI",     category: "AI / ML",   logoUrl: "https://cdn.simpleicons.org/fastapi" },
  { name: "ChromaDB",    category: "AI / ML",   logoUrl: "https://cdn.simpleicons.org/redis/white" },
  { name: "OpenAI",      category: "AI / ML",   logoUrl: "https://cdn.simpleicons.org/openai/white" },
  { name: "WebSocket",   category: "AI / ML",   logoUrl: "https://cdn.simpleicons.org/socketdotio/white" },
  { name: "PostgreSQL",  category: "AI / ML",   logoUrl: "https://cdn.simpleicons.org/postgresql" },
  // BI & Data
  { name: "Power BI",    category: "BI & Data", logoUrl: "https://cdn.simpleicons.org/powerbi" },
  { name: "MATLAB",      category: "BI & Data", logoUrl: "https://cdn.simpleicons.org/mathworks/white" },
  { name: "DAX",         category: "BI & Data", logoUrl: "https://cdn.simpleicons.org/microsoftexcel/white" },
  // Tools
  { name: "Git",         category: "Tools",     logoUrl: "https://cdn.simpleicons.org/git" },
  { name: "GitHub",      category: "Tools",     logoUrl: "https://cdn.simpleicons.org/github/white" },
  { name: "Docker",      category: "Tools",     logoUrl: "https://cdn.simpleicons.org/docker" },
  { name: "VS Code",     category: "Tools",     logoUrl: "https://cdn.simpleicons.org/visualstudiocode" },
  { name: "Linux",       category: "Tools",     logoUrl: "https://cdn.simpleicons.org/linux/white" },
];

// ── PROJECTS (featured — shown as large cards) ─────────────
export type Project = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  bullets: string[];
  stack: string[];
  accent: "blue" | "teal" | "red" | "purple";
  status: string;
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  // ── PROJECT 1: SENTINEL-AI ─────────────────────────────
  {
    slug: "sentinel-ai",
    name: "SENTINEL-AI",
    shortName: "SENTINEL",
    category: "AI / Cybersecurity",
    tagline: "AI-native threat intelligence: detects, attributes, and clusters AI-generated malicious content in milliseconds.",
    description:
      "Built for the SDIS by USCPath community hackathon (2nd place), SENTINEL-AI is a production-grade platform that detects AI-generated disinformation, attributes content to specific LLM families, assigns risk scores, and surfaces coordinated bot networks as they emerge.",
    bullets: [
      "Built a custom ML engine that calculates AI-generation probability, attributes content to GPT/Claude/Gemini families, and assigns confidence-rated risk levels in milliseconds.",
      "Exposed three core FastAPI endpoints — JWT auth with role-based access control (viewer/analyst/admin), a detection endpoint with strict data minimization (previews + hashes only, never full content), and a live dashboard endpoint serving KPI metrics and hourly trend data.",
      "Engineered security at every layer: HS256 JWT signing, CORS allowlisting, strict input validation (10–10,000 char bounds), env-managed secrets, and an internal-only PostgreSQL network isolated via Docker Compose.",
      "Clustered related detections into campaign graphs — surfacing coordinated disinformation networks and bot campaigns as interactive actor-campaign network visualizations.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT", "ML"],
    accent: "purple",
    status: "🥈 2nd Place — SDIS by USCPath Community Hackathon",
    links: [],
  },
  // ── PROJECT 2: AEGIS ───────────────────────────────────
  {
    slug: "aegis",
    name: "AEGIS",
    shortName: "AEGIS",
    category: "AI / Cybersecurity",
    tagline: "A 6-agent LangGraph pipeline that detects and responds to cyber threats in real time.",
    description:
      "A multi-agent AI security platform that autonomously detects, analyzes, and responds to cyber threats. I owned the LangGraph pipeline, agent orchestration, ChromaDB integration, and pitch narrative.",
    bullets: [
      "Engineered a 6-agent AI security pipeline using LangGraph to autonomously detect, analyze, and respond to threats in real time.",
      "Built a live WebSocket streaming architecture between FastAPI and React, enabling token-by-token agent reasoning and dynamic graph updates.",
      "Integrated ChromaDB vector memory for incident recall — the system recognizes recurring attack patterns and auto-suggests containment strategies.",
      "Developed an interactive 28-node digital twin using NetworkX graph traversal, highlighting compromised assets, lateral movement, and blast radius.",
      "Implemented MITRE ATT&CK mapping, risk scoring, and Web Speech API voice commands for hands-free SOC operations.",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "React", "WebSockets", "ChromaDB", "NetworkX"],
    accent: "red",
    status: "Faraway Hackathon 2026",
    links: [],
  },
  // ── PROJECT 3: FRIDAY AI ───────────────────────────────
  {
    slug: "friday-ai",
    name: "FRIDAY AI",
    shortName: "FRIDAY",
    category: "AI / Voice Assistant",
    tagline: "A JARVIS-inspired desktop voice assistant powered by GPT-4o.",
    description:
      "A Python-based desktop voice assistant inspired by Iron Man's JARVIS, integrating GPT-4o for intelligent conversational responses, text-to-speech output, and web automation.",
    bullets: [
      "Built a wake-word activated voice pipeline: speech recognition → GPT-4o reasoning → pyttsx3 text-to-speech response, all running locally on Windows.",
      "Integrated pywhatkit for YouTube search and web automation, allowing voice-triggered media and search commands.",
      "Designed a modular command architecture so new skills (weather, reminders, jokes) can be added as standalone Python functions.",
    ],
    stack: ["Python", "GPT-4o", "pyttsx3", "pywhatkit", "SpeechRecognition"],
    accent: "blue",
    status: "Personal project",
    links: [],
  },
  // ── PROJECT 4: SENTIMENT ANALYSIS ─────────────────────
  {
    slug: "sentiment-analysis",
    name: "Multimodal Sentiment Analysis",
    shortName: "SENTIMENT",
    category: "AI / ML",
    tagline: "Fuses speech signals and facial expressions to classify emotion with higher accuracy than single-modality systems.",
    description:
      "A multimodal ML system that combines audio feature extraction and facial expression analysis to classify emotional sentiment — outperforming single-modality approaches on accuracy benchmarks.",
    bullets: [
      "Fused two independent modality pipelines — MFCC-based speech analysis and CNN-based facial expression recognition — into a single ensemble classifier.",
      "Achieved higher accuracy than either modality alone by training the fusion layer on combined confidence scores from both streams.",
      "Built a real-time inference pipeline capable of processing live webcam and microphone input simultaneously.",
    ],
    stack: ["Python", "OpenCV", "librosa", "TensorFlow", "scikit-learn"],
    accent: "teal",
    status: "Academic project",
    links: [],
  },
  // ── PROJECT 5: SUPERSTORE SALES ────────────────────────
  {
    slug: "superstore-sales",
    name: "Superstore Sales Dashboard",
    shortName: "SALES BI",
    category: "Business Intelligence",
    tagline: "Dark-themed Power BI dashboard breaking down revenue, profit, and category performance.",
    description:
      "A sales-performance dashboard built on the Superstore dataset, designed for stakeholders to drill into revenue and profit by region, category, and time period.",
    bullets: [
      "Built interactive filters for region, category, and time-period drill-down.",
      "Applied Power Query data cleaning and transformation on raw sales data.",
      "Designed a dark navy theme for high-contrast readability in executive presentations.",
    ],
    stack: ["Power BI", "Power Query", "DAX"],
    accent: "blue",
    status: "Academic project",
    links: [],
  },
  // ── PROJECT 6: HR ATTRITION ────────────────────────────
  {
    slug: "hr-attrition",
    name: "HR Attrition & Retention Analysis",
    shortName: "HR BI",
    category: "Business Intelligence",
    tagline: "8 custom DAX measures analyzing employee attrition on the IBM HR Analytics dataset.",
    description:
      "A two-page Power BI dashboard analyzing employee attrition and retention patterns, built on the IBM HR Analytics dataset with custom DAX measures.",
    bullets: [
      "Authored 8 custom DAX measures: attrition rate, avg tenure, department-level retention, and more.",
      "Two-page layout — executive summary + department deep-dive — with cross-filtering between visuals.",
      "Produced full written methodology and findings report documenting DAX logic and data model.",
    ],
    stack: ["Power BI", "DAX", "Data Modeling"],
    accent: "teal",
    status: "Academic project",
    links: [],
  },
];

// ── OTHER TECHNICAL WORK (shown as smaller cards) ──────────
export const otherWork = [
  {
    name: "Doctor Strange AR Hand Tracking",
    detail:
      "Two AR web apps using MediaPipe Hands and HTML5 Canvas — gesture-triggered particle effects and portals inspired by Doctor Strange.",
  },
  {
    name: "AI-Based Fact Checker",
    detail:
      "An AI-driven fact-checking pipeline applying inverse scaling law concepts to detect and flag misinformation in text.",
  },
  {
    name: "Employee Attendance Tracker",
    detail:
      "Power BI dashboard tracking attendance patterns, late arrivals, and absenteeism trends across departments.",
  },
];

// ── HACKATHONS / COMPETITIONS ───────────────────────────────
export const hackathons = [
  {
    name: "SENTINEL-AI",
    org: "SDIS by USCPath Community",
    result: "🥈 2nd Place",
    detail:
      "Built an AI-native threat intelligence platform detecting AI-generated disinformation and bot campaigns. See featured project above.",
  },
  {
    name: "AEGIS",
    org: "Faraway Hackathon 2026",
    result: "Team project",
    detail:
      "Multi-agent cybersecurity platform with LangGraph pipeline, ChromaDB memory, and digital twin org graph. See featured project above.",
  },
  {
    name: "HackWithInfy — Round 2",
    org: "Infosys",
    result: "Qualified",
    detail:
      "Solved algorithmic problems involving greedy approaches, heap-based structures, and Kadane's algorithm variants under timed conditions.",
  },
  {
    name: "Decodex Hackathon",
    org: "NLD Synapse",
    result: "Participant",
    detail:
      "Designed and prototyped an AI-based solution within a limited time frame, presenting to judges and peers.",
  },
];

// ── EDUCATION ───────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech, Computer Science Engineering",
    institution: "KIIT University",
    period: "2023 — 2027",
    detail: "CGPA: 8.07",
  },
  {
    degree: "Senior Secondary (10+2)",
    institution: "Kendriya Vidyalaya, ARC CBT",
    period: "2022 — 2023",
    detail: "78.9%",
  },
];
// ── CERTIFICATIONS ──────────────────────────────────────────
// pdfFile: upload your PDFs to public/certificates/ then fill the path here
export const certifications = [
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/CCNA-_Introduction_to_Networks_certificate_23052768-kiit-ac-in_51e9dd1a-5b26-467d-bf16-daea923aab85.pdf",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_23052768-kiit-ac-in_d03576a9-fbf2-4812-bb49-8b21d6cba17b.pdf",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate_23052768-kiit-ac-in_25b10c0d-f142-41a7-8231-9747eac00b5a.pdf",
  },
  {
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/Python_Essentials_1_certificate_23052768-kiit-ac-in_0181441c-46d2-49f4-bbe9-c6ed2c5748b3.pdf",
  },
  {
    name: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/Python_Essentials_2_certificate_23052768-kiit-ac-in_547a924f-d1bc-4207-98d0-524fcd11917b.pdf",
  },
  {
    name: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/Introduction_to_Modern_AI_certificate_23052768-kiit-ac-in_d57b21ed-3462-4064-a915-61e85d2b083d.pdf",
  },
  {
    name: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/Introduction_to_Data_Science_certificate_23052768-kiit-ac-in_fd37acee-5459-4cde-a4ce-a92f28bf49af.pdf",
  },
  {
    name: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/Data_Analytics_Essentials_certificate_23052768-kiit-ac-in_6ef3309a-8308-400e-a630-7c1fdb0bb52a.pdf",
  },
  {
    name: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/Apply_AI-_Analyze_Customer_Reviews_certificate_23052768-kiit-ac-in_d0c3f682-870c-4fa0-87d8-6d9df68e00f1.pdf",
  },
  {
    name: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "June 2026",
    pdfFile: "/certificates/Getting_Started_with_Cisco_Packet_Tracer_certificate_23052768-kiit-ac-in_b99b4d75-5efa-4ff1-b83d-83261826714e.pdf",
  },
];

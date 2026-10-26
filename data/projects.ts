export interface BenchmarkResult {
  engine: string;
  metric: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
  textColor: string;
  details: string;
  technologies: string[];
  github: string;
  live: string;
  tagline?: string;
  label?: string;
  badge?: string;
  timeline?: string;
  mentor?: string;
  video?: string;
  linkedin?: string;
  fullDescriptionIntro?: string;
  fullDescriptionPoints?: string[];
  myRoleTitle?: string;
  myRolePoints?: string[];
  benchmarkResults?: BenchmarkResult[];
  benchmarkStatsSummary?: string[];
  team?: TeamMember[];
  mentorThanks?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CyberGuard: AI-Powered Threat Detection, Investigation & Response Platform",
    tagline: "Detect. Investigate. Respond.",
    label: "Major Project (Team Project, Team VisionCraft)",
    badge: "Major Project",
    timeline: "august 2026 – oct2026",
    mentor: "Kumar Abhijit Panda Sir",
    description:
      "CyberGuard is an AI-native cybersecurity platform that unifies threat detection, investigation, and response. One codebase serves two modes: a Guard App for individual users and an Enterprise Platform for security teams. I led the AI/ML side, building and benchmarking the detection and intelligence engines behind it.",
    image: "/images/projects/cyberguard.svg",
    color: "from-[#F4550A] to-[#c41e3a]",
    textColor: "text-orange-100",
    details:
      "Cyber threats are getting faster and smarter, and attacks rarely happen in isolation. CyberGuard brings detection, investigation, and response into one platform: Guard App for individual users, Enterprise Platform for security teams, and secure multi-tenant architecture using PostgreSQL row-level security, JWT, and RBAC.",
    fullDescriptionIntro: "Platform Architecture & Unified Modes",
    fullDescriptionPoints: [
      "Guard App: phishing, malicious URL, and deepfake detection for individual users.",
      "Enterprise Platform: AI Copilot, SOAR automation, threat hunting, incident correlation, and a Windows/Linux endpoint agent for security teams.",
      "Secure multi-tenant architecture using PostgreSQL row-level security, JWT, and RBAC.",
    ],
    myRoleTitle: "Team Lead & AI/ML Lead",
    myRolePoints: [
      "Led the team and owned the entire AI/ML layer of the platform.",
      "Built working detection engines from real-world datasets, then trained and tested multiple candidate models for each engine, compared them, and selected the most accurate and reliable one for deployment.",
      "Engines I worked on: Phishing/Social Engineering (calibrated LinearSVC + TF-IDF), Malicious URL (HistGradientBoosting), Malware PE analysis (LightGBM), Deepfake visual and audio detection, DDoS/network anomaly, login anomaly, EDR behavior detection (Random Forest), multi-source incident correlation, and false-positive triage.",
      "Used host-disjoint and scenario-disjoint train/validation/test splits to prevent data leakage, and locked decision thresholds on validation data only.",
      "Followed a strict no-synthetic-data policy: no fabricated labels in any training phase.",
      "Added SHA-256 model integrity verification through a model registry, so tampered model files are never loaded.",
      "Built an advisory-only response-recommendation engine with safety guardrails: destructive actions always require human analyst approval.",
      "Exposed all engines through a FastAPI microservice, validated with an automated pytest suite.",
    ],
    benchmarkResults: [
      { engine: "Phishing Detection", metric: "99.59% accuracy, 98.00% malicious recall" },
      { engine: "Malware Detection", metric: "97.10% accuracy, 96.80% detection rate" },
      { engine: "EDR Behavior Detection", metric: "98.41% threat recall on an unseen host" },
      { engine: "Incident Correlation", metric: "99.65% recall, 100% precision (CTU-13 benchmark)" },
      { engine: "False-Positive Triage", metric: "98.97% threat-preservation recall" },
    ],
    benchmarkStatsSummary: [
      "7+ detection engines",
      "21+ integrated security capabilities",
      "35+ services",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "LightGBM",
      "PyTorch",
      "Node.js",
      "React",
      "PostgreSQL",
      "Supabase",
      "React Native",
      "Pydantic",
    ],
    team: [
      { name: "Subrat Kumar Sahoo", role: "Team Lead & AI/ML Lead (me)" },
      { name: "Subha Sankar Sahu", role: "Backend Lead" },
      { name: "Sudhanshu Sekhar Khuntia", role: "Data Lead" },
      { name: "Pritee Sulagna Baral", role: "Frontend Lead" },
      { name: "Ahinsa Samal", role: "Mobile App Lead" },
    ],
    mentorThanks: "Guided by our mentor, Kumar Abhijit Panda Sir.",
    github: "https://github.com/teamvisioncraft875-netizen/CyberGuard",
    video: "https://www.youtube.com/watch?v=4rsPaYPXP2M",
    linkedin: "https://lnkd.in/p/dwxKz3Rm",
    live: "",
  },
  {
    id: 2,
    title: "LearnVaultX",
    description:
      "AI-Driven Adaptive Learning & Exam Simulation Platform with real-time scoring and dynamic difficulty scaling.",
    image: "/images/projects/learnvaultx.jpg",
    color: "from-blue-600 to-indigo-700",
    textColor: "text-blue-100",
    details:
      "Architected an intelligent assessment engine in Flask with dynamic difficulty scaling, performance trend analytics, and real-time LLM tutor support. Delivers real-time readiness scoring (0–100%) and schedules automated revision for weak modules.",
    technologies: ["Python", "Flask API", "Machine Learning", "LLM", "Adaptive AI"],
    github:
      "https://github.com/teamvisioncraft875-netizen/LearnVaultX---AI-Driven-Adaptive-Learning-Platform-.git",
    live: "https://learnvaultx.online/",
  },
  {
    id: 3,
    title: "ExamSentinelX AI",
    description:
      "Online Exam Abnormal Activity & Computer Vision Proctoring detecting face absence and gaze divergence.",
    image: "/images/projects/examsentinelx.jpg",
    color: "from-emerald-600 to-teal-700",
    textColor: "text-emerald-100",
    details:
      "Engineered a lightweight computer vision pipeline using OpenCV and machine learning classifiers to analyze video frames in real time. Accurately detects face absence, multiple faces, head angles, and suspicious gaze divergence with instant evaluator alerts.",
    technologies: ["Python", "OpenCV", "Computer Vision", "Machine Learning", "Flask"],
    github: "https://github.com/ssubratkumar106-blip/ExamSentinelX-AI",
    live: "https://examsentinelx-ai.onrender.com",
  },
  {
    id: 4,
    title: "Apple Stock Price Prediction",
    description:
      "Exploratory market time-series analysis and regression modeling evaluating stock price trajectories.",
    image: "/images/projects/apple_stock_prediction.jpg",
    color: "from-purple-600 to-pink-700",
    textColor: "text-purple-100",
    details:
      "Executed end-to-end Exploratory Data Analysis (EDA) on AAPL historical records, engineered rolling lag indicators, and evaluated regression models to isolate predictive signals with Matplotlib and Scikit-Learn.",
    technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "EDA"],
    github: "https://github.com/ssubratkumar106-blip/Mega_DataScience_Project",
    live: "https://github.com/ssubratkumar106-blip/Mega_DataScience_Project",
  },
  {
    id: 5,
    title: "Futuristic Tic Tac Toe",
    description:
      "Cyberpunk interactive web game featuring minimax AI decision algorithms and fluid 60fps animations.",
    image: "/images/projects/tic_tac_toe.jpg",
    color: "from-cyan-600 to-blue-700",
    textColor: "text-cyan-100",
    details:
      "Implemented minimax decision trees and CSS variable-driven neon visuals on pure DOM events with zero external runtime dependencies, sound feedback, and instant replayability.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Minimax Algorithm"],
    github: "https://github.com/ssubratkumar106-blip/Tic_Tac_Toe.git",
    live: "https://ssubratkumar106-blip.github.io/Tic_Tac_Toe/",
  },
  {
    id: 6,
    title: "Daily Task Tracker",
    description:
      "Full-Stack Productivity Dashboard with Flask RESTful API sync and responsive state management.",
    image: "/images/projects/daily_task_tracker.jpg",
    color: "from-rose-600 to-red-700",
    textColor: "text-rose-100",
    details:
      "Built a minimalist RESTful interface with Flask endpoints and responsive JavaScript state management for fast, persistent task organization with category filters and completion metrics.",
    technologies: ["Python (Flask)", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/ssubratkumar106-blip/Daily_task_Tracker.git",
    live: "https://github.com/ssubratkumar106-blip/Daily_task_Tracker.git",
  },
];

export default projects;

// ════════════════════════════════════════════════════
// LEAGUE CONSULTANCY — SINGLE SOURCE OF TRUTH
// All content is derived from the official company data.
// ════════════════════════════════════════════════════

export const company = {
    name: "LEAGUE Consultancy",
    tagline: "Building Tomorrow's Tech: AI, Software, Robotics, IoT & Automation at Your Service",
    shortDescription: "LEAGUE Consultancy is a next-generation engineering consultancy delivering intelligent AI systems, advanced robotics, industrial automation, and scalable software solutions. We help startups, enterprises, and research labs turn complex ideas into real-world technology products.",
    longDescription: [
        "LEAGUE Consultancy is an innovation driven engineering services company specializing in Artificial Intelligence, Robotics, IoT systems, Automation, and advanced software development.",
        "Founded with the vision to bridge the gap between research and real-world implementation, we partner with startups, enterprises, and research institutions to design, develop, and deploy intelligent technology systems.",
        "From AI-powered analytics platforms and industrial automation solutions to robotics prototyping and IoT ecosystems, we combine engineering excellence with practical execution. Our team blends research-grade thinking with industry-focused delivery, ensuring scalable, future-ready solutions.",
    ],
    philosophy: "At LEAGUE Consultancy, we don't just build systems — we engineer impact.",
    corePhilosophy: "Research-driven. Innovation-focused. Execution-oriented. We combine academic depth with industrial practicality to deliver measurable results.",
    location: "Ahmedabad, India",
    email: "talkwith.league@gmail.com",
    linkedin: "https://linkedin.com/company/league-consultancy",
    workingHours: "Monday – Friday | 9:30 AM – 6:30 PM IST",
    responseTime: "Within 24–48 business hours",
};

export const vision = {
    statement: "To become a global engineering partner driving intelligent automation and AI-powered innovation across industries.",
};

export const mission = {
    statement: "To design and deploy scalable, research-driven technology solutions that empower businesses to innovate faster, operate smarter, and grow sustainably.",
};

export const differentiators = [
    "Strong foundation in engineering & applied research",
    "End-to-end solution development (concept to deployment)",
    "Custom AI & automation — not template-based solutions",
    "Rapid prototyping capability",
    "Industry + academic collaboration mindset",
];

export const founder = {
    name: "Aman Verma",
    title: "Founder & Lead Engineer",
    bio: "Aman Verma is a technology entrepreneur and AI engineer specializing in robotics and intelligent automation systems. He has led multiple industry and research-driven projects focused on real-world AI deployment.",
};

export const teamExpertise = [
    "Artificial Intelligence",
    "Robotics Engineering",
    "Embedded Systems",
    "Full-Stack Development",
    "Industrial Automation",
];

export const targetAudience = [
    { name: "Tech Startups", icon: "Rocket" },
    { name: "Manufacturing Industries", icon: "Factory" },
    { name: "Industrial Automation Companies", icon: "Cog" },
    { name: "Smart City Developers", icon: "Building2" },
    { name: "Research Labs", icon: "FlaskConical" },
    { name: "Mid-to-Large Enterprises", icon: "Landmark" },
    { name: "Government Technology Projects", icon: "Shield" },
];

export const credibility = [
    {
        title: "Research Collaboration",
        description: "Active collaboration with leading engineering institutes on applied research projects.",
        icon: "GraduationCap",
    },
    {
        title: "IEEE Participation",
        description: "Regular participation and contributions at IEEE conferences advancing industry knowledge.",
        icon: "Award",
    },
    {
        title: "ISO 9001 Alignment",
        description: "Our processes are aligned with ISO 9001 quality management standards for consistent delivery.",
        icon: "ShieldCheck",
    },
    {
        title: "Industry Partnerships",
        description: "Strategic partnerships with automation hardware vendors ensuring access to cutting-edge tools.",
        icon: "Handshake",
    },
];

export const techStack = {
    "Programming Languages": ["Python", "C++", "JavaScript", "C", "MATLAB"],
    "AI Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    "Engineering Tools": ["SolidWorks", "ANSYS", "AutoCAD", "NX"],
    "Simulation Software": ["Gazebo", "MATLAB Simulink"],
    "Hardware Platforms": ["Arduino", "Raspberry Pi", "ESP32", "NVIDIA Jetson"],
    "Cloud & DevOps": ["Docker", "Kubernetes", "AWS", "Firebase", "Azure IoT Hub"],
};

export const services = [
    {
        id: 1,
        title: "Artificial Intelligence Solutions",
        shortDescription: "Custom AI models and intelligent systems tailored for real-world business applications.",
        detailedDescription: "We design, train, and deploy machine learning and deep learning systems for predictive analytics, computer vision, NLP, and automation optimization.",
        technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
        tools: ["Jupyter", "MLflow", "Docker", "AWS SageMaker"],
        industries: ["Manufacturing", "Healthcare", "FinTech", "Retail"],
        deliverables: ["Trained AI model", "API integration", "Dashboard", "Technical documentation"],
        metrics: ["98.5% Accuracy", "40% Efficiency Gain", "Real-time Processing"],
        icon: "Brain",
    },
    {
        id: 2,
        title: "Robotics Engineering & Prototyping",
        shortDescription: "Custom robotics system design, simulation, and physical prototyping.",
        detailedDescription: "We develop robotic arms, mobile robots, automation systems, and control algorithms for industrial and research applications.",
        technologies: ["ROS", "Python", "C++", "MATLAB"],
        tools: ["Gazebo", "SolidWorks", "ANSYS", "Arduino", "Raspberry Pi"],
        industries: ["Manufacturing", "Education", "Research Labs"],
        deliverables: ["Functional prototype", "Simulation files", "CAD design", "Control software"],
        metrics: ["Micron-level Precision", "50% Faster Cycle Time", "ISO-Aligned Safety"],
        icon: "Bot",
    },
    {
        id: 3,
        title: "IoT & Smart Systems",
        shortDescription: "Connected device ecosystems for real-time monitoring and automation.",
        detailedDescription: "We design IoT architecture including sensor integration, cloud connectivity, dashboards, and predictive monitoring systems.",
        technologies: ["MQTT", "Node.js", "Python", "Firebase"],
        tools: ["ESP32", "AWS IoT", "Azure IoT Hub"],
        industries: ["Pharmaceuticals", "Smart Buildings", "Logistics"],
        deliverables: ["IoT device firmware", "Cloud dashboard", "Data analytics report"],
        metrics: ["99.9% Uptime", "10k+ Sensor Support", "End-to-End Encryption"],
        icon: "Wifi",
    },
    {
        id: 4,
        title: "Industrial Automation",
        shortDescription: "Process automation solutions to increase efficiency and reduce operational cost.",
        detailedDescription: "We develop PLC-based automation systems, SCADA dashboards, and robotic automation workflows.",
        technologies: ["Ladder Logic", "Python", "C"],
        tools: ["Siemens PLC", "Allen Bradley PLC", "SCADA systems"],
        industries: ["Manufacturing", "Packaging", "Energy"],
        deliverables: ["Automation blueprint", "PLC programming", "Commissioning support"],
        metrics: ["Zero Downtime Migrations", "-30% Labor Costs", "ROI in 12 Months"],
        icon: "Settings",
    },
    {
        id: 5,
        title: "Custom Software Development",
        shortDescription: "Scalable web and enterprise applications.",
        detailedDescription: "We develop full-stack applications, SaaS platforms, and enterprise dashboards integrated with AI and IoT.",
        technologies: ["React", "Node.js", "Python (Django/FastAPI)", "PostgreSQL"],
        tools: ["Docker", "Kubernetes", "AWS"],
        industries: ["Startups", "Enterprises"],
        deliverables: ["Production-ready software", "Deployment pipeline", "Maintenance support"],
        metrics: ["Auto-scaling Ready", "SOC-2 Compliant", "Sub-100ms Latency"],
        icon: "Code2",
    },
];

export const inquiryCategories = [
    "General Inquiry",
    "Project Consultation",
    "Partnership",
    "Career Opportunities",
];

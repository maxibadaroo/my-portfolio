export const personalInfo = {
  name: "Maximiliano Badaró",
  location: "Corrientes, Argentina",
  email: "maxibadaro@gmail.com",
  github: "https://github.com/MaxoBadaro",
  linkedin: "https://www.linkedin.com/in/maxi-badaro/",
};

export const workExperience = [
  {
    company: "Banco de Corrientes SRL",
    location: "Argentina",
    position: "SOC Analyst",
    period: "Ene 2024 - Present",
    achievements: [
      "Managed and secured hybrid environments by overseeing access and permissions in Active Directory and Azure Entra ID for internal users and vendors.",
      "Implemented key security policies, including Group Policies to prevent unauthorized software and adjusting configurations based on pentesting vulnerability findings.",
      "Ensured the continuity of critical services through maintaining network segmentation and collaborating with the networking team on domain-level certificate renewals.",
      "Contributed to underlying infrastructure stability and security by updating firmware/drivers for virtualization hosts and configuring virtual switches for traffic isolation.",
      "Strengthened network security by configuring secure access with ACLs on routers/switches, implementing advanced filtering rules on Fortigate firewalls, and managing secure VPN connections.",
      "Enhanced cloud security posture (Azure) by securing various tenants, managing hybrid identities via Entra ID, implementing Azure Sentinel for threat detection, and maintaining Azure Key Vault for secrets.",
      "Contributed to security and operational efficiency through collaborating on security audits, drafting mandatory regulatory reports, and participating in the automation of development pipelines.",
    ],
  },
  {
    company: "independent",
    location: "Argentina",
    position: "Software Engineer",
    period: "Ene 2025 - Present",
    achievements: [
      "Designed and implemented a comprehensive client and vendor database, along with developing the application for ongoing data management and updates.",
      "Managed application content by optimizing images and updating banners/galleries, while ensuring secure deployments through automated backups and immediate rollback capabilities.",
      "Continuously optimized performance via caching, CDN, and database cleanup, and provided rapid error resolution and priority support.",
      "Maintained basic security through vulnerability scanning and critical updates, utilizing services like Firebase for storage/authentication, dedicated servers for hosting, and Sendgrid for email delivery.",
    ],
  },
  {
    company: "National Technological University",
    location: "Resistencia, Argentina",
    position: "Teaching Assistant",
    period: "May 2022 - Dec 2024",
    achievements: [
      "Taught and evaluated initial Java programming courses, encompassing the full software development lifecycle.",
      "Provided instruction, support, and guidance for practical classes in the Software Engineering subject.",
      "Served as a Teaching Assistant for Algorithms and Data Structures, focusing on teaching and evaluating topics like binary trees and computational complexity.",
    ],
  },
];

export const education = [
  {
    institution: "National Technological University",
    location: "Argentina",
    degree: "Information Systems Engineer",
    period: "Jan 2018 - Dec 2024",
    achievements: [
      "Participated as a fellow in research projects at the national level.",
      "Represented my college in national hackathons.",
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "Azure",
    "Azure Entra ID",
    "Azure Sentinel",
    "Azure Key Vault",
  ],
  frontendDevelopment: [
    "Fortigate Firewalls",
    "Routers & Switches",
    "ACLs",
    "VLANs",
    "VPNs",
    "Group Policies",
    "Certificates (Domain Level)",
    "Vulnerability Scanning Tools",
    "Pentesting Findings"
  ],
  backendDevelopment: [
      "Virtualization Platforms (Hosts)",
      "Virtual Switches",
      "Server Firmware/Drivers",
      "Backup & Rollback Tools",
    ],
  databaseAndStorage: [
      "PostgreSQL",
      "MySQL",
      "SQL Server", 
      "Firebase Storage",
      "Sendgrid"
    ],
  cloudAndDevOps: [
      "Secure Deployment Strategies",
      "Azure Devops",
      "Jenkins",
      "GitHub Actions"
    ],
  toolsAndServices: [
    "Clerk (Auth)"
  ],
};

export const projects = [
  {
    title: "Net Zero Carbon Emissions",
    github: "https://github.com/rishikesh2003/Prodigi",
    description: [
      "WiFi-RTT: Developed indoor occupancy tracking for energy optimization.",
      "IoT Solutions: Implemented smart monitoring for energy efficiency and food waste reduction.",
      "Real-Time Tracking: Designed systems to monitor carbon emissions and optimize resources.",
      "Data-Driven Insights: Analyzed user patterns for adaptive energy and food management.",
      "Reward Integration: Built QR-based green points system to incentivize eco-friendly actions.",
    ],
  },
  {
    title: "Mental Aarog",
    github: "https://github.com/rishikesh2003/mental-aarog",
    description: [
      "A holistic mental health app leveraging AI and blockchain for early detection and personalized solutions for depression.",
      "Features include social media analysis (ML-based sentiment tracking), PHQ-9 assessments, smartwatch integration for sleep and activity data, guided meditation, and smart suggestions for food, travel, music, and movies.",
      "Developed a rewards system using MAG crypto token on Ethereum, enabling user engagement through in-app incentives.",
      "Secure storage implemented via web3.storage, IPFS, and FileCoin.",
      "Built with React, Supabase, Node.js, Flask, and Solidity, showcasing seamless integration of health tech and blockchain.",
    ],
  },
];

export const awards = [
  {
    name: "HACKLAB UTN",
    issuer: "UTN-FRC",
    date: "Oct 2024",
    type: "National",
    position: "Sixth Place",
  },
];

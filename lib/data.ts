import { LucideIconName } from "@/app/_components/AppIcon";

export interface Sector {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  icon: LucideIconName;
  category: string;
  projectCount: number;
  locations:  string | string[]; 
  rating: number;
  capabilities: string[];
  recentProject: {
    description: string;
    outcome: string;
    date: string;
  };
  testimonial: {
    content: string;
    author: string;
    company: string;
  };
  certifications: string[];
}


interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  completed: boolean;
}

interface Metric {
  label: string;
  value: string;
  improvement: string;
  unit: string;
}

interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
}

export interface Project {
  id: string;
  title: string;
  sector: string;
  location: string;
  client: string;
  clientType: string;
  status: "Completed" | "Ongoing";
  value: number;
  duration: string;
  completionPercentage: number;
  rating: number;
  teamSize: number;
  image: string;
  description: string;
  fullDescription: string;
  keyResults: string[];
  challenges: string[];
  solutions: string[];
  timeline: TimelineEvent[];
  metrics: Metric[];
  impact: string;
  gallery: string[];
  testimonial: Testimonial;
  lastUpdated: string;
}


export interface ProjectCounts {
  total: number;
  filtered: number;
}

export interface Filters {
  sector: string;
  status: string;
  location: string;
  scale: string;
  year: string;
}

export const sectors: Sector[] = [
    {
      id: "1",
      name: "Construction & Engineering",
      shortDescription: "Comprehensive construction solutions from residential to industrial projects",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
      icon: "Building",
      category: "construction",
      projectCount: 150,
      locations: "Lagos, Abuja, Port Harcourt",
      rating: 4.8,
      capabilities: [
        "Residential Construction",
        "Commercial Buildings",
        "Infrastructure Development",
        "Project Management",
        "Quality Assurance",
        "Safety Compliance"
      ],
      recentProject: {
        description: "Completed 50-unit residential complex in Victoria Island, Lagos",
        outcome: "Delivered 2 weeks ahead of schedule",
        date: "December 2024"
      },
      testimonial: {
        content: "Paulotam delivered exceptional quality on our office complex. Their attention to detail and timeline management was outstanding.",
        author: "Adebayo Ogundimu",
        company: "Zenith Properties Ltd"
      },
      certifications: ["COREN Certified", "ISO 9001", "OHSAS 18001", "Green Building Council"]
    },
    {
      id: "2",
      name: "Information Technology Services",
      shortDescription: "Cutting-edge IT solutions and digital transformation services",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      icon: "Laptop",
      category: "technology",
      projectCount: 200,
      locations: "Lagos, Abuja, Kano",
      rating: 4.9,
      capabilities: [
        "Software Development",
        "Cloud Solutions",
        "Cybersecurity",
        "IT Infrastructure",
        "Digital Transformation",
        "Technical Support"
      ],
      recentProject: {
        description: "Implemented comprehensive ERP system for manufacturing company",
        outcome: "40% improvement in operational efficiency",
        date: "January 2025"
      },
      testimonial: {
        content: "Their technical expertise and understanding of Nigerian business needs made our digital transformation seamless.",
        author: "Fatima Abdullahi",
        company: "Northern Industries"
      },
      certifications: ["Microsoft Partner", "AWS Certified", "ISO 27001", "NITDA Registered"]
    },
    {
      id: "3",
      name: "Business Consulting",
      shortDescription: "Strategic business advisory and management consulting services",
      image: "https://images.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
      icon: "Users",
      category: "consulting",
      projectCount: 120,
      locations: "Lagos, Abuja, Ibadan",
      rating: 4.7,
      capabilities: [
        "Strategic Planning",
        "Process Optimization",
        "Change Management",
        "Market Research",
        "Financial Advisory",
        "Organizational Development"
      ],
      recentProject: {
        description: "Restructured operations for mid-size logistics company",
        outcome: "25% cost reduction achieved",
        date: "November 2024"
      },
      testimonial: {
        content: "Paulotam\'s strategic insights helped us navigate market challenges and emerge stronger. Highly recommended.",
        author: "Chinedu Okwu",
        company: "Swift Logistics Nigeria"
      },
      certifications: ["PMI Certified", "Six Sigma", "ACCA Partnership", "Nigerian Institute of Management"]
    },
    {
      id:"4",
      name: "Supply Chain & Logistics",
      shortDescription: "End-to-end logistics solutions and supply chain optimization",
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg",
      icon: "Truck",
      category: "logistics",
      projectCount: 180,
      locations: "Lagos, Kano, Onitsha, Port Harcourt",
      rating: 4.6,
      capabilities: [
        "Warehousing Solutions",
        "Transportation Management",
        "Inventory Optimization",
        "Last-Mile Delivery",
        "Cross-Border Logistics",
        "Supply Chain Analytics"
      ],
      recentProject: {
        description: "Optimized distribution network for FMCG company across West Africa",
        outcome: "30% reduction in delivery time",
        date: "December 2024"
      },
      testimonial: {
        content: "Their logistics expertise transformed our distribution efficiency. We now reach more customers faster than ever.",
        author: "Amina Hassan",
        company: "West African Distributors"
      },
      certifications: ["CILT Certified", "ISO 28000", "FIATA Member", "Customs Licensed"]
    },
    {
      id: "5",
      name: "Financial Services",
      shortDescription: "Comprehensive financial advisory and accounting services",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      icon: "DollarSign",
      category: "consulting",
      projectCount: 90,
      locations: "Lagos, Abuja, Kano",
      rating: 4.8,
      capabilities: [
        "Financial Planning",
        "Tax Advisory",
        "Audit Services",
        "Investment Advisory",
        "Risk Management",
        "Regulatory Compliance"
      ],
      recentProject: {
        description: "Completed comprehensive financial restructuring for tech startup",
        outcome: "Secured ₦500M Series A funding",
        date: "January 2025"
      },
      testimonial: {
        content: "Their financial expertise was crucial in our funding round. Professional, thorough, and results-driven.",
        author: "Kemi Adebayo",
        company: "TechNova Solutions"
      },
      certifications: ["ICAN Certified", "ACCA Member", "CFA Institute", "SEC Licensed"]
    },
    {
      id: "6",
      name: "Training & Development",
      shortDescription: "Professional development and corporate training solutions",
      image: "https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      icon: "GraduationCap",
      category: "consulting",
      projectCount: 75,
      locations: "Lagos, Abuja, Ibadan, Enugu",
      rating: 4.9,
      capabilities: [
        "Leadership Development",
        "Technical Training",
        "Soft Skills Training",
        "Digital Literacy",
        "Certification Programs",
        "E-Learning Solutions"
      ],
      recentProject: {
        description: "Delivered comprehensive leadership program for 200+ managers",
        outcome: "95% participant satisfaction rate",
        date: "December 2024"
      },
      testimonial: {
        content: "The training programs significantly improved our team's capabilities. Excellent content and delivery.",
        author: "Olumide Fashola",
        company: "First Bank Nigeria"
      },
      certifications: ["ATD Certified", "ICF Accredited", "Microsoft Learning", "Google Certified"]
    },
    {
      id: "7",
      name: "Real Estate Development",
      shortDescription: "Property development and real estate investment services",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      icon: "Home",
      category: "construction",
      projectCount: 65,
      locations: "Lagos, Abuja, Ibadan",
      rating: 4.7,
      capabilities: [
        "Property Development",
        "Real Estate Investment",
        "Property Management",
        "Market Analysis",
        "Legal Documentation",
        "Project Financing"
      ],
      recentProject: {
        description: "Developed luxury residential estate in Lekki, Lagos",
        outcome: "100% pre-sale achievement",
        date: "November 2024"
      },
      testimonial: {
        content: "Paulotam's real estate expertise helped us identify and develop prime properties with excellent ROI.",
        author: "Ibrahim Musa",
        company: "Capital Properties"
      },
      certifications: ["NIESV Member", "RICS Certified", "Estate Surveyors License", "REDAN Member"]
    },
    {
      id: "8",
      name: "Digital Marketing & Media",
      shortDescription: "Comprehensive digital marketing and brand management services",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      icon: "Megaphone",
      category: "technology",
      projectCount: 110,
      locations: "Lagos, Abuja, Port Harcourt",
      rating: 4.8,
      capabilities: [
        "Digital Strategy",
        "Social Media Marketing",
        "Content Creation",
        "SEO/SEM",
        "Brand Management",
        "Analytics & Reporting"
      ],
      recentProject: {
        description: "Launched comprehensive digital campaign for fintech startup",
        outcome: "300% increase in user acquisition",
        date: "January 2025"
      },
      testimonial: {
        content: "Their digital marketing strategies transformed our online presence and significantly boosted our customer base.",
        author: "Sarah Okafor",
        company: "PayNow Fintech"
      },
      certifications: ["Google Ads Certified", "Facebook Blueprint", "HubSpot Certified", "APCON Registered"]
    },
    {
      id: "9",
      name: "Legal & Regulatory Services",
      shortDescription: "Comprehensive legal advisory and regulatory compliance services",
      image: "https://images.pixabay.com/photo/2017/07/10/23/49/club-2492011_1280.jpg",
      icon: "Scale",
      category: "consulting",
      projectCount: 85,
      locations: "Lagos, Abuja, Port Harcourt",
      rating: 4.9,
      capabilities: [
        "Corporate Law",
        "Contract Drafting",
        "Regulatory Compliance",
        "Intellectual Property",
        "Dispute Resolution",
        "Due Diligence"
      ],
      recentProject: {
        description: "Successfully handled merger & acquisition for two tech companies",
        outcome: "Seamless transaction completion",
        date: "December 2024"
      },
      testimonial: {
        content: "Their legal expertise and attention to detail ensured our business operations remain compliant and protected.",
        author: "Emeka Okonkwo",
        company: "Delta Manufacturing"
      },
      certifications: ["NBA Member", "ICSAN Certified", "Notary Public", "Arbitration Institute"]
    }
  ];



    // Mock Projects Data
export  const mockProjects : Project[] = [
    {
      id: "PRJ-001",
      title: "Lagos Commercial Complex Development",
      sector: "Construction",
      location: "Lagos",
      client: "Mainland Properties Ltd",
      clientType: "Private Developer",
      status: "Completed",
      value: 2500000000,
      duration: "18 months",
      completionPercentage: 100,
      rating: 4.9,
      teamSize: 45,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      description: "Modern 12-story commercial complex with retail spaces, offices, and parking facilities in Victoria Island business district.",
      fullDescription: `This flagship commercial development project transformed a prime Victoria Island location into a modern business hub. The 12-story complex features state-of-the-art office spaces, ground-floor retail units, and a multi-level parking facility. Our team delivered exceptional quality while maintaining strict adherence to Lagos State building regulations and international safety standards.

The project incorporated sustainable building practices, energy-efficient systems, and modern architectural design that complements the surrounding business district. Advanced project management techniques ensured on-time delivery despite challenging urban construction conditions.`,
      keyResults: [
        "100% occupancy within 6 months",
        "LEED Gold certification achieved",
        "Zero safety incidents during construction",
        "15% under budget completion"
      ],
      challenges: [
        "Complex urban construction environment",
        "Strict Lagos State building regulations",
        "Limited site access for materials delivery",
        "Coordination with multiple utility providers"
      ],
      solutions: [
        "Implemented advanced project scheduling system",
        "Established dedicated regulatory compliance team",
        "Created innovative material delivery logistics plan",
        "Developed comprehensive stakeholder communication protocol"
      ],
      timeline: [
        {
          title: "Project Initiation & Planning",
          date: "Jan 2022",
          description: "Site survey, permits, and detailed project planning completed",
          completed: true
        },
        {
          title: "Foundation & Structural Work",
          date: "Mar 2022",
          description: "Deep foundation work and structural framework construction",
          completed: true
        },
        {
          title: "Building Systems Installation",
          date: "Sep 2022",
          description: "Electrical, plumbing, HVAC, and elevator systems installation",
          completed: true
        },
        {
          title: "Interior Finishing & Handover",
          date: "Jun 2023",
          description: "Interior finishing, final inspections, and client handover",
          completed: true
        }
      ],
      metrics: [
        { label: "Floor Area", value: "25,000", improvement: "sqm", unit: "m²" },
        { label: "Office Units", value: "120", improvement: "units", unit: "" },
        { label: "Parking Spaces", value: "200", improvement: "spaces", unit: "" }
      ],
      impact: "This project has become a landmark in Victoria Island's business district, providing modern office spaces for over 50 companies and creating approximately 800 direct employment opportunities. The sustainable design features have reduced energy consumption by 30% compared to similar buildings in the area.",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop"
      ],
      testimonial: {
        content: "Paulotam Global Services exceeded our expectations in every aspect of this project. Their attention to detail, adherence to timelines, and quality of work is exceptional. The building has become a prestigious address in Lagos.",
        author: "Adebayo Ogundimu",
        position: "Managing Director",
        company: "Mainland Properties Ltd"
      },
      lastUpdated: "15/08/2024"
    },
    {
      id: "PRJ-002",
      title: "Smart Agriculture Processing Facility",
      sector: "Agriculture",
      location: "Kaduna",
      client: "Northern Agro Industries",
      clientType: "Agricultural Cooperative",
      status: "Completed",
      value: 850000000,
      duration: "12 months",
      completionPercentage: 100,
      rating: 4.8,
      teamSize: 28,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
      description: "State-of-the-art food processing facility with automated systems for grain processing, packaging, and cold storage.",
      fullDescription: `This innovative agricultural processing facility represents a significant advancement in Nigeria's food processing capabilities. The facility incorporates cutting-edge technology for grain processing, automated packaging systems, and temperature-controlled storage facilities. Our comprehensive approach included technology integration, staff training, and operational optimization.

The project supports local farmers by providing modern processing capabilities that meet international food safety standards. Advanced quality control systems ensure consistent product quality while maximizing processing efficiency and minimizing waste.`,
      keyResults: [
        "300% increase in processing capacity",
        "ISO 22000 food safety certification",
        "50% reduction in post-harvest losses",
        "200 direct jobs created"
      ],
      challenges: [
        "Integration of complex automated systems",
        "Training local workforce on new technology",
        "Ensuring consistent power supply",
        "Meeting international food safety standards"
      ],
      solutions: [
        "Comprehensive technology training program",
        "Installation of backup power generation",
        "Implemented robust quality management system",
        "Established partnerships with international certification bodies"
      ],
      timeline: [
        {
          title: "Facility Design & Engineering",
          date: "Feb 2023",
          description: "Detailed facility design and equipment specification",
          completed: true
        },
        {
          title: "Construction & Infrastructure",
          date: "May 2023",
          description: "Building construction and utility infrastructure",
          completed: true
        },
        {
          title: "Equipment Installation",
          date: "Sep 2023",
          description: "Processing equipment and automation systems installation",
          completed: true
        },
        {
          title: "Testing & Commissioning",
          date: "Jan 2024",
          description: "System testing, staff training, and facility commissioning",
          completed: true
        }
      ],
      metrics: [
        { label: "Processing Capacity", value: "500", improvement: "tons/day", unit: "tons" },
        { label: "Storage Capacity", value: "2,000", improvement: "tons", unit: "tons" },
        { label: "Energy Efficiency", value: "85%", improvement: "efficiency", unit: "%" }
      ],
      impact: "The facility has transformed agricultural processing in Kaduna State, enabling local farmers to access modern processing capabilities and reach new markets. The project has significantly reduced post-harvest losses and improved food security in the region.",
      gallery: [
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=800&h=600&fit=crop"
      ],
      testimonial: {
        content: "This facility has revolutionized our operations. The technology and systems implemented by Paulotam have enabled us to compete in international markets while supporting our local farming community.",
        author: "Hauwa Abdullahi",
        position: "General Manager",
        company: "Northern Agro Industries"
      },
      lastUpdated: "12/08/2024"
    },
    {
      id: "PRJ-003",
      title: "Digital Banking Platform Development",
      sector: "Technology",
      location: "Abuja",
      client: "Unity Microfinance Bank",
      clientType: "Financial Institution",
      status: "Ongoing",
      value: 450000000,
      duration: "8 months",
      completionPercentage: 75,
      rating: 4.7,
      teamSize: 22,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Comprehensive digital banking solution with mobile app, web platform, and core banking system integration.",
      fullDescription: `This comprehensive digital transformation project is modernizing Unity Microfinance Bank's operations through a complete digital banking ecosystem. The solution includes a customer-facing mobile application, web-based banking platform, and integration with existing core banking systems.

Our development approach emphasizes security, user experience, and regulatory compliance with Central Bank of Nigeria requirements. The platform incorporates advanced features such as biometric authentication, real-time transaction processing, and comprehensive financial analytics.`,
      keyResults: [
        "Mobile app with 50,000+ downloads",
        "99.9% system uptime achieved",
        "40% reduction in transaction processing time",
        "CBN compliance certification pending"
      ],
      challenges: [
        "Integration with legacy banking systems",
        "Ensuring CBN regulatory compliance",
        "Implementing robust security measures",
        "User adoption and training requirements"
      ],
      solutions: [
        "Developed custom API integration layer",
        "Established dedicated compliance team",
        "Implemented multi-layer security architecture",
        "Created comprehensive user training program"
      ],
      timeline: [
        {
          title: "Requirements Analysis & Design",
          date: "Jan 2024",
          description: "System requirements gathering and UI/UX design",
          completed: true
        },
        {
          title: "Core Development Phase",
          date: "Mar 2024",
          description: "Backend development and database implementation",
          completed: true
        },
        {
          title: "Mobile App Development",
          date: "Jun 2024",
          description: "iOS and Android mobile application development",
          completed: true
        },
        {
          title: "Testing & Deployment",
          date: "Sep 2024",
          description: "System testing, security audit, and production deployment",
          completed: false
        }
      ],
      metrics: [
        { label: "Active Users", value: "25,000", improvement: "users", unit: "" },
        { label: "Transaction Volume", value: "₦2.5B", improvement: "monthly", unit: "" },
        { label: "Response Time", value: "<2s", improvement: "average", unit: "" }
      ],
      impact: "The digital banking platform is transforming financial inclusion in the FCT region, providing previously underserved communities with access to modern banking services through mobile technology.",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
      ],
      testimonial: {
        content: "Paulotam\'s technical expertise and understanding of the Nigerian banking sector has been invaluable. The platform they\'re developing will transform how we serve our customers.",
        author: "Dr. Amina Hassan",
        position: "Managing Director",
        company: "Unity Microfinance Bank"
      },
      lastUpdated: "16/08/2024"
    },
    {
      id: "PRJ-004",
      title: "Regional Medical Center Construction",
      sector: "Healthcare",
      location: "Port Harcourt",
      client: "Rivers State Government",
      clientType: "Government Agency",
      status: "Completed",
      value: 3200000000,
      duration: "24 months",
      completionPercentage: 100,
      rating: 4.9,
      teamSize: 65,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
      description: "Modern 200-bed medical facility with specialized departments, emergency services, and advanced medical equipment.",
      fullDescription: `This flagship healthcare infrastructure project delivered a world-class medical facility to serve the Niger Delta region. The 200-bed hospital features specialized departments including cardiology, oncology, pediatrics, and emergency services, equipped with state-of-the-art medical technology.

Our comprehensive approach included medical equipment procurement, staff training coordination, and implementation of hospital management systems. The facility meets international healthcare standards while being designed specifically for the Nigerian healthcare environment.`,
      keyResults: [
        "200-bed capacity with 95% occupancy",
        "24/7 emergency services operational",
        "JCI accreditation in progress",
        "500+ healthcare jobs created"
      ],
      challenges: [
        "Complex medical equipment installation",
        "Coordination with international suppliers",
        "Training specialized medical staff",
        "Ensuring continuous power supply"
      ],
      solutions: [
        "Established partnerships with global medical equipment suppliers",
        "Implemented comprehensive staff training program",
        "Installed redundant power generation systems",
        "Created detailed operational procedures manual"
      ],
      timeline: [
        {
          title: "Planning & Design Phase",
          date: "Jun 2021",
          description: "Architectural design and medical equipment planning",
          completed: true
        },
        {
          title: "Construction Phase 1",
          date: "Oct 2021",
          description: "Foundation and structural construction",
          completed: true
        },
        {
          title: "Construction Phase 2",
          date: "Jun 2022",
          description: "Interior finishing and medical infrastructure",
          completed: true
        },
        {
          title: "Equipment Installation & Commissioning",
          date: "May 2023",
          description: "Medical equipment installation and facility commissioning",
          completed: true
        }
      ],
      metrics: [
        { label: "Bed Capacity", value: "200", improvement: "beds", unit: "" },
        { label: "Daily Patients", value: "800", improvement: "average", unit: "" },
        { label: "Departments", value: "12", improvement: "specialized", unit: "" }
      ],
      impact: "The medical center has significantly improved healthcare access in the Niger Delta region, reducing medical tourism to other states and providing specialized care previously unavailable in the area.",
      gallery: [
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop"
      ],
      testimonial: {
        content: "This medical center represents a new standard of healthcare infrastructure in Rivers State. Paulotam\'s expertise in healthcare facility development has been exceptional.",
        author: "Prof. Chidi Okwu",
        position: "Commissioner for Health",
        company: "Rivers State Government"
      },
      lastUpdated: "10/08/2024"
    },
    {
      id: "PRJ-005",
      title: "Technical University Campus Development",
      sector: "Education",
      location: "Kano",
      client: "Kano State University of Technology",
      clientType: "Educational Institution",
      status: "Ongoing",
      value: 1800000000,
      duration: "30 months",
      completionPercentage: 60,
      rating: 4.6,
      teamSize: 55,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
      description: "Modern university campus with lecture halls, laboratories, student accommodation, and recreational facilities.",
      fullDescription: `This ambitious educational infrastructure project is creating a modern university campus designed to accommodate 15,000 students. The development includes academic buildings, research laboratories, student accommodation, sports facilities, and administrative offices.

Our approach emphasizes sustainable design, modern learning environments, and integration of technology throughout the campus. The project incorporates renewable energy systems, water conservation measures, and flexible spaces that can adapt to evolving educational needs.`,
      keyResults: [
        "Phase 1 completed: 8 buildings operational",
        "2,500 students currently enrolled",
        "Green building certification achieved",
        "300+ construction jobs created"
      ],
      challenges: [
        "Large-scale project coordination",
        "Integration of modern educational technology",
        "Sustainable design implementation",
        "Phased construction while maintaining operations"
      ],
      solutions: [
        "Implemented advanced project management systems",
        "Established dedicated technology integration team",
        "Created comprehensive sustainability plan",
        "Developed detailed phasing strategy"
      ],
      timeline: [
        {
          title: "Master Planning & Design",
          date: "Mar 2022",
          description: "Campus master plan and architectural design development",
          completed: true
        },
        {
          title: "Phase 1 Construction",
          date: "Aug 2022",
          description: "Academic buildings and basic infrastructure",
          completed: true
        },
        {
          title: "Phase 2 Construction",
          date: "Feb 2024",
          description: "Student accommodation and recreational facilities",
          completed: false
        },
        {
          title: "Phase 3 & Final Completion",
          date: "Dec 2024",
          description: "Research facilities and campus completion",
          completed: false
        }
      ],
      metrics: [
        { label: "Campus Area", value: "150", improvement: "hectares", unit: "ha" },
        { label: "Building Capacity", value: "15,000", improvement: "students", unit: "" },
        { label: "Facilities", value: "25", improvement: "buildings", unit: "" }
      ],
      impact: "The university campus is transforming higher education in Northern Nigeria, providing world-class facilities for technical education and research, contributing to regional economic development.",
      gallery: [
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&h=600&fit=crop"
      ],
      testimonial: {
        content: "Paulotam is delivering a campus that will set new standards for technical education in Nigeria. Their attention to detail and commitment to quality is remarkable.",
        author: "Prof. Musa Abdullahi",
        position: "Vice-Chancellor",
        company: "Kano State University of Technology"
      },
      lastUpdated: "14/08/2024"
    },
    {
      id: "PRJ-006",
      title: "Solar Power Generation Facility",
      sector: "Energy",
      location: "Jos",
      client: "Plateau Energy Solutions",
      clientType: "Energy Company",
      status: "Completed",
      value: 1200000000,
      duration: "15 months",
      completionPercentage: 100,
      rating: 4.8,
      teamSize: 35,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      description: "50MW solar power facility with battery storage system and grid integration capabilities.",
      fullDescription: `This renewable energy project established a 50MW solar power generation facility with advanced battery storage systems. The installation includes 150,000 solar panels, inverter systems, and grid integration infrastructure designed to provide clean energy to over 40,000 households.

The project incorporates cutting-edge solar technology, smart grid integration, and comprehensive monitoring systems. Our team managed all aspects from site preparation and equipment installation to grid connection and commissioning.`,
      keyResults: [
        "50MW clean energy generation capacity",
        "40,000+ households powered",
        "60% reduction in carbon emissions",
        "25-year power purchase agreement secured"
      ],
      challenges: [
        "Large-scale solar panel installation",
        "Grid integration complexity",
        "Weather-resistant system design",
        "Local workforce training requirements"
      ],
      solutions: [
        "Implemented advanced installation techniques",
        "Developed comprehensive grid integration plan",
        "Used weather-resistant equipment and materials",
        "Created extensive training program for local technicians"
      ],
      timeline: [
        {
          title: "Site Preparation & Planning",
          date: "Jan 2023",
          description: "Land preparation and infrastructure planning",
          completed: true
        },
        {
          title: "Solar Panel Installation",
          date: "Apr 2023",
          description: "Installation of solar panels and mounting systems",
          completed: true
        },
        {
          title: "Electrical Systems Integration",
          date: "Sep 2023",
          description: "Inverters, battery storage, and electrical infrastructure",
          completed: true
        },
        {
          title: "Grid Connection & Commissioning",
          date: "Mar 2024",
          description: "Grid integration and facility commissioning",
          completed: true
        }
      ],
      metrics: [
        { label: "Generation Capacity", value: "50", improvement: "MW", unit: "MW" },
        { label: "Annual Output", value: "85", improvement: "GWh", unit: "GWh" },
        { label: "CO2 Reduction", value: "42,000", improvement: "tons/year", unit: "tons" }
      ],
      impact: "The solar facility has significantly improved energy security in Plateau State while demonstrating the viability of large-scale renewable energy projects in Nigeria's Middle Belt region.",
      gallery: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
      ],
      testimonial: {
        content: "This solar facility has exceeded our expectations in terms of performance and reliability. Paulotam\'s expertise in renewable energy infrastructure is world-class.",
        author: "Eng. Daniel Pwajok",
        position: "Managing Director",
        company: "Plateau Energy Solutions"
      },
      lastUpdated: "08/08/2024"
    }
  ];
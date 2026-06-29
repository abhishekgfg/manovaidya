import React from "react";
import {
  Baby,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Mail,
  MessageCircle,
  Puzzle,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";
import childHeroImage from "../images/learning-attention-difficulties-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctor-ankush-portrait.png";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "What are Learning Difficulties?", id: "what-are-learning-difficulties" },
  { label: "Learning vs Attention", id: "learning-vs-attention" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Beyond Academics", id: "beyond-academics" },
  { label: "Assessment", id: "assessment" },
  { label: "Learning Support", id: "learning-support" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Parent Guidance", id: "parent-guidance" },
  { label: "How We Work", id: "how-we-work" },
  { label: "Why Manovaidya", id: "why-manovaidya" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Autism", count: 12, Icon: Puzzle },
  { label: "ADHD", count: 10, Icon: Brain },
  { label: "Speech Delay", count: 8, Icon: MessageCircle },
  { label: "Child Development", count: 11, Icon: Baby },
  { label: "Learning", count: 9, Icon: BookOpen },
  { label: "Parenting", count: 9, Icon: Users },
];

const signGroups = [
  {
    title: "Attention Challenges",
    items: [
      "Difficulty maintaining focus",
      "Easily distracted",
      "Difficulty completing tasks",
      "Frequently shifting attention",
      "Child not focusing in studies",
    ],
  },
  {
    title: "Learning Challenges",
    items: [
      "Difficulty understanding concepts",
      "Slow learning pace",
      "Requiring repeated instructions",
      "Academic struggles",
      "Difficulty keeping up with age-appropriate learning",
    ],
  },
  {
    title: "Memory Difficulties",
    items: [
      "Forgetting recently learned information",
      "Difficulty recalling instructions",
      "Poor retention of concepts",
      "Difficulty completing classwork",
    ],
  },
  {
    title: "School-Related Concerns",
    items: [
      "Homework challenges",
      "Difficulty staying organized",
      "Reduced classroom participation",
      "Academic underperformance",
      "Falling behind in school",
    ],
  },
  {
    title: "Behaviour During Learning",
    items: [
      "Frustration during study activities",
      "Avoiding academic tasks",
      "Low confidence in learning situations",
      "Poor school performance",
    ],
  },
];

const learningInfluences = [
  "Attention skills",
  "Communication abilities",
  "Emotional wellbeing",
  "Behavioural patterns",
  "Sensory processing",
  "Developmental readiness",
  "Social interaction",
];

const assessmentGroups = [
  {
    title: "Developmental History",
    items: ["Early development", "Learning patterns", "Academic concerns", "Parent observations"],
  },
  {
    title: "Learning Understanding",
    items: ["Attention profile", "Memory skills", "Communication abilities", "Learning readiness", "Behaviour during learning"],
  },
  {
    title: "Family Perspective",
    items: ["Parent concerns", "School challenges", "Developmental goals", "Long-term priorities"],
  },
];

const supportFactors = [
  "Attention difficulties",
  "Communication concerns",
  "Behavioural factors",
  "Emotional wellbeing",
  "Developmental readiness",
  "Environmental influences",
];

const pillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Supports understanding of cognitive development, learning and attention.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Focuses on overall wellbeing and developmental functioning.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps understand learning readiness, memory and developmental growth.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Supports understanding of sensory influences affecting attention and learning.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families understand behavioural influences that may affect academic participation and learning.",
  },
];

const supportPoints = [
  "Learning Assessment",
  "Attention Understanding",
  "Developmental Planning",
  "Parent Guidance",
  "Academic Readiness",
  "Communication Development",
  "Progress Monitoring",
  "Long-Term Family Support",
];

const parentConcerns = [
  "Worry about academic progress",
  "Frustration during homework",
  "Confusion about learning difficulties",
  "Concerns regarding future success",
];

const whyChoose = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Learning Assessment",
  "Child-Centred & Family-Centred Approach",
  "Focus on Learning, Attention & Development",
  "Long-Term Guidance & Progress Tracking",
  "Individualized Development Planning",
  "Compassionate and Structured Support",
];

const relatedPages = [
  { title: "Autism Treatment in India", href: "/autism-treatment-india", image: childHeroImage },
  { title: "ADHD Treatment in India", href: "/child-health-care/adhd-child", image: supportFamilyImage },
  { title: "Speech Delay & Communication Support", href: "/speech-delay-support-india", image: signsImage },
  { title: "Child Development Support in India", href: "/child-health-care", image: ctaImage },
  { title: "Know more about Dr. Ankush Garg", href: "/about/doctor", image: doctorImage },
];

const faqs = [
  {
    question: "What are learning and attention difficulties?",
    answer:
      "Learning and attention difficulties may affect a child's ability to focus, understand information, remember concepts, complete tasks or perform effectively in learning environments. Some children struggle mainly with concentration, while others face challenges with memory, comprehension or academic performance.",
  },
  {
    question: "What are the early signs of learning difficulties in children?",
    answer:
      "Early signs may include difficulty understanding age-appropriate concepts, needing repeated instructions, trouble remembering information, slow academic progress, difficulty recognizing letters or numbers and frustration during learning tasks.",
  },
  {
    question: "What are the common signs of attention difficulties in children?",
    answer:
      "Children may struggle to stay focused, become easily distracted, forget instructions, shift frequently from one activity to another or have difficulty completing tasks. These challenges can affect learning, classroom participation and daily routines.",
  },
  {
    question: "What is the difference between a learning disability and ADHD?",
    answer:
      "A learning disability mainly affects how a child processes, understands or uses information. ADHD mainly affects attention, focus, impulsivity and self-regulation. They can occur together, but they are not the same.",
  },
  {
    question: "Do learning disabilities affect intelligence?",
    answer:
      "No. Many children with learning difficulties have average or above-average intelligence but may process information differently. Learning challenges should not be viewed as a measure of a child's potential.",
  },
  {
    question: "Why does my child struggle to focus on studies?",
    answer:
      "Difficulty focusing can be influenced by attention challenges, learning difficulties, emotional stress, communication concerns, developmental readiness or environmental distractions. Understanding the reason helps families choose better support strategies.",
  },
  {
    question: "Why does my child forget things so quickly?",
    answer:
      "Forgetfulness may relate to attention difficulties, learning challenges, memory processing differences, emotional stress or incomplete understanding of concepts. Memory is closely connected with attention and learning readiness.",
  },
  {
    question: "Can learning difficulties affect school performance?",
    answer:
      "Yes. Learning difficulties can affect understanding lessons, completing assignments, retaining information and participating in class. They may also affect confidence and motivation.",
  },
  {
    question: "Can communication difficulties affect learning?",
    answer:
      "Yes. Communication skills help children understand instructions, ask questions, express ideas and participate in school. Language or social communication challenges can influence learning and confidence.",
  },
  {
    question: "Can learning disabilities be overcome?",
    answer:
      "Every child is different. Many children make meaningful progress with appropriate guidance, structured support and learning opportunities. The goal is to build skills, confidence and participation over time.",
  },
  {
    question: "How can parents support learning and attention development at home?",
    answer:
      "Parents can create routines, break tasks into smaller steps, reduce distractions, encourage reading, use positive reinforcement and provide learning through play and meaningful conversation.",
  },
  {
    question: "What activities can help improve attention and learning skills?",
    answer:
      "Reading, storytelling, puzzles, memory games, creative activities, problem-solving tasks and turn-taking games can support attention, communication and learning development.",
  },
  {
    question: "When should parents seek help for learning and attention difficulties?",
    answer:
      "Parents may seek guidance when challenges affect school performance, daily functioning, confidence, memory, concentration, task completion or participation in age-appropriate activities.",
  },
  {
    question: "What is the Neuro-Ayurveda Development System?",
    answer:
      "It is a structured five-pillar framework developed by Dr. Ankush Garg to understand brain nourishment, gut response, neural networks, sensory integration and behaviour guidance in developmental concerns.",
  },
  {
    question: "How does Manovaidya assess and support children with learning and attention difficulties?",
    answer:
      "Manovaidya assesses developmental history, attention abilities, learning patterns, communication skills, behaviour, school concerns and parent feedback, then provides personalized guidance and a structured developmental roadmap.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function LearningAttentionDifficultiesIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = "Learning & Attention Difficulties Support in India | Child Learning Assessment | Manovaidya";

    const setMetaTag = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMetaTag(
      "description",
      "Looking for support for learning and attention difficulties in children? Learn about child learning assessment, attention development and developmental support through the Neuro-Ayurveda Development System at Manovaidya."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/learning-attention-difficulties-india`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Learning & Attention Difficulties Support in India",
          description:
            "Learning assessment, attention support and child development guidance through the Neuro-Ayurveda Development System.",
          url: `${window.location.origin}/learning-attention-difficulties-india`,
          medicalAudience: "Parent",
        },
        {
          "@type": "Organization",
          name: "Manovaidya",
          url: window.location.origin,
        },
        {
          "@type": "Person",
          name: "Dr. Ankush Garg",
          jobTitle: "Autism, ADHD, Child Development & Mental Health Specialist",
          worksFor: { "@type": "Organization", name: "Manovaidya" },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
            { "@type": "ListItem", position: 2, name: "Child Development Care", item: `${window.location.origin}/child-health-care` },
            { "@type": "ListItem", position: 3, name: "Learning & Attention Difficulties Support in India", item: `${window.location.origin}/learning-attention-difficulties-india` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    };

    const scriptId = "learning-attention-schema";
    let schemaScript = document.getElementById(scriptId);
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = scriptId;
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, []);

  React.useEffect(() => {
    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + 170;
      let currentSection = pageLinks[0].id;

      pageLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollMarker) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main className="bg-[#fbf9fd] text-[#1f1726]">
      <section className="border-b border-[#eadff1] bg-white">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 px-4 py-4 text-[11px] font-bold text-[#75677d] sm:px-6 lg:px-8">
          <a href="/" className="transition hover:text-[#7835A4]">Home</a>
          <span>/</span>
          <a href="/child-health-care" className="transition hover:text-[#7835A4]">Child Health Care</a>
          <span>/</span>
          <span className="text-[#21142d]">Learning & Attention Difficulties</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-7 px-4 py-8 sm:px-6 lg:grid-cols-[230px_minmax(0,1fr)_320px] lg:px-8">
        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-5">
            <SidebarCard>
              <h2 className="text-[15px] font-black text-[#21142d]">On this page</h2>
              <nav className="mt-5 space-y-3.5">
                {pageLinks.map(({ label, id }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setActiveSection(id)}
                    className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${
                      activeSection === id
                        ? "bg-[#f0e7f6] text-[#7835A4]"
                        : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"
                    }`}
                  >
                    <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcf]"}`} />
                    {label}
                  </a>
                ))}
              </nav>
            </SidebarCard>

            <SidebarCard className="bg-[#fcf9ff]">
              <Users className="h-8 w-8 text-[#7835A4]" />
              <h3 className="mt-4 text-[15px] font-black text-[#21142d]">Need Personalized Guidance?</h3>
              <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
                Our experts are here to understand your child's learning and attention needs.
              </p>
              <a href="#book-consultation" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-4 text-[12px] font-black text-white transition hover:bg-[#632b86]">
                Book a Consultation
              </a>
            </SidebarCard>
          </div>
        </div>

        <article className="min-w-0">
          <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Learning Assessment & Attention Support</p>
          <h1 className="mt-3 max-w-[820px] text-[32px] font-black leading-[1.12] text-[#17111f] sm:text-[42px]">
            Learning & Attention Difficulties Support in India
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] font-bold leading-7 text-[#5a5063]">
            Learning assessment, attention support and child development guidance for children facing concentration, memory, comprehension and academic challenges.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                <p className="text-[12px] font-bold text-[#75677d]">Autism, ADHD, Child Development & Mental Health Specialist</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[12px] font-black text-[#75677d]">
              <span>Share:</span>
              {["f", "x", "in", "wa"].map((label) => (
                <a key={label} href="#share" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white" aria-label="Share article">
                  {label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}
                </a>
              ))}
            </div>
          </div>

          <figure className="mt-7 overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-[0_14px_35px_rgba(58,31,90,0.08)]">
            <img src={childHeroImage} alt="Child studying with parent support" className="w-full h-auto object-contain" />
          </figure>

          <section id="what-are-learning-difficulties" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">What are Learning & Attention Difficulties?</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Learning and attention difficulties refer to challenges that may affect a child's ability to concentrate, process information, remember concepts, follow instructions or perform academic tasks effectively.
              </p>
              <p>
                Some children may struggle primarily with attention and focus, while others may experience difficulties with learning, comprehension, memory or task completion. Understanding these challenges requires looking beyond school performance and considering the child's overall developmental profile.
              </p>
            </div>
          </section>

          <section id="learning-vs-attention" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Learning Difficulties vs Attention Difficulties</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Some children struggle primarily with learning new concepts, while others experience difficulties maintaining attention and focus. Although these concerns can occur together, they are not always the same. Understanding the difference helps families identify the most appropriate developmental support and guidance.
            </p>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Learning & Attention Difficulties</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {signGroups.map((group) => (
                <div key={group.title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                  <h3 className="text-[14px] font-black text-[#21142d]">{group.title}</h3>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-[12px] font-semibold leading-5 text-[#5f5367]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="beyond-academics" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Learning Beyond Academics</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Learning difficulties are not only related to intelligence. A child may be intelligent and capable while still struggling with attention, memory, processing speed, emotional regulation or communication.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {learningInfluences.map((item) => (
                <span key={item} className="flex gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#51465a] ring-1 ring-[#eadff1]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="assessment" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Learning & Attention Assessment at Manovaidya</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
              <div>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a]">
                  Every child has a unique learning profile. Assessment focuses on understanding the child as a whole rather than evaluating academic performance alone.
                </p>
                <div className="mt-5 grid gap-3">
                  {assessmentGroups.map((group) => (
                    <div key={group.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                      <h3 className="text-[14px] font-black text-[#21142d]">{group.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-full bg-[#f4ecf8] px-3 py-1.5 text-[11px] font-black text-[#7835A4]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <img src={supportFamilyImage} alt="Doctor discussing learning concerns with parents" className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
            </div>
          </section>

          <section id="learning-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Learning Difficulties Support in India</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many families are looking for practical ways to help their child succeed academically and developmentally. Support focuses on understanding interconnected factors and creating a structured developmental plan.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportFactors.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <BookOpen className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-[12px] font-black leading-5 text-[#21142d]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, learning and attention support is guided by the Neuro-Ayurveda Development System developed by Dr. Ankush Garg. Together, these pillars provide a structured framework for understanding learning and developmental growth.
            </p>
            <img src={neuroDiagramImage} alt="Neuro-Ayurveda five pillar development system" className="mt-5 max-h-[320px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4" />
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {pillars.map(({ title, text, Icon }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[14px] font-black text-[#21142d]">{title}</h3>
                      <p className="mt-1 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="how-we-support" className="mt-9 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with Learning & Attention Difficulties</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Every child receives individualized guidance based on developmental needs and learning profile.
              </p>
              <ul className="mt-4 space-y-2.5">
                {supportPoints.map((point) => (
                  <li key={point} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <img src={signsImage} alt="Child engaged in learning and concentration activities" className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Learning challenges often affect the entire family. Parent guidance helps families better understand learning patterns and developmental influences while supporting long-term growth and confidence.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {parentConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-black text-[#7835A4]">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="how-we-work" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Work at Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Support begins with understanding the child's developmental profile, learning patterns, communication abilities, behaviour and family concerns. Based on this understanding, families receive personalized guidance and a structured developmental roadmap.
            </p>
          </section>

          <section id="why-manovaidya" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Greater Noida, Ghaziabad, Gurgaon, Faridabad, NCR and across India connect with Manovaidya for Learning Difficulties Support, Attention Assessment and Child Development Guidance.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <div className="flex gap-2 text-[13px] font-black text-[#21142d]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-white p-5">
            <div className="flex gap-4">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-20 w-20 rounded-lg object-cover" />
              <div>
                <p className="text-[12px] font-bold text-[#75677d]">About the Author</p>
                <h2 className="text-[15px] font-black text-[#21142d]">Dr. Ankush Garg</h2>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#51465a]">
                  Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Autism, ADHD, Child Development, Speech & Communication Challenges, Behavioural Concerns, Learning Difficulties and Mental Health support.
                </p>
              </div>
            </div>
          </section>

          <section id="related-developmental-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Related Developmental Support Areas</h2>
            <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
              Explore the developmental area that best matches your child's current needs and concerns.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedPages.map((item) => (
                <a key={item.title} href={item.href} className="rounded-lg border border-[#eadff1] bg-white p-4 text-[13px] font-black text-[#21142d] transition hover:border-[#7835A4] hover:text-[#7835A4]">
                  {item.title}
                </a>
              ))}
              <a href="/child-health-care" className="rounded-lg border border-[#eadff1] bg-white p-4 text-[13px] font-black text-[#21142d] transition hover:border-[#7835A4] hover:text-[#7835A4]">
                Behavioural Concerns in Children
              </a>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border-b border-[#eadff1] last:border-b-0">
                  <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-black text-[#21142d]" aria-expanded={openFaq === index}>
                    {faq.question}
                    <ChevronDown className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && (
                    <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
            <div className="grid gap-5 lg:grid-cols-[1fr_260px] lg:items-center">
              <div className="p-5">
                <h2 className="text-[20px] font-black text-[#17111f]">Book a Consultation</h2>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  If you are looking for support for learning difficulties, attention challenges, academic concerns or developmental guidance, schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <a href="tel:+917823894080" className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
                  Book Now
                </a>
              </div>
              <img src={ctaImage} alt="Happy family after learning support" className="h-full min-h-[240px] w-full object-cover" />
            </div>
          </section>
        </article>

        <div className="space-y-5">
          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Search</h2>
            <label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3">
              <input type="search" placeholder="Search topics..." className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]" />
              <Search className="h-4 w-4 text-[#7835A4]" />
            </label>
          </SidebarCard>

          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Categories</h2>
            <div className="mt-4 space-y-3">
              {categories.map(({ label, count, Icon }) => (
                <a key={label} href="#categories" className="flex items-center justify-between text-[12px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                  <span className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-[#7835A4]" />
                    {label}
                  </span>
                  <span>{count}</span>
                </a>
              ))}
            </div>
          </SidebarCard>

          <RelatedPagesCard />

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Get a personalized learning and attention support plan for your child.
            </p>
            <a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Book Now
            </a>
          </SidebarCard>
        </div>
      </section>

      <section className="border-y border-[#eadff1] bg-white">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_460px] lg:items-center lg:px-8">
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
              <Mail className="h-8 w-8" />
            </span>
            <div>
              <h2 className="text-[18px] font-black text-[#21142d]">Stay Updated with Insights That Matter</h2>
              <p className="mt-1 text-[13px] font-bold text-[#5f5367]">
                Subscribe to expert articles, learning guidance and Manovaidya updates.
              </p>
            </div>
          </div>
          <form className="flex gap-3">
            <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]" />
            <button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LearningAttentionDifficultiesIndiaPage;

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
import childHeroImage from "../images/speech-delay-support-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctor-ankush-portrait.png";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "What is Speech Delay?", id: "what-is-speech-delay" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Beyond Speech", id: "beyond-speech" },
  { label: "Assessment", id: "assessment" },
  { label: "Speech Delay Support", id: "speech-delay-support" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Parent Guidance", id: "parent-guidance" },
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
  { label: "Parenting", count: 9, Icon: Users },
  { label: "Mental Health", count: 13, Icon: HeartHandshake },
];

const signGroups = [
  {
    title: "Speech Development Concerns",
    items: [
      "Delayed first words",
      "Limited vocabulary",
      "Difficulty forming sentences",
      "Unclear speech",
      "Difficulty pronouncing words",
    ],
  },
  {
    title: "Language Understanding Challenges",
    items: [
      "Difficulty understanding instructions",
      "Reduced response during conversations",
      "Challenges following verbal directions",
      "Difficulty understanding questions",
    ],
  },
  {
    title: "Social Communication Challenges",
    items: [
      "Limited eye contact during communication",
      "Difficulty initiating conversations",
      "Reduced interaction with peers",
      "Difficulty expressing needs and emotions",
    ],
  },
  {
    title: "Communication Confidence Concerns",
    items: [
      "Frustration while trying to communicate",
      "Avoiding conversations",
      "Difficulty participating in group interactions",
      "Reduced confidence during communication",
    ],
  },
];

const communicationPoints = [
  "Understanding language",
  "Expressing thoughts",
  "Sharing emotions",
  "Responding to others",
  "Participating in conversations",
  "Social interaction",
  "Non-verbal communication",
];

const assessmentGroups = [
  {
    title: "Developmental History",
    items: [
      "Early milestones",
      "Communication development",
      "Behaviour patterns",
      "Learning profile",
      "Parent observations",
    ],
  },
  {
    title: "Communication Assessment",
    items: [
      "Expressive communication",
      "Receptive communication",
      "Social communication",
      "Language understanding",
      "Communication confidence",
    ],
  },
  {
    title: "Developmental Understanding",
    items: [
      "Attention profile",
      "Behaviour patterns",
      "Learning readiness",
      "Sensory responses",
      "Social interaction abilities",
    ],
  },
];

const supportFactors = [
  "Developmental readiness",
  "Attention abilities",
  "Learning patterns",
  "Social interaction",
  "Sensory processing",
  "Emotional regulation",
  "Communication confidence",
];

const pillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Supports understanding of factors influencing communication, learning and cognitive development.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Focuses on overall wellbeing and developmental functioning.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps understand communication, learning and developmental readiness.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Supports understanding of sensory influences that may affect communication and participation.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families understand communication-related behaviours and interaction patterns.",
  },
];

const supportPoints = [
  "Communication Development",
  "Language Understanding",
  "Social Communication Skills",
  "Parent Guidance",
  "Developmental Planning",
  "Behaviour Understanding",
  "Progress Monitoring",
  "Long-Term Family Support",
];

const parentConcerns = [
  "Confusion",
  "Frustration",
  "Anxiety about the future",
  "Comparison with other children",
  "Difficulty understanding developmental milestones",
];

const whyChoose = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Developmental Assessment",
  "Child-Centred & Family-Centred Approach",
  "Communication & Child Development Focus",
  "Long-Term Guidance & Progress Tracking",
  "Individualized Development Planning",
  "Compassionate and Structured Support",
];

const relatedPages = [
  { title: "Autism Treatment in India", href: "/autism-treatment-india", image: childHeroImage },
  { title: "ADHD Treatment in India", href: "/child-health-care/adhd-child", image: supportFamilyImage },
  { title: "Child Development Support", href: "/child-health-care", image: signsImage },
  { title: "Know more about Dr. Ankush Garg", href: "/about/doctor", image: doctorImage },
];

const faqs = [
  {
    question: "What is speech delay in children?",
    answer:
      "Speech delay in children means a child develops speech and language skills later than expected for their age. It may involve difficulty speaking words, combining words into sentences or expressing needs clearly. Speech development also includes understanding language, expressing thoughts and social communication.",
  },
  {
    question: "At what age should a child start talking?",
    answer:
      "Many children begin using first meaningful words around the end of the first year, but timelines vary. Parents should look at overall communication development and seek assessment if speech, understanding or communication skills feel persistently delayed.",
  },
  {
    question: "What are the early signs of speech delay?",
    answer:
      "Early signs may include limited babbling, delayed first words, difficulty combining words, reduced response during communication, challenges expressing needs and difficulty following verbal instructions.",
  },
  {
    question: "How can I tell if my child has a speech delay?",
    answer:
      "Parents may notice limited vocabulary, delayed milestones, difficulty expressing needs, reduced participation in conversations or challenges understanding language. A structured developmental assessment gives clearer guidance.",
  },
  {
    question: "What causes speech delay in children?",
    answer:
      "Speech delay may be influenced by developmental readiness, attention, hearing abilities, learning patterns, social interaction and overall child development. Causes differ from child to child.",
  },
  {
    question: "Is speech delay always a sign of autism?",
    answer:
      "No. Speech delay is not always a sign of autism. Some children have speech delay without ASD. A broader developmental assessment helps understand whether speech delay is isolated or connected with other concerns.",
  },
  {
    question: "Can a child have speech delay without autism?",
    answer:
      "Yes. Some children develop speech later due to individual developmental differences, language development, hearing concerns or readiness factors without having autism.",
  },
  {
    question: "What is the difference between speech delay and language delay?",
    answer:
      "Speech delay usually refers to difficulty producing sounds or spoken words. Language delay refers to difficulty understanding language, expressing thoughts or using language meaningfully.",
  },
  {
    question: "Can a child with speech delay catch up?",
    answer:
      "Many children continue developing communication skills over time. Progress depends on developmental readiness, communication abilities, family support and individualized guidance.",
  },
  {
    question: "Will my child ever speak normally?",
    answer:
      "Every child's communication journey is unique. Many children continue building speech, language and communication skills through childhood. Understanding the current profile helps identify practical next steps.",
  },
  {
    question: "How can parents help a child with speech delay at home?",
    answer:
      "Parents can talk with the child, read books, describe daily activities, encourage communication during play, give time to respond and create positive communication opportunities.",
  },
  {
    question: "What activities help speech development?",
    answer:
      "Storybooks, songs, pretend play, naming objects, describing actions, turn-taking games and interactive conversations can support speech and communication growth.",
  },
  {
    question: "Does screen time affect speech development?",
    answer:
      "Excessive screen exposure may reduce real-world interaction and communication opportunities. Balanced routines with play, conversation and social interaction support healthier communication development.",
  },
  {
    question: "How does Manovaidya assess speech and communication development?",
    answer:
      "Assessment looks at developmental history, communication milestones, expressive and receptive communication, social interaction, learning readiness and parent observations.",
  },
  {
    question: "How does Manovaidya support children with speech and communication challenges?",
    answer:
      "Support includes developmental assessment, communication understanding, parent guidance, developmental planning, progress monitoring and long-term family support through a structured Neuro-Ayurveda Development System.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function SpeechDelaySupportIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = "Speech Delay Support in India | Communication Development & Assessment | Manovaidya";

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
      "Looking for Speech Delay Support in India? Learn about communication development, speech assessment and child development support through the Neuro-Ayurveda Development System at Manovaidya."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/speech-delay-support-india`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Speech Delay Support in India",
          description:
            "Speech development assessment, communication guidance and child development support through the Neuro-Ayurveda Development System.",
          url: `${window.location.origin}/speech-delay-support-india`,
          medicalAudience: "Parent",
        },
        {
          "@type": "Person",
          name: "Dr. Ankush Garg",
          jobTitle: "Autism, ADHD, Child Development & Mental Health Specialist",
          worksFor: {
            "@type": "MedicalOrganization",
            name: "Manovaidya",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
            { "@type": "ListItem", position: 2, name: "Child Health Care", item: `${window.location.origin}/child-health-care` },
            { "@type": "ListItem", position: 3, name: "Speech Delay Support in India", item: `${window.location.origin}/speech-delay-support-india` },
          ],
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        },
      ],
    };

    const scriptId = "speech-delay-support-schema";
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
          <span className="text-[#21142d]">Speech Delay Support in India</span>
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
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                        activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcf]"
                      }`}
                    />
                    {label}
                  </a>
                ))}
              </nav>
            </SidebarCard>

            <SidebarCard className="bg-[#fcf9ff]">
              <Users className="h-8 w-8 text-[#7835A4]" />
              <h3 className="mt-4 text-[15px] font-black text-[#21142d]">Need Personalized Guidance?</h3>
              <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
                Our experts are here to understand your child's communication needs and guide the right next step.
              </p>
              <a
                href="#book-consultation"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-4 text-[12px] font-black text-white transition hover:bg-[#632b86]"
              >
                Book a Consultation
              </a>
            </SidebarCard>
          </div>
        </div>

        <article className="min-w-0">
          <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Speech Delay & Communication Support</p>
          <h1 className="mt-3 max-w-[820px] text-[32px] font-black leading-[1.12] text-[#17111f] sm:text-[42px]">
            Speech Delay & Communication Support in India
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] font-bold leading-7 text-[#5a5063]">
            Speech development assessment, communication guidance and child development support through the structured Neuro-Ayurveda Development System.
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
                <a
                  key={label}
                  href="#share"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white"
                  aria-label="Share article"
                >
                  {label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}
                </a>
              ))}
            </div>
          </div>

          <figure className="mt-7 overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-[0_14px_35px_rgba(58,31,90,0.08)]">
            <img
              src={childHeroImage}
              alt="Parent talking with child for speech development"
              className="w-full h-auto object-contain"
            />
          </figure>

          <section id="what-is-speech-delay" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Speech Delay?</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Speech Delay refers to a situation where a child develops speech and language skills later than expected for their age. Some children may understand language well but struggle to express themselves verbally, while others may have difficulties with both understanding and communication.
              </p>
              <p>
                Communication development is not only about speaking words. It also includes understanding language, expressing thoughts, interacting with others and participating in social communication.
              </p>
              <p>
                At Manovaidya, communication concerns are viewed as part of the child's overall developmental profile rather than as an isolated challenge.
              </p>
            </div>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Speech & Communication Challenges</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child develops differently, but some commonly observed signs may include:
            </p>
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
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-4">
              <div className="flex gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#7835A4]" />
                <p className="text-[13px] font-bold leading-6 text-[#3b2e45]">
                  When communication challenges persist over time, a structured developmental assessment may help families better understand the child's strengths, challenges and support needs.
                </p>
              </div>
            </div>
          </section>

          <section id="beyond-speech" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Communication Beyond Speech</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              One of the biggest misconceptions is that communication means speaking. In reality, communication is much broader and includes:
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {communicationPoints.map((item) => (
                <span key={item} className="flex gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#51465a] ring-1 ring-[#eadff1]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some children may speak words but still struggle with meaningful communication. Others may have strong understanding but difficulty expressing themselves.
            </p>
          </section>

          <section id="assessment" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Speech & Communication Assessment at Manovaidya</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
              <div>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a]">
                  Every child has a unique communication profile. Assessment focuses on understanding the child as a whole rather than evaluating speech in isolation.
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
              <img
                src={supportFamilyImage}
                alt="Doctor and parent discussion for speech assessment"
                className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
              />
            </div>
          </section>

          <section id="speech-delay-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Speech Delay Support in India: Looking Beyond Words</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents searching for Speech Delay Support in India are looking for ways to help their child speak more words. While speech development is important, communication growth often involves much more.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {supportFactors.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-[12px] font-black leading-5 text-[#21142d]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, communication development is understood through the Neuro-Ayurveda Development System developed by Dr. Ankush Garg. Together, these pillars provide a structured developmental perspective for communication growth and child development.
            </p>
            <img
              src={neuroDiagramImage}
              alt="Neuro-Ayurveda five pillar development system"
              className="mt-5 max-h-[320px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4"
            />
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
              <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with Speech & Communication Challenges</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Support at Manovaidya begins with understanding the child rather than focusing only on a diagnosis or symptom. Every child receives individualized guidance based on developmental needs and communication profile.
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
            <img
              src={signsImage}
              alt="Child communication support"
              className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Communication development is not only the child's journey; it is also a family journey. Parent guidance helps families understand developmental milestones, communication encouragement strategies, daily opportunities and long-term planning.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {parentConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-black text-[#7835A4]">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="why-manovaidya" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Greater Noida, Ghaziabad, NCR and across India connect with Manovaidya for Speech Delay Support, Communication Development Guidance and Child Development Support.
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
                  Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Autism, ADHD, Speech & Communication Challenges, Child Development, Behavioural Concerns and Mental Health support.
                </p>
              </div>
            </div>
          </section>

          <section id="related-developmental-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Related Developmental Support Areas</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {relatedPages.map((item) => (
                <a key={item.title} href={item.href} className="rounded-lg border border-[#eadff1] bg-white p-4 text-[13px] font-black text-[#21142d] transition hover:border-[#7835A4] hover:text-[#7835A4]">
                  {item.title}
                </a>
              ))}
              <a href="/child-health-care" className="rounded-lg border border-[#eadff1] bg-white p-4 text-[13px] font-black text-[#21142d] transition hover:border-[#7835A4] hover:text-[#7835A4]">
                Behavioural Concerns in Children
              </a>
              <a href="/child-health-care" className="rounded-lg border border-[#eadff1] bg-white p-4 text-[13px] font-black text-[#21142d] transition hover:border-[#7835A4] hover:text-[#7835A4]">
                Learning & Attention Difficulties
              </a>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border-b border-[#eadff1] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-black text-[#21142d]"
                    aria-expanded={openFaq === index}
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#7835A4] transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">
                      {faq.answer}
                    </p>
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
                  If you are looking for Speech Delay Support in India, Communication Development Guidance, Child Development Assessment or personalized developmental support, schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <a
                  href="tel:+917823894080"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
                >
                  Book Now
                </a>
              </div>
              <img src={ctaImage} alt="Happy family after communication support" className="h-full min-h-[240px] w-full object-cover" />
            </div>
          </section>
        </article>

        <div className="space-y-5">
          <SidebarCard>
            <h2 className="text-[15px] font-black text-[#21142d]">Search</h2>
            <label className="mt-4 flex h-11 items-center rounded-lg border border-[#eadff1] bg-[#fbf9fd] px-3">
              <input
                type="search"
                placeholder="Search topics..."
                className="min-w-0 flex-1 bg-transparent text-[12px] font-bold text-[#21142d] outline-none placeholder:text-[#9b8ea5]"
              />
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
              Get a personalized communication development plan for your child.
            </p>
            <a
              href="tel:+917823894080"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
            >
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
                Subscribe to expert articles, speech development guidance and Manovaidya updates.
              </p>
            </div>
          </div>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-md border border-[#eadff1] px-4 text-[12px] font-bold outline-none focus:border-[#7835A4]"
            />
            <button className="h-11 rounded-md bg-[#7835A4] px-6 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SpeechDelaySupportIndiaPage;

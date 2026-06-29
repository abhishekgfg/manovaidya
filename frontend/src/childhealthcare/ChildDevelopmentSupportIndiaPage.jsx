import React from "react";
import {
  Baby,
  BookOpen,
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Heart,
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
import childHeroImage from "../images/child-development-support-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctor-ankush-portrait.png";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "What is Child Development?", id: "what-is-child-development" },
  { label: "Common Concerns", id: "common-concerns" },
  { label: "Beyond Milestones", id: "beyond-milestones" },
  { label: "Assessment", id: "assessment" },
  { label: "Development Support", id: "development-support" },
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
  { label: "Behaviour", count: 9, Icon: Users },
];

const developmentAreas = [
  "Communication Development",
  "Language Development",
  "Learning Skills",
  "Attention & Concentration",
  "Behavioural Development",
  "Emotional Regulation",
  "Social Interaction",
  "Cognitive Development",
  "Sensory Processing",
  "Daily Living Skills",
];

const commonConcerns = [
  {
    title: "Autism Spectrum Disorder (ASD)",
    text: "Challenges related to communication, social interaction, behaviour and developmental growth.",
    Icon: Puzzle,
  },
  {
    title: "ADHD",
    text: "Difficulties involving attention, focus, impulsivity and emotional regulation.",
    Icon: Brain,
  },
  {
    title: "Speech Delay & Communication",
    text: "Concerns related to language development, communication skills and expressive abilities.",
    Icon: MessageCircle,
  },
  {
    title: "Behavioural Concerns",
    text: "Tantrums, emotional outbursts, aggression, defiance and behavioural difficulties.",
    Icon: Users,
  },
  {
    title: "Learning & Attention Difficulties",
    text: "Academic challenges, concentration concerns and learning-related struggles.",
    Icon: BookOpen,
  },
  {
    title: "Social & Emotional Development",
    text: "Difficulties with peer interaction, emotional regulation and frustration tolerance.",
    Icon: Heart,
  },
];

const assessmentGroups = [
  {
    title: "Developmental History",
    items: [
      "Early developmental milestones",
      "Communication development",
      "Learning patterns",
      "Behaviour observations",
      "Parent concerns",
    ],
  },
  {
    title: "Developmental Understanding",
    items: [
      "Communication abilities",
      "Attention profile",
      "Learning readiness",
      "Social interaction",
      "Emotional regulation",
      "Behavioural patterns",
    ],
  },
  {
    title: "Family Perspective",
    items: ["Parent observations", "Daily functioning", "Developmental goals", "Family concerns"],
  },
];

const supportInfluences = [
  "Communication abilities",
  "Learning readiness",
  "Behaviour patterns",
  "Emotional wellbeing",
  "Attention skills",
  "Social interaction",
  "Sensory processing",
  "Family environment",
];

const pillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Supports understanding of developmental, cognitive and learning-related factors.",
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
    text: "Supports understanding of sensory influences that may affect behaviour, communication and participation.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families understand behavioural patterns and developmental responses.",
  },
];

const supportPoints = [
  "Developmental Assessment",
  "Communication Development",
  "Learning Readiness",
  "Behaviour Understanding",
  "Parent Guidance",
  "Emotional Wellbeing",
  "Progress Monitoring",
  "Long-Term Development Planning",
];

const whyChoose = [
  "Structured Neuro-Ayurveda Development System",
  "Personalized Developmental Assessment",
  "Child-Centred & Family-Centred Approach",
  "Focus on Communication, Learning & Behaviour",
  "Long-Term Guidance & Progress Tracking",
  "Individualized Development Planning",
  "Compassionate and Structured Support",
];

const relatedPages = [
  { title: "Autism Treatment in India", href: "/autism-treatment-india", image: childHeroImage },
  { title: "ADHD Treatment in India", href: "/child-health-care/adhd-child", image: supportFamilyImage },
  { title: "Speech Delay & Communication Support", href: "/speech-delay-support-india", image: signsImage },
  { title: "Behavioural Concerns in Children", href: "/behavioural-concerns-children-india", image: ctaImage },
  { title: "Learning & Attention Difficulties", href: "/learning-attention-difficulties-india", image: doctorImage },
];

const faqs = [
  {
    question: "What is child development?",
    answer:
      "Child development refers to physical, cognitive, emotional, behavioural, communication and social growth throughout childhood. It includes how children learn skills, build relationships, regulate emotions and become more independent.",
  },
  {
    question: "What are the 4 types of child development?",
    answer:
      "The four commonly discussed areas are physical development, cognitive development, social-emotional development and communication or language development. These areas work together and influence each other.",
  },
  {
    question: "What are the common child development concerns?",
    answer:
      "Common concerns include speech delay, communication difficulties, attention challenges, behavioural concerns, learning difficulties, emotional regulation issues, social interaction challenges and milestone delays.",
  },
  {
    question: "What is a red flag in child development?",
    answer:
      "A developmental red flag is a sign that may indicate a child is not progressing as expected in one or more areas, such as communication, social interaction, behaviour or milestones.",
  },
  {
    question: "When should parents worry about developmental delays?",
    answer:
      "Parents may seek guidance when milestones are significantly delayed, concerns continue over time or difficulties affect communication, learning, attention, behaviour, social interaction or emotional regulation.",
  },
  {
    question: "What are developmental milestones?",
    answer:
      "Developmental milestones are skills children typically achieve as they grow, such as communication abilities, motor skills, social interaction, emotional regulation, learning skills and daily living activities.",
  },
  {
    question: "Can a child with developmental delay catch up?",
    answer:
      "Many children continue developing skills and make meaningful progress with appropriate understanding and support. Outcomes vary depending on the child's strengths, challenges and support systems.",
  },
  {
    question: "How can parents support child development at home?",
    answer:
      "Parents can support development through talking, reading, play, exploration, positive learning experiences, routines, emotional support, healthy sleep and social interaction opportunities.",
  },
  {
    question: "What is the Neuro-Ayurveda Development System?",
    answer:
      "It is a structured framework developed by Dr. Ankush Garg to understand developmental, behavioural and mental wellness concerns through five interconnected pillars.",
  },
  {
    question: "How does Manovaidya assess and support child development?",
    answer:
      "Manovaidya assesses developmental history, communication, learning patterns, behaviour, social interaction, emotional regulation and parent concerns, then provides personalized guidance and a structured developmental roadmap.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function ChildDevelopmentSupportIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = "Child Development Support in India | Developmental Assessment & Family Guidance | Manovaidya";

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
      "Looking for Child Development Support in India? Learn about developmental assessment, communication, learning and behaviour support through the Neuro-Ayurveda Development System at Manovaidya."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/child-development-support-india`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Child Development Support in India",
          description:
            "Developmental assessment, communication, learning and behaviour support through the Neuro-Ayurveda Development System.",
          url: `${window.location.origin}/child-development-support-india`,
          medicalAudience: "Parent",
        },
        { "@type": "Organization", name: "Manovaidya", url: window.location.origin },
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
            { "@type": "ListItem", position: 3, name: "Child Development Support in India", item: `${window.location.origin}/child-development-support-india` },
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

    const scriptId = "child-development-support-schema";
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
          <span className="text-[#21142d]">Child Development Support in India</span>
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
                      activeSection === id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#51465a] hover:bg-[#fbf7ff] hover:text-[#7835A4]"
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
                Our experts are here to understand your child's developmental needs.
              </p>
              <a href="#book-consultation" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-4 text-[12px] font-black text-white transition hover:bg-[#632b86]">
                Book a Consultation
              </a>
            </SidebarCard>
          </div>
        </div>

        <article className="min-w-0">
          <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Developmental Assessment & Family Support</p>
          <h1 className="mt-3 max-w-[820px] text-[32px] font-black leading-[1.12] text-[#17111f] sm:text-[42px]">
            Child Development Support in India
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] font-bold leading-7 text-[#5a5063]">
            Developmental assessment, communication guidance, family support and long-term child development planning through the Neuro-Ayurveda Development System.
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
            <img src={childHeroImage} alt="Parent and child development journey" className="w-full h-auto object-contain" />
          </figure>

          <section id="what-is-child-development" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Child Development?</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Child Development refers to the physical, cognitive, emotional, behavioural, communication and social growth that occurs throughout childhood.
              </p>
              <p>
                Development is not limited to a single milestone. Every child develops at a different pace, and development is best understood as a dynamic process influenced by many interconnected factors.
              </p>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {developmentAreas.map((item) => (
                <span key={item} className="flex gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#51465a] ring-1 ring-[#eadff1]">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="common-concerns" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Child Development Concerns</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {commonConcerns.map(({ title, text, Icon }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-4 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
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

          <section id="beyond-milestones" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Child Development Beyond Milestones</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Development is often misunderstood as a checklist of milestones. A child may achieve certain milestones but still experience challenges in communication, learning, behaviour, emotional regulation or social interaction. This is why developmental understanding should focus on the whole child.
            </p>
          </section>

          <section id="assessment" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Child Development Assessment at Manovaidya</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
              <div>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a]">
                  Assessment focuses on understanding the child as a whole rather than evaluating a single concern in isolation.
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
              <img src={supportFamilyImage} alt="Doctor and parent discussion for developmental assessment" className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
            </div>
          </section>

          <section id="development-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Child Development Support in India</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families are often looking for clarity, direction and a structured developmental roadmap. At Manovaidya, support focuses on understanding interconnected developmental influences.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {supportInfluences.map((item) => (
                <div key={item} className="rounded-lg border border-[#eadff1] bg-white p-4 text-center">
                  <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <Heart className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-[12px] font-black leading-5 text-[#21142d]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Developmental support is guided by the Neuro-Ayurveda Development System developed by Dr. Ankush Garg. Together, the five pillars provide a structured framework for understanding child development comprehensively.
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
              <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children & Families</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Support begins with understanding the child rather than focusing only on a diagnosis or symptom. Every child receives individualized guidance based on developmental needs and family goals.
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
            <img src={signsImage} alt="Child learning and growth support" className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Developmental concerns affect the entire family, not just the child. Parent guidance helps families understand development, behaviour strategies, communication opportunities, learning support and long-term planning.
            </p>
          </section>

          <section id="how-we-work" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Work at Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our process starts with a detailed assessment to understand developmental history, communication abilities, learning needs, behaviour patterns, emotional wellbeing and family concerns. Families receive personalized guidance and a structured developmental roadmap.
            </p>
          </section>

          <section id="why-manovaidya" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Greater Noida, Ghaziabad, NCR and across India connect with Manovaidya for Child Development Support, Developmental Assessment and Family Guidance.
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
                  {openFaq === index && <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
            <div className="grid gap-5 lg:grid-cols-[1fr_260px] lg:items-center">
              <div className="p-5">
                <h2 className="text-[20px] font-black text-[#17111f]">Book a Consultation</h2>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  If you are looking for Child Development Support in India, Developmental Assessment, Communication Guidance or personalized developmental support, schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <a href="tel:+917823894080" className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
                  Book Now
                </a>
              </div>
              <img src={ctaImage} alt="Happy family after developmental support" className="h-full min-h-[240px] w-full object-cover" />
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
              Get a personalized developmental plan for your child.
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
                Subscribe to expert articles, developmental guidance and Manovaidya updates.
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

export default ChildDevelopmentSupportIndiaPage;

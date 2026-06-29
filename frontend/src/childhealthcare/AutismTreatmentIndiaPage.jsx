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
  Stethoscope,
  Users,
  Utensils,
  Waves,
} from "lucide-react";
import childHeroImage from "../images/autism-treatment-hero.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import ctaImage from "../images/child-wellbeing-sunset-cta.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import doctorImage from "../images/doctor-ankush-portrait.png";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "What is Autism?", id: "what-is-autism" },
  { label: "Early Signs of Autism", id: "early-signs-of-autism" },
  { label: "Autism Treatment in India", id: "autism-treatment-in-india" },
  { label: "Autism Assessment", id: "autism-assessment" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-development-system" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Parent Guidance", id: "parent-guidance" },
  { label: "Why Families Choose Us", id: "why-families-choose-us" },
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
  { label: "Sensory Integration", count: 7, Icon: Waves },
];

const earlySignGroups = [
  {
    title: "Communication & Speech Concerns",
    items: [
      "Delayed speech development",
      "Limited verbal communication",
      "Difficulty expressing needs and emotions",
      "Repeating words or phrases frequently",
      "Reduced use of gestures such as pointing or waving",
      "Limited response during conversations",
    ],
  },
  {
    title: "Social Interaction Challenges",
    items: [
      "Limited eye contact",
      "Reduced response when called by name",
      "Preference for playing alone",
      "Difficulty initiating social interactions",
      "Limited interest in sharing experiences with others",
      "Challenges understanding social cues",
    ],
  },
  {
    title: "Behavioural Differences",
    items: [
      "Repetitive movements or actions",
      "Strong preference for routines",
      "Difficulty adapting to changes",
      "Intense focus on specific interests",
      "Repetitive play patterns",
      "Emotional reactions when routines are interrupted",
    ],
  },
  {
    title: "Sensory Processing Differences",
    items: [
      "Sensitivity to sounds, lights or textures",
      "Strong reactions to certain foods",
      "Avoidance of specific sensory experiences",
      "Seeking sensory stimulation repeatedly",
      "Difficulty tolerating crowded environments",
      "Sensory-related emotional responses",
    ],
  },
  {
    title: "Learning & Development Concerns",
    items: [
      "Delays in developmental milestones",
      "Difficulty following instructions",
      "Challenges with attention and focus",
      "Differences in learning patterns",
      "Delays in play skills",
      "Difficulty with age-appropriate social development",
    ],
  },
];

const assessmentClarity = [
  "Communication abilities",
  "Social interaction skills",
  "Attention and focus",
  "Learning patterns",
  "Behavioural concerns",
  "Sensory processing",
  "Emotional regulation",
  "Daily functioning",
  "Developmental strengths",
  "Areas requiring support",
];

const assessmentSteps = [
  {
    title: "Detailed Parent Discussion",
    text:
      "The assessment begins with pregnancy and birth history, early milestones, speech and communication development, behavioural observations, social interaction patterns, learning abilities, sensory concerns, sleep, routines, food preferences and family challenges.",
  },
  {
    title: "Developmental Understanding",
    text:
      "The process identifies existing strengths, current developmental challenges, learning readiness, communication abilities, behavioural patterns and sensory processing differences so families can move from uncertainty toward clarity.",
  },
  {
    title: "Individualized Guidance",
    text:
      "Families receive parent guidance, developmental support planning, behaviour guidance strategies, communication recommendations, sensory support suggestions, lifestyle routines and progress monitoring approaches.",
  },
];

const pillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text:
      "Supports the foundations of attention, learning readiness, communication development, cognitive functioning, memory and emotional regulation.",
  },
  {
    title: "Gut Response System",
    Icon: Utensils,
    text:
      "Looks at picky eating, digestive discomfort, food sensitivities, irregular bowel habits and appetite concerns that may influence overall wellbeing.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text:
      "Explores learning readiness, response patterns, communication development, attention and social engagement through developmental pathways.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text:
      "Helps families understand sensory sensitivities, preferences, regulation, daily functioning challenges and environmental influences.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text:
      "Focuses on why behaviours occur, possible developmental influences, environmental triggers, emotional regulation and supportive guidance approaches.",
  },
];

const supportPoints = [
  "Understanding the child as an individual",
  "Identifying developmental strengths",
  "Recognizing areas requiring support",
  "Providing structured parent guidance",
  "Creating individualized support plans",
  "Monitoring developmental progress",
  "Supporting long-term growth and wellbeing",
];

const familyConcerns = [
  "Confusion",
  "Anxiety",
  "Information overload",
  "Decision fatigue",
  "Fear about the future",
  "Emotional exhaustion",
];

const whyChoose = [
  {
    title: "Personalized Developmental Understanding",
    text:
      "Assessment and guidance are tailored to the child's individual strengths, challenges and developmental needs.",
  },
  {
    title: "Structured Neuro-Ayurveda Development System",
    text:
      "The five-pillar framework helps families understand factors that may influence communication, attention, learning and behaviour.",
  },
  {
    title: "Family-Centred Approach",
    text:
      "Parents are not expected to navigate the journey alone. Guidance helps families gain clarity and confidence.",
  },
  {
    title: "Long-Term Development Focus",
    text:
      "The emphasis is not only on short-term symptom management but also on meaningful developmental growth over time.",
  },
  {
    title: "Personalized Guidance & Progress Tracking",
    text:
      "Families receive structured recommendations and support to monitor developmental progress in an organized manner.",
  },
  {
    title: "Support Across Developmental Needs",
    text:
      "The approach may support communication, behaviour, learning, attention, sensory processing and social development.",
  },
];

const relatedArticles = [
  {
    title: "ADHD Treatment in India",
    href: "/child-health-care/adhd-child",
    image: childHeroImage,
  },
  {
    title: "Child Development Support",
    href: "/child-health-care",
    image: supportFamilyImage,
  },
  {
    title: "Know more about Dr. Ankush Garg",
    href: "/about/doctor",
    image: doctorImage,
  },
];

const faqs = [
  {
    question: "What is Autism Spectrum Disorder (ASD)?",
    answer:
      "Autism Spectrum Disorder is a neurodevelopmental condition that may influence communication, social interaction, behaviour, learning and sensory processing. Every child with autism is unique, so support should be based on the child's individual developmental profile.",
  },
  {
    question: "What are the early signs of autism?",
    answer:
      "Early signs may include reduced eye contact, limited response to name, delayed speech development, repetitive behaviours, sensory sensitivities and challenges in social interaction. A structured assessment can help families understand these concerns more clearly.",
  },
  {
    question: "At what age can autism signs become noticeable?",
    answer:
      "Signs may be noticed in infancy, toddler years or early childhood. Concerns often become clearer when a child starts interacting with peers or enters a structured learning environment.",
  },
  {
    question: "What are the top 3 signs of autism?",
    answer:
      "Commonly observed signs include communication challenges, differences in social interaction and repetitive behaviours or restricted interests. Some children may also show sensory sensitivities or a strong preference for routines.",
  },
  {
    question: "What are the 7 signs of autism?",
    answer:
      "Common signs include reduced eye contact, delayed speech, limited response to name, repetitive behaviours, social interaction difficulty, sensory sensitivities and strong preference for routines.",
  },
  {
    question: "How to spot autism in babies?",
    answer:
      "Parents may notice limited eye contact, reduced response to name, fewer social smiles, limited gestures and less interest in interactive play. Ongoing concerns should be discussed through a developmental assessment.",
  },
  {
    question: "When should parents worry about autism?",
    answer:
      "Parents should seek guidance if communication, social interaction, sensory responses, behaviour or milestones remain persistently concerning. Early clarity can support better planning.",
  },
  {
    question: "Does every child with autism have speech delay?",
    answer:
      "No. Some children have speech delay, while others develop speech but struggle with conversation, social communication or understanding social cues.",
  },
  {
    question: "Will my autistic child ever talk?",
    answer:
      "Communication progress varies widely. Some children develop spoken language, while others may use gestures, visual communication or other methods. Individualized guidance can support communication growth.",
  },
  {
    question: "Can autism get better with age?",
    answer:
      "Autism is a lifelong neurodevelopmental condition, but many children continue developing communication, learning, social and daily living skills with consistent support.",
  },
  {
    question: "Can an autistic child go to a normal school in India?",
    answer:
      "Many children with autism attend mainstream schools, while some may need inclusive classrooms, specialized support or individualized learning plans. The right option depends on the child's needs.",
  },
  {
    question: "How can parents help a child with autism at home?",
    answer:
      "Parents can help by maintaining routines, encouraging communication, creating structured learning opportunities, supporting social interaction, reducing sensory overload and focusing on the child's strengths.",
  },
  {
    question: "What is the Neuro-Ayurveda Development System?",
    answer:
      "It is a five-pillar framework developed by Dr. Ankush Garg to understand brain nourishment, gut response, neural networks, sensory integration and behaviour guidance in a structured developmental way.",
  },
  {
    question: "How does Manovaidya assess and support children with autism?",
    answer:
      "Manovaidya assesses developmental history, communication, learning patterns, behaviour, sensory processing and parent concerns, then provides personalized guidance and a developmental roadmap.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function AutismTreatmentIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = "Autism Treatment in India | Autism Assessment & Development Support | Manovaidya";

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
      "Looking for Autism Treatment in India? Learn about Autism Assessment, Child Development Support and the Neuro-Ayurveda Development System at Manovaidya with Dr. Ankush Garg."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/autism-treatment-india`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Autism Treatment in India",
          description:
            "Autism assessment, child development support and Neuro-Ayurveda Development System guidance at Manovaidya.",
          url: `${window.location.origin}/autism-treatment-india`,
          medicalAudience: "Parent",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: window.location.origin },
            { "@type": "ListItem", position: 2, name: "Child Health Care", item: `${window.location.origin}/child-health-care` },
            { "@type": "ListItem", position: 3, name: "Autism Treatment in India", item: `${window.location.origin}/autism-treatment-india` },
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

    const scriptId = "autism-treatment-schema";
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
          <span className="text-[#21142d]">Autism Treatment in India</span>
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
                Our experts are here to understand your child and guide the right next step.
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
          <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Autism Treatment in India</p>
          <h1 className="mt-3 max-w-[820px] text-[32px] font-black leading-[1.12] text-[#17111f] sm:text-[42px]">
            Autism Treatment, ADHD, Child Development & Mental Health Clinic in India
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] font-bold leading-7 text-[#5a5063]">
            Autism assessment, child development support and structured Neuro-Ayurveda guidance for families seeking clarity, confidence and a long-term developmental roadmap.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                <p className="text-[12px] font-bold text-[#75677d]">Autism, ADHD & Child Development Specialist</p>
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
              alt="Parent and child receiving autism development support"
              className="w-full h-auto object-contain"
            />
          </figure>

          <section id="what-is-autism" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">What is Autism?</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that can influence the way a child communicates, learns, interacts with others, processes information and experiences the world around them.
              </p>
              <p>
                Every child with autism is unique. Some children may experience speech and communication challenges, while others may have difficulty with social interaction, attention, behaviour, sensory processing or adapting to changes in routine.
              </p>
              <p>
                At Manovaidya, understanding autism goes beyond identifying symptoms alone. Development, communication, learning, behaviour, emotional wellbeing, sensory processing and overall growth are interconnected aspects of a child's development.
              </p>
              <p>
                Families from across India, Delhi, Noida, Greater Noida, Ghaziabad and NCR connect with Dr. Ankush Garg for Autism, ADHD, Child Development and Mental Health support through a structured Neuro-Ayurveda Development System.
              </p>
            </div>
          </section>

          <section id="early-signs-of-autism" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Early Signs of Autism</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Autism can present differently in every child. Some signs may become noticeable during infancy, while others may appear more clearly during the toddler years or early childhood.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {earlySignGroups.map((group) => (
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
                  The presence of one or two signs does not automatically indicate autism. A comprehensive assessment helps provide a clearer understanding of developmental strengths, challenges and support needs.
                </p>
              </div>
            </div>
          </section>

          <section id="autism-treatment-in-india" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Autism Treatment in India: Understanding Autism Beyond Symptoms</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Parents often ask how their child can speak better, why eye contact is difficult, why the child becomes upset easily or why learning feels challenging. These questions are important, but focusing only on symptoms may not provide a complete understanding of developmental needs.
              </p>
              <p>
                Communication, learning, behaviour, attention, sensory processing, emotional regulation and social interaction are often interconnected. Difficulties in communication may influence behaviour, sensory sensitivities may affect participation and attention challenges may impact learning.
              </p>
              <p>
                The goal is not simply to focus on isolated symptoms but to support communication, learning, behaviour, confidence, participation, emotional wellbeing and overall development as part of a comprehensive developmental journey.
              </p>
            </div>
          </section>

          <section id="autism-assessment" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Autism Assessment at Manovaidya</h2>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
              <div>
                <p className="text-[14px] font-semibold leading-7 text-[#51465a]">
                  Autism assessment at Manovaidya focuses on understanding the complete developmental picture rather than evaluating a single symptom in isolation. It helps families gain clarity about:
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {assessmentClarity.map((item) => (
                    <span key={item} className="flex gap-2 rounded-md bg-white px-3 py-2 text-[12px] font-bold text-[#51465a] ring-1 ring-[#eadff1]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <img
                src={supportFamilyImage}
                alt="Doctor and parent discussion for autism assessment"
                className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
              />
            </div>
            <div className="mt-5 grid gap-3">
              {assessmentSteps.map((step) => (
                <div key={step.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <h3 className="text-[14px] font-black text-[#21142d]">{step.title}</h3>
                  <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-development-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, developmental and behavioural concerns are understood through the Neuro-Ayurveda Development System, a structured framework developed by Dr. Ankush Garg to help families understand five interconnected pillars.
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
              <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with Autism</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                Support is personalized because no two children are exactly alike. Rather than focusing only on short-term outcomes, the emphasis is placed on sustainable developmental progress through a structured and family-centred approach.
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
              alt="Autism support for child development"
              className="h-[230px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="parent-guidance" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Autism does not affect only the child. It also affects parents, siblings and the entire family system. At Manovaidya, parent guidance helps families move from uncertainty and overwhelm toward clarity, confidence and meaningful action.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {familyConcerns.map((item) => (
                <span key={item} className="rounded-full bg-white px-3 py-1.5 text-[11px] font-black text-[#7835A4]">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section id="why-families-choose-us" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Parents often receive different advice from different professionals. At Manovaidya, the goal is to help families understand the bigger picture through a structured developmental roadmap.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <h3 className="text-[14px] font-black text-[#21142d]">{item.title}</h3>
                  <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{item.text}</p>
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
                  Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Autism Spectrum Disorder, ADHD, Child Development, Behavioural Challenges, Speech & Communication Concerns and Mental Health support.
                </p>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions About Autism</h2>
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
                  If you are looking for Autism Treatment in India, Autism Assessment, Child Development Support or guidance regarding communication, behaviour, learning and developmental concerns, schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
                </p>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    "Autism Assessment",
                    "Personalized Development Guidance",
                    "Parent Support & Family Guidance",
                    "Neuro-Ayurveda Development System",
                    "Structured Progress Planning",
                  ].map((item) => (
                    <span key={item} className="flex gap-2 text-[12px] font-bold text-[#51465a]">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href="tel:+917823894080"
                  className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
                >
                  Book Now
                </a>
              </div>
              <img src={ctaImage} alt="Happy family after child support" className="h-full min-h-[240px] w-full object-cover" />
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
              Get a personalized plan for your child from our experts.
            </p>
            <a
              href="tel:+917823894080"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]"
            >
              Book Now
            </a>
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">Noida, Uttar Pradesh, India</p>
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
                Subscribe to expert articles, autism guidance and Manovaidya updates.
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

export default AutismTreatmentIndiaPage;

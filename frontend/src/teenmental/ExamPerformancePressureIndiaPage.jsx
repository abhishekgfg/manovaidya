import React from "react";
import {
  Brain,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  HeartHandshake,
  Mail,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Waves,
} from "lucide-react";

import heroImage from "../images/exam-performance-pressure-support-india.webp";
import parentImage from "../images/parent-support-exam-stress.webp";
import neuroImage from "../images/neuro-ayurveda-exam-stress-support.webp";
import ctaImage from "../images/academic-wellbeing-support-india.webp";
import doctorImage from "../images/doctor-ankush-portrait.png";

const pageLinks = [
  { label: "Understanding Exam Pressure", id: "understanding-exam-pressure" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Why Teenagers Experience Exam Stress", id: "why-exam-stress" },
  { label: "How Exam Pressure Affects Teenagers", id: "how-exam-pressure-affects" },
  { label: "Neuro-Ayurveda Approach", id: "neuro-ayurveda-approach" },
  { label: "How Parents Can Support", id: "how-parents-can-support" },
  { label: "How Manovaidya Supports", id: "how-manovaidya-supports" },
  { label: "Why Families Choose Manovaidya", id: "why-families-choose" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Teen Mental Wellness", count: 15, Icon: Brain },
  { label: "Academic Wellbeing", count: 8, Icon: Users },
  { label: "Parent Guidance", count: 9, Icon: Users },
];

const signGroups = [
  {
    title: "Emotional Signs",
    items: ["Excessive worrying", "Fear of failure", "Irritability", "Overthinking", "Emotional overwhelm", "Low confidence"],
  },
  {
    title: "Behavioural Signs",
    items: ["Procrastination", "Avoiding studies", "Reduced motivation", "Emotional outbursts", "Excessive screen use"],
  },
  {
    title: "Academic Signs",
    items: ["Difficulty concentrating", "Poor time management", "Exam anxiety", "Memory difficulties", "Reduced performance despite effort"],
  },
  {
    title: "Physical Signs",
    items: ["Sleep difficulties", "Headaches", "Fatigue", "Restlessness", "Stomach discomfort"],
  },
];

const pressureFactors = [
  {
    title: "Fear of Failure",
    text: "Many teenagers worry about disappointing themselves, parents or teachers.",
  },
  {
    title: "High Expectations",
    text: "Strong academic expectations can sometimes create excessive emotional pressure.",
  },
  {
    title: "Competitive Environments",
    text: "Comparison with peers and academic competition may affect confidence and self-esteem.",
  },
  {
    title: "Future Uncertainty",
    text: "Questions about careers, admissions and future opportunities may increase stress levels.",
  },
  {
    title: "Low Confidence",
    text: "Teenagers who doubt their abilities often experience greater exam-related anxiety.",
  },
  {
    title: "Lifestyle & Sleep Habits",
    text: "Poor sleep, irregular routines and excessive screen use may affect concentration and emotional wellbeing.",
  },
];

const impactAreas = [
  {
    title: "Emotional Wellbeing",
    text: "Excessive academic stress may lead to anxiety, overthinking, emotional exhaustion and mood changes.",
  },
  {
    title: "Confidence",
    text: "Many teenagers begin linking self-worth directly to grades and results, which can reduce self-belief over time.",
  },
  {
    title: "Academic Performance",
    text: "Ironically, excessive pressure may reduce concentration, memory and exam performance even when a student is capable.",
  },
  {
    title: "Relationships & Physical Wellbeing",
    text: "Stress can influence communication with parents, teachers and friends, while also affecting sleep, energy and physical comfort.",
  },
];

const pillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Focuses on attention, concentration, memory, learning readiness, confidence and decision making.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Looks at appetite changes, digestive comfort, energy fluctuations and lifestyle-related wellbeing.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Helps families understand study patterns, learning habits, emotional responses and adaptability.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Considers examination settings, classroom environments, noise, social pressure and digital stimulation.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Explores procrastination, avoidance, irritability, withdrawal and reduced motivation with compassion.",
  },
];

const parentSupportPoints = [
  {
    title: "Focus on Effort, Not Just Results",
    text: "Recognizing effort, consistency and progress often helps teenagers build confidence and resilience.",
  },
  {
    title: "Avoid Excessive Comparison",
    text: "Every teenager has different strengths, abilities and learning styles. Comparison may increase stress and reduce confidence.",
  },
  {
    title: "Encourage Healthy Study Habits",
    text: "Consistent routines, realistic schedules and balanced study habits often support better academic performance.",
  },
  {
    title: "Promote Healthy Sleep",
    text: "Sleep supports concentration, memory and emotional wellbeing during examination periods.",
  },
  {
    title: "Create a Supportive Environment",
    text: "Teenagers benefit when they feel emotionally supported rather than constantly evaluated.",
  },
  {
    title: "Help Manage Expectations",
    text: "Parents can help teenagers focus on growth and learning rather than perfection.",
  },
  {
    title: "Encourage Balance",
    text: "Academic success matters, but emotional wellbeing, physical health, recreation and relationships also support healthy development.",
  },
];

const supportSteps = [
  {
    title: "Step 1: Detailed Assessment",
    desc: "Understanding emotional wellbeing, confidence levels, study habits, lifestyle routines, sleep patterns, concentration challenges and family concerns.",
  },
  {
    title: "Step 2: Personalized Guidance",
    desc: "Providing individualized recommendations based on the teenager's emotional, behavioural and developmental needs.",
  },
  {
    title: "Step 3: Parent Guidance & Family Support",
    desc: "Helping parents better understand academic pressure, emotional wellbeing and practical ways to support teenagers during challenging periods.",
  },
  {
    title: "Step 4: Neuro-Ayurveda Development System",
    desc: "Applying the five-pillar framework to better understand emotional wellbeing, confidence, concentration, motivation and overall growth.",
  },
  {
    title: "Step 5: Progress Tracking & Follow-Up",
    desc: "Creating a structured roadmap that helps families monitor progress and make informed decisions over time.",
  },
];

const assessmentSigns = [
  "Persistent exam anxiety",
  "Fear of failure",
  "Excessive worrying about studies",
  "Declining confidence",
  "Difficulty concentrating",
  "Sleep problems before exams",
  "Emotional breakdowns related to academics",
  "Reduced motivation despite effort",
  "Academic pressure affecting overall wellbeing",
];

const whyChoose = [
  {
    title: "Structured Academic Wellbeing Assessment",
    text: "Every teenager experiences academic pressure differently. Understanding emotional, behavioural and lifestyle-related influences helps create a personalized roadmap.",
  },
  {
    title: "Neuro-Ayurveda Development System",
    text: "Our framework helps families understand academic functioning through Brain Nourishment, Gut Response, Neural Network, Sensory Integration and Behaviour Guidance systems.",
  },
  {
    title: "Parent-Centred Guidance",
    text: "Academic stress affects both teenagers and parents. Supporting families helps create a healthier learning environment.",
  },
  {
    title: "Personalized Support",
    text: "Guidance is tailored according to each teenager's strengths, challenges, learning patterns and circumstances.",
  },
  {
    title: "Long-Term Growth Focus",
    text: "The approach focuses on confidence, emotional resilience, healthy study habits and balanced development.",
  },
  {
    title: "Family-Oriented Approach",
    text: "Meaningful progress often happens when parents and teenagers work together with structured support.",
  },
];

const relatedPages = [
  { title: "Teen Stress & Anxiety Support", href: "/teen-stress-anxiety-support" },
  { title: "Teen Depression & Low Mood Support", href: "/teen-depression-support" },
  { title: "Teen Confidence & Emotional Wellbeing", href: "/teen-confidence-emotional-wellbeing" },
  { title: "Screen Addiction Support", href: "/teen-screen-addiction-support" },
  { title: "Parent-Teen Relationship Support", href: "/teen-mental-wellness-india" },
];

const faqs = [
  {
    question: "Why does my teenager get stressed before exams?",
    answer: "Many teenagers experience stress before exams because they worry about performance, results, future opportunities and meeting expectations. Academic pressure, fear of failure, comparison with peers and uncertainty about outcomes can all contribute to exam-related stress. While some level of stress may motivate preparation, excessive stress can affect confidence, concentration and emotional wellbeing.",
  },
  {
    question: "What are the signs of exam anxiety?",
    answer: "Common signs of exam anxiety may include excessive worrying, overthinking, sleep difficulties, fear of failure, difficulty concentrating, irritability, emotional overwhelm and physical symptoms such as headaches, stomach discomfort or restlessness. Some teenagers may avoid studying, procrastinate or become unusually emotional before examinations.",
  },
  {
    question: "How can parents help teenagers during exams?",
    answer: "Parents can support teenagers by creating a calm and encouraging environment during exam periods. Listening without judgement, reducing unnecessary pressure, maintaining healthy routines and focusing on effort rather than only results often helps teenagers manage stress more effectively.",
  },
  {
    question: "Can exam stress affect academic performance?",
    answer: "Yes. Excessive exam stress may affect concentration, memory, confidence and decision-making abilities. Many students find it difficult to perform at their best when anxiety becomes overwhelming. Emotional wellbeing and academic performance are closely connected.",
  },
  {
    question: "Why is my child afraid of failure?",
    answer: "Fear of failure may develop when teenagers associate their self-worth with academic results or feel excessive pressure to succeed. High expectations, perfectionist tendencies, comparison with others and concerns about disappointing family members can all contribute to this fear.",
  },
  {
    question: "How can I improve my teenager's concentration?",
    answer: "Concentration may be influenced by sleep quality, emotional wellbeing, study habits, lifestyle routines, screen use and stress levels. Encouraging consistent schedules, healthy sleep, regular physical activity and balanced study routines often helps improve focus.",
  },
  {
    question: "What causes performance anxiety in teenagers?",
    answer: "Performance anxiety may be influenced by fear of judgement, academic expectations, low confidence, perfectionism, social pressure and concerns about future outcomes. Understanding these emotional influences often helps families better support confidence and wellbeing.",
  },
  {
    question: "Why does my teenager procrastinate before exams?",
    answer: "Procrastination is not always a sign of laziness. In many cases, it may be linked to fear of failure, anxiety, overwhelm, low confidence or difficulty managing academic pressure. Teenagers may delay studying because they feel stressed about the task itself.",
  },
  {
    question: "Can lack of sleep increase exam stress?",
    answer: "Yes. Sleep plays an important role in emotional wellbeing, memory, concentration and learning. Poor sleep habits may increase irritability, anxiety, stress levels and difficulty focusing.",
  },
  {
    question: "What is the best way to manage exam stress?",
    answer: "Managing exam stress often involves healthy study habits, adequate sleep, balanced daily routines, emotional support, realistic expectations and effective time management. Every teenager responds differently, so understanding individual needs is important.",
  },
  {
    question: "How do I help my child deal with academic pressure?",
    answer: "Parents can help by encouraging open communication, reducing excessive expectations and focusing on learning rather than only outcomes. Teenagers often cope better when they feel supported and understood.",
  },
  {
    question: "What are the first signs of academic burnout?",
    answer: "Early signs of academic burnout may include emotional exhaustion, reduced motivation, difficulty concentrating, increased irritability, sleep disturbances, fatigue and loss of interest in studies.",
  },
  {
    question: "How does Manovaidya support students and families?",
    answer: "At Manovaidya, support begins with understanding the student as a whole rather than focusing only on academic performance. Through structured assessment, personalized guidance, family support and the Neuro-Ayurveda Development System, families gain a deeper understanding of emotional wellbeing, confidence, concentration, motivation and lifestyle-related influences.",
  },
  {
    question: "Can exam stress be managed without medication?",
    answer: "Many teenagers benefit from non-medication approaches that focus on emotional wellbeing, healthy routines, effective study habits, stress management, physical activity and family support. The most appropriate approach depends on the individual's needs and circumstances.",
  },
  {
    question: "When should parents seek professional guidance for exam stress?",
    answer: "Parents may consider seeking guidance when exam-related stress begins affecting sleep, confidence, concentration, motivation, emotional wellbeing or daily functioning. Persistent anxiety, fear of failure, emotional breakdowns, avoidance of studies or significant behavioural changes may indicate the need for additional support.",
  },
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function ExamPerformancePressureIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = "Exam & Performance Pressure Support in India | Exam Stress & Anxiety Support | Manovaidya";

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
      "Looking for Exam Stress Support in India? Learn about exam anxiety, academic pressure, fear of failure, concentration challenges and family guidance through the Neuro-Ayurveda approach at Manovaidya."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/exam-performance-pressure`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Exam & Performance Pressure Support in India",
          description:
            "Exam stress, academic pressure, performance anxiety and parent guidance support through Manovaidya's Neuro-Ayurveda approach.",
          url: `${window.location.origin}/exam-performance-pressure`,
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
            { "@type": "ListItem", position: 2, name: "Teen Mental Wellness", item: `${window.location.origin}/teen-mental-wellness-india` },
            { "@type": "ListItem", position: 3, name: "Exam & Performance Pressure Support", item: `${window.location.origin}/exam-performance-pressure` },
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

    const scriptId = "exam-performance-pressure-schema";
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
      const scrollMarker = window.scrollY + 140;
      let current = pageLinks[0].id;

      pageLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollMarker) {
          current = link.id;
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <main className="bg-[#fbf9fd] text-[#21142d]">
      <section className="mx-auto grid max-w-[1440px] gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[220px_minmax(0,1fr)_320px] lg:px-8">
        <div className="space-y-5">
          <SidebarCard className="sticky top-24 hidden lg:block">
            <h2 className="text-[15px] font-black text-[#21142d]">On this page</h2>
            <nav className="mt-4 space-y-2">
              {pageLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`flex items-start gap-2 rounded-md px-2 py-1.5 text-[12px] font-bold leading-5 transition ${
                    activeSection === link.id ? "bg-[#f0e7f6] text-[#7835A4]" : "text-[#5f5367] hover:text-[#7835A4]"
                  }`}
                >
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${activeSection === link.id ? "bg-[#7835A4]" : "bg-[#9b8ea5]"}`} />
                  {link.label}
                </a>
              ))}
            </nav>
          </SidebarCard>

          <SidebarCard className="hidden lg:block">
            <Users className="h-8 w-8 text-[#7835A4]" />
            <h2 className="mt-3 text-[16px] font-black text-[#21142d]">Need Personalized Guidance?</h2>
            <p className="mt-2 text-[12px] font-bold leading-5 text-[#5f5367]">Our experts are here to understand your teenager's academic pressure and guide the right next step.</p>
            <a href="tel:+917823894080" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
              Book a Consultation
            </a>
          </SidebarCard>
        </div>

        <article className="min-w-0 rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_12px_34px_rgba(58,31,90,0.06)] sm:p-7">
          <div className="text-[12px] font-bold text-[#7b6f84]">
            <a href="/" className="hover:text-[#7835A4]">Home</a>
            <span className="mx-2">/</span>
            <a href="/teen-mental-wellness-india" className="hover:text-[#7835A4]">Teen Mental Wellness</a>
            <span className="mx-2">/</span>
            <span>Exam & Performance Pressure Support</span>
          </div>

          <p className="mt-7 text-[12px] font-black uppercase tracking-[0.18em] text-[#7835A4]">Teen Mental Wellness</p>
          <h1 className="mt-3 text-[30px] font-black leading-tight text-[#17111f] sm:text-[42px]">
            Exam & Performance Pressure Support in India
          </h1>
          <p className="mt-4 text-[16px] font-bold leading-8 text-[#51465a]">
            Helping Teenagers Build Confidence, Emotional Resilience & Healthy Academic Wellbeing.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-[#eadff1] py-4">
            <div className="flex items-center gap-3">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                <p className="text-[12px] font-bold text-[#75677d]">Mental Health Specialist | 10 min read</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[12px] font-bold text-[#75677d]">
              <Share2 className="h-4 w-4 text-[#7835A4]" />
              Share
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-lg border border-[#eadff1] bg-[#f7f0fb]">
            <img src={heroImage} alt="Exam and Performance Pressure Support in India at Manovaidya" className="w-full h-auto object-contain" />
          </div>

          <section className="mt-7">
            <p className="text-[14px] font-semibold leading-7 text-[#51465a]">
              Academic expectations have become a significant part of modern teenage life. School examinations, competitive environments, future career planning and performance expectations can create considerable emotional pressure for many teenagers.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              While a certain level of pressure may motivate learning and growth, excessive academic stress can affect emotional wellbeing, confidence, sleep, concentration and overall mental wellness.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents notice that their teenager becomes anxious before exams, worries excessively about results, loses confidence or struggles to manage academic expectations. Understanding these challenges early often helps families provide more effective support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that exam pressure is not simply about studies. Emotional wellbeing, confidence, lifestyle habits, sleep patterns, family expectations and stress management skills often work together to influence academic performance and overall wellbeing.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, Autism, ADHD, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda approach that helps teenagers and families better understand exam-related stress while creating a roadmap for emotional resilience and long-term growth.
            </p>
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">At Manovaidya, Exam & Performance Pressure Support Focuses On:</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["Exam Stress & Anxiety", "Academic Pressure Management", "Confidence & Self-Belief", "Fear of Failure", "Emotional Resilience", "Parent-Teen Academic Support"].map((item) => (
                  <div key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="understanding-exam-pressure" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Exam & Performance Pressure</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Examinations are often viewed as an important part of education. However, for many teenagers, academic performance becomes closely connected to self-worth, confidence and future expectations.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many families searching for Exam Stress Support in India, Academic Pressure Support in India or Teen Mental Health Support in India are looking for a structured approach that helps them better understand their teenager's emotional wellbeing and academic challenges.
            </p>
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Teenagers may experience pressure from:</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {["School expectations", "Competitive environments", "Family expectations", "Peer comparison", "Career concerns", "Fear of disappointing others"].map((item) => (
                  <div key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Exam & Performance Pressure</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Exam-related stress may appear emotionally, behaviourally, academically and physically. Parents should focus on patterns rather than isolated incidents.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
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

          <section id="why-exam-stress" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Experience Exam Stress</h2>
            <p className="mt-3 text-[14px] font-bold leading-6 text-[#3b2e45]">
              Many parents assume exam stress occurs only because teenagers are not prepared enough. In reality, academic pressure is often influenced by multiple factors.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {pressureFactors.map((factor) => (
                <div key={factor.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <h3 className="text-[14px] font-black text-[#21142d]">{factor.title}</h3>
                  <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{factor.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-exam-pressure-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Exam Pressure Can Affect Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Excessive academic stress may affect multiple areas of life. Understanding these effects helps families focus on supporting overall wellbeing rather than only academic results.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {impactAreas.map((area) => (
                <div key={area.title} className="rounded-lg border border-[#eadff1] bg-white p-5">
                  <h3 className="text-[16px] font-black text-[#21142d]">{area.title}</h3>
                  <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">{area.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-approach" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Exam Stress</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, exam stress is understood through a broader perspective. Rather than focusing only on marks or performance, Manovaidya focuses on the factors that may influence emotional wellbeing, confidence, concentration, motivation, attention and overall development.
            </p>
            <img src={neuroImage} alt="Neuro Ayurveda approach for exam stress support" className="mt-5 max-h-[320px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4" />
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

          <section id="how-parents-can-support" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">How Parents Can Support Teenagers During Exams</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Parents often play a major role in shaping how teenagers experience academic pressure. Supportive guidance can help teenagers develop confidence and healthier coping skills.
            </p>
            <img src={parentImage} alt="Parent guidance for exam stress and academic pressure" className="my-5 w-full h-auto rounded-lg object-contain shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
            <div className="grid gap-4 sm:grid-cols-2">
              {parentSupportPoints.map((point) => (
                <div key={point.title} className="rounded-md border border-[#eadff1] bg-white p-4 shadow-sm">
                  <h3 className="text-[14px] font-black text-[#21142d]">{point.title}</h3>
                  <p className="mt-2 text-[12px] font-bold leading-5 text-[#5f5367]">{point.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-manovaidya-supports" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Students & Families</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, support begins with understanding the student as a whole rather than focusing only on academic performance.
            </p>
            <div className="mt-5 grid gap-3">
              {supportSteps.map((step) => (
                <div key={step.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <h3 className="text-[14px] font-black text-[#21142d]">{step.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold text-[#5f5367]">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">When Should Parents Consider an Assessment?</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {assessmentSigns.map((item) => (
                  <div key={item} className="flex gap-2 text-[12.5px] font-bold leading-5 text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Choosing the right support system for academic stress and emotional wellbeing can feel overwhelming for many families. At Manovaidya, our goal is not simply to focus on marks, exams or performance. We help families understand the broader factors that may influence concentration, confidence, motivation, emotional wellbeing and overall development.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <div key={item.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <div className="flex gap-2 text-[13px] font-black text-[#21142d]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item.title}
                  </div>
                  <p className="mt-2 text-[12.5px] font-semibold leading-6 text-[#5f5367]">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Exam Stress Support, Academic Pressure Support and Teen Mental Wellness guidance through online and in-clinic consultations.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-[12.5px] font-black">
              <a href="/teen-mental-wellness-india" className="text-[#7835A4] hover:text-[#21142d]">Learn more about Teen Mental Wellness Support.</a>
              <a href="/teen-stress-anxiety-support" className="text-[#7835A4] hover:text-[#21142d]">Explore Teen Stress & Anxiety Support.</a>
              <a href="/teen-depression-support" className="text-[#7835A4] hover:text-[#21142d]">Learn about Teen Depression & Low Mood Support.</a>
            </div>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-white p-5">
            <div className="flex gap-4">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-20 w-20 rounded-lg object-cover" />
              <div>
                <p className="text-[12px] font-bold text-[#75677d]">About the Author</p>
                <h2 className="text-[15px] font-black text-[#21142d]">Dr. Ankush Garg</h2>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#51465a]">
                  Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach.
                </p>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#51465a]">
                  Based in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.
                  <br /><br />
                  <a href="/dr-ankush-garg/" className="text-[#7835A4] hover:underline font-bold">Know more about Dr. Ankush Garg.</a>
                </p>
              </div>
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
                <h2 className="text-[20px] font-black text-[#17111f]">Concerned About Exam Stress or Academic Pressure?</h2>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  Book a structured assessment and personalized guidance session with the Manovaidya team. If your teenager is experiencing exam stress, fear of failure, declining confidence, concentration difficulties or emotional overwhelm, seeking clarity is often the first step.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href="tel:+917823894080" className="inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-5 text-[12px] font-black text-white transition hover:bg-[#632b86]">
                    Book Consultation
                  </a>
                  <a href="tel:+917823894080" className="inline-flex h-10 items-center justify-center rounded-md border-2 border-[#7835A4] bg-white px-5 text-[12px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]">
                    Take Teen Wellness Assessment
                  </a>
                </div>
              </div>
              <img src={ctaImage} alt="Academic wellbeing and exam stress support in India" className="w-full h-auto min-h-[240px] object-contain" />
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

          <SidebarCard className="border-[#eadff1]">
            <h2 className="text-[15px] font-black text-[#21142d]">Related Teen Mental Wellness Pages</h2>
            <div className="mt-4 flex flex-col gap-3">
              {relatedPages.map((page) => (
                <a key={page.title} href={page.href} className="text-[13px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                  {page.title}
                </a>
              ))}
            </div>
          </SidebarCard>

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]">
            <CalendarCheck className="h-9 w-9 text-[#7835A4]" />
            <h2 className="mt-4 text-[17px] font-black text-[#21142d]">Book a Consultation</h2>
            <p className="mt-3 text-[12px] font-bold leading-5 text-[#5f5367]">
              Get personalized exam stress and academic pressure support for your teenager.
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

export default ExamPerformancePressureIndiaPage;

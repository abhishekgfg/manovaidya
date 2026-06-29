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

import childHeroImage from "../images/teen-stress-anxiety-support-india.png";
import supportFamilyImage from "../images/parent-guidance-teen-anxiety.png";
import neuroDiagramImage from "../images/neuro-ayurveda-teen-mental-wellness.png";
import ctaImage from "../images/teen-emotional-wellbeing-support.png";
import doctorImage from "../images/doctor-ankush-portrait.png";

const pageLinks = [
  { label: "Understanding Teen Stress & Anxiety", id: "understanding-teen-stress" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Why Teenagers Experience Stress", id: "why-teenagers-experience-stress" },
  { label: "How Stress Affects Teenagers", id: "how-stress-affects" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How Parents Can Support", id: "how-parents-can-support" },
  { label: "How Manovaidya Supports", id: "how-manovaidya-supports" },
  { label: "Why Families Choose Manovaidya", id: "why-families-choose" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];

const categories = [
  { label: "Teen Mental Wellness", count: 15, Icon: Brain },
  { label: "Child Development", count: 11, Icon: Users },
  { label: "Parenting", count: 9, Icon: Users },
];

const signGroups = [
  {
    title: "Emotional Signs",
    items: [
      "Excessive worrying",
      "Overthinking",
      "Irritability",
      "Mood swings",
      "Low confidence",
      "Fear of failure",
      "Emotional overwhelm",
    ],
  },
  {
    title: "Behavioural Signs",
    items: [
      "Social withdrawal",
      "Avoiding responsibilities",
      "Reduced motivation",
      "Increased screen use",
      "Difficulty managing daily routines",
      "Emotional outbursts",
    ],
  },
  {
    title: "Academic Signs",
    items: [
      "Difficulty concentrating",
      "Declining academic performance",
      "Exam-related anxiety",
      "Fear of making mistakes",
      "Reduced interest in studies",
    ],
  },
  {
    title: "Physical Signs",
    items: [
      "Sleep difficulties",
      "Fatigue",
      "Headaches",
      "Stomach discomfort",
      "Restlessness",
      "Muscle tension",
    ],
  },
];

const stressFactors = [
  {
    title: "Academic Pressure",
    items: [
      "School expectations",
      "Competitive environments",
      "Exams and future career concerns",
      "Performance and grades expectations",
    ],
  },
  {
    title: "Social Pressure",
    items: [
      "Friendships and peer acceptance",
      "Social relationships and comparison",
      "Affects on confidence and wellbeing",
    ],
  },
  {
    title: "Future Uncertainty",
    items: [
      "Careers and higher education",
      "Anxiety and self-doubt about future goals",
      "Pressure to make important life decisions",
    ],
  },
  {
    title: "Screen & Social Media Influence",
    items: [
      "Excessive exposure to social media",
      "Increased comparison and self-criticism",
      "Pressure to meet unrealistic online standards",
    ],
  },
  {
    title: "Family Expectations",
    items: [
      "Well-intentioned expectations from parents",
      "Additional pressure if unable to meet them",
      "Need for healthy communication",
    ],
  },
  {
    title: "Lifestyle & Sleep Habits",
    items: [
      "Poor sleep and irregular routines",
      "Lack of physical activity",
      "Excessive screen use",
    ],
  }
];

const pillars = [
  {
    title: "Brain Nourishment System",
    Icon: Brain,
    text: "Supports understanding of attention, emotional regulation, learning readiness, confidence, decision making, and cognitive wellbeing.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Focuses on understanding how digestive wellbeing may influence overall functioning, mood and emotional balance.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Focuses on understanding thought patterns, learning behaviour, emotional responses, attention, and adaptability.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Supports understanding of sensory influences affecting emotional wellbeing and stress levels in various environments.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Helps families understand behavioural influences that may affect motivation and emotional expression.",
  },
];

const parentSupportPoints = [
  {
    title: "Listen Without Judgement",
    text: "Many teenagers want to feel heard before they want solutions. Creating a safe space for open conversations helps teenagers express emotions more comfortably.",
  },
  {
    title: "Avoid Constant Criticism",
    text: "Excessive criticism may reduce confidence and increase emotional stress. Guidance is often more effective when teenagers feel supported rather than judged.",
  },
  {
    title: "Encourage Healthy Routines",
    text: "Consistent sleep, balanced daily schedules, physical activity and healthy habits can support emotional wellbeing and resilience.",
  },
  {
    title: "Reduce Unnecessary Pressure",
    text: "Encouragement and realistic expectations often create better outcomes than constant pressure or comparison. Every teenager develops at a different pace.",
  },
  {
    title: "Support Emotional Expression",
    text: "Teenagers should feel comfortable expressing fear, stress, frustration, confusion, and disappointment. Learning healthy emotional expression is an important life skill.",
  },
  {
    title: "Promote Healthy Screen Habits",
    text: "Technology is part of modern life, but balance remains important. Helping teenagers maintain healthy boundaries around screen use can support attention, sleep and emotional wellbeing.",
  },
  {
    title: "Focus on Strengths",
    text: "Many teenagers hear more about what they are doing wrong than what they are doing right. Recognizing strengths, progress and effort often helps build confidence and emotional resilience.",
  }
];

const supportSteps = [
  {
    title: "Step 1: Detailed Assessment",
    desc: "Understanding emotional wellbeing, stress levels, behaviour, lifestyle habits, confidence challenges, sleep patterns, screen usage and family concerns."
  },
  {
    title: "Step 2: Personalized Guidance",
    desc: "Providing individualized recommendations based on the teenager's unique emotional, behavioural and developmental needs."
  },
  {
    title: "Step 3: Parent Guidance & Family Support",
    desc: "Helping parents better understand communication, emotional wellbeing and practical ways to support their teenager at home."
  },
  {
    title: "Step 4: Neuro-Ayurveda Development System",
    desc: "Applying the five-pillar framework to better understand emotional wellbeing, behaviour, attention, confidence and overall growth."
  },
  {
    title: "Step 5: Progress Tracking & Follow-Up",
    desc: "Creating a structured roadmap that helps families monitor progress and make informed decisions over time."
  }
];

const whyChoose = [
  "Structured Teen Mental Wellness Assessment",
  "Neuro-Ayurveda Development System",
  "Parent-Centred Guidance",
  "Personalized Support",
  "Long-Term Growth Focus",
  "Family-Oriented Approach",
];

const relatedPages = [
  { title: "Teen Depression & Low Mood Support", href: "/teen-depression-support" },
  { title: "Exam & Performance Pressure", href: "/exam-performance-pressure" },
  { title: "Teen Confidence & Emotional Wellbeing", href: "/teen-mental-wellness-india" },
  { title: "Screen Addiction Support", href: "/teen-screen-addiction-support" },
  { title: "Parent-Teen Relationship Support", href: "/teen-mental-wellness-india" },
];

const faqs = [
  {
    question: "What are the signs of anxiety in teenagers?",
    answer: "Teen anxiety can appear in different ways depending on the individual. Common signs may include excessive worrying, overthinking, irritability, difficulty concentrating, sleep disturbances, low confidence, emotional withdrawal and fear of failure. Some teenagers may become quiet and avoid social situations, while others may appear restless or emotionally overwhelmed. Anxiety can affect relationships, academic performance and overall wellbeing. Recognizing these signs early can help families better understand what their teenager may be experiencing and provide appropriate support.",
  },
  {
    question: "What is the main cause of anxiety in teens?",
    answer: "There is no single cause of anxiety in teenagers. It is often influenced by a combination of factors such as academic pressure, social expectations, fear of failure, family stress, excessive screen use, lifestyle habits and emotional experiences. Every teenager responds differently to challenges and stressors. Understanding the factors contributing to anxiety is often an important first step in helping teenagers develop healthier coping skills and emotional resilience.",
  },
  {
    question: "How can I help my 15 year old with anxiety?",
    answer: "Parents can help by creating a supportive environment where teenagers feel safe discussing their thoughts and emotions. Listening without judgment, maintaining healthy routines, encouraging physical activity and reducing unnecessary pressure may help teenagers manage anxiety more effectively. Consistent emotional support often plays an important role in helping teenagers build resilience and confidence. Small changes in communication and daily habits can sometimes make a meaningful difference over time.",
  },
  {
    question: "How to help a teenager with anxiety and depression?",
    answer: "Teenagers experiencing anxiety and low mood often benefit from understanding, patience and emotional support. Parents can encourage open communication, healthy routines, social connection and balanced daily habits. It is important to avoid constant criticism or comparison, as these may increase emotional distress.",
  },
  {
    question: "Can teenage hormones cause anxiety?",
    answer: "Yes, hormonal changes during adolescence may influence emotions, mood and stress responses. However, anxiety is usually influenced by multiple factors rather than hormones alone. Academic pressure, social challenges, lifestyle habits, sleep patterns, family environment and personal experiences may also contribute to anxiety. While hormonal changes can make teenagers more emotionally sensitive, understanding the overall picture often helps families provide more effective support and guidance.",
  },
  {
    question: "What are the first signs of anxiety?",
    answer: "Early signs of anxiety may include excessive worrying, overthinking, irritability, restlessness, difficulty sleeping, low confidence, avoidance of certain situations and trouble concentrating. Some teenagers may also complain of headaches, stomach discomfort or feeling nervous without a clear reason. Recognizing these early signs can help families better understand their teenager's emotional wellbeing and take supportive steps before anxiety begins affecting daily life.",
  },
  {
    question: "What triggers anxiety in teenagers?",
    answer: "Teen anxiety may be triggered by many different factors, including academic pressure, social expectations, fear of failure, relationship difficulties, excessive screen use, major life changes or uncertainty about the future. Every teenager is different, and what feels manageable for one teenager may feel overwhelming for another. Understanding personal triggers can help families and teenagers develop healthier coping strategies and emotional resilience.",
  },
  {
    question: "What does anxiety feel like physically?",
    answer: "Anxiety does not only affect emotions; it can also affect the body. Teenagers may experience a racing heart, sweating, stomach discomfort, headaches, muscle tension, restlessness, fatigue or difficulty sleeping. Some may describe feeling constantly \"on edge\" or unable to relax. Physical symptoms can sometimes be confusing because they may appear even when there is no immediate danger. Understanding this mind-body connection can help families better recognize anxiety-related challenges.",
  },
  {
    question: "How do doctors diagnose anxiety?",
    answer: "Doctors and mental health professionals typically diagnose anxiety by understanding emotional, behavioural and physical symptoms, along with how those symptoms affect daily functioning. The assessment process may include discussions about stress levels, thoughts, emotions, lifestyle habits, school experiences and overall wellbeing. There is no single laboratory test that confirms anxiety. Diagnosis usually involves a comprehensive evaluation of the teenager's experiences and concerns.",
  },
  {
    question: "Is there a test for anxiety?",
    answer: "There is no single medical test that can definitively diagnose anxiety. Professionals typically use detailed assessments, questionnaires, interviews and clinical observations to understand emotional wellbeing and anxiety-related symptoms. These tools help identify patterns, severity and factors that may be influencing a teenager's mental health. A structured assessment often provides families with greater clarity about the challenges their teenager may be experiencing.",
  },
  {
    question: "What age does anxiety usually start?",
    answer: "Anxiety can develop at different ages and varies from one individual to another. Some children may show signs of anxiety during early childhood, while others may experience it during adolescence when academic, social and emotional demands increase. Teenage years are a common period for anxiety-related concerns because teenagers are navigating significant developmental changes. Early understanding and support often help teenagers manage these challenges more effectively.",
  },
  {
    question: "What is the best treatment for teenage anxiety?",
    answer: "The most appropriate approach depends on the teenager's individual needs, circumstances and the factors contributing to anxiety. Effective support often involves understanding emotional wellbeing, lifestyle habits, stressors, family dynamics and coping skills. Many families benefit from structured assessment, emotional guidance, healthy routines, parent support and personalized strategies. The goal is not only to reduce anxiety but also to strengthen emotional resilience, confidence and overall wellbeing.",
  },
  {
    question: "Can anxiety be managed without medication?",
    answer: "Many teenagers benefit from non-medication approaches that focus on emotional wellbeing, lifestyle habits, stress management, healthy routines, physical activity and family support. The most appropriate approach depends on the teenager's individual situation and the severity of concerns. Understanding the factors contributing to anxiety often helps families identify supportive strategies that promote confidence, resilience and emotional balance.",
  },
  {
    question: "How can parents help teenagers manage stress and anxiety?",
    answer: "Parents can support teenagers by maintaining open communication, listening without judgment, encouraging healthy routines and creating a supportive home environment. Teenagers often respond positively when they feel understood rather than criticized. Consistent sleep habits, balanced routines, emotional support and realistic expectations can all contribute to better wellbeing. Parents play an important role in helping teenagers develop healthy coping skills, emotional resilience and long-term wellbeing.",
  },
  {
    question: "When should parents seek professional guidance?",
    answer: "Parents may consider seeking professional guidance when stress, anxiety or emotional concerns persist over time and begin affecting daily functioning, relationships, sleep, confidence or academic performance. Signs such as excessive worry, emotional withdrawal, persistent low mood, behavioural changes or difficulty managing responsibilities may indicate the need for additional support. A structured assessment can help families better understand emotional, behavioural and lifestyle-related factors that may be influencing their teenager's wellbeing.",
  }
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function TeenStressAnxietyIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = "Teen Stress & Anxiety Support in India | Teen Mental Health Support | Manovaidya";

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
      "Looking for Teen Stress & Anxiety Support in India? Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/teen-stress-anxiety-support`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Teen Stress & Anxiety Support in India",
          description:
            "Looking for Teen Stress & Anxiety Support in India? Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya.",
          url: `${window.location.origin}/teen-stress-anxiety-support`,
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
            { "@type": "ListItem", position: 2, name: "Teen Mental Wellness", item: `${window.location.origin}/teen-mental-wellness` },
            { "@type": "ListItem", position: 3, name: "Teen Stress & Anxiety Support in India", item: `${window.location.origin}/teen-stress-anxiety-support` },
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

    const scriptId = "teen-stress-schema";
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
          <a href="/teen-mental-wellness" className="transition hover:text-[#7835A4]">Teen Mental Wellness</a>
          <span>/</span>
          <span className="text-[#21142d]">Teen Stress & Anxiety Support</span>
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
                Our experts are here to understand your teenager's emotional wellbeing and guide the right next step.
              </p>
              <a href="#book-consultation" className="mt-4 inline-flex h-10 items-center justify-center rounded-md bg-[#7835A4] px-4 text-[12px] font-black text-white transition hover:bg-[#632b86]">
                Book a Consultation
              </a>
            </SidebarCard>
          </div>
        </div>

        <article className="min-w-0">
          <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">Teen Mental Health Support</p>
          <h1 className="mt-3 max-w-[820px] text-[32px] font-black leading-[1.12] text-[#17111f] sm:text-[42px]">
            Teen Stress & Anxiety Support in India
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] font-bold leading-7 text-[#5a5063]">
            Helping Teenagers Build Emotional Resilience, Confidence & Better Emotional Wellbeing. Many families searching for Teen Stress & Anxiety Support in India are looking for a structured approach that helps them better understand their teenager's emotional wellbeing and long-term growth.
          </p>
          
          <ul className="mt-4 space-y-2 text-[14px] font-bold text-[#51465a]">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Emotional Wellbeing & Resilience</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Stress & Anxiety Management</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Confidence & Self-Esteem Building</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Academic & Performance Pressure</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Healthy Lifestyle & Daily Habits</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Parent-Teen Communication & Support</li>
          </ul>

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
            <img src={childHeroImage} alt="Teen Stress and Anxiety Support in India at Manovaidya" className="w-full h-auto object-contain" />
          </figure>

          <section id="understanding-teen-stress" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Teen Stress & Anxiety</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Teenage years are often described as a period of rapid change. Physical development, emotional growth, social expectations, academic responsibilities and future planning can all create new challenges for teenagers. As a result, many families today are seeking guidance regarding Teen Mental Health Concerns, Teen Mental Health Support and Teen Emotional Wellbeing.
              </p>
              <p>
                Issues such as Teenage Stress and Anxiety, low confidence, academic pressure, emotional struggles and social challenges can sometimes affect a teenager's overall wellbeing and daily functioning.
              </p>
              <p>
                Many parents notice that their teenager has become more withdrawn, irritable, stressed or emotionally distant but often struggle to understand whether these changes are a normal part of adolescence or signs of a deeper emotional concern.
              </p>
              <p>
                Stress and anxiety can affect teenagers differently. Some may become quiet and withdrawn. Others may become angry, emotional or irritable. Some teenagers may constantly worry about school, friendships, appearance or future goals. Others may struggle with confidence, motivation or decision-making.
              </p>
              <p>
                Every teenager's experience is unique, which is why understanding the underlying factors influencing emotional wellbeing is often more important than focusing only on visible behaviours. At Manovaidya, our goal is to help families better understand emotional wellbeing, confidence, behaviour and lifestyle-related influences that may affect a teenager's mental wellness.
              </p>
            </div>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Teen Stress & Anxiety</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Teen stress and anxiety do not always appear in the same way. Many teenagers may not openly express what they are feeling emotionally. Instead, stress often becomes visible through behaviour, habits, emotions or physical symptoms.
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
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              The presence of one or two signs does not automatically indicate a significant concern. However, when emotional or behavioural changes continue for an extended period and begin affecting daily life, they deserve attention and understanding.
            </p>
          </section>

          <section id="why-teenagers-experience-stress" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Experience Stress & Anxiety</h2>
            <p className="mt-3 text-[14px] font-bold leading-6 text-[#3b2e45]">
              Many parents assume that teenagers experience stress only because of studies. In reality, teen stress and anxiety are often influenced by multiple interconnected factors.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {stressFactors.map((group) => (
                <div key={group.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
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
            <p className="mt-4 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Many parents worry that ongoing emotional struggles, low confidence, excessive screen use or academic stress may affect their teenager's future growth, relationships and overall wellbeing. Understanding these concerns early often helps families take positive and informed steps towards better emotional health and resilience.
            </p>
          </section>

          <section id="how-stress-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Stress & Anxiety Can Affect Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Stress and anxiety can influence much more than emotions alone. When emotional pressure continues for a prolonged period, it may affect confidence, relationships, learning, motivation and overall wellbeing. Many teenagers struggle silently because they are unsure how to express what they are feeling or because they fear being misunderstood. Understanding how stress and anxiety affect different areas of life can help families provide more meaningful support.
            </p>
            
            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Emotional Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  One of the most common effects of stress and anxiety is emotional overwhelm. Teenagers may experience frequent worrying, overthinking, irritability, mood swings, emotional sensitivity, fear of failure, and feelings of helplessness. Over time, unmanaged emotional stress may affect a teenager's ability to enjoy daily life and maintain emotional balance.
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Confidence & Self-Esteem</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Stress and anxiety often affect how teenagers view themselves. Many teenagers begin questioning: Am I good enough? Why can't I do better? What if I fail? What will others think about me? These thoughts can gradually reduce confidence and self-esteem. A teenager who once appeared motivated and confident may begin avoiding challenges because they fear making mistakes or being judged.
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Academic Performance</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Emotional wellbeing and academic performance are closely connected. Teenagers experiencing high levels of stress or anxiety may struggle with concentration, memory, exam preparation, time management, and decision making. Even highly capable students may find it difficult to perform at their best when emotional pressure becomes overwhelming.
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Social Relationships & Physical Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Some teenagers may become more withdrawn, easily irritated, sensitive to criticism, or fearful of social situations. Mental and emotional wellbeing can also influence physical health. Some teenagers may experience sleep difficulties, fatigue, headaches, digestive discomfort, restlessness, or reduced energy.
                </p>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Teen Stress & Anxiety</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, teen stress and anxiety are understood through a broader perspective. Rather than focusing only on stress, anxiety or behaviour alone, Manovaidya focuses on understanding the broader factors that may influence emotional wellbeing, confidence, behaviour, motivation, attention and overall development.
            </p>
            <img src={neuroDiagramImage} alt="Neuro Ayurveda approach for teen mental wellness" className="mt-5 max-h-[320px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4" />
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
            <h2 className="text-[20px] font-black text-[#17111f]">How Parents Can Support Teenagers</h2>
            <p className="mt-3 text-[13px] font-bold leading-6 text-[#3b2e45]">
              Parents play one of the most important roles in supporting a teenager's emotional wellbeing. Small changes in communication, understanding and daily routines can often make a meaningful difference.
            </p>
            <img src={supportFamilyImage} alt="Parent guidance for teen stress and anxiety support" className="my-5 w-full h-auto rounded-lg object-contain shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
            
            <div className="grid gap-4 sm:grid-cols-2">
              {parentSupportPoints.map((point) => (
                <div key={point.title} className="rounded-md bg-white p-4 shadow-sm border border-[#eadff1]">
                  <h3 className="text-[14px] font-black text-[#21142d]">{point.title}</h3>
                  <p className="mt-2 text-[12px] font-bold leading-5 text-[#5f5367]">{point.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[13px] font-bold leading-6 text-[#3b2e45]">
              At Manovaidya, parent guidance is considered an important part of teen mental wellness because teenagers often make the greatest progress when families and professionals work together to create a supportive environment for growth, confidence and emotional wellbeing.
            </p>
          </section>

          <section id="how-manovaidya-supports" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Teenagers & Families</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, support begins with understanding the teenager as a whole rather than focusing on a single symptom or concern. Our goal is to help teenagers and families move from confusion and stress toward greater clarity, confidence and emotional wellbeing.
            </p>
            <div className="mt-5 grid gap-3">
              {supportSteps.map((step) => (
                <div key={step.title} className="rounded-lg border border-[#eadff1] bg-white p-4">
                  <h3 className="text-[14px] font-black text-[#21142d]">{step.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold text-[#5f5367]">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Choosing the right support system for a teenager can feel overwhelming for many families. Parents are often looking for clarity, practical guidance and a structured approach that helps them better understand their teenager's emotional wellbeing. At Manovaidya, our goal is not simply to focus on isolated symptoms but to help families understand the broader factors that may influence emotional wellbeing, confidence, behaviour, motivation and overall development.
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
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Teen Stress & Anxiety Support, Teen Mental Health Support and Teen Emotional Wellbeing guidance through online and in-clinic consultations.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-white p-5">
            <div className="flex gap-4">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-20 w-20 rounded-lg object-cover" />
              <div>
                <p className="text-[12px] font-bold text-[#75677d]">About the Author</p>
                <h2 className="text-[15px] font-black text-[#21142d]">Dr. Ankush Garg</h2>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#51465a]">
                  Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Autism, ADHD, Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach.
                </p>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#51465a]">
                  Based in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.
                </p>
              </div>
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
                <h2 className="text-[20px] font-black text-[#17111f]">Concerned About Your Teenager's Emotional Wellbeing?</h2>
                <p className="mt-3 text-[13px] font-bold leading-6 text-[#51465a]">
                  Book a structured assessment and personalized guidance session with the Manovaidya team. If your teenager is experiencing stress, anxiety, emotional overwhelm, confidence challenges, academic pressure or behavioural changes, seeking clarity is often the first step.
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
              <img src={ctaImage} alt="Teen emotional wellbeing support and family guidance" className="w-full h-auto min-h-[240px] object-contain" />
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

export default TeenStressAnxietyIndiaPage;

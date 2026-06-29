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

import childHeroImage from "../images/teen-depression-support-india.png";
import supportFamilyImage from "../images/parent-support-teen-depression.png";
import neuroDiagramImage from "../images/neuro-ayurveda-teen-depression.png";
import ctaImage from "../images/teen-emotional-wellbeing-india.png";
import doctorImage from "../images/doctor-ankush-portrait.png";

const pageLinks = [
  { label: "Understanding Teen Depression & Low Mood", id: "understanding-teen-depression" },
  { label: "Common Signs", id: "common-signs" },
  { label: "Why Teenagers Experience Depression", id: "why-teenagers-experience-depression" },
  { label: "How Depression Affects Teenagers", id: "how-depression-affects" },
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
  { label: "Child Development", count: 11, Icon: Users },
  { label: "Parenting", count: 9, Icon: Users },
];

const signGroups = [
  {
    title: "Emotional Signs",
    items: [
      "Persistent sadness",
      "Irritability",
      "Feelings of hopelessness",
      "Emotional sensitivity",
      "Low confidence",
      "Negative self-talk",
      "Increased emotional overwhelm",
    ],
  },
  {
    title: "Behavioural Signs",
    items: [
      "Social withdrawal",
      "Avoiding friends and family",
      "Reduced interest in hobbies",
      "Lack of motivation",
      "Spending excessive time alone",
      "Increased screen dependency",
    ],
  },
  {
    title: "Academic Signs",
    items: [
      "Declining academic performance",
      "Difficulty concentrating",
      "Reduced participation",
      "Lack of interest in studies",
      "Fear of failure",
    ],
  },
  {
    title: "Physical Signs",
    items: [
      "Fatigue",
      "Changes in sleep patterns",
      "Appetite changes",
      "Reduced energy",
      "Difficulty maintaining routines",
    ],
  },
];

const depressionFactors = [
  {
    title: "Academic Pressure",
    items: [
      "School expectations",
      "Examinations",
      "Future career concerns",
      "Reduced confidence",
    ],
  },
  {
    title: "Social Comparison",
    items: [
      "Comparing to peers and friends",
      "Social media content comparison",
      "Feelings of inadequacy",
    ],
  },
  {
    title: "Relationship Challenges",
    items: [
      "Friendship difficulties",
      "Peer conflicts",
      "Social rejection",
    ],
  },
  {
    title: "Low Confidence & Self-Esteem",
    items: [
      "Self-doubt",
      "Negative thinking patterns",
      "Emotional vulnerability",
    ],
  },
  {
    title: "Screen & Social Media Influence",
    items: [
      "Excessive exposure to social media",
      "Unrealistic expectations",
      "Increased emotional pressure",
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
    text: "Focuses on understanding factors that may influence emotional balance, confidence, attention, learning readiness, decision making, and cognitive wellbeing.",
  },
  {
    title: "Gut Response System",
    Icon: HeartHandshake,
    text: "Focuses on understanding how overall wellbeing may influence emotional balance and daily functioning.",
  },
  {
    title: "Neural Network System",
    Icon: Sparkles,
    text: "Focuses on understanding thought patterns, emotional responses, behavioural tendencies, learning habits, and adaptability.",
  },
  {
    title: "Sensory Integration System",
    Icon: Waves,
    text: "Focuses on understanding sensory influences from the environment that may affect stress, emotions, and daily challenges.",
  },
  {
    title: "Behaviour Guidance System",
    Icon: ShieldCheck,
    text: "Focuses on understanding the factors contributing to behaviours like withdrawal, irritability, and lack of motivation.",
  },
];

const parentSupportPoints = [
  {
    title: "Stay Emotionally Available",
    text: "Many teenagers need to know that support is available even when they are not ready to talk. Consistent emotional presence often helps teenagers feel safer and more understood.",
  },
  {
    title: "Listen Without Judgement",
    text: "Teenagers are more likely to open up when they feel heard rather than judged. Listening calmly and respectfully can strengthen trust and communication.",
  },
  {
    title: "Avoid Constant Criticism",
    text: "Excessive criticism may reduce confidence and increase emotional distress. Supportive guidance often produces better outcomes than constant correction.",
  },
  {
    title: "Encourage Healthy Routines",
    text: "Healthy sleep habits, balanced schedules, physical activity and consistent daily routines can support emotional wellbeing.",
  },
  {
    title: "Support Social Connection",
    text: "Encouraging positive friendships, family interaction and healthy social experiences may help teenagers feel more connected and supported.",
  },
  {
    title: "Focus on Strengths",
    text: "Many teenagers struggling emotionally become focused on perceived weaknesses. Parents can help by recognizing strengths, effort and progress rather than focusing only on difficulties.",
  },
  {
    title: "Create a Supportive Home Environment",
    text: "A calm, understanding and emotionally safe environment often helps teenagers navigate challenges more effectively.",
  }
];

const supportSteps = [
  {
    title: "Step 1: Detailed Assessment",
    desc: "Understanding emotional wellbeing, motivation, confidence, lifestyle habits, sleep patterns, social experiences and family concerns."
  },
  {
    title: "Step 2: Personalized Guidance",
    desc: "Providing individualized recommendations based on the teenager's emotional, behavioural and developmental needs."
  },
  {
    title: "Step 3: Parent Guidance & Family Support",
    desc: "Helping parents better understand communication, emotional wellbeing and practical ways to support their teenager at home."
  },
  {
    title: "Step 4: Neuro-Ayurveda Development System",
    desc: "Applying the five-pillar framework to better understand emotional wellbeing, behaviour, confidence and overall growth."
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
  { title: "Teen Stress & Anxiety Support", href: "/teen-stress-anxiety-support" },
  { title: "Exam & Performance Pressure", href: "/exam-performance-pressure" },
  { title: "Teen Confidence & Emotional Wellbeing", href: "/teen-mental-wellness-india" },
  { title: "Screen Addiction Support", href: "/teen-screen-addiction-support" },
  { title: "Parent-Teen Relationship Support", href: "/teen-mental-wellness-india" },
];

const faqs = [
  {
    question: "Why is my teenager always sad?",
    answer: "Teenagers may feel sad for many reasons, including academic pressure, friendship challenges, social comparison, low confidence, family stress or emotional difficulties. Occasional sadness is a normal part of life, but persistent sadness that continues for several weeks and begins affecting daily activities, relationships or motivation may indicate a deeper emotional concern. Understanding the factors influencing emotional wellbeing often helps families provide better support and guidance during this important stage of development.",
  },
  {
    question: "What are the signs of depression in teenagers?",
    answer: "Common signs of depression in teenagers may include persistent sadness, irritability, emotional withdrawal, loss of interest in activities, reduced motivation, sleep changes, appetite changes, declining academic performance and low confidence. Some teenagers may become quiet and isolated, while others may appear angry or emotionally sensitive. Recognizing these signs early can help families better understand what their teenager may be experiencing and take supportive steps toward emotional wellbeing.",
  },
  {
    question: "How do I know if my teenager is depressed?",
    answer: "Parents may notice prolonged sadness, loss of interest in hobbies, social withdrawal, low energy, reduced motivation and changes in sleep or eating habits. Depression often affects more than mood alone and may influence relationships, confidence and academic performance. If these changes continue for an extended period and begin affecting daily life, it may be helpful to seek structured guidance and a deeper understanding of the teenager's emotional wellbeing.",
  },
  {
    question: "What causes depression in teenagers?",
    answer: "There is rarely a single cause of depression in teenagers. Emotional wellbeing may be influenced by academic pressure, social experiences, confidence challenges, family relationships, lifestyle habits, excessive screen use and personal experiences. Every teenager responds differently to stress and life events. Understanding the broader factors contributing to emotional difficulties often helps families provide more meaningful support and create a healthier environment for growth and resilience.",
  },
  {
    question: "Is depression in teens serious?",
    answer: "Depression in teenagers should be taken seriously because it can affect emotional wellbeing, relationships, confidence, motivation and academic performance. While occasional sadness is normal, persistent emotional struggles may interfere with daily functioning and quality of life. Early understanding, emotional support and appropriate guidance can help families address concerns more effectively and support long-term wellbeing.",
  },
  {
    question: "How long does teen depression last?",
    answer: "The duration of depression varies from one teenager to another. Some emotional difficulties may improve over time with support, while others may persist if underlying factors remain unaddressed. Emotional wellbeing is influenced by many different aspects of a teenager's life, including relationships, lifestyle habits, confidence and stress levels. Early understanding and structured support often help families better navigate emotional challenges and promote long-term resilience.",
  },
  {
    question: "What are the therapies for teens with depression?",
    answer: "Support for teenagers experiencing depression may include counselling, psychotherapy, family guidance, behavioural support, emotional wellbeing strategies and lifestyle-based interventions. The most appropriate approach depends on the teenager's individual needs and circumstances. Effective support often focuses not only on emotional symptoms but also on understanding the broader factors that may influence confidence, behaviour, motivation and overall wellbeing.",
  },
  {
    question: "Why has my teenager lost interest in everything?",
    answer: "A loss of interest in activities that were once enjoyable may sometimes be linked to emotional stress, low mood, confidence challenges, burnout or reduced motivation. Teenagers experiencing emotional difficulties may withdraw from hobbies, social activities or daily responsibilities. Understanding the reasons behind these changes is often more helpful than focusing only on the behaviour itself. Supportive communication and emotional understanding can make a meaningful difference.",
  },
  {
    question: "Can depression affect school performance?",
    answer: "Yes. Emotional wellbeing and academic performance are closely connected. Teenagers experiencing depression may struggle with concentration, motivation, memory, participation and completing academic tasks. Emotional difficulties can affect learning even when a teenager has strong abilities. Supporting emotional wellbeing often helps create a stronger foundation for academic growth, confidence and long-term success.",
  },
  {
    question: "How can parents help a teenager with depression?",
    answer: "Parents can help by maintaining open communication, listening without judgement, offering emotional support and creating a safe environment where teenagers feel understood. Encouraging healthy routines, balanced lifestyle habits and positive social connections may also support emotional wellbeing. Teenagers often respond better when they feel supported rather than criticized or pressured. Small, consistent efforts can contribute significantly to emotional resilience and recovery.",
  },
  {
    question: "What are the first signs of depression?",
    answer: "Early signs of depression may include persistent sadness, irritability, emotional withdrawal, low confidence, reduced motivation, fatigue, sleep changes and loss of interest in activities. Some teenagers may become more sensitive or struggle with concentration and daily responsibilities. Recognizing these early signs can help families better understand emotional wellbeing concerns and seek appropriate support when needed.",
  },
  {
    question: "Can teenagers recover from depression?",
    answer: "Many teenagers experience meaningful improvement in emotional wellbeing when they receive understanding, support, guidance and healthy coping strategies. Every teenager's journey is different, and progress often depends on individual circumstances and the factors contributing to emotional difficulties. A supportive family environment, healthy habits and structured guidance can play an important role in helping teenagers build resilience and confidence over time.",
  },
  {
    question: "How does Manovaidya support teenagers and families?",
    answer: "At Manovaidya, support begins with understanding the teenager as a whole rather than focusing on a single symptom. Through structured assessment, personalized guidance, family support and the Neuro-Ayurveda Development System, families gain a deeper understanding of emotional wellbeing, behaviour, confidence and lifestyle-related influences. The goal is to help teenagers and families move toward greater clarity, resilience and long-term wellbeing.",
  },
  {
    question: "Can depression be treated without medication?",
    answer: "The most appropriate approach depends on the teenager's individual situation and the severity of concerns. Many families explore non-medication strategies such as counselling, emotional wellbeing support, healthy routines, physical activity, family guidance and lifestyle improvements. Understanding the factors contributing to emotional difficulties often helps identify supportive approaches that strengthen confidence, resilience and overall wellbeing.",
  },
  {
    question: "When should parents seek professional guidance?",
    answer: "Parents may consider seeking guidance when emotional difficulties persist over time and begin affecting daily functioning, relationships, motivation, confidence, sleep or academic performance. Signs such as prolonged sadness, emotional withdrawal, reduced interest in activities, behavioural changes or declining wellbeing may indicate the need for additional support. A structured assessment can help families gain clarity regarding the factors influencing their teenager's emotional health and overall development.",
  }
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function TeenDepressionLowMoodIndiaPage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

  React.useEffect(() => {
    document.title = "Teen Depression & Low Mood Support in India | Teen Mental Health Support | Manovaidya";

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
      "Looking for Teen Depression Support in India? Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}/teen-depression-support`;

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          name: "Teen Depression & Low Mood Support in India",
          description:
            "Looking for Teen Depression Support in India? Learn about signs, causes, emotional wellbeing, parent guidance and the Neuro-Ayurveda approach at Manovaidya.",
          url: `${window.location.origin}/teen-depression-support`,
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
            { "@type": "ListItem", position: 3, name: "Teen Depression & Low Mood Support", item: `${window.location.origin}/teen-depression-support` },
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

    const scriptId = "teen-depression-schema";
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
          <span className="text-[#21142d]">Teen Depression & Low Mood Support</span>
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
            Teen Depression & Low Mood Support in India
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] font-bold leading-7 text-[#5a5063]">
            Helping Teenagers Build Emotional Strength, Confidence & Better Emotional Wellbeing
          </p>
          
          <ul className="mt-4 space-y-2 text-[14px] font-bold text-[#51465a]">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Emotional Wellbeing & Resilience</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Confidence & Self-Esteem Building</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Understanding Low Mood & Emotional Withdrawal</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Healthy Lifestyle & Daily Habits</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Parent-Teen Communication & Support</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-[#7835A4]"/> Long-Term Mental Wellness</li>
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
            <img src={childHeroImage} alt="Teen Depression Support in India at Manovaidya" className="w-full h-auto object-contain" />
          </figure>

          <section id="understanding-teen-depression" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding Teen Depression & Low Mood</h2>
            <div className="mt-3 space-y-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              <p>
                Feeling sad from time to time is a natural part of life. Teenagers may feel disappointed after a poor exam result, friendship conflict or personal setback. In most situations, these emotions gradually improve with time and support.
              </p>
              <p>
                However, when sadness becomes persistent, affects daily life and begins influencing behaviour, motivation, confidence and relationships, families often start looking for answers.
              </p>
              <p>
                Many parents searching for Teen Depression Support in India, Teen Mental Health Support in India or guidance for Teen Emotional Wellbeing are often looking for a structured approach that helps them better understand what their teenager may be experiencing.
              </p>
              <p>
                Teen depression and low mood can affect teenagers differently.
                Some teenagers become quiet and withdrawn. Others may appear angry, frustrated or emotionally sensitive. Some may lose interest in hobbies and activities they once enjoyed. Others may struggle with confidence, motivation and relationships.
              </p>
              <p>
                Every teenager's experience is unique, which is why understanding emotional wellbeing requires looking beyond visible behaviours and exploring the broader factors that may be influencing their daily life.
              </p>
            </div>
          </section>

          <section id="common-signs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs of Teen Depression & Low Mood</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Teen depression does not always look the way many parents expect. A teenager does not have to cry constantly to be struggling emotionally. Many teenagers hide their emotions and continue functioning while experiencing significant emotional challenges internally.
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
              The presence of a few signs does not automatically mean a teenager is experiencing depression. However, when emotional and behavioural changes continue for an extended period and begin affecting daily functioning, they deserve understanding and attention.
            </p>
          </section>

          <section id="why-teenagers-experience-depression" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Teenagers Experience Depression & Low Mood</h2>
            <p className="mt-3 text-[14px] font-bold leading-6 text-[#3b2e45]">
              Many parents assume there is always one clear reason behind emotional struggles. In reality, emotional wellbeing is usually influenced by multiple interconnected factors.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {depressionFactors.map((group) => (
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
              Many parents worry that ongoing low mood, emotional withdrawal, declining confidence or reduced motivation may affect their teenager's future growth, relationships and overall wellbeing. Understanding these concerns early often helps families take positive and informed steps toward better emotional health and resilience.
            </p>
          </section>

          <section id="how-depression-affects" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Depression & Low Mood Can Affect Teenagers</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Depression and low mood can influence much more than emotions alone. When emotional struggles continue for an extended period, they may affect confidence, relationships, motivation, learning and overall wellbeing. Many teenagers struggle silently because they find it difficult to explain what they are feeling or fear being misunderstood. Understanding how emotional wellbeing influences different areas of life can help families provide more meaningful support.
            </p>
            
            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Emotional Wellbeing</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  One of the most significant effects of depression and low mood is emotional overwhelm. Teenagers may experience persistent sadness, emotional numbness, hopelessness, irritability, frustration, increased sensitivity, or feelings of loneliness. Over time, these emotional challenges may affect how teenagers view themselves, their future and their relationships.
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Confidence & Self-Esteem</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Many teenagers experiencing low mood begin doubting themselves. Common thoughts may include: I am not good enough. Nobody understands me. I always fail. Things will never improve. These thoughts can gradually affect confidence and self-esteem. A teenager who once enjoyed participating in activities may begin avoiding challenges because they no longer believe in their abilities.
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Academic Performance</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Emotional wellbeing and academic performance are closely connected. Teenagers experiencing depression or low mood may struggle with concentration, motivation, memory, participation in class, completing assignments, and exam preparation. Many parents initially focus on falling grades without realizing that emotional wellbeing may be influencing academic performance.
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Relationships & Social Life</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Depression can also affect friendships and family relationships. Some teenagers may spend more time alone, avoid social interaction, withdraw from friends, communicate less, or become more sensitive to criticism. These changes may create misunderstandings between teenagers, parents and peers.
                </p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5">
                <h3 className="text-[16px] font-black text-[#21142d]">Daily Functioning</h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#51465a]">
                  Low mood may influence everyday routines. Teenagers may experience reduced energy, sleep difficulties, changes in appetite, difficulty maintaining schedules, loss of interest in hobbies, and reduced participation in family activities. Understanding these changes as potential signs of emotional struggles often helps families respond with greater empathy and support.
                </p>
              </div>
            </div>
          </section>

          <section id="neuro-ayurveda-approach" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Approach to Teen Depression & Low Mood</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, emotional wellbeing is understood through a broader and more comprehensive perspective. Rather than focusing only on sadness, motivation or behaviour alone, Manovaidya focuses on understanding the broader factors that may influence emotional wellbeing, confidence, behaviour, motivation, attention and overall development.
            </p>
            <img src={neuroDiagramImage} alt="Neuro Ayurveda approach for teen depression support" className="mt-5 max-h-[320px] w-full rounded-lg border border-[#eadff1] bg-white object-contain p-4" />
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
              Parents play a critical role in supporting emotional wellbeing during adolescence. Even small changes in communication, understanding and daily routines can make a meaningful difference.
            </p>
            <img src={supportFamilyImage} alt="Parent guidance for teen depression support" className="my-5 w-full h-auto rounded-lg object-contain shadow-[0_12px_30px_rgba(58,31,90,0.08)]" />
            
            <div className="grid gap-4 sm:grid-cols-2">
              {parentSupportPoints.map((point) => (
                <div key={point.title} className="rounded-md bg-white p-4 shadow-sm border border-[#eadff1]">
                  <h3 className="text-[14px] font-black text-[#21142d]">{point.title}</h3>
                  <p className="mt-2 text-[12px] font-bold leading-5 text-[#5f5367]">{point.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-manovaidya-supports" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How Manovaidya Supports Teenagers & Families</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, support begins with understanding the teenager as a whole rather than focusing on a single symptom or concern. Our goal is to help teenagers and families move from confusion and emotional distress toward greater clarity, confidence and wellbeing.
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
            
            <h3 className="mt-8 text-[18px] font-black text-[#17111f]">Why Families Across India Connect With Manovaidya</h3>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Gurgaon, Faridabad and different parts of India connect with Manovaidya for Teen Depression Support, Teen Mental Health Support and Teen Emotional Wellbeing guidance through online and in-clinic consultations.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-white p-5">
            <div className="flex gap-4">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-20 w-20 rounded-lg object-cover" />
              <div>
                <p className="text-[12px] font-bold text-[#75677d]">About the Author</p>
                <h2 className="text-[15px] font-black text-[#21142d]">Dr. Ankush Garg</h2>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#51465a]">
                  Autism, ADHD, Child Development & Mental Health Specialist in India. Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System. His work focuses on Child Development, Teen Mental Wellness, Adult Mental Health, Women's Emotional Wellbeing and Senior Mental Health Support through a structured and personalized approach.
                </p>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#51465a]">
                  Based in Delhi NCR, Dr. Ankush Garg supports teenagers, adults and families from across India through structured assessment, personalized guidance and the Neuro-Ayurveda Development System.
                </p>
                <a href="/dr-ankush-garg/" className="mt-3 inline-flex text-[12px] font-black text-[#7835A4] hover:underline">Know more about Dr. Ankush Garg.</a>
              </div>
            </div>
          </section>
          
          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions (FAQs)</h2>
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
                  Book a structured assessment and personalized guidance session with the Manovaidya team. If your teenager is experiencing persistent sadness, emotional withdrawal, low motivation, confidence challenges or behavioural changes, seeking clarity is often the first step.
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
              <img src={ctaImage} alt="Teen emotional wellbeing support in India" className="w-full h-auto min-h-[240px] object-contain" />
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
              <a href="/teen-mental-wellness-india/" className="text-[13px] font-bold text-[#51465a] transition hover:text-[#7835A4]">
                Learn more about Teen Mental Wellness Support.
              </a>
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

export default TeenDepressionLowMoodIndiaPage;

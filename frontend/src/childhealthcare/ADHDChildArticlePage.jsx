import React from "react";
import {
  Activity,
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
} from "lucide-react";
import childHeroImage from "../images/adhd-medical-illustration.png";
import supportFamilyImage from "../images/child-support-family.png";
import signsImage from "../images/child-signs-reflection.png";
import doctorImage from "../images/doctor-ankush-portrait.png";
import neuroDiagramImage from "../images/neuro-ayurveda-system-diagram-transparent.png";
import RelatedPagesCard from "./RelatedPagesCard";

const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is ADHD?", id: "what-is-adhd" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Beyond Behaviour", id: "beyond-behaviour" },
  { label: "ADHD Assessment", id: "adhd-assessment" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Work", id: "how-we-work" },
  { label: "Parent Guidance", id: "parent-guidance" },
  { label: "FAQs", id: "faqs" },
];

const categories = [
  { label: "Autism", count: 12, Icon: Puzzle },
  { label: "ADHD", count: 10, Icon: Brain },
  { label: "Speech Delay", count: 8, Icon: MessageCircle },
  { label: "Child Development", count: 11, Icon: Baby },
  { label: "Parenting", count: 9, Icon: Users },
  { label: "Mental Health", count: 13, Icon: HeartHandshake },
];

const faqs = [
  {
    question: "1. What is ADHD?",
    answer: "Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that may affect attention, focus, behaviour, emotional regulation and daily functioning. Children with ADHD may find it difficult to stay focused on tasks, follow instructions, manage impulses or remain organized during daily activities. Every child with ADHD is unique, and symptoms can vary significantly from one child to another. Some children primarily experience attention difficulties, while others may show hyperactivity, impulsivity or a combination of both. At Manovaidya, ADHD is understood through a broader developmental perspective that considers attention, learning, behaviour, emotional wellbeing and overall child development rather than focusing on isolated symptoms alone."
  },
  {
    question: "2. What are the first signs of ADHD?",
    answer: "Early signs of ADHD may include difficulty maintaining attention, frequent distractions, forgetfulness, excessive activity, impulsive behaviour and challenges following instructions. Parents may notice that their child struggles to complete tasks, frequently loses belongings, interrupts conversations or has difficulty waiting for their turn. These signs often become more noticeable when children begin school and are expected to sit, focus and follow structured routines. While occasional inattentiveness or high energy can be normal in childhood, persistent patterns that affect learning, behaviour or daily functioning may benefit from a structured developmental assessment."
  },
  {
    question: "3. What are the six symptoms of ADHD?",
    answer: "Although ADHD can present differently in every child, six commonly observed symptoms include difficulty maintaining attention, frequent distractions, forgetfulness, impulsive behaviour, excessive activity and difficulty following instructions. Some children may struggle to complete tasks, stay organized or manage their emotions effectively. Others may appear restless, interrupt conversations or act before thinking through consequences. The severity and combination of symptoms can vary depending on the child's age, developmental profile and individual needs. Understanding these symptoms within the context of overall development helps families gain a clearer picture of their child's strengths and challenges."
  },
  {
    question: "4. At what age can ADHD symptoms become noticeable?",
    answer: "ADHD symptoms can become noticeable during the preschool years, although they often become more apparent when children enter structured learning environments such as school. At this stage, children are expected to sit for longer periods, follow instructions, complete tasks and manage routines more independently. Parents and teachers may begin noticing difficulties related to attention, impulsivity, hyperactivity or emotional regulation. Every child develops differently, and occasional challenges do not automatically indicate ADHD. A structured assessment can help families better understand whether observed behaviours are part of normal development or require additional support."
  },
  {
    question: "5. What causes someone to develop ADHD?",
    answer: "ADHD is considered a neurodevelopmental condition, and current research suggests that multiple factors may contribute to its development. These may include genetic influences, brain development differences and environmental factors that affect early development. ADHD is not caused by poor parenting, lack of discipline or low intelligence. The condition affects how the brain regulates attention, behaviour and executive functioning skills. Because every child is unique, developmental influences can vary from one individual to another. Understanding these factors can help families move away from blame and focus on providing meaningful support and guidance for their child's development."
  },
  {
    question: "6. Can ADHD improve with age?",
    answer: "Many children with ADHD continue developing attention, emotional regulation, organizational skills and self-management abilities as they grow older. While ADHD is considered a lifelong neurodevelopmental condition, developmental progress often continues throughout childhood, adolescence and adulthood. Individual outcomes vary depending on factors such as family support, learning opportunities, routines and personalized guidance. Rather than focusing only on the diagnosis, it is often more helpful to focus on helping children build strengths, confidence, independence and life skills. Consistent support and developmental understanding can help children navigate challenges more effectively over time."
  },
  {
    question: "7. Is ADHD linked to high IQ?",
    answer: "ADHD and intelligence are two different things. A child with ADHD can have average, above-average or below-average intellectual abilities, just like any other child. Many children with ADHD are highly creative, curious, energetic and capable of thinking in unique ways. However, attention difficulties, impulsivity or organizational challenges may sometimes affect academic performance, making it difficult for others to recognize their strengths. ADHD does not determine intelligence. Understanding a child's learning profile, strengths and developmental needs helps families create a more supportive environment for growth and learning."
  },
  {
    question: "8. Does screen time cause ADHD?",
    answer: "Current research does not show that screen time directly causes ADHD. However, excessive screen exposure may influence attention span, sleep quality, emotional regulation and daily routines, which can sometimes make existing attention-related challenges more noticeable. Children who already struggle with focus, self-regulation or impulsivity may experience greater difficulties when screen use becomes excessive or unstructured. Maintaining healthy screen habits, balanced routines, outdoor play, social interaction and adequate sleep can help support overall development and wellbeing. Parents should view screen time as one factor among many rather than the sole cause of attention concerns."
  },
  {
    question: "9. How can I help my ADHD naturally?",
    answer: "Parents can support children with ADHD by creating structured routines, encouraging regular physical activity, maintaining healthy sleep habits and providing a calm and supportive environment. Breaking tasks into smaller steps, using visual schedules and offering positive reinforcement may also help improve daily functioning. Consistency is often more effective than strict discipline alone. Every child is unique, so support strategies should be adapted according to individual strengths and challenges. At Manovaidya, parent guidance focuses on helping families better understand attention, behaviour, learning and developmental needs through a structured and personalized approach."
  },
  {
    question: "10. How can I treat ADHD at home?",
    answer: "Home support plays an important role in helping children with ADHD manage daily challenges more effectively. Parents can focus on creating predictable routines, setting clear expectations, reducing unnecessary distractions and encouraging healthy lifestyle habits. Positive communication, patience and structured guidance often help children feel more confident and supported. Activities that encourage movement, organization, attention and emotional regulation may also be beneficial. While home-based strategies can be valuable, every child has unique developmental needs. A structured assessment can help families better understand which approaches may be most appropriate for their child."
  },
  {
    question: "11. What habits help ADHD?",
    answer: "Healthy daily habits can play an important role in supporting children with ADHD. Consistent sleep schedules, regular physical activity, structured routines and organized learning environments may help improve attention and daily functioning. Breaking tasks into smaller steps, using visual reminders and encouraging positive communication can also be beneficial. Many children respond well to predictable routines because they reduce confusion and improve task completion. It is important to focus on progress rather than perfection. Every child has unique strengths and challenges, so habits should be adjusted according to individual developmental needs and family circumstances."
  },
  {
    question: "12. What are the 7 triggers that make ADHD worse?",
    answer: "Several factors may increase attention, behaviour or emotional regulation difficulties in children with ADHD. Common triggers may include inadequate sleep, excessive screen time, highly distracting environments, inconsistent routines, emotional stress, lack of physical activity and overwhelming academic demands. These factors do not cause ADHD, but they may make existing symptoms more noticeable. Understanding individual triggers can help parents create a more supportive environment for their child. Since every child is different, identifying personal patterns and challenges is often an important part of long-term developmental support and planning."
  },
  {
    question: "13. How to focus with ADHD without medication?",
    answer: "Improving focus often involves creating strategies that support attention rather than relying on willpower alone. Children and adults with ADHD may benefit from structured routines, breaking tasks into smaller steps, reducing distractions and using visual reminders or schedules. Regular physical activity, healthy sleep habits and organized environments may also support attention and productivity. It is important to recognize that attention difficulties are not a sign of laziness or lack of intelligence. A structured developmental approach can help identify practical strategies that match the individual's learning style and attention needs."
  },
  {
    question: "14. Can children with ADHD attend regular schools?",
    answer: "Yes. Many children with ADHD attend regular schools successfully and continue progressing academically and socially. The most appropriate educational environment depends on the child's attention profile, learning needs, emotional regulation abilities and level of support required. Some children may benefit from classroom accommodations, additional academic support or structured learning strategies. Others may perform well within standard educational settings. Every child is unique, and school decisions should be based on individual strengths and developmental needs rather than the diagnosis alone. A developmental assessment can help parents make more informed educational decisions."
  },
  {
    question: "15. How does Manovaidya assess and support children with ADHD?",
    answer: "At Manovaidya, ADHD assessment focuses on understanding the child as a whole rather than evaluating a single symptom in isolation. The assessment process may include developmental history, attention abilities, learning patterns, behaviour observations, emotional regulation, school-related concerns and parent inputs. Based on this understanding, families receive personalized guidance and a structured developmental roadmap. Support focuses on attention development, learning readiness, behaviour guidance, emotional wellbeing and parent support through the Neuro-Ayurveda Development System. The goal is to provide greater clarity, meaningful direction and long-term developmental support tailored to the child's individual needs."
  }
];

function SidebarCard({ children, className = "" }) {
  return (
    <aside className={`rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)] ${className}`}>
      {children}
    </aside>
  );
}

function ADHDChildArticlePage() {
  const [activeSection, setActiveSection] = React.useState(pageLinks[0].id);
  const [openFaq, setOpenFaq] = React.useState(0);

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
          <a href="/blog" className="transition hover:text-[#7835A4]">Blogs</a>
          <span>/</span>
          <span className="text-[#21142d]">Child Health Care</span>
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
                        activeSection === id ? "bg-[#7835A4]" : "bg-[#c5adcF]"
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
          <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">ADHD Treatment</p>
          <h1 className="mt-3 max-w-[800px] text-[32px] font-black leading-[1.12] text-[#17111f] sm:text-[42px]">
            ADHD Treatment in India: ADHD Assessment, Attention & Child Development Support
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] font-bold leading-7 text-[#5a5063]">
            Take the first step toward understanding your child's attention, learning and behavioural needs through a structured ADHD Assessment and personalized guidance process.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                <p className="text-[12px] font-bold text-[#75677d]">May 20, 2025 · 10 min read</p>
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
              alt="Child development consultation support"
              className="w-full h-auto object-contain max-h-[500px] sm:max-h-[600px]"
            />
          </figure>

          <section id="introduction" className="mt-8">
            <h2 className="text-[20px] font-black text-[#17111f]">Introduction</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child learns, thinks and grows differently. Some children are naturally active, curious and energetic. However, when attention difficulties, hyperactivity or impulsive behaviour begin affecting learning, daily routines, school performance and social interactions, parents often start looking for answers.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Attention Deficit Hyperactivity Disorder (ADHD) is one of the most commonly observed neurodevelopmental conditions in children. It can influence attention, focus, behaviour, emotional regulation, learning and daily functioning.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that ADHD is not simply about a child being "too active" or "not listening." Attention, behaviour, learning readiness, emotional wellbeing and overall development are interconnected. This is why our approach focuses on understanding the child as a whole rather than looking at isolated symptoms alone.
            </p>
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, ADHD Support Focuses On:</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Attention & Focus Development", "Learning Readiness & Academic Support", "Behaviour Guidance & Emotional Regulation", "Parent Training & Family Support", "Brain Development & Cognitive Wellness", "Personalized Development Planning"].map(item => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="what-is-adhd" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is ADHD?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that can influence a child's ability to maintain attention, regulate behaviour, manage impulses and stay organized during daily activities.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              ADHD is not a result of poor parenting, lack of intelligence or a child's unwillingness to listen. It is a developmental condition that affects how children process information, maintain focus, regulate behaviour and respond to their environment.
            </p>
            <h3 className="mt-4 font-black text-[16px] text-[#21142d]">Every child with ADHD is unique.</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some children may primarily experience difficulties with attention and concentration, while others may display hyperactivity, impulsive behaviour or a combination of both.
            </p>
          </section>

          <section id="signs-and-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of ADHD</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              The signs and symptoms of ADHD can vary depending on the child's developmental profile, age and individual needs.
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Search className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Inattention Symptoms</h3>
                </div>
                <ul className="space-y-2">
                  {["Have difficulty concentrating on tasks", "Become distracted easily", "Frequently forget instructions", "Lose personal belongings", "Make careless mistakes in schoolwork", "Struggle to complete tasks independently", "Have difficulty organizing activities", "Avoid tasks requiring sustained attention"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Hyperactivity & Impulsivity</h3>
                </div>
                <ul className="space-y-2">
                  {["Constant movement or restlessness", "Difficulty sitting for extended periods", "Excessive talking & fidgeting frequently", "Running or climbing in inappropriate situations", "Interrupting conversations & answering early", "Difficulty waiting for turns", "Acting without thinking & emotional outbursts", "Risk-taking behaviour"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="beyond-behaviour" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding ADHD Beyond Behaviour</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              One of the most common misconceptions about ADHD is that it is simply a behaviour problem. While behaviour may be one visible aspect of ADHD, the condition often involves much more than what appears on the surface. Attention, emotional regulation, executive functioning, learning readiness, behaviour, motivation and organization are interconnected aspects of development.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <ul className="space-y-2.5">
                {[
                  "Difficulty maintaining attention may affect learning.",
                  "Emotional regulation challenges may influence behaviour.",
                  "Executive functioning difficulties may affect planning and organization.",
                  "Impulsivity may impact social relationships.",
                  "Attention difficulties may influence academic performance.",
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="adhd-assessment" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">ADHD Assessment at Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, ADHD Assessment focuses on understanding the complete developmental picture rather than evaluating a single symptom in isolation. The assessment process is designed to help families gain clarity about attention, learning readiness, behavioural patterns, emotional regulation, and social interaction.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Detailed Parent Discussion", desc: "Understanding developmental history, school concerns, and family observations.", icon: Users },
                { title: "Attention & Learning", desc: "Identifying attention strengths, learning readiness, and emotional regulation.", icon: Brain },
                { title: "Individualized Guidance", desc: "Providing structured guidance, behaviour support, and routine development strategies.", icon: Sparkles },
              ].map(({ title, desc, icon: Icon }) => (
                <div key={title} className="text-center rounded-lg border border-[#eadff1] p-4 bg-white">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-[14px] font-black leading-5 text-[#21142d]">{title}</h3>
                  <p className="mt-2 text-[12px] font-semibold text-[#5a5063] leading-5">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[18px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
                <p className="mt-1 text-[13px] font-bold leading-6 text-[#3b2e45]">
                  A structured framework developed by Dr. Ankush Garg to understand the child's broader developmental needs through five interconnected pillars.
                </p>
              </div>
            </div>
            <img
              src={neuroDiagramImage}
              alt="The Neuro-Ayurveda Development System"
              className="w-full h-auto object-contain max-h-[400px] mb-5 rounded-lg border border-[#eadff1] bg-white shadow-sm p-4"
            />
            <div className="space-y-3 mt-4">
              {[
                { title: "Pillar 1: Brain Nourishment System", text: "Focuses on attention, learning readiness, memory, and cognitive functioning." },
                { title: "Pillar 2: Gut Response System", text: "Understanding how digestive wellbeing influences overall development and comfort." },
                { title: "Pillar 3: Neural Network System", text: "Focuses on factors influencing learning readiness, communication, and response patterns." },
                { title: "Pillar 4: Sensory Integration System", text: "Understanding sensory sensitivities, seeking behaviours, and self-regulation abilities." },
                { title: "Pillar 5: Behaviour Guidance System", text: "Moving beyond simply reacting to behaviour and understanding the underlying factors." },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-lg p-4 shadow-sm border border-[#eadff1]">
                  <h4 className="text-[14px] font-black text-[#21142d]">{item.title}</h4>
                  <p className="text-[12px] font-semibold text-[#5a5063] mt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-we-work" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Work at Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child is unique, which is why support at Manovaidya begins with understanding the child as a whole rather than focusing on a diagnosis alone. Our process starts with a detailed assessment to understand developmental history, communication abilities, behaviour patterns, learning needs, and family concerns.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {[
                "Understanding the child as an individual",
                "Identifying developmental strengths",
                "Recognizing areas requiring support",
                "Providing structured parent guidance",
                "Supporting learning and attention development",
                "Monitoring progress over time",
              ].map((step) => (
                <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                  {step}
                </li>
              ))}
            </ul>
          </section>
          
          <section id="parent-guidance" className="mt-9 grid gap-6 lg:grid-cols-[1fr_270px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
              <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
                ADHD affects not only the child but also the entire family system. At Manovaidya, parent guidance is considered an important part of the developmental journey. Families receive support in understanding attention challenges, learning patterns, behavioural concerns, and long-term developmental planning.
              </p>
            </div>
            <img
              src={supportFamilyImage}
              alt="Parent helping child learn at home"
              className="h-[210px] w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
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

          <SidebarCard className="border-[#d8c6e5] bg-[#fcf9ff]" id="book-consultation">
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
            <p className="mt-4 text-[12px] font-bold text-[#51465a]">or Call: +91 7823894080</p>
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
                Subscribe to expert articles, child development tips and Manovaidya updates.
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

export default ADHDChildArticlePage;

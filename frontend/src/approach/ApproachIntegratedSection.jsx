import React from "react";
import {
  Brain,
  Check,
  HeartPulse,
  Home,
  Leaf,
  Sprout,
  UsersRound,
} from "lucide-react";

const integratedItems = [
  {
    title: "Ayurvedic\nWisdom",
    Icon: Sprout,
    bg: "bg-[#e8f8e8]",
    color: "text-[#5eaa4c]",
  },
  {
    title: "Neuroscience\n& Psychology",
    Icon: Brain,
    bg: "bg-[#efe8ff]",
    color: "text-[#6031b8]",
  },
  {
    title: "Behavioural\nScience",
    Icon: HeartPulse,
    bg: "bg-[#ffe8f2]",
    color: "text-[#e14285]",
  },
  {
    title: "Family\nInvolvement",
    Icon: UsersRound,
    bg: "bg-[#fff0e6]",
    color: "text-[#f27639]",
  },
  {
    title: "Lifestyle\n& Environment",
    Icon: Home,
    bg: "bg-[#e6fbfb]",
    color: "text-[#2a9b9b]",
  },
];

const matters = [
  "Addresses root causes, not just symptoms",
  "Holistic care for mind, body & emotions",
  "Personalised plans for lasting change",
  "Safe, natural and evidence-informed",
  "Empowers families at every step",
  "Supports better outcomes and quality of life",
];

function ApproachIntegratedSection() {
  return (
    <section className="bg-white px-4 pb-9 pt-1 sm:px-6 lg:px-10 lg:pb-12">
      <div className="mx-auto grid  gap-7 lg:grid-cols-2">
        <article className="rounded-[18px] bg-[#fdfbff] px-7 py-7 shadow-[0_10px_36px_rgba(55,36,105,0.07)] ring-1 ring-[#f0ebfa] sm:px-10">
          <h2 className="text-center text-[22px] font-extrabold leading-tight text-[#4a2aa0] sm:text-[27px]">
            Our Integrated Approach
          </h2>

          <div className="relative mt-7 grid grid-cols-5 items-start gap-3">
            <span className="absolute left-[9%] right-[9%] top-[32px] border-t border-dashed border-[#d9d2e9]" />
            {integratedItems.map(({ title, Icon, bg, color }) => (
              <div key={title} className="relative z-10 flex flex-col items-center text-center">
                <span className={`flex h-[76px] w-[76px] items-center justify-center rounded-full ${bg} ${color}`}>
                  <Icon className="h-10 w-10" strokeWidth={2.1} />
                </span>
                <p className="mt-4 whitespace-pre-line text-[13px] font-extrabold leading-[1.35] text-[#281d66] sm:text-[14px]">
                  {title}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-[560px] text-center text-[16px] font-bold leading-[1.55] text-[#2e2860]">
            Blending the best of Ayurveda and modern science with
            <br className="hidden sm:block" />
            family involvement to support lasting transformation.
          </p>
        </article>

        <article className="relative overflow-hidden rounded-[18px] bg-[#fdfbff] px-7 py-7 shadow-[0_10px_36px_rgba(55,36,105,0.07)] ring-1 ring-[#f0ebfa] sm:px-10">
          <Leaf className="absolute -bottom-10 right-8 h-56 w-56 text-[#eee9fb]" strokeWidth={1.45} />
          <div className="absolute right-20 top-7 h-16 w-16 rounded-full bg-[#f0ebfb]" />

          <div className="relative z-10">
            <h2 className="text-[22px] font-extrabold leading-tight text-[#4a2aa0] sm:text-[27px]">
              Why This Matters
            </h2>

            <ul className="mt-6 space-y-4">
              {matters.map((item) => (
                <li key={item} className="flex items-center gap-4 text-[15px] font-extrabold leading-tight text-[#2b225f]">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#b99cff] text-[#4e2ab0] shadow-[0_5px_12px_rgba(94,49,184,0.14)]">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

export default ApproachIntegratedSection;

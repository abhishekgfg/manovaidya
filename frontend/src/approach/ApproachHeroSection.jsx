import React from "react";
import { Brain, ShieldCheck } from "lucide-react";
import approachBanner from "../images/approach-life-stage-banner.png";

const labels = [
  { text: "Child", className: "left-[42.8%] top-[30%]" },
  { text: "Teen", className: "left-[52.8%] top-[22%]" },
  { text: "Adult", className: "left-[64%] top-[13%]" },
  { text: "Women", className: "left-[74.3%] top-[19%]" },
  { text: "Senior", className: "left-[84.8%] top-[25%]" },
  { text: "Old Age", className: "left-[92.2%] top-[25%]" },
];

function ApproachHeroSection() {
  return (
    <section id="approach" className="bg-[#f8f4ff] px-3 py-5 sm:px-5 lg:px-0 lg:py-0">
      <div className="relative mx-auto aspect-[1137/407] min-h-[620px] w-full overflow-hidden bg-[#eee7ff] shadow-[0_20px_70px_rgba(52,31,115,0.16)] sm:min-h-[540px] lg:min-h-0">
        <img
          src={approachBanner}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0.42)_31%,rgba(255,255,255,0)_58%)]" />

        <div className="relative z-10 h-full px-[3%] py-[2.2%]">
          <div className="max-w-[39.5%] min-w-[310px]">
            <span className="inline-flex rounded-full bg-white/82 px-5 py-1.5 text-[13px] font-extrabold text-[#6650b6] shadow-[0_6px_18px_rgba(77,46,151,0.12)] ring-1 ring-white/80">
              Our Approach
            </span>
            <h1 className="mt-[4%] text-[32px] font-bold leading-[1.22] text-[#15115b] sm:text-[42px] lg:text-[clamp(34px,3.4vw,39px)]">
              A Holistic, Structured &amp; Personalised Path to Better Development &amp; Wellbeing
            </h1>
            <p className="mt-[4.2%] max-w-[95%] text-[14px] font-extrabold leading-[1.68] text-[#282064] sm:text-[15px] lg:text-[clamp(12px,1vw,16px)]">
              At Manovaidya, we go beyond symptoms to understand the root causes.
              Our holistic and evidence-informed approach combines Ayurveda with
              modern science to support lasting change in development, behaviour,
              emotions and overall wellbeing.
            </p>
          </div>

          {labels.map((label) => (
            <span
              key={label.text}
              className={`absolute z-20 -translate-x-1/2 text-[12px] font-extrabold text-[#29205f] sm:text-[14px] lg:text-[clamp(12px,1vw,16px)] ${label.className}`}
            >
              {label.text}
            </span>
          ))}

          <div className="absolute bottom-[4.2%] left-[3%] right-[3%] z-20 grid gap-4 lg:grid-cols-[34%_36%_24%] lg:gap-[1.5%]">
            <article className="flex items-center gap-5 rounded-[12px] bg-[#5630b8] px-5 py-4 text-white shadow-[0_18px_40px_rgba(67,39,153,0.28)]">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#5630b8]">
                <Brain className="h-9 w-9" strokeWidth={2.2} />
              </span>
              <p className="text-[12px] font-bold leading-[1.6] sm:text-[13px] lg:text-[clamp(10px,0.84vw,14px)]">
                We help individuals and families move from confusion to clarity,
                and from challenges to confidence through personalised care and guidance.
              </p>
            </article>

            <article className="flex items-center gap-5 rounded-[12px] bg-[#5630b8] px-5 py-4 text-white shadow-[0_18px_40px_rgba(67,39,153,0.28)]">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#5630b8]">
                <Brain className="h-9 w-9" strokeWidth={2.2} />
              </span>
              <p className="text-[12px] font-bold leading-[1.6] sm:text-[13px] lg:text-[clamp(10px,0.84vw,14px)]">
                Families across India trust Manovaidya for thoughtful assessment,
                personalised roadmap and long-term support for better outcomes.
              </p>
            </article>

            <article className="flex items-center gap-5 rounded-[12px] bg-[#5630b8] px-5 py-4 text-white shadow-[0_18px_40px_rgba(67,39,153,0.28)]">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#1cb85f]">
                <ShieldCheck className="h-9 w-9" strokeWidth={2.4} />
              </span>
              <p className="text-[12px] font-bold leading-[1.42] sm:text-[13px] lg:text-[clamp(10px,0.84vw,14px)]">
                Trusted by <br />
                <strong className="text-[17px] leading-tight">Thousands of</strong>
                <br />
                Families Across India
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApproachHeroSection;

import React from "react";
import {
  ArrowRight,
  BatteryMedium,
  Brain,
  Flower2,
  HeartPulse,
  MoonStar,
  Scale,
  Salad,
  UserRound,
} from "lucide-react";

const concerns = [
  {
    title: "Stress &\nTension",
    description: "Chronic stress, burnout, mental fatigue and irritability.",
    href: "/mind-body-health-care-india/",
    Icon: Brain,
    iconClass: "bg-[#eee5ff] text-[#5d40b6]",
  },
  {
    title: "Sleep\nDisturbances",
    description: "Insomnia, poor sleep quality, restless or non-restorative sleep.",
    Icon: MoonStar,
    iconClass: "bg-[#e3efff] text-[#3869ca]",
  },
  {
    title: "Fatigue &\nLow Energy",
    description: "Constant tiredness, low stamina and lack of motivation.",
    Icon: BatteryMedium,
    iconClass: "bg-[#e7f3df] text-[#5d9638]",
  },
  {
    title: "Headache &\nBody Pain",
    description: "Tension headaches, migraine, neck pain, back pain and more.",
    Icon: UserRound,
    iconClass: "bg-[#fff0d5] text-[#a77820]",
  },
  {
    title: "Digestive &\nGut Issues",
    description: "Acidity, bloating, IBS, constipation and other digestive concerns.",
    Icon: Salad,
    iconClass: "bg-[#ffe7ed] text-[#e14f79]",
  },
  {
    title: "Weight & Metabolism\nConcerns",
    description: "Weight gain, obesity, metabolic imbalance and PCOS support.",
    Icon: Scale,
    iconClass: "bg-[#dcf4f4] text-[#258f99]",
  },
  {
    title: "Lifestyle Disorders",
    description: "BP, thyroid, diabetes support through lifestyle & stress care.",
    Icon: HeartPulse,
    iconClass: "bg-[#eee4ff] text-[#6345b8]",
  },
  {
    title: "Mind-Body\nImbalance",
    description: "Anxiety, restlessness, emotional imbalance & overthinking.",
    Icon: Flower2,
    iconClass: "bg-[#ffe5e8] text-[#d65e86]",
  },
];

function MindBodyConcernsSection() {
  return (
    <section id="programs" className="bg-white px-4 py-7 sm:px-6 lg:px-10 lg:py-8">
      <div className="mx-auto w-full">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-[2px] w-16 bg-[#8B43BA]/45 sm:block" />
            <h2 className="text-[30px] font-black leading-none sm:text-[34px] lg:text-[38px]">
              <span className="text-[#18181b]">Concerns </span>
              <span className="text-[#8B43BA]">We Support</span>
            </h2>
            <span className="hidden h-[2px] w-16 bg-[#8B43BA]/45 sm:block" />
          </div>
          <p className="mt-2 text-[14px] font-bold text-[#4c4562] sm:text-[15px]">
            Comprehensive support for common mind-body and lifestyle challenges.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
          {concerns.map(({ title, description, href = "#assessment", Icon, iconClass }) => (
            <article
              key={title}
              className="flex min-h-[300px] min-w-0 flex-col items-center rounded-md border border-[#e5e1eb] bg-white px-3 py-5 text-center shadow-[0_8px_22px_rgba(44,30,85,0.06)]"
            >
              <span className={`flex h-[58px] w-[58px] items-center justify-center rounded-full ${iconClass}`}>
                <Icon className="h-8 w-8" strokeWidth={1.9} />
              </span>

              <h3 className="mt-5 min-h-[48px] whitespace-pre-line text-[16px] font-black leading-[1.3] text-[#342477]">
                {title}
              </h3>

              <p className="mt-3 text-[12.5px] font-semibold leading-[1.6] text-[#443d5e]">
                {description}
              </p>

              <a
                href={href}
                className="mt-auto inline-flex items-center gap-2 pt-4 text-[12.5px] font-black text-[#4e2b9c] transition hover:text-[#8B43BA]"
              >
                Explore Support
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MindBodyConcernsSection;

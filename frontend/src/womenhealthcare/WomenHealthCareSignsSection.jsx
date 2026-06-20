import React from "react";
import {
  Activity,
  Brain,
  CloudRain,
  Flame,
  HeartPulse,
  Moon,
  ShieldCheck,
  Smile,
  Sparkles,
  UserRound,
} from "lucide-react";
import signsImage from "../images/women-signs-reflection.png";

const signs = [
  {
    text: "Constant stress\nor overthinking",
    Icon: Brain,
  },
  {
    text: "Mood swings or\nirritability",
    Icon: Sparkles,
  },
  {
    text: "Feeling sad or\nhopeless often",
    Icon: ShieldCheck,
  },
  {
    text: "Low energy &\nmotivation",
    Icon: Flame,
  },
  {
    text: "Changes in sleep\nor appetite",
    Icon: Moon,
  },
  {
    text: "Difficulty\nconcentrating",
    Icon: UserRound,
  },
  {
    text: "Feeling overwhelmed\nor emotionally drained",
    Icon: CloudRain,
  },
  {
    text: "Loss of interest in\nthings you enjoy",
    Icon: Smile,
  },
  {
    text: "Withdrawal from\nor activities",
    Icon: HeartPulse,
  },
  {
    text: "Physical symptoms\nwith no clear cause",
    Icon: Activity,
  },
];

function WomenHealthCareSignsSection() {
  return (
    <section className="overflow-hidden bg-[#fbf9ff] lg:pr-10">
      <div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] lg:min-h-[260px] lg:grid-cols-[190px_minmax(0,1fr)_270px] xl:min-h-[240px] xl:grid-cols-[200px_minmax(0,1fr)_330px] 2xl:grid-cols-[220px_minmax(0,1fr)_380px]">
        <div className="flex items-center px-5 py-7 sm:px-7 md:px-6 md:py-8 lg:px-10 lg:py-0 xl:px-8">
          <div>
            <h2 className="text-[24px] font-black leading-[1.15] text-[#2d2379] sm:text-[26px] lg:text-[23px] xl:text-[24px] 2xl:text-[26px]">
              Common Signs
              <br />
              You Shouldn&apos;t
              <br />
              Ignore
            </h2>
            <span className="mt-5 block h-[2px] w-10 bg-[#4f36a0]" />
          </div>
        </div>

        <div className="flex min-w-0 items-center px-5 pb-7 sm:px-7 md:px-0 md:py-8 lg:px-3 lg:py-6 xl:px-3">
          <div className="grid w-full grid-cols-1 gap-2.5 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {signs.map(({ text, Icon }) => (
              <article
                key={text}
                className="flex min-h-[76px] min-w-0 items-center gap-2.5 rounded-md bg-white px-3 py-2.5 shadow-[0_8px_22px_rgba(74,55,136,0.07)] 2xl:min-h-[80px] 2xl:gap-3 2xl:px-4"
              >
                <Icon className="h-[25px] w-[25px] shrink-0 text-[#5c48ad]" strokeWidth={2} />
                <p className="min-w-0 flex-1 whitespace-pre-line break-words text-[11.5px] font-black leading-[1.3] text-[#312760] xl:text-[12px] 2xl:text-[12.5px]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[280px] overflow-hidden rounded-r-md sm:min-h-[340px] md:col-span-2 md:min-h-[360px] lg:col-span-1 lg:min-h-full">
          <img
            src={signsImage}
            alt="Woman reflecting in a calm indoor space"
            className="absolute inset-0 h-full w-full object-cover object-[76%_center] sm:object-[72%_center] lg:object-[70%_center] xl:object-[68%_center]"
            loading="lazy"
          />
          <div className="absolute inset-y-0 left-0 hidden w-20 bg-[linear-gradient(90deg,#fbf9ff_0%,rgba(251,249,255,0.76)_38%,rgba(251,249,255,0)_100%)] lg:block" />
          <div className="absolute inset-x-0 top-0 h-12 bg-[linear-gradient(180deg,#fbf9ff_0%,rgba(251,249,255,0)_100%)] lg:hidden" />
        </div>
      </div>
    </section>
  );
}

export default WomenHealthCareSignsSection;

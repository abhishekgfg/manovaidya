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
    <section className="overflow-hidden bg-[#fbf9ff]">
      <div className="grid grid-cols-1 lg:min-h-[240px] lg:grid-cols-[225px_minmax(760px,1fr)_405px] xl:grid-cols-[250px_minmax(820px,1fr)_460px]">
        <div className="flex items-center px-5 py-7 sm:px-7 lg:px-6 lg:py-0">
          <div>
            <h2 className="text-[23px] font-black leading-[1.08] text-[#2d2379] sm:text-[26px] lg:text-[24px] xl:text-[27px]">
              Common Signs
              <br />
              You Shouldn&apos;t Ignore
            </h2>
            <span className="mt-7 block h-[3px] w-12 bg-[#4f36a0]" />
          </div>
        </div>

        <div className="flex items-center px-5 pb-7 sm:px-7 lg:px-0 lg:py-7">
          <div className="grid w-full grid-cols-1 gap-4 min-[520px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {signs.map(({ text, Icon }) => (
              <article
                key={text}
                className="flex h-[78px] min-w-0 items-center gap-4 rounded-md bg-white px-5 shadow-[0_10px_28px_rgba(74,55,136,0.08)]"
              >
                <Icon className="h-[28px] w-[28px] shrink-0 text-[#5c48ad]" strokeWidth={2.1} />
                <p className="min-w-0 whitespace-pre-line text-[10.5px] font-black leading-[1.3] text-[#312760] xl:text-[11.5px]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative min-h-[240px] overflow-hidden lg:min-h-full">
          <img
            src={signsImage}
            alt="Woman reflecting in a calm indoor space"
            className="absolute inset-y-0 left-0 h-full w-[158%] -translate-x-[18%] object-cover object-right"
            loading="lazy"
          />
          <div className="absolute inset-y-0 left-0 hidden w-36 bg-[linear-gradient(90deg,#fbf9ff_0%,rgba(251,249,255,0.86)_36%,rgba(251,249,255,0)_100%)] lg:block" />
          <div className="absolute inset-x-0 top-0 h-14 bg-[linear-gradient(180deg,#fbf9ff_0%,rgba(251,249,255,0)_100%)] lg:hidden" />
        </div>
      </div>
    </section>
  );
}

export default WomenHealthCareSignsSection;

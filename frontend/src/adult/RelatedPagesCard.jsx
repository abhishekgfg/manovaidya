import React from "react";
import adultMentalHealthImage from "../images/emotional-wellbeing-burnout-support.png";
import anxietyImage from "../images/burnout-symptoms-adults.png";
import depressionImage from "../images/stress-burnout-support-india.png";
import sleepImage from "../images/neuro-ayurveda-stress-burnout.png";
import ocdImage from "../images/emotional-wellbeing-burnout-support.png";
import bipolarImage from "../images/burnout-symptoms-adults.png";
import doctorImage from "../images/doctor-ankush-portrait.png";

const relatedPages = [
  {
    title: "Explore Adult Mental Health Care",
    href: "/adult-mental-health-care/",
    image: adultMentalHealthImage,
  },
  {
    title: "Learn about Adult Anxiety Support",
    href: "/anxiety-support-india/",
    image: anxietyImage,
  },
  {
    title: "Explore Adult Depression Support",
    href: "/depression-support-india/",
    image: depressionImage,
  },
  {
    title: "Understand Sleep Disorders & Insomnia Support",
    href: "/sleep-disorders-support/",
    image: sleepImage,
  },
  {
    title: "Learn about OCD Support",
    href: "/ocd-support/",
    image: ocdImage,
  },
  {
    title: "Explore Bipolar Disorder Support",
    href: "/bipolar-support/",
    image: bipolarImage,
  },
  {
    title: "Know more about Dr. Ankush Garg",
    href: "/dr-ankush-garg/",
    image: doctorImage,
  },
];

function RelatedPagesCard() {
  return (
    <aside className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_10px_28px_rgba(58,31,90,0.05)]">
      <h2 className="text-[15px] font-black text-[#21142d]">Related Pages</h2>
      <div className="mt-5 space-y-5">
        {relatedPages.map((article) => (
          <a key={article.title} href={article.href} className="grid grid-cols-[76px_1fr] gap-3">
            <img src={article.image} alt="" className="h-16 w-[76px] rounded-md object-cover" />
            <span>
              <span className="block text-[12px] font-black leading-5 text-[#21142d]">{article.title}</span>
              <span className="mt-1 block text-[11px] font-bold text-[#75677d]">Open page</span>
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
}

export default RelatedPagesCard;

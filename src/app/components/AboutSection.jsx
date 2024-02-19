"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";


const TAB_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li>Node.js</li>
                <li>React & Redux</li>
                <li>Angular</li>
                <li>Material UI</li>
                <li>Javascript</li>
                {/* <li>Sequelize</li> */}
                <li>Express.js</li>
                {/* <li>PostgreSQL</li> */}
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Bachelor's Degree in Information Technology</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>Mobile Software Development and Entrepreneurship Program (MIT)</li>
            </ul>
        )
    }
]


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabchange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="./Setup.jpg" alt="Desktop setup" width={500} height={500} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            Edward is a Frontend Developer with over 4 years of experience
            designing, developing, and testing user interfaces creatively to
            solve business and technology challenges. Has developed web
            applications using Angular and React. Has a strong understanding of
            JavaScript, HTML, and CSS fundamentals. Enjoys learning new Web
            Standards as they gain browser support.
          </p>

          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabchange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabchange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabchange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
                {TAB_DATA.find((t)=> t.id === tab).content}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

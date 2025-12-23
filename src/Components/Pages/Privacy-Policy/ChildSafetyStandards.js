import React from "react";
import { Link } from "react-router-dom";
import Header from "../webpage/Header";

const ChildSafetyStandards = () => {
  const data = [
    {
      title: "Introduction",
      body: [
        "I, (“I”, “Me”, or “Owner”), have created the TalkAngels application (the “App”), which is provided to users (“User”) at no cost. This Privacy Policy explains how I collect, use, and disclose information from anyone using TalkAngels and its Services through the App.",
        "At TalkAngels, we are committed to protecting children and young people from exploitation, abuse, and harmful content. Our app is designed with strict safeguards to ensure a safe and respectful community."
      ],
      isdot: false
    },
    {
      title: "1. Zero Tolerance Policy",
      title2: "",
      body: [
        "We have a zero-tolerance policy for Child Sexual Abuse Material (CSAM) and any form of child exploitation or abuse. Such content is strictly prohibited and will result in immediate removal of accounts involved, along with reporting to the appropriate authorities."
      ],
      isdot: false
    },
    {
      title: "2. Reporting In-App",
      title2: "",
      body: [
        "Users can report inappropriate or harmful content directly through our in-app reporting feature. Reports are reviewed promptly by our moderation team to take immediate action."
      ],
      isdot: false
    },
    {
      title: "3. Compliance with Laws",
      title2: "",
      body: [
        "We comply with all relevant regional and international child safety laws, including mandatory reporting requirements. Any CSAM detected or reported in our app is referred to national and regional law enforcement authorities."
      ],
      isdot: false
    },
    {
      title: "4. Prevention & Monitoring",
      title2: "",
      body: [
        "We actively monitor content and user interactions to prevent harmful activities.",
        "We actively monitor content and user interactions to prevent harmful activities.",
        "Repeat offenders are reported to authorities.",
      ],
      isdot: true
    },
    {
      title: "5. Grievance Redressal Mechanism",
      title2: "",
      body: [
        "If you have a grievance regarding this Child Safety Standards, contact me at:",
        "",
        "Email: support@talkangles.com",
        "I will acknowledge your complaint within 96 hours and attempt to resolve it promptly."
      ],
      isdot: false
    },
  ];

  return (
    <>
      <div className="bg-darkBlue py-7 text-white">
        <div className="sticky top-0 left-0 bg-darkBlue">
          <Header />
        </div>
        <div className="bg-darkBlue pt-4 text-white">
          <h1 className="text-center font-semibold text-5xl">
            Child Safety Standards
          </h1>
        </div>
        <div className="flex flex-col gap-6 max-w-7xl mx-auto mt-10 px-4">
          {data?.map((item, i) => (
            <>
              <div>
                <h2 className="text-left font-semibold text-2xl">
                  {item?.title}
                  <br />
                  {item?.title2}
                </h2>
                {item.isdot ?
                  item?.body?.map((data) => (
                    <ul className="list-disc list-inside">
                      <li className="mt-4 pl-9 text-lg capitalize leading-[35px]">
                        {data}
                      </li>
                    </ul>
                  ))
                  :
                  item?.body?.map((data) => (
                    <>
                      <p className="mt-4 pl-9 text-lg capitalize leading-[35px]">
                        {data}
                      </p>
                    </>
                  ))
                }
                <ul className="ml-[100px] text-lg capitalize leading-[35px]">
                  {item?.Topic?.map((subtopic) => (
                    <li>{subtopic}</li>
                  ))}
                </ul>
                {item?.body2?.map((data) => (
                  <>
                    <p className="mt-4 pl-9 text-lg capitalize leading-[35px]">
                      {data}
                    </p>
                  </>
                ))}
              </div>
            </>
          ))}
        </div>
        <div className="bg-darkBlue py-5 mt-10">
          <p className="mt-10 text-lg capitalize leading-[35px] text-center font-semibold text-white">
            This Child Safety Standards updated on 11th September {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

export default ChildSafetyStandards;

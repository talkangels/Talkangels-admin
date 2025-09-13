import React from "react";
import { Link } from "react-router-dom";
import Header from "../webpage/Header";

const PrivacyPolicy = () => {
  const data = [
    {
      title: "Introduction",
      body: [
        "I, RAIYANI PIYUSH JINABHAI (“I”, “Me”, or “Owner”), have created the TalkAngels application (the “App”), which is provided to users (“User”) at no cost. This Privacy Policy explains how I collect, use, and disclose information from anyone using TalkAngels and its Services through the App.",
        "By using TalkAngels, you agree to the collection and use of your information as described in this Privacy Policy. I do not share your information with anyone except as described here.",
        "The terms used in this Privacy Policy have the same meanings as in my End User License Agreement (“EULA”), accessible through the App, unless otherwise defined here.",
        "This Privacy Policy applies to all Users using the App."
      ],
      isdot: false
    },
    {
      title: "1. Salient Features of this Privacy Policy",
      title2: "",
      body: [
        "I will collect personal information in a lawful and fair manner, with your knowledge or consent.",
        "Before or at the time of collection, I will identify the purpose for which information is being collected.",
        "I will use your personal information solely to fulfill the purposes specified here, unless I get your consent or the law requires otherwise.",
        "I will protect your personal information with reasonable security measures against loss, theft, or unauthorized access, use, or disclosure.",
        "I will make available information about my policies and practices regarding the management of personal information.",
        "I will retain personal information only as long as necessary to fulfill the purposes outlined."
      ],
      isdot: true
    },
    {
      title: "2. Application and Scope",
      title2: "",
      body: [
        "This Privacy Policy describes my practices regarding the collection, use, and disclosure of personal information from Users of TalkAngels. It aims to establish responsible and transparent practices and comply with applicable legal requirements.",
        "By using the App, you agree to the collection, use, and storage of your personal information in accordance with this Privacy Policy. If you do not agree, do not use the App."
      ],
      isdot: false
    },
    {
      title: "3. Definition of Personal Information",
      title2: "",
      body: [
        "“Personal Information” means any information that identifies you, including:",
        "Name, email, phone number",
        "Transaction details on the App",
        "Payment information",
        "Any other information you provide during registration or use of the App",
        "Information that is de-identified or aggregated and cannot identify you personally is not considered Personal Information."
      ],
      isdot: true
    },
    {
      title: "4. Collection and Use of Personal Information",
      title2: "",
      body: [
        "I may collect and use personal information for the following purposes:",
        "Create, manage, and administer your account",
        "Process payments and provide support",
        "Provide access to App services and features",
        "Understand how you interact with the App and improve features",
        "Personalize your experience on the App",
        "Notify you about updates, offers, and changes in terms",
        "Ensure security and prevent fraud or illegal activities",
        "Conduct surveys or gather feedback",
        "Conduct market or analytics research",
        "Meet legal or regulatory requirements",
        "I may also use your information in an aggregated or de-identified manner for analysis."
      ],
      isdot: true
    },
    {
      title: "5. Collection Methods",
      title2: "",
      body: [
        "Account Creation: I collect your name, email, phone, and any other necessary details to create and manage your account.",
        "Use of Services: I collect payment identifiers, username, and transaction details as required for App services.",
        "User-Provided Information: I may collect information you provide when contacting me, submitting requests, or signing up for newsletters."
      ],
      isdot: false
    },
    {
      title: "6. Sharing of Personal Information",
      title2: "",
      body: [
        "I will not sell, rent, or trade your personal information. However, I may share information in these cases:",
        "With Service Providers: Third parties who help provide or improve App services. They are required to maintain confidentiality.",
        "As Required by Law: If legally required or to protect my rights or property.",
        "Business Transfer: If I sell or transfer the App or its assets, personal information may be included in the transaction."
      ],
      isdot: false
    },
    {
      title: "7. User Contributions",
      title2: "",
      body: [
        "You agree not to post or share content that:",
        "Belongs to someone else without permission",
        "Is harmful, harassing, illegal, or misleading",
        "Infringes intellectual property rights",
        "Threatens public order or safety",
        "Contains viruses or malicious code"
      ],
      isdot: true
    },
    {
      title: "8. Cross-Border Data Transfer",
      title2: "",
      body: [
        "Your personal information may be stored or processed outside your country. By using the App, you consent to such transfers."
      ],
      isdot: false
    },
    {
      title: "9. Security and Consent",
      title2: "",
      body: [
        "I use reasonable physical, technical, and administrative safeguards to protect your data. However, no security system is perfect, and I cannot guarantee absolute security.",
        "You may withdraw your consent at any time by contacting me at support@talkangles.com, but certain services may no longer be available."
      ],
      isdot: false
    },
    {
      title: "10. Links to Other Sites",
      title2: "",
      body: [
        "The App may contain links to third-party sites. I am not responsible for their privacy practices. Review their policies before providing personal information.",
      ],
      isdot: false
    },
    {
      title: "11. Children’s Privacy",
      title2: "",
      body: [
        "The App is not intended for anyone under 18. I do not knowingly collect personal information from children. If I discover a child has provided personal information, I will delete it immediately."
      ],
      isdot: false
    },
    {
      title: "12. Changes to This Privacy Policy",
      title2: "",
      body: [
        "I may update this Privacy Policy from time to time. Updates take effect immediately upon posting. Continued use of the App signifies acceptance of the updated policy."
      ],
      isdot: false
    },
    {
      title: "13. Governing Law",
      title2: "",
      body: [
        "This Privacy Policy is governed by the laws of India, and any disputes will be subject to the exclusive jurisdiction of Indian courts."
      ],
      isdot: false
    },
    {
      title: "14. Grievance Redressal Mechanism",
      title2: "",
      body: [
        "If you have a grievance regarding this Privacy Policy, contact me at:",
        "Name: RAIYANI PIYUSH JINABHAI",
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
            Privacy Policy
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
            This Privacy Policy updated on 11th September {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;

import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const data = [
    {
      title: "Listeners Blog FAQs Intern Download",
      title2: "Privacy Policy, T&C, and R&C Introduction",
      body: [
        "We/ TALKANGELS, are an internet based mobile phone application by TALKANGELS, and this document uses the words “we” and “TALKANGLES” interchangeably, and “you” and “users” interchangeably. The expression “we” covers both TALKANGLES and TALKANGELS, as and when the context allows.",
        "Terms “We”, “TALKANGELS”, “TALKANGELS”, covers their respective current or former employees, officers, directors, agents, successors, assigns, parents, subsidiaries, divisions or affiliated corporations.",
        "The users’ right to privacy is of paramount importance to TALKANGELS community.",
        "We take data security and privacy with critical importance. We obligate ourselves to maintain a no-leak and no-disclosure business as any private and sensitive data must receive proportioned protection. In our application, users and providers / ‘listeners’, are in control and can decide what they want to share and what they prefer to keep private.",
      ],
      Topic: [
        "-   Any information you share with us by your own choosing is ‘redacted’, ‘obscure’, and       ‘censored’ from everyone, including the employees of TALKANGELS, as well as the external    ‘listeners’ we bring in, for your engagement.",
        "-   The information or data you share with our ‘listeners’ or otherwise, is for “your eyes only”. We only retain the basic minimum information like name and contact number, for the registration process. -   We do not send you messages without your permission. ",
        "-   We send promotional messages with an option to opt-out at any time.",
        "-   We do not share data with any third party, whatsoever.",
      ],
      body2: [
        "However, TALKANGELS may, with your implied permission, use the basic information and data provided by you, to provide a more personalized online experience. ",
        "TALKANGELS stores any data entered by the user, in a very secured format deterring any leakage or misuse.",
        "No “sensitive personal data” is collected or stored and used as per the required legal guidelines. We emphasize and actively inform all users to avoid sharing any “sensitive personal data” with anyone related to, or connected to, or representing TALKANGELS. ",
        "The only purpose of collecting any basic or required information is to provide you with a more secure experience to the real-time users and enable the ‘listeners’ to address and engage the users, coherently and cogently.",
        "In general, you can visit TALKANGELS’s portal without telling us who you are and without revealing any information about yourself. There are times, however, when TALKANGELS may need information from you. Only in such incidences, as disclosed, TALKANGELS reserves the right to gather the information and use it according to the terms mentioned.",
        "TALKANGELS does not rent, sell, or share personal or any other form of information about you to anyone, including non-affiliates, except to provide the services as agreed or intended to be generally provided through the TALKANGELS application or any other service you've specifically requested, when TALKANGELS has your permission.",
        "TALKANGELS provides your redacted and censored information to unspecified listeners (as defined in the disclaimer) who timely engage with TALKANGELS under strict confidentiality agreements and non-disclosure contracts. ",
        "However, TALKANGELS as per law, is legally bound to disclose information that any government organization with proper instructions from the court of law, in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, or as otherwise required by law. ",
        "TALKANGELS, as far as its publishing and online involvement is concerned, is only an intermediary as defined under the “Information Technology Act, 2000” and “Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules 2021”, and does not modify and edit or in any way manipulate user-generated contents (if any), and therefore, is protected under law.",
      ],
    },
    {
      title: "Information collected directly:",
      title2: "",
      body: [
        "TALKANGELS may, at times, receive or collect some information to operate, provide, improve, understand, support, and market our services, including when you install, access, or use our services.The types of information we receive and collect depend on how you use our services.",
        "When a user enquires about, registers for, or uses our services, websites or application, then the mechanics of the system may need to procure (off course with your consent) some basic identification data - including your name and phone number.",
        "TALKANGELS is a portal which brings two individual set of parties at the same platform. Though we cannot be held directly or vicariously liable by conduct or disclosure of either party (considering we do not ask for any personal or typical information to be disclosed by either party or monitor the information shared at our mobile application), we do go to extra lengths to ensure your rights are protected and privacy is maintained at all costs.",
        "However, parties are bound to secure each other’s information in accordance with law and maintain each other’s privacy integrity, and ethics and are individually liable for any violations.",
      ],
    },
    {
      title: "Other policy issues: ",
      title2: "",
      body: [
        "Parties are urged not to share sensitive personal information or core medical issues as TALKANGELS is not a medical facilitator or in any way certified to practice medicine or advice professionally. While under our privacy policy if such information are shared by any party, this would be to their own volition and such data shall be protected as far as reasonably possible by us, however, we can not take responsibility for any information which the user may have chosen to share on TALKANGELS mobile application on their own volition or otherwise.",
        "TALKANGELS reserves the right to alter any of the conditions without prior notice to any of the parties. TALKANGELS stays committed to protecting the data of both parties.",
        "TALKANGELS takes no responsibility and account for the consensual exchange of information between the real-time user and listeners (as defined in the disclaimer) and the post effect or events following with the sharing of the data between the parties.",
        "Payments Data: When you use our services for purchases or other financial transactions, we process additional information about you, including payment account and transaction information. Payment account and transaction information include information needed to complete the transaction (this includes information about the payment method, amounts involved). If you use our payments services, our privacy practices are described below:",
        "When any party registers to use services making or giving payments, we receive your bank's name and confirm the bank account for use. If you do not have a BHIM UPI PIN already for your bank account, you can set one using your partial debit card number, expiry date, PIN (if required by your bank), and bank-issued one-time password (OTP) to set up a BHIM UPI PIN.",
        "We DO NOT RETAIN any user’s sensitive payment data (any debit card number, expiry date, PIN, OTP, or BHIM UPI PIN), as per law. ",
        "We don’t have access to the BHIM UPI PIN because it is encrypted by Common Library (CL) software provided by National Payments Corporation of India. ",
        "If you would like to manage, change, limit, or delete your payment information, we allow you to do that through your Payments settings or by deleting your account. ",
        "The extent of application services: Our services do not provide access to emergency services or emergency services providers, including the medical, police, fire departments, or hospitals, or otherwise connect to public safety answering points. You should ensure you can contact your relevant emergency services providers in your relevant city or local administration. Our services are limited to providing general non-certified advisory, discussions and guidance only.",
        "YOU USE OUR SERVICES AT YOUR OWN RISK AND SUBJECT TO THE FOLLOWING DISCLAIMERS. WE ARE PROVIDING OUR SERVICES ON AN “AS IS” BASIS WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND FREEDOM FROM COMPUTER VIRUS OR OTHER HARMFUL CODE.",
        "WE DO NOT WARRANT THAT ANY INFORMATION PROVIDED BY US IS ACCURATE, COMPLETE, OR USEFUL, THAT OUR SERVICES WILL BE OPERATIONAL, ERROR-FREE, SECURE, OR SAFE, OR THAT OUR SERVICES WILL FUNCTION WITHOUT DISRUPTIONS, DELAYS, OR IMPERFECTIONS.",
        "WE DO NOT CONTROL, AND ARE NOT RESPONSIBLE FOR, CONTROLLING HOW OR WHEN OUR USERS USE OUR SERVICES OR THE FEATURES, SERVICES, AND INTERFACES OUR SERVICES PROVIDE. WE ARE NOT RESPONSIBLE FOR AND ARE NOT OBLIGATED TO CONTROL THE ACTIONS OR INFORMATION (INCLUDING CONTENT) OF OUR USERS OR OTHER THIRD PARTIES. ",
        "YOU RELEASE US, OUR SUBSIDIARIES, AFFILIATES, OUR AND THEIR DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS, AND AGENTS FROM ANY CLAIM, COMPLAINT, CAUSE OF ACTION, CONTROVERSY, DISPUTE, OR DAMAGES (TOGETHER, “CLAIM”), KNOWN AND UNKNOWN, RELATING TO, ARISING OUT OF, OR IN ANY WAY CONNECTED WITH ANY SUCH CLAIM YOU HAVE AGAINST ANY THIRD-PARTIES.",
        "YOUR RIGHTS WITH RESPECT TO THE PARTIES ARE NOT MODIFIED BY THE FOREGOING DISCLAIMER IF THE LAWS OF THE COUNTRY OR TERRITORY OF RESIDENCE, APPLICABLE AS A RESULT OF YOUR USE OF OUR SERVICES, DO NOT PERMIT IT. ",
        "Indemnification: If either the ‘users’ or the ‘listeners’ or any party on their behalf or a third party brings a claim (including a 'Third-Party Claim') against us, in relation to any party’s actions in re. TALKANGELS, or any other use of our services by you, you will, to the maximum extent permitted by applicable law, indemnify, and hold TALKANGELS and its employees and directors, harmless from and against all liabilities, damages, losses, and expenses of any kind (including reasonable legal fees and costs) relating to, arising out of, or in any way in connection with any of of our services.",
        "Dispute Resolution and Governing Law: The law governing any dispute arising out of or related to TALKANGELS shall be under express jurisdiction of courts at ‘New Delhi’, central district court.",
        "The ‘Governing Law’ would be Indian Law. All disputes shall be referred to ‘Arbitration’ under sole arbitrator, appointed mutually or through FICCI, and shall either be a lawyer or the High Court or a retired District Judge or a retired senior Bureaucrat with the Government of India. ",
        "Arbitrator’s fee shall not be more than as provided for in the ‘model fee’ under the Arbitration and Conciliation Act, 1996, and the language used, shall be English. ",
        "With regard to parties based out of India, as we are an Indian party, registered in India, with primary place of business based out of India, it would be assumed that the subject matter of any dispute arose in India and shall be subject to the substantial law of India. This Policy, should you choose to proceed to use any of our services, bind you legally, and this document expressly bars the jurisdiction of any other court or forum not based out of New Delhi, India. ",
      ],
    },
    {
      title: "Terms of Service ",
      title2: "",
      body: [
        "We/ TALKANGELS, are an internet based mobile phone application by TALKANGELS, and this document uses the words “we” and “TALKANGELS” interchangeably, and “you” and “users” interchangeably. The expression “we” covers both TALKANGELS and TALKANGELS, as and when the context allows. ",
      ],
    },
    {
      title: "How we work: ",
      title2: "",
      body: [
        "TALKANGELS allows you to access certain features or content in exchange for a recurring fee, as applicable (the “Membership Services”). Your transactions and any other use of the ‘Membership Services’ i.e. services you avail, post enrolling with TALKANGELS’s internet run mobile application, are subject to these “Terms of Service”.",
      ],
      Topic: [
        "1. You undertake and understand that these terms apply to you, the moment you ‘download’ the “TALKANGELS App”, available on the concerned application store of your phone, or downloaded / used/ procured by any other medium. ",
        "2. You further understand and undertake that these Terms of Service are to be read along with our Privacy Policy, and each of these documents is incorporated in each other by reference.",
        "3. These terms are legally binding and the application is governed by the laws of India, and falls within the New Delhi jurisdiction.",
      ],
      body2: [
        "Should you, the “user” choose to proceed with our mobile application, and enjoy its features and services, beyond this point, it would be held and assumed that you or any party acting under or related to you, have agreed to each and every foregoing term of usage, condition, and liability, and that these terms bind you and TALKANGELS with the force of law, and that this document is to be read and applied as a whole.",
        "We declare, and you understand that: ",
        "We refer to these individuals who help you discuss any issue which you may want to discuss as “listeners”, for the sake of terminology.",
        "Though to the limited extent possible, we verify all such “listeners” associated with us, we do not conduct verification of each and every assertion made by the listeners and our vetting process is basic due diligence. ",
        "We cannot, at any point in time, be held to be responsible, if any information declared by any listener may prove to not be an accurate depiction of his or her portrayal, accomplishment, experience, or circumstance. ",
        "You understand that these “listeners” we curate to adhere to your optimum customer expectation, are not our employees or under our employment in any way, and are individuals associated with us for the limited purpose of helping you discuss your problems, concerns, issues, inhibitions, or general feelings and thoughts, in an associated role (experience sharing interaction) and each of these individuals/ listeners are liable for their own conduct, behavior, disclosures, revelations, advice or suggestion. ",
        "You undertake to proceed only with the declared understanding that we are not certified to give or prescribe medical or psychological care of assistance to any user, and are only a platform that enables you to discuss your problems, concerns, issues, inhibitions, or general feelings and thoughts, with our ‘listeners’ who, as per their disclosures, have been similarly placed in the past are may now be in a position to lend you an ear, support you by discussing your concerns and/ or suggest you alternatives to tackle your situation, in a non-professional way, without being liable for these discussions. We, TALKANGELS, actively encourage you to seek professional assistance through government agencies like hospitals, police, fire department, etc., should you be at any medical, psychological, or physical risk, and need help. ",
        "You further understand that we as an application, have designed our interface to keep you anonymous, and still put you in touch with people who, as per them, are experienced on the issue and may be equipped to discuss your issues. (Please refer to our privacy policy).",
        "If on the basis of what you choose to share, or choose to ask the listener, (which we recommend, to keep non-specific, so that your identity remains untraceable), if any issue arises, disputes are created, or a situation is created by your or the listener's action or conduct, which may not be in the best of the interests of either of the parties, please do report such incident to us, however, we cannot be responsible or held liable, even vicariously, for any such circumstance, incident, event, dispute, conflict. You or anyone acting on your behalf, undertake to keep us indemnified at all times, from all such circumstance, incident, event, dispute, conflict, that may arise on the basis of the conversation or disclosure or any involvement, which you may get into, with the individual listeners. We encourage you to not track or form an association of any nature with the listeners, for your anonymity.",
        "You undertake to be solely responsible for your actions, decisions or conduct, while using the application, or in any circumstance which relates to, or finds its genesis with reference to TALKANGELS.",
        "We are not responsible for, and cannot be held responsible for any of your actions or conduct, which are illegal, self-destructive, or otherwise, anti-social and against the public policy of India. In these circumstances, we expressly distance ourselves from any association with any party as we are only a platform for individuals to interact and discuss, and cannot be held responsible for any unpleasant or unfortunate incident, death by suicide, depression, or any similar incident. We are in the business of giving you an anonymous platform to discuss your issues and have no control or limit over the conduct of either of the parties who are all responsible for themselves, and their conduct is not curated for the sake of your own privacy. ",
        "TALKANGELS declares that the interaction between the real-time users and the listeners, is not a professional contract, and does not tender any professional advice. ",
        "TALKANGELS provides no indemnity towards any loss or damage caused to any party be it of any kind. TALKANGELS holds fully qualified consent from both parties for their interaction with each other. ",
        "Changes or Discontinuation of Member Services. TALKANGELS reserves the right to change the availability of Member Services. In addition, we reserve the right to modify, suspend, or discontinue any Member Service with or without notice to you and we will not be liable to you or any third party for any such modifications, suspension, or termination. ",
        "Removal or Unavailability of Content. In certain cases, the content available within a Member Service may become unavailable due to restrictions from our licensors or other legal or policy reasons. TALKANGELS  will have no liability to you for any such unavailability. ",
        "Changes to the Membership Terms of Service. We may change these Membership Terms of Service from time to time so we encourage you to periodically review the most up-to-date version. If you refuse to accept the updated Membership Terms of Service then TALKANGELS  reserves its right to discontinue your use of the Membership Services. ",
        "Communications. By using the Member Services, you consent to receive communications from us including marketing communications such as newsletters about TALKANGELS features and content, special offers, promotional announcements, and customer surveys, to your registered email address or via other methods. ",
      ],
    },
    {
      title: "ANTI-HACKING PROVISION ",
      title2: "",
      body: [
        "You expressly agree not to use this portal in any manner or for any purpose that is prohibited by this membership contract. In addition, you expressly agree not to:",
      ],
      Topic: [
        "(1) use the portal for any purpose that is prohibited by any law or regulation, or to facilitate the violation of any law or regulation; ",
        "(2) use or attempt to use any “deep-link,” “scraper,” “robot,” “bot,” “spider,” “data mining,” “computer code” or any other automated device, program, tool, algorithm, process or methodology or manual process having similar processes or functionality, to access, acquire, copy, or monitor any portion of the portal or any data or content found on or accessed through the portal without our prior express written consent; ",
        "(3) obtain or attempt to obtain through any means any materials or information on the portal that has not been intentionally made publicly available; ",
        "(4) in any way bypass or circumvent any other measure employed to limit or prevent access to the application or its content; ",
        "(5) violate the security of the application or attempt to gain unauthorized access to the application, data, materials, information, computer systems or networks connected to any server associated with us, through hacking, password mining, or any other means; ",
        "(6) interfere or attempt to interfere with the proper working of the mobile application or any activities conducted on or through the application, including accessing any data, content, or other information prior to the time that it is intended to be available to the public on the application;",
        "(7) recording of any conversation or chatting shall also amount to hacking and infringement of the Membership Policy. ",
      ],
      body2: [
        "Note of Caution. TALKANGELS shall not be responsible for any Force Majeure or Act of God or local authority's direction and the services shall be accordingly suspended till further direction. TALKANGELS shall not be liable at all under any circumstances, whatsoever.",
        "TALKANGELS does not provide price protection or refunds in the event of a price reduction or promotional offering. You agree to pay for any Membership Services that you register for (except during a free trial period, if any). ",
        "For international users specifically, TALKANGELS will charge your credit card or any other form of payment for the price listed on the relevant Member Services offer, along with any additional amounts relating to applicable taxes, bank fees, and currency fluctuations. ",
      ],
    },
    {
      title: "Other Terms",
      title2: "",
      body: [
        "You acknowledge and agree that certain content available in the Member Services may be considered offensive to some people and that such content may not be labeled as such. Additionally, certain descriptions of Membership Services or content available in the Membership Services are not guaranteed to be accurate. You agree to use the Membership Services at your own risk and, subject to applicable laws, TALKANGELS will have no liability to you for any content that you find offensive. ",
        "You acknowledge and agree that TALKANGELS should not be held liable for any act or conduct of either party that originates from the discussion that takes place between the real-time user and listener. Furthermore, even the listener can not be held liable for any wrongful act of the user, and the discussion shall not be taken as instigation to commit any illegal activity either from the listener or us. ",
        "Members can reach us by mail/post at: ",
        "Lal Bungalow, Surat - Dumas Rd, Near, Athwalines, Athwa, Surat, Gujarat 395001",
        "Or by email at: talkangels5524@gmail.com",
        "If you have questions or feedback about Membership Services, please send it to the email address above. ",
        "You agree that you are solely responsible for (and that TALKANGELS has no responsibility to you for) your use of any Membership Service, any breach of your obligations under the Membership Terms of Service, and for the consequences (including loss or damage of any kind which TALKANGELS may suffer) of any such breach. ",
        "You acknowledge and agree that you are responsible for paying all fees in a timely manner and for providing us with a valid credit card, payment information, or another form of payment acceptable to TALKANGELS. ",
        "You acknowledge that your online acceptance of these or any other terms constitute a binding agreement between you and TALKANGELS and signify your intent to be bound to such online acceptances. Subject to applicable laws, in no event will TALKANGELS liable for any causes of action brought by you or any agent of yours arising from or related to the services that exceed the payments actually received and retained by TALKANGELS from you for the Member ",
      ],
    },
    {
      title: "Services.",
      title2: "",
      body: [
        "Made with ❤️ in India",
        "About Us Privacy Policy, T&C, and R&C",
        "A product of © 2021-2022 TALKANGELS. All Rights Reserved.",
      ],
    },
  ];

  return (
    <>
      <div className="bg-darkBlue py-7 text-white sticky top-0 left-0">
        <h1 className="text-center font-semibold text-5xl">Privacy Policy</h1>
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
              {item?.body?.map((data) => (
                <>
                  <p className="mt-4 pl-9 text-lg capitalize leading-[35px]">
                    {data}
                  </p>
                </>
              ))}
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
          This privacy policy updated on 03th APR 2024
        </p>
        <Link
          className="text-lg leading-[35px] text-center font-semibold text-Sky w-full block"
          to="/"
        >
          www.talkangels.com
        </Link>
      </div>
    </>
  );
};

export default PrivacyPolicy;

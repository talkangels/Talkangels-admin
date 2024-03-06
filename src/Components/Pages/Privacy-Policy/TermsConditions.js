import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  const data = [
    {
      title: "TalkAngels Terms & Conditions",
      body: "Please read carefully the following provisions of this “Terms & Condition” of TalkAngels.",
    },
    {
      title: "Acceptance of the Agreement",
      body: "This is a legal agreement made by and between TalkAngels and you regarding the use of TalkAngels software programs and related documentation being installed by you on your device (the “Software or application”). By downloading the Application and/or using any of the services enabled by the Software (the “Services”), YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE FOLLOWING TERMS AND CONDITIONS (INCLUDING ANY ADDITIONAL GUIDELINES AND FUTURE MODIFICATIONS/ENHANCEMENT). IF AT ANY POINT OF TIME, YOU DO NOT AGREE TO THESE TERMS OF USE OR TALKANGELS PRIVACY POLICY, YOU MAY STOP THE USE OF APPLICATION OR SERVICES AND MUST IMMEDIATELY TERMINATE YOUR USE OF THE SOFTWARE AND ALL SERVICES BY DELETING THE APPLICATION FROM YOUR DEVICES. (Refer to the privacy policy can be found at this link: https://www.talkangels.com/). TalkAngels is offered and available to users who are 18-years old or older. By using TalkAngels, you state that you are of legal age to form a binding contract with the Company and meet all the foregoing eligibility requirements. If you do not meet all these requirements, you must not access or use TalkAngels.",
    },
    {
      title: "Acknowledgement",
      body: "This paragraph is intended to apply to you if you have downloaded the Application from the app marketplaces such as the Apple App Store OR the Google Play (the “Platform”). TalkAngels and you acknowledge that this Terms of Use is concluded between TalkAngels and you only, and not with the app marketplaces, and as between TalkAngels and the marketplaces, TalkAngels, not the marketplaces, is solely responsible for the Software and Services and the content thereof. This Terms of Use is not intended to provide for usage rules for the Software and Services that are less restrictive than the Usage Rules set forth for Licensed Applications in, or otherwise be in conflict with, the Terms of Service of the app marketplaces as of the date hereof (which you further acknowledge you have had the opportunity to review).",
    },
    {
      title: "Grant of License",
      body: "Subject to your compliance with the terms and conditions set out in this Terms of Use, TalkAngels grants you a personal, limited, non-commercial, non-sublicensable, non-assignable, non-exclusive, revocable license to download, install and use one (1) copy of the Software, in object code format, only on your personal computer or mobile device (the “Device”) for the sole purpose of personally using the TalkAngels application and any other applications that may be explicitly authorized by TalkAngels for use through use of the Software, and if you have downloaded the application from the App Store or the Google PlayStore, as permitted by the Usage Rules set forth the each app marketplace Terms of Service as of the date hereof, you shall follow the usage rules set forth in this Application Market Terms of Service.",
    },
    {
      title: "INTELLECTUAL-PROPERTY RIGHTS",
      body: "The Software is protected by copyright laws and international copyright treaties, as well as other intellectual property laws and treaties. The Software includes trade secrets and information that is confidential and proprietary to TalkAngels and you agree to take all necessary actions to protect the confidentiality of such information. All ownership rights in the Software and Services, including any related documentation and any new releases, modifications, and enhancements thereto belong solely to TalkAngels and its licensors, if any, including all intellectual property rights therein. TalkAngels and its entire contents, features, and functionality (including all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement of it) are owned by the Company, its licensors, or other providers of that material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. The Software is licensed, not sold. Title does not pass to you. There is no implied license, right or interest granted in any copyright, patent, trade secret, trademark, invention or other intellectual property right. TalkAngels hereby expressly reserves all rights in the Software and all Services which are not expressly granted to you hereunder.",
    },
    {
      title: "TRADEMARKS",
      body: "The Company name, the term TalkAngels, the Company logo, and all related names, logos, product and service names, designs, and slogans are service marks and trademarks of the Company or its affiliates or licensors (if any). You must not use those marks without the Company’s written permission. All other names, logos, product and service names, designs, and slogans on TalkAngels are the service marks and trademarks of their respective owners.",
    },
    {
      title: "PROHIBITED USES",
      body: "You may use TalkAngels only for lawful purposes and in accordance with this agreement. You must not use TalkAngels to:",
      Topic: [
        "- copy, modify, adapt, translate into any language, distribute, or create derivative works based on the Software or any of the Services.",
        "- sublicense, sublease, lease, lend, assign, sell, license, distribute, rent, export, re-export or grant other rights in the Software or Service and any attempt by you to take such action shall be void.",
        "- decompile, disassemble, reverse engineer, or attempt to reconstruct, identify, or discover any source code, underlying ideas, underlying user interface techniques, or algorithms of the Software or any of the Services by any means whatsoever.",
        "- remove, obscure or alter any copyright and/or other proprietary notices contained on or in or otherwise connected to the Software or any of the Services.",
        "- use the Software or any of the Services to create or proliferate a virus or to circumvent any copy protection or other digital rights management mechanism.",
        "- For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise.",
      ],
    },
    {
      title: "Additionally, You must Not:",
      body: "",
      Topic: [
        "- use the Software or any of the Services for any illegal or unauthorized purpose.",
        "- use the Software or any of the Services in any manner which could damage, disable, overburden or impair any of the Services,",
        "- transmit worms, viruses or any code of a destructive nature,",
        "- Use any robot, spider, or other automatic device, process, or means to access TalkAngels for any purpose, including monitoring or copying any of the material on TalkAngels.",
        "- display, transmit or share any content consisting of text, sounds, audio, pictures, photos, video and/or any type of materials, information or communications (“Content”) deemed hateful, threatening, pornographic, obscene, abusive, racially or ethnically offensive, libelous or defamatory, or any Content that encourages conduct that would be considered a criminal offense or bring forth civil liability,",
        "- attempt to hack, destabilize or adapt TalkAngels’s website, the Software (or its source code) or any of the Services, or alter another website so as to falsely imply that it is affiliated with TalkAngels or",
        "- use or access any of the Services by any means other than through the interface provided by TalkAngels.",
      ],
    },
    {
      title: "Your Device Ownership",
      body: "If your use of the Software or Services is dependent upon the use of bandwidth owned or controlled by a third party, you acknowledge and agree that your license to use the Software is subject to you obtaining consent from the relevant third party for such use and by using the Software you warrant that you have obtained such consent. In addition, you warrant that you own the Device to which you are downloading the Software, or that you have the legal right to control the use of that Device. You further agree to ensure that any other person whom you permit to use the Software or Services will do so in accordance with this Terms of Use. You must delete any Software from the Device if you sell the Device, or if you cease to have the legal right to control use of the Device.",
    },
    {
      title: "Content",
      body: "Content transmitted by the use of the Software and Services is entirely the responsibility of the person from whom such Content originated. You use the Software and Services at your own risk and understand that by using the Software or any of the Services, you may be exposed to Content that is offensive, harmful to minors, indecent or otherwise objectionable. TalkAngels does not endorse any Content and hereby expressly disclaims any and all liability in connection with any and all Content transmitted or displayed using the Software and/or Services. You hereby release and discharge the TalkAngels Parties/their Affiliates/Service Providers (as defined below) from any and all claims and demands arising out of or relating to any Content.You also acknowledge and agree that you are solely responsible for any Content that you transmit or display through the Software or Services and that TalkAngels (and Apple or Google if you downloaded the Software from the App Store or Google Play) is not responsible to you or any third party in connection with any Content. You further agree to pay for all royalties, fees, and any other monies owing any person by reason of any of your Content. In addition, you represent and warrant that: (a) you are the creator and owner of or have the necessary rights to transmit or display the Content; and (b) the Content you transmit or you display does not and will not: (i) infringe, violate, or misappropriate any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right, or (ii) slander, defame, libel, or invade the right of privacy, publicity or other property rights of any other person. VIOLATORS OF THESE THIRD-PARTY RIGHTS MAY BE SUBJECT TO CRIMINAL AND CIVIL LIABILITY. TALKANGELS RESERVES ALL RIGHTS AND REMEDIES AGAINST ANYONE WHO VIOLATES ANY OF THE PROVISIONS OF THIS TERMS OF USE.",
    },
    {
      title: "Third Parties and Their Fee",
      body: "The Software may be incorporated into, and may incorporate itself, software and other technology owned and controlled by third parties. Any third party software or technology that is incorporated in the Software falls under the scope of this Agreement. For particular Devices, TalkAngels may ask your permission to use your native SMS application to deliver messages or invitations to people who are not registered users of the Services and with whom you choose to communicate. Some of these services may charge additional fees. TalkAngels can use carrier distributed mobile Messaging or third party mobile messaging applications (SMS) to verify ownership of registered mobile number.",
    },
    {
      title: "Software Update/New Versions:",
      body: "TalkAngels, in its sole discretion, reserves the right to add additional features or functions, or to modify or provide programming fixes, updates and upgrades, to the Software or Services. TalkAngels has no obligation to make available to you any additional features or functions or any modifications, updates, support, maintenance or subsequent versions of the Software or any of the Services. You may have to agree to a renewed version of Terms of Use in the event you want to download, install or use any additional features or functions or any modifications, updates or new versions of the Software. You acknowledge that TalkAngels may automatically issue any additional features or functions or modifications, updates or upgraded versions of the Software and, accordingly, may modify, update or upgrade the version of the Software that you are using or have installed on your Device. You hereby agree that your Device may automatically request and/or receive such modifications, upgrades or updates.",
    },
    {
      title: "Minimum Eligibility",
      body: "The license to use the Software and Services is not valid in any jurisdiction where prohibited. The Software and Services are intended solely for users who are eighteen (18) years of age or older, and any registration, use or access to the Software or Services by anyone under 18 is unauthorized, unlicensed, and in violation of this Terms of Use. TalkAngels may terminate your account, delete any content or information that you have posted on the Services, and/or prohibit you from using or accessing the Software or Services (or any portion, aspect or feature of the Services) for any reason or for no reason, at any time in its sole discretion, with or without notice, including without limitation if it believes that you are under 18.",
    },
    {
      title: "No Access to Emergency Services",
      body: "The Software and Services are not intended to support or carry emergency calls to any type of hospitals, law enforcement agencies, medical care unit or any other kind of services that connect a user to emergency services personnel or public safety answering points pursuant to applicable local and or national regulatory requirements (“Emergency Services”). There are important differences between traditional telephone services and the Software and Services. You acknowledge and agree that: (i) TalkAngels is not required to offer access to Emergency Services under any applicable local and/or national rules, regulations or law; (ii) it is your responsibility to purchase, separately from the Software, traditional wireless (cellular) or fixed line telephone services that offer access to Emergency Services, and (iii) TalkAngels is not a replacement for your primary telephone service.",
    },
    {
      title: "Prevention of unauthorize use",
      body: "TalkAngels reserves the right to exercise whatever lawful means it deems necessary to prevent unauthorized use of the Software or Services, including, but not limited to, technological barriers, IP mapping, and directly contacting your wireless (cellular) carrier regarding such unauthorized use.",
    },
    {
      title: "Authorization to TalkAngels",
      body: "You hereby authorize TalkAngels to collect and use the name, contact number, and unique phone identifiers (IMEI, UDID, or other) contained in the Devices to which you have downloaded the Software for purposes of your use of the Services.",
    },
    {
      title:
        "Payment related to Premium Service and all kind of paid content and item services",
      body: "The Premium and all kind of paid contents & item Services may be offered on a subscription basis, per usage basis, per minute basis or as otherwise described at the time of your purchase, and may be payable in advance, in arrears, per usage, or as otherwise described at the time of your purchase. If you purchase any Premium and all kind of paid contents & item Services, you hereby agree to pay all charges to your account, including applicable taxes, in accordance with billing terms in effect at the time the charges are payable and whether charged by TalkAngels or the online application store from which you downloaded the Software (the “Application Store”). You agree to abide by any relevant terms of service or other legal agreement that governs your use of a given payment processing service and/or method. If you purchase Premium and all kind of paid contents & item Services on a subscription basis, you acknowledge and agree that this is a recurring payment and payments shall be made by the payment method and payment intervals you have selected, until the subscription for the Premium and all kind of paid contents & item Services is terminated. You agree that if you purchase Premium and all kind of paid contents & item Services through an Application Store, all payment related questions, issues, disagreements and/or disputes shall be handled in accordance with the terms of service or other legal agreement that governs your use of a given payment processing service and/or method, and in no event will TalkAngels have any responsibility in connection with any of the foregoing. From time to time, TalkAngels may provide additional features and/or Services that you pay for (the“Premium”). TalkAngels may also offer from time to time in its sole discretion, certain Premium and all kind of paid contents & item Services for free, whether for a trial period or otherwise. Unless expressly stated otherwise, references in this Terms of Use to the Services include the Premium and all kind of paid contents & item Services. You will pay the Premium and all kind of paid contents & item Services by the paid coins (Paid Credits) you purchased via the Software in the first place. Only after all of your paid coins are consumed, you may use free Credits (coins) to pay for Premium and all kind of paid contents & Services.",
    },
    {
      title: "Refund",
      body: "Payments are non-refundable and there are no refunds or credits for partially used periods/credits, except that we may approve a refund in the form of a credit on request if exceptional circumstances exist. If you believe exceptional circumstances exist, please contact us and explain the circumstances that you believe merits a refund. We are not making any promise that we will give you a refund. If we give you a refund, we will issue the refund in the form of free services or a credit to the payment method you used for your purchase; we will not make refunds in the form of cash or check. The provision of a refund in one instance does not entitle you to a refund in the future for similar instances; nor does it obligate us to provide refunds in the future, under any circumstance. Refunds are not available to users who are banned by TalkAngels or its community.",
    },
    {
      title: "Termination by You",
      body: "You may terminate your use of the Services at any time by uninstalling and deleting the Software from all of your Devices. If you have subscribed to any Premium and all kind of paid contents & item Services, you agree that you are solely responsible for directly terminating all payment obligations you may have with any Application Store and/or payment processing service in connection with the Premium and all kind of paid contents & item Services.",
    },
    {
      title: "Termination by TalkAngels",
      body: "Without limiting any other remedies, TalkAngels may limit, suspend, discontinue or terminate this Terms of Use and/or your use of all or any part of the Software and/or Services, with immediate effect, automatically, with or without notice and without recourse to the courts, for any reason or for no reason, including without limitation if TalkAngels believes that you are (i) in breach of any of the terms of this Terms of Use, (ii) creating problems or legal liabilities (actual or potential), (iii) delinquent with respect to any charges due for a Premium and all kind of paid contents & item Service, (iv) infringing a third party’s intellectual property rights, or (v) engaging in fraudulent, immoral or illegal activities. You agree that TalkAngels is under no obligation to provide the Services, including without limitation any Premium and all kind of paid contents & item Services, and that no TalkAngels Party (as defined below) shall be liable to you or to any other party for any limitation, suspension, discontinuance, termination or modification of the Software and/or any of the Services.",
    },
    {
      title: "Content Storage",
      body: "Subject to the terms and conditions of this Terms of Use, TalkAngels will use reasonable efforts to store your Content, if any, in connection with your use of a Premium and all kind of paid contents & item Service if such storage is a feature provided with the Premium and all kind of paid contents & item Service. You acknowledge and agree that TalkAngels shall have no responsibility for the loss, deletion, or destruction of any Content, including any stored Content and that no TalkAngels Party is under any obligation to preserve, provide access to or return to you any Content. In addition, you further acknowledge and agree that, if you have elected to use a Premium and all kind of paid contents & item Service that includes the storage of Content and you are not active on the Premium and all kind of paid contents & item Service for thirty (30) days or longer (as determined TalkAngels), TalkAngels may delete your Content for any reason, including technical, business or any other reasons.",
    },
    {
      title: "Outbound (Third Party) Links",
      body: "If TalkAngels contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to TalkAngels, you do so entirely at your own risk and subject to the terms of use for those websites. In addition, your correspondence or business dealings with advertisers found on or through the Services are solely between you and such advertiser.",
    },
    {
      title: "Indemnification",
      body: "YOU HEREBY AGREE TO INDEMNIFY, DEFEND AND HOLD HARMLESS,TALKANGELS , ITS LICENSORS, ITS PARTNERS, AND ITS AND THEIR RESPECTIVE AFFILIATES, SERVICE PROVIDERS, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS AND SUPPLIERS (INCLUDING TALKANGELS EACH A “TALKANGELS PARTY” AND COLLECTIVELY THE “TALKANGELS PARTIES”), FROM AND AGAINST ANY AND ALL CLAIMS, ACTIONS, LIABILITY, DAMAGES AND COSTS, INCLUDING REASONABLE ATTORNEYS’ FEES INCURRED BY SUCH PARTIES, IN CONNECTION WITH OR ARISING OUT OF (A) YOUR VIOLATION OR BREACH OF ANY TERM OF THIS TERMS OF USE OR ANY APPLICABLE LAW OR REGULATION, WHETHER OR NOT REFERENCED HEREIN, OR (B) YOUR VIOLATION OF ANY RIGHTS OF ANY THIRD PARTY, OR (C) YOUR USE OR MISUSE OF THE SOFTWARE AND/OR ANY OF THE SERVICES, OR (D) YOUR CONTENT OR OTHER COMMUNICATION DISPLAYED OR TRANSMITTED BY MEANS OF THE SOFTWARE AND/OR ANY OF THE SERVICES, OR (E) ANY TAXES RELATED TO YOUR PURCHASE AND/OR USE OF ANY OF THE SERVICES (OTHER THAN TAXES BASED ON THE INCOME OF TALKANGELS). If you downloaded the Software from the app marketplaces, you acknowledge that, in the event of any third party claim that the Software or Services or your possession and use of the Software or Services infringes any third party’s intellectual property rights, as between TalkAngels and the app marketplaces, TalkAngels, not the app marketplaces, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim. TalkAngels reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify TalkAngels, and you agree to cooperate with TalkAngels’s  defense of these claims. You agree not to settle any matter without the prior written consent of TALKANGEL.",
    },
    {
      title: "WARRANTY DISCLAIMERS",
      body: "You understand that we (TalkAngels Parties) cannot and do not guarantee or warrant that our Software available for downloading from the Internet or the App Stores will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to TALKANGEL for any reconstruction of any lost data. We (TalkAngels Parties) will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses, or other technologically harmful material that may infect your computer equipment, computer programs, data, or other proprietary material due to your use of TALKANGEL or any services or items obtained through TALKANGEL or to your downloading of any material posted on it, or on any website linked to it. Your use of TalkAngels, its content, and any services or items obtained through TalkAngels is at your own risk. TalkAngels, its content, and any services or items obtained through TalkAngels are provided “as is” and “as available,” without any warranties of any kind, either express or implied. Neither the Company nor any person associated with the Company (TalkAngels Parties) is making any warranty or representation with respect to the completeness, security, reliability, quality, accuracy, or availability of TalkAngels. Neither the Company nor anyone associated with the Company (TalkAngels Parties) represents or warrants that TalkAngels, its content, or any services or items obtained through TalkAngels will be accurate, reliable, error-free, or uninterrupted, that defects will be corrected, that TalkAngels or the server that makes it available are free of viruses or other harmful components, or that TalkAngels or any services or items obtained through TalkAngels will otherwise meet your needs or expectations. The TalkAngels Parties disclaims all warranties of any kind, whether express or implied, statutory or otherwise, including any warranties of merchantability, noninfringement, and fitness for particular purpose. The foregoing does not affect any warranties that cannot be excluded or limited under applicable law. YOU UNDERSTAND AND AGREE THAT YOU TRANSMIT, DISPLAY OR RECEIVE CONTENT THROUGH THE SERVICE AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR DEVICE AND COMPUTER SYSTEM) OR LOSS OF DATA THAT RESULTS FROM SUCH CONTENT.",
    },
    {
      title: "LIMITATION ON LIABILITY",
      body: "In no event will the TalkAngels Parties, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, TalkAngels, any content on TalkAngels, or any services or items obtained through TalkAngels or TalkAngels Software or any of its Services, including any direct, indirect, special, incidental, consequential, or punitive damages, including personal injury, pain and suffering, emotional distress, loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or otherwise, even if foreseeable. To the fullest extent provided by law, in no event will the collective liability of the TalkAngels Parties and its subsidiaries and affiliates, and their licensors, service providers, employees, agents, officers, and directors, to any party (regardless of the form of action, whether in contract, tort, or otherwise) exceed the greater of $100 or the amount you have paid to the TalkAngels for the applicable service in the last three months out of which liability arose. The limitation of liability set out above does not apply to liability resulting from our gross negligence or willful misconduct or death or bodily injury caused by products you purchased through the site.",
    },
    {
      title: "Claim",
      body: "YOU AND TALKANGLES AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO ANY OF THE SERVICES OR SOFTWARE MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED. If you downloaded the Software from the app marketplaces, you further acknowledge that the app marketplaces have no responsibility for addressing any claims relating to the Software or Services or your possession and/or use of the Software or Services, including, but not limited to: (i) product liability claims; (ii) any claim that the Software or Services fail to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation.",
    },
    {
      title: "Basis of the Bargain",
      body: "YOU ACKNOWLEDGE AND AGREE THAT TALKANGELS HAS OFFERED ITS SOFTWARE AND SERVICES AND SET ITS PRICES IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND THE LIMITATIONS ON LIABILITY SET FORTH HEREIN, THAT THE WARRANTY DISCLAIMERS AND THE LIMITATIONS ON LIABILITY SET FORTH HEREIN REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN YOU AND TALKANGELS AND THAT THE WARRANTY DISCLAIMERS AND THE LIMITATIONS ON LIABILITY SET FORTH HEREIN FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN YOU AND TALKANGELS. TALKANGELS WOULD NOT BE ABLE TO PROVIDE THE SOFTWARE OR SERVICES TO YOU ON AN ECONOMICALLY REASONABLE BASIS WITHOUT THESE LIMITATIONS.",
    },
    {
      title: "Feedback",
      body: "Any comments, suggestions, or feedback relating to the Software or any of the Services (the “Feedback”) submitted to TalkAngels shall become the property of TalkAngels. TalkAngels will have exclusive ownership of all rights to the Feedback. TalkAngels will be entitled to use the Feedback for any commercial or other purpose whatsoever, without any compensation to you or any other person. TalkAngels will not be required to treat any Feedback as confidential. You agree that you do not acquire any right in or to the Software or any of the Services (or any changes, modifications or corrections thereto) by virtue of any Feedback. You acknowledge that you are responsible for whatever material is submitted by you, including its legality, reliability, appropriateness, originality, and copyright.",
    },
    {
      title: "Notices",
      body: "TalkAngels may provide you with notices, including those regarding changes to terms and conditions, by email, or postings on the TalkAngels website. Notice will be deemed given twenty-four (24) hours after email is sent, unless TalkAngels is notified that the email address is invalid. Notice posted on the TalkAngels website is deemed given ten (10) days following the initial posting. TalkAngels reserves the right to determine the form and means of providing notifications to our users.",
    },
    {
      title: "Amendments",
      body: "TalkAngels reserves the right to amend this Terms of Use Agreement at any time by publishing the revised Terms of Use on the TalkAngels website. Your continued use of TalkAngels after the posting of the revised Terms of Use agreement means that you agree to the changes. You are expected to check this webpage (https://www.talkangels.com/) frequently so you are aware of any changes, as they are binding on you.",
    },
    {
      title: "Ability to Contract",
      body: "You hereby affirm that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations and warranties set forth in this Terms of Use/Agreement, and to abide by and comply with the terms and conditions of this Terms of Use.",
    },
    {
      title: "Entire Agreement",
      body: "This term of use represents the entire agreement constitute the entire agreement between you and the TalkAngels Parties regarding TalkAngels Software and its Services and supersedes all earlier and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding TalkAngels Software and its Services. Additional terms may also apply to specific portions, services, or features of TalkAngels. All those additional terms are incorporated by this reference into this agreement.",
    },
    {
      title: "Waiver",
      body: "The failure of TalkAngels to exercise or enforce any right or provision of this Terms of Use will not constitute a waiver of such right or provision. Any waiver of any provision of this Terms of Use will be effective only if in writing and signed by TalkAngels.",
    },
    {
      title: "Headings",
      body: "The heading references herein are for convenience purposes only, do not constitute a part of this Terms of Use, and will not be deemed to limit or affect any of the provisions hereof.",
    },
    {
      title: "Governing Law and Jurisdiction",
      body: "These terms of use are governed by the laws of Australia. Any legal suit, action, or proceeding arising out of, or related to, this agreement or TalkAngels will be instituted exclusively in the federal courts of the INDIA or the courts of the state of DELHI in each case located in the city of DELHI, although we may bring any suit, action, or proceeding against you for breach of this agreement in your country of residence or any other relevant country. You waive all objections to the exercise of jurisdiction over you by those courts and to venue in those courts.",
    },
    {
      title: "Injunctive Relief ",
      body: "You acknowledge that the obligations made hereunder to TalkAngels are of a unique and irreplaceable nature, the loss of which shall irreparably harm TalkAngels and which cannot be replaced by monetary damages alone so that TalkAngels shall be entitled to injunctive or other equitable relief (without the obligations of posting any bond or surety) in the event of any breach or anticipatory breach by you. You irrevocably waive all rights to seek injunctive or other equitable relief. You acknowledge that, with a unique and irreplaceable nature of the obligations under this Agreement undertake to TalkAngels its loss would be irreparable harm TalkAngels, and it cannot be replaced only by monetary damages, so TalkAngels is entitled to injunction or other equitable relief (no obligation). If there is any breach or anticipatory breach, you can post any bond or deposit. You irrevocably waive all rights to seek an injunction or other fair remedy.",
    },
    {
      title: "Third Parties Beneficiaries and Agreement",
      body: "If you download the Software from the app marketplaces, you acknowledge and agree that the app marketplaces are third party beneficiaries of this License Agreement and that after you accept the terms and conditions of these Terms of Use, the app marketplaces will have a three-way beneficiary enforces these Terms of Use (and will be deemed to have accepted the right). You agree to abide that you are using the Software and Services.",
    },
  ];
  
  return (
    <>
      <div className="bg-darkBlue py-7 text-white sticky top-0 left-0">
        <h1 className="text-center font-semibold text-5xl">
          Terms & conditions
        </h1>
      </div>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto mt-10 px-4">
        {data.map((item, i) => (
          <>
            <div>
              <h2 className="text-left font-semibold text-2xl">{item.title}</h2>
              <p className="mt-4 pl-9 text-lg capitalize leading-[35px]">
                {item.body}
              </p>
              <ul className="ml-[50px] text-lg capitalize leading-[35px]">
                {item?.Topic?.map((subtopic, i) => (
                  <li>{subtopic}</li>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
      <div className="bg-darkBlue py-5 mt-10">
        <p className="mt-10 text-lg capitalize leading-[35px] text-center font-semibold text-white">
          You can find the latest version of TalkAngels Privacy Policy at
        </p>
        <Link
          className="text-lg leading-[35px] text-center font-semibold text-Sky w-full block"
          to="/privacy"
        >
          www.talkangels.com/privacy
        </Link>
      </div>
    </>
  );
};

export default TermsConditions;

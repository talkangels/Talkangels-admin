import React, { useState } from "react";
import Header from "./Header";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    // General FAQs
    {
      title: "How do I get started with the app?",
      body: "New users can sign up, complete the onboarding process, and immediately be matched with a friend for a free 3-minute demo call.",
      open: false,
    },
    {
      title: "What should I do if no friends are available?",
      body: "In rare cases where no friends are available, you’ll see an error screen. You can try again later or check for other features in the app.",
      open: false,
    },
    {
      title: "Do I need to complete onboarding to start using the app?",
      body: "Yes, onboarding helps you understand the app’s features and functionality before starting your first call.",
      open: false,
    },
    {
      title: "Are Listeners on TalkAngel App verified?",
      body: "All listeners on the TalkAngel App are 100% verified against their identity. For Indian listeners, verification of the Aadhaar card is done.",
      open: false,
    },
    {
      title: "Is TalkAngel App really Anonymous?",
      body: "TalkAngel App is 100% Anonymous for users. Listeners can never know who they are talking to on the TalkAngel App.",
      open: false,
    },
    {
      title:
        "If TalkAngel App is anonymous then why am I required to signup using my mobile number and OTP?",
      body: "You are required to signup using mobile authentication so that if you mistakenly logout of your app or change your phone, you can easily retrieve your wallet balance and your money is not lost :)",
      open: false,
    },
    {
      title: "Is addiction a disease?",
      body: "Addiction is considered a disease by the medical community. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals.",
      open: false,
    },
    {
      title: "How does addiction impact mental health?",
      body: "Addiction can co-occur with mental health conditions like depression and anxiety. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals.",
      open: false,
    },

    // Calling FAQs
    {
      title: "How can I call a friend?",
      body: "After onboarding do a first recharge and start calling any of the online friends, you can select a friend from the home lobby and start a voice call.",
      open: false,
    },
    {
      title: "Can I choose which friend to call?",
      body: "Yes, you can either call a randomly matched friend or choose a specific friend from the home lobby.",
      open: false,
    },
    {
      title: "What happens if my balance runs out during a call?",
      body: "You can Add More Minutes during the call to extend the conversation without interruption.",
      open: false,
    },
    {
      title: "Will I know when my balance is about to end?",
      body: "Yes, the app will notify you when your balance is low during a call.",
      open: false,
    },

    // Wallet and Gift Pass FAQs
    {
      title: "What is a gift pass?",
      body: "A gift pass is the in-app currency used to pay for calls. 5 gift passes equal 1 minute of talk time.",
      open: false,
    },
    {
      title: "How can I recharge my wallet?",
      body: "Tap on the wallet icon in the top navigation bar and follow the steps to purchase more gift passes.",
      open: false,
    },
    {
      title: "Are there any offers or discounts on gift pass purchases?",
      body: "Occasionally, the app may offer promotions or discounts. Check the wallet section for ongoing offers.",
      open: false,
    },
    {
      title: "Can I refund unused gift passes?",
      body: "No, gift passes are non-refundable but can be used for future calls.",
      open: false,
    },
    {
      title: "What happens if I don’t use my gift passes for a long time?",
      body: "Gift passes don’t expire, so you can use them anytime in the future.",
      open: false,
    },

    // Post-Call FAQs
    {
      title: "Can I rate the friend after a call?",
      body: "Yes, after every call, you’ll see a call summary screen where you can provide a rating for the friend.",
      open: false,
    },
    {
      title: "Can I call the same friend again?",
      body: "Yes, you can revisit the home lobby to call the same friend if they are available.",
      open: false,
    },
    {
      title: "Where can I find my call history?",
      body: "Call history is available in the 'Call History' section from the bottom navigation bar.",
      open: false,
    },
    {
      title: "What should I do if I face technical issues during a call?",
      body: "If you encounter issues, report them through the app's support section at contact@jigri.app or restart the app and try again.",
      open: false,
    },
    {
      title: "Is there a chat feature to communicate with friends?",
      body: "Yes! You can chat anytime with any of your friends. You get 5 free messages after every call you do.",
      open: false,
    },
  ]);

  const [show, setShow] = useState(false);

  const toggleDisclosure = (index) => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
    setShow(true);
  };

  // Reusable section renderer
  const renderFaqSection = (title, start, end) => (
    <div className="mx-auto px-6 py-12 sm:py-32 lg:px-8 lg:py-12 lg:max-w-[85vw]">
      <div>
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
          {title}
        </h2>
        <dl className="mt-5">
          {faqs.slice(start, end).map((faq, idx) => {
            const absoluteIndex = start + idx;
            return (
              <div key={absoluteIndex} className="mb-1">
                <span
                  onClick={() => toggleDisclosure(absoluteIndex)}
                  className="faqtransition flex w-full items-center text-[17px] justify-between text-left text-[#fff] cursor-pointer bg-[hsla(0,0%,100%,.1)] p-4"
                >
                  {faq.title}
                  <span className="ml-6 flex h-7 items-center">
                    {faq.open ? (
                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </span>
                {faq.open && (
                  <dd
                    className={`${show && "show"} mt-1 bg-[hsla(0,0%,100%,.05)] faqtransition`}
                  >
                    <p className="text-[17px] font-medium leading-7 text-white">
                      {faq.body}
                    </p>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );

  return (
    <div className="bg-[#2d2c3a] min-h-svh">
      <Header />
      {renderFaqSection("General FAQs", 0, 8)}
      {renderFaqSection("Calling FAQs", 8, 12)}
      {renderFaqSection("Wallet and Gift Pass FAQs", 12, 17)}
      {renderFaqSection("Post-Call FAQs", 17, 22)}
    </div>
  );
};

export default Faq;

import React, { useState } from "react";
import Header from "./Header";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      title: "What is TalkAngel App?",
      body: "TalkAngel App is an emotional wellness platform where you can freely talk to a listener about your feelings in private over video call. Your identity is hidden and the listener will ensure to make you feel better :)",
      open: false,
    },
    {
      title: "When do people use TalkAngel App?",
      body: "People mostly use TalkAngel App when they are moving through a breakup, a relationship issue, feeling lonely or when they are broken and need emotional support or online counseling. Most people start to feel happier right after 10 minutes of talking on the TalkAngel App :)",
      open: false,
    },
    {
      title: "Who is a Listener?",
      body: "Listeners are people on TalkAngel App who have seen tough times in their lives and can actively listen to your problems and feelings and make you feel better.",
      open: false,
    },
    {
      title: "Are Listeners on TalkAngel App verified?",
      body: "All listeners on the TalkAngel App are 100% verified against their identity. For Indian listeners, verification of the Aadhaar card is done.",
      open: false,
    },

    //

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
      title: "Is TalkAngel App free?",
      body: "TalkAngel App is free to download and use but if you wish to talk to a Listener on the TalkAngel App, you will have to recharge your wallet and use the wallet money to talk to the listeners. You are charged by the minute.",
      open: false,
    },
    {
      title: "Is TalkAngel App a dating app?",
      body: "No, TalkAngel App is an emotional wellness app where you can freely talk to a listener about your feelings in private over chat, call or video call.",
      open: false,
    },
    {
      title: "What are the different types of addiction?",
      body: "Addiction can be to substances like drugs and alcohol or to behaviors like gambling or sex. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals.",
      open: false,
    },
    {
      title: "How can addiction be prevented?",
      body: "Addiction can be prevented through education, early intervention, and healthy coping skills. Listeners on the TalkAngel App have firsthand experience with addiction and offer support to assist you in achieving your full potential.",
      open: false,
    },
    {
      title: "Is addiction a disease?",
      body: "Addiction is considered a disease by the medical community. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals.",
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
    {
      title: "How do I stop being addicted?",
      body: "Overcoming addiction requires seeking professional help, developing a strong support system, committing to a treatment plan, and making lifestyle changes to avoid triggers and maintain sobriety. TalkAngel App connects you with experienced listeners who have overcome addiction and can support you in achieving your goals.",
      open: false,
    },
    {
      title: "What are the 5 symptoms of anxiety?",
      body: "The five symptoms of anxiety are: excessive worrying, restlessness, difficulty concentrating, irritability, and physical symptoms such as sweating, trembling, and palpitations. TalkAngel App offers anxiety support from experienced listeners.",
      open: false,
    },
    {
      title: "Is getting irritated quickly anxiety?",
      body: "Getting irritated quickly can be a symptom of anxiety, but it can also be a symptom of other conditions such as ADHD or bipolar disorder. You can get the perfect advice from the listeners on TalkAngel App.",
      open: false,
    },
    {
      title: "Why is it so difficult to talk to a girl?",
      body: "It can be difficult to talk to a girl due to fear of rejection, low self-esteem, or social anxiety. Practice anonymously with non-judgmental listeners on TalkAngel App.",
      open: false,
    },
    {
      title: "What causes anger?",
      body: "Anger can be caused by a variety of factors, including stress, frustration, fear, and feelings of injustice or unfairness. TalkAngel app's listeners have experienced similar issues and offer great support.",
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

  return (
    <div className="bg-[#2d2c3a] min-h-svh">
      <Header />
      <div className="mx-auto px-6 py-12 sm:py-32 lg:px-8 lg:py-12 lg:max-w-[85vw]">
        <div>
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            About TalkAngel App
          </h2>
          <dl className="mt-5">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-1">
                <span
                  onClick={() => toggleDisclosure(index)}
                  className={`faqtransition flex w-full items-center text-[17px] justify-between text-left text-[#fff] cursor-pointer bg-[hsla(0,0%,100%,.1)] p-4`}
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
                    className={`${
                      show && "show"
                    } mt-1  bg-[hsla(0,0%,100%,.05)] faqtransition`}
                  >
                    <p className="text-[17px] font-medium leading-7 text-white">
                      {faq.body}
                    </p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;

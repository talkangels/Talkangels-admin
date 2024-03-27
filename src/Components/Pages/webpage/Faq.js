import React, { useState } from "react";
import Header from "./Header";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      title: "What is TalkAngel App?",
      body:
        "TalkAngel App is an emotional wellness platform where you can freely talk to a listener about your feelings in private over video call. Your identity is hidden and the listener will ensure to make you feel better :)",
      open: true,
    },
    {
      title: "When do people use TalkAngel App?",
      body:
        "People mostly use TalkAngel App when they are moving through a breakup, a relationship issue, feeling lonely or when they are broken and need emotional support or online counseling. Most people start to feel happier right after 10 minutes of talking on the TalkAngel App :)",
      open: false,
    },
    {
      title: "Who is a Listener?",
      body:
        "Listeners are people on TalkAngel App who have seen tough times in their lives and can actively listen to your problems and feelings and make you feel better.",
      open: false,
    },
    {
      title: "Are Listeners on TalkAngel App verified?",
      body:
        "All listeners on the TalkAngel App are 100% verified against their identity. For Indian listeners, verification of the Aadhaar card is done.",
      open: false,
    },
  ]);

  const toggleDisclosure = (index) => {
    setFaqs(faqs.map((faq, i) => (i === index ? { ...faq, open: !faq.open } : { ...faq, open: false })));
  };

  return (
    <div className="bg-[#2d2c3a] min-h-svh">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            About TalkAngel App
          </h2>
          <dl className="space-y-0 ">
            {faqs.map((faq, index) => (
              <div key={index} className="mt-5 p-2 border-b-2 border-white">
                <dt>
                  <button
                    onClick={() => toggleDisclosure(index)}
                    className="flex w-full items-start justify-between text-left text-[#E4D056]"
                  >
                    <span className="text-base font-semibold leading-7">
                      {faq.title}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {faq.open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </button>
                </dt>
                {faq.open && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-white">
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

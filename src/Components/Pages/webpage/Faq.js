import React, { useState } from "react";
import Header from "./Header";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const Faq = () => {
  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "Clarity App provides a safe and confidential platform for users to openly discuss their emotions with a supportive listener. Through private chats, calls, or video calls, users can freely express themselves, knowing their identity is protected. The listener's main goal is to help users feel better and more supported",
    },
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "Clarity App provides a safe and confidential platform for users to openly discuss their emotions with a supportive listener. Through private chats, calls, or video calls, users can freely express themselves, knowing their identity is protected. The listener's main goal is to help users feel better and more supported",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  console.log("🚀 ~ Faq ~ openIndex:", openIndex);

  const toggleDisclosure = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-[#2d2c3a] min-h-svh">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-0 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <Disclosure
                as="div"
                key={faq.question}
                // open={true}
                onChange={() => toggleDisclosure(index)}
                className="pt-6"
              >
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button
                        className="flex w-full items-start justify-between text-left text-[#E4D056]"
                        onClick={() => {
                          setOpenIndex((prevIndex) =>
                            prevIndex === index ? null : index
                          );
                        }}
                      >
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
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
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-white">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;

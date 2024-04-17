import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutImg from "../../assets/homepage/About.png";

const AboutUs = () => {
  return (
    <>
      <div className=" px-3 bg-[#141425]">
        <Header />
        <div className="xl:max-w-[90%] mx-auto px-3 lg:pt-[110px] ">
          <h2 className="text-white text-2xl font-semibold capitalize font-Popins">
            Talkangels: India's Biggest Emotional Wellness Platform
          </h2>
          <div className="py-4 flex items-center justify-around">
            <div className="max-w-[600px] font-Popins">
              <p className="text-white">
                <span className="text-green">1 out of every 3</span> people in
                the world right now is stressing about something they cannot
                share in public but if given a judgment-free space, they would
                speak their heart out.
              </p>
              <p className="text-white mt-4">
                <span className="text-green text-xl font-medium">
                  Are you one of them?
                </span>
              </p>
              <p className="text-white mt-4 text-[15px]">
                We know you are scared of being judged for your feelings and
                scared of being insulted for your actions. Don't worry, we have
                trained listeners who once felt exactly like you and are ready
                to listen to your concerns and help you out. Clarity App is
                India's biggest emotional wellness platform that provides online
                counseling through non-medical listeners especially trained to
                foster mental wellness. If you want to discuss your feelings
                with an open heart anonymously, Clarity App is the best place
                for you.
              </p>
              <p className="text-white my-4">
                <span className="text-green text-xl font-medium">
                  Let's make your emotional wellness a priority today!
                </span>
              </p>
              <div className="mt-4">
                <h2 className="text-white">
                  Contact Us:
                  <span class="text-base text-[#00e5ff] ml-4">
                    <a href="mailto:talkangels5524@gmail.com">
                      talkangels5524@gmail.com
                    </a>
                  </span>
                  <span class="mt-4 block">
                    Address: 320, Kumkum Residency, Kamrej,
                    Kamrej - 394180, Ta. - Kamrej, Dist. - Surat
                  </span>
                </h2>
              </div>
            </div>
            <div className="max-w-[330px]">
              <img src={AboutImg} alt="" className="w-full" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;

import React, { useEffect, useState } from "react";
import { Routing } from "../../../utils/routing";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "./Shape";
import PlayStore from "../../assets/homepage/Playstoreicon.png";
import AppleStore from "../../assets/homepage/Applestore.png";
import { GetCharges } from "../../services/listener";
import Apk from "../../assets/apk/Talkangels.apk";

const Footer = () => {
  const [charges, setCharges] = useState("");

  const getCharges = async () => {
    const result = await GetCharges();
    if (result?.status === 201) {
      setCharges(result?.data);
    }
  };

  useEffect(() => {
    getCharges();
  }, []);

  return (
    <footer>
      <div className="lg:pt-[110px] xl:max-w-[90%] mx-auto px-3">
        <div className=" flex items-center lg:justify-between justify-center border-b border-white/25 pb-[30px] flex-wrap">
          <div className="lg:w-auto w-full">
            <h2 className="sm:text-[48px] text-[43px] text-white uppercase font-bold lg:text-left text-center">
              TALKANGELS
            </h2>
            <div className="flex items-center gap-6 flex-wrap ml-2 lg:justify-start justify-center lg:mt-0 my-6">
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-x-[67px] lg:w-auto w-full">
            <Link
              to="/refund"
              className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
            >
              Refund & Cancellation
            </Link>
            <Link
              to="/policies"
              className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
            >
              Privacy Policy
            </Link>
            <Link
              to={Routing.Faq}
              className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
            >
              FAQs
            </Link>

            <Link
              to={Routing.About}
              className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
            >
              Contact-Us
            </Link>
            {/* </div> */}
          </div>
        </div>
        <div className="py-11 flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-wrap lg:justify-start justify-center">
            <h2 className="text-white text-[26px] font-medium leading-[37.674px] mr-5">
              Get the App!
            </h2>
            <a href={Apk} download="talkangels">
              <img src={PlayStore} alt="" />
            </a>
            <a
              href={Apk}
              download="talkangels"
              target="_blank"
              className="ml-4"
            >
              <img src={AppleStore} alt="" />
            </a>
          </div>
          <div className="">
            {/* <p className="text-white text-lg lg:text-right text-center font-medium leading-[37.674px]">
              Charges for service is {charges?.call}.00 Rs/Minutes.
            </p> */}
            <Link
              to="mailto:Talkangels5524@Gmail.Com"
              className="text-white text-lg lg:text-right text-center font-medium leading-[37.674px] block w-fit md:ml-auto md:mx-0 mx-auto"
            >
              talkangels5524@gmail.com
            </Link>
            <h2 className="text-white lg:text-right text-center text-lg font-light">
              © Copyright 2024 -{" "}
              <span className="text-Homegreen"> TALKANGELS</span>, All Rights
              Reserved.
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

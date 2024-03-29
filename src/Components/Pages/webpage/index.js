import React from "react";
import { Link } from "react-router-dom";
// Components
import Listenerscard from "./Listenerscard";
// Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// images and icons
import {
  Arrow_Right,
  DoorShape,
  Facebook,
  Instagram,
  Linkedin,
  Smileyemoji,
  Star,
  Twitter,
} from "./Shape";
import User_1 from "../../assets/homepage/Herosection.png";
import Listenersimg_1 from "../../assets/homepage/Listenersimg_1.png";
import Phone from "../../assets/homepage/iPhone-13-Pro-Front.png";
import card from "../../assets/homepage/phonecard.png";
import Speciality_mobile from "../../assets/homepage/SpecialityMobile.png";
import PlayStore from "../../assets/homepage/Playstoreicon.png";
import AppleStore from "../../assets/homepage/Applestore.png";
import Listenersimg_2 from "../../assets/homepage/Listenersimg_2.png";
import Listenersimg_3 from "../../assets/homepage/Listenersimg_3.png";
import Listenersimg_4 from "../../assets/homepage/Listenersimg_4.png";
import Listenersimg_5 from "../../assets/homepage/Listenersimg_5.png";
import Listenersimg_6 from "../../assets/homepage/Listenersimg_6.png";
import Header from "./Header";
import { Routing } from "../../../utils/routing";

const Index = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 1000,
    slide: "div",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    speed: 1300,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
  };

  const Slider2 = {
    infinite: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    speed: 1000,
    slide: "div",
    cssEase: "linear",
    arrows: false,
  };
  return (
    <>
      <div className="bg-Mainbackground_gradint">
        <Header />
        <div className="xl:max-w-[90%] mx-auto px-3">
          <div className="pt-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 xl:items-center items-start justify-between flex-wrap">
              <div className="">
                <h2 className="text-[52px] font-league tracking-wide text-white font-light relative lg:w-fit lg:text-left text-center">
                  The door to
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <DoorShape />
                  </span>
                </h2>
                <h2 className="text-Homegreen lg:text-[64px] text-[58px] lg:justify-start justify-center font-bold mt-5 flex items-center gap-2 flex-wrap">
                  Friendship
                  <span className="h-[69px] w-[87px] block bg-hero_pattern -mt-4"></span>
                  Forever
                </h2>
                <h2 className="text-white lg:text-[100px] text-[60px] lg:text-left text-center font-bold">
                  Unlocked!
                </h2>
                <p className="text-white text-[30px] font-thin lg:max-w-[640px] lg:text-left text-center">
                  Join the exciting journey of meeting new friends within our
                  vibrant community of over one million users!
                </p>
                <div className="flex items-center gap-4 mt-[28px] flex-wrap lg:justify-start justify-center">
                  <Link
                    to="https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                    className="w-[260px] h-[80px] bg-Homegreen text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]"
                    target="_blank"
                  >
                    Get Started{" "}
                    {
                      // eslint-disable-next-line
                      <Arrow_Right />
                    }
                  </Link>
                  <Link
                    to="https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                    className="w-[300px] h-[80px] bg-red text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]"
                    target="_blank"
                  >
                    Download the app{" "}
                    <div className="-rotate-45">
                      {
                        // eslint-disable-next-line
                        <Arrow_Right />
                      }
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative  items-center justify-center lg:order-2 order-1 lg:flex hidden">
                <div className="">
                  <div>
                    <img src={User_1} alt="" className="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[66px] bg-HOmepage mt-[139px] pb-[64px]">
          <h3 className="text-center text-white text-[64px] relative">
            Listeners
            <span className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <DoorShape />
            </span>
          </h3>
          <div className="xl:max-w-[90%] mx-auto px-7 mt-[63px]">
            <div className="grid xxl:grid-cols-4 xxl:gap-x-[52px] gap-x-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20 gap-y-6">
              <Listenerscard img={Listenersimg_4} />
              <Listenerscard img={Listenersimg_5} />
              <Listenerscard img={Listenersimg_6} />
              <Listenerscard img={Listenersimg_5} />
            </div>
            <div className="flex lg:justify-end justify-center">
              <button className="mt-[42px] text-white text-center text-[24px] bg-[#232243] p-4 rounded">
                View More Listeners
              </button>
            </div>
          </div>
        </div>
        <div className="pt-[151px]">
          <div className="xl:max-w-[90%] mx-auto px-3 overflow-x-hidden">
            <div className="flex items-center lg:flex-nowrap flex-wrap lg:justify-start justify-center">
              <div>
                <div className="relative">
                  <img src={Phone} alt="" />
                  <img
                    src={card}
                    alt=""
                    className="absolute top-1/2 -right-[155px] -translate-y-1/2 scale-125"
                  />
                </div>
              </div>
              <div className="xl:w-[70%] w-full lg:ml-[180px] lg:mt-0 mt-10">
                <h3 className="text-center text-white text-[64px] relative xl:-ml-[100px] ml-0">
                  Key Features
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2">
                    <DoorShape />
                  </span>
                </h3>
                <div className="flex items-center justify-center flex-wrap">
                  <div className="mt-[81px] grid md:grid-cols-2 gap-x-[77px] gap-y-[73px]">
                    <div>
                      <div className="flex lg:justify-start justify-center">
                        <Smileyemoji />
                      </div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 lg:text-left text-center">
                        Free Chat
                      </h4>
                      <p className="text-[20px] lg:text-justify text-center text-white max-w-[313px] font-extralight">
                        Product Discovery is vital when you want to conduct
                        thorough target market research and user testing to
                        minimize risk to your product investment.
                      </p>
                    </div>
                    <div>
                      <div className="flex lg:justify-start justify-center">
                        <Smileyemoji />
                      </div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 lg:text-left text-center">
                        Free Chat
                      </h4>
                      <p className="text-[20px] lg:text-justify text-center text-white max-w-[313px] font-extralight">
                        Product Discovery is vital when you want to conduct
                        thorough target market research and user testing to
                        minimize risk to your product investment.
                      </p>
                    </div>
                    <div>
                      <div className="flex lg:justify-start justify-center">
                        <Smileyemoji />
                      </div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 lg:text-left text-center">
                        Free Chat
                      </h4>
                      <p className="text-[20px] lg:text-justify text-center text-white max-w-[313px] font-extralight">
                        Product Discovery is vital when you want to conduct
                        thorough target market research and user testing to
                        minimize risk to your product investment.
                      </p>
                    </div>
                    <div>
                      <div className="flex lg:justify-start justify-center">
                        <Smileyemoji />
                      </div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 lg:text-left text-center">
                        Free Chat
                      </h4>
                      <p className="text-[20px] lg:text-justify text-center text-white max-w-[313px] font-extralight">
                        Product Discovery is vital when you want to conduct
                        thorough target market research and user testing to
                        minimize risk to your product investment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative  pt-[120px] px-3">
          <div className="xl:max-w-[90%] mx-auto ">
            <div className="flex items-center justify-between">
              <div className="lg:max-w-[693px]">
                <h3 className="lg:text-left text-center text-white lg:text-[64px] text-[50px] relative uppercase font-bold ">
                  Our Speciality
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2">
                    <DoorShape />
                  </span>
                </h3>
                <p className="text-[28px] lg:text-justify text-center text-white font-extralight">
                  Welcome to TalkAngel! We're more than just a dating app. Our
                  platform makes it easy for you to find and chat with special
                  people. You can look for love, friendship, or just have a nice
                  chat. Plus, we have a cool feature that lets you recharge and
                  make voice calls to your matches. Your safety and privacy are
                  super important to us too.
                </p>
                <p className="text-[40px] font-[600] text-white mt-[52px] lg:text-left text-center">
                  Join TalkAngel today{" "}
                  <span className="text-Homegreen">
                    to find the one who makes your heart happy.
                  </span>
                </p>
              </div>
              <div className="">
                <img
                  src={Speciality_mobile}
                  alt=""
                  className="absolute top-0 right-0 Speciality"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative  lg:pt-[178px] pt-[100px] px-7" id="Slider-1">
          <Slider {...settings}>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_2}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_3}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_4}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_5}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_6}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_4}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_2}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="lg:w-[70%] mx-auto lg:mt-0">
          <Slider {...Slider2} className="">
            <div>
              <h3 className="text-Homegreen text-[215px] text-center">”</h3>
              <p className="text-center text-[32px] font-extralight text-white -mt-[150px] px-3">
                “During Product Discovery, Startup House helped me to understand
                the lean start-up way of product development with initial
                research, discovery workshops and many hours of discussion and
                iteration.”
              </p>
              <div className="flex items-center justify-center gap-x-3 mt-7">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className="flex items-center justify-center mt-7">
                <div className="w-20 h-20 rounded-full border border-Homegreen overflow-hidden">
                  <img
                    src={Listenersimg_1}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="uppercase text-white font-Popins font-bold tracking-[1px]">
                    meera v.
                  </h3>
                  <p className="font-thin tracking-[0.5px] text-white/70 text-xs font-league">
                    CEO @codewidget
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-Homegreen text-[215px] text-center">”</h3>
              <p className="text-center text-[32px] font-extralight text-white -mt-[150px] px-3">
                “During Product Discovery, Startup House helped me to understand
                the lean start-up way of product development with initial
                research, discovery workshops and many hours of discussion and
                iteration.”
              </p>
              <div className="flex items-center justify-center gap-x-3 mt-7">
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className="flex items-center justify-center mt-7">
                <div className="w-20 h-20 rounded-full border border-Homegreen overflow-hidden">
                  <img
                    src={Listenersimg_1}
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="uppercase text-white font-Popins font-bold tracking-[1px]">
                    meera v.
                  </h3>
                  <p className="font-thin tracking-[0.5px] text-white/70 text-xs font-league">
                    CEO @codewidget
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="BottomShape mt-24 pt-[111px] pb-[190px] relative">
          <div className="xl:max-w-[80%] mx-auto px-3">
            <div>
              <h2 className="lg:text-left text-center md:text-[50px] text-[45px] font-semibold text-white flex flex-wrap md:justify-start justify-center">
                Your happily
                <span className="uppercase ml-2 lg:static block">
                  ever after
                </span>
              </h2>
              <h2 className="lg:text-end text-center md:text-[68px] text-[47px] font-semibold text-white uppercase lg:max-w-[556px] relative">
                with Talkangel!
              </h2>
              <p className="lg:text-left text-center text-[30px] text-white font-thin lg:max-w-[630px] mt-2">
                Join the exciting journey of meeting new friends within our
                vibrant community of over one million users!
              </p>
              <div className="flex items-center gap-4 mt-[28px] flex-wrap lg:justify-start justify-center">
                <Link
                  to="https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                  className="w-[260px] h-[80px] bg-Homegreen text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]"
                  target="_blank"
                >
                  Get Started{" "}
                  {
                    // eslint-disable-next-line
                    <Arrow_Right />
                  }
                </Link>
                <Link
                  to="https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                  className="w-[300px] h-[80px] bg-red text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]"
                  target="_blank"
                >
                  Download the app{" "}
                  <div className="-rotate-45">
                    {
                      // eslint-disable-next-line
                      <Arrow_Right />
                    }
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <img
            src={Phone}
            alt=""
            className="lg:absolute top-[79px] xl:right-[150px] right-7 lg:mt-0 mt-10 mx-auto px-7"
          />
        </div>
        <footer>
          <div className="lg:pt-[110px] xl:max-w-[90%] mx-auto px-3">
            <div className=" flex items-center lg:justify-between justify-center border-b border-white/25 pb-[112px] flex-wrap">
              <div className="lg:w-auto w-full">
                <h2 className="text-[48px] text-white uppercase font-bold lg:text-left text-center">
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
                <div className="flex flex-col gap-y-5">
                  <h2 className="text-white lg:text-right text-center text-[26px] font-medium underline tracking-[0.52px]">
                    About Us
                  </h2>
                  <Link
                    to="/privacy"
                    className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/"
                    className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
                  >
                    Refund & Cancellation
                  </Link>
                  <Link
                    to="/tnc"
                    className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
                  >
                    Terms & Conditions
                  </Link>
                </div>
                <div className="flex flex-col gap-y-5 lg:mt-0 mt-5">
                  <h2 className="text-white lg:text-right text-center text-[26px] font-medium underline tracking-[0.52px]">
                    Support
                  </h2>
                  <Link
                    to="/"
                    className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/"
                    className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
                  >
                    Guidelines
                  </Link>
                  <Link
                    to={Routing.Faq}
                    className="text-white lg:text-right text-center text-[18px] font-extralight tracking-[0.36px]"
                  >
                    FAQs
                  </Link>
                </div>
              </div>
            </div>
            <div className="py-11 flex items-center justify-between flex-wrap">
              <div className="flex items-center flex-wrap lg:justify-start justify-center">
                <h2 className="text-white text-[26px] font-medium leading-[37.674px] mr-5">
                  Get the App!
                </h2>
                <Link to="https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                  target="_blank">
                  <img src={PlayStore} alt="" />
                </Link>
                <Link to="https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                  target="_blank" className="ml-4">
                  <img src={AppleStore} alt="" />
                </Link>
              </div>
              <div className="">
                <Link
                  to="mailto:info@talkangels.com"
                  className="text-white text-lg lg:text-right text-center font-medium leading-[37.674px] block w-fit md:ml-auto md:mx-0 mx-auto"
                >
                  info@talkangels.com
                </Link>
                <h2 className="text-white lg:text-right text-center text-lg font-light">
                  © Copyright 2024 -{" "}
                  <span className="text-Homegreen"> TALKANGELS</span>, All
                  Rights Reserved.
                </h2>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;

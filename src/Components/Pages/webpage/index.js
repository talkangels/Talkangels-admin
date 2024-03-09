import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../assets/Webpagelogo.png";
import { Arrow_Right, DoorShape, Smileyemoji } from "./Shape";
import User_1 from "../../assets/homepage/Herosection.png";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Listenerscard from "./Listenerscard";
import Listenersimg_1 from "../../assets/homepage/Listenersimg_1.png";
import Phone from "../../assets/homepage/iPhone-13-Pro-Front.png";
import card from "../../assets/homepage/phonecard.png";
import Speciality_mobile from "../../assets/homepage/SpecialityMobile.png";
import Slider from "react-slick";

const Index = () => {
  const Router = [
    {
      Name: "Home",
      link: "",
    },
    {
      Name: "Listeners",
      link: "",
    },
    {
      Name: "Blog",
      link: "",
    },
    {
      Name: "FAQs",
      link: "",
    },
    {
      Name: "Intern",
      link: "",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    speed: 1000,
    slide: "div",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
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
  };
  const Slider2 = {
    dots: false,
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
        <Disclosure as="nav" className="bg-transparent">
          {({ open }) => (
            <>
              <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex-shrink-0">
                      <img className="h-8 w-auto" src={Logo} alt="Logo" />
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4 items-center">
                        {Router.map((routing, i) => (
                          <>
                            <a
                              href={routing.link}
                              className="text-lg text-white font-league font-light"
                            >
                              {routing.Name}
                            </a>
                          </>
                        ))}
                        <button className="border rounded-full w-[100px] h-[40px] text-white">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="-mr-2 flex sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pb-3 pt-2">
                  {Router.map((routing, i) => (
                    <>
                      <Disclosure.Button
                        as="a"
                        href={routing.link}
                        className="block text-lg text-white font-league font-light mt-3"
                      >
                        {routing.Name}
                      </Disclosure.Button>
                    </>
                  ))}
                  <button className="border rounded mt-5 w-full h-[40px] text-white">
                    Download
                  </button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className="xl:max-w-[90%] mx-auto px-7">
          <div className="pt-20">
            <div className="grid lg:grid-cols-2 xl:items-center items-start justify-between flex-wrap">
              <div className="">
                <h2 className="text-[52px] font-league tracking-wide text-white font-light relative md:w-fit md:text-left text-center">
                  The door to
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2">
                    <DoorShape />
                  </span>
                </h2>
                <h2 className="text-Homegreen text-[64px] font-bold mt-5 flex items-center gap-2 flex-wrap">
                  Friendship
                  <span className="h-[69px] w-[87px] block bg-hero_pattern -mt-4"></span>
                  Forever
                </h2>
                <h2 className="text-white md:text-[100px] text-[60px] md:text-left text-center font-bold">
                  Unlocked!
                </h2>
                <p className="text-white text-[30px] font-thin max-w-[640px] md:text-left text-center">
                  Join the exciting journey of meeting new friends within our
                  vibrant community of over one million users!
                </p>
                <div className="flex items-center gap-4 mt-[28px] flex-wrap md:justify-start justify-center">
                  <button className="px-[35px]  py-[15px] bg-Homegreen text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]">
                    Get Started <Arrow_Right />
                  </button>
                  <button className="px-[35px]  py-[15px] bg-red text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]">
                    Download the app <Arrow_Right />
                  </button>
                </div>
              </div>
              <div className="relative  items-center justify-center lg:order-2 order-1 md:flex hidden">
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
            <span class="absolute bottom-5 left-1/2 -translate-x-1/2">
              <DoorShape />
            </span>
          </h3>
          <div className="xl:max-w-[90%] mx-auto px-7 mt-[63px]">
            <div className="grid xl:grid-cols-4 gap-x-[52px] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-20 gap-y-6">
              <Listenerscard img={Listenersimg_1} />
              <Listenerscard img={Listenersimg_1} />
              <Listenerscard img={Listenersimg_1} />
              <Listenerscard img={Listenersimg_1} />
            </div>
            <div className="flex md:justify-end justify-center">
              <button className="mt-[42px] text-white text-center text-[24px] bg-[#232243] p-4 rounded">
                View More Listeners
              </button>
            </div>
          </div>
        </div>
        <div className="pt-[151px]">
          <div className="xl:max-w-[90%] mx-auto px-7 overflow-x-hidden">
            <div className="flex items-center lg:flex-nowrap flex-wrap md:justify-start justify-center">
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
              <div className="xl:w-[70%] xl:ml-[180px] md:mt-0 mt-10">
                <h3 className="text-center text-white text-[64px] relative">
                  Key Features
                  <span class="absolute bottom-5 left-1/2 -translate-x-1/2">
                    <DoorShape />
                  </span>
                </h3>
                <div className="flex items-center justify-center flex-wrap">
                  <div className="mt-[81px] grid md:grid-cols-2 gap-x-[77px] gap-y-[73px]">
                    <div>
                      <div className="flex md:justify-start justify-center">
                        <Smileyemoji />
                      </div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 md:text-left text-center">
                        Free Chat
                      </h4>
                      <p className="text-[20px] md:text-justify text-center text-white max-w-[313px] font-extralight">
                        Product Discovery is vital when you want to conduct
                        thorough target market research and user testing to
                        minimize risk to your product investment.
                      </p>
                    </div>
                    <div>
                      <div className="flex md:justify-start justify-center">
                        <Smileyemoji />
                      </div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 md:text-left text-center">
                        Free Chat
                      </h4>
                      <p className="text-[20px] md:text-justify text-center text-white max-w-[313px] font-extralight">
                        Product Discovery is vital when you want to conduct
                        thorough target market research and user testing to
                        minimize risk to your product investment.
                      </p>
                    </div>
                    <div>
                      <div className="flex md:justify-start justify-center">
                        <Smileyemoji />
                      </div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 md:text-left text-center">
                        Free Chat
                      </h4>
                      <p className="text-[20px] md:text-justify text-center text-white max-w-[313px] font-extralight">
                        Product Discovery is vital when you want to conduct
                        thorough target market research and user testing to
                        minimize risk to your product investment.
                      </p>
                    </div>
                    <div>
                      <div className="flex md:justify-start justify-center">
                        <Smileyemoji />
                      </div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 md:text-left text-center">
                        Free Chat
                      </h4>
                      <p className="text-[20px] md:text-justify text-center text-white max-w-[313px] font-extralight">
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
        <div className="relative  pt-[120px] px-7">
          <div className="xl:max-w-[90%] mx-auto ">
            <div className="flex items-center justify-between">
              <div className="max-w-[693px]">
                <h3 className="text-left text-white text-[64px] relative uppercase font-bold">
                  Our Speciality
                  <span class="absolute bottom-5 left-1/2 -translate-x-1/2">
                    <DoorShape />
                  </span>
                </h3>
                <p className="text-[28px] md:text-justify text-center text-white font-extralight">
                  Welcome to TalkAngel! We're more than just a dating app. Our
                  platform makes it easy for you to find and chat with special
                  people. You can look for love, friendship, or just have a nice
                  chat. Plus, we have a cool feature that lets you recharge and
                  make voice calls to your matches. Your safety and privacy are
                  super important to us too.
                </p>
                <p className="text-[40px] font-[600] text-white mt-[52px]">
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
        <div className="relative  pt-[178px] px-7" id="Slider-1">
          <Slider {...settings}>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_1}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_1}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_1}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_1}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_1}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_1}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
            <div className="h-[250px] rounded-[35px] overflow-hidden">
              <img
                src={Listenersimg_1}
                className="w-full h-full object-cover object-top"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="md:w-[70%] md:ml-[180px] md:mt-0">
          <Slider {...Slider2}>
            <div>
              <h3 className="text-Homegreen text-[215px] text-center">”</h3>
              <p className="text-center text-[32px] font-light text-white -mt-[150px]">
                “During Product Discovery, Startup House helped me to understand
                the lean start-up way of product development with initial
                research, discovery workshops and many hours of discussion and
                iteration.”
              </p>
            </div>
            <div>
              <h3 className="text-Homegreen text-[215px] text-center">”</h3>
              <p className="text-center text-[32px] font-light text-white -mt-[150px]">
                “During Product Discovery, Startup House helped me to understand
                the lean start-up way of product development with initial
                research, discovery workshops and many hours of discussion and
                iteration.”
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Index;

import React from "react";
import { Link } from "react-router-dom";
// Components
import Listenerscard from "./Listenerscard";
// Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// images and icons
import { ArrowRight, DoorShape, Star } from "./Shape";
import User_1 from "../../assets/homepage/Herosection.png";
import User_2 from "../../assets/homepage/Herosection2.png";
import User_3 from "../../assets/homepage/Herosection3.png";
import User_4 from "../../assets/homepage/Herosection4.png";
import Listenersimg_1 from "../../assets/homepage/Listenersimg_1.png";
import Phone from "../../assets/homepage/iPhone-13-Pro-Front.png";
import card from "../../assets/homepage/phonecard.png";
import Speciality_mobile from "../../assets/homepage/SpecialityMobile.png";
import Listenersimg_2 from "../../assets/homepage/Listenersimg_1.png";
import Header from "./Header";
import Footer from "./Footer";

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
          <div>
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
                    to={
                      "https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                    }
                    className="w-[260px] h-[80px] bg-Homegreen text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]"
                  >
                    Get Started <ArrowRight />
                  </Link>
                  <Link
                    to={
                      "https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                    }
                    className="w-[300px] h-[80px] bg-red text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]"
                    target="_blank"
                  >
                    Download the app{" "}
                    <div className="-rotate-45">
                      <ArrowRight />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="relative  items-center justify-center lg:order-2 order-1 lg:flex hidden">
                <div className="">
                  <div className="imagesContainer">
                    <img src={User_1} alt="" className="" />
                    <img src={User_2} alt="" className="" />
                    <img src={User_3} alt="" className="" />
                    <img src={User_4} alt="" className="" />
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
              <Listenerscard
                img={
                  "https://img.freepik.com/free-photo/smiling-young-beautiful-girl-looking-straight-ahead-wearing-white-t-shirt-isolated-pink_141793-86537.jpg"
                }
                name={"Riya"}
                Year={30}
                Experience={2}
                content={
                  "I started dating a guy when I was young it went on for 4 long years. Since the beginning of the relationship, I found myself to be begging for attention & time but he put no effort at all. Also, he wouldn't talk to me for days which make me panic. During the first 2 years, when I felt like things were getting hard, I portrayed my frustration by saying that I wanted to break up but he always assured me that things would be fine & he is in love with me. But soon, he started taking me for granted & blackmailed me that he would leave me and blame me for everything that went wrong. Finally, I broke up with him. It wasn't easy but I healed myself & now I want to help you."
                }
              />
              <Listenerscard
                img={
                  "https://i.pinimg.com/736x/23/76/b6/2376b6619630266ab3de14ae52897d39.jpg"
                }
                name={"Shivani"}
                Year={22}
                Experience={1.4}
                content={
                  "About 5 years ago, I met a guy. He proposed to me and I accepted the proposal. Initially, the relationship went in a very smooth way. Gradually, it became toxic. He started tracking my life like a spy. There was no personal space for me. If I wanted to do something, first I had to tell him and wait for his approval. He became extremely possessive with time, even he blocked all my male friends from my phone and told me not to talk to anyone of them. I was depressed as hell. One day, I gathered myself and told my friends everything that I felt in those 3 years and I finally, broke up with him. That day I felt like I got out of 3-year imprisonment. Let's connect if you want to share something."
                }
              />
              <Listenerscard
                img={Listenersimg_2}
                name={"Anuradha"}
                Year={34}
                Experience={1}
                content={
                  "I personally suffered from loneliness and anxiety. The journey was tough but I gradually recovered with self-love and detachment from the people who were adding negative thoughts to my life. I have even faced work and family pressure. But somehow I learned to manage both by letting go of overthinking and negative thoughts. Now I want to help others by sharing my experience of recovery and making their lives easier to live. I believe in spiritual, physical, and mental well-being and this has helped me to inculcate positive aspects into my life. Let's connect if you want to share something or want to vent. I will listen to you without any judgments."
                }
              />
              <Listenerscard
                img={
                  "https://s3-alpha-sig.figma.com/img/5aa8/8d8b/3ecb686354f0b5f4593699440b46ec24?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpxtVhGblAGCHgwjSiPV586t97TAkflGB~jiVJHynNy~tTZRDRmwY9iHv4fPYj4hIQaPFefBp9jexwrj53yIGPE08mvoY9a~GIsySxtBuo0owGu~eM5lhe8esypUb1ED4g7TYg3jOlPBWWyAeaxkfg17vvbS4Yt-Tr4x~7bGd3mOqYZ9iwYRn5dAHVo1kM-cKpLXdB47j5Q1qOUeuBvNSQNHTk81AV27b2oEMvIEZwzoIVznZyaCpxj0tT4PLAPvYluAsTaPJ8hE7ar9BAKVkKUuj3zekuT6ILm66j7lhuwLTCBx-Rr6qkyNMQYGQ6vtH3KN3aQHwFZ2OAC7QaPCDA__"
                }
                name={"Neetesh"}
                Year={23}
                Experience={0.5}
                content={
                  "Due to poor guidance and peer pressure, I took up biology as my major in 10th. Although I never wanted to become a doctor, Indians have this mindset that any biology student should only become a doctor. It was difficult to convince my family & they asked me to give it a try, I felt depressed. I took counseling and decided to give ICAR exam. I got placed in a nice college but when I met the people there I realized I couldn't connect with them. They always spoke with only cuss words, which I didn't like. I felt very lonely but I had no other option, over time I have made a few friends and it's better now. I hope I can be your shoulder to cry on and help you through your problems."
                }
              />
            </div>
            <div className="flex lg:justify-end justify-center">
              <Link
                to="/listeners"
                className="mt-[42px] text-white text-center text-[24px] bg-[#232243] p-4 rounded"
              >
                View More Listeners
              </Link>
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
              <div className="md:w-[60%] w-full lg:ml-auto lg:mt-0 mt-10">
                <h3 className="text-center text-white text-[64px] relative xl:-ml-[100px] ml-0">
                  Key Features
                  <span className="absolute bottom-5 left-1/2 -translate-x-1/2">
                    <DoorShape />
                  </span>
                </h3>
                <div className="flex items-center justify-center flex-wrap">
                  <div className="mt-[81px] grid md:grid-cols-2 gap-x-[50px] gap-y-[73px]">
                    <div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 lg:text-left text-center">
                        Empathetic Support and Solutions, Without Professional
                        Counseling
                      </h4>
                      <p className="text-[20px] lg:text-justify text-center text-white font-extralight">
                        Talkangel App in an emotional wellness app where you can
                        speak with empathetic listeners who can help you find
                        solutions to your problems and relief over your
                        concerns. However, the way to get advice or help on
                        Talkangel App is very different from counselling and we
                        do not provide any form of professional counselling.
                      </p>
                    </div>

                    <div>
                      <div className="flex lg:justify-start justify-center"></div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 lg:text-left text-center">
                        Listeners Choose Between Real or Masked Names for Safety
                      </h4>
                      <p className="text-[20px] lg:text-justify text-center text-white font-extralight">
                        If a listener is comfortable sharing his/her name
                        publicly then his/her name would be real otherwise we
                        allow listeners to use a masked name to keep their
                        identity safe online. give me title of that
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 lg:text-left text-center">
                        Our Listener?
                      </h4>
                      <p className="text-[20px] lg:text-justify text-center text-white font-extralight">
                        Listeners are people on TALKANGELS App who have seen
                        tough times in their lives and can actively listen to
                        your problems and feelings and make you feel better.
                      </p>
                    </div>
                    <div>
                      <div className="flex lg:justify-start justify-center"></div>
                      <h4 className="text-white text-[32px] font-semibold mt-5 lg:text-left text-center">
                        Ensuring 100% User Anonymous
                      </h4>
                      <p className="text-[20px] lg:text-justify text-center text-white font-extralight">
                        Talkangel App is 100% Anonymous for users. Listeners can
                        never know who they are talking to on the Talkangel App.
                      </p>
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
                    people. You can look for love, friendship, or just have a
                    nice chat. Plus, we have a cool feature that lets you
                    recharge and make voice calls to your matches. Your safety
                    and privacy are super important to us too.
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
          <div
            className="relative  lg:pt-[178px] pt-[100px] px-7"
            id="Slider-1"
          >
            <Slider {...settings}>
              <div className="h-[250px] rounded-[35px] overflow-hidden">
                <img
                  src={Listenersimg_2}
                  className="w-full h-full object-cover "
                  alt=""
                />
              </div>
              <div className="h-[250px] rounded-[35px] overflow-hidden">
                <img
                  src={
                    "https://s3-alpha-sig.figma.com/img/5aa8/8d8b/3ecb686354f0b5f4593699440b46ec24?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpxtVhGblAGCHgwjSiPV586t97TAkflGB~jiVJHynNy~tTZRDRmwY9iHv4fPYj4hIQaPFefBp9jexwrj53yIGPE08mvoY9a~GIsySxtBuo0owGu~eM5lhe8esypUb1ED4g7TYg3jOlPBWWyAeaxkfg17vvbS4Yt-Tr4x~7bGd3mOqYZ9iwYRn5dAHVo1kM-cKpLXdB47j5Q1qOUeuBvNSQNHTk81AV27b2oEMvIEZwzoIVznZyaCpxj0tT4PLAPvYluAsTaPJ8hE7ar9BAKVkKUuj3zekuT6ILm66j7lhuwLTCBx-Rr6qkyNMQYGQ6vtH3KN3aQHwFZ2OAC7QaPCDA__"
                  }
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-[250px] rounded-[35px] overflow-hidden">
                <img
                  src={
                    "https://i.pinimg.com/736x/23/76/b6/2376b6619630266ab3de14ae52897d39.jpg"
                  }
                  className="w-full h-full object-cover object-top"
                  alt=""
                />
              </div>
              <div className="h-[250px] rounded-[35px] overflow-hidden">
                <img
                  src={
                    "https://img.freepik.com/free-photo/smiling-young-beautiful-girl-looking-straight-ahead-wearing-white-t-shirt-isolated-pink_141793-86537.jpg"
                  }
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-[250px] rounded-[35px] overflow-hidden">
                <img
                  src={
                    "https://avatars.mds.yandex.net/i?id=320423d984ab91d480a88de13a54e8a17215460f-12159448-images-thumbs&n=13"
                  }
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-[250px] rounded-[35px] overflow-hidden">
                <img
                  src={
                    "https://avatars.mds.yandex.net/i?id=2ac87f014a26f48e7928adfb6b56333f787c5f1b-10449875-images-thumbs&n=13"
                  }
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-[250px] rounded-[35px] overflow-hidden">
                <img
                  src={
                    "https://yandex-images.clstorage.net/S5Cj6a129/9bd1fbnBE0w6/c5fcvOYdxn2LRujK8D1GlhLQQWctQ6BVsNRQD143ASF6CVT6XTkKRLUBvIlYj7hCnBdRbiQE_vK99KVYUJZYfzejHQ0C7WZti3Y4W0CtNiaS1cU27iWi1-cnt2w5wBaz_rkBTw1964EAoV8qvLqudenzBpmAB4j1rpECPJWjHhiyBNwdEtx2np72GIiSXLciYGLwwl-1wjSkdpTMWNL3UL9L0q2_vO0CAJD-yEsoDnVKUtbJAfXKlD-DQJx1oj2oQ6Uf_oJdR15Nt1qJIh11sLMBkDENlgJltXTH7UrT9KM96BL9Lzwd86IzDpuqaJ2UijH2KFN1GQTt0sE9Z6DNKnCFvV6DfrQP_LboyXLctZKBYWCi7xQS1Kdm1N0pQSYRf0mSDm2vbbOTQZ15mpo_tYswRpujRNvnXtHTPbSSDmnwJz8PUi43b-3F-qqzXdSDgCCA8w10QrWlhWXNi6FVQb06It_NX3wD8wKsW4v4f8UZsdQL8zXZRP8isp9E4h_qcjaPH3AeVU6N5toYA-w0QcLCUxDNdJJ0VSYGH9gzdKF-iTHOPK19cXAR3ovKmo_l6RAFK9MWarY94GF9d_P9azBXfg2RroWcT0fLeIIsNUIw0EEgfJSR5rSFJ1_JkBTTDIhx3X2-fQCiEwwp-srNFPuR1wuCFhk3reDzPRfAb0izdb_No6_1rl4Ga5uzLodgkALCkpzFUOel9PYeG_J0Ej-JIL-P7F9xEjPMaZj5PgcZIkTZcVXJ17-Q4k3FgU-Z8vVuv3DMlQ799AvII15X01AS82EPhADVZfb1fBmC1lAdq5H_Xh6uc5Diris6WB_VGDJV2kBnG8WMwjJv1YM-SBH138zSb4R8rMYo-ZM9NoHDM0FBv_cSBWcVxT1KcMSCLnhj3k_MDiJgkr7KKcs_dspBNOtzVbk1TMBiLabzH5sipU99oc_kLY6XyPoiTIRQUkKysf5WsJUVVcauQ"
                  }
                  className="w-full h-full object-cover "
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
                  “During Product Discovery, Startup House helped me to
                  understand the lean start-up way of product development with
                  initial research, discovery workshops and many hours of
                  discussion and iteration.”
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
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="uppercase text-white font-Popins font-bold tracking-[1px]">
                      meera v.
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-Homegreen text-[215px] text-center">”</h3>
                <p className="text-center text-[32px] font-extralight text-white -mt-[150px] px-3">
                  "It is really a great app. recommended to all those who are
                  facing stress, depression or any other types of difficulties
                  in their life. the experts are reallyg good. They are really
                  good listener as well as consultation. one more thing that I
                  like about the app is that both in the morning as well as in
                  the night the send motivation messages which is really sweet"
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
                      src={
                        "https://yandex-images.clstorage.net/S5Cj6a129/9bd1fbnBE0w6/c5fcvOYdxn2LRujK8D1GlhLQQWctQ6BVsNRQD143ASF6CVT6XTkKRLUBvIlYj7hCnBdRbiQE_vK99KVYUJZYfzejHQ0C7WZti3Y4W0CtNiaS1cU27iWi1-cnt2w5wBaz_rkBTw1964EAoV8qvLqudenzBpmAB4j1rpECPJWjHhiyBNwdEtx2np72GIiSXLciYGLwwl-1wjSkdpTMWNL3UL9L0q2_vO0CAJD-yEsoDnVKUtbJAfXKlD-DQJx1oj2oQ6Uf_oJdR15Nt1qJIh11sLMBkDENlgJltXTH7UrT9KM96BL9Lzwd86IzDpuqaJ2UijH2KFN1GQTt0sE9Z6DNKnCFvV6DfrQP_LboyXLctZKBYWCi7xQS1Kdm1N0pQSYRf0mSDm2vbbOTQZ15mpo_tYswRpujRNvnXtHTPbSSDmnwJz8PUi43b-3F-qqzXdSDgCCA8w10QrWlhWXNi6FVQb06It_NX3wD8wKsW4v4f8UZsdQL8zXZRP8isp9E4h_qcjaPH3AeVU6N5toYA-w0QcLCUxDNdJJ0VSYGH9gzdKF-iTHOPK19cXAR3ovKmo_l6RAFK9MWarY94GF9d_P9azBXfg2RroWcT0fLeIIsNUIw0EEgfJSR5rSFJ1_JkBTTDIhx3X2-fQCiEwwp-srNFPuR1wuCFhk3reDzPRfAb0izdb_No6_1rl4Ga5uzLodgkALCkpzFUOel9PYeG_J0Ej-JIL-P7F9xEjPMaZj5PgcZIkTZcVXJ17-Q4k3FgU-Z8vVuv3DMlQ799AvII15X01AS82EPhADVZfb1fBmC1lAdq5H_Xh6uc5Diris6WB_VGDJV2kBnG8WMwjJv1YM-SBH138zSb4R8rMYo-ZM9NoHDM0FBv_cSBWcVxT1KcMSCLnhj3k_MDiJgkr7KKcs_dspBNOtzVbk1TMBiLabzH5sipU99oc_kLY6XyPoiTIRQUkKysf5WsJUVVcauQ"
                      }
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="uppercase text-white font-Popins font-bold tracking-[1px]">
                      Anushka S.
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-Homegreen text-[215px] text-center">”</h3>
                <p className="text-center text-[32px] font-extralight text-white -mt-[150px] px-3">
                  "An extremely helpful aap, talkangels can be of tremendous
                  assistance to those who are struggling with stress, anxiety,
                  and despair. It's a useful tool for people who have recently
                  lost someone and are trying to move on as well. The software
                  provides a diverse array of features that are all conveniently
                  placed in one location, including heat maps, session
                  recordings, user metrics, and a sophisticated dashboard. In
                  light of my experience, I heartily endorse talkangels and
                  considers it as an amazing app."
                </p>
                <div className="flex items-center justify-center gap-x-3 mt-7">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="flex items-center justify-center mt-7">
                  <div className="w-20 h-20 rounded-full border border-Homegreen overflow-hidden">
                    <img
                      src={
                        "https://avatars.mds.yandex.net/i?id=2ac87f014a26f48e7928adfb6b56333f787c5f1b-10449875-images-thumbs&n=13"
                      }
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="uppercase text-white font-Popins font-bold tracking-[1px]">
                      Rita L.
                    </h3>
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
                    to={
                      "https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                    }
                    className="w-[260px] h-[80px] bg-Homegreen text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]"
                    target="_blank"
                  >
                    Get Started{" "}
                    {
                      // eslint-disable-next-line
                      <ArrowRight />
                    }
                  </Link>
                  <Link
                    to={
                      "https://drive.google.com/drive/folders/1qNcOt1_XvBbBvmOSH1eTr0DZxljcGm4S"
                    }
                    className="w-[300px] h-[80px] bg-red text-[28px] text-white rounded-full flex items-center justify-center gap-[34px]"
                    target="_blank"
                  >
                    Download the app{" "}
                    <div className="-rotate-45">
                      {
                        // eslint-disable-next-line
                        <ArrowRight />
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;

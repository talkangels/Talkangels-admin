import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Blog = () => {
  const Blogcard = [
    {
      image: "https://clarityapp.in/img/blog/blogThumbnails/blog1.webp",
      title: "3 Main Problems In A Long Distance Relationship",
      BodyText:
        " I am two years into a long distance relationship with my boyfriend and it started with apprehension.They say, long distance does not work. We were ready ...",
    },
    {
      image: "https://clarityapp.in/img/blog/blogThumbnails/blog2.webp",
      title: "5 Things to Do To Forget Your Ex",
      BodyText:
        "I scanned my room from left to right - all remnants of our relationship- the teddy he gifted me on Valentine’s day, the t-shirt I once borrowed from him ...",
    },
    {
      image: "https://clarityapp.in/img/blog/blogThumbnails/blog3.webp",
      title: "5 Things To Do When You Are Feeling Lonely",
      BodyText:
        "A few days ago I met a friend after long and there was so much to catch up with her. Most post-pandemic conversations with friends revolve around mental ...",
    },
    {
      image: "https://clarityapp.in/img/blog/blogThumbnails/blog4.webp",
      title: "How To Cope Up With A Terrible Breakup? ",
      BodyText:
        "I met Annie when I was going through the toughest phase of my life. I had just come out of a relationship. After months of going on and off break in that ...",
    },
    {
      image: "https://clarityapp.in/img/blog/blogThumbnails/blog5.webp",
      title: "How to Move On Over a Breakup?",
      BodyText:
        "Ashok and I were childhood sweethearts. We were together in the most formative years of our lives. He had known when I had my first period. I had known ...",
    },
    {
      image: "https://clarityapp.in/img/blog/blogThumbnails/blog6.webp",
      title: "Is it OKAY or healthy to be friends with your Ex?",
      BodyText:
        "My friend, Kritika has the most bizarre ways to find answers to questions. Of late, her ex-boyfriend was her new obsession and she curiously interviewed ...",
    },
  ];

  return (
    <>
      <div className="bg-Background_gradint">
        <Header />
        <div className="xl:max-w-[90%] mx-auto px-3">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {Blogcard.map((card, i) => (
              <div className="bg-Gray/15 rounded-lg overflow-hidden" key={i}>
                <div>
                  <img src={card.image} alt="" className="rounded-b-lg" />
                </div>
                <div className="font-Popins pb-2">
                  <h3 className="text-[22px] font-medium text-white p-3 md:my-3 md:mt-0 mt-3">
                    {card.title}
                  </h3>
                  <p className="text-[15px] font-medium text-[#d3d3d3] p-3">
                    {card.BodyText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;

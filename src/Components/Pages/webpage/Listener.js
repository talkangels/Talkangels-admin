import React, { useEffect, useState } from "react";
import Header from "./Header";
import Listenerscard from "./Listenerscard";
import { GetWebPageListener } from "../../services/webPage";
import Listenersimg_2 from "../../assets/homepage/Listenersimg_1.png";
import Spinner from "../../layout/spinner";
import { Link } from "react-router-dom";
import { Routing } from "../../../utils/routing";

const Listener = () => {
  const [loading, setLoading] = useState(false);
  const [listeners, setListeners] = useState([]);
  const GetAllListeners = async () => {
    setLoading(true);
    const result = await GetWebPageListener();
    if (result.status === 200) {
      setListeners(result.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetAllListeners();
  }, []);
  //
  return (
    <>
      {loading && <Spinner />}
      <div className="bg-Mainbackground_gradint min-h-screen">
        <Header />
        <div className="xl:max-w-[90%] mx-auto px-3">
          <div>
            <div className="flex justify-end">
              <Link
                to={Routing.BeListener}
                className="mt-[30px] text-white text-center text-[18px] bg-[#15b37e] hover:bg-[#15b37ea1] px-5 py-1 rounded"
              >
                Be A Listener
              </Link>
            </div>
          </div>
          <div>
            <div className="xl:max-w-[90%] mx-auto md:px-7 py-[63px]">
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
                {listeners.length > 0 &&
                  listeners.map((item, index) => (
                    <>
                      <Listenerscard
                        img={item.image}
                        name={item.name}
                        Year={item.age}
                        Experience={2}
                        content={item.bio}
                      />
                    </>
                  ))}
                {/* <Listenerscard
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
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listener;

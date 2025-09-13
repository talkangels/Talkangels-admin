import React, { useState, useEffect } from "react";

const cardsData = [
    {
        title: "Find your love",
        gradient: "from-purple-500 to-pink-500",
        color: 'text-white',
        images: [
            "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        ],
    },
    {
        title: "Meet People",
        gradient: "from-gray-200 to-gray-300",
        color: 'text-black',
        images: [
            "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        ],
    },
    {
        title: "Made with Love",
        gradient: "from-gray-800 to-gray-900",
        color: 'text-white',
        images: [
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        ],
    },
];

const AngledCards = () => {
    const [activeIndexes, setActiveIndexes] = useState(cardsData.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndexes((prev) =>
                prev.map((index, i) => (index + 1) % cardsData[i].images.length)
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex justify-center items-center relative">
            {cardsData.map((card, i) => {
                const rotations = [8, 15, 18]; // left, middle, right angles
                const marginOffsets = [-0, -120, -120]; // overlap offsets
                const marginTopOffsets = [0, 120, 250]; // overlap offsets

                return (
                    <div style={{
                        // marginTop: marginTopOffsets[i],
                        marginLeft: i === 0 ? 0 : marginOffsets[i],
                        transform: `rotate(${rotations[i]}deg) translate(0px, ${marginTopOffsets[i]}px)`,
                        zIndex: 10 - i,
                    }}
                        className={`bg-gradient-to-r ${card.gradient} px-2 py-2 rounded-3xl shadow-xl`}>
                        <div
                            key={i}
                            className={`${card.gradient} relative w-[300px] h-[400px] rounded-3xl overflow-hidden transform transition duration-500`}

                        >
                            {/* Rotating image fade effect */}
                            <div className="absolute inset-0">
                                {card.images.map((img, j) => (
                                    <img
                                        key={j}
                                        src={img}
                                        alt="slide"
                                        className={`absolute inset-0 w-full h-full rounded-xl object-cover transition-opacity duration-[5000ms] ${activeIndexes[i] === j ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                ))}
                            </div>

                        </div>
                        <div
                            className={`w-full text-center py-4 ${card.color} font-normal text-[30px]`}
                        >
                            {card.title}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AngledCards;

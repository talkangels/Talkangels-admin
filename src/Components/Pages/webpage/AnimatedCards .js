import React, { useState, useEffect } from "react";
import boy1 from '../../assets/cardAnimation/boy1.jfif'
import boy2 from '../../assets/cardAnimation/boy2.jfif'
import boy3 from '../../assets/cardAnimation/boy3.jfif'

import gril1 from '../../assets/cardAnimation/gril1.jfif'
import gril2 from '../../assets/cardAnimation/gril2.jfif'
import gril3 from '../../assets/cardAnimation/gril3.jfif'

import gril4 from '../../assets/cardAnimation/gril4.jfif'
import gril5 from '../../assets/cardAnimation/gril5.jfif'
import gril6 from '../../assets/cardAnimation/gril6.jfif'


const cardsData = [
    {
        title: "Find your love",
        gradient: "from-purple-500 to-pink-500",
        color: 'text-white',
        images: [
            gril1,
            boy1,
            gril4
        ],
    },
    {
        title: "Meet People",
        gradient: "from-gray-200 to-gray-300",
        color: 'text-black',
        images: [
            boy2,
            gril2,
            gril5
        ],
    },
    {
        title: "Made with Love",
        gradient: "from-gray-800 to-gray-900",
        color: 'text-white',
        images: [
            gril3,
            boy3,
            gril6
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

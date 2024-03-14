import React from 'react'
import Bio from "../../../assets/StaffDetails/addBio.png";

export default function WebListPage({
    webPageData,
    setWebPageData,
    handleSubmit,
    deleteTab
}) {

    const addField = () => {
        setWebPageData({
            ...webPageData,
            data: [
                ...webPageData.data,
                {
                    title: "",
                    body: "",
                    topics: [""],
                },
            ],
        });
    };

    const addTopic = (index) => {
        const newData = [...webPageData.data];
        newData[index].topics.push("");
        setWebPageData({
            ...webPageData,
            data: newData,
        });
    };

    const removeField = (index) => {
        if (index === 1) return;
        const newData = [...webPageData.data];
        newData.splice(index, 1);
        setWebPageData({
            ...webPageData,
            data: newData,
        });
    };

    const removeTopic = (sectionIndex, topicIndex) => {
        const newData = [...webPageData.data];
        if (newData[sectionIndex].topics.length === 1) return;
        newData[sectionIndex].topics.splice(topicIndex, 1);
        setWebPageData({
            ...webPageData,
            data: newData,
        });
    };

    const handleTitleChange = (index, value) => {
        const newData = [...webPageData.data];
        newData[index].title = value;
        setWebPageData({
            ...webPageData,
            data: newData,
        });
    };

    const handleBodyChange = (index, value) => {
        const newData = [...webPageData.data];
        newData[index].body = value;
        setWebPageData({
            ...webPageData,
            data: newData,
        });
    };

    const handleTopicChange = (sectionIndex, topicIndex, value) => {
        const newData = [...webPageData.data];
        newData[sectionIndex].topics[topicIndex] = value;
        setWebPageData({
            ...webPageData,
            data: newData,
        });
    };

    return (
        <>
            {
                webPageData.data.map((section, sectionIndex) => (
                    <div className='flex gap-4 py-5 border-b border-white/25 '>
                        <div className="flex flex-wrap items-center w-full gap-2">
                            <div className="w-full relative">
                                <h3 className="absolute top-1/2 -translate-y-1/2 left-6 text-white">{sectionIndex + 1} .</h3>
                                <input
                                    type="text"
                                    value={section.title}
                                    onChange={(e) => handleTitleChange(sectionIndex, e.target.value)}
                                    className="text-white bg-darkBlack w-full h-[40px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                                    placeholder="Add Title"
                                />
                            </div>
                            <div className="w-full relative mt-2">
                                <img src={Bio} alt="" className="absolute top-[10px] left-6" />
                                <textarea
                                    className="text-white bg-darkBlack w-full min-h-[150px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50 pt-[10px]"
                                    placeholder="Add Body"
                                    value={section.body}
                                    onChange={(e) => handleBodyChange(sectionIndex, e.target.value)}
                                ></textarea>
                            </div>
                            {section.topics.map((topic, topicIndex) => (
                                <div className='flex w-full gap-5 items-center ml-12'>
                                    <div className="w-full relative">
                                        <h3 className="absolute top-1/2 -translate-y-1/2 left-6 text-white">{topicIndex + 1} .</h3>
                                        <input
                                            type="text"
                                            value={topic}
                                            onChange={(e) => handleTopicChange(sectionIndex, topicIndex, e.target.value)}
                                            className="text-white bg-darkBlack w-full h-[40px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50"
                                            placeholder="Add Topic"
                                        />
                                    </div>
                                    {
                                        topicIndex === section.topics.length - 1 ?
                                            <button
                                                onClick={() => addTopic(sectionIndex)}
                                                className="h-10 w-12 bg-darkBlue rounded-md shadow-Iconshadow flex items-center justify-center"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" className="w-6 h-6" stroke-width="1.5" >
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </button>
                                            :
                                            <button
                                                onClick={() => removeTopic(sectionIndex, topicIndex)}
                                                className="h-10 w-12 bg-red rounded-md shadow-Iconshadow flex items-center justify-center"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFF"
                                                    className="w-6 h-6" stroke-width="1.5" >
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                </svg>
                                            </button>
                                    }
                                </div>
                            ))}
                        </div>
                        {
                            sectionIndex === webPageData.data.length - 1 ?
                                <button
                                    onClick={addField}
                                    className="h-10 w-12 bg-Sky rounded-md shadow-Iconshadow flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff" className="w-6 h-6" stroke-width="1.5" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                                :
                                <button
                                    onClick={() => removeField(sectionIndex)}
                                    className="h-10 w-12 bg-red rounded-md shadow-Iconshadow flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#fff"
                                        className="w-6 h-6" stroke-width="1.5" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                        }
                    </div>
                ))
            }
            <div className='flex items-center justify-between'>
                <button
                    onClick={deleteTab}
                    className="bg-red text-white font-Popins font-normal md:w-[100px] h-[40px] rounded"
                >
                    Delete
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-Sky text-white font-Popins font-normal md:w-[100px] h-[40px] rounded"
                >
                    Submit
                </button>
            </div>
        </>
    )
}

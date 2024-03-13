import React, { useState } from 'react'
import User from "../../../assets/StaffDetails/user.png";
import Bio from "../../../assets/StaffDetails/addBio.png";
import { AddWebPage } from '../../../services/webPage';
import { toast } from 'react-toastify';

export default function PrivacyPolicyAdmin({
    privacyPolicy,
    setPrivacyPolicy,
    getWebpage,
    setLoading,
    tab
}) {

    const addField = () => {
        setPrivacyPolicy({
            ...privacyPolicy,
            data: [
                ...privacyPolicy.data,
                {
                    title: "",
                    body: "",
                    topics: [""],
                },
            ],
        });
    };

    const addTopic = (index) => {
        const newData = [...privacyPolicy.data];
        newData[index].topics.push("");
        setPrivacyPolicy({
            ...privacyPolicy,
            data: newData,
        });
    };

    const removeField = (index) => {
        if (index === 1) return;
        const newData = [...privacyPolicy.data];
        newData.splice(index, 1);
        setPrivacyPolicy({
            ...privacyPolicy,
            data: newData,
        });
    };

    const removeTopic = (sectionIndex, topicIndex) => {
        const newData = [...privacyPolicy.data];
        if (newData[sectionIndex].topics.length === 1) return;
        newData[sectionIndex].topics.splice(topicIndex, 1);
        setPrivacyPolicy({
            ...privacyPolicy,
            data: newData,
        });
    };

    const handleTitleChange = (index, value) => {
        const newData = [...privacyPolicy.data];
        newData[index].title = value;
        setPrivacyPolicy({
            ...privacyPolicy,
            data: newData,
        });
    };

    const handleBodyChange = (index, value) => {
        const newData = [...privacyPolicy.data];
        newData[index].body = value;
        setPrivacyPolicy({
            ...privacyPolicy,
            data: newData,
        });
    };

    const handleTopicChange = (sectionIndex, topicIndex, value) => {
        const newData = [...privacyPolicy.data];
        newData[sectionIndex].topics[topicIndex] = value;
        setPrivacyPolicy({
            ...privacyPolicy,
            data: newData,
        });
    };

    const handleSubmit = async () => {
        setLoading(true)
        const result = await AddWebPage(privacyPolicy)
        if (result.status === 201) {
            setLoading(false)
            getWebpage(tab)
            toast.success(result.message)
        } else {
            setLoading(false)
            toast.error(result.message)
        }
    }

    return (
        <>
            {
                privacyPolicy.data.map((section, sectionIndex) => (
                    <div className='flex gap-4 py-5 border-b border-white/25 '>
                        <div className="flex flex-wrap items-center w-full gap-2">
                            <div className="w-full relative">
                                <img
                                    src={User}
                                    alt=""
                                    className="absolute top-1/2 -translate-y-1/2 left-6"
                                />
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
                                    className="text-white bg-darkBlack w-full h-[100px] rounded-md focus:outline-none pl-[60px] placeholder:text-white/50 pt-[10px]"
                                    placeholder="Add Body"
                                    value={section.body}
                                    onChange={(e) => handleBodyChange(sectionIndex, e.target.value)}
                                ></textarea>
                            </div>
                            {section.topics.map((topic, topicIndex) => (
                                <div className='flex w-full gap-5 items-center'>
                                    <div className="w-full relative">
                                        <img
                                            src={User}
                                            alt=""
                                            className="absolute top-1/2 -translate-y-1/2 left-6"
                                        />
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
                            sectionIndex === privacyPolicy.data.length - 1 ?
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
            <button
                onClick={handleSubmit}
                className="bg-Sky text-white font-Popins font-normal md:w-[150px] h-[40px] rounded"
            >
                Submit
            </button>
        </>
    )
}

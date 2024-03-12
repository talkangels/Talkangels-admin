import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrivacyPolicyAdmin from "./PrivacyPolicy";
import TermsConditionsAdmin from "./TermsConditions";

const WebPageAdmin = () => {
    const navigate = useNavigate();
    const [tab, setTeb] = useState(0);
    const [privacyPolicy, setPrivacyPolicy] = useState({
        page: "Privacy Policy",
        data: [
            {
                title: "",
                body: "",
                topics: [
                    "",
                ]
            }
        ]
    });

    const [termsConditions, setTermsConditions] = useState({
        page: "Terms & conditions",
        data: [
            {
                title: "",
                body: "",
                topics: [
                    "",
                ]
            }
        ]
    });

    return (
        <>
            <div className="py-7 sm:px-9 px-2 bg-Background_gradint rounded-[20px] ">
                <div>
                    <div className="flex justify-between flex-wrap gap-2">
                        <div>
                            <h2 className="text-white font-Popins text-[24px]">
                                Change Web Page Details
                            </h2>
                            <p className="text-lightgray">
                                Please fill below given details to update admin detail
                            </p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex items-center justify-between gap-5 mb-5">
                            <button
                                className={`w-1/2 h-[55px] rounded-full text-lg font-semibold flex items-center justify-center ${tab === 0
                                    ? "bg-Sky text-white"
                                    : "bg-transparent border-[#88888E] border-[0.5px] text-[#88888E]"
                                    }`}
                                onClick={() => setTeb(0)}
                            >
                                Privacy Policy
                            </button>
                            <button
                                className={`w-1/2 h-[55px] rounded-full text-lg font-semibold flex items-center justify-center ${tab === 1
                                    ? "bg-Sky text-white"
                                    : "bg-transparent border-[#88888E] border-[0.5px] text-[#88888E]"
                                    }`}
                                onClick={() => setTeb(1)}
                            >
                                Terms & Conditions
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            {
                                tab === 0 && <PrivacyPolicyAdmin privacyPolicy={privacyPolicy} setPrivacyPolicy={setPrivacyPolicy} />
                            }
                            {
                                tab === 1 && <TermsConditionsAdmin termsConditions={termsConditions} setTermsConditions={setTermsConditions} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebPageAdmin;

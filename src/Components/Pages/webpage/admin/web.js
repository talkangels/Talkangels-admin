import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrivacyPolicyAdmin from "./PrivacyPolicy";
import TermsConditionsAdmin from "./TermsConditions";
import { GetWebPage } from "../../../services/webPage";
import Spinner from "../../../layout/spinner";

const WebPageAdmin = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [tab, setTeb] = useState("Privacy Policy");
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

    const getWebpage = async () => {
        const data = {
            page: tab
        };
        const result = await GetWebPage(data);
        if (result.status === 200) {
            const newData = result.data.data.map(item => ({
                ...item,
                topics: item.topics.length === 0 ? [""] : item.topics,
            }));
            if (tab === "Privacy Policy") {
                setPrivacyPolicy({ ...result.data, data: newData });
            } else if (tab === "Terms & Conditions") {
                setTermsConditions({ ...result.data, data: newData });
            }
        } else {
            console.log("Data not found");
        }
    };

    useEffect(() => {
        getWebpage()
    }, [tab])


    return (
        <>
            {loading && <Spinner />}
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
                                className={`w-1/2 h-[55px] rounded-full text-lg font-semibold flex items-center justify-center ${tab === "Privacy Policy"
                                    ? "bg-Sky text-white"
                                    : "bg-transparent border-[#88888E] border-[0.5px] text-[#88888E]"
                                    }`}
                                onClick={() => setTeb("Privacy Policy")}
                            >
                                Privacy Policy
                            </button>
                            <button
                                className={`w-1/2 h-[55px] rounded-full text-lg font-semibold flex items-center justify-center ${tab === "Terms & Conditions"
                                    ? "bg-Sky text-white"
                                    : "bg-transparent border-[#88888E] border-[0.5px] text-[#88888E]"
                                    }`}
                                onClick={() => setTeb("Terms & Conditions")}
                            >
                                Terms & Conditions
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            {
                                tab === "Privacy Policy" && <PrivacyPolicyAdmin
                                    privacyPolicy={privacyPolicy}
                                    setPrivacyPolicy={setPrivacyPolicy}
                                    getWebpage={getWebpage}
                                    setLoading={setLoading}
                                    tab={tab}
                                />
                            }
                            {
                                tab === "Terms & Conditions" && <TermsConditionsAdmin
                                    termsConditions={termsConditions}
                                    setTermsConditions={setTermsConditions}
                                    getWebpage={getWebpage}
                                    setLoading={setLoading}
                                    tab={tab}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WebPageAdmin;

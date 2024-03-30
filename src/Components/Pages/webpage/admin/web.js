import React, { useEffect, useState } from "react";
import {
  AddWebPage,
  DelateWebPage,
  GetWebPage,
  GetWebPageNames,
} from "../../../services/webPage";
import Spinner from "../../../layout/spinner";
import WebListPage from "./webList";
import { toast } from "react-toastify";

const WebPageAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [newTabName, setNewTabName] = useState("");
  const [webPageData, setWebPageData] = useState({
    page: "",
    data: [
      {
        title: "",
        body: "",
        topics: [""],
      },
    ],
  });

  const getWebpage = async (tabname) => {
    setLoading(true);
    const data = {
      page: tabname,
    };
    const result = await GetWebPage(data);
    if (result.status === 200) {
      const newData = result.data.data.map((item) => ({
        ...item,
        topics: item.topics.length === 0 ? [""] : item.topics,
      }));
      setWebPageData({ ...result.data, data: newData });
      setLoading(false);
    } else {
      console.log("Data not found");
      setLoading(false);
    }
  };

  const getWebPageName = async () => {
    setLoading(true);
    const result = await GetWebPageNames();
    if (result.status === 200) {
      if (result.data.length !== 0) {
        const newData = result.data.map((item, index) => ({
          name: item,
          isActive: index === 0,
        }));
        setTabs(newData);
        getWebpage(newData.find((tab) => tab?.isActive)?.name);
      }
      setLoading(false);
    } else {
      console.log("Data not found");
      setLoading(false);
    }
  };

  useEffect(() => {
    getWebPageName();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await AddWebPage(webPageData);
    if (result.status === 201) {
      setLoading(false);
      getWebPageName();
      toast.success(result.message);
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  };

  const handleTabClick = (tabName) => {
    if (tabName !== "New Tab") {
      setTabs((prevTabs) =>
        prevTabs.map((tab) => ({
          ...tab,
          isActive: tab.name === tabName,
        }))
      );
      getWebpage(tabName);
    }
  };

  const addTab = (tabName) => {
    const isNewTabPresent = tabs.some((tab) => tab.name === "New Tab");
    if (!isNewTabPresent) {
      setTabs((prevTabs) => {
        return [...prevTabs, { name: tabName, isActive: false }];
      });
    }
  };

  const deleteTab = async () => {
    const tabName = tabs.find((tab) => tab.isActive).name;
    setLoading(true);
    const data = {
      page: tabName,
    };
    const result = await DelateWebPage(data);
    if (result.status === 200) {
      setLoading(false);
      getWebPageName();
      toast.success(result.message);
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  };

  const addNewPage = async () => {
    setLoading(true);
    const data = {
      page: newTabName,
      data: [
        {
          title: "",
          body: "",
          topics: [""],
        },
      ],
    };
    const result = await AddWebPage(data);
    if (result.status === 201) {
      setLoading(false);
      getWebPageName();
      setNewTabName("");
      toast.success(result.message);
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <div className="py-7 sm:px-9 px-2 bg-Background_gradint rounded-[20px] ">
        <div>
          <div className="flex justify-between flex-wrap gap-2 items-center">
            <div>
              <h2 className="text-white font-Popins text-[24px]">
                Change Web Page Details
              </h2>
              <p className="text-lightgray">
                Please fill below given details to update admin detail
              </p>
            </div>
            <button
              onClick={() => addTab("New Tab")}
              className="h-12 w-12 bg-Sky rounded-full shadow-Iconshadow flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
                className="w-6 h-6"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 items-center justify-between gap-5 mb-5">
              {tabs.map((item, i) => (
                <button
                  key={item.name}
                  className={`w-full h-[55px] rounded-full text-lg font-semibold flex items-center justify-center ${
                    item.isActive
                      ? "bg-Sky text-white"
                      : "bg-transparent border-[#88888E] border-[0.5px] text-[#88888E]"
                  }`}
                  onClick={() => handleTabClick(item.name)}
                >
                  {item.name === "New Tab" ? (
                    <>
                      <div className="flex items-center gap-3 w-full p-1">
                        <input
                          onChange={(e) => setNewTabName(e.target.value)}
                          value={newTabName}
                          type="text"
                          className="text-white bg-transparent w-full h-[50px] rounded-full focus:outline-none pl-[20px] placeholder:text-white/50"
                          placeholder="Add Page Name"
                        />
                        <button
                          onClick={addNewPage}
                          className="h-10 w-12 bg-Sky rounded-full text-sm text-white shadow-Iconshadow flex items-center justify-center"
                        >
                          Add
                        </button>
                      </div>
                    </>
                  ) : (
                    item.name
                  )}
                </button>
              ))}
            </div>
            {newTabName && (
              <div className="grid grid-cols-1 gap-5">
                <WebListPage
                  webPageData={webPageData}
                  setWebPageData={setWebPageData}
                  handleSubmit={handleSubmit}
                  deleteTab={deleteTab}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebPageAdmin;

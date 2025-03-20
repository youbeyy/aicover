'use client';

import { SetStateAction, useState} from 'react';
import Text2TmgInput from "@/components/input/textTmgInput";
import Img2VideoInput from "@/components/input/imgVideoInput";
import VideoHandleInput from "@/components/input/videoHandleInput";

export default function () {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div className="relative max-w-2xl mx-auto mt-4 md:mt-16">
      <div className="flex justify-start">
        <button
          className={`px-4 py-2 rounded-t-lg border-b-4 ${activeTab === 'tab1' ? 'border-blue-500 bg-blue-500 text-white' : 'border-transparent bg-white text-gray-700'}`}
          onClick={() => handleTabClick('tab1')}
        >
          文生图
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg border-b-4 ${activeTab === 'tab2' ? 'border-blue-500 bg-blue-500 text-white' : 'border-transparent bg-white text-gray-700'}`}
          onClick={() => handleTabClick('tab2')}
        >
          图生视频
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg border-b-4 ${activeTab === 'tab3' ? 'border-blue-500 bg-blue-500 text-white' : 'border-transparent bg-white text-gray-700'}`}
          onClick={() => handleTabClick('tab3')}
        >
          视频处理
        </button>
      </div>
      <div className="content">
        {activeTab === 'tab1' && <Text2TmgInput/>}
        {activeTab === 'tab2' && <Img2VideoInput/>}
        {activeTab === 'tab3' && <VideoHandleInput/>}
      </div>
    </div>
  );
}

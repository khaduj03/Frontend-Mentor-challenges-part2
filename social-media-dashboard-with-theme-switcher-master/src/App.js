import React, { useState } from "react";
import DashboardHeader from "./Components/DashboardHeader";
import Card from "./Components/Card/Card";
import OverviewCard from "./Components/OverviewCard";
import { Instagram, FaceBook, Twitter, YouTube } from './Components/Card/import';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const cards = [
    { platform: "facebook",Icon:FaceBook,color:"from-blue-100 to-blue-500", username: "nathanf", count: 1987, todayCount: 12 },
    { platform: "twitter",Icon:Twitter,color:"from-sky-100 to-sky-600", username: "nathanf", count: 1044, todayCount: 99 },
    { platform: "instagram",Icon:Instagram,color:"from-pink-200 to-pink-600", username: "realnathanf", count: 11000, todayCount: 1099 },
    { platform: "youtube",Icon:YouTube,color:"from-red-200 to-red-800", username: "Nathan F.", count: 8239, todayCount: -144 },
  ];

  const overview = [
    { title: "Page Views", platform: "facebook", value: 87, percentage: 3 ,Icon:FaceBook},
    { title: "Likes", platform: "facebook", value: 52, percentage: -2 ,Icon:FaceBook},
    { title: "Likes", platform: "instagram", value: 5462, percentage: 2257,Icon:Instagram },
    { title: "Profile Views", platform: "instagram", value: 52000, percentage: 1375,Icon:Instagram },
    { title: "Retweets", platform: "twitter", value: 117, percentage: 303,Icon:Twitter },
    { title: "Likes", platform: "twitter", value: 507, percentage: 553,Icon:Twitter },
    { title: "Likes", platform: "youtube", value: 107, percentage: -19 ,Icon:YouTube},
    { title: "Total Views", platform: "youtube", value: 1407, percentage: -12,Icon:YouTube },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-800 text-gray-200" : "bg-gray-100 text-gray-900"}`}>
      <DashboardHeader
      setIsDarkMode={setIsDarkMode}
        totalFollowers={23004}
        isDarkMode={isDarkMode}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} isNegative={card.todayCount < 0} />
        ))}
      </div>
      <h2 className="text-xl font-bold mt-8 px-6">Overview - Today</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {overview.map((item, index) => (
          <OverviewCard
            key={index}
            {...item}
            isNegative={item.percentage < 0}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
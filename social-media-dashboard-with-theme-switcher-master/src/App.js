import React, { useState } from "react";
import DashboardHeader from "./Components/DashboardHeader";
import Card from "./Components/Card";
import OverviewCard from "./Components/OverviewCard";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const cards = [
    { platform: "facebook", username: "nathanf", count: 1987, todayCount: 12 },
    { platform: "twitter", username: "nathanf", count: 1044, todayCount: 99 },
    { platform: "instagram", username: "realnathanf", count: 11000, todayCount: 1099 },
    { platform: "youtube", username: "Nathan F.", count: 8239, todayCount: -144 },
  ];

  const overview = [
    { title: "Page Views", platform: "facebook", value: 87, percentage: 3 },
    { title: "Likes", platform: "facebook", value: 52, percentage: -2 },
    { title: "Likes", platform: "instagram", value: 5462, percentage: 2257 },
    { title: "Profile Views", platform: "instagram", value: 52000, percentage: 1375 },
    { title: "Retweets", platform: "twitter", value: 117, percentage: 303 },
    { title: "Likes", platform: "twitter", value: 507, percentage: 553 },
    { title: "Likes", platform: "youtube", value: 107, percentage: -19 },
    { title: "Total Views", platform: "youtube", value: 1407, percentage: -12 },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
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
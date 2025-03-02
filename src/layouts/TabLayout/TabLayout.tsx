import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import { TabLayoutProps } from "../../types/tab-layout-props";

export const TabLayout = (data: TabLayoutProps) => {
  const [activeTab, setActiveTab] = useState(data.data[0].title);
  return (
    <Tabs
      defaultValue={data.data[0].title}
      onValueChange={(value) => setActiveTab(value)}
    >
      <TabsList className="bg-white/15 rounded-[4px]">
        {data.data.map((item) => (
          <TabsTrigger value={item.title} key={item.title}>
            <item.icon
              className={`transition-all ${
                activeTab === item.title ? "stroke-primary" : "stroke-white"
              }`}
            />
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {data.data.map((item) => (
        <TabsContent
          value={item.title}
          key={item.title}
          className="bg-mainBackground/20 rounded-[30px] p-[30px] h-full min-h-[calc(100vh-110px)]"
        >
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

import React from "react";
import RequestsPanel from "../components/RequestsPanel";
import FaqPanel from "../components/FaqPanel";
import DataSharingPrivacyPanel from "../components/DataSharingPrivacyPanel";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Button, Progress } from "@material-tailwind/react";
import { selectToken } from "../redux/userSlice";
import { useAppSelector } from "../redux/hooks";

export default function SupportPanel() {
  const token = useAppSelector(selectToken);
  const tabData: any = {
    Requests: { label: "Requests", panel: RequestsPanel },
    Faq: { label: "FAQ", panel: FaqPanel },
    DataSharingPrivacy: { label: "Data Sharing & Privacy", panel: DataSharingPrivacyPanel },
  };
  return (
    <div>
      <Tabs value="Requests" className="bg-ob_bg_blue">
        <TabsHeader className="rounded-none bg-inherit" indicatorProps={{ className: "!rounded-none !bg-ob_hl_blue" }}>
          {Object.keys(tabData).map((key: string) => (
            <Tab key={key} value={key} className="!text-white">
              {tabData[key]["label"]}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {Object.keys(tabData).map((key: string) => (
            <TabPanel key={key} value={key}>
              {React.createElement(tabData[key]["panel"], {})}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
      {/* 
      <Button
        onClick={() => {
          setProgress(progress + 1);
        }}
      >
        More Progress
      </Button> */}
      {/* <ul className="text-lg">
        {Object.keys(entities)
          .filter(entity => !entities[entity].attributes.hidden)
          .map(entity => (
            <li className="EntityRow" key={entity}>
              {entities[entity].attributes.entity_picture && <img alt="" src={entities[entity].attributes.entity_picture} className="avatar" />}
              {entities[entity].entity_id}: {entities[entity].state}
            </li>
          ))}
      </ul> */}
    </div>
  );
}

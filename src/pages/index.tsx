import type { NextPage } from "next";
import React, { FC } from "react";
import ActionCard from "../components/ActionCard";
import DropDown from "../components/DropDown";
import Tabs from "../components/Tabs";

const Home: NextPage = () => {

  return (
    <div className="p-12">
      {/* <DropDown
        onOptionClick={(option) => {
          console.log(option)
        }}
        options={[
          'Dark Mode',
          'Light Mode',
        ]}
        defaultText="Select a Mode"
      /> */}

      {/* <ActionCard
        title={"Download Your File"}
        description={"Click the button below to start your file download"}
        buttonText={"DOWNLOAD"}
      /> */}

      <Tabs panels={[
        {
          name: 'First Tab',
          content: () => {
            return <div>HELLO WORLD FIRST TAB</div>
          }
        },
        {
          name: 'Second Tab',
          content: () => {
            return <div>SECOND TAB</div>
          }
        },
        {
          name: 'Third Tab',
          content: () => {
            return <div>THIRD TAB</div>
          }
        }
      ]} />

    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import React, { FC } from "react";
import ActionCard from "../components/ActionCard";
import DropDown from "../components/DropDown";
import Tabs from "../components/Tabs";

const SecondTab = () => {
  return <div>SECOND TAB</div>;
};

const Home: NextPage = () => {
  return (
    <div className="p-12">
      <Tabs
        panels={[
          {
            name: "First Tab",
            content: <div>FIRST TAB</div>
          },
          {
            name: "Second Tab",
            content: <SecondTab />
          },
          {
            name: "Third Tab",
            content: (() => {
              return <div>THIRD TAB</div>;
            })()
          }
        ]}
      />
    </div>
  );
};

export default Home;

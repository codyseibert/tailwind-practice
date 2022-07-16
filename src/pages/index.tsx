import type { NextPage } from "next";
import DropDown from "../components/DropDown";

const Home: NextPage = () => {
  return (
    <div className="p-12">
      hello
      <DropDown
        onOptionClick={(option) => {
          console.log(option)
        }}
        options={[
          'Item 1',
          'Item 2',
          'Item 3',
        ]}
      />
      other content
    </div>
  );
};

export default Home;

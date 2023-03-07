import React from "react";

const TABS = ["Tab 1", "Tab 2", "Tab 3"];

const Tab: React.FC<{
  title: string;
  id: string;
}> = ({ title, id }) => {
  return (
    <>
      <input type={"radio"} id={id} name="tabs" checked />
      <label
        htmlFor={id}
        className="flex h-14 w-52 cursor-pointer items-center justify-center rounded-full text-xl font-semibold  transition-[color] duration-[0.15s] ease-in"
      >
        {title}
      </label>
    </>
  );
};

const Slidingtab = () => {
  return (
    <div className="absolute flex w-full items-center justify-center border-b-2 border-gray-500 py-10">
      <div className="zIndex relative flex rounded-full bg-white p-2">
        {TABS.map((tab, index) => (
          <Tab title={tab} id={`radio-${index + 1}`} key={index} />
        ))}
        <span className="glider absolute flex h-14 w-52 rounded-full bg-blue-200" />
      </div>
    </div>
  );
};

export default Slidingtab;

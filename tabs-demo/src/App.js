import "./App.css";

import React, { useState } from "react";

import Tab from "./components/Tab";

function App() {
  const [tabs, setTabs] = useState([
    {
      label: "Tab 1",
      content: "Content 1",
      selected: true,
      callback: function () {
        console.log(this.label);
      },
    },
    {
      label: "Tab 2",
      content: "Content 2",
      selected: false,
      callback: function () {
        console.log(this.label);
      },
    },
    {
      label: "Tab 3",
      content: "Content 3",
      selected: false,
      callback: function () {
        console.log(this.label);
      },
    },
  ]);

  const selectedTab = tabs.find((element) => element.selected);

  return (
    <div style={{ paddingTop: 30, textAlign: "center" }}>
      <header>
        {tabs.map((tab, i) => {
          return <Tab key={i} tab={tab} tabs={tabs} setTabs={setTabs} />;
        })}
      </header>
      <p style={{ border: "1px solid gray", padding: 10 }}>
        {selectedTab.content}
      </p>
    </div>
  );
}

export default App;

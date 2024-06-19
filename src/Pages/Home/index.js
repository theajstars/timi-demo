import { useState } from "react";
import "./styles.css";
export default function Home() {
  const [activeTab, setActiveTab] = useState("one");
  return (
    <div className="container">
      <div className="tabs">
        <span
          onClick={() => {
            setActiveTab("one");
          }}
          className={`tab ${
            activeTab === "one" ? "tab-active" : "tab-inactive"
          }`}
        >
          Tab One
        </span>
        <span
          onClick={() => {
            setActiveTab("two");
          }}
          className={`tab ${
            activeTab === "two" ? "tab-active" : "tab-inactive"
          }`}
        >
          Tab Two
        </span>
      </div>
    </div>
  );
}

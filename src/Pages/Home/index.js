import { useState } from "react";

import "./styles.css";

export default function Home() {
  const [activeTab, setActiveTab] = useState("one");
  return (
    <div className="container">
      <div className="tabs">
        <button
          className={`tab ${activeTab === "one" ? "tab-active" : "tab-inactive"}`}
          onClick={() => {
            setActiveTab("one");
          }}
        >
          Information Systems
        </button>
        <button
          className={`tab ${activeTab === "two" ? "tab-active" : "tab-inactive"}`}
          onClick={() => {
            setActiveTab("two");
          }}
        >
          Electrical Parts
        </button>
      </div>
      <div className="content">
        {activeTab === "one" ? (
          <>
            <h1>Information Systems Content</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rem quibusdam odio veritatis
            modi hic quis fuga quisquam? Dignissimos eligendi nostrum assumenda perspiciatis impedit alias
            odit sed optio. Distinctio, dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate rem quibusdam odio veritatis modi hic quis fuga quisquam? Dignissimos eligendi nostrum
            assumenda perspiciatis impedit alias odit sed optio. Distinctio, dignissimos!
          </>
        ) : (
          <>
            <h1>Electrical Parts Content</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rem quibusdam odio veritatis
            modi hic quis fuga quisquam? Dignissimos eligendi nostrum assumenda perspiciatis impedit alias
            odit sed optio. Distinctio, dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate rem quibusdam odio veritatis modi hic quis fuga quisquam? Dignissimos eligendi nostrum
            assumenda perspiciatis impedit alias odit sed optio. Distinctio, dignissimos!
          </>
        )}
      </div>
    </div>
  );
}

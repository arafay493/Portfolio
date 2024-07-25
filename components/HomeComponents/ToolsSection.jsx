import React from "react";
import SectionHeading from "../SectionHeading";
import { tools } from "@/utils/constants";

const ToolsSection = () => {
  return (
    <div>
      <SectionHeading title={"Tools"} />
      <div className="card_section">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="card"
          >
            <p className="text-8xl">{tool.icon}</p>
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;

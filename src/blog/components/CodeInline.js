import React, { useState } from "react";
import { ThemeModes } from "@atlaskit/theme/types";
import GlobalTheme from "@atlaskit/theme/components";
import { CodeBlock } from "@atlaskit/code";

const CodeInline = (props) => {
  const minWidth = props.children.length;
  const [mode, setMode] = useState("dark");

  return (
    <span
    // style={{
    //   minWidth: minWidth * 8,
    //   maxWidth: "100%",
    //   margin: 0,
    //   display: "flex",
    // }}
    >
      <GlobalTheme.Provider value={() => ({})}>
        <CodeBlock
          language={props.language}
          text={props.children}
          showLineNumbers={false}
          // highlight="11-15"
        />
      </GlobalTheme.Provider>
    </span>
  );
};

export default CodeInline;

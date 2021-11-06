import React, { useState } from "react";

import GlobalTheme from "@atlaskit/theme/components";
import { CodeBlock } from "@atlaskit/code";

const Code = (props) => {
  const [mode, setMode] = useState("dark");

  return (
    <GlobalTheme.Provider value={() => ({ mode })}>
      <CodeBlock
        language={props.language}
        text={props.children}
        // showLineNumbers={false}
        // highlight="11-15"
      />
    </GlobalTheme.Provider>
  );
};

export default Code;

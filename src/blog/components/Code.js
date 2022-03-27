import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
const Code = (props) => {
  return (
    <SyntaxHighlighter
      language={props.language}
      style={atomOneDark}
      showLineNumbers
      customStyle={{
        borderRadius: "6px",
        backgroundColor: "#2128317a",
        padding: "10px",
        lineHeight: "20px",
      }}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default Code;

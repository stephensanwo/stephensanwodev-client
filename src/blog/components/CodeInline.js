import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = (props) => {
  return (
    <SyntaxHighlighter
      language={props.language}
      style={atomOneDark}
      customStyle={{
        borderRadius: "6px",
        backgroundColor: "#2128317a",
        padding: "1px",
        paddingLeft: "10px",
      }}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};

export default Code;

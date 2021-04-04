import { Fragment } from "react";
import Navbar from "../../shared/components/Navbar";
import SideBar from "../components/SideBar";
import Article from "../components/Article";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Article />
        <SideBar />
      </div>
    </Fragment>
  );
}

export default App;

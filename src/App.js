import React from "react";
import Box from "@material-ui/core/Box";
import "./App.css";
import Menubar from "./components/Menubar";
import InfoBar from "./components/InfoBar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menubar></Menubar>
        <InfoBar></InfoBar>
        
        
      </div>
    );
  }
}

export default App;

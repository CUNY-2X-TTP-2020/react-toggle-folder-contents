import React, { Component } from "react";
import Folder from "./components/Folder";
import "./App.css";

function App()
{
    return (
        <div className="App">
            <header className="App-header">
                <h1>Toggle Folder Contents</h1>
                <Folder visible={true} />
            </header>
        </div>
    );
}
export default App;

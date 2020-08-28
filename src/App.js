import React from "react";
import "./global.scss";
import "bootstrap/dist/css/bootstrap.css";
import CountryList from "./components/CountryList";
import Header from "./components/Header";

function App() {
  return (
    <div className="text-center">
      <Header />
      <CountryList />
    </div>
  );
}

export default App;

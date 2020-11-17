import React from "react";
import "./index.css";
import PrePrimaryForm from "./components/PrePrimaryForm";
import PrimaryForm from "./components/PrimaryForm";
import SecondaryForm from "./components/SecondaryForm";
import TertiaryForm from "./components/TertiaryForm";
import Dummy from "./components/Dummy";
export default function App() {
  return (
    <div className="App">
      <PrePrimaryForm />
      <PrimaryForm />
      <SecondaryForm />
      <TertiaryForm />
      <Dummy />
    </div>
  );
}

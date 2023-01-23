import "./App.css";
import React from "react";
import Dars from "./dars/dars";
import Burg from "./uy ishi/burger";

function App() {
  let onsalat = document.getElementById("1");
  let salat = document.getElementById("01");
  let kokat = document.querySelector(".k");

  let onpomidor = document.getElementById("2");
  let pomidor = document.getElementById("02");
  let pom = document.querySelector(".pomi");

  let onsir = document.getElementById("3");
  let pishlo = document.getElementById("03");
  let sirr = document.querySelector(".sir");

  let ongosh = document.getElementById("4");
  let mit = document.getElementById("04");
  let gosht = document.querySelector(".g");

  onsalat.addEventListener("click", () => {
    kokat.style.display = "block";
  });
  salat.addEventListener("click", () => {
    kokat.style.display = "none";
  });

  onpomidor.addEventListener("click", () => {
    pom.style.display = "block";
  });
  pomidor.addEventListener("click", () => {
    pom.style.display = "none";
  });

  onsir.addEventListener("click", () => {
    sirr.style.display = "block";
  });
  pishlo.addEventListener("click", () => {
    sirr.style.display = "none";
  });

  ongosh.addEventListener("click", () => {
    gosht.style.display = "block";
  });
  mit.addEventListener("click", () => {
    gosht.style.display = "none";
  });

  return (
    <div>
      <Burg />
    </div>
  );
}
export default App;

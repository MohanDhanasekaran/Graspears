import React, { useState } from "react";
import "./App.css";
import image1 from "./Assets/633114.jpg"
const App = () => {
  const [legs, setLegs] = useState(0);
  const [wings, setWings] = useState(0);
  const [flesh, setFlesh] = useState(0);
  const [result, setResult] = useState("");
  const [isSubmit,setIsSubmit] = useState(false)

  const processOrder = () => {
    const legWeight = 250;
    const wingWeight = 250;
    const fleshWeight = 1000;

    const orderWeight =
      legs * legWeight + wings * wingWeight + flesh * fleshWeight;

    const neededLegs = Math.ceil(legs / 2);
    const neededWings = Math.ceil(wings / 2);
    const neededFlesh = flesh;

    const chickensNeeded = Math.max(neededLegs, neededWings, neededFlesh);

    const remainingLegs = chickensNeeded * 2 - legs;
    const remainingWings = chickensNeeded * 2 - wings;
    const remainingFlesh = chickensNeeded - flesh;

    const remainingWeight =
      remainingLegs * legWeight +
      remainingWings * wingWeight +
      remainingFlesh * fleshWeight;
setIsSubmit(true)
    const output = `
      <div style="padding: 10px 40px 0px; border-radius: 10px; background-color: #e8f0fe;max-height:100%;">
        <h2 style="color: #0d6efd;text-align:center;font-size:28px;">📦 Order Summary</h2>
        <ul style="list-style-type: none; padding: 10px 0px 10px 0px; font-size: 16px;">
          <li style="padding-bottom:10px;font-size:18px;">⚖️ <strong style="padding-left:5px;font-size:18px;">Total Weight of Order:</strong> ${(
            orderWeight / 1000
          ).toFixed(2)} kg</li>
          <li style="padding-bottom:10px;font-size:18px;">🐔 <strong style="padding-left:5px;">Whole Chickens Needed:</strong> ${chickensNeeded}</li>
          <li style="padding-bottom:10px;font-size:18px;">📉 <strong style="padding-left:5px;">Remaining Parts:</strong></li>
          <ul style="list-style-type: none; margin-left: 30px; padding-left: 0;padding-bottom:10px;font-size:18px;">
            <li>🍗 <b>Legs :</b> ${remainingLegs}</li>
            <li>🍖 <b>Wings :</b> ${remainingWings}</li>
            <li>🥩 <b>Flesh Portions :</b> ${remainingFlesh}</li>
          </ul>
          <li style="padding:10px 0px 0px 10px;font-size:18px;">🧮 <strong>Total Remaining Inventory Weight:</strong> ${(
            remainingWeight / 1000
          ).toFixed(2)} kg</li>
        </ul>
      </div>
    `;

    setResult(output);
  };

  return (
  <div className="main-container"> 
    <div className="container">
      <h1>Poultry Order Management</h1>
      <div className="inputs">
        <label htmlFor="legs">Legs : </label>
        <input
          type="number"
          id="legs"
          value={legs === 0 ? "" : legs}
          onChange={(e) => setLegs(Number(e.target.value))}
        />
      </div>

      <div className="inputs">
        <label htmlFor="wings">Wings : </label>
        <input
          type="number"
          id="wings"
          value={wings === 0 ? "" : wings}
          onChange={(e) => setWings(Number(e.target.value))}
        />
      </div>

      <div className="inputs">
        <label htmlFor="flesh">Flesh Portions : </label>
        <input
          type="number"
          id="flesh"
          value={flesh === 0 ? "" : flesh}
          onChange={(e) => setFlesh(Number(e.target.value))}
        />
      </div>

      <button onClick={processOrder}>Submit Order</button>
    </div>
    <div className="split-contains">

     {!isSubmit?<img src={image1} alt="" />
     :
     <div id="result" dangerouslySetInnerHTML={{ __html: result }} />
     }
    </div>
  </div>    
  );
};

export default App;

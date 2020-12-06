import React from "react";
import SushiWallet from "./SushiWallet";

function Table({ wallet, onAddMoney, plates = [] }) {
  const displayPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">You have: ${wallet} remaining!</h1>
      <div className="table">
        <div className="stack">{displayPlates}</div>
        <SushiWallet onAddMoney={onAddMoney} />
      </div>
    </>
  );
}

export default Table;

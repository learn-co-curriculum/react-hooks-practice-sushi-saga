import React from "react";
import EmptyPlates from "./EmptyPlates";

function Table(props) {
  return (
    <>
      <h1 className="remaining">
        You have: ${/* Give me how much money I have left */} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {/* 
            EmptyPlates takes an array as a prop called `plates`
            and renders an empty plate for every element in the array
          */}
          <EmptyPlates plates={[]} />
        </div>
      </div>
    </>
  );
}

export default Table;

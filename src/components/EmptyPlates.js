import React from "react";

function EmptyPlates({ plates }) {
  return plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));
}

export default EmptyPlates;

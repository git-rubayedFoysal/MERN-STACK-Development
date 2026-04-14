import React from "react";

const Sum = React.memo(({ n }) => {
  function calculateSum() {
    return (n * (n + 1)) / 2;
  }

  let sum = calculateSum();

  return (
    <>
      {console.log("Sum render")}
      <h2>This is form Sum component</h2>
      <h3>Sum : {sum}</h3>
    </>
  );
});

export default Sum;

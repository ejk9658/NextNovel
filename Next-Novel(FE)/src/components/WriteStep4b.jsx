import React from "react";
import SelectOption from "./SelectOption";

export default function WriteStep4b({ setStep, setStep2, count, setCount }) {
  return (
    <div>
      <SelectOption
        setStep={setStep}
        setStep2={setStep2}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

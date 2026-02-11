"use client";

import { useState } from "react";
import generateLabelId from "../lib/generate-label-id";

export default function InputComponent() {
  const [labelId, setLabelId] = useState(generateLabelId("A1"));
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    setLabelId(generateLabelId("B1"));

    setTimeout(() => {
      setIsDisabled(false);
    }, 1000);
  };

  return (
    <div>
      <input
        type="text"
        value={labelId}
        onChange={(e) => setLabelId(e.target.value)}
      />
      <button className="btn" disabled={isDisabled} onClick={handleClick}>
        🔄️
      </button>
    </div>
  );
}

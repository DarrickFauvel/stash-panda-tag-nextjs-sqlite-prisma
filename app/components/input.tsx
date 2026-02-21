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
    <div className="join w-full">
      <input
        type="text"
        value={labelId}
        onChange={(e) => setLabelId(e.target.value)}
        className="input input-bordered join-item w-full"
      />
      <button className="btn join-item" disabled={isDisabled} onClick={handleClick}>
        🔄️
      </button>
    </div>
  );
}

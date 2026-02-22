"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import generateLabelId from "../lib/generate-label-id";

const segmentInputClass =
  "bg-transparent text-black text-center focus:outline-none h-full px-0 [field-sizing:content]";

export default function GenerateNewLabelCardComponent() {
  const [labelId, setLabelId] = useState(generateLabelId("A1"));
  const [isDisabled, setIsDisabled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [location, date, time] = labelId.split("-");

  useLayoutEffect(() => {
    const saved = localStorage.getItem("lastLocation");
    setLabelId(generateLabelId(saved ?? "A1"));
    setMounted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("lastLocation", location);
  }, [location]);

  const updateSegment = (index: number, value: string) => {
    const parts = labelId.split("-");
    parts[index] = value;
    setLabelId(parts.join("-"));
  };

  const handleRegenerate = () => {
    setIsDisabled(true);
    setLabelId(generateLabelId(location));
    setTimeout(() => setIsDisabled(false), 1000);
  };

  return (
    <div className="@container card bg-primary text-primary-content w-full max-w-2xl">
      <div className="card-body gap-4 p-4 @sm:p-8">
        <div>
          <h2 className="card-title text-xl">Generate New Label</h2>
          <p className="opacity-80 text-sm">
            Create a unique ID for your stash item, then print.
          </p>
        </div>

        <p className="text-primary-content font-medium text-sm opacity-90">
          Label Preview — click or tab to edit
        </p>

        <div className="flex flex-col @sm:flex-row gap-4 @sm:items-start">
          {/* Outer div is the container so cqi units inside reference label width */}
          <div
            className="@container/label flex flex-col gap-1"
            style={{ width: "3.4375in", maxWidth: "100%" }}
          >
            {/* Label preview — segmented inputs */}
            <div
              className="flex items-center justify-center bg-white rounded-lg shadow-md border-2 border-dashed border-black/25 hover:border-black/50 focus-within:border-solid focus-within:border-black/60 transition-colors overflow-hidden px-2"
              style={{
                height: "0.5625in",
                fontFamily: '"Segoe UI", sans-serif',
                fontWeight: "bold",
                fontSize: "clamp(12px, 7.3cqi, 24px)",
                visibility: mounted ? "visible" : "hidden",
              }}
            >
              <input
                value={location}
                onChange={(e) => updateSegment(0, e.target.value)}
                className={`${segmentInputClass} shrink-0`}
                aria-label="Location"
              />
              <span className="text-black select-none shrink-0 px-1">-</span>
              <input
                value={date}
                onChange={(e) => updateSegment(1, e.target.value)}
                className={`${segmentInputClass} shrink-0`}
                aria-label="Date"
              />
              <span className="text-black select-none shrink-0 px-1">-</span>
              <input
                value={time}
                onChange={(e) => updateSegment(2, e.target.value)}
                className={`${segmentInputClass} shrink-0`}
                aria-label="Time"
              />
            </div>

            {/* Segment labels */}
            <div className="flex text-xs text-primary-content/60 font-medium select-none">
              <span className="text-center" style={{ width: "0.65in" }}>
                Location
              </span>
              <span className="opacity-0 px-1">-</span>
              <span className="flex-1 text-center">Date (Y/M/D)</span>
              <span className="opacity-0 px-1">-</span>
              <span className="text-center" style={{ width: "0.85in" }}>
                Time (24h)
              </span>
            </div>
          </div>

          <button
            className="btn btn-neutral btn-lg w-full @sm:w-auto"
            onClick={() =>
              window.open(
                `/label?id=${encodeURIComponent(labelId)}`,
                "_blank",
                "popup,width=600,height=300",
              )
            }
          >
            🖨️ Print Label
          </button>
        </div>

        <button
          className="btn btn-ghost btn-sm self-start opacity-80"
          disabled={isDisabled}
          onClick={handleRegenerate}
        >
          ↻ Generate a different ID
        </button>
      </div>
    </div>
  );
}

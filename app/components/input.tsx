"use client";

interface InputComponentProps {
  value: string;
  onChange: (value: string) => void;
}

export default function InputComponent({ value, onChange }: InputComponentProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-white text-black text-center text-2xl rounded-lg shadow-md border-2 border-dashed border-black/25 hover:border-black/50 focus:border-solid focus:border-black/60 focus:outline-none transition-colors"
      style={{ width: "3.4375in", height: "0.5625in", maxWidth: "100%" }}
    />
  );
}

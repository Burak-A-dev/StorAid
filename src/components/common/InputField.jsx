import { useState } from "react";

export default function InputField({
  label,
  type = "text",
  placeholder = "",
  required = false,
}) {
  const [value, setValue] = useState("");

  const trimmedValue = value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isInvalid = false;

  if (required && trimmedValue === "") {
    isInvalid = true;
  } else {
    if (type === "email") {
      if (required && !emailPattern.test(trimmedValue)) {
        isInvalid = true;
      }
    } else {
      if (required && trimmedValue.length < 4) {
        isInvalid = true;
      }
    }
  }

  let borderColor = "border-amber-400";
  if (isInvalid) {
    borderColor = "border-red-500";
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-zinc-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`
          w-80 h-12 px-4 rounded-sm border
          text-zinc-800 placeholder-amber-400
          focus:outline-none
          ${borderColor}
        `}
      />

      {isInvalid && type !== "email" && (
        <p className="text-xs text-red-500">Must be at least 4 characters</p>
      )}

      {isInvalid && type === "email" && (
        <p className="text-xs text-red-500">Must be a valid email</p>
      )}
    </div>
  );
}
import React from "react";

function Input({
  label = "",
  required = false,
  className = "",
  type,
  placeholder,
  bdclassName = "",
  lbclassName = "",
  multiple = "",
}) {
  return (
    <div className={`mb-4 lg:mb-0 ${bdclassName}`}>
      <label
        htmlFor={`${label}`}
        className={`text-[15px] leading-[18px]  mb-2 font-normal ${lbclassName}`}
      >
        {`${label}`}{" "}
      </label>
      <input
        type={`${type}`}
        required={required}
        className={` ${className} rounded-md px-4 py-4 mt-4 w-full outline-none `}
        placeholder={placeholder}
        id={`${label}`}
        multiple={`${multiple}`}
      />
    </div>
  );
}

export default Input;

import React, { FC } from "react";

interface FormProps {
  label: string;
  type: string;
  nameErr?: string;
  emailErr?: string;
  passwordErr?: string;
}
const Input: FC<
  FormProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, type, nameErr, emailErr, passwordErr, ...props }) => {
  return (
    <div>
      <div className="relative group text-[#333] mt-8">
        <input
          type={type}
          required
          className={`
          ${
            nameErr &&
            "outline-none border border-red-500 rounded-lg lg:text-[14px] text-[12px] w-full py-1 mt-1"
          }
          ${passwordErr && "outline-none border-b border-red-500 w-full py-1 mt-1"}
          ${
            emailErr &&
            "outline-none border-b border-red-500 w-full py-1 mt-1"
          }
          w-full peer bg-transparent border-b border-[#808080] outline-none`}
          {...props}
        />
        <label
          htmlFor={label}
          className="transform transition-all absolute top-0 lg:text-[14px] group-focus-within:pt-4 text-[13px] left-0 h-full flex items-center group-focus-within:text-[16px] peer-valid:text-[16px] group-focus-within:text-[#19483a] group-focus-within:font-mono group-focus-within:font-bold group-focus-within:-translate-y-full peer-valid:-translate-y-full peer-valid:text-[#19483a] peer-valid:font-mono peer-valid:font-bold peer-valid:ease-linear peer-valid:transition-all"
        >
          {label}
        </label>
      </div>

      {nameErr ? (
        <small className="text-red-500 text-[13px] mt-1 flex justify-start">{nameErr}</small>
      ) : null}
      {emailErr ? (
        <small className="text-red-500 text-[13px] flex justify-start mt-1">{emailErr}</small>
      ) : null}
      {passwordErr ? (
        <small className="text-red-500 text-[13px] flex justify-start mt-1 text-left">{passwordErr}</small>
      ) : null}
    </div>
  );
};

export default Input;

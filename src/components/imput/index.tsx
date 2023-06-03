import React, { forwardRef, Ref } from "react";

interface InputProps {
  type: string;
  id: string;
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
  required?: boolean
  error?:string
}

export const Input = forwardRef(
  ({ id, label, children, required, error, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div>
        {label ? <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">{label}{error ? ' *' : null}</label> : null}
        <div>
          <input id={id} autoComplete={id} required={required} ref={ref} {...rest}  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          {children}
          {error? <p className="text-sm/5 text-red-700 absolute">{error}</p>: null}
        </div>
      </div>
    );
  }
);


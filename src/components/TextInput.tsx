"use client";

import { ChangeEvent, useEffect, useState } from "react";
import FieldError from "./FieldError";

type Props = {
  formState?: any;
  inputLabel: string;
  inputName: string;
  inputPlaceholder?: string;
  inputValue: any;
};

export const TextInput = ({
  formState,
  inputLabel,
  inputName,
  inputPlaceholder,
  inputValue,
}: Props) => {
  const inputCss = [
    "py-3 px-4 block w-full rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400",
  ];
  const [state, setState] = useState<any>(formState);
  const fieldError = state.errors?.fieldErrors[inputName];

  useEffect(() => {
    setState(formState);
  }, [formState]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value && fieldError) {
      setState((prevState: any) => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          fieldErrors: {
            ...prevState.errors.fieldErrors,
            [inputName]: null,
          },
        },
      }));
    }
  };

  if (fieldError) {
    inputCss.push("border-red-500 border-2 border-solid");
  } else {
    inputCss.push("border-gray-200");
  }

  return (
    <>
      <label
        htmlFor={inputName}
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        {inputLabel}
      </label>
      <input
        className={inputCss.join(" ")}
        defaultValue={inputValue}
        id={inputName}
        name={inputName}
        onChange={onChange}
        placeholder={inputPlaceholder}
        type="text"
      />
      <FieldError field={inputName} payload={state} />
    </>
  );
};

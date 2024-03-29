import { FormEvent } from "react";

type Props = {
  /** The message to display in the confirmation dialog box */
  message: string;
};

/**
 * Returns a function that can be used as an onSubmit handler for a form.
 * When the form is submitted, this function will display a confirmation message to the user.
 *
 * If the user confirms the submission the form will be submitted.
 *
 * If the user cancels the submission, the function will prevent the form from being submitted.
 *
 * @param message The confirmation message to display to the user.
 * @returns A function that can be used as an onSubmit handler for a form.
 */
export const onSubmitConfirm = ({ message }: Props) => {
  return (e: FormEvent<HTMLFormElement>) => {
    if (!confirm(message)) {
      e.preventDefault();
    }
  };
};

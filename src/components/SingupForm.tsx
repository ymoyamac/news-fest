import React, { useState } from "react";
import { useForm } from "../hooks";
import { SingupInitialData, SingupValidationData, User } from "../interfaces";
import { ErrorFielSignup } from "./ErrorFielSignup";
import { startNewUser } from '../firebase/user';

const FORM_DATA: SingupInitialData = {
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const FORM_VALIDATIONS: SingupValidationData = {
  email: [
    (value: string) => value.includes("@"),
    "Email should have @ character",
  ],
  phoneNumber: [
    (value: string) => value.length >= 10,
    "Phone number must be longer than ten characters",
  ],
  name: [(value: string) => value.length >= 1, "Name is required"],
  lastName: [(value: string) => value.length >= 1, "LastName is required"],
};

export const SingupForm = () => {
  const {
    formState,
    onInputChange,
    isFormValid,
    nameValid,
    lastNameValid,
    emailValid,
    phoneNumberValid,
  } = useForm(FORM_DATA, FORM_VALIDATIONS);
  const { name, lastName, email, phoneNumber } = formState;
  const [ isFormSubmited, setIsFormSubmited ] = useState<boolean>(false);

  const onSubmitSigupForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormSubmited(true);
    if (!isFormValid) {
      return;
    }
    onClickNewUser(formState)
    console.log(formState)
  };

  const onClickNewUser = async(formState: User) => {
    await startNewUser(formState);
  }

  return (
    <form
      className="bg-[#202124] text-center mt-20 py-20 w-auto m-auto rounded-lg"
      onSubmit={onSubmitSigupForm}
    >
      <header>
        <h3 className="text-5xl">
          Sign <small className="text-indigo-700">up</small>
        </h3>
      </header>

      <div className="w-full my-4 form-control max-w-xs m-auto">
        {!!nameValid && isFormSubmited && (
          <ErrorFielSignup description={nameValid} />
        )}
        <label className="label" htmlFor="">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={`input input-bordered w-full max-w-xs ${
            !!nameValid && isFormSubmited ? "border-2 border-rose-500" : ""
          }`}
          autoComplete="off"
          value={name}
          onChange={onInputChange}
        />
      </div>
      <div className="w-full my-4 form-control max-w-xs m-auto">
        {!!lastNameValid && isFormSubmited && (
          <ErrorFielSignup description={lastNameValid} />
        )}
        <label className="label" htmlFor="">
          <span className="label-text">LastName</span>
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="LastName"
          className={`input input-bordered w-full max-w-xs ${
            !!lastNameValid && isFormSubmited ? "border-2 border-rose-500" : ""
          }`}
          autoComplete="off"
          value={lastName}
          onChange={onInputChange}
        />
      </div>
      <div className="w-full my-4 form-control max-w-xs m-auto">
        {!!emailValid && isFormSubmited && (
          <ErrorFielSignup description={emailValid} />
        )}
        <label className="label" htmlFor="">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={`input input-bordered w-full max-w-xs ${
            !!emailValid && isFormSubmited ? "border-2 border-rose-500" : ""
          }`}
          autoComplete="off"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="w-full my-4 form-control max-w-xs m-auto">
        {!!phoneNumberValid && isFormSubmited && (
          <ErrorFielSignup description={phoneNumberValid} />
        )}
        <label className="label" htmlFor="">
          <span className="label-text">Phone number</span>
        </label>
        <input
          type="number"
          name="phoneNumber"
          placeholder="Phone number"
          className={`input input-bordered w-full max-w-xs ${
            !!phoneNumberValid && isFormSubmited
              ? "border-2 border-rose-500"
              : ""
          }`}
          autoComplete="off"
          value={phoneNumber}
          onChange={onInputChange}
        />
      </div>
      <button
        className="btn btn-outline btn-primary"
      >
        Singup
      </button>
    </form>
  );
};

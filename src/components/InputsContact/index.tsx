import React from "react"
import { StylesInputs } from "./style";
import { IinputsContact } from "../../interface";


export function InputsContact({ name, label, register }: IinputsContact) {
  return (
    <StylesInputs>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} placeholder={name} {...register} />
    </StylesInputs>
  );
}
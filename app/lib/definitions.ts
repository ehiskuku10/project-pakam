import { PropsWithChildren } from "react";

export type AssessmentTableType = {
  id: string;
  name: string;
  description: string;
  quantity: number;
};

export type TextInputType = {
  name: string;
  type: string;
  placeholder: string;
  handleBlurEvent: (event: FocusEvent) => void
}

export type ButtonType = {
  title: string;
  handleClick: () => void
  css?: any
}

export type UserDetailType = {
  id?: number;
  first_name: string;
  last_name: string;
  user_name: string;
}

export type BackDropPropType = PropsWithChildren<{
  closeModal: Function
}>
export interface InputPropsType {
  id?: string | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

export interface LabelPropsType {
  htmlFor?: string | undefined;
  children?: React.ReactNode;
}

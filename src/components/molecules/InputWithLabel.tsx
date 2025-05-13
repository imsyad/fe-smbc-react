import type { InputPropsType, LabelPropsType } from "../../types";
import Input from "../atoms/Input";

type InputWithLabelPropsType = LabelPropsType & InputPropsType;
//   labelProps?: LabelPropsType;
//   inputProps?: InputPropsType;
// }
const InputWithLabel = (props: InputWithLabelPropsType) => {
  return (
    <>
      <label children={props.children} htmlFor={props.htmlFor} />
      <Input id={props.id} type={props.type} />
    </>
  );
};

export default InputWithLabel;

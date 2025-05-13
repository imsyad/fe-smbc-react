import type { InputPropsType } from "../../types";

const Input = (props: InputPropsType) => {
  return (
    <input
      id={props.id}
      type={props.type}
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      {...props.props}
    />
  );
};

export default Input;

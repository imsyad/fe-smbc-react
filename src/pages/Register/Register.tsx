import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import RegisterTemplate from "./RegisterTemplate";

export default function Register() {
  useDocumentTitle("Register Member SMBC Library");
  return <RegisterTemplate />;
}

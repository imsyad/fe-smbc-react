import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import LoginTemplate from "./LoginTemplate";

export default function Login() {
  useDocumentTitle("Login SMBC Library");
  return <LoginTemplate />;
}

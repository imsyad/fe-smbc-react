import RegisterForm from "../../components/organisms/RegisterForm";

const RegisterTemplate = () => (
  <div className="grid grid-cols-1 w-screen py-8 px-6">
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
          Register a New Account
        </h2>
      </div>
      <RegisterForm />
    </div>
  </div>
);

export default RegisterTemplate;

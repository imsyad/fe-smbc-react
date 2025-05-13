import LoginForm from "../../components/organisms/LoginForm";

const LoginTemplate = () => (
  <div className="grid grid-cols-1 w-screen py-8 px-6">
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>
      <LoginForm />
    </div>
  </div>
);

export default LoginTemplate;

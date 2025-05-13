import { Link } from "react-router";
import useRegisterForm from "../../hooks/useRegisterForm";

const RegisterForm = () => {
  const { handleSubmit, errors, isDirty, isSubmitting, isValid, register } =
    useRegisterForm();
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" noValidate onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname" className="block text-sm/6 font-medium">
            Fullname
          </label>
          <div className="mt-2">
            <input
              {...register("fullname")}
              type="text"
              id="fullname-input"
              required
              autoComplete="off"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <span
              className={`text-sm text-red-500 mt-1 ${
                errors.fullname ? "inline-block" : "hidden"
              }`}
            >
              {errors.fullname?.message}
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="username" className="block text-sm/6 font-medium">
            Username
          </label>
          <div className="mt-2">
            <input
              {...register("username")}
              type="text"
              id="username-input"
              required
              autoComplete="off"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <span
              className={`text-sm text-red-500 mt-1 ${
                errors.username ? "inline-block" : "hidden"
              }`}
            >
              {errors.username?.message}
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm/6 font-medium">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              {...register("password")}
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
            <span
              className={`text-sm text-red-500 mt-1 ${
                errors.password ? "inline-block" : "hidden"
              }`}
            >
              {errors.password?.message}
            </span>
          </div>
        </div>

        <div>
          <button
            disabled={!isDirty || !isValid}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-300 dark:disabled:bg-gray-600"
          >
            {!isSubmitting ? "Register" : "Loading..."}
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Already have a member?&nbsp;
        <Link
          className="font-semibold text-indigo-600 hover:text-indigo-500"
          to="../login"
        >
          Try sign in!
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;

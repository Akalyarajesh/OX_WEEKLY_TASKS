import { useForm } from "@tanstack/react-form";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

type LoginFormValues = {
  email: string;
  password: string;
};

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
};
const Login = () => {
  const form = useForm({
    defaultValues,

    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Glass Card */}
      <div
        className="relative w-[90%] max-w-md p-8
        rounded-2xl bg-white/60 backdrop-blur-xl
        border border-gray-200 shadow-2xl text-gray-900"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
        <p className="text-center text-gray-500 mt-2">
          Login to your account to continue
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="flex flex-col gap-5 mt-8"
        >
          {/* Email Field */}
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) =>
                !value ? "Email is required" : undefined,
            }}
          >
            {(field) => (
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg
                  bg-white/70 text-gray-900 placeholder-gray-400
                  outline-none border border-gray-300
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                  transition-all"
                />

                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-1">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Password Field */}
          <form.Field
            name="password"
            validators={{
              onChange: ({ value }) =>
                !value ? "Password is required" : undefined,
            }}
          >
            {(field) => (
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg
                  bg-white/70 text-gray-900 placeholder-gray-400
                  outline-none border border-gray-300
                  focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                  transition-all"
                />

                {field.state.meta.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-1">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Forgot */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={!form.state.canSubmit}
            className="py-3 rounded-lg font-semibold text-white
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:from-purple-600 hover:to-blue-500
            transition-all duration-300 shadow-md
            disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <hr className="flex-grow border-gray-300" />
            <span className="text-sm text-gray-400">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social */}
          <div className="flex justify-center gap-5 text-xl text-gray-700">
            <button
              type="button"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaGoogle />
            </button>
            <button
              type="button"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaGithub />
            </button>
            <button
              type="button"
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              <FaFacebook />
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <a href="#" className="text-blue-600 ml-1 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

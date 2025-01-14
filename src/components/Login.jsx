import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useError } from "../context/AuthContext";
import chz from "../assets/chz.jpeg";


const Login = () => {
  const navigate = useNavigate();
  const errorMessage = useError();
  const [emailColor, setEmailColor] = useState("");
  const { user, loginUser } = useAuth();


  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    if (!email.trim() || !password.trim()) {
      alert("Please enter a valid email ID and Password");
      return;
    }

    const userInfo = { email, password };
    loginUser(userInfo);
  };
  return (
    <div className="flex h-screen">
      <div className="w-full bg-[#000] lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1
            className="text-7xl font-semibold mb-3 text-orange-700 text-center"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Welcome
          </h1>
          <h1
            className="text-sm font-semibold mb-6 text-white text-center"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            Please Login to your accoount{" "}
          </h1>
          <form ref={loginForm} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter email...."
                className={`mt-1 p-2 w-full border rounded-md ${
                  errorMessage
                    ? "focus:border-red-500 focus:ring-red-500 "
                    : "focus:border-orange-500 focus:ring-orange-500 "
                } focus:outline-none focus:ring-2 focus:ring-offset-1 transition-colors duration-300`}
              />

              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter password..."
                className={`mt-1 p-2 w-full border rounded-md ${
                  emailColor
                    ? "focus:border-red-500 focus:ring-red-500 "
                    : "focus:border-orange-500 focus:ring-orange-500 "
                }focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 transition-colors duration-300`}
              />
            </div>
            <div>
              <input
                type="submit"
                value="Login"
                className="btn w-full mt-8 bg-orange-700 text-white p-2 rounded-full shadow-lg cursor-pointer"
                style={{ fontFamily: "Cinzel, serif" }}
              />
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center flex-1 bg-[black] text-black">
        <div className="w-full h-full">
          <img
            src={chz}
            alt="Crypto Quest Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

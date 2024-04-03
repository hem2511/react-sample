import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [termsError, setTermsError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
    setTermsError("");
  };

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, including uppercase, lowercase, and a digit"
      );
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (agreeTerms) {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeTerms(false);
    } else {
      setTermsError("Please agree to the terms and conditions."); // Set terms error message
    }
  };

  return (
    <div className="flex justify-center h-screen overflow-hidden items-center max-[400px]:-mt-20">
      <div className="w-[538px] h-max relative flex flex-col p-12 rounded-2xl text-black bg-white border-2 shadow-lg max-[400px]:w-[300px] max-[400px]:p-8">
        <div className="text-4xl text-left font-bold mb-2 mt-5 text-[#1e0e4b] max-[400px]:text-[20px] max-[400px]:mb-[-10px] max-[400px]:mt-0">
          Sign<span className="text-[#2c19fa]">Up</span>
        </div>
        <div className="text-2xl font-normal mb-4 text-left text-[#1e0e4b] max-[400px]:text-[14px] max-[400px]:mb-0">
          to get started
        </div>
        <form className="flex flex-col gap-3 relative" onSubmit={handleSubmit}>
          <div className="block relative">
            {/* <label
                htmlFor="email"
                className="flex text-black  text-base leading-[140%] font-normal mb-2 ml-2"
              >
                Email
              </label> */}
            <input
              type="email"
              id="email"
              class="rounded-lg border  border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-12 mt-5 p-[17px] focus:ring-1 ring-gray-100 outline-0 shadow max-[400px]:text-[10px] max-[400px]:mt-1 max-[400px]:h-2"
              value={email}
              onChange={handleEmailChange}
              onBlur={validateEmail}
              placeholder="Email"
            />
            {emailError && (
              <div className="error rounded text-xs flex justify-start mt-0.5 cursor-default text-red-500 max-[400px]:text-[8px]">
                {emailError}
              </div>
            )}
          </div>
          <div className="block relative">
            {/* <label
                htmlFor="password"
                className="flex text-black  text-base leading-[140%] font-normal mb-2 ml-2"
              >
                Password
              </label> */}
            <input
              type="password"
              id="password"
              class="rounded-lg border  border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-12 mt-5 p-[17px] focus:ring-1 ring-gray-100 outline-0 shadow max-[400px]:text-[10px] max-[400px]:mt-1 max-[400px]:h-2"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
              placeholder="Password"
            />
            {passwordError && (
              <div className="error rounded text-xs flex justify-start mt-0.5 cursor-default text-left text-red-500 max-[400px]:text-[8px]">
                {passwordError}
              </div>
            )}
          </div>
          <div className="block relative">
            {/* <label
                htmlFor="confirmPassword"
                className="flex text-black  text-base leading-[140%] font-normal mb-2 ml-2"
              >
                Confirm Password
              </label> */}
            <input
              type="password"
              id="confirmPassword"
              class="rounded-lg border  border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-12 mt-5 p-[17px] focus:ring-1 ring-gray-100 outline-0 shadow max-[400px]:text-[10px] max-[400px]:mt-1 max-[400px]:h-2"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              onBlur={validateConfirmPassword}
              placeholder="Confirm Password"
            />
            {confirmPasswordError && (
              <div className="error rounded text-xs flex justify-start mt-0.5 cursor-default text-left text-red-500 max-[400px]:text-[8px]">
                {confirmPasswordError}
              </div>
            )}
          </div>

          <div className="block relative text-left mt-3 max-[400px]:text-[10px] max-[400px]:mt-2">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor="agreeTerms" className="text-[#1e0e4b]">
              Agree to Our Terms and Conditions
            </label>
            {termsError && (
              <div className="error rounded text-xs flex justify-start mt-0.5 cursor-default text-left text-red-500 max-[400px]:text-[8px]">
                {termsError}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#2c19fa] w-full mt-6 p-4  rounded-md text-white text-sm font-normal hover:bg-[#564dff] duration-200 shadow-lg max-[400px]:text-[10px] max-[400px]:p-1 max-[400px]:mt-0"
          >
            Continue
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem] max-[400px]:text-[10px] max-[400px]:mt-2">
          Already Registerd?{" "}
          <span className="text-[#333333]  hover:text-[#777777] duration-200 ">
            <Link to="/signin">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

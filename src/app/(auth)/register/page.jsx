"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Register = () => {
  const route = useRouter();
  const handleClick = () => {
    route.push("/login");
  };
  return (
    <div>
      <div>Register Page</div> <br />
      <button onClick={handleClick}>go to Login</button>
    </div>
  );
};

export default Register;

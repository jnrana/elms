import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://hjsmhuupbsquatkbnssn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqc21odXVwYnNxdWF0a2Juc3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDE2MzAsImV4cCI6MjAyNzM3NzYzMH0.sjJfLG0OGzaFzFywI-eFt160YtDzuZSt2qsrg07cLsk"
);

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("Password do not match");
        return;
      }
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        const { data, error } = await supabase
          .from("Users")
          .insert([{ email, full_Name: fullName }]);
      }

      if (error) {
        setError(error.message);
      } else {
        alert("Registration succesful!");
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
      setError("An error occured during refgistration");
    }
  };

  return (
    <div className="register-form">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username or email"
          />
        </div> */}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;

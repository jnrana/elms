import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";

const supabase = createClient(
  "https://hjsmhuupbsquatkbnssn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqc21odXVwYnNxdWF0a2Juc3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDE2MzAsImV4cCI6MjAyNzM3NzYzMH0.sjJfLG0OGzaFzFywI-eFt160YtDzuZSt2qsrg07cLsk"
);

const LoginForm = () => {
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await supabase.auth.session();
        setSession(session);
      } catch (error) {
        console.error("Error fetching session:", error.message);
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const { user, session, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      setSession(session);
      router.push("/");
    } catch (error) {
      setError(error.message);
      router.push("/profile-authentication");
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      router.push("/profile-authentication");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {session ? (
        <div>
          <p>Welcome, {session.user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username or email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Username or email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit">Log In</button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default LoginForm;

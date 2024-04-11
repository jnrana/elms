import React, { useEffect, useState } from "react";
import Link from "../../utils/ActiveLink";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/router";

// import Link from "next/link";`

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  // const [loggedOut, setLoggedOut] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setLoggedIn(session !== null);
    };
    getSession();
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setLoggedIn(false);
      // setLoggedOut(true);
      router.push("/profile-authentication");
    } catch (error) {
      console.log("Error signing out:", error.message);
    }
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <React.Fragment>
      <div id="navbar" className="navbar-area">
        <div className="edemy-nav">
          <div className="container-fluid">
            <div className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img
                    src="/images/eLMS.png"
                    alt="logo"
                    style={{ width: "100px" }}
                  />
                </a>
              </Link>
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>
              <div
                className={`${classOne} d-flex justify-content-between`}
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link href="/courses">
                      <a className="nav-link">Courses</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="/categories">
                      <a className="nav-link">Categories</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="/instructors">
                      <a className="nav-link">Instructors</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="/about">
                      <a className="nav-link">About</a>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li>
                </ul>
                <div className="others-option d-flex align-items-center">
                  <div className="option-item"></div>
                  {loggedIn ? (
                    <button onClick={handleLogout} className="default-btn">
                      Logout
                    </button>
                  ) : (
                    <Link href="/profile-authentication">
                      <a className="default-btn">Login</a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;

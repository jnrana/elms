import React, { useEffect, useState } from "react";
import Navbar from "../../../components/_App/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import { useRouter } from "next/router";
import { createClient } from "@supabase/supabase-js";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { supabase } from "../../../utils/supabaseClient";
import Footer from "../../../components/_App/Footer";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { query } = useRouter();
  const router = useRouter();

  useEffect(() => {
    checkUserAuthStatus();
    if (query.id) {
      getCourse();
      getSessions();
    }
  }, [query.id]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          setIsLoggedIn(true);
        } else if (event === "SIGNED_OUT") {
          setIsLoggedIn(false);
        }
      }
    );

    // return () => {
    //   authListener?.unsubscribe();
    // };
  }, []);

  const checkUserAuthStatus = async () => {
    try {
      const session = await supabase.auth.session();
      setIsLoggedIn(!!session.user);
      console.log("Error is coming", session.user);
    } catch (error) {
      console.error("Error fetching session:", error.message);
    }
  };

  async function getCourse() {
    try {
      let { data: coursesdetails, error } = await supabase
        .from("coursesdetails")
        .select("*")
        .eq("course_id", query.id);

      if (error) {
        throw new Error(error.message);
      }

      setCourses(coursesdetails);
    } catch (error) {
      console.error("Error fetching course:", error.message);
    }
  }

  async function getSessions() {
    try {
      let { data: sessionData, error } = await supabase
        .from("sessions")
        .select("*")
        .eq("course_id", query.id);

      if (error) {
        throw new Error(error.message);
      }

      setSessions(sessionData);
    } catch (error) {
      console.error("Error fetching course:", error.message);
    }
  }

  console.log("sessions");
  console.log(sessions);

  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Course Details"
        homePageUrl="/"
        homePageText="Home"
        innerPageUrl="/courses-"
        innerPageText="Courses"
        activePageText="Course "
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="courses-details-desc">
              <Tabs>
                <TabList>
                  <Tab>Overview</Tab>
                  <Tab>Curriculum</Tab>
                  <Tab>Instructor</Tab>
                  {/* <Tab>Reviews</Tab> */}
                </TabList>

                <TabPanel>
                  {courses.map((item, id) => (
                    <div className="courses-overview" key={id}>
                      <h3>Course Description</h3>
                      {item.description}

                      <h3>Course Objectives and Learning Goals</h3>
                      <ul>
                        <li>Understand basic principles of computers</li>
                        <li>Understand basics of binary computation</li>
                        <li>
                          Understand the programming basics (operations, control
                          structures, data types, etc.)
                        </li>
                        <li>Readily use the Python programming language</li>
                        <li>Apply various data types and control structure</li>
                        <li>Understand class inheritance and polymorphism</li>
                        <li>
                          Understand the object-oriented program design and
                          development
                        </li>
                      </ul>
                    </div>
                  ))}
                </TabPanel>

                <TabPanel>
                  {isLoggedIn ? (
                    <div className="courses-curriculum">
                      {sessions.map((session, id) => (
                        <div className="session" key={id}>
                          <h3>{session.session_name}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: session.embed_code,
                            }}
                          />
                          {/* <p>{session.}</p> */}
                          {/* Render other session details as needed */}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p>Please log in to access the video content.</p>
                      <button
                        onClick={() => router.push("/profile-authentication")}
                      >
                        Log INN
                      </button>
                    </div>
                  )}
                </TabPanel>

                <TabPanel>
                  {courses.map((item, id) => (
                    <div className="single-advisor-box" key={id}>
                      <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4">
                          <div className="advisor-image">
                            <img
                              // src="/images/advisor/advisor2.jpg"
                              src={item.thumbnail}
                              alt="Instructor"
                            />
                          </div>
                        </div>

                        <div className="col-lg-8 col-md-8">
                          <div className="advisor-content">
                            <h3>{item.instructor_name}</h3>
                            <span className="sub-title">
                              Agile Project Expert
                            </span>
                            <p>{item.instructor_details}</p>

                            <ul className="social-link">
                              <li>
                                <a href="#" className="d-block" target="_blank">
                                  <i className="bx bxl-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="d-block" target="_blank">
                                  <i className="bx bxl-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="d-block" target="_blank">
                                  <i className="bx bxl-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#" className="d-block" target="_blank">
                                  <i className="bx bxl-linkedin"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabPanel>

                {/* <TabPanel>
                  Add your reviews content here
                </TabPanel> */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Courses;

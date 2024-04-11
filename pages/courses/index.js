import React, { useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../../components/_App/Footer";
import { createClient } from "../../utils/supabase";
import Course from "../../components/Course";

const CoursesGrid01 = () => {
  const supabase = createClient();
  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    setLoading(true);
    let { data, error } = await supabase.from("courses").select("*");
    setLoading(false);
    setCourses(data);
  }

  return (
    <>
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle="All Courses"
          homePageUrl="/"
          homePageText="Home"
          activePageText="All Courses"
        />

        {loading ? (
          <div className="advisor-area pt-100 pb-70">
            <div className="container">
              <div class="d-flex justify-content-center mt-2">
                <div class="spinner-border" role="status"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="courses-area courses-section pt-100 pb-70">
            <div className="container">
              <div className="row">
                {courses.map((item, index) => {
                  return (
                    <div className="col-lg-4 col-md-6" key={index}>
                      <Course course={item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <Footer />
      </React.Fragment>
    </>
  );
};

export default CoursesGrid01;

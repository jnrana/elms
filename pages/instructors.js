import React, { useState, useEffect } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PremiumAccessTwo from "../components/Common/PremiumAccessTwo";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import Instructor from "../components/Instructor";

import { createClient } from "../utils/supabase";

const Advisor = () => {
  const [instructors, setInstructors] = useState();
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    getInstructors();
  }, []);

  async function getInstructors() {
    setLoading(true);
    let { data, error } = await supabase.from("instructors").select("*");
    console.log(data);
    setLoading(false);
    setInstructors(data);
  }

  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Instructors"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Instructors"
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
        <div className="advisor-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              {instructors.map((instructor, index) => (
                <Instructor instructor={instructor} key={index} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </React.Fragment>
  );
};

export default Advisor;

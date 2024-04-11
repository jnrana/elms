import React from "react";
import Link from "../utils/ActiveLink";

function Instructor({ instructor }) {
  console.log("instructor : ", instructor);
  return (
    <div className="col-lg-4 col-sm-6 col-md-6">
      <div className="single-advisor-item">
        <div className="advisor-image">
          <img src={instructor.avatar} alt="image" />
        </div>

        <div className="advisor-content">
          <h3>
            <Link href="#">
              <a>
                {instructor.fname} {instructor.lname}
              </a>
            </Link>
          </h3>
          <div className="mt-2">
            <p>{instructor.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructor;

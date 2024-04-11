import React from "react";
import Link from "next/link";

function Course({ course }) {
  return (
    <div className="single-courses-box">
      <div className="courses-image">
        <Link href={`/course/${course.id}`}>
          <a className="d-block image">
            <img
              src={course.thumbnail}
              alt="image"
              style={{
                width: "450px",
                height: "260px",
              }}
            />
          </a>
        </Link>
      </div>
      <div className="courses-content">
        <div className="course-author d-flex align-items-center"></div>

        <h3>
          <Link href={`/course/${course.id}`}>
            <a>{course.name}</a>
          </Link>
        </h3>

        {course.description}
        <ul className="courses-box-footer d-flex justify-content-between align-items-center">
          <li>
            <div className="price ">${course.price}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Course;

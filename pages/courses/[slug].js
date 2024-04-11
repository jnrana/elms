import React, { useEffect } from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import Link from "next/link";
import Footer from "../../components/_App/Footer";
import { createClient } from "../../utils/supabase";
import { useRouter } from "next/router";
// import { useSearchParams } from "next/navigation";

const CoursesGrid = ({ ...params }) => {
  const supabase = createClient();
  const router = useRouter();
  console.log(router);

  const slug = router?.query?.slug || "";
  //   const searchParams = useSearchParams();

  const [courses, setCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [category, setCategory] = React.useState({});

  console.log(params);

  useEffect(() => {
    fetchCategory(slug);
  }, [slug]);

  useEffect(() => {
    if (category && category.id) {
      fetchCourses();
    }
  }, [category]);

  const fetchCourses = async () => {
    if (category && category?.id) {
      setLoading(true);
      try {
        let { data, error } = await supabase
          .from("courses")
          .select("*")
          .eq("category_id", category.id);
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.log("err :", error);
        setCourses([]);
        setLoading(false);
      }
    }
  };

  async function fetchCategory(slug) {
    if (slug && slug != "") {
      setLoading(true);
      let { data, error } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", slug)
        .single();
      setCategory(data);
    }
  }

  return (
    <>
      <React.Fragment>
        <Navbar />
        <PageBanner
          pageTitle={category?.name || ""}
          homePageUrl="/"
          homePageText="Home"
          activePageText={category?.name || ""}
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
                {courses.map((item, id) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                          <div className="courses-image">
                            <Link href={`/course/${item.id}`}>
                              <a className="d-block image">
                                <img
                                  src={item.thumbnail}
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
                              <Link href={`/course/${item.id}`}>
                                <a>{item.name}</a>
                              </Link>
                            </h3>

                            {item.description}
                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                              <li>
                                <div className="price ">${item.price}</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
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

export default CoursesGrid;

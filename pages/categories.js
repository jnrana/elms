import React, { useEffect, useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "../components/_App/Footer";

import { createClient } from "../utils/supabase";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    setLoading(true);
    let { data, error } = await supabase.from("categories").select("*");
    console.log(data);
    console.log(data);
    setLoading(false);
    setCategories(data);
  }

  console.log(categories);

  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Categories"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Categories"
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
        <div className="categories-area ptb-100">
          <div className="container">
            <div className="row">
              {categories.map((category, index) => (
                <div className="col-lg-4 col-sm-6 col-md-6" key={index}>
                  <div className="single-categories-box">
                    <img src={category.thumbnail} alt="image" />
                    <div className="content">
                      <h3>{category.name}</h3>
                    </div>
                    <Link href={`courses/${category.slug}`}>
                      <a className="link-btn"></a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </React.Fragment>
  );
};

export default Categories;

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

const AboutArea = () => {
  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <React.Fragment>
      <div className="about-area-two bg-fffaf3 pt-70 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-content-box">
                <span className="sub-title">Distance Learning</span>
                <h2>Build Your Project Management Skills Online, Anytime</h2>
                <p>
                  Want to learn and earn PDUs or CEUs on your schedule —
                  anytime, anywhere? Or, pick up a new skill quickly like,
                  project team leadership or agile? Browse our most popular
                  online courses.
                </p>
                <p>
                  <strong>
                    Grow your knowledge and your opportunities with thought
                    leadership, training and tools.
                  </strong>
                </p>

                <Link href="/contact">
                  <a className="link-btn">Explore Learning</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-video-box">
                <div className="image">
                  <img src="/images/about-img5.jpg" alt="image" />
                </div>

                <Link href="#play-video">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                    }}
                    className="video-btn popup-youtube"
                  >
                    {/* <i className="flaticon-play"></i> */}
                  </a>
                </Link>

                {/* <div className="shape10">
                                    <img src="/images/shape9.png" alt="image" />
                                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/shape4.png" alt="image" />
        </div>
        {/* <div className="shape2">
          <img src="/images/shape2.png" alt="image" />
        </div> */}

        {/* If you want to change the video need to update videoID */}
        <ModalVideo
          channel="youtube"
          isOpen={!isOpen}
          videoId="bk7McNUjWgw"
          onClose={() => setIsOpen(!isOpen)}
        />
      </div>
    </React.Fragment>
  );
};

export default AboutArea;

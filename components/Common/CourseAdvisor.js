import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const CourseAdvisor = () => {
	return (
		<div className="advisor-area bg-f9f9f9 ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Instructor</span>
					<h2>Course Advisor</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<Swiper className="advisor-slides owl-carousel owl-theme">
					<SwiperSlide>
						<div className="single-advisor-box">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="advisor-image">
										<img
											src="/images/advisor/advisor1.jpg"
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="advisor-content">
										<h3>
											<a href="profile.html">
												William James
											</a>
										</h3>
										<span className="sub-title">
											Project Management Expert
										</span>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dol aliqua.
										</p>

										<ul className="social-link">
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-facebook"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-twitter"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-instagram"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-advisor-box">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="advisor-image">
										<img
											src="/images/advisor/advisor2.jpg"
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="advisor-content">
										<h3>
											<a href="profile.html">
												Sarah Taylor
											</a>
										</h3>
										<span className="sub-title">
											Agile Project Expert
										</span>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dol aliqua.
										</p>
										<ul className="social-link">
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-facebook"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-twitter"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-instagram"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-advisor-box">
							<div className="row align-items-center">
								<div className="col-lg-4 col-md-4">
									<div className="advisor-image">
										<img
											src="/images/advisor/advisor3.jpg"
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-8 col-md-8">
									<div className="advisor-content">
										<h3>
											<a href="profile.html">
												James Andy
											</a>
										</h3>
										<span className="sub-title">
											QA Project Expert
										</span>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dol aliqua.
										</p>
										<ul className="social-link">
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-facebook"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-twitter"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-instagram"></i>
												</a>
											</li>
											<li>
												<a
													href="#"
													className="d-block"
													target="_blank"
												>
													<i className="bx bxl-linkedin"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default CourseAdvisor;

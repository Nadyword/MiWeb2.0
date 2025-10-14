"use client";
import React, { useState } from "react";
import Image from "next/image";
import SplitTextAnimation from "@/components/common/SplitTextAnimation";
export default function Testimonials() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="section-testimonials style-1 tf-spacing-1">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center mb-48">
              <h2 className="title split-text effect-right">
                <SplitTextAnimation text="Ganadores y testimonios" />
              </h2>
              <p className="text-1 split-text split-lines-transform">
                Los ganadores de los premios de ELITE son los mejores de la ciudad, y nosotros te ayudamos a ser uno de ellos
              </p>
            </div>
            <div
              className={`tf-grid-layout md-col-3 loadmore-item-8 ${showMore ? "active" : ""
                } `}
            >
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/testimonials-4.jpg"
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Annette Black</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png7.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Eleanor Pena</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png6.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Cody Fisher</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png5.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Ralph Edwards</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-testimonials">
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png8.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Jacob Jones</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png5.png"
                        width={120}
                        height={120}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Ralph Edwards</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <div className="wg-testimonial style-2">
                  <div className="ratings ">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <p className="text-1 description">
                    Texto de un testimonio
                  </p>
                  <div className="author">
                    <div className="avatar">
                      <Image
                        alt=""
                        src="/images/avatar/avt-png12.png"
                        width={51}
                        height={51}
                      />
                    </div>
                    <div className="content">
                      <h6 className="name">
                        <a href="#">Floyd Miles</a>
                      </h6>
                      <p className="text-2">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
              </div>
              {showMore ? (
                ""
              ) : (
                <button
                  onClick={() => setShowMore((pre) => !pre)}
                  className="tf-btn bg-color-primary fw-7 mx-auto btn-loadmore view-more-button"
                >
                  Mostrar mas...
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import productCurvyLines from "images/productCurvyLines.png";
import employees from "images/employees.jpg";

function About() {
  return (
    <div className="pattern-background">
      <div className="about-container">
        <img className="pattern" src={productCurvyLines} alt="Curvy lines" />
        <h2>who we are</h2>
        <span className="under-line"></span>
        <div className="about-text">
          <div>
            <img src={employees} alt="Employees in the Company" />
          </div>
          <div>
            <p>
              <b>
                With over three decades, experience and satisfied customers in
                all over the world we decided to develop our business to
                Germany. In the begining of year 2018, we started our company
                with name of Company in Bochum, Germany.
              </b>
            </p>
            <p className="about-text--middle">
              We were stablished in 1989. We have proudly serving clients since
              then and our dedication to creating the highest quality products
              and exceeding customer expectations has positioned us as one of
              the largest and most respected advertising and printing supply
              companies.
            </p>
            <p>
              Our skilled professional team, using the latest design technology,
              printing, app developing and web designing techniques, produce
              quality result to meet our clients individual and very unique
              needs. With our friendly customer service, fair prices, best
              quality products and fast shipment we will make sure to bring the
              advertising ideas and imaginations to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";
import productCurvyLines from "images/productCurvyLines.png";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { PresentationChartLineIcon } from "@heroicons/react/24/outline";

function Services() {
  return (
    <div className="pattern-background">
      <div className="services-container">
        <img className="pattern" src={productCurvyLines} alt="Curvy lines" />
        <div className="services">
          <div className="service">
            <CodeBracketIcon className="service-icon" />
            <span>WEB DESIGN SERVICES</span>
            <p>
              Company Team will take care of all of your designing requests and
              orders for your website and online shop such as Banners,
              subscription mails, offer mails, Product photography, Product
              descriptions, and more.
            </p>
          </div>
          <div className="service">
            <MegaphoneIcon className="service-icon" />
            <span>MARKETING SERVICES</span>
            <p>
              Company Marketing & advertising offers exhibition advertising,
              presentation products, advertising for your brand and company,
              advertising items and many more.
            </p>
          </div>
          <div className="service">
            <PresentationChartLineIcon className="service-icon" />
            <span>CONSULTING SERVICES</span>
            <p>
              Company Advertising offers promotional gift items, giveaways,
              corporate gift items, branded and customized advertising products
              and items starting from low quality and prices up to high class
              products and items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

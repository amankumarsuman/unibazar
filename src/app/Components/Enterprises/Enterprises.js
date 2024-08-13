import React from 'react';
import Image from 'next/image';
import FlipkartLogo from '../../assets/unibazar-home-images/flipkart-logo.png';
import MeeshoLogo from '../../assets/unibazar-home-images/meesho-logo.png';
import ShopifyLogo from '../../assets/unibazar-home-images/shopify-logo.png';
import MyntraLogo from '../../assets/unibazar-home-images/myntra-logo.png';
import SnapdealLogo from '../../assets/unibazar-home-images/snapdea-logo.png';
import NykaaLogo from '../../assets/unibazar-home-images/nykaa-logo.png';
import LimeRoadLogo from '../../assets/unibazar-home-images/limeRoad-logo.png';
import AjioLogo from '../../assets/unibazar-home-images/ajio-logo.png';
import './Enterprises.css';
import '../ResponsiveStyle/Responsive.css'
const Enterprises = () => {
  return (
    <>
      <div className="enterprise">
        <div className="enterprise-text">
          <h2>Trusted by Leading Indian Enterprises</h2>
          <p>We are delighted to share that our resort is now prominently featured in the updated media gallery</p>
        </div>

        <div className="enterprise-image">
          <div className="enterprise-img">
            <Image src={FlipkartLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className="enterprise-img">
            <Image src={ShopifyLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className="enterprise-img">
            <Image src={MyntraLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className="enterprise-img">
            <Image src={SnapdealLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className="enterprise-img">
            <Image src={NykaaLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className="enterprise-img">
            <Image src={LimeRoadLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className="enterprise-img">
            <Image src={AjioLogo} alt="enterprise-logo.."></Image>
          </div>
          <div className="enterprise-img">
            <Image src={MeeshoLogo} alt="enterprise-logo.."></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Enterprises;

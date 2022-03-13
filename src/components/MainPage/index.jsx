import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";


function MainPage({ props }) {
  const {
    bwindi_Logo,
    overlapGroup1,
    overlapGroup2,
    group14,
    group15,
    x1290,
    title,
    erinnyaLyangeNzeB,
    joinOurCommunity,
    stayTunedForMore,
    yourEMail,
    subscribe,
    termsConditions,
    copyright,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="mainpage screen">
        <div className="flex-row-center w-full">
          <img className="bwindi_logo-5" src={bwindi_Logo} alt="logo" />
        </div>
        <div className="overlap-group-container imageBoxContainer">
          <div className="imageBoxRow row">
            <div className="imageCol">
              <div className="overlap-group2" style={{ backgroundImage: `url(${overlapGroup1})`}}>
                <div className="bwindi-club1 animate-enter3" show-on-scroll="true" style={{ fontSize: '35px', marginTop: '150px' }}>
                  BWINDI<br /> CLUB
                </div>
              </div>
                <Link to="/welcome-page"><img className="group-14" src={group14} alt="welcome"/></Link>
            </div>
            <div className="imageCol">
              <div className="overlap-group3" style={{ backgroundImage: `url(${overlapGroup2})` }}>
                <div className="bwindi-club-1 montserrat-bold-white-370px animate-enter2" show-on-scroll="true" style={{ fontSize: '35px', marginTop: '150px'  }}>
                  BWINDI<br /> MARKETPLACE
                </div>
              </div>
                <Link to="/marketplace"><img className="group-15" src={group15} alt="marketplace"/></Link>
            </div>
          </div>
        </div>
        <hr className="p-0 line90" />
       
        {/* <img className="line-111" src="/img/line-1@1x.svg" /> */}
        <img className="x1290 gorilaImage" src={x1290} alt="1290"/>
        <h1 className="title1 montserrat-extra-bold-white-196px animate-enter" show-on-scroll="true">
          {title}
        </h1>
        <div className="erinnya-lyange-nze-b montserrat-bold-white-640px animate-enter1" show-on-scroll="true">
          {erinnyaLyangeNzeB}
        </div>
        <hr className="p-0 line9" />
        {/* <img className="line-2" src="/img/line-2@1x.svg" /> */}
        <div className="flex-row"  style={{marginBottom: '12px'}}>
          <div className="join-our-community valign-text-middle jost-semi-bold-white-15px">{joinOurCommunity}</div>
          <p className="stay-tuned-for-more valign-text-middle jost-semi-bold-white-15px">{stayTunedForMore}</p>
        </div>
        <div className="flex-row-1" >
          <a target="blank" alt="twitter" href="https://twitter.com/Bwindi_NFTs"><img className="twitter" src="/img/twitter-1@2x.svg" alt="" /></a>
          <a target="blank" alt="linkedin" href="https://www.linkedin.com/company/bwindi/"><img className="flex-row-item" src="/img/linkedin-1@2x.svg" alt="" /></a>
          <a target="blank" alt="facebook" href="https://www.facebook.com/BwindiNFTs/"><img className="flex-row-item" src="/img/facebook-1@2x.svg" alt="" /></a>
          <a target="blank" alt="instagram" href="https://www.instagram.com/bwindi_nft/"><img className="flex-row-item" src="/img/instagram-1@2x.svg" alt="" /></a>
          <a target="blank" alt="discord" href="https://discord.com/invite/Swp4zj3Sqe"><img className="flex-row-item" src="/img/discord-1@2x.svg" alt="" /></a>
          <a target="blank" alt="youtube" href="https://www.youtube.com/channel/UCOqVypNUxB7G_18AOXQ_1pg"><img className="flex-row-item" src="/img/youtube@2x.svg" alt="" /></a>

          <div className="mail-container border-1px-gray-chateau">
            <img className="mail" src="/img/mail@2x.svg" alt="mail" />
            <div className="your-e-mail valign-text-middle jost-normal-gray-chateau-14px">{yourEMail}</div>
          </div>
          <div className="frame-8">
            <div className="subscribe valign-text-middle jost-medium-black-14px">{subscribe}</div>
          </div>
        </div>
        <div className="flex-row-1 footerBottomArea">
          <div className="terms-conditions valign-text-middle jost-semi-bold-white-15px">
            <Link to="/terms-conditions" className="jost-semi-bold-white-15px">{termsConditions}</Link>
          </div>
          <p className="copyright valign-text-middle jost-semi-bold-white-15px">
            <a target="blank" href="https://bwindi.io/" className="jost-semi-bold-white-15px">{copyright}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;

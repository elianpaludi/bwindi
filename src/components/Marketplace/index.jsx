import React from "react";
import "./Marketplace.css";
import { Link } from "react-router-dom";

function Marketplace({ props }) {
  const {
    bwindi_Logo,
    pexelsJuliaFilirovska71902271,
    ActiveSoon,
    title,
    bwindiMarketplace,
    group14,
    joinOurCommunity,
    stayTunedForMore,
    yourEMail,
    subscribe,
    termsConditions,
    copyright,
    bgvideo,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="marketplace screen">
        <div className="flex-row-center w-full">
          <img className="bwindi_logo-5" src={bwindi_Logo} alt="logo" />
        </div>
        {/* <img className="bwindi-art02-22 aaaa" src={pexelsJuliaFilirovska71902271} alt="" /> */}
        <div className="markectVideo">
          
          <video loop="true" autoplay="autoplay" muted id="marketVideo" style={{ marginBottom: '20px' }} width="100%" >
            <source src={bgvideo} type="video/mp4" />
          </video>
        </div>
        <h1
          className="title3 montserrat-extra-bold-white-960px animate-enter"
          show-on-scroll="true"
          style={{ fontFamily: 'Helvetica', fontSize: '54px' }}
        >{title}</h1>
        <div className="bwindi-marketplace montserrat-bold-white-780px animate-enter1" show-on-scroll="true">
          {bwindiMarketplace}
        </div>
        <img className="group-14" src={ActiveSoon} alt="" />
        <hr className="line90" />
        {/* <img className="line-1" src="/img/line-1@1x.svg" /> */}
        <div className="the-worlds-first-en animate-enter2" show-on-scroll="true">
          {/* <span className="jost-semi-bold-white-363px">{spanText1}</span>
          <span className="span1">{spanText2}</span>
          <span className="jost-semi-bold-white-364px">{spanText3}</span>
          <span className="span5">{spanText4}</span>
          <span className="jost-semi-bold-white-36px">{spanText5}</span> */}
          <span className="jost-semi-bold-white-363px">...Of the Bwindis, </span>
          <span className="span1">by the Bwindis, </span>
          <span className="span5">for the Bwindis</span>
        </div>
        <hr className="line9" />
        {/* <img className="line-2" src="/img/line-2@1x.svg" /> */}
        <div className="flex-row" style={{marginBottom: '12px'}}>
          <div className="join-our-community valign-text-middle jost-semi-bold-white-15px">{joinOurCommunity}</div>
          <p className="stay-tuned-for-more valign-text-middle jost-semi-bold-white-15px">{stayTunedForMore}</p>
        </div>
        <div className="flex-row-1">

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

export default Marketplace;

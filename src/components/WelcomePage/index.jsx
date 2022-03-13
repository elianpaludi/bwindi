import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

function WelcomePage({ props }) {
  const {
    bwindi_Logo,
    group14,
    theClubProvidesA,
    joinOurCommunity,
    stayTunedForMore,
    yourEMail,
    subscribe,
    termsConditions,
    copyright,
    bgvideo
  } = props;

  return (
    <div
      className="container-center-horizontal"
      style={{ background: 'black', justifyContent: 'space-between', flexDirection: 'column', minHeight: '100vh' }}
    >
      <div style={{ flexGrow: 1 }}>
        <div className="flex-row-center w-full" style={{ marginTop: '20px' }}>
          <img className="bwindi_logo-5" src={bwindi_Logo} alt="logo" />
        </div>

        <div className="flex-row-center w-full" style={{ marginTop: '20px' }}>
          <div className="BwinidiClub">
            <video loop="true" autoplay="autoplay" muted id="myVideo" style={{ marginBottom: '20px' }}>
              <source src={bgvideo} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="flex-row-center w-full" style={{ marginTop: '20px' }}>
          <Link to="/homepage"><img className="group-14" src={group14} alt="" /></Link>
        </div>

        <div className="flex-row-center w-full" style={{ marginTop: '10px' }}>
          <hr className="line91" />
        </div>

        <div className="flex-row-center w-full" style={{ marginTop: '29px' }}>
          <div className="the-club-provides-a animate-enter2" show-on-scroll="true">
          The club is exclusive to the <span style={{color: '#4d6194'}}>Bwindis</span> for a jungly VR gaming to interact and support the <span style={{color: '#f8ba35'}}>wildlife</span>!
          </div>
        </div>
      </div>

      <div>
        <div className="flex-row-center w-full">
          <hr className="line9" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '1200px', margin: '30px auto' }}>
          <div style={{ width: '30%' }}>
            <p className="jost-semi-bold-white-15px" style={{ marginLeft: '5px' }}>{joinOurCommunity}</p>

            <div style={{ marginTop: '20px' }}>
              <a target="blank" alt="twitter" href="https://twitter.com/Bwindi_NFTs"><img className="twitter" src="/img/twitter-1@2x.svg" alt="" /></a>
              <a target="blank" alt="linkedin" href="https://www.linkedin.com/company/bwindi/"><img className="flex-row-item" src="/img/linkedin-1@2x.svg" alt="" /></a>
              <a target="blank" alt="facebook" href="https://www.facebook.com/BwindiNFTs/"><img className="flex-row-item" src="/img/facebook-1@2x.svg" alt="" /></a>
              <a target="blank" alt="instagram" href="https://www.instagram.com/bwindi_nft/"><img className="flex-row-item" src="/img/instagram-1@2x.svg" alt="" /></a>
              <a target="blank" alt="discord" href="https://discord.com/invite/Swp4zj3Sqe"><img className="flex-row-item" src="/img/discord-1@2x.svg" alt="" /></a>
              <a target="blank" alt="youtube" href="https://www.youtube.com/channel/UCOqVypNUxB7G_18AOXQ_1pg"><img className="flex-row-item" src="/img/youtube@2x.svg" alt="" /></a>
            </div>

            <p className="jost-semi-bold-white-15px" style={{ marginLeft: '2px', marginTop: '20px' }}>
              <Link to="/terms-conditions" className="link">{termsConditions}</Link>
            </p>
          </div>

          <div style={{ width: '35%' }}>
            <p className="valign-text-middle jost-semi-bold-white-15px">{stayTunedForMore}</p>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <div className="mail-container border-1px-gray-chateau" style={{ marginLeft: 0, width: '70%' }}>
                <img className="mail" src="/img/mail@2x.svg" alt="mail" />
                <div className="your-e-mail valign-text-middle jost-normal-gray-chateau-14px">{yourEMail}</div>
              </div>
              <div className="frame-8">
                <div className="subscribe valign-text-middle jost-medium-black-14px">{subscribe}</div>
              </div>
            </div>

            <p className="valign-text-middle jost-semi-bold-white-15px" style={{ marginTop: '20px' }}>
              <a target="blank" href="https://bwindi.io/" className="jost-semi-bold-white-15px link">{copyright}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;

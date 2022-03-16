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
    BwindClub,
    BwindMarkect,
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
              <div className="overlap-group2">
                <video loop="true" autoplay="autoplay" loop muted>
                <source src={BwindClub} type="video/mp4" />
              </video>
              </div>
                <Link to="/bwindi-club"><img className="group-14" src={group14} alt="welcome"/></Link>
            </div>
            <div className="imageCol">
              <div className="overlap-group3">
                <video loop="true" autoplay="autoplay" loop muted>
                  <source src={BwindMarkect} type="video/mp4" />
                </video>
              </div>
                <Link to="/marketplace"><img className="group-15" src={group15} alt="marketplace"/></Link>
            </div>
          </div>
        </div>
        <div className="container"></div>
        <hr className="p-0 line90 hrline" />
       
        {/* <img className="line-111" src="/img/line-1@1x.svg" /> */}
        <div className="homeGorilaImage">
          <div className="customeContainer">
            <img className="x1290 gorilaImage" src={x1290} alt="1290"/>
            <h1 className="title1 montserrat-extra-bold-white-196px animate-enter" show-on-scroll="true">
              {title}
            </h1>
            <div className="erinnya-lyange-nze-b montserrat-bold-white-640px animate-enter1" show-on-scroll="true">
              {erinnyaLyangeNzeB}
            </div>
          </div>
        </div>

        <hr className="p-0 line9 hrlineFull" />
        <div className="footerContainer">
          <div className="customeContainer">
            <div className="flex-row-1 socialSbuscrib" >
              <div className="footerSocilaList">
                <div className="join-our-community valign-text-middle jost-semi-bold-white-15px">{joinOurCommunity}</div>
                <div className="footerSocial">
                  <a target="blank" alt="twitter" href="https://twitter.com/Bwindi_NFTs"><img className="twitter" src="/img/twitter-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="linkedin" href="https://www.linkedin.com/company/bwindi/"><img className="flex-row-item" src="/img/linkedin-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="facebook" href="https://www.facebook.com/BwindiNFTs/"><img className="flex-row-item" src="/img/facebook-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="instagram" href="https://www.instagram.com/bwindi_nft/"><img className="flex-row-item" src="/img/instagram-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="discord" href="https://discord.com/invite/Swp4zj3Sqe"><img className="flex-row-item" src="/img/discord-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="youtube" href="https://www.youtube.com/channel/UCOqVypNUxB7G_18AOXQ_1pg"><img className="flex-row-item" src="/img/youtube@2x.svg" alt="" /></a>
                </div>
              </div>

              <div className="footSubscrib">
                <p className="stay-tuned-for-more valign-text-middle jost-semi-bold-white-15px">{stayTunedForMore}</p>
                <div className="footerSubscrib">
                  <div id="mc_embed_signup">
                      <form action="https://archytas.us2.list-manage.com/subscribe/post?u=73a0cb8922213cdf019fdd867&amp;id=7bd09f5369" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                          <div id="mc_embed_signup_scroll">
                              <div class="mc-field-group">
                                  <img src="/img/mail.svg" alt="mail"/>
                                  <input type="email"  name="EMAIL" id="mce-EMAIL" placeholder="Your e-mail" />
                              </div>
                              <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"/></div>
                          </div>
                      </form>
                  </div>
                </div>
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
        
      </div>
    </div>
  );
}

export default MainPage;

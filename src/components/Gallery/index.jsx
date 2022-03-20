import React from "react";
import DropMenu from "../DropMenu";
import "./Gallery.css";
import { Link } from "react-router-dom";


function Gallery({ props }) {
  const {
    bwindi_Logo,
    buy,
    about,
    jungle,
    roadmap,
    team,
    gallery,
    records,
    members,
    termsConditions,
    copyright,
    ActivatedSoon,
  } = props;

  return (
    <div
      className="container-center-horizontal"
      style={{ background: 'black', justifyContent: 'space-between', flexDirection: 'column', minHeight: '100vh' }}
    >

        <div className="customeContainer menuContainer">
          <div className="menuRow">
            <div className="navBrand">
              <a href="../"><img className="bwindi_logo-5" src={bwindi_Logo} alt="" /></a>
            </div>
            <div className="navMain">
              <div className="overlap-group2-1 jost-semi-bold-white-13px" style={{ marginLeft: '220px' }}>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/bwindi-club-mainpage#buybwindi">{buy}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/bwindi-club-mainpage#about">{about}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/bwindi-club-mainpage#jungle">{jungle}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/bwindi-club-mainpage#roadmap">{roadmap}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/bwindi-club-mainpage#team">{team}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><Link to="/gallery">{gallery}</Link></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><Link to="/records">{records}</Link></div>
                <DropMenu />
              </div>
            </div>
          </div>
        </div>

      <div className="flex-column-center" style={{ flexGrow: 1 }}>
        <div className="flex-row-center w-full" style={{ marginTop: '20px' }}>
          <div className="bwindi-clubs animate-enter1" show-on-scroll="true">
            {ActivatedSoon}
          </div>
        </div>
      </div>
      
      <hr className="line9 hrlineFull" />
        <div className="footerContainer">
          <div className="customeContainer">
            <div className="flex-row" style={{marginBottom: '12px'}}>
              
            </div>
            <div className="flex-row-1 socialSbuscrib">
              <div className="footerSocilaList">
              <div className="join-our-community valign-text-middle jost-semi-bold-white-15px">Join our community</div>
                <div className="footerSocial">
                  <a target="blank" alt="twitter" href="https://twitter.com/Bwindi_NFTs"><img className="twitter" src="/img/twitter-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="linkedin" href="https://www.linkedin.com/company/bwindi/"><img className="flex-row-item" src="/img/linkedin-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="facebook" href="https://www.facebook.com/BwindiNFTs/"><img className="flex-row-item" src="/img/facebook-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="instagram" href="https://www.instagram.com/bwindi_nft/"><img className="flex-row-item" src="/img/instagram-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="discord" href="https://discord.com/invite/m2sfKE97NU"><img className="flex-row-item" src="/img/discord-1@2x.svg" alt="" /></a>
                  <a target="blank" alt="youtube" href="https://www.youtube.com/channel/UCOqVypNUxB7G_18AOXQ_1pg"><img className="flex-row-item" src="/img/youtube@2x.svg" alt="" /></a>
                </div>
              </div>
              
              <div className="footSubscrib">
                <p className="stay-tuned-for-more valign-text-middle jost-semi-bold-white-15px">
                  Stay tuned for more details by subscribing to our newsletter!
                </p>
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
  );
}

export default Gallery;

import React from "react";
import DropMenu from "../DropMenu";
import "./Records.css";
import { Link } from "react-router-dom";


function Records({ props }) {
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
      <div className="records_container">
           <h1 className="recordsTitle">
             <span className="recolor-blue">Prove</span>
             <span className="recolor-yellow">nance</span>
             </h1>

           <h3 className="sub-text_records">This page presents the provenance record of each season-1 of male Bwindis. Each Bwindi image is minted on the polygon chain.</h3>

           <h3 className="sub-text_records">Contract Address: <a className="hyperlink-hover" id="address" target="blank" href="https://polygonscan.com/token/0xdb33d738d328eb274ba41e99c00bd0e36781ce30">0xDB33D738d328EB...6781CE30</a></h3>
           <h3 className="sub-text_records"><a className="hyperlink-hover" target="blank" href="https://ipfs.io/ipfs/QmQG6mnuf2H8232uDtr2tzJmHmcVHfQZYP9gmpaWfwpEJ6/concatedHash.json">Concatenated Hash</a></h3>
           <h3 className="sub-text_records"><a className="hyperlink-hover" target="blank" href="https://ipfs.io/ipfs/QmQG6mnuf2H8232uDtr2tzJmHmcVHfQZYP9gmpaWfwpEJ6/provenanceHash.json">Provenance Hash</a></h3>

           <h3 className="sub-text_records">Provenance Record: The table below lists the original index, assigned Bwindi Token ID, SHA256 Hash output and IPFS link of each Male Bwindi from Season-1.</h3>
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

export default Records;

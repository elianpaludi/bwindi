import React from "react";
import DropMenu from "../DropMenu";
import "./Members.css";
import { Link } from "react-router-dom";

function Members({ props }) {
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
    connectMetamask
  } = props;

  return (
    <div
      className="container-center-horizontal"
      style={{ background: 'black', justifyContent: 'space-between', flexDirection: 'column', minHeight: '100vh' }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="flex-row-14 set_hit" style={{ marginTop: '20px' }}>
          <div className="flex-col-8">
            <img className="bwindi_logo-5" src={bwindi_Logo} alt="" />
          </div>
          <div className="flex-col-9">
            <div className="overlap-group2-1 jost-semi-bold-white-13px" style={{ marginLeft: '220px' }}>
              <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#buybwindi">{buy}</a></div>
              <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#about">{about}</a></div>
              <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#jungle">{jungle}</a></div>
              <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#roadmap">{roadmap}</a></div>
              <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#team">{team}</a></div>
              <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><Link to="/gallery">{gallery}</Link></div>
              <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><Link to="/records">{records}</Link></div>
              <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><Link to="/members">{members}</Link></div>
            </div>
            <DropMenu />
          </div>
        </div>
      </div>

      <div className="flex-column-center" style={{ flexGrow: 1 }}>
        <div className="flex-row-center w-full" style={{ marginTop: '20px' }}>
          <div className="bwindi-clubs animate-enter1" show-on-scroll="true">
            {ActivatedSoon}
          </div>
        </div>
        <div className="metamask">
          <div className="meta">
            <div className="overlap-group1-4">
              <div className="connect-metamask">{connectMetamask}</div>
              <img className="akar-iconsarrow-up-right-1" src="/img/akar-icons-arrow-up-right-1@2x.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex-row-center w-full">
          <hr className="line9" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '1200px', margin: '30px auto' }}>
          <div style={{ width: '30%' }}>
            <p className="jost-semi-bold-white-15px" style={{ marginLeft: '5px' }}>Join our community</p>

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
            <p className="valign-text-middle jost-semi-bold-white-15px">Stay tuned for more details by subscribing to our newsletter!</p>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <div className="mail-container border-1px-gray-chateau" style={{ marginLeft: 0, width: '70%' }}>
                <img className="mail" src="/img/mail@2x.svg" alt="mail" />
                <div className="your-e-mail valign-text-middle jost-normal-gray-chateau-14px">Your e-mail</div>
              </div>
              <div className="frame-8">
                <div className="subscribe valign-text-middle jost-medium-black-14px">Subscribe</div>
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

export default Members;

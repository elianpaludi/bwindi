import React from "react";
import DropMenu from "../DropMenu";
import "./TermsConditions.css";
import { Link } from "react-router-dom";

function TermsConditions({props}) {
  const {
    bwindi_Logo,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    joinOurCommunity1,
    joinOurCommunity2,
    stayTunedForMore,
    yourEMail,
    subscribe,
    termsConditions,
    copyright,
    buy,
    about,
    jungle,
    roadmap,
    team,
    gallery,
    records,
    members,
    dropMenuProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      


      <div className="terms-conditions-2 screen">

        <div className="customeContainer menuContainer">
          <div className="menuRow">
            <div className="navBrand">
              <a href="../"><img className="bwindi_logo-5" src={bwindi_Logo} alt="" /></a>
            </div>
            <div className="navMain">
              <div className="overlap-group2-1 jost-semi-bold-white-13px" style={{ marginLeft: '220px' }}>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#buybwindi">{buy}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#about">{about}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#jungle">{jungle}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#roadmap">{roadmap}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><a href="/homepage#team">{team}</a></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><Link to="/gallery">{gallery}</Link></div>
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><Link to="/records">{records}</Link></div>
                <DropMenu />
              </div>
            </div>
          </div>
        </div>


        <div className="terms_container">
          <div className="terms_content">
            <div className="terms-conditions-3 montserrat-bold-white-80px animate-enter12" show-on-scroll="true">
              <span className="montserrat-bold-kashmir-blue-80px" Style="  font-size: 60px;">{spanText1}</span>
              <span className="montserrat-bold-saffron-80px" Style="  font-size: 60px;">{spanText2}</span>
              <span className="span-3" Style="  font-size: 60px;">{spanText3}</span>
              <span className="span3" Style="  font-size: 60px;">{spanText4}</span>
              <span className="span-3" Style="  font-size: 60px;">{spanText5}</span>
              <span className="montserrat-bold-kashmir-blue-80px" Style="  font-size: 60px;">{spanText6}</span>
              <span className="montserrat-bold-saffron-80px" Style="  font-size: 60px;">{spanText7}</span>
            </div>
            <div className="flex-col-5">
              <div className="genral-the-bwindi-cl">
                <span className="term_titme">GENRAL</span>
                The Bwindi Club is a collection of digital artworks (NFTs) running on the Ethereum network. This website is
                an interface allowing participants to verify and exchange digital collectibles. Users are entirely
                responsible for the safety and management of their own private Ethereum wallets and validating all
                transactions and contracts generated by this website before approval. Furthermore, as the Bwindi Club smart
                contract runs on the Ethereum network, there is no liability or ability to undo, reverse, or restore any
                transactions.
                <br />
                <br />
                This website and its connected services are provided “as is” and “as available” without any kind of
                warranty. By using this website, you are accepting sole responsibility for all your transactions involving
                Bwindi Club digital collectibles.
                <br />
                <br />
                <span className="term_titme">OWNERSHIP</span>
                Each Bwindi the Adventurer is an NFT on the Ethereum blockchain. When you purchase an NFT using your
                Ethereum Wallet, you own the purchased Bwindi the Adventurer completely. Ownership of the NFT is mediated
                executed by the Smart Contract and the Ethereum and there is no reverse action to cancel the ownership after
                it is confirmed by the Ethereum network.
                <br />
                <br />
                <span className="term_titme">PERSONAL USE</span>
                After purchasing the Bwindi the Adventurer NFT, you become a member of the Bwindi Club and you must with
                these terms and any terms of use stated by the Bwindi Club. The ownership grants a worldwide, royalty-free
                license to use, copy, and display the purchased NFT, along with any extensions that the member chooses to
                create or use, within the limits of the following purposes: <br />
                1. member’s personal, non-commercial use; <br />
                2. as part of a marketplace that permits the purchase and sale of your Bwindi the Adventurer NFTs, provided
                that the marketplace cryptographically verifies each Bwindi the Adventurer NFT owner’s rights to display the
                artwork for their Bwindi the Adventurer NFT to ensure that only the actual owner can display the artwork; or{" "}
                <br />
                3. as part of a third-party website or application that permits the inclusion, involvement, or participation
                of your Bwindi the Adventurer NFT, provided that the website/application cryptographically verifies each
                Bwindi the Adventurer NFT owner’s rights to display the artwork for their Bwindi the Adventurer to ensure
                that only the actual owner can display the artwork, and provided that the artwork is no longer visible once
                the owner of the Bwindi the Adventurer leaves the website/application.
                <br />
                <br />
                
                <span className="term_titme">COMMERCIAL USE</span>
                After purchasing the Bwindi the Adventurer NFT, you become a member of the Bwindi Club and you must with
                these terms and any terms of use stated by the Bwindi Club. The ownership grants you an unlimited, worldwide
                license to use, copy, and display the purchased artwork for the purpose of creating derivative works based
                upon the artwork (“Commercial Use”). Examples of such Commercial Use would be the use of the artwork to
                produce and sell merchandise products displaying copies of the owned Bwindi the Adventurer.
              </div>
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
                    <a target="blank" alt="discord" href="https://discord.com/invite/Swp4zj3Sqe"><img className="flex-row-item" src="/img/discord-1@2x.svg" alt="" /></a>
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
    </div>
  );
}

export default TermsConditions;

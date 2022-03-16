import React from "react";
import DropMenu from "../DropMenu";
import "./HomePage.css";
import { Link } from "react-router-dom";


function HomePage({ props }) {
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
    bwindiArt022,
    HomepageVideo,
    bwindiClubWasEsta,
    membershipContainer,
    membershipFee,
    theMembershipIsAc,
    buyABwindi,
    initially2000Mal,
    buyABwindiOnOpensea,
    spanText3,
    spanText4,
    spanText5,
    overlapGroup2,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    theImpenetrableDig,
    spanText34,
    theTeamWillKeepD,
    spanText62,
    spanText63,
    spanText64,
    spanText65,
    spanText66,
    spanText67,
    spanText68,
    spanText69,
    spanText70,
    spanText71,
    spanText72,
    spanText73,
    spanText74,
    spanText75,
    spanText76,
    verifiedSmartContr,
    termsConditions,
    copyright,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="homepage screen mainhomepageScreen">
        {/* Navbar */}

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
                <div className="overlap-group2-item-1 valign-text-middle" style={{ width: '80px' }}><Link to="/members">{members}</Link></div>
                <DropMenu />
              </div>
            </div>
          </div>
        </div>
        
        <div className="">
          {/* Welcome section */}
          <div className="homepageVideo">
            <video loop="true" autoplay="autoplay" loop muted id="homepageVideo" style={{ marginBottom: '20px' }} width="100%" >
              <source src={HomepageVideo} type="video/mp4" />
            </video>
          </div>
          <div className="welcome">
            {/* <div className="flex-col-2">
              <div className="welcome-t-o-t-he animate-enter4" Style="    font-size: 30px;" show-on-scroll="true">
                {welcomeToThe}
              </div>
              <div className="bwindi-club-122 animate-enter3" show-on-scroll="true">
                <span className="span0">{spanText1}</span>
                <span className="span1">{spanText2}</span>
              </div>
            </div> */}
            <div className="homepageText bwindi-club-was-esta valign-text-middle" style={{ lineHeight: 1, marginLeft: 0 }}>{bwindiClubWasEsta}</div>
          </div>

          
          <div className="customeContainer"><img className="line-9" src="/img/line-6@1x.svg" alt="" /></div>
          
          {/* Buy a bwindi */}
          <div className="buy-bwindi" id="buybwindi">
            <div
              className="membership-container flex-column-center"
              style={{ backgroundImage: `url(${membershipContainer})` }}
            >
              <div>
                <div className="membership-fee valign-text-middle animate-enter7" show-on-scroll="true" style={{ position: 'unset' }}>
                  <p style={{ textAlign: 'center' }}>{membershipFee}</p>
                </div>
                <div className="the-membership-is-ac" style={{ lineHeight: 1, position: 'unset' }}>
                  {theMembershipIsAc}
                </div>
              </div>
            </div>
            <div className="flex-col-3" style={{ marginBottom: 0, minHeight: 'unset' }}>
              <div className="buy-a-bwindi montserrat-semi-bold-white-505px animate-enter6" show-on-scroll="true">
                {buyABwindi}
              </div>
              <div className="initially-2000-mal jost-medium-white-20px" style={{ marginTop: '0px', lineHeight: 1 }}>{initially2000Mal}</div>
              <div className="buy-button" style={{ margin: 0 }}>
                <div className="overlap-group">
                  <div className="buy-a-bwindi-on-open-sea">
                    <a target="blank" href="https://opensea.io/collection/bwindi-club">{buyABwindiOnOpensea}</a>
                  </div>
                  <img className="akar-iconsarrow-up-right" src="/img/akar-icons-arrow-up-right@2x.svg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="customeContainer"><img className="line-9" src="/img/line-6@1x.svg" alt="" /></div>
          
          
          {/* The specifications */}
          <div className="specs" id="about">
            <div style={{display: 'table'}}>
              <div className="each-bwindi-nft-is-u jost-medium-white-20px" style={{display: 'table-cell', verticalAlign: 'middle'}}>
                <span className="span0-1 jost-medium-white-20px" style={{ lineHeight: 0 }}>{spanText3}</span>
                <span className="span1-2 jost-medium-white-20px" style={{ lineHeight: 0 }}>{spanText4}</span>
                <span className="span2 jost-medium-white-20px" style={{ lineHeight: 0 }}>{spanText5}</span>
              </div>
            </div>
            
            <div className="overlap-group-1 add_sty" style={{ backgroundImage: `url(${overlapGroup2})` }}>
              <div className="the-specifications montserrat-semi-bold-white-50px animate-enter5" show-on-scroll="true">
                <p className="montserrat-semi-bold-white-50px" style={{ textAlign: 'center' }}>{spanText6}</p>
                <p className="montserrat-regular-normal-white-45px" style={{ textAlign: 'center' }}>{spanText7}</p>
              </div>
            </div>
          </div>

          <div className="customeContainer"><img className="line-9" src="/img/line-6@1x.svg" alt="" /></div>
          
          
          {/* The Impenetrable Digital Jungle */}
          <div className="jungle" style={{ height: 'unset' }} id="jungle">
            <div
              className="the-impenetrable-digital-jungle montserrat-semi-bold-white-50px animate-enter8"
              show-on-scroll="true"
            >
              <span className="montserrat-semi-bold-white-500px">{spanText8}</span>
              <span className="montserrat-regular-normal-white-450px">{spanText9}</span>
            </div>
            <div className="the-impenetrable-dig jost-medium-white-20px" style={{ padding: 'unset', opacity: '1', }}>{theImpenetrableDig}</div>
          </div>

          <img className="line" src="/img/line-6@1x.svg" alt="" />
          
          {/* Roadmap activation */}
          <div className="overlap-group11" style={{ maxWidth: '1200px', height: 'auto' }} id="roadmap">
            <div className="roadmap" style={{ position: 'unset', margin: 'unset', minHeight: '0' }}>
              <div className="roadmap-activations animate-enter11" show-on-scroll="true" style={{ width: '100%' }}>
                <p className="montserrat-semi-bold-white-507px RoadmapActivation">
                  Roadmap <span>Activation</span>
                  <span className="span1">*</span>
                </p>
              </div>

              <div className="montserrat-bold-white-20px" style={{ marginTop: '30px' }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div className="montserrat-bold-white-20px animate-enter10">
                    <p className="montserrat-bold-saffron-20px">March 2022</p>
                    <p className="jost-medium-white-20px">
                      <span className="jost-semi-bold-saffron-20px">Season 1: </span>
                      New 2,000 male Bwindi the Adventurer are generated and posted on OpenSea for sale.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">May 2022</p>
                    <p className="jost-medium-white-20px">
                      The launching of Bwindi Marketplace.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">May 2022</p>
                    <p className="jost-medium-white-20px">
                      The Impenetrable Digital Jungle will be unlocked.
                    </p>
                  </div>

                  <div className="montserrat-bold-white-20px animate-enter10" style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">May 2022</p>
                    <p className="jost-medium-white-20px">
                      <span className="jost-semi-bold-saffron-20px">Season 2: </span>
                      New 2,000 female Bwindi the Adventure will be generated and posted on OpenSea and Bwindi Marketplace for sale.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">Jun 2022</p>
                    <p className="jost-medium-white-20px">
                      Launching and listing of Bwindi coin on Uniswap -See below the Tokenomics.
                    </p>
                  </div>

                  <div className="flex-row-between" style={{ marginTop: '20px' }}>
                    <div>
                      <p className="line-height-none">
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-semi-bold-saffron-16px">Name: </span>
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-medium-white-16px">Biwindi</span><br />
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-semi-bold-saffron-16px">Symbol: </span>
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-medium-white-16px">BWD</span><br />
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-semi-bold-saffron-16px">Total Supply: </span>
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-medium-white-16px">100,000,000</span><br />
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-semi-bold-saffron-16px">Contract Address: </span>
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-medium-white-16px">Published Soon</span><br />
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-semi-bold-saffron-16px">Exchange: </span>
                        <span style={{ lineHeight: 1 }} className="span-1 montserrat-medium-white-16px">UniSwap</span><br />
                        <span style={{ lineHeight: 1 }} className="span1-1 montserrat-semi-bold-saffron-16px">Distribution Details: </span><br />
                        <span style={{ lineHeight: 1 }} className="span1-1 montserrat-medium-white-16px">{spanText34}</span>
                      </p>
                    </div>

                    <div>
                      <img src="/img/logo-b@2x.svg" alt="" style={{ position: 'unset', height: '200px' }} />
                    </div>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">July 2022</p>
                    <p className="jost-medium-white-20px">
                      First live streaming of safari trip from the Bwindi Impenetrable Forest accessed in the Impenetrable Digital Jungle with or without VR headsets.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">July 2022</p>
                    <p className="jost-medium-white-20px">
                      Digital breeding party between male and female Bwindis from Seasons 1 and 2. Each couple who chose to match will be able to breed 1 Bwindi NFT using our online breeding program. The generated Bwindi NFT will be donated to non-profit wildlife organizations.
                    </p>
                  </div>

                  <div className="montserrat-bold-white-20px animate-enter10" style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">August 2022</p>
                    <p className="jost-medium-white-20px">
                      <span className="jost-semi-bold-saffron-20px">Season 3: </span>
                      Newl 2,000 male and 2,000 female Bwindis will be generated and posted on OpenSea andBwindi Marketplace for sale.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">September 2022</p>
                    <p className="jost-medium-white-20px">
                      Second live streaming of safari trip from a safari park voted by the community and accessed in the Impenetrable Digital Jungle with or without VR headsets.
                    </p>
                  </div>

                  <div className="montserrat-bold-white-20px animate-enter10" style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">November 2022</p>
                    <p className="jost-medium-white-20px">
                      <span className="jost-semi-bold-saffron-20px">Season 4: </span>
                      New 2,000 male and 2,000 female Bwindis will be generated posted on OpenSea and Bwindi marketplace for sale.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">December 2022</p>
                    <p className="jost-medium-white-20px">
                      Third live streaming of safari trip from a safari park voted by the community and accessed in the Impenetrable Digital Jungle with or without VR headsets.
                    </p>
                  </div>

                  <div className="montserrat-bold-white-20px animate-enter10" style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">January 2022</p>
                    <p className="jost-medium-white-20px">
                      <span className="jost-semi-bold-saffron-20px">Season 5: </span>
                      New 1,500 male and 1,500 female Bwindis are posted on OpenSea and Bwindi marketplace for sale.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">Feburary 2023</p>
                    <p className="jost-medium-white-20px">
                      Digital breeding party between male and female Bwindis from Seasons 3, 4, and 5. Each couple who chose to match will be able to breed 1 Bwindi NFT using our online breeding program. The generated Bwindi NFT will be donated to non-profit wildlife organizations.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px">March 2023</p>
                    <p className="jost-medium-white-20px">
                      Finalization of Bwindi DAO (Decentralized Autonomous Organization) to vote for March 2023 - March 2024 roadmap.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <p className="montserrat-bold-saffron-20px" style={{ textAlign: 'center' }}>
                      *The Roadmap Activations are subject to changes based on community votes, weather and parks conditions, authorities’ approvals, and any force majeure that may occur.
                    </p>
                    <p className="valign-text-middle jost-medium-white-20px" style={{ textAlign: 'center', lineHeight: 2 }}>{theTeamWillKeepD}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <img className="rectangle-32" src={rectangle32} alt="" />
            <img className="rectangle-37" src={rectangle37} alt="" /> */}
          </div>

          <div className="customeContainer"><img className="line set_up34" src="/img/line-6@1x.svg" alt="" style={{ marginTop: '40px' }} /></div>
          
          {/* The team */}
          <div className="team" id="team">
            <div className="team_imag_container">
              <div className="simageContent">
                <img className="mask-group" src="/img/member_1.png" alt="" />
                <img className="mask-group-1" src="/img/member_2.png" alt="" />
              </div>
              <div className="simageContent">
                <img className="mask-group-2" src="/img/member_3.png" alt="" />
                <img className="mask-group-3" src="/img/member_4.png" alt="" />
              </div>
              <div className="simageContent">
                <img className="mask-group-4" src="/img/member_5.png" alt="" />
                <img className="mask-group-5" src="/img/member_6.png" alt="" />
              </div>
            </div>
            <div className="the-container theTeamCOntainer" style={{ alignSelf: 'unset' }}>
              <div className="the-team animate-enter9" show-on-scroll="true">
                <span className="">{spanText62}</span>
                <span className="fwn">{spanText63}</span>
              </div>
              <div className="the-bwindi-club-was">
                <span className="jost-medium-white-20px">{spanText64}</span>
                <span className="jost-medium-saffron-20px">{spanText65}</span>
                <span className="jost-medium-white-20px">{spanText66}</span>
                <span className="jost-medium-saffron-20px">{spanText67}</span>
                <span className="jost-medium-white-20px">{spanText68}</span>
                <span className="jost-medium-saffron-20px">{spanText69}</span>
                <span className="jost-medium-white-20px">{spanText70}</span>
                <span className="jost-medium-saffron-20px">{spanText71}</span>
                <span className="jost-medium-white-20px">{spanText72}</span>
                <span className="jost-medium-saffron-20px">{spanText73}</span>
                <span className="jost-medium-white-20px">{spanText74}</span>
                <span className="jost-medium-saffron-20px">{spanText75}</span>
                <span className="jost-medium-white-20px">{spanText76}</span>
              </div>
            </div>
          </div>
          <div className="customeContainer"><img className="line-11" src="/img/line-6@1x.svg" alt="" /></div>
          <div className="verified-smart-contr valign-text-middle"><a href="https://polygonscan.com/token/0xdb33d738d328eb274ba41e99c00bd0e36781ce30" target="_blank">Verified Smart Contract Address:  <span>{verifiedSmartContr}</span></a> </div>


          {/* <img className="line-2-1" src="/img/line-2@1x.svg" alt=""/> */}
          {/* <div className="flex-row-4">
            <div className="join-our-community-1 valign-text-middle jost-bold-zircon-14px">{joinOurCommunity}</div>
            <p className="stay-tuned-for-more-1 valign-text-middle jost-semi-bold-white-15px">{stayTunedForMore}</p>
          </div>
          <div className="flex-row-5">
            
          <a target="blank" alt="twitter" href="https://twitter.com/Bwindi_NFTs"><img className="twitter" src="/img/twitter-1@2x.svg" alt=""/></a>
          <a target="blank" alt="linkedin" href="https://www.linkedin.com/company/bwindi/"><img className="flex-row-item" src="/img/linkedin-1@2x.svg" alt=""/></a>
          <a target="blank" alt="facebook" href="https://www.facebook.com/BwindiNFTs/"><img className="flex-row-item" src="/img/facebook-1@2x.svg" alt="" /></a>
          <a target="blank" alt="instagram" href="https://www.instagram.com/bwindi_nft/"><img className="flex-row-item" src="/img/instagram-1@2x.svg" alt=""/></a>
          <a target="blank" alt="discord" href="https://discord.com/invite/Swp4zj3Sqe"><img className="flex-row-item" src="/img/discord-1@2x.svg" alt=""/></a>
          <a target="blank" alt="youtube" href="https://www.youtube.com/channel/UCOqVypNUxB7G_18AOXQ_1pg"><img className="flex-row-item" src="/img/youtube@2x.svg" alt=""/></a>
          

            <div className="mail-container-1 border-1px-gray-chateau">
              <img className="mail-1" src="/img/mail@2x.svg" alt=""/>
              <div className="your-e-mail-1 valign-text-middle jost-normal-gray-chateau-14px">{yourEMail}</div>
            </div>
            <div className="subscribe-1">
              <div className="subscribe-2 valign-text-middle jost-medium-black-14px">{subscribe}</div>
            </div>
          </div>
          <div className="flex-row-6 jost-bold-white-14px">
            <div className="terms-conditions-1 valign-text-middle"><Link to="/terms-conditions">{termsConditions}</Link></div>
            <p className="copyright-1 valign-text-middle"><a href="https://bwindi.io/">{copyright}</a></p>
          </div> */}
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

export default HomePage;

import './App.css';
import { Routes, BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import TermsConditions from './components/TermsConditions';
import Members from './components/Members';
import Records from './components/Records';
import Gallery from './components/Gallery';
import MainPage from './components/MainPage';
import Marketplace from './components/Marketplace';

function App() {
  return (
    <Router history={BrowserRouter}>

      <Routes>

        <Route path="/" element={<MainPage props={mainPageData} />} />

        <Route path="/main-page" element={<MainPage props={mainPageData} />} />

        <Route path="/bwindi-club" element={<WelcomePage props={welcomePageData} />} />

        <Route path="/marketplace" element={<Marketplace props={marketplaceData} />} />

        <Route path="/bwindi-club-mainpage" element={<HomePage props={homePageData} />} />

        <Route path="/terms-conditions" element={<TermsConditions props={termsConditionsData} />} />

        <Route path="/members" element={<Members props={membersData} />} />

        <Route path="/records" element={<Records props={recordsData} />} />

        <Route path="/gallery" element={<Gallery props={galleryData} />} />

      </Routes>
    </Router>
  );
}

export default App;

// Homepage Data
const homePageData =
{
  bwindi_Logo: "/img/bwindi-logo-3@1x.png",
  buy: "BUY",
  about: "ABOUT",
  jungle: "JUNGLE",
  roadmap: "ROADMAP",
  team: "TEAM",
  gallery: "GALLERY",
  records: "RECORDS",
  members: "MEMBERS",
  bwindiArt022: "/img/bwindi-art02-2@1x.png",
  HomepageVideo: "/video/Digital-Jungle.mp4",
  welcomeToThe: "Welcome To The",
  spanText1: "BWINDI ",
  spanText2: "CLUB",
  bwindiClubWasEsta: "Bwindi Club was established by Bwindi the Adventurer for members to own cool NFTs of him and his family members. Bwindi the Adventurer donates 10% to non-profit organizations that protect wildlife with a focus in Africa. The club is exclusive to its members who hold Bwindi NFTs, which allow them to benefit from discounts when buying or selling digital and physical assets on Bwindi’s marketplace. Members can benefit from major discounts and exclusive offers for all the digital assets developed by <> <Link to='/about'>Go to Aboutpage</Link><a href='http://your360.io/' target='__blank'> your360.io </a> </>(Virtual Design-Build Contractor) in the Metaverse. Members will get 5% of Bwindi coin with a one-year lockup period. The club grants its members access to the Impenetrable Digital Jungle owned by Bwindi the Adventurer and located in the Ethereum blockchain. The Jungle includes Bwindi’s Treehouse, Marketplace, Safari Parks, Bwindi Club, and Love Cave. Activities will be unlocked by the community through a progressive roadmap activation.",
  membershipContainer: "/img/158-1@1x.png",
  membershipFee: "Membership Fee",
  theMembershipIsAc: <><br /><br />The membership is accessible by purchasing a Bwindi the Adventurer NFT that costs 0.1 ETH. The NFTs will be generated on seasonal bases, and they will be announced one week before posted for sales.<br /><br />There will be 60 Bwindi NFTs withheld every season from the sale for the founders of the Bwindi Club.</>,
  buyABwindi: "Buy A Bwindi",
  initially2000Mal: "Initially, 2,000 male Bwindi will be released and available on OpenSea for sale. The NFTs will also be available on Bwindi Marketplace as soon as it is launched. Bwindi the Adventurer is still building his marketplace and the grand opening date can be found in the progressive roadmap.",
  buyABwindiOnOpensea: "Buy A Bwindi On Opensea",
  spanText3: <>Each Bwindi NFT is unique and programmatically generated from more than 80 traits per season. They include expressions, clothing, hair style and headwear, jewelry, accessories, trip locations, and much more. Each Bwindi NFT is unique and rare.<br /></>,
  spanText4: <><br /></>,
  spanText5: <>All the Bwindis are stored as ERC-721 on the Polygon blockchain and hosted on an IPFS (Records and Proof). To access locations and activities in the Impenetrable Digital Jungle, benefit from discounts and offers; members will need to sign using their Metamask wallet using their accounts that was used to purchase their Bwindi NFT.<br /><br />Each Bwindi NFT gives its owner a unique avatar, a digital identity, and a rare collectible that will increase in value as the roadmap progresses and the Bwindi Club grows.</>,
  overlapGroup2: "/img/98-1@2x.png",
  spanText6: <>The <br /></>,
  spanText7: "Specifications",
  spanText8: <>The Impenetrable<br /></>,
  spanText9: "Digital Jungle",
  theImpenetrableDig: "The Impenetrable Digital Jungle will be accessible and operational once the presale period is over. The jungle is developed using Unreal Engine and can be accessible using web browser with or without the VR headsets. Members will be able to use many communication tools including text, voice, and video chats. They can also create private groups, share files, stream events, and take pictures",
  line4: "/img/line-4@1x.png",
  spanText10: "Roadmap Activations",
  spanText11: "*",
  spanText12: <>May 2022<br /></>,
  spanText13: "The Impenetrable Digital Jungle will be unlocked.",
  spanText14: <>March 2022<br /></>,
  spanText15: "The launching of Bwindi Marketplace. (70% Completed)",
  spanText16: <>February 2022<br />Season 1:</>,
  spanText17: " New 2,000 male Bwindi the Adventurer are generated and posted on OpenSea for sale. (100% Completed)",
  spanText18: <>May 2022<br />Season 2:</>,
  spanText19: " ",
  spanText20: "New 2,000 female Bwindi the Adventure will be generated and posted on OpenSea and Bwindi Marketplace for sale. (10% Completed)",
  spanText21: <>Jun 2022<br /></>,
  spanText22: "Launching and listing of Bwindi token for swapping -See below the Tokenomics. (90% Completed)",
  spanText23: "Name:",
  spanText24: <> Bwndi<br /></>,
  spanText25: "Symbol:",
  spanText26: <> TBA<br /></>,
  spanText27: "Total Supply:",
  spanText28: <> 100,000,000<br /></>,
  spanText29: "Contract Address:",
  spanText31: "Exchange: ",
  spanText32: <>Published soon, follow us on discord <br /></>,
  spanText33: <>Distribution Details:<br /></>,
  spanText34: <>• Presale: No lockup <><p className="yellow">(Presale will start in March 2022) </p></><br />• Founders: 15%, 12-month lockup<br />• Development: 20%, 2-month lockup<br />• Governance: 10%, 12-month lockup<br />• Marketing and partners: 10%, 2-month lockup<br />• Donations to wildlife protection organizations: %10, 6-month lockup<br />• Bwindi Club Members: 5%, 12-month lockup<br />• Public Sale: 20%, 1-month lockup <><p className="yellow">(Presale will start in April 2022) </p></> <br />• After swapping Bwindi tokens, there is a 2-month lockup during the first 12 months</>,
  spanText35: <>July 2022<br /></>,
  spanText36: "First live streaming of safari trip from the Bwindi Impenetrable Forest accessed in the Impenetrable Digital Jungle with or without VR headsets.",
  spanText37: "July 2022",
  spanText38: <><br /></>,
  spanText39: "Digital breeding party between male and female Bwindis from Seasons 1 and 2. Each couple who chose to match will be able to breed 1 Bwindi NFT using our online breeding program. The generated Bwindi NFT will be donated to non-profit wildlife organizations.",
  spanText40: <>August 2022<br /></>,
  spanText41: "Season 3:",
  spanText42: " New 2,000 male and 2,000 female Bwindis will be generated and posted on OpenSea and Bwindi Marketplace for sale.",
  spanText43: <>September 2022<br /></>,
  spanText44: "Second live streaming of safari trip from a safari park voted by the community and accessed in the Impenetrable Digital Jungle with or without VR headsets",
  spanText45: <>November 2022<br /></>,
  spanText46: "Season 4:",
  spanText47: " ",
  spanText48: "New 2,000 male and 2,000 female Bwindis will be generated and posted on OpenSea and Bwindi marketplace for sale.",
  spanText49: <>December 2022<br /></>,
  spanText50: "Third live streaming of safari trip from a safari park voted by the community and accessed in the Impenetrable Digital Jungle with or without VR headsets.",
  spanText51: <>January 2023<br /></>,
  spanText52: "Season 5",
  spanText53: ": New 1,500 male and 1,500 female Bwindis are posted on OpenSea and Bwindi marketplace for sale.",
  spanText54: <>February 2023<br /></>,
  spanText55: "Fourth live streaming of safari trip from a safari park voted by the community and accessed in the Impenetrable Digital Jungle with or without VR headsets.",
  spanText56: <>February 2023<br /></>,
  spanText57: "Digital breeding party between male and female Bwindis from Seasons 3, 4, and 5. Each couple who chose to match will be able to breed 1 Bwindi NFT using our online breeding program. The generated Bwindi NFT will be donated to non-profit wildlife organizations.",
  spanText58: <>March 2023<br /></>,
  spanText59: "Finalization of Bwindi DAO (Decentralized Autonomous Organization) to vote for March 2023 - March 2024 roadmap.",
  spanText60: "*",
  spanText61: "The Roadmap Activations are subject to changes based on community votes, weather and parks conditions, authorities’ approvals, and any force majeure that may occur.",
  theTeamWillKeepD: "The team will keep developing cool tools and entertainments during the Roadmap Activations period.",
  rectangle32: "/img/rectangle-32@1x.png",
  rectangle37: "/img/rectangle-32@1x.png",
  spanText62: "The ",
  spanText63: "Team",
  spanText64: <>The Bwindi Club was created by six members who care for wildlife. Our team members create bridges and intersections addressing different views, interests, and concerns. <br /></>,
  spanText65: "Bigboibi: ",
  spanText66: <>Wildlife visionary, owner of Minecraft safari, and future wildlife expert.<br /></>,
  spanText67: "Nisdasis: ",
  spanText68: <>Artist, visionary, comedian, and future designer and influencer.<br /></>,
  spanText69: "Yazzungullo:",
  spanText70: <> Philosopher, visionary, and future medical doctor. <br /></>,
  spanText71: "Facuu:",
  spanText72: <> Great artist and crypto advocate. <br /></>,
  spanText73: "Greymarie:",
  spanText74: <> Researcher and crypto advocate.<br /></>,
  spanText75: "Archytas:",
  spanText76: <> A servant leader, visionary, Metaverse and crypto advocate, and a developer.<br /></>,
  spanText77: " Elian: ",
  spanText78: " A blockchain developer, Metaverse and crypto expert, and a researcher.",
  verifiedSmartContr: "0xDB33D738d328EB274BA41e99C00Bd0e36781CE30",
  joinOurCommunity: "Join our community",
  stayTunedForMore: "Stay tuned for more details by subscribing to our newsletter!",
  yourEMail: "Your e-mail",
  subscribe: "Subscribe",
  termsConditions: "Terms & Conditions",
  copyright: "Copyright © 2022 Bwindi Club by Archytas Technologies Corp",
};

const dropMenu2Data =
{
  className: "drop-menu-1",
};

const termsConditionsData =
{
  bwindi_Logo: "/img/bwindi-logo-3@1x.png",
  spanText1: "Ter",
  spanText2: "ms",
  spanText3: " ",
  spanText4: "&",
  spanText5: " ",
  spanText6: "Condi",
  spanText7: "tions",
  joinOurCommunity1: "Join our community",
  joinOurCommunity2: "Join our community",
  stayTunedForMore: "Stay tuned for more details by subscribing to our newsletter!",
  yourEMail: "Your e-mail",
  subscribe: "Subscribe",
  termsConditions: "Terms & Conditions",
  copyright: "Copyright © 2022 Bwindi Club by Archytas Technologies Corp",
  buy: "BUY",
  about: "ABOUT",
  jungle: "JUNGLE",
  roadmap: "ROADMAP",
  team: "TEAM",
  gallery: "GALLERY",
  records: "RECORDS",
  members: "MEMBERS",
  dropMenuProps: dropMenu2Data,
};

const membersData =
{
  bwindi_Logo: "/img/bwindi-logo-3@1x.png",
  spanText1: "Mem",
  spanText2: "bers",
  ActivatedSoon: "Activated Soon",
  buy: "BUY",
  about: "ABOUT",
  jungle: "JUNGLE",
  roadmap: "ROADMAP",
  team: "TEAM",
  gallery: "GALLERY",
  records: "RECORDS",
  members: "MEMBERS",
  connectMetamask: <>CONNECT <br />METAMASK</>,
  joinOurCommunity: "Join our community",
  stayTunedForMore: "Stay tuned for more details by subscribing to our newsletter!",
  inputType: "email",
  inputPlaceholder: "Your e-mail",
  subscribe: "Subscribe",
  termsConditions: "Terms & Conditions",
  copyright: "Copyright © 2022 Bwindi Club by Archytas Technologies Corp",
};

const recordsData = {
  bwindi_Logo: "/img/bwindi-logo-1@1x.png",
  spanText1: "Reco",
  spanText2: "rds",
  ActivatedSoon: "Activated Soon",
  buy: "BUY",
  about: "ABOUT",
  jungle: "JUNGLE",
  roadmap: "ROADMAP",
  team: "TEAM",
  gallery: "GALLERY",
  records: "RECORDS",
  members: "MEMBERS",
  joinOurCommunity: "Join our community",
  stayTunedForMore: "Stay tuned for more details by subscribing to our newsletter!",
  yourEMail: "Your e-mail",
  subscribe: "Subscribe",
  termsConditions: "Terms & Conditions",
  copyright: "Copyright © 2022 Bwindi Club by Archytas Technologies Corp",
};

const galleryData = {
  bwindi_Logo: "/img/bwindi-logo-1@1x.png",
  spanText1: "Gall",
  ActivatedSoon: "Activated Soon",
  spanText2: "ery",
  buy: "BUY",
  about: "ABOUT",
  jungle: "JUNGLE",
  roadmap: "ROADMAP",
  team: "TEAM",
  gallery: "GALLERY",
  records: "RECORDS",
  members: "MEMBERS",
  joinOurCommunity: "Join our community",
  stayTunedForMore: "Stay tuned for more details by subscribing to our newsletter!",
  yourEMail: "Your e-mail",
  subscribe: "Subscribe",
  termsConditions: "Terms & Conditions",
  copyright: "Copyright © 2022 Bwindi Club by Archytas Technologies Corp",
};

const welcomePageData = {
  bwindi_Logo: "/img/bwindi-logo@1x.png",
  bgvideo: "/video/Bwinidi-Club.mp4",
  pexelsJuliaFilirovska71902271: "/img/pexels-julia-filirovska-7190227-1@1x.png",
  title: "WELCOME TO",
  bwindiClub: "BWINDI CLUB",
  group14: "/img/group-14-1@1x.png",
  theClubProvidesA: "The club is exclusive to the Bwindis for a jungly VR gaming to interact and support the wildlife!",
  joinOurCommunity: "Join our community",
  stayTunedForMore: "Stay tuned for more details by subscribing to our newsletter!",
  yourEMail: "Your e-mail",
  subscribe: "Subscribe",
  termsConditions: "Terms & Conditions",
  copyright: "Copyright © 2022 Bwindi Club by Archytas Technologies Corp",
};

const marketplaceData = {
  bwindi_Logo: "/img/bwindi-logo@1x.png",
  bgvideo: "/video/MarketplaceFinal.mp4",
  pexelsJuliaFilirovska71902271: "/img/bwindi-art02-2@1x.png",
  ActiveSoon: "/img/activesoon.svg",
  title: "WELCOME TO",
  bwindiMarketplace: "BWINDI MARKETPLACE",
  group14: "/img/group-14-1@1x.png",
  spanText1: "The world’s first environmental digital marketplace for ",
  spanText2: "crypto collectibles",
  spanText3: " and ",
  spanText4: "non-fungible tokens (NFTs)",
  spanText5: ".",
  joinOurCommunity: "Join our community",
  stayTunedForMore: "Stay tuned for more details by subscribing to our newsletter!",
  yourEMail: "Your e-mail",
  subscribe: "Subscribe",
  termsConditions: "Terms & Conditions",
  copyright: "Copyright © 2022 Bwindi Club by Archytas Technologies Corp",
};

const mainPageData = {
  bwindi_Logo: "/img/bwindi-logo@1x.png",
  overlapGroup1: "/img/bwindi-club-1@1x.png",
  BwindClub: "/video/Bwinidi-Club.mp4",
  BwindMarkect: "/video/MarketplaceFinal.mp4",
  BWINDICLUBOpen: "/video/Digital-Jungle.mp4",
  BWINDIOMARKETpen: "/video/Digital-Jungle.mp4",
  bwindiClub1: "BWINDI CLUB",
  overlapGroup2: "/img/bwindi-art02-2@1x.png",
  bwindiClub2: "BWINDI MARKETPLACE",
  group14: "/img/group-14@1x.png",
  group15: "/img/group-15@1x.png",
  x1290: "/img/1290@2x.png",
  title: "Gyebale Ko!",
  erinnyaLyangeNzeB: <><span style={{color: '#f8ba35'}}>Erinnya lyange nze</span> <br /><span style={{color: '#4d6194'}}>Bwindi the Adventurer</span> </>,
  joinOurCommunity: "Join our community",
  stayTunedForMore: "Stay tuned for more details by subscribing to our newsletter!",
  yourEMail: "Your e-mail",
  subscribe: "Subscribe",
  termsConditions: "Terms & Conditions",
  copyright: "Copyright © 2022 Bwindi Club by Archytas Technologies Corp",
};

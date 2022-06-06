import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./components/Content";
import HOME from "./components/HOME";
import LOGIN from "./components/LOGIN";
import SignUp from "./components/SignUp";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/content">
            <Content
              kisspngNetflixStreamingMediaTelevis="/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png"
              uiuhj6En7Yitwqwktbwjvt3="/img/uiuhj6en7yitwqwktbwjvt-3@1x.png"
            />
          </Route>
          <Route path="/home">
            <HOME {...hOMEData} />
          </Route>
          <Route path="/:path(|login)">
            <LOGIN {...lOGINData} />
          </Route>
          <Route path="/sign-up">
            <SignUp {...signUpData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const hOMEData = {
    place: "Home",
    kisspngNetflixStreamingMediaTelevis: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png",
    tvShows: "TV Shows",
    movies: "Movies",
    myList: "My List",
    recentlyAdded: "Recently Added",
    uiuhj6En7Yitwqwktbwjvt3: "/img/uiuhj6en7yitwqwktbwjvt-3@1x.png",
    x158445UntitledDesign561: "/img/158445-untitled-design-56-1@2x.png",
    x02_Nf_Thewitcher_Socialskin_Facebo: "/img/02-nf-thewitcher-socialskin-facebook-1@2x.png",
    x63D2751005919991: "/img/63d275100591999-1@2x.png",
    arcaneimage: "/img/arcaneimage@2x.png",
    dbkqwqouwaa1Rsi1: "/img/dbkqwqouwaa1rsi-1@2x.png",
    oitnbp1: "/img/oitnbp-1@2x.png",
};

const lOGINData = {
    f75774Ea9A7C44EaA7C791D1E9Df10E61: "/img/f75774ea-9a7c-44ea-a7c7-91d1e9df10e6-1@1x.png",
    signUpNow: "Sign up now.",
    signIn1: "Sign In",
    newToNetflix: "New to Netflix?",
    kisspngNetflixStreamingMediaTelevis: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png",
    thisPageIsProtect: <React.Fragment>This page is protected by <br />Google reCHAPATCHA to ensure you’re not a bot. Learn more.</React.Fragment>,
    rememberMe: "Remember me",
    needHelp: "Need help?",
    signIn2: "Sign In",
    questionsCall18445052993: "Questions? Call 1-844-505-2993",
    faq: "FAQ",
    cookiePreferences: "Cookie Preferences",
    helpCenter: "Help Center",
    corporateInformation: "Corporate Information",
    termsOfUse: "Terms of Use",
    privacy: "Privacy",
    label: "Email or phone nunber",
};

const signUpData = {
    signUpPageBackground: "/img/sign-up-page-background@1x.png",
    netflixLogo: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png",
    title: "Unlimited movies, TV shows, and more.",
    watchAnywhereCancelAnytime: "Watch anywhere. Cancel anytime.",
    readyToWatchEnte1: "Ready to watch? Enter your email to create or restart your memebership.",
    getStarted1: "Get Started >",
    signIn: "Sign In",
    enjoyOnYourTv: "Enjoy on your TV.",
    watchOnSmartTvs: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    willSmithAd: "/img/screen-shot-2022-05-17-at-2-18-1@2x.png",
    group2: "/img/screen-shot-2022-05-17-at-2-25-1@2x.png",
    downloadYourShowsToWatchOffline: "Download your shows to watch offline.",
    saveYourFavorites: "Save your favorites easily and always have something to watch.",
    watchEverywhere: "Watch everywhere.",
    streamUnlimitedMov: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    group4: "/img/screen-shot-2022-05-17-at-2-38-1@2x.png",
    createProfilesForKids: "Create profiles for kids.",
    kidsvalueprop1: "/img/kidsvalueprop-1@2x.png",
    sendKidsOnAdventu: "Send kids on adventures with their favorite characters in a space made just for them- free with your membership.",
    label1: "How much does Netflix cost?",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    readyToWatchEnte2: "Ready to watch? Enter your email to create or restart your membership.",
    getStarted2: "Get Started >",
    label2: "Email address",
    questionsCall18445052993: "Questions? Call 1-844-505-2993",
    faq: "FAQ",
    investorRelations: "Investor Relations",
    waysToWatch: "Ways to Watch",
    corporateInformation: "Corporate Information",
    onlyOnNetflix: "Only on Netflix",
    helpCenter: "Help Center",
    jobs: "Jobs",
    termsOfUse: "Terms of Use",
    contactUs: "Contact Us",
    account: "Account",
    redeemGiftcards: "Redeem Giftcards",
    privacy: "Privacy",
    speedTest: "Speed Test",
    mediaCenter: "Media Center",
    buyGiftCards: "Buy Gift Cards",
    cookiePreferences: "Cookie Preferences",
    legalNotices: "Legal Notices",
};


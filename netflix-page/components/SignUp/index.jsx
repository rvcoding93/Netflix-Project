import React from "react";
import { Link } from "react-router-dom";
import * as mdc from "material-components-web";
import "./SignUp.css";

class SignUp extends React.Component {
  componentDidMount() {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di .mdc-text-field"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-1 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-2 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-3 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-4 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-5 .mdc-select"));
  }

  render() {
    const {
      signUpPageBackground,
      netflixLogo,
      title,
      watchAnywhereCancelAnytime,
      readyToWatchEnte1,
      getStarted1,
      signIn,
      enjoyOnYourTv,
      watchOnSmartTvs,
      willSmithAd,
      group2,
      downloadYourShowsToWatchOffline,
      saveYourFavorites,
      watchEverywhere,
      streamUnlimitedMov,
      group4,
      createProfilesForKids,
      kidsvalueprop1,
      sendKidsOnAdventu,
      label1,
      frequentlyAskedQuestions,
      readyToWatchEnte2,
      getStarted2,
      label2,
      questionsCall18445052993,
      faq,
      investorRelations,
      waysToWatch,
      corporateInformation,
      onlyOnNetflix,
      helpCenter,
      jobs,
      termsOfUse,
      contactUs,
      account,
      redeemGiftcards,
      privacy,
      speedTest,
      mediaCenter,
      buyGiftCards,
      cookiePreferences,
      legalNotices,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="sign-up screen">
          <div className="container-container">
            <div className="hero-image-container-div">
              <div className="overlap-group17">
                <img className="sign-up-page-background" src={signUpPageBackground} />
                <div className="rectangle-85"></div>
                <img className="netflix-logo" src={netflixLogo} />
                <div className="hero-image-text-container">
                  <div className="hero-image-text-div">
                    <h1 className="title valign-text-middle">{title}</h1>
                    <div className="watch-container">
                      <div className="watch-anywhere-cancel-anytime valign-text-middle">
                        {watchAnywhereCancelAnytime}
                      </div>
                      <div className="ready-to-watch-ente valign-text-middle">{readyToWatchEnte1}</div>
                    </div>
                  </div>
                  <div className="overlap-group1-2">
                    <div className="rectangle-1"></div>
                    <div className="rectangle-90"></div>
                    <Link to="/home">
                      <div className="get-started valign-text-middle inter-normal-white-30px">{getStarted1}</div>
                    </Link>
                    <div className="rectangle-93"></div>
                    <div className="text-field-filled-di">
                      <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with--icon ">
                        <span className="mdc-text-field__ripple"></span>
                        <span className="mdc-floating-label" id="my-label-id">
                          Email address
                        </span>
                        <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                        <span className="mdc-line-ripple"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="overlap-group2-2">
                  <Link to="/home">
                    <div className="sign-in-2 valign-text-middle">{signIn}</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="media-master-container">
              <div className="container-container-1">
                <div className="enjoy-your-tv-container">
                  <div className="on-container">
                    <div className="enjoy-on-your-tv valign-text-middle inter-bold-white-24px">{enjoyOnYourTv}</div>
                    <p className="watch-on-smart-t-vs valign-text-middle inter-normal-white-13px">{watchOnSmartTvs}</p>
                  </div>
                  <div className="will-smith-ad" style={{ backgroundImage: `url(${willSmithAd})` }}></div>
                </div>
                <div className="download-your-shows-container-div">
                  <div className="group-2" style={{ backgroundImage: `url(${group2})` }}></div>
                  <div className="group-15">
                    <div className="download-your-shows-to-watch-offline valign-text-middle inter-bold-white-24px">
                      {downloadYourShowsToWatchOffline}
                    </div>
                    <p className="save-your-favorites valign-text-middle inter-normal-white-13px">
                      {saveYourFavorites}
                    </p>
                  </div>
                </div>
              </div>
              <div className="overlap-group4-1">
                <div className="overlap-group1-3">
                  <div className="rectangle-83"></div>
                  <div className="watch-everywhere-div">
                    <div className="overlap-group-6">
                      <div className="watch-everywhere valign-text-middle inter-bold-white-24px">{watchEverywhere}</div>
                      <p className="stream-unlimited-mov valign-text-middle inter-normal-white-13px">
                        {streamUnlimitedMov}
                      </p>
                    </div>
                    <div className="group-4" style={{ backgroundImage: `url(${group4})` }}></div>
                  </div>
                </div>
                <div className="create-profiles-for-kids-container-div">
                  <div className="overlap-group2-3">
                    <div className="create-profiles-for-kids valign-text-middle inter-bold-white-24px">
                      {createProfilesForKids}
                    </div>
                    <div className="group-11">
                      <img className="kids-value-prop-1" src={kidsvalueprop1} />
                      <p className="send-kids-on-adventu valign-text-middle inter-normal-white-13px">
                        {sendKidsOnAdventu}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group19">
            <div className="indicator"></div>
            <div className="overlap-group18">
              <div className="frequently-asked-questions-container">
                <div className="overlap-group1-4">
                  <div className="overlap-group-7">
                    <div className="rectangle-98"></div>
                    <div className="rectangle-99"></div>
                    <div className="rectangle-101"></div>
                    <div className="rectangle-103"></div>
                    <div className="rectangle-102"></div>
                    <div className="rectangle-104"></div>
                    <div className="rectangle-105"></div>
                  </div>
                  <div className="drop-down-filled-dis">
                    <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
                      <div
                        className="mdc-select__anchor custom-enhanced-select-width"
                        role="button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span className="mdc-select__ripple"></span>
                        <span id="demo-label" className="mdc-floating-label">
                          What is Netflix?
                        </span>
                        <span className="mdc-select__selected-text-container">
                          <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                        </span>
                        <span className="mdc-select__dropdown-icon">
                          <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                          <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                        </span>
                        <span className="mdc-line-ripple"></span>
                      </div>
                      <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                        <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                          <li className="mdc-list-item " data-value="Item" role="option">
                            <span className="mdc-list-item__ripple"></span>{" "}
                            <span className="mdc-list-item__text">Item</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="drop-down-filled-dis-1">
                    <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
                      <div
                        className="mdc-select__anchor custom-enhanced-select-width"
                        role="button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span className="mdc-select__ripple"></span>
                        <span id="demo-label" className="mdc-floating-label">
                          How much does Netflix cost?
                        </span>
                        <span className="mdc-select__selected-text-container">
                          <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                        </span>
                        <span className="mdc-select__dropdown-icon">
                          <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                          <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                        </span>
                        <span className="mdc-line-ripple"></span>
                      </div>
                      <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                        <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                          <li
                            className="mdc-list-item "
                            data-value="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts."
                            role="option"
                          >
                            <span className="mdc-list-item__ripple"></span>
                            <span className="mdc-list-item__text">
                              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for
                              one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no
                              contracts.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="drop-down-filled-dis-2">
                    <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
                      <div
                        className="mdc-select__anchor custom-enhanced-select-width"
                        role="button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span className="mdc-select__ripple"></span>
                        <span id="demo-label" className="mdc-floating-label">
                          Where can I watch?
                        </span>
                        <span className="mdc-select__selected-text-container">
                          <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                        </span>
                        <span className="mdc-select__dropdown-icon">
                          <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                          <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                        </span>
                        <span className="mdc-line-ripple"></span>
                      </div>
                      <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                        <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                          <li
                            className="mdc-list-item "
                            data-value="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.  You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you&#39;re on the go and without an internet connection. Take Netflix with you anywhere."
                            role="option"
                          >
                            <span className="mdc-list-item__ripple"></span>
                            <span className="mdc-list-item__text">
                              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
                              at netflix.com from your personal computer or on any internet-connected device that offers
                              the Netflix app, including smart TVs, smartphones, tablets, streaming media players and
                              game consoles. You can also download your favorite shows with the iOS, Android, or Windows
                              10 app. Use downloads to watch while you&#39;re on the go and without an internet
                              connection. Take Netflix with you anywhere.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="object-2">
                    <div className="input-1">
                      <p className="label-1 roboto-normal-black-16px">{label1}</p>
                    </div>
                    <img className="icon-1" src="/img/icon-4@2x.svg" />
                  </div>
                  <div className="drop-down-filled-dis-3">
                    <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
                      <div
                        className="mdc-select__anchor custom-enhanced-select-width"
                        role="button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span className="mdc-select__ripple"></span>
                        <span id="demo-label" className="mdc-floating-label">
                          How do i cancel?
                        </span>
                        <span className="mdc-select__selected-text-container">
                          <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                        </span>
                        <span className="mdc-select__dropdown-icon">
                          <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                          <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                        </span>
                        <span className="mdc-line-ripple"></span>
                      </div>
                      <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                        <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                          <li
                            className="mdc-list-item "
                            data-value="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
                            role="option"
                          >
                            <span className="mdc-list-item__ripple"></span>
                            <span className="mdc-list-item__text">
                              Netflix is flexible. There are no pesky contracts and no commitments. You can easily
                              cancel your account online in two clicks. There are no cancellation fees – start or stop
                              your account anytime.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="drop-down-filled-dis-4">
                    <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
                      <div
                        className="mdc-select__anchor custom-enhanced-select-width"
                        role="button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span className="mdc-select__ripple"></span>
                        <span id="demo-label" className="mdc-floating-label">
                          What can I watch on Netflix?
                        </span>
                        <span className="mdc-select__selected-text-container">
                          <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                        </span>
                        <span className="mdc-select__dropdown-icon">
                          <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                          <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                        </span>
                        <span className="mdc-line-ripple"></span>
                      </div>
                      <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                        <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                          <li
                            className="mdc-list-item "
                            data-value="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                            role="option"
                          >
                            <span className="mdc-list-item__ripple"></span>
                            <span className="mdc-list-item__text">
                              Netflix has an extensive library of feature films, documentaries, TV shows, anime,
                              award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="drop-down-filled-dis-5">
                    <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
                      <div
                        className="mdc-select__anchor custom-enhanced-select-width"
                        role="button"
                        aria-haspopup="listbox"
                        aria-expanded="false"
                      >
                        <span className="mdc-select__ripple"></span>
                        <span id="demo-label" className="mdc-floating-label">
                          Is Netflix good for kids?
                        </span>
                        <span className="mdc-select__selected-text-container">
                          <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                        </span>
                        <span className="mdc-select__dropdown-icon">
                          <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                          <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                        </span>
                        <span className="mdc-line-ripple"></span>
                      </div>
                      <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                        <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                          <li
                            className="mdc-list-item "
                            data-value="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
                            role="option"
                          >
                            <span className="mdc-list-item__ripple"></span>
                            <span className="mdc-list-item__text">
                              The Netflix Kids experience is included in your membership to give parents control while
                              kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with
                              PIN-protected parental controls that let you restrict the maturity rating of content kids
                              can watch and block specific titles you don't want kids to see.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group2-4">
                <div className="rectangle-106"></div>
                <div className="frequently-asked-questions valign-text-middle">{frequentlyAskedQuestions}</div>
              </div>
              <div className="email-address-get-started">
                <div className="overlap-group4-2">
                  <div className="rectangle-107"></div>
                  <p className="ready-to-watch-ente-1">{readyToWatchEnte2}</p>
                </div>
                <div className="overlap-group3-1">
                  <div className="rectangle-1"></div>
                  <Link to="/home">
                    <div className="get-started valign-text-middle inter-normal-white-30px">{getStarted2}</div>
                  </Link>
                  <div className="rectangle-110"></div>
                  <img className="vector" src="/img/vector@2x.png" />
                  <img className="vector-1" src="/img/vector-1@2x.svg" />
                  <div className="label-2 roboto-normal-black-16px">{label2}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-master-div">
            <div className="footer-inner-container">
              <div className="questions-call-1-844-505-2993-1">{questionsCall18445052993}</div>
              <div className="footer-link-container">
                <div className="overlap-group-container-1">
                  <div className="overlap-group-4">
                    <div className="faq-1 inter-normal-gray-11px">{faq}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="investor-relations inter-normal-gray-11px">{investorRelations}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="ways-to-watch inter-normal-gray-11px">{waysToWatch}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="corporate-information-1 inter-normal-gray-11px">{corporateInformation}</div>
                  </div>
                  <div className="overlap-group4-3">
                    <div className="only-on-netflix inter-normal-gray-11px">{onlyOnNetflix}</div>
                  </div>
                </div>
                <div className="overlap-group-container-2">
                  <div className="overlap-group-4">
                    <div className="help-center-1 inter-normal-gray-11px">{helpCenter}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="jobs inter-normal-gray-11px">{jobs}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="terms-of-use-1 inter-normal-gray-11px">{termsOfUse}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="contact-us inter-normal-gray-11px">{contactUs}</div>
                  </div>
                </div>
                <div className="overlap-group-container-3">
                  <div className="overlap-group-4">
                    <div className="account inter-normal-gray-11px">{account}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="redeem-giftcards inter-normal-gray-11px">{redeemGiftcards}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="privacy-1 inter-normal-gray-11px">{privacy}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="speed-test inter-normal-gray-11px">{speedTest}</div>
                  </div>
                </div>
                <div className="overlap-group-container-4">
                  <div className="overlap-group-4">
                    <div className="media-center inter-normal-gray-11px">{mediaCenter}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="buy-gift-cards inter-normal-gray-11px">{buyGiftCards}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="cookie-preferences-1 inter-normal-gray-11px">{cookiePreferences}</div>
                  </div>
                  <div className="overlap-group-5">
                    <div className="legal-notices inter-normal-gray-11px">{legalNotices}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

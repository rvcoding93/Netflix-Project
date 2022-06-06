import React from "react";
import { Link } from "react-router-dom";
import * as mdc from "material-components-web";
import "./LOGIN.css";

class LOGIN extends React.Component {
  componentDidMount() {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di .mdc-text-field"));
  }

  render() {
    const {
      f75774Ea9A7C44EaA7C791D1E9Df10E61,
      signUpNow,
      signIn1,
      newToNetflix,
      kisspngNetflixStreamingMediaTelevis,
      thisPageIsProtect,
      rememberMe,
      needHelp,
      signIn2,
      questionsCall18445052993,
      faq,
      cookiePreferences,
      helpCenter,
      corporateInformation,
      termsOfUse,
      privacy,
      label,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <form className="login screen" name="form1" action="form1" method="post">
          <div className="overlap-group-3">
            <div className="rectangle-56"></div>
            <img className="f75774ea-9a7c-44ea-a7c7-91d1e9df10e6-1" src={f75774Ea9A7C44EaA7C791D1E9Df10E61} />
            <div className="rectangle-57"></div>
            <div className="rectangle-58"></div>
            <div className="sign-up-now valign-text-middle inter-normal-white-12px">{signUpNow}</div>
            <div className="sign-in inter-normal-white-30px">{signIn1}</div>
            <div className="rectangle-60"></div>
            <a href="javascript:SubmitForm('form1')">
              <div className="rectangle-61"></div>
            </a>
            <div className="rectangle-62"></div>
            <div className="new-to-netflix valign-text-middle inter-normal-white-12px">{newToNetflix}</div>
            <Link to="/sign-up">
              <div className="sign-up-now-box"></div>
            </Link>
            <Link to="/home">
              <img className="kisspng-netflix-stre-2" src={kisspngNetflixStreamingMediaTelevis} />
            </Link>
            <div className="rectangle-69"></div>
            <p className="this-page-is-protect">{thisPageIsProtect}</p>
            <div className="remember-me valign-text-middle inter-normal-gray-12px">{rememberMe}</div>
            <img className="object" src="/img/object@2x.svg" />
            <div className="need-help valign-text-middle inter-normal-white-12px">{needHelp}</div>
            <Link to="/home">
              <div className="sign-in-1 valign-text-middle">{signIn2}</div>
            </Link>
            <div className="questions-call-1-844-505-2993 valign-text-middle inter-normal-gray-12px">
              {questionsCall18445052993}
            </div>
            <div className="faq valign-text-bottom inter-normal-gray-12px">{faq}</div>
            <div className="cookie-preferences valign-text-bottom inter-normal-gray-12px">{cookiePreferences}</div>
            <div className="help-center valign-text-bottom inter-normal-gray-12px">{helpCenter}</div>
            <div className="corporate-information valign-text-bottom inter-normal-gray-12px">
              {corporateInformation}
            </div>
            <div className="terms-of-use valign-text-bottom inter-normal-gray-12px">{termsOfUse}</div>
            <div className="privacy valign-text-bottom inter-normal-gray-12px">{privacy}</div>
            <div className="object-1">
              <img className="icon" src="/img/icon@2x.svg" />
              <div className="input">
                <div className="label roboto-normal-black-16px">{label}</div>
              </div>
            </div>
            <div className="text-field-filled-di">
              <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with--icon ">
                <span className="mdc-text-field__ripple"></span>
                <span className="mdc-floating-label" id="my-label-id">
                  Password
                </span>
                <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                <span className="mdc-line-ripple"></span>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LOGIN;

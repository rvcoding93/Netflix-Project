import React from "react";
import { Link } from "react-router-dom";
import "./HOME.css";

class HOME extends React.Component {
  render() {
    const {
      place,
      kisspngNetflixStreamingMediaTelevis,
      tvShows,
      movies,
      myList,
      recentlyAdded,
      uiuhj6En7Yitwqwktbwjvt3,
      x158445UntitledDesign561,
      x02_Nf_Thewitcher_Socialskin_Facebo,
      x63D2751005919991,
      arcaneimage,
      dbkqwqouwaa1Rsi1,
      oitnbp1,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home screen">
          <div className="overlap-group2-1 inter-normal-gray-16px">
            <div className="nav-bar"></div>
            <div className="nav-bar-logo-box"></div>
            <div className="nav-bar-home"></div>
            <div className="place valign-text-middle">{place}</div>
            <img className="kisspng-netflix-stre-1" src={kisspngNetflixStreamingMediaTelevis} />
            <Link to="/content">
              <div className="nav-bar-tv-shows"></div>
            </Link>
            <div className="tv-shows valign-text-middle">{tvShows}</div>
            <Link to="/content">
              <div className="nav-bar-movies"></div>
            </Link>
            <div className="movies valign-text-middle">{movies}</div>
            <div className="nav-bar-my-list"></div>
            <div className="my-list valign-text-middle">{myList}</div>
            <div className="nav-bar-recently-added"></div>
            <div className="recently-added valign-text-middle">{recentlyAdded}</div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group1-1">
              <div className="main-display-img">
                <video
                  width="100%"
                  height="100%"
                  src="https://cdn.animaapp.com/projects/62839e2b0f409b66f1c6f683/files/netflix.mp4"
                  loop
                  controls
                  autoplay="autoplay"
                  playsinline
                  muted
                ></video>
              </div>
              <Link to="/content">
                <img className="uiuh-j6e-n7-yitw-qw-kt-b-wjv-t-3-1" src={uiuhj6En7Yitwqwktbwjvt3} />
              </Link>
              <div className="continue-watching-1"></div>
              <img className="continue-watching-2" src="/img/continue-watching--@2x.svg" />
              <div className="continue-watching-3"></div>
              <Link to="/content">
                <img className="x158445-untitled-design-56-1" src={x158445UntitledDesign561} />
              </Link>
            </div>
            <div className="overlap-group8-1">
              <Link to="/content">
                <img className="link" src={x02_Nf_Thewitcher_Socialskin_Facebo} />
              </Link>
            </div>
            <div className="overlap-group4">
              <Link to="/content">
                <img className="link" src={x63D2751005919991} />
              </Link>
            </div>
            <div className="overlap-group7-1">
              <Link to="/content">
                <img className="link-1" src={arcaneimage} />
              </Link>
            </div>
            <div className="overlap-group9">
              <Link to="/content">
                <img className="link-1" src={dbkqwqouwaa1Rsi1} />
              </Link>
            </div>
            <div className="overlap-group5-1">
              <Link to="/content">
                <img className="link-1" src={oitnbp1} />
              </Link>
            </div>
          </div>
          <div className="overlap-group6">
            <img className="action-1" src="/img/action@2x.svg" />
          </div>
          <div className="overlap-group-2">
            <div className="drama-title-box"></div>
            <img className="drama-1" src="/img/drama-1@2x.svg" />
            <Link to="/content">
              <div className="action-1-1"></div>
            </Link>
            <Link to="/content">
              <div className="action-2"></div>
            </Link>
            <Link to="/content">
              <div className="action-3"></div>
            </Link>
            <Link to="/content">
              <div className="action-4"></div>
            </Link>
            <Link to="/content">
              <div className="action-5"></div>
            </Link>
            <Link to="/content">
              <div className="action-6"></div>
            </Link>
          </div>
          <div className="x-container">
            <Link to="/content">
              <div className="link-2"></div>
            </Link>
            <Link to="/content">
              <div className="link-3"></div>
            </Link>
            <Link to="/content">
              <div className="link-2"></div>
            </Link>
            <Link to="/content">
              <div className="link-3"></div>
            </Link>
            <Link to="/content">
              <div className="link-2"></div>
            </Link>
            <Link to="/content">
              <div className="link-3"></div>
            </Link>
          </div>
          <div className="overlap-group3">
            <img className="anime-1" src="/img/anime-1@2x.svg" />
          </div>
          <div className="x-container">
            <Link to="/content">
              <div className="link-2"></div>
            </Link>
            <Link to="/content">
              <div className="link-3"></div>
            </Link>
            <Link to="/content">
              <div className="link-2"></div>
            </Link>
            <Link to="/content">
              <div className="link-3"></div>
            </Link>
            <Link to="/content">
              <div className="link-2"></div>
            </Link>
            <Link to="/content">
              <div className="link-3"></div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HOME;

import React from 'react';
import {calcRunTime} from '../utils/helpers'

class Episode extends React.Component{

  clickHandler = ( event ) =>{
    const {podcast, handleEpisodeClick} = this.props
    handleEpisodeClick(podcast.id)
  }

  handleButtonPress = (event) => {
    event.stopPropagation();
    console.log(`Play Episode ${this.props.podcast.name}`)
  }

  buildArticleClassName = () =>{
    const {isSelected, isPlaying} = this.props;
    let className = "single-episode";
    if ( isPlaying ){ className += " playing-now" }
    return className
  }

  showHideDescription = () => {
    const {isSelected} = this.props;
    let className = ""
  }

  render(){
    const {id, episodeNo, name, runTime, airDate, description} = this.props.podcast;
    const {handleEpisodeClick, currentEpisode, isSelected, isPlaying} = this.props

    return(
      <article
        className="single-episode"
        onClick={this.clickHandler}
      >
        <div className="episode-title-line">
          <h3 className={
            isPlaying
            ?"episode-title playing-now"
            :"episode-title"
          }
          >
            Episode {episodeNo}: {name}
          </h3>
          <p className="episode-runtime">{calcRunTime(runTime)}</p>
          <p className="episode-date">{airDate}</p>
        </div>
        <div className={
            isSelected
            ? "episode-description selected-now"
            : "episode-description"
          }>
          <p>{description}</p>
          {!isPlaying &&
            <button className="play-button"
              onClick={this.handleButtonPress}
            >
              <div className="play-symbol" />
              Play
            </button>
          }
        </div>
      </article>
    )
  }
}

export default Episode;

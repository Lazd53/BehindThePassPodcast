import React from 'react';
import {calcRunTime} from '../utils/helpers'

class Episode extends React.Component{

  clickHandler = ( event ) =>{
    const {podcast, handleEpisodeClick} = this.props
    handleEpisodeClick(podcast.id)
  }

  buildArticleClassName = () =>{
    const {isSelected, isPlaying} = this.props
    let className = "single-episode";
    if ( isSelected ){ className += " selected-now" }
    if ( isPlaying ){ className += " playing-now" }
    return className
  }

  render(){
    const {id, episodeNo, name, runTime, airDate} = this.props.podcast;
    const {handleEpisodeClick, currentEpisode, isSelected, isPlaying} = this.props

    return(
      <article className={this.buildArticleClassName()}>
        <div className="episode-title-line">
          <h3 className="episode-title">Episode {episodeNo}: {name}</h3>
          <p className="episode-runtime">{calcRunTime(runTime)}</p>
          <p className="episode-date">{airDate}</p>
        </div>
        <div className="episode-description">
        </div>
        <button onClick={this.clickHandler}>TestButton</button>
      </article>
    )
  }
}

export default Episode;

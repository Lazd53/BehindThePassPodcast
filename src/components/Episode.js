import React from 'react';
import {calcRunTime} from '../utils/helpers'

class Episode extends React.Component{

  render(){
    const {id, episodeNo, name, runTime, airDate} = this.props.podcast;
    return(
      <article className="single-episode">
        <div className="episode-title-line">
          <h3 className="episode-title">Episode {episodeNo}: {name}</h3>
          <p className="episode-runtime">{calcRunTime(runTime)}</p>
          <p className="episode-date">{airDate}</p>
        </div>
        <div className="episode-description">
        </div>
      </article>
    )
  }
}

export default Episode;

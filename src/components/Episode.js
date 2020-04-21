import React from 'react';

class Episode extends React.Component{

  render(){
    return(
      <article className="single-episode">
        <div className="episode-title-line">
          <h3 className="episode-title">Episode 11: The Named Episode and its friends</h3>
          <p className="episode-runtime">12:52</p>
          <p className="episode-date">11/12/18</p>
        </div>
        <div className="episode-description">
        </div>
      </article>
    )
  }
}

export default Episode;

import React from 'react';
import {connect} from "react-redux"
import Episode from './Episode'

class Episodes extends React.Component{

  createEpisodes = () => {
    const {podcasts, currentPod} = this.props;
    const podcastList = Object.values(podcasts)
    return podcastList.map( podcast => <Episode podcast = {podcast} />)

  }



  render(){
    return(
      <section className="section-episodes">
        <h2 className="section-title">Episodes:</h2>
        <ul className="section-episodes-container">
          {this.createEpisodes()}
        </ul>
      </section>
    )
  }
}

const mapStatetoProps = ( store ) =>({
  podcasts: store.allPodcasts,
  currentPod: store.allPodcasts[store.selectPodcast]
})

export default connect(mapStatetoProps)(Episodes);

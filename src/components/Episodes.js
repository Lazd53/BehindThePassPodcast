import React from 'react';
import {connect} from "react-redux"
import Episode from './Episode'

class Episodes extends React.Component{
  state = { seeEpisodeDetails: false }

  componentDidUpdate(){
    console.log(this.state.seeEpisodeDetails)
  }
  handleEpisodeClick = (episodeId) =>{
    this.state.seeEpisodeDetails === false || this.state.seeEpisodeDetails !== episodeId
      ? this.setState({seeEpisodeDetails: episodeId})
      : this.setState({seeEpisodeDetails: false})
    }

  createEpisodes = () => {
    const {podcasts, currentPod} = this.props;
    const podcastList = Object.values(podcasts)
    return podcastList.map( podcast => {
      const currentEpisode = false;
      if (currentPod && currentPod.id === podcast.id){
          currentEpisode = true
      }
      return (
        <Episode key={podcast.id}
          handleEpisodeClick={this.handleEpisodeClick}
          currentEpisode={currentEpisode}
          podcast = {podcast}
          isSelected = {podcast.id === this.state.seeEpisodeDetails}
          isPlaying = {true}
        />)
    })

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
  currentPod: store.selectedPodcast === ""
                ? false
                : store.allPodcasts[store.selectedPodcast]
})

export default connect(mapStatetoProps)(Episodes);

import React from 'react';

class BtpFooter extends React.Component{
  state = {playing: true}
  render(){
    return(
      <footer className="footer-play-bar">
        <h3 className="current-episode-title"> Episode 11: The Named Episode </h3>
        <button
          className={this.state.playing?"play-button pause":"play-button play"}
          onClick={()=> {
            this.state.playing
              ? this.setState({playing: false})
              : this.setState({playing: true})
              }
            }
        >
          Play button
        </button>
      </footer>
    )
  }
}

export default BtpFooter

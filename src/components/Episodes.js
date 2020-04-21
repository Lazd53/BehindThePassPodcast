import React from 'react';

import Episode from './Episode'

class Episodes extends React.Component{

  render(){
    return(
      <section className="section-episodes">
        <h2 className="section-title">Episodes:</h2>
        <ul className="section-episodes-container">
          {["","","", "","",""].map(x => <Episode/>)}
        </ul>
      </section>
    )
  }
}

export default Episodes;

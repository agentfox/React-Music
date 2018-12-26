import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from 'react'

export default class Mp3Player2 extends Component {
  
  render() {
    return (
      <ReactAudioPlayer
      id="audioplayer"
      src={this.props.playingSong}
      autoPlay
      
        />
    )
  }
}

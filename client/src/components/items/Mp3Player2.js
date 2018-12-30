import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from 'react'
import {connect} from 'react-redux';

class Mp3Player2 extends Component {
  
  render() {
    return (
      <ReactAudioPlayer
      id="audioplayer"
      src={this.props.playingSong.mediaSrc}
      autoPlay
      
        />
    )
  }
}
const mapStateToProps = state => ({
  playingSong : state.player.playingSong
});

export default connect(mapStateToProps)(Mp3Player2);
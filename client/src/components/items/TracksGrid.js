import React, { Component,Fragment } from 'react'
import SongItem from './SongItem';

export default class TracksGrid extends Component {
  render() {
    return (
      <Fragment>
          <h3 >
              <a href="/the-loai-nghe-si#home_hotartist_title" rel="nofolow"  style={{color: "purple"}}>MUSIC HOT</a>
          </h3>
          <div className="row d-flex justify-content-center mb-4">
              {
                  this.state.tracksList.map((item)=> (
                      <SongItem   className=" col-lg-4 col-md-6 mb-4" playSong={this.playSong} mediaSrc={item.mediaSrc} key={item.name} id={item.mbid} url={item.image[3]["#text"]}  title={item.name} author={item.artist.name} />
                  ))
              }
          </div>
      </Fragment>
    )
  }
}

import React, { Component } from 'react'
import { Input } from 'antd';
import axios from 'axios';
import "antd/dist/antd.css";
export default class SearchBar extends Component {


  hitEnter = (value)=> {
    axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_artist=${value}&page_size=6&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
    .then(res => {
      const tracksList = res.data.message.body.track_list;
      console.log(tracksList);
      this.setState({ tracksList });
    })
    .catch( err=> console.log(err) );
  }

  render() {

    return (
      <div>
        <Input.Search
            placeholder="Search for artists, bands, tracks"
            onSearch={value => this.hitEnter(value)}
            style={{ width: "25vw", minWidth : "225px" }}
            

            />
      </div>
    )
  }
}



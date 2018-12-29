import React, { Component } from 'react'
import { Input } from 'antd';
import axios from 'axios';
import "antd/dist/antd.css";
export default class SearchBar extends Component {
  state=({
    value : "",
    page_size: 10,
    page: 1
  })

  hitEnter = (value)=> {
    this.setState({
      value
    })
    axios.get(`//ws.audioscrobbler.com/2.0/?method=track.search&track=${this.state.value}&page_size=${this.state.page_size}&page=${this.state.page}&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}&format=json`)
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



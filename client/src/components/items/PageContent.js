import React, {Fragment, Component } from 'react';
import axios from 'axios';
import Chart from './Chart'
import Mp3Player2 from './Mp3Player2'
import {mediaUrl} from '../../seeder2';
import Trend from './Trend';
import Music4U from './Music4U'
import TracksGrid from './TracksGrid';
import Carousel from './Carousel'
export default class PageContent extends Component {


    componentDidMount() {
        axios.all([
            axios.get(`//ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&page=1&limit=20&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                headers: {
                  'Access-Control-Allow-Origin': '*',
                },
                proxy: {
                  host: '//cuong-musix.herokuapp.com',
                  port: process.env.PORT
                }
                }),
            axios.get(`//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=canada&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                headers: {
                  'Access-Control-Allow-Origin': '*',
                },
                proxy: {
                  host: '//cuong-musix.herokuapp.com',
                  port: process.env.PORT
                }
                }),
            axios.get(`//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=brazil&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                headers: {
                  'Access-Control-Allow-Origin': '*',
                },
                proxy: {
                  host: '//cuong-musix.herokuapp.com',
                  port: process.env.PORT
                }
                }),
            axios.get(`//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=mexico&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                headers: {
                  'Access-Control-Allow-Origin': '*',
                },
                proxy: {
                  host: '//cuong-musix.herokuapp.com',
                  port: process.env.PORT
                }
                })

          ])
          .then(axios.spread( (a,b,c,d) => {
              let tracksList = a.data.tracks.track;
              let chartVN = b.data.tracks.track;
              let chartUK = c.data.tracks.track;
              let chartKPOP = d.data.tracks.track;

            tracksList.forEach((e,i)=> {
                e.mediaSrc = mediaUrl[i]
            })
            chartVN.forEach((e,i)=> {
                e.mediaSrc = mediaUrl[i]
            })
            chartUK.forEach((e,i)=> {
                e.mediaSrc = mediaUrl[i]
            })
            chartKPOP.forEach((e,i)=> {
                e.mediaSrc = mediaUrl[i]
            })

            
            this.setState({ tracksList, chartVN,chartUK,chartKPOP })

            
          }))
          .catch(error => console.log(error));

        

      }
      
      playSong = (src) =>{
        this.setState({
            URLplayingSong : src
        })
      }


  render() {
    return (
    <Fragment>
        <div className="container">
            <Mp3Player2 playingSong={this.state.URLplayingSong} />
            <div className="row">
                    <div className="col-lg-9 ">
                        <Carousel />
                        <TracksGrid />
                    </div>
                    <div className="col-lg-3 ">
                        <Music4U />
                        <div className="row">
                            <div className=" col-lg-12 col-md-6 col-sm-12">
                                <Trend />
                            </div>
                            <div className="col-lg-12 col-md-6 col-sm-12 ">
                                <Chart chartVN={this.state.chartVN} chartUK={this.state.chartUK} chartKPOP={this.state.chartKPOP} />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </Fragment>
    )
  }
}

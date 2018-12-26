import React, {Fragment, Component } from 'react';
import axios from 'axios';
import SongItem from './SongItem';
import Chart from './Chart'
import Mp3Player2 from './Mp3Player2'
import {mediaUrl} from '../../seeder2';
export default class PageContent extends Component {
    state = {
        tracksList: [],
        chartVN :[],
        chartUK :[],
        chartKPOP :[],
        URLplayingSong : ""
      }

    componentDidMount() {
        axios.all([
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&page=1&limit=20&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                headers: {
                  'Access-Control-Allow-Origin': '*',
                },
                proxy: {
                  host: 'https://cuong-musix.herokuapp.com',
                  port: process.env.PORT
                }
                }),
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=canada&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                headers: {
                  'Access-Control-Allow-Origin': '*',
                },
                proxy: {
                  host: 'https://cuong-musix.herokuapp.com',
                  port: process.env.PORT
                }
                }),
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=brazil&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                headers: {
                  'Access-Control-Allow-Origin': '*',
                },
                proxy: {
                  host: 'https://cuong-musix.herokuapp.com',
                  port: process.env.PORT
                }
                }),
            axios.get(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=mexico&page=1&limit=10&api_key=${process.env.REACT_APP_LFM_KEY}&format=json`,{
                headers: {
                  'Access-Control-Allow-Origin': '*',
                },
                proxy: {
                  host: 'https://cuong-musix.herokuapp.com',
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
            console.log(this.state);
            
          }))
          .catch(error => console.log(error));

        

      }
      
      playSong = (src) =>{
        this.setState({
            URLplayingSong : src
        })
        console.log(this.state);
      }


  render() {
    return (
    <Fragment>
        <div className="container">

            <Mp3Player2 playingSong={this.state.URLplayingSong} />
            <div className="row">

                <div className="col-lg-9 ">

                    <div id="carouselExampleIndicators" className="carousel slide my-3" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active">
                                    <img className="d-block img-fluid" src="https://www.mexicoescultura.com/galerias/actividades/principal/rosana_900_1.jpg" alt="First slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h4 className="text-warning">Caption goes here</h4>
                                        <p>Caption goes here</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src="https://cms.intomore.com/wp-content/uploads/2018/08/GettyImages-1020392532_900x350_acf_cropped.jpg" alt="Second slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h4 className="text-warning">Caption goes here</h4>
                                        <p>Caption goes here</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block img-fluid" src="https://generator.org.uk/wp-content/uploads/2018/10/didfund_banner_draft_2-e1539264702663.jpg" alt="Third slide" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h4 className="text-warning">Caption goes here</h4>
                                        <p>Caption goes here</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                    </div>

                    <h3 >
                        <a href="/the-loai-nghe-si#home_hotartist_title" rel="nofolow" id="A_4" style={{color: "purple"}}>MUSIC HOT<i id="I_5"></i></a>
                    </h3>
                    <div className="row d-flex justify-content-center mb-4">

                        {
                            this.state.tracksList.map((item)=> (
                                <SongItem   className=" col-lg-4 col-md-6 mb-4" playSong={this.playSong} mediaSrc={item.mediaSrc} key={item.name} id={item.mbid} url={item.image[3]["#text"]}  title={item.name} author={item.artist.name} />
                            ))
                        }
                    </div>

                    
                  
                          

                </div>

                    <div className="col-lg-3 ">
                        <div className="mt-3 p-0" style={{height:"9em",backgroundImage:"url(https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_background.png)",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative" }}>
                            <div className="p-0 m-0 " style={{height:"9em",backgroundColor:"black",opacity:0.6}}>

                            </div>
                            <div className="d-flex justify-content-center align-items-center "  style={{position:"absolute",zIndex:"1060" ,top: "50%",left: "52%",marginRight: "-50%",transform: "translate(-50%, -50%)"}}>
                                <div>
                                    <a href="/"><img style={{height: "5em",width: "5em"}} src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_cover_240.jpg" alt=""  ></img></a>
                                </div>
                                <div className="d-flex flex-column mx-1">
                                    <a href="/" className=" p-0 m-0">
                                        <b className=" text-light">Dành Riêng Cho Bạn</b>
                                    </a>
                                    <p className="text-primary overflow-hidden small">Khám phá âm nhạc dành riêng cho bạn.</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className=" col-lg-12 col-md-6 col-sm-12">
                                <h4 style={{color: "purple"}}>HOT TREND</h4>
                                <div className="list-group">
                                    <a href="/" className="list-group-item p-0 my-2"> <img className="img-fluid m-0" src="https://photo-zmp3.zadn.vn/cover/1/2/b/1/12b1529b9bdc7ddbc034c00e73870aba.jpg" alt="trend 1"></img> </a>
                                    <a href="/" className="list-group-item p-0 my-2"> <img className="img-fluid m-0" src="https://photo-zmp3.zadn.vn/covers/e/9/e92910699de0aeee9f1587e0425d8a7c_1514894974.png" alt="trend 1"></img> </a>
                                    <a href="/" className="list-group-item p-0 my-2"> <img className="img-fluid m-0" src="https://photo-zmp3.zadn.vn/covers/2/a/2ac9d9aa479519e1724db5b860373578_1499827968.jpg" alt="trend 1"></img> </a>
                                    <a href="/" className="list-group-item p-0 my-2"> <img className="img-fluid m-0" src="https://photo-zmp3.zadn.vn/cover/5/5/a/6/55a619ea7a0c39489ddf1f0430e01056.jpg" alt="trend 1"></img> </a>
                                    <a href="/" className="list-group-item p-0 my-2"> <img className="img-fluid m-0" src="https://photo-zmp3.zadn.vn/cover/5/6/b/1/56b199cb6f45279e44a6b689ee388b98.jpg" alt="trend 1"></img> </a>
                                    <a href="/" className="list-group-item p-0 my-2"> <img className="img-fluid m-0" src="https://photo-zmp3.zadn.vn/cover/1/f/8/e/1f8ea944241a435a2f2ccac2da63dcbb.jpg" alt="trend 1"></img> </a>
                                    <a href="/" className="list-group-item p-0 my-2"> <img className="img-fluid m-0" src="https://photo-zmp3.zadn.vn/cover/6/3/2/7/6327934eac9b32451ff11c814a81203a.jpg" alt="trend 1"></img> </a>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-6 col-sm-12 ">
                                <h4  >
                                    <a href="/the-loai-nghe-si" rel="nofolow"  style={{color: "purple"}}>ZING CHART</a>
                                </h4>
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

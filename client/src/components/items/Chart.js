import React, { Component,Fragment } from 'react'
import { Tabs ,List } from 'antd';
import "../css/Chart.css"
import {playVN,playUSUK,playKPOP} from '../../actions/playSongAction'
import {connect} from 'react-redux';
const TabPane = Tabs.TabPane;


class Chart extends Component {
  render() {

    function callback(key) {
        console.log(key);
    }
    


    return (
      <Fragment>
            <h4  >
                <a href="/the-loai-nghe-si" rel="nofolow"  style={{color: "purple"}}>ZING CHART</a>
            </h4>
            <Tabs defaultActiveKey="1" onNextClick={callback}>
                    <TabPane tab="Việt Nam" key="1">
                        <List
                            itemLayout="horizontal"
                            dataSource={this.props.chart.chartVN}
                            renderItem={item => {
                                let playSong = ()=> { this.props.playVN(item.name) }
                                return (
                                <List.Item onClick={ playSong} style={{ backgroundImage : `url(${item.image[3]["#text"]})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center",height : "7em" }}>
                                    <List.Item.Meta
                                        style={{ paddingLeft :"10px" }}
                                        avatar={<h3 style={{ color :"#20639b" }}>{parseInt(item["@attr"].rank,10)+1}</h3>}
                                        title={<b  style={{ color :"#20639b" }} >{item.name}</b>}
                                        description={<a href={item.artist.url} style={{ color :"#20639b" }} >{item.artist.name}</a>}
                                    />
                                </List.Item>
                            ) }}
                        />
                    </TabPane>
                    <TabPane tab="US-UK" key="2">
                        <List
                                itemLayout="horizontal"
                                dataSource={this.props.chart.chartUSUK}
                                renderItem={item => {
                                    let playSong = ()=> { this.props.playUSUK(item.name) }
                                    return (
                                    <List.Item onClick={ playSong} style={{ backgroundImage : `url(${item.image[3]["#text"]})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center",height : "7em"  }} >
                                        <List.Item.Meta
                                            style={{ paddingLeft :"10px" }}
                                            avatar={<h3 style={{ color :"#20639b" }}>{parseInt(item["@attr"].rank,10)+1}</h3>} 
                                            title={<b style={{ color :"#20639b" }} >{item.name}</b>}
                                            description={<a href={item.artist.url}  style={{ color :"#20639b" }} >{item.artist.name}</a>}
                                        />
                                    </List.Item>
                                )}}
                                />
                    </TabPane>
                    <TabPane tab="K-Pop" key="3">
                        <List
                                itemLayout="horizontal"
                                dataSource={this.props.chart.chartKPOP}
                                renderItem={item => {
                                    let playSong = ()=> { this.props.playKPOP(item.name) }
                                    return (
                                    <List.Item onClick={ playSong} style={{ backgroundImage : `url(${item.image[3]["#text"]})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center",height : "7em" }}  >
                                        <List.Item.Meta
                                            style={{ paddingLeft :"10px" }}
                                            avatar={<h3 style={{ color :"#20639b" }}>{parseInt(item["@attr"].rank,10)+1}</h3>} 
                                            title={<b  style={{ color :"#20639b" }} >{item.name}</b>}
                                            description={<a href={item.artist.url}  style={{ color :"#20639b" }} >{item.artist.name}</a>}
                                        />
                                    </List.Item>
                                )}}
                                />
                    </TabPane>
            </Tabs>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return {
      playVN : (songName)=> { dispatch(playVN(songName)) },
      playUSUK : (songName)=> { dispatch(playUSUK(songName)) },
      playKPOP : (songName)=> { dispatch(playKPOP(songName)) }
    }
  }
  const mapStateToProps = (state) => {
    return {
      chart : state.chart 
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Chart);
import React, { Component,Fragment } from 'react'
import { Tabs ,List } from 'antd';
import "../css/Chart.css"
const TabPane = Tabs.TabPane;

export default class Chart extends Component {
  render() {

    function callback(key) {
        console.log(key);
    }
  
    return (
      <Fragment>
          <Tabs defaultActiveKey="1" onNextClick={callback}>
            <TabPane tab="Việt Nam" key="1">
                <List
                    
                    itemLayout="horizontal"
                    dataSource={this.props.chartVN}
                    renderItem={item => (
                        <List.Item style={{ backgroundImage : `url(${item.image[3]["#text"]})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center",height : "7em" }}>
                            <List.Item.Meta
                                style={{ paddingLeft :"10px" }}
                                avatar={<h3 style={{ color :"white" }}>{parseInt(item["@attr"].rank,10)+1}</h3>}
                                title={<a href={item.url} style={{ color :"white" }} >{item.name}</a>}
                                description={<a href={item.artist.url} style={{ color :"white" }} >{item.artist.name}</a>}
                            />
                        </List.Item>
                    )}
                    />
            </TabPane>
            <TabPane tab="US-UK" key="2">
                <List
                        itemLayout="horizontal"
                        dataSource={this.props.chartUK}
                        renderItem={item => (
                            <List.Item style={{ backgroundImage : `url(${item.image[3]["#text"]})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center",height : "7em"  }} >
                                <List.Item.Meta
                                    style={{ paddingLeft :"10px" }}
                                    avatar={<h3 style={{ color :"white" }}>{parseInt(item["@attr"].rank,10)+1}</h3>} 
                                    title={<a href={item.url} style={{ color :"white" }} >{item.name}</a>}
                                    description={<a href={item.artist.url}  style={{ color :"white" }} >{item.artist.name}</a>}
                                />
                            </List.Item>
                        )}
                        />
            </TabPane>
            <TabPane tab="K-Pop" key="3">
                <List
                        itemLayout="horizontal"
                        md={2}
                        sm={3}
                        dataSource={this.props.chartKPOP}
                        renderItem={item => (
                            <List.Item style={{ backgroundImage : `url(${item.image[3]["#text"]})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: "center",height : "7em" }}  >
                                <List.Item.Meta
                                    style={{ paddingLeft :"10px" }}
                                    avatar={<h3 style={{ color :"white" }}>{parseInt(item["@attr"].rank,10)+1}</h3>} 
                                    title={<a href={item.url} style={{ color :"white" }} >{item.name}</a>}
                                    description={<a href={item.artist.url}  style={{ color :"white" }} >{item.artist.name}</a>}
                                />
                            </List.Item>
                        )}
                        />
            </TabPane>
        </Tabs>
      </Fragment>
    )
  }
}


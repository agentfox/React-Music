import React, { Component,Fragment } from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export default class SongItem extends Component {
  
  insertSong = ()=>{
     this.props.playSong(this.props.mediaSrc)
  }
  render() {
    
    return (
      <Fragment>
          
              <Card
                hoverable
                style={{ width: "200px",height :"293px",padding:"5px",margin:"5px" }}
                cover={<img alt="example"  src={this.props.url} />}
                onClick={this.insertSong}
            >
                <Meta 
                title={this.props.title}
                description={this.props.author}
                />
            </Card>
   
      </Fragment>
    )
  }
}

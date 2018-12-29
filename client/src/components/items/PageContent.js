import React, {Fragment, Component } from 'react';
import Chart from './Chart'
import Mp3Player2 from './Mp3Player2'
import Trend from './Trend';
import Music4U from './Music4U'
import TracksGrid from './TracksGrid';
import Carousel from './Carousel';
import {loadHotTracks} from '../../actions/fetchData4HomeAction';
import {connect} from 'react-redux';

class PageContent extends Component {

    componentDidMount() {
        this.props.dispatch(loadHotTracks());
    }

    render() {
        const { songItems,chart } = this.props;
        return (
            <Fragment>
                <div className="container">
                    <Mp3Player2 />
                    <div className="row">
                            <div className="col-lg-9 ">
                                <Carousel />
                                <TracksGrid songItems={songItems} />
                            </div>
                            <div className="col-lg-3 ">
                                <Music4U />
                                <div className="row">
                                    <div className=" col-lg-12 col-md-6 col-sm-12">
                                        <Trend />
                                    </div>
                                    <div className="col-lg-12 col-md-6 col-sm-12 ">
                                        <Chart chart={chart}/>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </Fragment>
        )
  }
}

const mapStateToProps = state => ({
    songItems : state.songItems,
    chart : state.chart,
    loading : state.loading,
    error : state.error
  });
  
export default connect(mapStateToProps)(PageContent);
import { FETCH_TRACKS_BEGIN , FETCH_TRACKS_SUCCESS , FETCH_TRACKS_FAILURE } from "../actions/fetchData4HomeAction";


const initState = {
    loading: false,
    error: null,
    songItems : [],
    chart : {
        chartVN : [],
        chartUSUK :[],
        chartKPOP : []
    },
    searchBar : {
        value : "",
        type : "track",
        pageSize : 10,
        page : 1
    },
    player : {
        playingSong : {},
        playList : [],
        currentRange : 0,
        volume : 50,
        isMuted : false,
        pause : true,
        playStyle : "Loop All List"
    }
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_TRACKS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                loading: false,
                songItems: action.payload.tracks.tracksList,
                chart : {
                    chartVN : action.payload.tracks.chartVN,
                    chartUSUK : action.payload.tracks.chartUSUK,
                    chartKPOP : action.payload.tracks.chartKPOP
                }
            };
        case FETCH_TRACKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };

        default:
        // ALWAYS have a default case in a reducer
        return state;
    }
    
}

export default rootReducer

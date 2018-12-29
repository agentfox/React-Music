const initState = {
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
    return state;
}

export default rootReducer

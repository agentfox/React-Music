(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,a,t){e.exports=t.p+"static/media/play-button.fe4dc2fc.svg"},136:function(e,a,t){e.exports=t(264)},214:function(e,a,t){},218:function(e,a,t){},229:function(e,a,t){},247:function(e,a,t){},249:function(e,a,t){},262:function(e,a,t){},264:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(9),r=t.n(l),s=t(10),o=t(11),m=t(13),i=t(12),u=t(14),p=t(216),d=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),a}(n.Component),E=t(271),h=(t(94),t(25)),f=t(34),b=t.n(f),g=function(e,a,t){return{type:"SEARCH_FOR_FULL_RESULT",payload:{results:e,value:a,num:t}}},y=function(){return{type:"SEARCH_BEGIN"}},v=function(e){return{type:"SEARCH_FAILURE",payload:{error:e}}},N=t(276),k=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(n.Fragment,null,c.a.createElement(E.a.Search,{placeholder:"Search for artists, bands, tracks",onSearch:function(a){e.props.history.push("/search"),e.props.SearchFull(a)},style:{width:"25vw",minWidth:"225px"}}))}}]),a}(n.Component),O=Object(h.b)(function(e){return{value:e.search.value}},function(e){return{SearchFull:function(a){e(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30;return function(n){return n(y()),b.a.get("//ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(e,"&page=").concat(a,"&limit=").concat(t,"&s_track_rating=desc&api_key=").concat("51de025812af79cb70f4a872936181a0","&format=json")).then(function(a){var t=a.data.results["opensearch:totalResults"],c=a.data.results.trackmatches.track;return console.log(c),n(g(c,e,t))}).catch(function(e){n(v(e))})}}(a))}}})(Object(N.a)(k)),_=(t(214),t(266)),j=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},c.a.createElement("div",{className:"container "},c.a.createElement(_.a,{className:"navbar-brand",to:"/"},c.a.createElement("img",{src:"https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/logo.png",alt:"the logo"})),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},c.a.createElement("ul",{className:"navbar-nav d-flex  w-100"},c.a.createElement("li",{className:"nav-item active mr-3"},c.a.createElement(O,null)),c.a.createElement("li",{className:"nav-item active"},c.a.createElement(_.a,{className:"nav-link",to:"/"},"MP3",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(_.a,{className:"nav-link",to:"/"},"NEWS")),c.a.createElement("li",{className:"nav-item "},c.a.createElement(_.a,{className:"nav-link",to:"/"},"TV")),c.a.createElement("li",{className:"nav-item  active signin "},c.a.createElement(_.a,{className:" nav-link",style:{borderRadius:"17px",backgroundImage:"linear-gradient(to right, #efadb1, #a265a8 42%, #4d4ea0)"},to:"/signin"},"SignIn/SignUp")))))))}}]),a}(n.Component),I=t(217),S=(t(218),t(272)),C=t(274),x=t(16),P=S.a.SubMenu,A=S.a.ItemGroup,z=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(C.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(S.a,{mode:"horizontal",className:"d-flex justify-content-start  ",style:{fontSize:"1.1em"}},c.a.createElement(P,{key:"sub0",title:c.a.createElement(I.a,{to:"/me"},c.a.createElement(x.a,{type:"home",style:{fontSize:"1.5em"}}),"Nh\u1ea1c C\xe1 Nh\xe2n")}),c.a.createElement(P,{key:"sub1",title:c.a.createElement("span",null,"Top 100")},c.a.createElement(S.a.Item,{key:"1"},"Vi\u1ec7t Nam"),c.a.createElement(S.a.Item,{key:"2"},"\xc2u M\u1ef9"),c.a.createElement(S.a.Item,{key:"3"},"Ch\xe2u \xc1"),c.a.createElement(S.a.Item,{key:"4"},"H\xf2a T\u1ea5u")),c.a.createElement(P,{key:"sub2",title:c.a.createElement("span",null,"Ch\u1ee7 \u0111\u1ec1"),className:"d-flex flex-row justify-content-around "},c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"5",style:{fontSize:"17px",fontWeight:"500"}},"Th\u1ec3 Lo\u1ea1i"),c.a.createElement(S.a.Item,{key:"6"},"EDM"),c.a.createElement(S.a.Item,{key:"7"},"Acoustic"),c.a.createElement(S.a.Item,{key:"8"},"Indie"),c.a.createElement(S.a.Item,{key:"chin"},"Instrument")),c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"9",style:{fontSize:"17px",fontWeight:"500"}},"T\xe2m Tr\u1ea1ng"),c.a.createElement(S.a.Item,{key:"10"},"T\xecnh Y\xeau"),c.a.createElement(S.a.Item,{key:"11"},"Bu\u1ed3n"),c.a.createElement(S.a.Item,{key:"12"},"Th\u01b0 Gi\xe3n"),c.a.createElement(S.a.Item,{key:"13"},"\u0110\u1ed9ng L\u1ef1c")),c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"14",style:{fontSize:"17px",fontWeight:"500"}},"Ho\u1ea1t \u0110\u1ed9ng"),c.a.createElement(S.a.Item,{key:"15"},"L\xe0m Vi\u1ec7c"),c.a.createElement(S.a.Item,{key:"16"},"C\xe0 Ph\xea"),c.a.createElement(S.a.Item,{key:"17"},"Cu\u1ed1i Tu\u1ea7n"),c.a.createElement(S.a.Item,{key:"18"},"Ti\u1ec7c T\xf9ng"),c.a.createElement(S.a.Item,{key:"19"},"Du L\u1ecbch"))),c.a.createElement(P,{key:"sub3",title:c.a.createElement("span",null,"Video")},c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"20",style:{fontSize:"17px",fontWeight:"500"}},"Vi\u1ec7t Nam"),c.a.createElement(S.a.Item,{key:"21"},"Nh\u1ea1c Tr\u1ebb"),c.a.createElement(S.a.Item,{key:"22"},"Nh\u1ea1c Tr\u1eef T\xecnh"),c.a.createElement(S.a.Item,{key:"23"},"Nh\u1ea1c Dance"),c.a.createElement(S.a.Item,{key:"24"},"Rap Vi\u1ec7t")),c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"25",style:{fontSize:"17px",fontWeight:"500"}},"\xc2u M\u1ef9"),c.a.createElement(S.a.Item,{key:"26"},"Pop"),c.a.createElement(S.a.Item,{key:"27"},"Rap/Hiphop"),c.a.createElement(S.a.Item,{key:"28"},"Rock"),c.a.createElement(S.a.Item,{key:"29"},"Country"),c.a.createElement(S.a.Item,{key:"30"},"EDM")),c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"31",style:{fontSize:"17px",fontWeight:"500"}},"Ch\xe2u \xc1"),c.a.createElement(S.a.Item,{key:"32"},"H\xe0n Qu\u1ed1c"),c.a.createElement(S.a.Item,{key:"33"},"Nh\u1eadt B\u1ea3n"),c.a.createElement(S.a.Item,{key:"34"},"Hoa Ng\u1eef"),c.a.createElement(S.a.Item,{key:"35"},"Th\xe1i Lan"))),c.a.createElement(P,{key:"sub4",title:c.a.createElement("span",null,"Album")},c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"36",style:{fontSize:"17px",fontWeight:"500"}},"Vi\u1ec7t Nam"),c.a.createElement(S.a.Item,{key:"37"},"Nh\u1ea1c Tr\u1ebb"),c.a.createElement(S.a.Item,{key:"38"},"Nh\u1ea1c Tr\u1eef T\xecnh"),c.a.createElement(S.a.Item,{key:"39"},"Nh\u1ea1c Dance"),c.a.createElement(S.a.Item,{key:"40"},"Rap Vi\u1ec7t")),c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"41",style:{fontSize:"17px",fontWeight:"500"}},"\xc2u M\u1ef9"),c.a.createElement(S.a.Item,{key:"42"},"Pop"),c.a.createElement(S.a.Item,{key:"43"},"Rap/Hiphop"),c.a.createElement(S.a.Item,{key:"44"},"Rock"),c.a.createElement(S.a.Item,{key:"45"},"Country"),c.a.createElement(S.a.Item,{key:"46"},"EDM")),c.a.createElement(A,null,c.a.createElement(S.a.Item,{key:"47",style:{fontSize:"17px",fontWeight:"500"}},"Ch\xe2u \xc1"),c.a.createElement(S.a.Item,{key:"48"},"H\xe0n Qu\u1ed1c"),c.a.createElement(S.a.Item,{key:"49"},"Nh\u1eadt B\u1ea3n"),c.a.createElement(S.a.Item,{key:"50"},"Hoa Ng\u1eef"),c.a.createElement(S.a.Item,{key:"51"},"Th\xe1i Lan"))),c.a.createElement(P,{key:"sub5",title:c.a.createElement("span",null,"Ngh\u1ec7 S\u0129")},c.a.createElement(S.a.Item,{key:"52"},"Vi\u1ec7t Nam"),c.a.createElement(S.a.Item,{key:"53"},"\xc2u M\u1ef9"),c.a.createElement(S.a.Item,{key:"54"},"Ch\xe2u \xc1"),c.a.createElement(S.a.Item,{key:"55"},"H\xe0n Qu\u1ed1c"),c.a.createElement(S.a.Item,{key:"56"},"Nh\u1eadt B\u1ea3n")),c.a.createElement(P,{key:"sub6",title:c.a.createElement("span",null,c.a.createElement(x.a,{type:"close-circle",style:{fontSize:"1.5em"}}),"T\u1eaft qu\u1ea3ng c\xe1o"),className:"ml-auto"}),c.a.createElement(P,{key:"sub7",title:c.a.createElement("span",null,c.a.createElement(x.a,{type:"cloud-upload",style:{fontSize:"1.5em"}}))}))))}}]),a}(n.Component),T=t(270),w=t(269),M=t(127),R=t.n(M),L=t(265),U=(t(229),["https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music6/v4/13/22/67/1322678b-e40d-fb4d-8d9b-3268fe03b000/mzaf_8818596367816221008.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/08/d9/c5/08d9c56d-73e5-be1c-1eda-071a48284440/mzaf_8565025008024189274.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/06/a1/0c/06a10c8b-e358-4bc0-c443-a120a775d3df/mzaf_1439207983024487820.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/3c/a5/1a/3ca51a7a-768f-5f56-f3a0-35a62b02da43/mzaf_8754338071729397064.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music6/v4/90/57/c3/9057c37f-69d3-e268-a7bf-25dd810a325b/mzaf_6360390234565244013.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/99/61/c8/9961c81c-f94b-12be-7733-b987b479041a/mzaf_2130221555116358546.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music2/v4/67/9f/98/679f98d8-8b4b-f50d-07b1-39e2ba92a2f5/mzaf_259179780027291108.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/65/61/2f/65612f2e-ddc9-4a8d-b459-2775fc04b7e3/mzaf_1540394229328758969.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/4f/79/35/4f793510-2fbe-4a9d-2d68-5b4675342de2/mzaf_7896944984022119851.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/eb/44/82/eb448255-3139-40f8-6e1e-007e525de8ce/mzaf_8277593527813641004.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music6/v4/ac/ed/bc/acedbcb8-ea98-8b88-4cc6-b895f5f1010f/mzaf_9132884955027305703.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/43/83/9f/43839f5c-4c02-63f6-2950-283bea60da9f/mzaf_2147786048438392316.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/2a/ab/18/2aab1877-d064-1091-504e-307cef20c50e/mzaf_234241789622967590.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/35/79/94/357994c6-af8a-3c14-b26f-521802602dd6/mzaf_230880385444312812.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music/v4/38/c0/19/38c0196e-3ce0-92c1-6b2d-eb10e3eb0ee5/mzaf_7178478946435499403.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music2/v4/ea/93/29/ea932991-96cd-3e29-5364-23f5421b1d97/mzaf_6210633579424704391.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music3/v4/f6/28/aa/f628aad0-ad35-84e4-aee3-068445d626fe/mzaf_8192129784688487369.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music6/v4/b5/4e/33/b54e332d-5d04-1b02-fe59-c87bbf9cb5d6/mzaf_7910485597109644306.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music2/v4/db/ae/4c/dbae4c3e-0f25-ad48-22c8-8a40ebb2c5c5/mzaf_2371577180771617751.plus.aac.p.m4a","https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music2/v4/e8/cb/03/e8cb03dc-2f22-7d2d-0886-b244ec2ffb40/mzaf_8631338519762380030.plus.aac.p.m4a"]);var F=function(e){return function(){return e(V()),b.a.all([b.a.get("//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=canada&page=1&limit=10&api_key=".concat("51de025812af79cb70f4a872936181a0","&format=json"),{headers:{"Access-Control-Allow-Origin":"*"},proxy:{host:"cuong-musix.herokuapp.com",port:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_LFM_KEY:"51de025812af79cb70f4a872936181a0",REACT_APP_MM_KEY:"760bd51df493ebae1a330318fcc59366"}).PORT||3e3}}),b.a.get("//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=brazil&page=1&limit=10&api_key=".concat("51de025812af79cb70f4a872936181a0","&format=json"),{headers:{"Access-Control-Allow-Origin":"*"},proxy:{host:"cuong-musix.herokuapp.com",port:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_LFM_KEY:"51de025812af79cb70f4a872936181a0",REACT_APP_MM_KEY:"760bd51df493ebae1a330318fcc59366"}).PORT||3e3}}),b.a.get("//ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=mexico&page=1&limit=10&api_key=".concat("51de025812af79cb70f4a872936181a0","&format=json"),{headers:{"Access-Control-Allow-Origin":"*"},proxy:{host:"cuong-musix.herokuapp.com",port:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_LFM_KEY:"51de025812af79cb70f4a872936181a0",REACT_APP_MM_KEY:"760bd51df493ebae1a330318fcc59366"}).PORT||3e3}})]).then(b.a.spread(function(a,t,n){console.log(a);var c=a.data.tracks.track,l=t.data.tracks.track,r=n.data.tracks.track;c.forEach(function(e,a){e.mediaSrc=U[a]}),l.forEach(function(e,a){e.mediaSrc=U[a]}),r.forEach(function(e,a){e.mediaSrc=U[a]}),e(H({chartVN:c,chartUSUK:l,chartKPOP:r}))})).catch(function(a){return e(K(a))})}},V=function(){return{type:"FETCH_CHARTS_BEGIN"}},H=function(e){return{type:"FETCH_CHARTS_SUCCESS",payload:e}},K=function(e){return{type:"FETCH_CHARTS_FAILURE",payload:{error:e}}},G=L.a.TabPane,D=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.loadCharts()}},{key:"render",value:function(){var e=this;return c.a.createElement(n.Fragment,null,c.a.createElement("h4",null,c.a.createElement("a",{href:"/the-loai-nghe-si",rel:"nofolow",style:{color:"purple"}},"ZING CHART")),c.a.createElement(L.a,{defaultActiveKey:"1",onNextClick:function(e){console.log(e)}},c.a.createElement(G,{tab:"Vi\u1ec7t Nam",key:"1"},c.a.createElement(T.a,{itemLayout:"horizontal",dataSource:this.props.chart.chartVN,renderItem:function(a){return c.a.createElement(T.a.Item,{onClick:function(){e.props.playVN(a.name)},style:{backgroundImage:"url(".concat(a.image[3]["#text"],")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"7em"}},c.a.createElement(T.a.Item.Meta,{style:{paddingLeft:"10px"},avatar:c.a.createElement("h3",{style:{color:"#20639b"}},parseInt(a["@attr"].rank,10)+1),title:c.a.createElement("b",{style:{color:"#20639b"}},a.name),description:c.a.createElement("a",{href:a.artist.url,style:{color:"#20639b"}},a.artist.name)}))}})),c.a.createElement(G,{tab:"US-UK",key:"2"},c.a.createElement(T.a,{itemLayout:"horizontal",dataSource:this.props.chart.chartUSUK,renderItem:function(a){return c.a.createElement(T.a.Item,{onClick:function(){e.props.playUSUK(a.name)},style:{backgroundImage:"url(".concat(a.image[3]["#text"],")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"7em"}},c.a.createElement(T.a.Item.Meta,{style:{paddingLeft:"10px"},avatar:c.a.createElement("h3",{style:{color:"#20639b"}},parseInt(a["@attr"].rank,10)+1),title:c.a.createElement("b",{style:{color:"#20639b"}},a.name),description:c.a.createElement("a",{href:a.artist.url,style:{color:"#20639b"}},a.artist.name)}))}})),c.a.createElement(G,{tab:"K-Pop",key:"3"},c.a.createElement(T.a,{itemLayout:"horizontal",dataSource:this.props.chart.chartKPOP,renderItem:function(a){return c.a.createElement(T.a.Item,{onClick:function(){e.props.playKPOP(a.name)},style:{backgroundImage:"url(".concat(a.image[3]["#text"],")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center",height:"7em"}},c.a.createElement(T.a.Item.Meta,{style:{paddingLeft:"10px"},avatar:c.a.createElement("h3",{style:{color:"#20639b"}},parseInt(a["@attr"].rank,10)+1),title:c.a.createElement("b",{style:{color:"#20639b"}},a.name),description:c.a.createElement("a",{href:a.artist.url,style:{color:"#20639b"}},a.artist.name)}))}}))))}}]),a}(n.Component),B=Object(h.b)(function(e){return{chart:e.chart}},function(e){return{playVN:function(a){e(function(e){return{type:"PLAY_SONG_VN",payload:{songName:e}}}(a))},playUSUK:function(a){e(function(e){return{type:"PLAY_SONG_USUK",payload:{songName:e}}}(a))},playKPOP:function(a){e(function(e){return{type:"PLAY_SONG_KPOP",payload:{songName:e}}}(a))},loadCharts:F(e)}})(D),Y=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=function(e){var a=e.type,t=e.text;return c.a.createElement("span",null,c.a.createElement(x.a,{type:a,style:{marginRight:8}}),t)};return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 col-md-8 "},c.a.createElement("h3",null,'You search for "',this.props.value,'" ')," ",c.a.createElement("p",{className:"mt-auto ml-3"}," return ",this.props.numOfResults," results"),c.a.createElement(T.a,{bordered:!0,itemLayout:"vertical",size:"middle",pagination:{onChange:function(e){console.log(e)},pageSize:10},dataSource:this.props.results,footer:c.a.createElement("div",null,c.a.createElement("b",null,"ant design")," footer part"),renderItem:function(a){return c.a.createElement(T.a.Item,{key:a.title,actions:[c.a.createElement(e,{type:"star-o",text:a.listeners}),c.a.createElement(e,{type:"like-o",text:Math.round(1e4*Math.random())}),c.a.createElement(e,{type:"message",text:Math.round(200*Math.random())})],extra:c.a.createElement("img",{width:70,alt:"logo",src:R.a})},c.a.createElement(T.a.Item.Meta,{avatar:c.a.createElement(w.a,{src:a.image[2]["#text"]}),title:c.a.createElement("a",{href:a.url},a.name),description:a.artist}),a.content)}})),c.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-8"},c.a.createElement(B,null))))}}]),a}(n.Component),W=Object(h.b)(function(e){return{results:e.search.results,value:e.search.value,numOfResults:e.search.numberOfResults}})(Y),Z=(t(247),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("footer",{className:" mt-3 w-100 FOOTER_1"},c.a.createElement("div",{className:"  mx-auto DIV_2"},c.a.createElement("div",{className:" row DIV_3 d-flex"},c.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12 DIV_4"},c.a.createElement("img",{src:"https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/icon_zing_mp3_60.png",height:56,width:56,alt:"Zing MP3 - \u0110\u1ec9nh Cao \xc2m Nh\u1ea1c",className:"IMG_5"}),c.a.createElement("p",{className:"P_6"},"\xa9 2015 ",c.a.createElement("span",{className:"SPAN_7"},"VNG Corporation")),c.a.createElement("p",{className:"P_8"},"Gi\u1ea5y ph\xe9p MXH s\u1ed1 314/GP-BTTTT.")),c.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-12 DIV_9"},c.a.createElement("ul",{className:"UL_10"},c.a.createElement("li",{className:"LI_11"},c.a.createElement("a",{title:"Gi\u1edbi thi\u1ec7u",rel:"nofollow",href:"https://mp3.zing.vn/huong-dan/about",className:"A_12"},"Gi\u1edbi thi\u1ec7u")),c.a.createElement("li",{className:"LI_13"},c.a.createElement("a",{title:"\u0110i\u1ec1u kho\u1ea3n",rel:"nofollow",href:"https://mp3.zing.vn/huong-dan/terms",className:"text-light"},"\u0110i\u1ec1u kho\u1ea3n")),c.a.createElement("li",{className:"LI_15"},c.a.createElement("a",{title:"Qu\u1ea3ng c\xe1o",rel:"nofollow",href:"https://adtima.vn/lien-he?utm_source=zingmp3&utm_medium=footer",className:"A_16"},"Qu\u1ea3ng c\xe1o")),c.a.createElement("li",{className:"LI_17"},c.a.createElement("a",{title:"FAQs",rel:"nofollow",href:"//mp3.zing.vn/huong-dan/index.html",className:"A_18"},"FAQs")),c.a.createElement("li",{className:"LI_19"},c.a.createElement("a",{title:"Copyright",rel:"nofollow",href:"https://mp3.zing.vn/huong-dan/copyright",className:"A_20"},"Copyright")),c.a.createElement("li",{className:"LI_21"},c.a.createElement("a",{title:"Zing MP3 VIP",href:"//mp3.zing.vn/vip",className:"A_22"},"Zing MP3 VIP")),c.a.createElement("li",{className:"LI_23"},c.a.createElement("a",{title:"\u1ee8ng d\u1ee5ng",href:"https://mp3.zing.vn/apps",className:"text-light"},"\u1ee8ng d\u1ee5ng")),c.a.createElement("li",{className:"LI_25"},c.a.createElement("a",{title:"G\xf3p \xfd/B\xe1o l\u1ed7i",rel:"nofollow",href:"https://docs.google.com/forms/d/e/1FAIpQLSfXs8U-4aOl9Bct-u457bdJ7ryE-Ucl5a3OmtcZSf-syl_x1Q/viewform",className:"A_26"},"G\xf3p \xfd")),c.a.createElement("li",{className:"LI_27"},c.a.createElement("a",{title:"APIs",rel:"nofollow",href:"https://mp3.zing.vn/huong-dan/developer",className:"A_28"},"APIs")),c.a.createElement("li",{className:"LI_29"},c.a.createElement("a",{title:"Li\xean h\u1ec7",rel:"nofollow",href:"https://mp3.zing.vn/huong-dan/contact",className:"A_30"},"Li\xean h\u1ec7")))),c.a.createElement("div",{className:"col-lg-4 col-md-12 col-sm-12 DIV_31"},c.a.createElement("ul",{className:"UL_32"},c.a.createElement("li",{className:"LI_33"},c.a.createElement("a",{title:"Zing MP3 tr\xean Facebook",href:"https://www.facebook.com/zingmp3",rel:"nofollow"},c.a.createElement("span",{className:"A_34"}))),c.a.createElement("li",{className:"LI_35"},c.a.createElement("a",{title:"Zing MP3 tr\xean Zalo",href:"/",rel:"nofollow"},c.a.createElement("span",{className:"A_36"}))),c.a.createElement("li",{className:"LI_37"},c.a.createElement("a",{title:"Zing MP3 tr\xean Google Plus",href:"https://plus.google.com/+zingmp3",rel:"publisher"},c.a.createElement("span",{className:"A_38"}))),c.a.createElement("li",{className:"LI_39"},c.a.createElement("a",{title:"Zing MP3 tr\xean Youtube",href:"https://www.youtube.com/c/zingmp3",rel:"nofollow"},c.a.createElement("span",{className:"A_40"})))),c.a.createElement("div",{className:"DIV_41"})," ",c.a.createElement("a",{href:"https://www.dmca.com/Protection/Status.aspx?className=62f851ba-0cde-4801-8326-68a6d66bf97a&refurl=https://mp3.zing.vn/",title:"DMCA.com Protection Status",className:"A_42"},c.a.createElement("img",{src:"//images.dmca.com/Badges/dmca_protected_sml_120n.png?className=62f851ba-0cde-4801-8326-68a6d66bf97a",alt:"DMCA.com Protection Status",className:"IMG_43"})),c.a.createElement("div",{className:"DIV_45"}),c.a.createElement("p",{className:"P_46"},c.a.createElement("a",{title:"Phi\xean b\u1ea3n Mobile",href:"//m.mp3.zing.vn",className:"A_47"},"Phi\xean b\u1ea3n Mobile")))))))}}]),a}(n.Component)),Q=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(j,null),c.a.createElement(z,null),c.a.createElement(W,null),c.a.createElement(Z,null))}}]),a}(n.Component);function J(){return c.a.createElement(n.Fragment,null,c.a.createElement("h4",{style:{color:"purple"}},"HOT TREND"),c.a.createElement("div",{className:"list-group"},c.a.createElement("a",{href:"/",className:"list-group-item p-0 my-2"}," ",c.a.createElement("img",{className:"img-fluid m-0",src:"//photo-zmp3.zadn.vn/cover/1/2/b/1/12b1529b9bdc7ddbc034c00e73870aba.jpg",alt:"trend 1"})," "),c.a.createElement("a",{href:"/",className:"list-group-item p-0 my-2"}," ",c.a.createElement("img",{className:"img-fluid m-0",src:"//photo-zmp3.zadn.vn/covers/e/9/e92910699de0aeee9f1587e0425d8a7c_1514894974.png",alt:"trend 1"})," "),c.a.createElement("a",{href:"/",className:"list-group-item p-0 my-2"}," ",c.a.createElement("img",{className:"img-fluid m-0",src:"//photo-zmp3.zadn.vn/covers/2/a/2ac9d9aa479519e1724db5b860373578_1499827968.jpg",alt:"trend 1"})," "),c.a.createElement("a",{href:"/",className:"list-group-item p-0 my-2"}," ",c.a.createElement("img",{className:"img-fluid m-0",src:"//photo-zmp3.zadn.vn/cover/5/5/a/6/55a619ea7a0c39489ddf1f0430e01056.jpg",alt:"trend 1"})," "),c.a.createElement("a",{href:"/",className:"list-group-item p-0 my-2"}," ",c.a.createElement("img",{className:"img-fluid m-0",src:"//photo-zmp3.zadn.vn/cover/5/6/b/1/56b199cb6f45279e44a6b689ee388b98.jpg",alt:"trend 1"})," "),c.a.createElement("a",{href:"/",className:"list-group-item p-0 my-2"}," ",c.a.createElement("img",{className:"img-fluid m-0",src:"//photo-zmp3.zadn.vn/cover/1/f/8/e/1f8ea944241a435a2f2ccac2da63dcbb.jpg",alt:"trend 1"})," "),c.a.createElement("a",{href:"/",className:"list-group-item p-0 my-2"}," ",c.a.createElement("img",{className:"img-fluid m-0",src:"//photo-zmp3.zadn.vn/cover/6/3/2/7/6327934eac9b32451ff11c814a81203a.jpg",alt:"trend 1"})," ")))}function X(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"mt-3 p-0",style:{height:"9em",backgroundImage:"url(//static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_background.png)",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative"}},c.a.createElement("div",{className:"p-0 m-0 ",style:{height:"9em",backgroundColor:"black",opacity:.6}}),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center ",style:{position:"absolute",zIndex:"900",top:"50%",left:"52%",marginRight:"-50%",transform:"translate(-50%, -50%)"}},c.a.createElement("div",null,c.a.createElement("a",{href:"/"},c.a.createElement("img",{style:{height:"5em",width:"5em"},src:"//static-zmp3.zadn.vn/skins/zmp3-v5.1/images/discover_cover_240.jpg",alt:""}))),c.a.createElement("div",{className:"d-flex flex-column mx-1"},c.a.createElement("a",{href:"/",className:" p-0 m-0"},c.a.createElement("b",{className:" text-light"},"D\xe0nh Ri\xeang Cho B\u1ea1n")),c.a.createElement("p",{className:"text-primary overflow-hidden small"},"Kh\xe1m ph\xe1 \xe2m nh\u1ea1c d\xe0nh ri\xeang cho b\u1ea1n.")))))}var q=t(273),$=q.a.Meta,ee=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(c)))).playThisSong=function(){t.props.playSong(t.props.title)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement(q.a,{hoverable:!0,style:{width:"200px",height:"293px",padding:"5px",margin:"5px"},cover:c.a.createElement("img",{alt:"example",src:this.props.url}),onClick:this.playThisSong},c.a.createElement($,{title:this.props.title,description:this.props.author})))}}]),a}(n.Component),ae=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(n.Fragment,null,c.a.createElement("h3",null,c.a.createElement("a",{href:"/the-loai-nghe-si#home_hotartist_title",rel:"nofolow",style:{color:"purple"}},"MUSIC HOT")),c.a.createElement("div",{className:"row d-flex justify-content-center mb-4"},this.props.songItems.map(function(a){return c.a.createElement(ee,{playSong:e.props.playItemSong,className:" col-lg-4 col-md-6 mb-4",key:a.name,id:a.mbid,url:a.image[3]["#text"],title:a.name,author:a.artist.name})})))}}]),a}(n.Component),te=Object(h.b)(function(e){return{songItems:e.songItems}},function(e){return{playItemSong:function(a){e(function(e){return{type:"PLAY_SONG_ITEM",payload:{songName:e}}}(a))}}})(ae);function ne(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide my-3","data-ride":"carousel"},c.a.createElement("ol",{className:"carousel-indicators"},c.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),c.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),c.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"})),c.a.createElement("div",{className:"carousel-inner",role:"listbox"},c.a.createElement("div",{className:"carousel-item active"},c.a.createElement("img",{className:"d-block img-fluid",src:"//www.mexicoescultura.com/galerias/actividades/principal/rosana_900_1.jpg",alt:"First slide"}),c.a.createElement("div",{className:"carousel-caption d-none d-md-block"},c.a.createElement("h4",{className:"text-warning"},"Caption goes here"),c.a.createElement("p",null,"Caption goes here"))),c.a.createElement("div",{className:"carousel-item"},c.a.createElement("img",{className:"d-block img-fluid",src:"//cms.intomore.com/wp-content/uploads/2018/08/GettyImages-1020392532_900x350_acf_cropped.jpg",alt:"Second slide"}),c.a.createElement("div",{className:"carousel-caption d-none d-md-block"},c.a.createElement("h4",{className:"text-warning"},"Caption goes here"),c.a.createElement("p",null,"Caption goes here"))),c.a.createElement("div",{className:"carousel-item"},c.a.createElement("img",{className:"d-block img-fluid",src:"//generator.org.uk/wp-content/uploads/2018/10/didfund_banner_draft_2-e1539264702663.jpg",alt:"Third slide"}),c.a.createElement("div",{className:"carousel-caption d-none d-md-block"},c.a.createElement("h4",{className:"text-warning"},"Caption goes here"),c.a.createElement("p",null,"Caption goes here")))),c.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},c.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Previous")),c.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},c.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),c.a.createElement("span",{className:"sr-only"},"Next"))))}var ce=function(){return function(e){return e(le()),b.a.get("//ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&page=1&limit=20&api_key=".concat("51de025812af79cb70f4a872936181a0","&format=json"),{headers:{"Access-Control-Allow-Origin":"*"},proxy:{host:"cuong-musix.herokuapp.com",port:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_LFM_KEY:"51de025812af79cb70f4a872936181a0",REACT_APP_MM_KEY:"760bd51df493ebae1a330318fcc59366"}).PORT||3e3}}).then(function(a){var t=a.data.tracks.track;t.forEach(function(e,a){e.mediaSrc=U[a]}),e(re(t))}).catch(function(a){return e(se(a))})}},le=function(){return{type:"FETCH_TRACKS_BEGIN"}},re=function(e){return{type:"FETCH_TRACKS_SUCCESS",payload:{tracks:e}}},se=function(e){return{type:"FETCH_TRACKS_FAILURE",payload:{error:e}}},oe=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(ce())}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-9 "},c.a.createElement(ne,null),c.a.createElement(te,null)),c.a.createElement("div",{className:"col-lg-3 "},c.a.createElement(X,null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:" col-lg-12 col-md-6 col-sm-12"},c.a.createElement(J,null)),c.a.createElement("div",{className:"col-lg-12 col-md-6 col-sm-12 "},c.a.createElement(B,null)))))))}}]),a}(n.Component),me=Object(h.b)(function(e){return{chart:e.chart,loading:e.loading,error:e.error}})(oe),ie=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(j,null),c.a.createElement(z,null),c.a.createElement(me,null),c.a.createElement(Z,null))}}]),a}(n.Component),ue=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),a}(n.Component),pe=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(j,null))}}]),a}(n.Component),de=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),a}(n.Component),Ee=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),a}(n.Component),he=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),a}(n.Component),fe=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p.a,{exact:!0,path:"/",component:ie}),c.a.createElement(p.a,{exact:!0,path:"/search",component:Q}),c.a.createElement(p.a,{exact:!0,path:"/me",component:d}),c.a.createElement(p.a,{exact:!0,path:"/track/:id",component:pe}),c.a.createElement(p.a,{exact:!0,path:"/admin",component:ue}),c.a.createElement(p.a,{exact:!0,path:"/signin",component:de}),c.a.createElement(p.a,{exact:!0,path:"/signup",component:Ee}),c.a.createElement(p.a,{exact:!0,path:"/record-chart",component:he}))}}]),a}(n.Component),be=t(275),ge=(t(249),t(35)),ye=t(132),ve=(t(262),ge.Icons.SoundCloudLogoSVG,ge.Icons.PlayIconSVG),Ne=(ge.Icons.PauseIconSVG,ge.Icons.NextIconSVG,ge.Icons.PrevIconSVG,Object(ye.withCustomAudio)(function(e){var a=e.trackTitle,t=e.trackArtist;return c.a.createElement(n.Fragment,null,c.a.createElement(ge.PlayButton,Object.assign({},e,{className:"playbtn ml-2 mr-5 btn btn-outline-secondary"}),c.a.createElement(ve,null)),c.a.createElement(ge.VolumeControl,Object.assign({},e,{className:"volume ml-2 mr-5 d-flex flex-row align-items-center bg-transparent",buttonClassName:"icon-volume"})),c.a.createElement("div",{className:"ml-2 d-flex flex-column justify-content-center w-50"},c.a.createElement("h4",{className:" title-player m-0"},a),c.a.createElement("p",{className:" title-player m-0"},t)),c.a.createElement(ge.Timer,Object.assign({},e,{className:"process-bar mr-2 ml-auto"})))})),ke=function(e){function a(){for(var e,t,n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return Object(s.a)(this,a),(t=Object(m.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(c)))).state={display:!0},t.debounce=function(e,a,t){var n;return function(){var c=this,l=arguments,r=t&&!n;clearTimeout(n),n=setTimeout(function(){n=null,t||e.apply(c,l)},a),r&&e.apply(c,l)}},t.listenToScroll=t.debounce(function(){var e=document.body.scrollTop||document.documentElement.scrollTop,a=document.documentElement.scrollHeight-document.documentElement.clientHeight-e;a<=126&&t.setState({display:!1}),a>126&&t.setState({display:!0})},250),t.closePlayer=function(){t.setState({display:!1})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenToScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.listenToScroll)}},{key:"render",value:function(){return this.props.playingSong.mediaSrc?c.a.createElement("div",null,c.a.createElement("div",{className:"ct-player container fixed-bottom mb-3 ",style:this.state.display?{display:"flex"}:{display:"none"}},c.a.createElement(Ne,{streamUrl:this.props.playingSong.mediaSrc,trackTitle:this.props.playingSong.name,trackArtist:this.props.playingSong.artist.name,duration:!0,preloadType:"metadata"})),c.a.createElement("i",{onClick:this.closePlayer,className:"fas fa-times-circle close-player"})):c.a.createElement(n.Fragment,null)}}]),a}(n.Component),Oe=Object(h.b)(function(e){return{playingSong:e.player.playingSong}})(ke),_e=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(be.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(Oe,null),c.a.createElement(fe,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=t(52),Ie=t(133),Se=t(18),Ce={loading:!1,error:null,songItems:[],chart:{chartVN:[],chartUSUK:[],chartKPOP:[]},search:{value:"",suggestion:[],numberOfResults:0,page:1,limit:10,results:[],loading:!1,error:null},player:{playingSong:{},playList:[],currentRange:0,volume:50,isMuted:!1,pause:!0,playStyle:"Loop All List"}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_TRACKS_BEGIN":return Object(Se.a)({},e,{loading:!0,error:null});case"FETCH_TRACKS_SUCCESS":return Object(Se.a)({},e,{loading:!1,songItems:a.payload.tracks});case"FETCH_TRACKS_FAILURE":return Object(Se.a)({},e,{loading:!1,error:a.payload.error});case"FETCH_CHARTS_BEGIN":return console.log("begin chart"),Object(Se.a)({},e,{loading:!0,error:null});case"FETCH_CHARTS_SUCCESS":return console.log(a.payload),Object(Se.a)({},e,{loading:!1,chart:{chartVN:a.payload.chartVN,chartUSUK:a.payload.chartUSUK,chartKPOP:a.payload.chartKPOP}});case"FETCH_CHARTS_FAILURE":return Object(Se.a)({},e,{loading:!1,error:a.payload.error});case"PLAY_SONG_ITEM":var t=e.songItems.find(function(e){return e.name===a.payload.songName});return Object(Se.a)({},e,{player:Object(Se.a)({},e.player,{playingSong:t})});case"PLAY_SONG_VN":var n=e.chart.chartVN.find(function(e){return e.name===a.payload.songName});return Object(Se.a)({},e,{player:Object(Se.a)({},e.player,{playingSong:n})});case"PLAY_SONG_USUK":var c=e.chart.chartUSUK.find(function(e){return e.name===a.payload.songName});return Object(Se.a)({},e,{player:Object(Se.a)({},e.player,{playingSong:c})});case"PLAY_SONG_KPOP":var l=e.chart.chartKPOP.find(function(e){return e.name===a.payload.songName});return Object(Se.a)({},e,{player:Object(Se.a)({},e.player,{playingSong:l})});case"SEARCH_BEGIN":return console.log("begin"),Object(Se.a)({},e,{search:Object(Se.a)({},e.search,{loading:!0,error:null})});case"SEARCH_FOR_FULL_RESULT":return console.log(a.payload),Object(Se.a)({},e,{search:Object(Se.a)({},e.search,{value:a.payload.value,results:a.payload.results,numberOfResults:a.payload.num,error:null,loading:!1})});case"SEARCH_FAILURE":return console.log("failed"),Object(Se.a)({},e,{search:Object(Se.a)({},e.search,{loading:!1,error:a.payload})});default:return e}},Pe=t(134),Ae=Object(je.createStore)(xe,Object(Pe.composeWithDevTools)(Object(je.applyMiddleware)(Ie.a)));r.a.render(c.a.createElement(h.a,{store:Ae},c.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[136,2,1]]]);
//# sourceMappingURL=main.20924008.chunk.js.map
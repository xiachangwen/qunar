import {INIT_HOME_DATA} from './mutatain.type'

const mutations = {
    [INIT_HOME_DATA](state,data){
        let resd = data[0]
        console.log(resd)
        state.city = resd.city
        state.swiperList = resd.swiperList
        state.iconsList = resd.iconsList
        state.hotList = resd.hotList
        state.likeList = resd.likeList
        state.vacationList = resd.vacationList
    }
}

export default mutations
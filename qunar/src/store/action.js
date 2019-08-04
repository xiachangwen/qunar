import {INIT_HOME_DATA} from './mutatain.type'
import axios from 'axios'
const actions = {
    getdate({commit}){
        axios.get('/api/homeData.json').then(({data:{data}}) => {
           commit(INIT_HOME_DATA, data)
        })
    }
}

export default actions
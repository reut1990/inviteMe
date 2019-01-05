import axios from "axios";
import storageService from '../services/storageService.js'
const BASE_URL = 'https://inviteme-sprint4.herokuapp.com'

export default {
    query,
    remove,
    getById,
    saveinvite,
    // saveData,
    add: item => axios.post(BASE_URL+'/invite', item).then(res => res.data)
}

// function saveData(key, value) {
//     storageService.saveToStorage(key, value)
// }

function query(key) {
    var queryParams = new URLSearchParams()
    // queryParams.append('inStock', filter.byStatus)
    // queryParams.append('name', filter.byName)
    // queryParams.append('type', filter.byType)
    // queryParams.append('sortBy', filter.sort)
    return axios.get(`${BASE_URL}/invite?${queryParams}`)
        .then(res =>{ 
            console.log('in query invite service the res', res)
            return res.data})
    .catch(err =>{
        console.log('ERROR:', err);
    // return storageService.loadFromStorage(key);

    })
}

function getById(inviteId) {
    return axios.get(`${BASE_URL}/invite/${inviteId}`)
        .then(res => res.data)
}

function remove(inviteId) {
    return axios.delete(`${BASE_URL}/invite/${inviteId}`)
    // .then(res => res.data)
}

function saveinvite(invite) {
    if (invite._id) {
        return axios.put(`${BASE_URL}/invite/${invite._id}`, invite)
    } else {
        // invite.createdAt = Date.now()
        return axios.post(`${BASE_URL}/invite`, invite)
    }
}
import axios from 'axios';
import storageService from '../services/storageService.js'

const BASE_URL = (process.env.NODE_ENV !== 'development')?
              '/user' : 'http://localhost:3000/user';

function getById(id) {
    return axios.get(`${BASE_URL}/${id}`)
        .then(res => res.data);
}

function getAll() {
    return axios.get(`${BASE_URL}`)
    .then(res => res.data);
}

function remove(id) {
    return axios.delete(`${BASE_URL}/${id}`)
        .then(res => res.data);
}

function login(user, rememberPref = false) {
    if (!user) return;
    if (rememberPref) {
        storageService.saveToStorage('user', JSON.stringify(user));
    } else {
        storageService.saveToStorage('user', JSON.stringify(user));
    }
}

function saveData(key, value) {
    storageService.saveToStorage(key, value)
}



export default {
    getById,
    remove,
    getAll,
    login,
    saveData
}
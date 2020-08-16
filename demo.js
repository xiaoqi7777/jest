import axios from 'axios';
export const runCallback = (cb)=>{
  cb('123');
}

export const createObject = (cb) => {
 new cb()
}

export const getData = () => {
  return axios.get('/api').then(rs => rs.data)
}

export const fetchData = ()=>{
  return axios.get('/').then(rs=>rs.data)
}

import axios from 'axios';
// 回调
export const fetchData = (fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then(rs=>{
    fn(rs.data)
  });
}

// promise
// export const fetchData = () => axios.get('http://www.dell-lee.com/react/api/demo.json')

// 404
// export const fetchData = () => axios.get('http://www.dell-lee.com/react/api/demo1.json')

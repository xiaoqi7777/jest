export const fetchData = ()=>{
  return new Promise((resolved,reject)=>{
    resolved("123")
  })
}

export const runCallback = (cb)=>{
  cb('123');
}
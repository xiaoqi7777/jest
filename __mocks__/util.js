const Util = jest.fn(()=>{
  console.log('a,b')
})
Util.prototype.a = jest.fn(()=>{
  console.log('a,b')
})
Util.prototype.b = jest.fn(()=>{
  console.log('a,b')
})

export default Util;
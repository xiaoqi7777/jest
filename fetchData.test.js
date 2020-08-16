import { fetchData } from './fetchData'

// 回调函数
// done 是一个回调函数  异步的时候 执行done 即ok
// test(`fetchData`,(done)=>{
//   fetchData(data=>{
//     expect(data).toEqual({
//       success:true
//     })
//     done()
//   })
// })

// promise
// test(`fetchData`,()=>{
//   return fetchData().then(rs=>{
//     expect(rs.data).toEqual({
//       success:true
//     })
//   })
// })


// 404
// test(`fetchData`,()=>{
//   // 下面的expect 要执行一次 如果返回成功的情况下 是不会走catch语句的 
//   expect.assertions(1)
//   return fetchData().catch(e=>{
//     console.log('e',e.toString())
//     expect(e.toString().indexOf('404')>-1).toBe(true)
//   })
// })




// promise异步 匹配对象
// test(`fetchData`,()=>{
//   // toMatchObject 匹配对象
//   return expect(fetchData()).resolves.toMatchObject({
//     data:{
//       success:true
//     }
//   })
// })

// 404
// test(`fetchData`,()=>{
//   // toMatchObject 匹配对象
//   return expect(fetchData()).rejects.toThrow()
// })


// await
// test(`fetchData`,async()=>{
//   // toMatchObject 匹配对象
//   await expect(fetchData()).resolves.toMatchObject({
//     data:{
//       success:true
//     }
//   })
// })

// 404
// test(`fetchData`,async()=>{
//   // toMatchObject 匹配对象
//   await expect(fetchData()).rejects.toThrow()
// })


// await
// test(`fetchData`,async()=>{
//   const rs = await fetchData()
//   expect(rs.data).toEqual({
//     success:true
//   })
// })
// 404
test(`fetchData`,async()=>{
  expect.assertions(1)
  try {
    await fetchData()
  }catch(e){
    expect(e.toString()).toMatch('404')
  }
})
let arr = [0,1,2,2,3,3,3,4,4,4,4,6]
let arr2 = arr.map((item,index)=>{
    return ['周日','周一','周二','周三','周四','周五','周六'][item]
})
console.log(arr2) // ['周日', '周一', '周二', '周二', '周三', '周三', '周三', '周四', '周四', '周四', '周四','周六']
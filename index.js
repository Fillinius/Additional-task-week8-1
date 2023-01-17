
const getArray = function getArray(name) {
  const arr = []
  for (let i = 1016; i <= name; i++) {
      arr.push(i)
       }
  return arr
}
const fullArray =getArray(1937)

const filterArray = fullArray.filter(item=>{
  if (item%3===0 && item%7===0 && item%2 !=0 && item%5 !=0){
      return item
  } 
})
const endNumber = filterArray.at(-1)

console.log('endNumber:',endNumber )
const arr = []
function _unshift(val=[]){
  for(let i=arr.length+val.length-1; i>0; i--){
    arr[i]=arr[i-val.length]
  }
  for(let i=0; i<val.length; i++){
    arr[i]=val[i]
  }
  return arr
}
_unshift(["new","insert"])
console.log(arr)
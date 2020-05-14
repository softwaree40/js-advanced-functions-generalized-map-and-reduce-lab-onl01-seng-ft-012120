

function map(oldArray,callback){
    
   let newArray = []
 for(let i = 0; i < oldArray.length; i++){
    
 newArray.push(callback(oldArray[i]));

}
 return newArray

}

function reduce(sourceArray, callback,startpoint){
    let acc 
    let i
    if (startpoint === undefined){
       acc = sourceArray[0]
     i = 1
    } else { 
        i = 0
      acc = startpoint 
}

for (; i< sourceArray.length; i++){
    
   acc = callback(sourceArray[i],acc);
}
  return acc
 }
 
// function reduce(sourceArray, callback,startingPoint){
//     let acc = startingPoint
// for (let i = 0; i< sourceArray.length; i++){
    
//    acc = callback(sourceArray[i],acc);
// }
//   return acc
//  }
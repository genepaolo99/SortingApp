export function insertionSortAnimated(array) {
  //0 = sorted, green
  //1 = currently being compared, yellow
  //2 = not sorted,blue
  const animations = [];
  animations.push([0,0,array[0]]);
  const len = array.length;
  for (var x = 1;x<len;x++){
    //Turns Yellow for every x
    animations.push([0,x,array[x]]);
    animations.push([1,x,array[x]]);
    let temp = array[x];
    let y = x-1;
    var stack = []; //turn values back to green
    while(y>=0 && array[y]>temp){
      array[y+1] = array[y];//Turns yellow for each comparison
      animations.push([1, y+1,array[y+1]]);
      stack.push([0,y+1,array[y+1]]);
      y -= 1;
    }
    array[y+1] = temp; //Gets put in the right pos(Green)
    animations.push([0, y+1,array[y+1]]);
    while(stack.length!==0){//if isEmpty()
      animations.push(stack[stack.length-1]);
      stack.pop();
    }
  }
  return animations;
};

export function insertionSort(array) {
  //0 = sorted, green
  //1 = currently being compared, yellow
  //2 = not sorted,blue=
  const len = array.length;
  for (var x = 1;x<len;x++){
    //Turns Yellow for every x
    let temp = array[x];
    let y = x-1;
    while(y>=0 && array[y]>temp){
      array[y+1] = array[y];//Turns purple for each comparison
      y -= 1;
    }
    array[y+1] = temp; //Gets put in the right pos(Green)
  }
  return array;
};

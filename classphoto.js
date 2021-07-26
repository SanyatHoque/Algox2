function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b)=>b-a);
    blueShirtHeights.sort((a,b) =>b-a);
    console.log(redShirtHeights,blueShirtHeights)
    if (redShirtHeights[0]>blueShirtHeights[0]) {
        for (let idx in redShirtHeights){
            if (redShirtHeights[idx]<=blueShirtHeights[idx]) {return false};
        };
    } else if (redShirtHeights[0]<blueShirtHeights[0]) {
        for (let idx in blueShirtHeights){
            if (blueShirtHeights[idx]<=redShirtHeights[idx]) {return false};
        };
    } else if (redShirtHeights[0]==blueShirtHeights[0]) {return false};
    
    return true;
}
    
const blueShirtHeights =  [5, 8, 1, 3, 4];
const redShirtHeights = [6, 9, 2, 4, 5];
console.log(classPhotos(redShirtHeights,blueShirtHeights));  
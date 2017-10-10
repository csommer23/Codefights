function rotateImage(a) {
    let lines = [];
    for(let y = 0; y < a.length; y++) {
       lines[y] = [];
       for(let x = 0; x < a[y].length; x++) {
          lines[y][x] = a[a[y].length-1-x][y];
       }        
    }
    return lines;
 }
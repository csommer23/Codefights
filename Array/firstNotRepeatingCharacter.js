function firstNotRepeatingCharacter(s) {  
    let strArray = s.split(''),
        obj = {};
 
    for(let i = 0; i < strArray.length; i++) {
       let position = strArray[i];
       if(!!obj[strArray[i]])	     
          obj[position]++;
       else
          obj[position] = 1; 
    }
    
    for(let i = 0; i < strArray.length; i++) {
       if(obj[strArray[i]] === 1) return strArray[i];
    }
 
    return '_';
 }
/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
'use strict';
module.exports = titleCase;

function titleCase(str) {
  var i;
 var newstr = str.split(" ");
  
  for(i=0;i<newstr.length;i++){
    
    var copy = newstr[i].substring(1).toLowerCase();
    newstr[i] = newstr[i][0].toUpperCase() + copy;
    
  }
   newstr = newstr.join(" ");
   return newstr;
}  

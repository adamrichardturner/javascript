function rgb(r, g, b) {
    /*
    The rgb function is incomplete. Complete it so that passing in RGB decimal 
    values will result in a hexadecimal representation being returned. Valid 
    decimal values for RGB are 0 - 255. Any values that fall out of that range 
    must be rounded to the closest valid value.

    Note: Your answer should always be 6 characters long, the shorthand with 
    3 will not work here.

    The following are examples of expected output values:

    rgb(255, 255, 255) // returns FFFFFF
    rgb(255, 255, 300) // returns FFFFFF
    rgb(0,0,0) // returns 000000
    rgb(148, 0, 211) // returns 9400D3
    */

   // boundary checks returns the boundary (0 or 255) if x falls
   // out of the boundary. 
   const boundary = x => {
       if(x < 0) {
           return 0;
       } else if (x > 255) {
           return 255;
       } else {
           return x;
       }
   }
   // vals contains an array of the rgb values adjusted using boundary
   let vals = [boundary(r).toString(16), boundary(g).toString(16), boundary(b).toString(16)]

   // Return vals iterated with map to check whether to fill zeros dependant on if val length 
   // is less than 2.
   return vals.map(val => val.length < 2 ? '0' + val : val).join('').toString().toUpperCase();
}

console.log(rgb(255, 255, 255)); // FFFFFF
console.log(rgb(255, 255, 300)); // FFFFFF
console.log(rgb(150,10,135)); // 960A87
console.log(rgb(148, 0, 211)); // 9400D3
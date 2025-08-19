function example() {
  var a = 1;        // Function scoped
  let b = 2;        // Block scoped
  const c = 3;      // Block scoped, immutable
  
  if (true) {
    var a = 4;      // Same variable
    let b = 5;      // Different variable
    // const c = 6; // Would create new variable
  }
  
  console.log(a); // 4
  console.log(b); // 2
  console.log(c); // 3
}

example();
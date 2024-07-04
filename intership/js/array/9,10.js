function getInitials(name) {
    return name.split(' ').map(word => word[0]).join('');
  }
  
  const input = "George Raymond Richard Martin";
  const output = getInitials(input);
  
  console.log(output);

const input1 = "george raymond Richard Martin";
  function getInput (name){
    return name.split(" ").map(n => n[0]).join('').toUpperCase()
   
  }
 console.log(getInput(input1))
 

  

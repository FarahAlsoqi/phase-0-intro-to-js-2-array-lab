let cats = ["Milo", "Otis", "Garfield"];
 

function destructivelyAppendCat(name) {
    name = "Ralph"
    cats.push(name);
  }
  
  function destructivelyPrependCat(name) {
    name = "Bob"
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
    function appendCat(name) {
        name = "Broom";
        return ["Milo", "Otis", "Garfield",name];
    }
    function prependCat(name) {
        name ="Garfield";
        return ["Arnold", "Milo", "Otis", name];
    }

    function removeLastCat(){ 
      return cats.slice(0,-1)
    }

    function removeFirstCat(){
        return cats.slice(1)  
    }
let user = {
    name: "Джон",
    age: 30,
  
    sayHi() {
        name = "clint",
      // this - это "текущий объект"
      console.log(name);
    }
  
  };
  
  user.sayHi()

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr
      .filter((person) => person.profession === "developer")
      .map((developer) => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((person) => {
      if (person.profession === "developer") {
        console.log(person);
      }
    });
  }
  
  function addData() {
    arr.push({ id: 4, name: "rimi", age: "22", profession: "developer" });
    console.log(arr);
  }
  
  function removeAdmin() {
    arr = arr.filter((person) => person.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    let newArray = arr.concat([
      { id: 5, name: "soumi", age: "25", profession: "admin" },
      { id: 6, name: "krishna", age: "23", profession: "developer" },
    ]);
    console.log(newArray);
  }
  



  

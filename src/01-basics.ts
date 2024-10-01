import {Friend, Colleague, ColleagueHistory } from './myTypes'

  let friend1: Friend = {
    name: "Paul Fleming",
    phone: "087-12345",
    age: 25,
  };
  
  let friend2: Friend = {
    name: "Jane Costello",
    phone: "086--12345",
    age: 31,
  };
  
  export const friends = [friend1, friend2];

  // console.log(friends[1]);
  

  //   -------------------  	//

  let colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  let colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  let colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };


  export const colleagues = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  // console.log(colleagues.current[0]);
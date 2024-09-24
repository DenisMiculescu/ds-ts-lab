
interface Friend {
    name: string;
    phone: string;
    age: number
}

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
  
  let friends: Array<Friend> = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------

interface Colleague {
    name: string;
    department: string;
    contact: {
        email: string;
        extension: number;
    }
}

interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

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

  
  export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  console.log(colleagues.current[0]);
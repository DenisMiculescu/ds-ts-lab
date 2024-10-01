import { colleagues, friends } from './01-basics'
import {Friend, Colleague} from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friends: Friend[]): string[] {
    return friends.map(f => {
        f.age += 1;
        return `${f.name} is now ${f.age}`;
    });
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  
function addColleague(colleagues: Colleague[], name: string, department: string, email: string): Colleague[] {
    
    const highestExtensionNum = highestExtension(colleagues)
    
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtensionNum.contact.extension + 1,
        }
    };

    colleagues.push(newColleague);

    return colleagues;
} 


// console.log(older(friends[0]))
// console.log(allOlder(friends))
// console.log(highestExtension(colleagues.current));

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

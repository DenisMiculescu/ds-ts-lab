import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact} from './myTypes'

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}


function allOlder(friends: Friend[]) {
    return friends.map(f => {
        f.age += 1;
        return `${f.name} is now ${f.age}`;
    });
}


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
  

function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {
    
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


function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  

function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean) {
    return friends.filter(criterion).map((friend) => friend.name)
}

function addInterest(friend: Friend, interest: string) {
    if(friend.interests == undefined){
        friend.interests = []
    }

    friend.interests.push(interest);

    return friend.interests;
}


// console.log(older(friends[0]))
// console.log(allOlder(friends))

// console.log(highestExtension(colleagues.current));

// addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

// console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
// console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

// console.log(findFriends(friends, (friend) => friend.name.startsWith('Ja')));
// console.log(findFriends(friends, (friend) => friend.age < 35));

// console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

console.log(addInterest(friends[0], 'Sport'))


let adjective1 = prompt("Enter an adjective.")
let creature = prompt("Enter the name of a spooky creature.")
let adjective2 = prompt("Enter an adjective.")
let friend = prompt("Enter the name of a friend.")
let adjective3 = prompt("Enter an adjective.") 
let adjective4 = prompt("Enter an adjective.")

let creature2 = prompt("Enter the name of a spooky creature.")

let story = `
    On a mysterious and ${adjective1} Halloween night, I decided to go to a abandond house with my friend.
    I was creeping around in the dark using my sesnes to navigate my way around. I felt something ${adjective2} and thought it was something from a urban legend like ${creature} that looked ${adjective3}.
    My friend, ${friend}, dressed up as a ${adjective4} ${creature2}.
`;

let madLibOutputDiv = document.getElementById("madLibOutput");
 
madLibOutputDiv.innerHTML = `
   <h2>Your Halloween Story </h2>
    <p>${story}</p>
`;

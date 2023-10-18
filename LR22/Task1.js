//1
const text = "I like regular expressions in JavaScript";
const pattern = /JavaScript/;
const result = text.match(pattern);

console.log(result); 
//2
const text2 = "sdo  e ddsf saerwrwe ewds";
const pattern2 = /\w+ /g;
const result2 = text2.match(pattern2);

console.log(result2); 
//3
const fullName = "Зубенко Михаил";
const swappedName = fullName.replace(/(\S+)\s(\S+)/, (match, firstName, lastName) => `${lastName} ${firstName}`);
console.log(swappedName);

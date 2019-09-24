process.stdin.resume();
process.stdin.setEncoding('utf8');

console.log("How old are you?");

process.stdin.on("data", (num) => {
    let currentYear = new Date().getFullYear();
    let yearOfBirth = currentYear - Math.round(num);
    if (num > 0 && num < 99) {
        console.log(`You born in ${yearOfBirth}`);
        process.exit();
    } else if (num <= 0) {
        console.log("You have to born first");
        process.exit();
    } else if (num > 99)  {
        console.log("Sorry, you are too old to play this game!")
        process.exit();
    } 
    console.log("Enter a number!");
    process.exit();
});
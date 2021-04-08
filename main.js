
        //Arrays with data//
const Jokes = ["I just got fired from my job at the keyboard factory. They told me I wasn't putting in enough shifts.",
            "My computer suddenly started belting out 'Someone Like You.' It's a Dell.",
            "Q: Why should you stand in the corner if you get cold? A: It's always 90 degrees.",
            "To the guy who stole my antidepressants: I hope you’re happy now.",
            "Did you hear about the claustrophobic astronaut? He just needed a little space."];

const Songs = ["Gra - by Wardruna.",
            "White Iverson - by Post Malone.",
            "Star Shopping - by Lil Peep.",
            "How the Jellyfish Jumped Up the Mountain - by Shpongle.",
            "Hollow - by Shahmen."];

const AIQuotes = ["Hate the mountains.",
            "Seek success,but prepare for vegetables.",
            "After the now,comes the road.",
            "Canada is not what they say it is.",
            "Having a panic attack? Stop it."];

        //func to randomize the data,and add conditionals//
const randomizeData = (msg_type) => {
    
    const category = msg_type;
    const rand = Math.floor(Math.random() * 5);
    if (category === 0) {
        return Jokes[rand];
    } 
    else if (category === 1) {
        return Songs[rand];
    } 
    else if (category === 2) {
        return AIQuotes[rand];
    };

}
//function for btn that pushes randomizedata func towards selected p tags(these tags are stored in vars called container1,2,3)
function msgs() {
    const messageOne = randomizeData(0);
    const messageTwo = randomizeData(1);
    const messageThree = randomizeData(2);               //store func in var//

    let container1 = document.getElementById('1');
    let container2 = document.getElementById('2');      //get the selected p tags with id 1,2 or 3 and store in var//
    let container3 = document.getElementById('3');
    
    container1.innerHTML = messageOne;
    container2.innerHTML = messageTwo;
    container3.innerHTML = messageThree;  
};
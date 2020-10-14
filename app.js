const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){

    // Get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // Access background color property of html content
    document.body.style.backgroundColor = colors[randomNumber];

    // Changing the hex value of the color in html content
    color.textContent = colors[randomNumber];
    
});

// Function to generate a random number
function getRandomNumber(){
    return Math.floor(Math.random()  * colors.length);
}
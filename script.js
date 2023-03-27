// function clearDefaultText() Code not required
// {
//     var textarea = document.getElementById("textarea");
//   if (textarea.value == "Type here...") {
//     textarea.value = "";
//     textarea.style.opacity = 0.8
//   }
  
// }   


// ----------------- This is where I need help --------------------------------------

// let btn_num = 1;

// function selectButton(buttonId, newBtnNum) {
//   document.querySelectorAll('#button-group button').forEach(btn => {
//     btn.classList.remove('selected');
//   });
//   document.querySelector(`#${buttonId}`).classList.add('selected');
//   btn_num = newBtnNum;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('#normal-button').addEventListener('click', () => {
//     selectButton('normal-button', 1);
//   });
//   document.querySelector('#number-button').addEventListener('click', () => {
//     selectButton('number-button', 2);
//   });
//   document.querySelector('#punctuation-button').addEventListener('click', () => {
//     selectButton('punctuation-button', 3);
//   });
// });
// console.log(btn_num);
//-----------------------------------------------------------------------------------


const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showsentence');
const show_time = document.querySelector('#showtimer')

let startTime , endTime , totalTimeTaken;

const sentences_with_punctuations = [
    "The company's profits have increased by 25% over the last year, but there are still concerns about their long-term sustainability.",
    "She asked me to pick up some groceries on the way home: bread, milk, eggs, and cheese.",
    "I need to finish writing this report before the deadline at 5:00 pm; otherwise, my boss will be very disappointed.",
    "The doctor said that I need to take my medicine every day, and that I should come back for a follow-up appointment next week.",
    "I'm going to the store to buy some new clothes (shirts, pants, and shoes).",
    "The recipe calls for 2 cups of flour, 1 cup of sugar, and 1/2 teaspoon of salt.",
    "We're going to the park for a picnic: sandwiches, fruit, and lemonade are on the menu.",
    "I'm having a party on Saturday night, and I want to make sure that everything is perfect: decorations, music, food, and drinks.",
    "My favorite movie of all time is The Godfather: it's a classic that never gets old.",
    "I'm taking a photography class at the community center, and I need to bring my camera, tripod, and lens kit."
]

const sentences_with_numbers = [
    "The cat has 9 lives",
    "My car can go up to 120 km/h",
    "She bought 3 apples and 2 oranges",
    "The temperature outside is 20 degrees Celsius",
    "The recipe calls for 2 cups of flour",
    "The train will arrive at platform 6",
    "The marathon is 26.2 miles long",
    "I have 5 siblings",
    "The Earth's circumference is 40,075 kilometers",
    "The phone number is 555-1234",
    "The package weighs 2 pounds",
    "There are 365 days in a year",
    "The book has 300 pages",
    "He scored 3 goals in the game",
    "The city's population is 1 million",
    "The recipe needs 1 teaspoon of salt",
    "The company has 50 employees",
    "She is 30 years old",
    "The bag can hold up to 10 kilograms",
    "The car's fuel tank has a capacity of 50 liters",
    "The computer has 16 gigabytes of RAM",
    "The building is 100 meters tall",
    "He has 2 children",
    "The recipe calls for 3 eggs",
    "The exam has 50 questions",
    "The bus fare is 2 dollars",
    "The room temperature is 25 degrees Celsius",
    "The company has 1000 shareholders",
    "The painting is worth 5000 dollars",
    "The cake needs to bake for 45 minutes",
    "The soccer field is 100 yards long",
    "The phone battery lasts for 3 hours",
    "The movie is 2 hours long",
    "He ran for 5 kilometers",
    "The recipe requires 4 ounces of cheese",
    "The plane flies at an altitude of 30,000 feet",
    "The pizza has a diameter of 12 inches",
    "The jacket costs 150 dollars",
    "The baby weighs 7 pounds",
    "The race is 10 kilometers long",
    "The engine has 6 cylinders",
    "The recipe needs 2 tablespoons of sugar",
    "The computer monitor has a resolution of 1920x1080",
    "The book costs 10 dollars",
    "The temperature dropped by 5 degrees",
    "The meeting starts at 2:30 PM",
    "The bicycle has 18 gears",
    "The song is 3 minutes long"
]


const sentences = [ "The sun rises in the east",
    "Elephants are the largest land animals",
    "My favorite color is blue",
    "The ocean is not indexed wise but inside a tuple",
    "Do you know that i have a acer laptop",
    "Learning a new language takes time and dedication",
    "Dogs are known for their loyalty",
    "The sky is blue on a clear day",
    "I love to read books in my spare time",
    "The Great Wall of China is the longest wall in the world",
    "Pizza is a popular food around the world",
    "The Mona Lisa is a famous painting by Leonardo da Vinci",
    "The Earth orbits around the sun",
    "Water is essential for life",
    "The Eiffel Tower is a famous landmark in Paris",
    "Soccer is the most popular sport in the world",
    "The Statue of Liberty is a symbol of freedom and democracy",
    "The moon orbits around the Earth",
    "Learning to play a musical instrument can be rewarding",
    "Elephants have a remarkable memory",
    "The amazon forests are present in brazil",
    "The world is round",
    "Honeybees are important pollinators",
    "Music has a powerful effect on our emotions",
    "The human body has bones",
    "The internet has revolutionized the way we communicate",
    "Cats are independent animals",
    "The universe is constantly expanding",
    "Reading is a great way to improve your knowledge",
    "The pyramids of Egypt are ancient wonders of the world",
    "Coffee is one of the most widely consumed beverages in the world",
    "The human brain is the most complex organ in the body",
    "The Pacific Ocean is the largest ocean in the world",
    "Birds are the only animals that have feathers",
    "The Roman Colosseum is a famous landmark in Italy",
    "The tallest mountain in the world is Mount Everest",
    "Apples are a great source of vitamins and fiber",
    "The human eye can distinguish about different colors",
    "The African elephant is the largest land animal",
    "Ice cream is a popular dessert around the world",
    "The human heart beats approximately times per day",
    "The English language is spoken by over billion people worldwide",
    "The Leaning Tower of Pisa is a famous leaning tower",
    "Mars is the four>th planet from the sun",
    "Chocolate contains a chemical called phenylethylamine, which can induce feelings of happiness",
    "The human body contains about trillion cells",
    "The Red Sea is a seawater inlet of the Indian Ocean",
    "Penguins are flightless birds that live in Antarctica",
    "The Great Barrier Reef is the largest coral reef system in the world",
    "The human nose can detect over different scents",
    "Bananas are a good source of potassium",
    "The Golden Gate Bridge is an iconic suspension bridge in San Francisco",
    "The human skin is the largest organ of the body",
    "The Nile River is the longest river in the world",
    "Giraffes are the tallest mammals in the world",
    "The Mona Lisa is a painting by Leonardo da Vinci",
    "The human tongue contains taste buds",
    "Arctic Ocean is the smallest and shallowest of the world's five oceans",
    "Dolphins are intelligent marine mammals",
    "The human stomach can hold up to liters of food and drink",
    "The Taj Mahal is a mausoleum in India",
    "Rainforests are home to over half of the world's plant and animal species",
    "The human ear can detect sound waves as low as Hz and as high as Hz",
    "Grapes are a good source of antioxidants",
    "The Himalayan mountain range is the highest in the world",
    "Tigers are the largest cat species in the world",
    "The human liver can regenerate itself",
    "The Dead Sea is the lowest point on Earth",
    "Oranges are a good source of vitamin C",
    "The Great Wall of China is the longest wall in the world",
    "The human skeleton provides support and protection for the body"]


const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    show_sentence.innerHTML = sentences[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText= "Done"

    showTimer();
}
let intervalID;
let elapsedTime = 0;
const showTimer = () => {
    if(btn.innerText === "Done")
    {
        intervalID = setInterval(() => {
            elapsedTime++;
            show_time.innerHTML = elapsedTime;
        },1000)
    }
    else if(btn.innerText === "Start"){
        elapsedTime = "";
        clearInterval(intervalID);
        show_time.innerHTML = "";
    }
}

const endTypingTest = () => {
    btn.innerText = "Start";
    showTimer();
    let date = new Date();
    endTime = date.getTime();
    totalTimeTaken = (endTime -startTime)/ 1000;
    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";

}

const errorChecking = (words) => {
    let num = 0, sentence_to_write = show_sentence.innerHTML;
    sentence_to_write = sentence_to_write.split(" ");

    for ( let i = 0 ; i< words.length; i++){
        if ( words[i] === sentence_to_write[i]){
            num++;
        }
    }
    return num;
}
const calculateTypingSpeed = (timetaken) => {
    let totalwords = typing_ground.value.trim();
    let actualWords = totalwords === "" ? 0 :totalwords.split(" ");

    actualWords = errorChecking(actualWords);
    if(actualWords !== 0){
        let typing_speed = (actualWords /timetaken) * 60 ;
        typing_speed = Math.round(typing_speed);
       
        // score.innerHTML = `Typing speed : ${typing_speed} wpm Words typed : ${actualWords} words Time Taken : ${timetaken} sec`;
        score.innerHTML = `Typing speed : <span style="color:red">${typing_speed} wpm</span> Words typed : <span style="color:red">${actualWords} words</span> Time Taken : <span style="color:red">${timetaken} sec</span>`;

    }
    else{
        score.innerHTML = `Typing speed : 0 wpm`;
    }
}
btn.addEventListener('click', () => {
    switch(btn.innerText.toLowerCase()) {
        case "start": 
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;
        case "done":
            typing_ground.setAttribute('disabled', 'true');
            endTypingTest();
            break;
    }
})
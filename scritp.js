let btn = document.getElementsByClassName("btn")[0];
// let btn = document.getElementById("btn");
// let btn = document.querySelector(".btn span .btn-default");

console.log(btn);


let userName = 'Pius'
const greeting = (userName) => {
    // console.log("Hello userName");
    // console.log(`Hello ${userName}`)
    // console.log("Hello " + userName);
}
function greeting1 () {
    // console.log("Hello userName");
    // console.log(`Hello ${userName}`)
    // console.log("Hello " + userName);
}

greeting(userName)



// let length = 4;
// let breath = 6;

// let areaOfRect = length * breath;
// console.log(areaOfRect);

const areaOfRect = (length, breath) => {
   const total = length * breath

   console.log(total);
};

// areaOfRect(3, 7);


// Conditional statements and operators
let studentScore = 60;

if (studentScore >= 70) {
    console.log('Congratulations!! You got A');
} else if (studentScore >= 60) {
    console.log('You got B');
} else if (studentScore >= 50) {
    console.log('You got C');
} else if (studentScore >= 40) {
    console.log('You got D');
} else if (studentScore >= 30) {
    console.log('You got E');
} else {
    console.log('You got F');
}



let day = new Date().getDay();

const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const dayOfWeek = daysOfWeek[new Date().getDay()];
console.log("Current day of the week:", dayOfWeek);

if (day == "0") {
    console.log('Today is Sunday');
} else if (day == '1') {
    console.log('Today is Monday');
} else if (day == '2') {
    console.log('Today is Tuesday');
} else if (day == '3') {
    console.log('Today is Wednesday');
} else if (day == '4') {
    console.log('Today is Thursday');
} else if (day == '5') {
    console.log('Today is Friday');
} else {
    console.log('Today is Saturday');
}

switch (day) {
    case 0:
        console.log('Today is Sunday');
        break;
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;

    default:
        console.log('Wrong date format');
        break;
}

const timeHour = new Date().getHours();


const timeMinutes = new Date().getMinutes();

// console.log(timeHour + ':' + timeMinutes);

// console.log(document);



const greetingText = document.getElementsByTagName('h2')[0];
const showBtn = document.querySelector(".show-btn");
const changeBtn = document.querySelector("#changeText-btn");
const changeStyleBtn = document.querySelector(".change_style-btn");


showBtn.addEventListener("click", () => {
    greetingText.style.display = "block";
}) 

// innerText
// innerHTML
// textContent
changeBtn.addEventListener("click", () => {
    greetingText.innerText = 'Good Afternoon Everyone'
    // greetingText.textContent = '<h6>Good Afternoon Everyone.</h6>'
    // greetingText.innerHTML = `
    //     <ul>
    //         <li>rf</li>
    //         <li>rf</li>
    //         <li>rf</li>
    //         <li>rf</li>
    //     </ul>    
    // `;
}) 


changeStyleBtn.addEventListener("click", () => {
    greetingText.style.cssText = `
        color: red;
        padding: 8px; 
    `;
});

// Menu List Toggle
const menuList = document.querySelector('.menu-links');
const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerCloseBtn = document.querySelector('.close-btn');


hamburgerBtn.addEventListener('click', () => {
    if (menuList.style.display == 'flex') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'flex';
    }
    // menuList.style.display = 'flex';
    // hamburgerBtn.style.display = 'none';
    // hamburgerCloseBtn.style.display = 'block';
});

// hamburgerCloseBtn.addEventListener('click', () => {
//     menuList.style.display = 'none';
//     hamburgerBtn.style.display = 'block';
//     hamburgerCloseBtn.style.display = 'none';
// });

// hamburgerBtn.addEventListener('click', () => {
//     menuList.classList.toggle('show');
// });

// for font-awesome
// hamburgerBtn.addEventListener('click', () => {
//     if (menuList.style.display == 'flex') {
//         menuList.classList.remove('fa-bars')
//         menuList.classList.add('fa-times')
//     } else {
//         menuList.classList.remove('fa-bars')
//         menuList.classList.add('fa-times')
//     }
// });
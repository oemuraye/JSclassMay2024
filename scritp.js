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


// showBtn.addEventListener("click", () => {
//     greetingText.style.display = "block";
// }) 

// // innerText
// // innerHTML
// // textContent
// changeBtn.addEventListener("click", () => {
//     greetingText.innerText = 'Good Afternoon Everyone'
//     // greetingText.textContent = '<h6>Good Afternoon Everyone.</h6>'
//     // greetingText.innerHTML = `
//     //     <ul>
//     //         <li>rf</li>
//     //         <li>rf</li>
//     //         <li>rf</li>
//     //         <li>rf</li>
//     //     </ul>    
//     // `;
// }) 


// changeStyleBtn.addEventListener("click", () => {
//     greetingText.style.cssText = `
//         color: red;
//         padding: 8px; 
//     `;
// });

// // Menu List Toggle
// const menuList = document.querySelector('.menu-links');
// const hamburgerBtn = document.querySelector('.hamburger-btn');
// const hamburgerCloseBtn = document.querySelector('.close-btn');


// hamburgerBtn.addEventListener('click', () => {
//     if (menuList.style.display == 'flex') {
//         menuList.style.display = 'none';
//     } else {
//         menuList.style.display = 'flex';
//     }
//     // menuList.style.display = 'flex';
//     // hamburgerBtn.style.display = 'none';
//     // hamburgerCloseBtn.style.display = 'block';
// });

// // hamburgerCloseBtn.addEventListener('click', () => {
// //     menuList.style.display = 'none';
// //     hamburgerBtn.style.display = 'block';
// //     hamburgerCloseBtn.style.display = 'none';
// // });

// // hamburgerBtn.addEventListener('click', () => {
// //     menuList.classList.toggle('show');
// // });

// // for font-awesome
// // hamburgerBtn.addEventListener('click', () => {
// //     if (menuList.style.display == 'flex') {
// //         menuList.classList.remove('fa-bars')
// //         menuList.classList.add('fa-times')
// //     } else {
// //         menuList.classList.remove('fa-bars')
// //         menuList.classList.add('fa-times')
// //     }
// // });


// Form Validation

const authForm = document.getElementById('auth-form');
const formBtn = document.querySelector('auth-form');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const password = document.getElementById('password');
const genderMale = document.getElementById('male');
const genderFemale = document.getElementById('female');
const occupationSelect = document.getElementById('occupation');
const remember = document.getElementById('remember');

const alertMsg = document.querySelector('.alert-message');



// authForm.addEventListener('submit', (e) => {
//     e.preventDefault();
  
//     if (
//         firstName.value === "" 
//         || lastName.value === ""
//         || email.value === ""
//         || phone.value === ""
//         || password.value === ""
//     ) {
//         console.log('Please fill all fields');
//     } if (password === "password") {
//         console.log('Password should not be password');    
//     } if (password < 8) {
//         console.log("password must be at least 8 characters");
//     } if (genderMale.checked == false && genderFemale.checked == false) {
//         console.log('Choose a gender');   
//     } if (occupationSelect.value === "") {
//         console.log('Please select an occupation category');
//     } else {
//         const userData = {
//             "firstName": firstName.value,
//             "lastName": lastName.value,
//             "email": email.value,
//             "phone": phone.value,
//             "password": password.value,
//             "gender": genderMale.checked ? genderMale.value : genderFemale.value,
//             "remember": remember.checked ? "yes" : "no"
//         }
//         console.log(userData);
//         window.location.href = './index.html';
//     }
    
// });



// formBtn.addEventListener('click', (e) => {
//     e.preventDefault();


// });

// change class of active
const menuLinks = document.querySelectorAll('.menu-links a');
let currentPage = window.location.pathname;


menuLinks.forEach((item) => {
    if (item.getAttribute('href') === currentPage) {
        item.classList.add('active');
    } else {
        item.classList.remove('active');        
    }
})


// Carousel/Image slider 
let currentIndex = 0;
const images = [
    "./slider1.jpg",
    "./slider2.jpg",
    "./slider3.jpg"
];
const sliderImage = document.querySelector('.hero_section img');

const showSlide = (index) => {
    currentIndex = (index + images.length) % images.length;
    sliderImage.src = images[currentIndex];
}; 

const nextSlide = () => {
    showSlide(currentIndex + 1)
}
const prevSlide = () => {
    showSlide(currentIndex - 1)
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);



// Scroll to the top button

window.onscroll = () => {
    const scrollToTop = document.getElementById('scrollToTopBtn');
    if (
      document.body.scrollTop >= 250 ||
      document.documentElement.scrollTop >= 250
    ) {
      scrollToTop.style.display = "block";
    } else {
      scrollToTop.style.display = "none";
    }
};

// Back to Top Function
const scrollToTheTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// api practice
document.getElementById('fetchButton').addEventListener('click', fetchUser);

function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            let user = data.results[0];
            console.log(user);
            let userInfo = `
                <p>Name: ${user.name.first} ${user.name.last}</p>
                <p>Email: ${user.email}</p>
                <p>Location: ${user.location.city}, ${user.location.country}</p>
                <img src="${user.picture.medium}" alt="User Picture">
            `;
            document.getElementById('userInfo').innerHTML = userInfo;
        })
        .catch(error => console.error('Error fetching data:', error));
}


document.getElementById('postButton').addEventListener('click', postData);

const postData = async () => {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let data = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let responseData = await response.json();
        document.getElementById('response').innerHTML = `
            <p>ID: ${responseData.id}</p>
            <p>Title: ${responseData.title}</p>
            <p>Body: ${responseData.body}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').innerHTML = '<p>Error sending data. Please try again later.</p>';
    }
}

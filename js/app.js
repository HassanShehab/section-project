/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let list = document.getElementById('navbar__list');
let sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let creatNavBar = ()=>{
    console.log(window.pageYOffset);
    sections.forEach(function (section) {
        let text = section.getAttribute('id');
        list.innerHTML += `<li><a href="#${text}">${text}</a></li>`;
        let linkList = document.querySelectorAll('a');
        linkList.forEach(function (Link){
            Link.setAttribute('class' , 'menu__link');
        });
    })
}

creatNavBar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
window.onscroll = ()=>{
    let secOne = document.getElementById('section1');
    let secTwo = document.getElementById('section2');
    let secThree = document.getElementById('section3');
    let secFour = document.getElementById('section4');
    let links = document.querySelectorAll('a');
    let linkOne = links[0];
    let linkTwo = links[1];
    let linkThree = links[2];
    let linkFour = links[3];
    if(window.pageYOffset > 975 && window.pageYOffset < 1475){
        secTwo.classList.add('your-active-class');
        secOne.classList.remove('your-active-class');
        linkTwo.classList.add('active-link');
        linkOne.classList.remove('active-link');
        linkThree.classList.remove('active-link');
        linkFour.classList.remove('active-link');
    }else if(window.pageYOffset > 1475 && window.pageYOffset < 1975){
        secThree.classList.add('your-active-class');
        secTwo.classList.remove('your-active-class');
        linkThree.classList.add('active-link');
        linkTwo.classList.remove('active-link');
        linkOne.classList.remove('active-link');
        linkFour.classList.remove('active-link');
    }else if(window.pageYOffset > 1975){
        secFour.classList.add('your-active-class');
        secThree.classList.remove('your-active-class');
        linkFour.classList.add('active-link');
        linkThree.classList.remove('active-link');
    }else{
        secOne.classList.add('your-active-class');
        linkOne.classList.add('active-link');
        linkFour.classList.remove('active-link');
        linkTwo.classList.remove('active-link');
    }
    
}

// Set sections as active




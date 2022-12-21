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
let fragment = document.createDocumentFragment();
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
    sections.forEach((section)=>{
        let sectionId = section.getAttribute('id');
        let sectionTitle = section.getAttribute('data-nav');

        let itemList = document.createElement('li');
        let linkList = document.createElement('a');

        linkList.classList.add('menu__link');
        linkList.href = `#${sectionId}`;
        linkList.innerText = sectionTitle ;
        linkList.addEventListener('click' , event=>{
            event.preventDefault();
            section.scrollIntoView({
                behavior : 'smooth'
            })
        })
        itemList.appendChild(linkList);
        fragment.appendChild(itemList)
    })
    list.appendChild(fragment);
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
    if(window.pageYOffset > 1175 && window.pageYOffset < 1825){
        secTwo.classList.add('your-active-class');
        secOne.classList.remove('your-active-class');
        linkTwo.classList.add('active-link');
        linkOne.classList.remove('active-link');
        linkThree.classList.remove('active-link');
        linkFour.classList.remove('active-link');
    }else if(window.pageYOffset > 1825 && window.pageYOffset < 2525){
        secThree.classList.add('your-active-class');
        secTwo.classList.remove('your-active-class');
        linkThree.classList.add('active-link');
        linkTwo.classList.remove('active-link');
        linkOne.classList.remove('active-link');
        linkFour.classList.remove('active-link');
    }else if(window.pageYOffset > 2525){
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




// ----------------------- dropdownToggle-----------------
const dropdownToggle = document.querySelector(".dropdown");
// console.log(dropdownToggle);

const dropdownitem = document.querySelectorAll(".dropdown-item");
// console.log(dropdownitem);

dropdownToggle.addEventListener("click", function (e) {
  // console.log(e.currentTarget.childNodes[3]);
  // e.currentTarget.childNodes[3].classList.toggle("active");
  let submenu = e.currentTarget.childNodes[3];
  if (submenu.classList.contains("sub-menu")) {
    submenu.classList.remove("sub-menu");
  } else {
    submenu.classList.add("sub-menu");
  }

  dropdownitem.forEach(function (item) {
    item.classList.remove("active");
  });
});

//----------------- navbartoggle ----------------

const navbarToggle = document.querySelector(".navbar-toggler");
// console.log(navbarToggle);
const navbarLinksContainer = document.querySelector(".links-container");
// console.log(navbarLinksContainer);
const links = document.querySelector(".navbar-nav");
// console.log(links);
let faBars = document.querySelector(".fa-bars");

navbarToggle.addEventListener("click", function (e) {
  const linksHeight = links.getBoundingClientRect().height;
  const linksContainerHeight =
    navbarLinksContainer.getBoundingClientRect().height;
  console.log(linksHeight);
  console.log(linksContainerHeight);
  if (linksContainerHeight === 0) {
    navbarLinksContainer.style.height = `${linksHeight}px`;
    faBars.classList.remove("fa-bars");

    faBars.classList.add("fa-times");
  } else {
    navbarLinksContainer.style.height = `0px`;
    faBars.classList.remove("fa-times");
    faBars.classList.add("fa-bars");
  }

});

// -------------------- body color change --------------------------

const body = document.body;
// console.log(body);

const bodyColor = document.querySelector(".bg-color-change");
// console.log(bodyColor);

const bodyColorIcon = document.querySelector(".fa-sun-o");

bodyColor.addEventListener("click", function (e) {
  if (body.classList.contains("bg-color")) {
    body.classList.remove("bg-color");
    bodyColorIcon.classList.remove("fa-moon-o");
  } else {
    body.classList.add("bg-color");
    bodyColorIcon.classList.add("fa-moon-o");
  }
});

// ------------------------- navbar fixed --------------

const navbar = document.querySelector("nav");
// console.log(navbar);

const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const windowscrollHeight = window.pageYOffset;
  // console.log(windowscrollHeight);
  const navbarHeight = navbar.getBoundingClientRect().height;
  // console.log(navbarHeight);

  if (windowscrollHeight > navbarHeight) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }

  if (windowscrollHeight > 300) {
    topLink.classList.add("show");
  } else {
    topLink.classList.remove("show");
  }


});



// -------------------- pre-loader---------------------------

const preloader = document.querySelector(".preloader");
// console.log(preloader)

window.addEventListener("load", function () {
  this.setTimeout(function () {
    preloader.style.display = "none";
  }, 1000);
});

//------------ Date change----------
const date = document.querySelector(".date");
// console.log(date);
date.innerHTML = new Date().getFullYear();


//------------- scroll links---------
let scrollableLinks = document.querySelectorAll(".scroll-link");
// console.log(scrollableLinks);

scrollableLinks.forEach(function(link){
  // console.log(link);

  link.addEventListener("click", function(e){
    e.preventDefault();
    const linksContainerHeight =
    navbarLinksContainer.getBoundingClientRect().height;
    const navbarHeight = navbar.getBoundingClientRect().height;
    // console.log(e.currentTarget)
    const id=e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element=document.getElementById(id);
    // console.log(element);
    const fixedNav=navbar.classList.contains("navbar-fixed");
    // console.log(fixedNav);

    let position=element.offsetTop-navbarHeight;

    if(!fixedNav)
    {
      position-=navbarHeight;
    }
    else if(fixedNav<82)
    {
      position+=linksContainerHeight;
    }

    window.scrollTo({
      left:0,
      top:position,
      behavior:"smooth"
    });
    navbarLinksContainer.style.height='0px';
    faBars.classList.remove("fa-times");
    faBars.classList.add("fa-bars");


  });

});


// ------------------ heading remove and adding letters--------------

const text = document.querySelector(".text-two");

const words=["Designer", "Developer", "Javascript Enthusiastic"];
let wordsIndex=0;
let charIndex=0;
let isDeleted=false;

const typeEffect =function () {

  let currentWord = words[wordsIndex];
  let currentChar = currentWord.substring(0, charIndex);
  // console.log(currentWord.substring(0,charIndex));
  // console.log(currentChar, currentWord);

  text.textContent = currentChar;
  // console.log(text.textContent);

  if (!isDeleted && charIndex < currentWord.length) {
    text.classList.add("split-blink");
    charIndex++;
    setTimeout(typeEffect, 200);
  }
else if(isDeleted && charIndex > 0)
{
  charIndex--;
  setTimeout(typeEffect,100);
}

else
{
  text.classList.remove("split-blink");

  isDeleted= !isDeleted;
  wordsIndex=!isDeleted ? (wordsIndex+1)% words.length :wordsIndex;
  setTimeout(typeEffect,1200);
}



}
typeEffect();



// ------------------------- cursor--------------------

const cursor1=document.querySelector(".cursor1");

console.log(cursor1);

window.addEventListener("mousemove",function(e){
  cursor1.style.left=`${e.pageX }px `;
  cursor1.style.top=`${e.pageY}px`;

});


// -------------------- fade in fade out -----------------



const fade = () => {
  let LeftElementId=document.getElementById("leftelemtid");
// console.log(LeftElementId);
  // const box = document.querySelector('#box');
  
  LeftElementId.classList.toggle('fade');
};

document.querySelector('#fadebtn').addEventListener('click', fade);

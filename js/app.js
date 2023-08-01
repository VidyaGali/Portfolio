:root {
  --dim-grey: #696969;
  --pure-white: #fff;
  --mint-creat: #f5fffa;
  --Ivory: #fffff0;
  --LightYellow: #ffffe0;
  --black: #000;
  --gold-dim: #2b388d;
  --primary-font: "Poppins", sans-serif;
  --transition: color 0.3s ease-in-out;
  --transition-backg: background-color 0.3s ease-in-out;
  --transition-all: 0.4s;
  --prime-border-radius: 5px;
  --sec-border-radius: 50%;
  --text-shadow: 0px 2px #2b388d;
  --sec-text-shadow: 0 2px #030320;
  --prime-box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  --bg-primary-color: #01051f;
  --prime-color: #fff;
  --secondary-color: #2b388d;
  --ternary-color: #2b388d;

  --prime-border: 2px solid #2b388d;
  --sec-border: 2px solid #171717;
}

*::selection {
  color: var(--pure-white);
  background-color: var(--secondary-color);
}

*,
::before,
::after {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

body {
  width: 100%;
  overflow-x: hidden;
  font-family: var(--primary-font);
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-size: 1rem;
  background-color: var(--bg-primary-color);
  color: var(--prime-color);
  position: relative;
  cursor: zoom-in;
}

/*  to remove body scroll bar----------*/
::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-button {
  display: none;
}

a {
  text-decoration: none;
}

li {
  list-style-type: none;
}

img {
  display: block;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--primary-font);
  font-weight: 600;
  line-height: 1.5;
  font-size: 1.6rem;
  color: var(--navy);
}

p {
  font-family: var(--secondary-font);
  color: var(--dim-grey);
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 2.5rem !important;
}

img {
  display: block;
}

button,
button:focus,
button:active {
  outline: none;
  border: none;
}

/* ------------------ fade-------------------------------- */

/* ------------------------ cursor ------------------------ */
.cursor1{
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  /* border: 2px solid #696969; */
  border-radius: 50%;
  transform: translate(-50%,-50%);
  pointer-events: none;
  animation: cur 2s infinite ease-in-out;
  z-index: 2;
}

@keyframes cur {
  0%{
    background: transparent;
  }
  25%{
    background-color: gold;
  }
  50%{
    background-color: rgb(194, 50, 134);
  }
  70%{
    background-color: rgb(170, 86, 100);
  }
  100%{
    transform: scale(1.3);
    background-color:rgb(22, 5, 117);
  }
}


/* ----------------------- Prealoader -------------------------------- */
.preloader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--bg-primary-color);
  z-index: 999;
  display: flex;
	justify-content: center;
	align-items: center;
}


.yellow{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: yellow;
  margin: 0px 20px;
  animation: bounceIn 1s  linear infinite;
}

.red{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: red;
  margin: 0px 20px;
  animation: bounceIn 1.5s linear infinite;
}

.blue{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: blue;
  margin: 0px 20px;
  animation: bounceIn 2s linear infinite;
}

.violet{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: violet;
  margin: 0px 20px;
  animation: bounceIn 3s linear infinite;
}

@keyframes bounceIn {
  0%, 50%, 100% {
		transform: scale(1);
		filter: blur(0px);
	}
	25% {
		transform: scale(0.6);
		filter: blur(3px);
	}
	75% {
		filter: blur(2px);
		transform: scale(1.6);
	}
}

/* --------------------------- navbar- fixed -------------- */
.navbar-fixed {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color:#0c1131;
}
/* ----------------------------------- navbar toggler -------------------- */
.navbar-toggler {
  background-color: var(--prime-color);
  padding: 5px 8px;
  font-size: 2rem;
  background-color: var(--prime-color);
  padding: 5px 8px;
  font-size: 2rem;
  position: absolute;
  top: 1.5rem;
  right: 12%;
  box-shadow: var(--prime-box-shadow);
  animation: bars-grow 4s linear infinite;
  border: 4px solid var(--secondary-color);
}

@keyframes bars-grow {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
.fa-bars,
.fa-times {
  color: var(--bg-primary-color);
}

/* ------------------------------- bg-color change ------------------------- */

.bg-color-change {
  width: 4rem;
  height: 4rem;
  border-radius: var(--prime-border-radius);
  text-align: center;
  background: rgba(255, 255, 255, 0.103);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 2rem;
}

.bg-color-change .fa-sun-o,
.bg-color-change .fa-moon-o {
  color: var(--prime-color) !important;
  display: grid;
  margin: auto;
}

/* ---------------------------- navbar ---------------------------- */
.header {
  width: 100%;
  max-height: 100vh;
  position: relative;
}
.navbar {
  width: 100%;
  box-shadow: 0 3px 10px rgb(0, 0, 0, 0.2);
  padding-bottom: 15px;
}

.navbar-center {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.navbar-brand {
  color: var(--prime-color);
  font-size: 2rem;
  font-weight: 700;
  text-shadow: var(--text-shadow);
  padding-top: 10px;
}

.navbar-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-nav li a {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--dark-nav);
  transition: var(--transition);
  font-family: var(--primary-font);
  margin-right: 18px;
  cursor: zoom-in;
}

.navbar-nav li a:hover {
  color: var(--secondary-color);
}

.navbar-nav li.active a {
  color: var(--secondary-color);
}

.dropdown .dropdown-menu .dropdown-item::after {
  content: "";
  display: block;
  width: 0%;
  height: 2px;
  background-color: var(--secondary-color);
  transition: var(--transition);
}

.dropdown .dropdown-menu .dropdown-item:hover::after {
  width: 100%;
}

.dropdown a.active {
  color: var(--prime-color) !important;
}

.dropdown a.active:hover {
  color: var(--secondary-color) !important;
}

.dropdown-menu .dropdown-item {
  color: var(--black);
  text-align: center;
}

.dropdown:hover .dropdown-menu
{
  display: block;
  margin-top: 20px; 
 padding: 10px;

}

.sub-menu {
  display: block;
  margin-top: 20px;
  color: var(--gold-dim);
  padding: 10px;
  background-color: var(--mint-creat);
}

.dropdown-menu .dropdown-item:hover {
  color: var(--gold-dim);
  background-color: var(--prime-color);
}

/* --------------------------------- hero---------------------------------- */

.main {
  margin: 8rem auto;
}

.title-content-img {
  width: 60%;
  max-width: 800px;
  max-height: 100vh;
  margin: 20px auto;
  padding: 20px !important;
}

.title-content-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: var(--sec-border-radius);
  animation: img-bounce 3s infinite ease-in-out;
}

@keyframes img-bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.title-text .text{
  font-size: 3rem;
  font-weight: 500;
  position: relative;
}

.title-heading h3 {
  font-size: 2.8rem;
}
.title-heading .color-name {
  color: var(--secondary-color);
  font-size: 4rem;
  font-weight: 700;
}

.title-heading .color-name span {
  color: var(--prime-color);
}
.title-heading .text.text-one {
  color: var(--secondary-color);
  overflow: hidden;
}

.text-two::before {
  content: '';
  position: absolute;
  right: -5px;
  top: 50%;
  width: 2px;
  height: 30px;
  background-color:var(--bg-primary-color);
  border-left: 3px solid var(--prime-color);
  transform: translateY(-45%);
  animation: textChange 5s infinite;

}

.text-two.split-blink::before{
animation: none;
}

 @keyframes textChange {
  50%{
    opacity: 0.9;
  }
 
} 
.title-content p {
  margin: 1.8rem auto;
}

.btn-container {
  width: 100%;
}

.btn {
  padding: 1rem 3rem !important;
  border-radius: var(--prime-border-radius);
  margin-right: 2rem;
  cursor: zoom-in;
}

.btn-resume {
  font-family: var(--primary-font);
  background-color: var(--ternary-color);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--prime-color);
  transition: var(--transition);
}

.btn-resume:hover {
  border: var(--prime-border) !important;
  background: none;
  border: none;
  color: var(--secondary-color);
}

.btn-resume.active {
  color: var(--secondary-color);
}

/* ---------------------------------- about ------------------------------ */
.about {
  width: 100%;
  margin: 12rem auto;
}

.about .title p {
  max-width: 70%;
  width: 100%;
  text-align: center;
  margin: auto;
}

.title {
  text-align: center;
}

.title .title-head h2 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.8;
  color: var(--secondary-color);
}

.about-content {
  margin-top: 2rem;
}
.about-content h3 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.8;
}

.about-content p {
  padding-right: 30px;
}

.btn-square {
  padding: 1rem 4.5rem;
}

.about-content p > strong {
  color: var(--secondary-color);
  font-weight: 600;
}

.skills {
  margin-top: 2rem;
}

.skills h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--navy);
}

.skill-set {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: transparent;
  gap: 2rem;
  margin-top: 3rem;
}

.skill-icon {
  width: 50%;
  text-align: center;

}

.skill-icon img {
  width: 100%;
  background: var(--bg-primary-color);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 10px;
  margin-bottom: 1rem;
  aspect-ratio: 3/4;
  background-color: var(--prime-color);
  transition: var(--transition-all);
}

.skill-icon img:hover {
  background-color: var(--secondary-color);
}

.skill-icon span {
  color: var(--prime-color);
  margin: 1rem auto;
  font-size: 1.5rem;
}

/* ---------------------------------- services ------------------------------ */
.service{
  margin: 12rem auto;
}
.service-card{
  width: 100%;
  height:90%;
  background-color: #293372;
  padding: 5px;
  margin-top: 2rem;
  border-radius: var(--prime-border-radius);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}
.service-card .service-img{
  width: 100%;
  height: 50%;
  overflow:hidden;
  cursor: zoom-in;
}

.service-card .service-img img{
  width: 100%;
  height: 100%;
  transition: var(--transition-all);
}

.service-card .service-img img:hover{
  transform: scale(1.5);
}

.title{
  width: 100%;
  height: 100%;
}

.underline::after{
content: '';
display: block;
width: 20%;
height: 6px;
background-color: var(--prime-color);
margin: 5px auto 20px auto;
position: relative;
border-radius:10px;
}


.underline::before{
content: '';
display: block;
width: 2%;
height: 6px;
background-color: var(--secondary-color);
position: absolute;
left: 40%;
border-radius: 10px;
animation: move 3s ease-in-out infinite alternate-reverse;
z-index: 2;
}

@keyframes move {
  0%{
    left: 42%;
  }

  100%{
    left: 56%;
  }

}


.service-card .service-content .btn-read{
background-color:transparent;
padding: 0.5rem 1rem;
font-size: 1.6rem;
cursor: zoom-in;
color: var(--prime-color);
}

.service-card .service-content .btn-view:hover{
color: var(--secondary-color);
}

.service-card .service-content{
padding: 10px;
}


.service-card .service-content p{
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.service-card .service-content h3{
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 0.8rem;
  text-shadow:0px 0px  5px var(--secondary-color);
  transition: var(--transition-all);
}
.service-card .service-content h3:hover{
color: var(--secondary-color);
text-shadow:0px 0px  5px var(--prime-color);

}
/* --------------------------------- Portfolio------------------------------------ */
.portfolio{
  margin: 12rem auto;
}
.portfolio-item {
  width: 100%;
  height: 50vh;
  border-radius: 10px;
  transition: var(--transition-all);
  position: relative;
  overflow: hidden;
  margin: 20px auto;
}

.portfolio-img {
  width: 100%;
  height: 100%;
}

.portfolio-item iframe {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.portfolio-overlay-content {
  text-align: center;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.portfolio-overlay {
  background-color: var(--bg-primary-color);
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: var(--transition-all);
  background-color: var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: 15px;
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: 0.6s linear;
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
  visibility: visible;
  top: 50%;
}

.portfolio-item .portfolio-overlay:hover .portfolio-overlay-content {
  opacity: 1;
  visibility: visible;
}

.portfolio-overlay-content h3 {
  font-size: 2rem;
}

.portfolio-overlay-content p {
  font-size: 1.5rem;
  color: var(--black);
}

.btn-view {
  padding: 1rem 3rem;
  border-radius: var(--prime-border-radius);
  margin-right: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--bg-primary-color);
  transition: var(--transition);
  border: var(--sec-border) !important;
  border: none;
}

.btn-view:hover {
  background-color: var(--bg-primary-color);
  color: var(--prime-color);
}

/* --------------------------------- contact --------------------------------------- */

.contact {
  padding: 10rem 0;
  margin: auto;
}

.contact-form-group {
  margin: auto;
  background: var(--bg-primary-color);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 2rem 28px;
}

.contact-form {
  padding: 2rem;
  border: 1px solid #778899a6;
  border-radius: var(--prime-border-radius);
}


.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px 10px;
  font-size: 1.3rem;
  color: var(--dark-nav);
  border: 2px solid var(--LightSteelBlue);
  margin: 1rem auto;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--bg-primary-color);
  font-size: 1.2rem;
  font-family: var(--primary-font);
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  box-shadow: none;
  border: var(--prime-border);
}

.contact-form .btn-resume {
  text-align: center;
  margin: auto;
  display: grid;
}
/* ----------------------------------- footer -------------------------------- */
.footer {
  width: 100%;
  padding: 2rem 0;
}

.personal-details h3 {
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--prime-color);
}

.personal-details h3:hover{
  color: var(--bg-primary-color);
  text-shadow: 0px 0.5px var(--secondary-color);
}

.social-icons h3 {
  font-size: 2rem;
  color: var(--prime-color);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.menu-items {
  display: flex;
  align-items: center;
  list-style-type: none;
}
.menu-items li {
  margin-right: 1rem;
  border: var(--prime-border);
  box-shadow: var(--box-shadow);
  padding: 5px;
  transition: var(--transition-all);
  border-radius: var(--sec-border-radius);
  cursor: zoom-in;
}

.menu-items li a {
  text-decoration: none !important;
}

.menu-items li a i {
  font-size: 2rem;
  text-align: center;
  padding: 5px;
  color: var(--prime-color);
  transition: all 0.5s ease-in-out;
  cursor: zoom-in;
}

.menu-items li:hover {
  color: var(--secondary-color) !important;
  background-color: var(--prime-color);
  border: none;
}

.menu-items li a i:hover {
  color: var(--secondary-color);
  background-color: var(--prime-color);
  border-radius: var(--sec-border-radius);
}

.copy p {
  color: var(--prime-color);
  text-align: center;
}

/* --------------------- scroll up ------------------------------------- */
.top-link {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  color: var(--prime-color);
  visibility: hidden;
  animation: link-grow 8s linear infinite;
  cursor: zoom-in;

}

@keyframes link-grow {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}

.top-link i {
  font-size: 2.8rem;
  text-align: center;
  display: grid;
}

.top-link:hover {
  background-color: var(--ternary-color);
  color: var(--prime-color);
}

.show {
  visibility: visible;
  z-index: 99;
}

.bg-color {
  background-color: var(--prime-color);
  color: var(--black);
}

.bg-color .color-name span {
  color: var(--bg-primary-color);
}

.bg-color .menu-items li {
  background-color: var(--bg-primary-color);
  border: none;
  color: var(--gold-dim);
}

.bg-color .copy p {
  color: var(--bg-primary-color);
}

.bg-color .skill-icon img {
  background-color: var(--mint-creat);
  box-shadow: var(--prime-box-shadow);
}

.bg-color .navbar {
  padding: 10px;
  background-color: var(--gold-dim);
}

.bg-color .bg-color-change {
  background-color: var(--secondary-color);
  margin-left: 20px;
}

.bg-color .navbar-nav li {
  color: var(--pure-white);
  transition: var(--transition);
}

.bg-color .navbar-nav li:hover a {
  color: var(--bg-primary-color);
}

.bg-color .navbar-nav li.active a {
  color: var(--bg-primary-color) !important;
}

.bg-color .dropdown:hover a.active {
  color: var(--bg-primary-color) !important;
}

.bg-color .text-two::before {

  background-color:var(--prime-color);
  border-left: 3px solid var(--secondary-color);
}

.bg-color .underline::after{
  background-color: var(--secondary-color);
  }

  .bg-color .underline::before{
    background-color: var(--bg-primary-color);
    }
.copy .date {
  color: var(--secondary-color);
  font-weight: 600;
}



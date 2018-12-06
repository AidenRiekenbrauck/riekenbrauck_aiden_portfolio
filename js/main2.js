new WOW().init();



    const vm = new Vue({
        // link the main app element
        el : "#app",
        
        // Vue.js variable
        data : {
            itemTitle : "",
        },
        
        created : function() {
        
            this.loadTest();
        
        },

        
        // Vue.js methods
        methods : {
        
            loadTest() {
                const url = "includes/functions.php";
        
                fetch(url) // goes to the url
                .then(res => res.json()) // takes that JSON file, turns it into a vanilla JS object
                .then(data => { // data variable is the different rows from the PHP query that happens at the URL we fetch from
                    this.showItem1(data[0]);
                    this.showItem2(data[1]);
                    this.showItem3(data[2]);
                    this.showItem4(data[3]);
                   
                     this.showItem31(data[30]);
                     this.showItem32(data[31]);
                    

                    
                    
                })
                .catch(function(error) {
                    console.log(error);
                });
        
            },
        
            showItem1(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_hole").src = `images/mobile_hole/${data.thumb_name}`;   
            },
            showItem2(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_hole2").src = `images/mobile_hole/${data.thumb_name}`;    
            },
            showItem3(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_hole3").src = `images/mobile_hole/${data.thumb_name}`;    
            },
            showItem4(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_hole4").src = `images/mobile_hole/${data.thumb_name}`;    
            },
            showItem31(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_hole5").src = `images/mobile_hole/${data.thumb_name}`;    
            },
            showItem32(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_hole6").src = `images/mobile_hole/${data.thumb_name}`;      
            },
        
        }
        
        });


      
//hamburger menu start

const NAV_OPENED_CLASS = "change";
const NAV_CLOSED_CLASS = "changeBack";

window.onload = function() {
    const navBtn = document.getElementById("nav-btn");
    const classes = navBtn.classList;
    const navbar = document.getElementById("navbar");
  
    navBtn.addEventListener("click", function() {
      if (classes.contains(NAV_OPENED_CLASS)) {
        openNav();
      } else {
        closeNav();
      }
    });
    const navLinks = document.getElementsByClassName("nav-link");
    [...navLinks].forEach(function(elem) {
      elem.addEventListener("click", function() {
        closeNav();
      });
    });
  
    function closeNav() {
      classes.remove(NAV_CLOSED_CLASS);
      classes.add(NAV_OPENED_CLASS);
      navbar.classList.add("hide");
    }
    function openNav() {
      classes.remove(NAV_OPENED_CLASS);
      classes.add(NAV_CLOSED_CLASS);
      navbar.classList.remove("hide");
    }
  };


var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,60000); //one minute rotations

function nextSlide(){   //function to go to next slide. Hence the +1
    goToSlide(currentSlide+1);
}

function previousSlide(){   //function to go to previous slide. Hence -1
    goToSlide(currentSlide-1);
}

function goToSlide(n){                                
    slides[currentSlide].className = 'slide';  //all slides have opacity of 0
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';  //give current slide the class of *showing* (gives class opacity of 1 and z index of 2)
}



var next = document.getElementById('next');     //link the next button
var previous = document.getElementById('previous');  //link the previous button

next.onclick = function(){   //function to go to next slide on svg click
    nextSlide();
};
previous.onclick = function(){ //function to go to next slide on svg click
    previousSlide();
};






  let images= document.querySelectorAll(".data-ref");

function getData() {
    let targetURL = `./includes/connect.php?image=${this.id}`;

	fetch(targetURL) //getting data
    .then(res => res.json()) //turning result into a plain JS object
    .then(data => {
        
        showInfoData(data[0]);//run function to parse our data
    })
    .catch(function(error) {
        console.log(error); //log errors
    });
}

function showInfoData(data) { //lets see that data
	const { image} = data;



     console.log(image);
    //  document.querySelector('#description').textContent = song;  
console.log(description);
}

images.forEach( image =>  image.addEventListener('click', getData)); //show data on page c:


//3rd party lightbox

halkaBox.options({
    hideButtons: true,       // hide buttons on touch devices (true || false)
    animation: "fade",      // animation type on next/prev ("slide" || "fade")
    theme: "dark",          // lightbox overlay theme ("light" || "dark")
    preload: 2,              // number of images to preload
    swipeDownToClose: false, // swipe down to close (true || false)
    nextPrevOnWheel: true,   // goto next/prev image on wheel (true || false)
    isZoomable: true         // ability to zoom image (true || false)
});


halkaBox.run("gallery1");
halkaBox.run("gallery2");
halkaBox.run("gallery3");
halkaBox.run("gallery4");
halkaBox.run("gallery5");
halkaBox.run("gallery6");
halkaBox.run("gallery7");
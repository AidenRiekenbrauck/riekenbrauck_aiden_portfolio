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
                    this.showItem5(data[4]);
                    this.showItem6(data[5]);
                    this.showItem7(data[6]);
                    this.showItem8(data[7]);
                    this.showItem9(data[8]);
                     this.showItem10(data[9]);
                     this.showItem11(data[10]);
                     this.showItem12(data[11]);
                     this.showItem13(data[12]);
                     this.showItem14(data[13]);
                     this.showItem15(data[14]);
                     this.showItem16(data[15]);
                     this.showItem17(data[16]);
                     this.showItem18(data[17]);
                     this.showItem19(data[18]);
                     this.showItem20(data[19]);
                     this.showItem21(data[20]);
                     this.showItem22(data[21]);
                     this.showItem23(data[22]);
                     this.showItem24(data[23]);
                     this.showItem25(data[24]);
                     this.showItem26(data[25]);
                     this.showItem27(data[26]);
                     this.showItem28(data[27]);
                     this.showItem29(data[28]);
                     this.showItem30(data[29]);
                     this.showItem31(data[30]);
                     this.showItem32(data[31]);
                     this.showItem33(data[32]);
                     this.showItem34(data[33]);
                     this.showItem35(data[34]);
                     this.showItem36(data[35]);
                     this.showItem37(data[36]);
                     this.showItem38(data[37]);
                     this.showItem39(data[38]);
                     this.showItem40(data[39]);
                     this.showItem41(data[40]);
                     this.showItem42(data[41]);

                     this.showItem43(data[42]);
                     this.showItem44(data[43]);
                     this.showItem45(data[44]);
                     this.showItem46(data[45]);
                     this.showItem47(data[46]);
                     this.showItem48(data[47]);
                    
                     
                     

                    
                    
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



            showItem5(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_orb").src = `images/mobile_orb/${data.thumb_name}`;                
            },
            showItem6(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_orb2").src = `images/mobile_orb/${data.thumb_name}`; 
            },
            showItem7(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_orb3").src = `images/mobile_orb/${data.thumb_name}`;        
            },  
            showItem8(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_orb4").src = `images/mobile_orb/${data.thumb_name}`;                
            },
            showItem33(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_orb5").src = `images/mobile_orb/${data.thumb_name}`;               
            },
            showItem34(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_orb6").src = `images/mobile_orb/${data.thumb_name}`;                
            },


            showItem9(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_alive").src = `images/mobile_alive/${data.thumb_name}`;               
            },          
            showItem10(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_alive2").src = `images/mobile_alive/${data.thumb_name}`;    
            },         
            showItem11(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_alive3").src = `images/mobile_alive/${data.thumb_name}`;          
            },
            showItem12(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_alive4").src = `images/mobile_alive/${data.thumb_name}`;              
            },
            showItem35(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_alive5").src = `images/mobile_alive/${data.thumb_name}`;                
            },
            showItem36(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_alive6").src = `images/mobile_alive/${data.thumb_name}`;               
            },





            
            showItem13(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_dummy").src = `images/mobile_dummy/${data.thumb_name}`;   
            },  
            showItem14(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_dummy2").src = `images/mobile_dummy/${data.thumb_name}`;    
            },    
            showItem15(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_dummy3").src = `images/mobile_dummy/${data.thumb_name}`;             
            }, 
            showItem16(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_dummy4").src = `images/mobile_dummy/${data.thumb_name}`;           
            },
            showItem37(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_dummy5").src = `images/mobile_dummy/${data.thumb_name}`;              
            },
            showItem38(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_dummy6").src = `images/mobile_dummy/${data.thumb_name}`;
            },





            showItem17(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_agency").src = `images/mobile_agency/${data.thumb_name}`; 
            },
            showItem18(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_agency2").src = `images/mobile_agency/${data.thumb_name}`;
                
            },
            showItem19(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_agency3").src = `images/mobile_agency/${data.thumb_name}`;
                
            },
            showItem20(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_agency4").src = `images/mobile_agency/${data.thumb_name}`;
                
            },
            showItem39(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_agency5").src = `images/mobile_agency/${data.thumb_name}`;
                
            },
            showItem40(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_agency6").src = `images/mobile_agency/${data.thumb_name}`;
                
            },




            showItem21(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_abstract").src = `images/mobile_abstract/${data.thumb_name}`;
                
            },
            showItem22(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_abstract2").src = `images/mobile_abstract/${data.thumb_name}`;
                
            },
            showItem23(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_abstract3").src = `images/mobile_abstract/${data.thumb_name}`;
                
            }, 
            showItem24(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_abstract4").src = `images/mobile_abstract/${data.thumb_name}`;
                
            },
            showItem41(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_abstract5").src = `images/mobile_abstract/${data.thumb_name}`;
                
            },
            showItem42(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_abstract6").src = `images/mobile_abstract/${data.thumb_name}`;
                
            },





            showItem25(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_particle").src = `images/mobile_particle/${data.thumb_name}`;
                
            },
            showItem26(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_particle2").src = `images/mobile_particle/${data.thumb_name}`;
                
            },       
            showItem27(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_particle3").src = `images/mobile_particle/${data.thumb_name}`;
                
            },
            showItem28(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_particle4").src = `images/mobile_particle/${data.thumb_name}`;
                
            },
            showItem29(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_particle5").src = `images/mobile_particle/${data.thumb_name}`;
                
            },
            showItem30(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_particle6").src = `images/mobile_particle/${data.thumb_name}`;
                
            },




            showItem43(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_bottle").src = `images/mobile_bottle/${data.thumb_name}`;
                
            },
            showItem44(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_bottle2").src = `images/mobile_bottle/${data.thumb_name}`;
                
            },       
            showItem45(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_bottle3").src = `images/mobile_bottle/${data.thumb_name}`;
                
            },
            showItem46(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_bottle4").src = `images/mobile_bottle/${data.thumb_name}`;
                
            },
            showItem47(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_bottle5").src = `images/mobile_bottle/${data.thumb_name}`;
                
            },
            showItem48(data) {
                this.itemTitle = data.image_name;
                document.getElementById("mobile_bottle6").src = `images/mobile_bottle/${data.thumb_name}`;
                
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


document.addEventListener('keyup', function (event) {

	const key = event.key || event.keyCode;

	if (key === 'ArrowRight' || key === 39) {

		// move to next slide

		nextSlide();

	} else if (key == 'ArrowLeft' || key === 37) {

		// move to previous slide

		previousSlide();

	}

});



// Open the Modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  



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
halkaBox.run("gallery8");
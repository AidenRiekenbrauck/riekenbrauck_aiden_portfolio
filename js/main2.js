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
                    this.showItem49(data[48]);
                    this.showItem50(data[49]);
                    this.showItem51(data[50]);
                    this.showItem52(data[51]);
                    this.showItem53(data[52]);
                    this.showItem54(data[53]);
                    this.showItem55(data[54]);
                    this.showItem56(data[55]);
                    this.showItem57(data[56]);
                    this.showItem58(data[57]);
                    this.showItem59(data[58]);
                    this.showItem60(data[59]);
                    

                    
                    
                })
                .catch(function(error) {
                    console.log(error);
                });
        
            },
        
            showItem49(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid1").src = `images/vid_thumb/${data.thumb_name}`;   
            },
            showItem50(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid2").src = `images/vid_thumb/${data.thumb_name}`;    
            },
            showItem51(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid3").src = `images/vid_thumb/${data.thumb_name}`;    
            },
            showItem52(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid4").src = `images/vid_thumb/${data.thumb_name}`;    
            },
            showItem53(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid5").src = `images/vid_thumb/${data.thumb_name}`;    
            },
            showItem54(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid6").src = `images/vid_thumb/${data.thumb_name}`;      
            },
            showItem55(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid7").src = `images/vid_thumb/${data.thumb_name}`;   
            },
            showItem56(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid8").src = `images/vid_thumb/${data.thumb_name}`;    
            },
            showItem57(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid9").src = `images/vid_thumb/${data.thumb_name}`;    
            },
            showItem58(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid10").src = `images/vid_thumb/${data.thumb_name}`;    
            },
            showItem59(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid11").src = `images/vid_thumb/${data.thumb_name}`;    
            },
            showItem60(data) {
                this.itemTitle = data.image_name;
                document.getElementById("vid12").src = `images/vid_thumb/${data.thumb_name}`;      
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

halkaBox.run("gallery8");


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



//slide 1
var openLightbox1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'https://vimeo.com/166745976',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_hole/gallery_hole2.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_hole/gallery_hole3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_hole/gallery_hole4.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_hole/gallery_hole5.png',
    w: 1280,
    h: 720
},
{
    src: './images/gallery_hole/gallery_hole6.png',
    w: 1280,
    h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:0
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLightbox2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_hole/gallery_hole.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_hole/gallery_hole2.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_hole/gallery_hole3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_hole/gallery_hole4.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_hole/gallery_hole5.png',
    w: 1280,
    h: 720
},
{
    src: './images/gallery_hole/gallery_hole6.png',
    w: 1280,
    h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:1
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLightbox3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_hole/gallery_hole.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_hole/gallery_hole2.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_hole/gallery_hole3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_hole/gallery_hole4.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_hole/gallery_hole5.png',
    w: 1280,
    h: 720
},
{
    src: './images/gallery_hole/gallery_hole6.png',
    w: 1280,
    h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:2
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLightbox4 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_hole/gallery_hole.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_hole/gallery_hole2.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_hole/gallery_hole3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_hole/gallery_hole4.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_hole/gallery_hole5.png',
    w: 1280,
    h: 720
},
{
    src: './images/gallery_hole/gallery_hole6.png',
    w: 1280,
    h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:3
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLightbox5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_hole/gallery_hole.png',
            w: 1280,
            h: 1280
        },
        {
            src: './images/gallery_hole/gallery_hole2.png',
            w: 1280,
            h: 1280
        },
        {
          src: './images/gallery_hole/gallery_hole3.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_hole/gallery_hole4.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_hole/gallery_hole5.png',
      w: 1280,
      h: 720
  },
  {
      src: './images/gallery_hole/gallery_hole6.png',
      w: 1280,
      h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:4
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

  var openLightbox6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_hole/gallery_hole.png',
            w: 1280,
            h: 1280
        },
        {
            src: './images/gallery_hole/gallery_hole2.png',
            w: 1280,
            h: 1280
        },
        {
          src: './images/gallery_hole/gallery_hole3.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_hole/gallery_hole4.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_hole/gallery_hole5.png',
      w: 1280,
      h: 720
  },
  {
      src: './images/gallery_hole/gallery_hole6.png',
      w: 1280,
      h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:5
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
//slide2

var openLight2box1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_orb/gallery_orb.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_orb/gallery_orb2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_orb/gallery_orb3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_orb/gallery_orb4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_orb/gallery_orb5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_orb/gallery_orb6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:0
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLight2box2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_orb/gallery_orb.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_orb/gallery_orb2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_orb/gallery_orb3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_orb/gallery_orb4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_orb/gallery_orb5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_orb/gallery_orb6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:1
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight2box3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_orb/gallery_orb.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_orb/gallery_orb2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_orb/gallery_orb3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_orb/gallery_orb4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_orb/gallery_orb5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_orb/gallery_orb6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:2
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight2box4 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_orb/gallery_orb.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_orb/gallery_orb2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_orb/gallery_orb3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_orb/gallery_orb4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_orb/gallery_orb5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_orb/gallery_orb6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:3
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLight2box5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_orb/gallery_orb.png',
            w: 1280,
            h: 1280
        },
        {
            src: './images/gallery_orb/gallery_orb2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_orb/gallery_orb3.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_orb/gallery_orb4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_orb/gallery_orb5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_orb/gallery_orb6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:4
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
var openLight2box6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_orb/gallery_orb.png',
            w: 1280,
            h: 1280
        },
        {
            src: './images/gallery_orb/gallery_orb2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_orb/gallery_orb3.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_orb/gallery_orb4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_orb/gallery_orb5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_orb/gallery_orb6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:5
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };



//slide3

var openLight3box1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_alive/gallery_alive.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_alive/gallery_alive2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_alive/gallery_alive3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_alive/gallery_alive4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_alive/gallery_alive5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_alive/gallery_alive6.png',
  w: 1280,
  h: 720
}
  
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:0
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLight3box2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_alive/gallery_alive.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_alive/gallery_alive2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_alive/gallery_alive3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_alive/gallery_alive4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_alive/gallery_alive5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_alive/gallery_alive6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:1
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight3box3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_alive/gallery_alive.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_alive/gallery_alive2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_alive/gallery_alive3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_alive/gallery_alive4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_alive/gallery_alive5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_alive/gallery_alive6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:2
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight3box4 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_alive/gallery_alive.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_alive/gallery_alive2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_alive/gallery_alive3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_alive/gallery_alive4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_alive/gallery_alive5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_alive/gallery_alive6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:3
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight3box5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_alive/gallery_alive.png',
            w: 1280,
            h: 720
        },
        {
            src: './images/gallery_alive/gallery_alive2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_alive/gallery_alive3.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_alive/gallery_alive4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_alive/gallery_alive5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_alive/gallery_alive6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:4
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
var openLight3box6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_alive/gallery_alive.png',
            w: 1280,
            h: 720
        },
        {
            src: './images/gallery_alive/gallery_alive2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_alive/gallery_alive3.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_alive/gallery_alive4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_alive/gallery_alive5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_alive/gallery_alive6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:5
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

//slide4
var openLight4box1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_dummy/gallery_dummy.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_dummy/gallery_dummy2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_dummy/gallery_dummy3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_dummy/gallery_dummy4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_dummy/gallery_dummy5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_dummy/gallery_dummy6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:0
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLight4box2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_dummy/gallery_dummy.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_dummy/gallery_dummy2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_dummy/gallery_dummy3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_dummy/gallery_dummy4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_dummy/gallery_dummy5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_dummy/gallery_dummy6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:1
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight4box3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_dummy/gallery_dummy.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_dummy/gallery_dummy2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_dummy/gallery_dummy3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_dummy/gallery_dummy4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_dummy/gallery_dummy5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_dummy/gallery_dummy6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:2
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight4box4 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_dummy/gallery_dummy.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_dummy/gallery_dummy2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_dummy/gallery_dummy3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_dummy/gallery_dummy4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_dummy/gallery_dummy5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_dummy/gallery_dummy6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:3
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight4box5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_dummy/gallery_dummy.png',
            w: 1280,
            h: 720
        },
        {
            src: './images/gallery_dummy/gallery_dummy2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_dummy/gallery_dummy3.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_dummy/gallery_dummy4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_dummy/gallery_dummy5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_dummy/gallery_dummy6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:4
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
var openLight4box6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_dummy/gallery_dummy.png',
            w: 1280,
            h: 720
        },
        {
            src: './images/gallery_dummy/gallery_dummy2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_dummy/gallery_dummy3.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_dummy/gallery_dummy4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_dummy/gallery_dummy5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_dummy/gallery_dummy6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:5
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

//slide5
var openLight5box1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_agency/gallery_agency.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_agency/gallery_agency2.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_agency/gallery_agency3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_agency/gallery_agency4.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_agency/gallery_agency5.png',
    w: 1280,
    h: 1280
},
{
  src: './images/gallery_agency/gallery_agency6.png',
  w: 1280,
  h: 1280
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:0
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLight5box2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_agency/gallery_agency.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_agency/gallery_agency2.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_agency/gallery_agency3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_agency/gallery_agency4.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_agency/gallery_agency5.png',
    w: 1280,
    h: 1280
},
{
  src: './images/gallery_agency/gallery_agency6.png',
  w: 1280,
  h: 1280
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:1
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight5box3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_agency/gallery_agency.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_agency/gallery_agency2.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_agency/gallery_agency3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_agency/gallery_agency4.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_agency/gallery_agency5.png',
    w: 1280,
    h: 1280
},
{
  src: './images/gallery_agency/gallery_agency6.png',
  w: 1280,
  h: 1280
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:2
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight5box4 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_agency/gallery_agency.png',
          w: 1280,
          h: 1280
      },
      {
          src: './images/gallery_agency/gallery_agency2.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_agency/gallery_agency3.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_agency/gallery_agency4.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_agency/gallery_agency5.png',
    w: 1280,
    h: 1280
},
{
  src: './images/gallery_agency/gallery_agency6.png',
  w: 1280,
  h: 1280
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:3
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight5box5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_agency/gallery_agency.png',
            w: 1280,
            h: 1280
        },
        {
            src: './images/gallery_agency/gallery_agency2.png',
            w: 1280,
            h: 1280
        },
        {
          src: './images/gallery_agency/gallery_agency3.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_agency/gallery_agency4.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_agency/gallery_agency5.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_agency/gallery_agency6.png',
    w: 1280,
    h: 1280
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:4
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
var openLight5box6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_agency/gallery_agency.png',
            w: 1280,
            h: 1280
        },
        {
            src: './images/gallery_agency/gallery_agency2.png',
            w: 1280,
            h: 1280
        },
        {
          src: './images/gallery_agency/gallery_agency3.png',
          w: 1280,
          h: 1280
      },
      {
        src: './images/gallery_agency/gallery_agency4.png',
        w: 1280,
        h: 1280
    },
    {
      src: './images/gallery_agency/gallery_agency5.png',
      w: 1280,
      h: 1280
  },
  {
    src: './images/gallery_agency/gallery_agency6.png',
    w: 1280,
    h: 1280
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:5
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

//slide6
var openLight6box1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_abstract/gallery_abstract.png',
          w: 1920,
          h: 720
      },
      {
          src: './images/gallery_abstract/gallery_abstract2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_abstract/gallery_abstract3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_abstract/gallery_abstract4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_abstract/gallery_abstract5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_abstract/gallery_abstract6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:0
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLight6box2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_abstract/gallery_abstract.png',
          w: 1920,
          h: 720
      },
      {
          src: './images/gallery_abstract/gallery_abstract2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_abstract/gallery_abstract3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_abstract/gallery_abstract4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_abstract/gallery_abstract5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_abstract/gallery_abstract6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:1
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight6box3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_abstract/gallery_abstract.png',
          w: 1920,
          h: 720
      },
      {
          src: './images/gallery_abstract/gallery_abstract2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_abstract/gallery_abstract3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_abstract/gallery_abstract4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_abstract/gallery_abstract5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_abstract/gallery_abstract6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:2
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight6box4 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_abstract/gallery_abstract.png',
          w: 1920,
          h: 720
      },
      {
          src: './images/gallery_abstract/gallery_abstract2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_abstract/gallery_abstract3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_abstract/gallery_abstract4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_abstract/gallery_abstract5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_abstract/gallery_abstract6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:3
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight6box5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_abstract/gallery_abstract.png',
            w: 1920,
            h: 720
        },
        {
            src: './images/gallery_abstract/gallery_abstract2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_abstract/gallery_abstract3.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_abstract/gallery_abstract4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_abstract/gallery_abstract5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_abstract/gallery_abstract6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:4
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
var openLight6box6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_abstract/gallery_abstract.png',
            w: 1920,
            h: 720
        },
        {
            src: './images/gallery_abstract/gallery_abstract2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_abstract/gallery_abstract3.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_abstract/gallery_abstract4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_abstract/gallery_abstract5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_abstract/gallery_abstract6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:5
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };

//slide7
var openLight7box1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_particle/gallery_particle.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_particle/gallery_particle2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_particle/gallery_particle3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_particle/gallery_particle4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_particle/gallery_particle5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_particle/gallery_particle6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:0
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openLight7box2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_particle/gallery_particle.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_particle/gallery_particle2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_particle/gallery_particle3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_particle/gallery_particle4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_particle/gallery_particle5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_particle/gallery_particle6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:1
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight7box3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_particle/gallery_particle.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_particle/gallery_particle2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_particle/gallery_particle3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_particle/gallery_particle4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_particle/gallery_particle5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_particle/gallery_particle6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:2
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight7box4 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: './images/gallery_particle/gallery_particle.png',
          w: 1280,
          h: 720
      },
      {
          src: './images/gallery_particle/gallery_particle2.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_particle/gallery_particle3.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_particle/gallery_particle4.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_particle/gallery_particle5.png',
    w: 1280,
    h: 720
},
{
  src: './images/gallery_particle/gallery_particle6.png',
  w: 1280,
  h: 720
}
  ];
  
  // define options (if needed)
  var options = {
           // history & focus options are disabled on CodePen        
           index:3
  };
  
  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
var openLight7box5 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_particle/gallery_particle.png',
            w: 1280,
            h: 720
        },
        {
            src: './images/gallery_particle/gallery_particle2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_particle/gallery_particle3.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_particle/gallery_particle4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_particle/gallery_particle5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_particle/gallery_particle6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:4
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };
var openLight7box6 = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];
  
    // build items array
    var items = [
        {
            src: './images/gallery_particle/gallery_particle.png',
            w: 1280,
            h: 720
        },
        {
            src: './images/gallery_particle/gallery_particle2.png',
            w: 1280,
            h: 720
        },
        {
          src: './images/gallery_particle/gallery_particle3.png',
          w: 1280,
          h: 720
      },
      {
        src: './images/gallery_particle/gallery_particle4.png',
        w: 1280,
        h: 720
    },
    {
      src: './images/gallery_particle/gallery_particle5.png',
      w: 1280,
      h: 720
  },
  {
    src: './images/gallery_particle/gallery_particle6.png',
    w: 1280,
    h: 720
  }
    ];
    
    // define options (if needed)
    var options = {
             // history & focus options are disabled on CodePen        
             index:5
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  };


//slide 1
document.getElementById('mobile_hole').addEventListener("click", openLightbox1);
document.getElementById('mobile_hole2').addEventListener("click", openLightbox2);
document.getElementById('mobile_hole3').addEventListener("click", openLightbox3);
document.getElementById('mobile_hole4').addEventListener("click", openLightbox4);
document.getElementById('mobile_hole5').addEventListener("click", openLightbox5);
document.getElementById('mobile_hole6').addEventListener("click", openLightbox6);

//slide 2
document.getElementById('mobile_orb').addEventListener("click", openLight2box1);
document.getElementById('mobile_orb2').addEventListener("click", openLight2box2);
document.getElementById('mobile_orb3').addEventListener("click", openLight2box3);
document.getElementById('mobile_orb4').addEventListener("click", openLight2box4);
document.getElementById('mobile_orb5').addEventListener("click", openLight2box5);
document.getElementById('mobile_orb6').addEventListener("click", openLight2box6);

//slide 3
document.getElementById('mobile_alive').addEventListener("click", openLight3box1);
document.getElementById('mobile_alive2').addEventListener("click", openLight3box2);
document.getElementById('mobile_alive3').addEventListener("click", openLight3box3);
document.getElementById('mobile_alive4').addEventListener("click", openLight3box4);
document.getElementById('mobile_alive4').addEventListener("click", openLight3box4);
document.getElementById('mobile_alive6').addEventListener("click", openLight3box6);


 //slide 4
 document.getElementById('mobile_dummy').addEventListener("click", openLight4box1);
 document.getElementById('mobile_dummy2').addEventListener("click", openLight4box2);
 document.getElementById('mobile_dummy3').addEventListener("click", openLight4box3);
 document.getElementById('mobile_dummy4').addEventListener("click", openLight4box4);
 document.getElementById('mobile_dummy5').addEventListener("click", openLight4box5);
 document.getElementById('mobile_dummy6').addEventListener("click", openLight4box6);


// //slide 5
 document.getElementById('mobile_agency').addEventListener("click", openLight5box1);
 document.getElementById('mobile_agency2').addEventListener("click", openLight5box2);
 document.getElementById('mobile_agency3').addEventListener("click", openLight5box3);
 document.getElementById('mobile_agency4').addEventListener("click", openLight5box4);
 document.getElementById('mobile_agency5').addEventListener("click", openLight5box5);
 document.getElementById('mobile_agency6').addEventListener("click", openLight5box6);


// //slide 6
 document.getElementById('mobile_abstract').addEventListener("click", openLight6box1);
 document.getElementById('mobile_abstract2').addEventListener("click", openLight6box2);
 document.getElementById('mobile_abstract3').addEventListener("click", openLight6box3);
 document.getElementById('mobile_abstract4').addEventListener("click", openLight6box4);
 document.getElementById('mobile_abstract5').addEventListener("click", openLight6box5);
 document.getElementById('mobile_abstract6').addEventListener("click", openLight6box6);

// //slide 7
 document.getElementById('mobile_particle').addEventListener("click", openLight7box1);
 document.getElementById('mobile_particle2').addEventListener("click", openLight7box2);
 document.getElementById('mobile_particle3').addEventListener("click", openLight7box3);
 document.getElementById('mobile_particle4').addEventListener("click", openLight7box4);
 document.getElementById('mobile_particle5').addEventListener("click", openLight7box5);
 document.getElementById('mobile_particle6').addEventListener("click", openLight7box6);





    


        //promo vid start
        let play = document.querySelector('.play'),
        pause = document.querySelector('.pause'),
        mute = document.querySelector('.mute'),
        unmute = document.querySelector('.unmute'),
        bannerVid = document.querySelector('.bannerVid'),
        desktopQ = window.matchMedia("(min-width: 1024px)"),
        vidThumb = document.querySelector('#vidThumb');


        //FUNCTIONS

  function pausePlay(){

    if (bannerVid.paused == true) {
    bannerVid.play();
    play.classList.add('hide');
    pause.classList.remove('hide');
    }
    else {
    bannerVid.pause();
    pause.classList.add('hide');
    play.classList.remove('hide');
    }
  }

  function muted(){

    if (bannerVid.muted) {
      bannerVid.muted = false;
      mute.classList.remove('hide');
      unmute.classList.add('hide');
    }
    else {
      bannerVid.muted = true;
      unmute.classList.remove('hide');
      mute.classList.add('hide');
    }
  }


  function loadVid(){
    vidThumb.classList.add('hiddenMobile');
    bannerVid.classList.remove('hiddenMobile');
    unmute.classList.remove('hiddenMobile');
    pause.classList.remove('hiddenMobile');
  }

  function videoResize() {

    if (window.matchMedia("(max-width: 768px)").matches) {
            // apply MOBILE VIDEO to bannerVid
            // document.getElementById("videoSource").src = "pureVolume_mobile.mp4";
            // bannerVid.load();
    
            console.log("changed video to MOBILE");
            console.log(window.screenY);
            
        } else if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 1024px)").matches) {
            // apply TABLET VIDEO to bannerVid
            // document.getElementById("videoSource").src = "pureVolume_tablet.mp4";
            // bannerVid.load();
            console.log("changed video to TABLET");
    
        } else if (window.matchMedia("(min-width: 1024px)").matches) {
            // apply DESKTOP VIDEO to bannerVid
            // document.getElementById("videoSource").src = "pureVolume_desktop.mp4";
            // bannerVid.load();
            console.log("changed video to DESKTOP");
    
        } else {
            // a fallback
            console.log("You do not have a screen!");
        }

        // EVENT HANDLING
  pause.addEventListener('click', pausePlay);
  play.addEventListener('click', pausePlay);
  unmute.addEventListener('click', muted);
  mute.addEventListener('click', muted);
  desktopQ.addListener(reassignImages);
  window.addEventListener('resize', videoResize);
  window.addEventListener("scroll", scrollHeader);
  vidThumb.addEventListener('click', loadVid);
    }



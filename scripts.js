function startSlideshow(){
    var slideshow = document.getElementById("slideshow");
    var filesystem = require('fs');
    var filenames = filesystem.readdirSync("/slideshowPics");
    console.debug(filenames);
}
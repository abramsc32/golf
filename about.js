window.onload = function () {

    function changeImage() {   
        let BackgroundImg=["../golf/aboutimages/pebble.jpg","../golf/aboutimages/pebble2.jpg","../golf/aboutimages/noname.jpg",
            "../golf/aboutimages/pine.jpg","../golf/aboutimages/sleephollow.jpeg","../golf/aboutimages/augusta.jpg","../golf/aboutimages/wm16th.jpg","../golf/aboutimages/cypress.jpg"]
        let i = Math.floor((Math.random() * 8));
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 4000);
}
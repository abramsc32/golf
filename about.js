window.onload = function () {

    function changeImage() {   
        let BackgroundImg=["../golf/aboutimages/pebble.jpg","../golf/aboutimages/pebble2.jpg",
            "../golf/aboutimages/augusta.jpg","../golf/aboutimages/9.jpg","../golf/aboutimages/3.jpg","../golf/aboutimages/4.jpg","../golf/aboutimages/5.jpg","../golf/aboutimages/6.jpg",
        ]
        let i = Math.floor((Math.random() * 8));
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 5000);
}



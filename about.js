window.onload = function () {

    function changeImage() {   
        let BackgroundImg=["./aboutimages/pebble.jpg","./aboutimages/pebble2.jpg",
            "./aboutimages/augusta.jpg","./aboutimages/9.jpg","./aboutimages/3.jpg","./aboutimages/4.jpg","./aboutimages/5.jpg","./aboutimages/6.jpg",
        ]
        let i = Math.floor((Math.random() * 8));
        document.body.style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 5000);
}



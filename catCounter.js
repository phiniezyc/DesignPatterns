let cat1PicClicks = 0;
let cat2PicClicks = 0;

document.getElementById("catPic").addEventListener("click", function(){
    cat1PicClicks++;
    document.getElementById("cat1Clicks").innerHTML = cat1PicClicks;
    console.log(cat1PicClicks);
});

document.getElementById("catPic2").addEventListener("click", function(){
    cat2PicClicks++;
    document.getElementById("cat2Clicks").innerHTML = cat2PicClicks;
    console.log(cat2PicClicks);
});


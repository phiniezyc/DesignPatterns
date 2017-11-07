let catPicClicks = 0;

document.getElementById("catPic").addEventListener("click", function(){
    catPicClicks++;
    document.getElementById("catClicks").innerHTML = catPicClicks;
    console.log(catPicClicks);
});



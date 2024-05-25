// const leftBtn= document.querySelector(".l-btn");
// const rightBtn = document.querySelector(".r-btn");


let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".imageItem")


let startSlider = 0
let endSlider = (imgItem.length-1) * 100
slideBtnLeft.addEventListener("click",handleLeftBtn)

function handleLeftBtn(){
        if(startSlider < 0){
            startSlider = startSlider + 100
        }
        console.log(startSlider)
        imgItem.forEach(element => {
            element.style.transform =`translateX(${startSlider}%)`
        })
    }


slideBtnRight.addEventListener("click",handleRightBtn)
function handleRightBtn(){
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100
    }
    console.log(startSlider)
    imgItem.forEach(element => {
        element.style.transform =`translateX(${startSlider}%)`
    })
}

// Automatic sliding

function renderSlideAuto(){
    
    if(startSlider >= -endSlider+100){
        handleRightBtn();
    }
    else{
        startSlider = 0;
        imgItem.forEach(element => {
            element.style.transform =`translateX(${startSlider}%)`; // to get first slide
        });
    }
    }  
setInterval(renderSlideAuto,2500)


// second carousel
// rightBtn.addEventListener("click",
//     function(event){
//         const conent=document.querySelector(".image-list");
//         conent.scrollLeft +=1100;
//         event.preventDefault();

// })
// leftBtn.addEventListener("click",
//     function(event){
//         const conent=document.querySelector(".image-list");
//         conent.scrollLeft -=1100;
//         event.preventDefault();

// })
// const leftBtn1= document.querySelector(".btn-1b");
// const rightBtn1 = document.querySelector(".btn-1a");


// rightBtn1.addEventListener("click",
//     function(event){
//         const conent=document.querySelector(".image-list-1");
//         conent.scrollLeft +=1100;
//         event.preventDefault();

// })
// leftBtn1.addEventListener("click",
//     function(event){
//         const conent=document.querySelector(".image-list-1");
//         conent.scrollLeft -=1100;
//         event.preventDefault();

// })
// const leftBtn2= document.querySelector(".btn-1c");
// const rightBtn2 = document.querySelector(".btn-1d");


// rightBtn2.addEventListener("click",
//     function(event){
//         const conent=document.querySelector(".image-list-2");
//         conent.scrollLeft +=1100;
//         event.preventDefault();

// })
// leftBtn2.addEventListener("click",
//     function(event){
//         const conent=document.querySelector(".image-list-2");
//         conent.scrollLeft -=1100;
//         event.preventDefault();
// })



// carousel main
// Carousel 1
const leftBtn1 = document.querySelector(".carousel-1 .l-btn");
const rightBtn1 = document.querySelector(".carousel-1 .r-btn");
const content1 = document.querySelector(".carousel-1 .image-list");

rightBtn1.addEventListener("click", function(event) {
  content1.scrollLeft += 1100;
  event.preventDefault();
});

leftBtn1.addEventListener("click", function(event) {
  content1.scrollLeft -= 1100;
  event.preventDefault();
});

// Carousel 2
const leftBtn2 = document.querySelector(".carousel-2 .l-btn");
const rightBtn2 = document.querySelector(".carousel-2 .r-btn");
const content2 = document.querySelector(".carousel-2 .image-list");

rightBtn2.addEventListener("click", function(event) {
  content2.scrollLeft += 1100;
  event.preventDefault();
});

leftBtn2.addEventListener("click", function(event) {
  content2.scrollLeft -= 1100;
  event.preventDefault();
});


// Carousel 3
const leftBtn3 = document.querySelector(".carousel-3 .l-btn");
const rightBtn3 = document.querySelector(".carousel-3 .r-btn");
const content3 = document.querySelector(".carousel-3 .image-list");

rightBtn3.addEventListener("click", function(event) {
  content3.scrollLeft += 1100;
  event.preventDefault();
});

leftBtn3.addEventListener("click", function(event) {
  content3.scrollLeft -= 1100;
  event.preventDefault();
});

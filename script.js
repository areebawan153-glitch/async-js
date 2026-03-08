// setTimeout(function (){
//   console.log("areeb")
// }, 2000)
// 88******************************   or ***********************

// const sysAreeb = function (){
//     console.log("areeb")
// }

// setTimeout(sysAreeb, 2000)


// const changeText = function(){
//     let h1 = document.querySelector("h1").innerHTML = "Code WIth Advanced Areeb Awan"
// }

//  const changeMe = setTimeout(changeText, 2000)

// document.querySelector("#stop").addEventListener('click',function(){
//          clearTimeout(changeMe)
//          console.log("STOPPED")
// })


const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i<6; i++){
     color += hex[(Math.floor(Math.random() * 16))]
    }
    return color;
};
 let intervalId;
const startChangingColor = function(){
     intervalId = setInterval(changeBgColor,1000)
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}
const stopChangingColor = function(){ 
    clearInterval(intervalId)
}

document.querySelector("#start").addEventListener('click',startChangingColor)


document.querySelector("#stop").addEventListener('click',stopChangingColor)










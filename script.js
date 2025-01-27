let con = document.querySelector("#container")
let love = document.querySelector("i")

con.addEventListener("dblclick",function (){

    love.style.transform="translate(-50%,-50%) scale(1)"

    //time delay browser function

    setTimeout(function (){
        love.style.transform="translate(-50%,-50%) scale(0)"
    },1000)  // 1000= 1 sec

});


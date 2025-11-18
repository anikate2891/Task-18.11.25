count = 0;
let pg = document.querySelector(".progress");
let percent = document.querySelector("#percent");
let btn = document.querySelector('.btn');
let h3 = document.querySelector('h3')
let p = document.querySelector('#note');


let num = (Math.floor (Math.random()*50)) + 40 ;


btn.addEventListener('click', function(){
    setInterval(function(){
        h3.textContent = "Downloading";
        p.textContent = `Download Complete in ${num/10} Seconds`;
        
    if(count < 100){
        count++;
        pg.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    }
    else {
        document.querySelector("h3").textContent = "Downloaded.."
    }
},num) 
})

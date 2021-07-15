
'use strict'

let left = document.querySelector('.left');
let right = document.querySelector('.right');

let projects = document.querySelectorAll('.project');

let right_move= 0;

projects.forEach((ele,index) => {

    ele.style.transform = `translateX(${index*100}%)`;
})

right.addEventListener('click',function(){

     right_move++;

     if(right_move >=6)
     {
         right_move = 0;
     }

     projects.forEach((ele , index) => {

        console.log(ele);
          
           ele.style.transform = `translateX(${((index-right_move))*100}%)`;
     })
    
})
     
left.addEventListener('click',function(){

    right_move--;

    if(right_move < 0)
    {
        right_move = 5;
    }
  
    projects.forEach((ele , index) => {
         
          ele.style.transform = `translateX(${(index-right_move)*100}%)`;
    })

})



let projectImage = document.querySelectorAll('.project-image');
let buttons = document.querySelectorAll('.visit');

projects.forEach((ele,index) => {

 
   
   ele.addEventListener('mouseover',function(){ 

        buttons.forEach((element,indices) => {

            /* ele.classList.toggle('deactive'); */
            element.classList.toggle('slide-under');
         
        })
   })

   ele.addEventListener('mouseout',function() { 
                 
    buttons.forEach((element,indices) => {

/*         ele.classList.toggle('deactive');
 */        element.classList.toggle('slide-under');
     
    })      

   })

})


let open = document.querySelector('.open');
let close = document.querySelector('.close');

let nav = document.querySelector('.navbar');
let nav_text = document.querySelector('.nav-text'); 

open.addEventListener('click',function(){

    close.classList.remove('rotate');
    
    open.classList.add('rotate');
    setTimeout(function(){
        open.classList.toggle('deactive');

        open.classList.toggle('color');
        close.classList.toggle('deactive');
        nav_text.classList.toggle('text-deactive');
        nav.classList.toggle('increase');
        nav.classList.toggle('navbar');
    },300);
    
    
})

close.addEventListener('click',function(){
    open.classList.remove('rotate');
    close.classList.add('rotate');
    setTimeout(function(){

        open.classList.toggle('deactive');
    close.classList.toggle('deactive');
    
    nav_text.classList.toggle('text-deactive');
    nav.classList.toggle('increase');
    nav.classList.toggle('navbar');

    },300)
   
})

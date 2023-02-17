


function clickburgue(){

    let btn = document.querySelector(".btn img");
    let list = document.querySelector(".menu-list");
    let li = document.querySelectorAll("li");

   
    btn.classList.toggle("active");
    list.classList.toggle("active");

    li.forEach((li, idex)=>{

        li.style.background = "red"

    });

    
    
   
    

    
    if(btn.classList.contains("active")){

        btn.setAttribute("src", "./assets/images/icon-menu-close.svg");
        
    }else{
        btn.setAttribute("src", "./assets/images/icon-menu.svg");
    }

    
 
    


}



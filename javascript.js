


function clickburgue(){

    let btn = document.querySelector(".btn img");
    let list = document.querySelector(".menu-list");
       
    btn.classList.toggle("active");
    list.classList.toggle("active");
    list.style.transition =  '0.4s ease-in'; 
 
    if(btn.classList.contains("active")){

        btn.setAttribute("src", "./assets/images/icon-menu-close.svg");
        
    }else{
        btn.setAttribute("src", "./assets/images/icon-menu.svg");
    }

    
 
    


}



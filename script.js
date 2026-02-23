const darkttheme = document.querySelector('.dark-theme');
const lighttheme= document.querySelector('.lightimg');
const header =  document.querySelector('.header');
const h =document.querySelectorAll('.title');
const par =document.querySelectorAll('.partitle');
const headdd = document.querySelector('.headd');
const boxcontainer = document.querySelectorAll('.box-container');

darkttheme.addEventListener("click", (e) => {

    e.preventDefault();

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
    lighttheme.src = "./browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-sun.svg";
    
    }
    else{
            lighttheme.src = "./browser-extensions-manager-ui-main/browser-extensions-manager-ui-main/assets/images/icon-moon.svg";
    }


     headdd.classList.toggle("head-extension");
   header.classList.toggle("dark-them");

   par.forEach((para)=>{
  para.classList.toggle("paragraph-title");
   })
   


   h.forEach((hed)=>{
    hed.classList.toggle("head-title");
   });

  
   

   boxcontainer.forEach((box)=> {
    box.classList.toggle("box-border");
});

});


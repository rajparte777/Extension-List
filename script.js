const darkttheme = document.querySelector('.dark-theme');
const lighttheme= document.querySelector('.lightimg');
const header =  document.querySelector('.header');
const h =document.querySelectorAll('.title');
const par =document.querySelectorAll('.partitle');
const headdd = document.querySelector('.headd');
const boxcontainer = document.querySelectorAll('.box-container');





const allButton = document.querySelector('#buton1');
const activeButton = document.querySelector('#buton2');
const inactiveButton = document.querySelector('#buton3');



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


function filterBox(type){

boxcontainer.forEach((box)=>{
    const toggle = box.querySelector('.toggle');

    if(type ==="all"){
       box.style.display ="block";
    }
   else if(type === "active"){
        box.style.display =toggle.checked ?"block":"none";
    }
    else if(type ==="inactive"){
                   box.style.display =!toggle.checked ?"block":"none";

    }

})

}

allButton.addEventListener("click",()=>filterBox("all"));
activeButton.addEventListener("click",()=>filterBox("active"));
inactiveButton.addEventListener("click",()=>filterBox("inactive"));



let currentFilter = "all";

allButton.addEventListener("click", ()=>{
  currentFilter = "all";
  filterBox(currentFilter);
});

activeButton.addEventListener("click", ()=>{
  currentFilter = "active";
  filterBox(currentFilter);
});

inactiveButton.addEventListener("click", ()=>{
  currentFilter = "inactive";
  filterBox(currentFilter);
});

boxcontainer.forEach((box)=>{
  const toggle = box.querySelector('.toggle');

  toggle.addEventListener("change", ()=>{
    filterBox(currentFilter);
  });
});

document.querySelectorAll('.box-container').forEach((box) => {

  const removeButton = box.querySelector('#remove');

  removeButton.addEventListener("click", () => {
    box.remove();                 
    filterBox(currentFilter);   
  });

});


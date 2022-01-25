const main = document.querySelector(".main");
const btn = document.querySelector(".btn");
const birthday = document.querySelector(".print");
const input = document.querySelectorAll(".text").value;
const year = document.querySelectorAll(".text")[0];
const month = document.querySelectorAll(".text")[1];
const day = document.querySelectorAll(".text")[2];
const btnlook = document.querySelector(".btnlook");
const back = document.querySelector(".back");

const cardopenAll = document.querySelectorAll(".card_open");




let res = 0;
let rrs = 0;



btnlook.addEventListener("click",function(e){
   e.preventDefault();
   $(birthday).fadeOut(2000);
   $(cardopenAll).fadeIn(1000);



  
      
   let result = [year.value + month.value + day.value].toString();
   for(var i = 0; i<result.length;i++){ 
      res += parseInt(result.charAt(i));     
}

if(res>=23){
   var ll = [res].toString();
   for(var k = 0; k<ll.length;k++){ 
      rrs += parseInt(ll.charAt(k));

   }
   cardopenAll[rrs].style.opacity = "1"; //여기도 이제 잘 됨
}   

if(res == 22){
   cardopenAll[0].style.opacity = "1";

}

   cardopenAll[res].style.opacity= "1"; // 여기까진 잘 됨






     
   
     
     
   


  


 



  

 




     
   
  
    
   
 

   



});



back.addEventListener("click",function(){
   location.reload();
})


btn.addEventListener("click", function(){
   $(main).fadeOut(2000);
   $(birthday).fadeIn(2000);
  

});
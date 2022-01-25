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




let res;
let rrs;



btnlook.addEventListener("click",function(e){
   e.preventDefault();
   
      // 데이터 값 log
      //console.log('year val -> ' + year.value);
      //console.log('month val -> ' + month.value.length);
      //console.log('day val -> ' + day.value.length);

      // 데이터 길이 log
      //console.log('year len -> ' + year.value.length);
      //console.log('month len -> ' + month.value.length);
      //console.log('day len -> ' + day.value.length);

      // 입력값을 검증하기 위한 Boolean 변수
      var a,b,c;
      a = Boolean(year.value.length==4); // year 검증
      b = Boolean(month.value.length==2); // month 검증
      c = Boolean(day.value.length==2); // day 검증
      // 조건 log
      //console.log(a + ' ' + b + ' ' + c);

      // 입력값 검증
      if(a==true && b==true && c==true){ // year, month, day를 올바르게 입력한 경우
         $(birthday).fadeOut(2000);
         $(cardopenAll).fadeIn(1000);
         // 계산하기 위한 변수들 초기화
         res = 0;
         rrs = 0;
      }else{ // year, month, day를 올바르지 않게 입력한 경우
         alert('생년월일을 다시 입력하세요.');
      }
      

   if(year.value.lenth!='4' || month.value.length!='2' || day.value.length!='2'){
     console.log('입력해!');
   } else{
      
   }
   

  
      
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
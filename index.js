const btnEl=document.querySelectorAll("button");

let b1=document.getElementById("Uu");
let b2=document.getElementById("Cc");

let user_score=document.getElementById("user-s");
let com_score=document.getElementById("com-s");


let user_score1=0;
let com_score1=0;

btnEl.forEach((btn)=>{
    btn.addEventListener("click",()=>{
    user_c=btn.id;
    com_c =comc();
    bChoose(user_c,com_c);
    comper(user_c,com_c);
   });
   });



function comc(){
    const aa=["rock","paper","scissor"];
   const size= Math.floor(Math.random()*aa.length) ;
    return aa[size];
   }


   function  bChoose(user_c,com_c){
   
 /*for rock start */
  if(user_c==="rock"){
    b1.innerHTML="&#x1f44a";
    b1.id="rock"; 
}

else if(com_c==="rock"){
    b2.innerHTML="&#x1f44a";
    b2.id="rock";
}
/*for rock end */

/*for paper start */
else if(user_c==="paper"){
    b1.innerHTML="&#x1f590";
    b1.id="paper"; 
}

else if(com_c==="paper"){
    b2.innerHTML="&#x1f590";
    b2.id="paper";
}

/*for paper ends */

/*for scissor start */
else if(user_c==="scissor"){
    b1.innerHTML="&#x1f590";
    b1.id="scissor"; 
}

else{
    b2.innerHTML="&#x1f590";
    b2.id="scissor";
}
/*for scissor ends */


}


   function comper(user_c,com_c){
    let c;
    
        if(user_c===com_c){
           
             c=`game draw you both are Choose "${user_c}"`
            console.log(c);
    }

    else if((user_c==="rock" && com_c==="scissor")||
            (user_c==="paper" && com_c==="rock")||
            (user_c==="scissor" && com_c==="paper")              
    ){   user_score1++;
        user_score.innerText=user_score1;
        
        c=`You Won Your chooise ${user_c} and Computer Chooise ${com_c}`
        console.log(c);
    }

    else{
        com_score1++;
       com_score.innerText=com_score1;
        c=`You Lose Your chooise ${user_c} and Computer Chooise ${com_c}`
        console.log(c);
    }
    const result=document.getElementById("reees");
    result.innerText=c;
   }
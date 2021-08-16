var readlineSync=require('readline-sync');
var score=0;





let data=[{ques:"What is My Age ",ans:"21"},{ques:"I love marvel? yes or no ",ans:"yes"},{ques:"Is My Favourite Color Red ",ans:"no"},{ques:"Do i Look Cute  ",ans:"yes"},{ques:"Am i A Potterhead  ",ans:"yes"}]

let play=(ques,ans)=>{
  let userAns=readlineSync.question(ques)
  if(userAns===ans){
   
    console.log(" You are right ")
   score++;
   
   console.log("your current score is "+score);
    console.log("-------------------------")
  }else{
  
    console.log("you are wrong")
    
   console.log("your current score is "+score);
    console.log("-------------------------")
     
  }

}
for(let i=0;i<data.length;i++){
play(data[i].ques,data[i].ans)
}

console.log("-------------------------")
console.log( "Your Final  Score is "+score)

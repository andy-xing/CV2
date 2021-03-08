  
let html = document.querySelector("#html");
let style = document.querySelector("#style")
let string = `
/*你好，我叫邢诒胜
*接下来我要演示一下我的前端功底
*首先，我们需要一个div
*/
#div1{
   border: 1px solid red;
   width:200px;
   height:200px;
}
/*接下来我要把div变成八卦图
*注意看好了
*首先，要把div变成一个圆
*/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳，一黑一白
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*现在我们加上两个球*/
#div1::before{
  width:100px;
  height: 100px;
  top:0;
  left:50%;
  transform: translateX(-50%);
  background:#fff;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(255,255,255,1) 30%);
}
#div1::after{
  width:100px;
  height: 100px;
  bottom:0;
  left:50%;
  transform: translateX(-50%);
  background:#000;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(0,0,0,1) 30%);
}
`

let n= -1 ;
let string2 = "";

let step = () =>{
  setTimeout(() => {
    n = n +1 ;
    if (string[n] === "\n") {
      string2 +="<br>"
    }else if(string[n] === " "){
      string2 +="&nbsp"
    }else{
      string2 +=string[n]}
    
  html.innerHTML = string2;
  style.innerHTML=string.substring(0,n);
  window.scrollTo(0,99999);
  html.scrollTo(0,99999);
  if (n < string.length-1) {
    step();
  }
  
  }, 10);}
step()
let btn1 = document.querySelector("#one");
let btn2 = document.querySelector("#two");
let btn3 = document.querySelector("#three");
let btn4 = document.querySelector("#four");

// btn1.addEventListener('click', function(e){
//   // alert("1");
//   console.log(e.target)
//   console.log(e.target.textContent)
// });

// btn2.addEventListener("click", function(){
//   alert("2");
// });

// btn3.addEventListener("click", function(){
//   alert("3");
// });

// btn4.addEventListener("click", function(){
//     alert("4");
// });

const getContent =(e)=>{
    let content = e.target.innerHTML;
    console.log(content);
}

btn1.addEventListener('click', getContent);
btn2.addEventListener('click', getContent);
btn3.addEventListener('click', getContent);
btn4.addEventListener('click', getContent);


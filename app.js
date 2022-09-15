//Sample Q1

// var num1 = document.querySelector("#input_one");
// var num2 = document.querySelector("#input_two");
// var btn_addition = document.querySelector("#addition");
// var btn_subtraction = document.querySelector("#subtraction");
// var btn_multiplication = document.querySelector("#multiplication");
// var btn_division = document.querySelector("#division");
// var outputEl = document.querySelector("#outputEl");

// function clickHandlerForCalculate(operation) {
//     if (num1.value && num2.value) {
//         switch (operation) {
//             case "+":
//                 outputEl.innerText = "Addition:" + Number(num1.value) + Number(num2.value);
//                 break;
//             case "-":
//                 outputEl.innerText = "Subtraction:" + Number(num1.value) - Number(num2.value);
//                 break;
//             case "*":
//                 outputEl.innerText = "Multiplication:" + Number(num1.value) * Number(num2.value);
//                 break;
//             case "/":
//                 outputEl.innerText = "Division:" + Number(num1.value) / Number(num2.value);
//                 break;
//             default:
//                 outputEl.innerText = "Select any operation";
//         }
//     } else {
//         outputEl.innerText = "Please enter both inputs";
//     }

// }
// btn_addition.addEventListener("click", () => clickHandlerForCalculate("+"));
// btn_subtraction.addEventListener("click", () => clickHandlerForCalculate("-"));
// btn_multiplication.addEventListener("click", () => clickHandlerForCalculate("*"));
// btn_division.addEventListener("click", () => clickHandlerForCalculate("/"));




//Sample Q2
// var message = document.querySelector("#message");
// var increaseSize = document.querySelector("#increase-size");
// var decreseSize = document.querySelector("#decrese-size");
// var outputEl = document.querySelector("#outputEl");



// function handleSize(sizes) {

//     console.log("hello");
//         if(message.value){
//             let sizeFont = 20;
//             message.style.fontSize = `${sizeFont}px`;
//             outputEl.innerText = message.value;
//             if (sizes == "+") {
//                 sizeFont += 2;
//                 message.style.fontSize = `${sizeFont}px`;

//             } else {
//                 sizeFont -= 2;
//                 message.style.fontSize = `${sizeFont}px`;
//             }

//         }
// else{
//     outputEl.innerText ="please write something";
// }


// }



// increaseSize.addEventListener("click", () => handleSize("+"));
// decreseSize.addEventListener("click", () => handleSize("-"));


//Sample Q3

// var inputText = document.querySelector("#input-text");
// var btnHeadingh1 = document.querySelector("#heading1");
// var btnHeadingh2 = document.querySelector("#heading2");
// var btnHeadingh3 = document.querySelector("#heading3");
// var outputEl = document.querySelector("#outputEl");


// function handeInputheading(heading){
//     if(inputText.value){
//         if(heading === "h1"){
//             outputEl.innerHTML = `<${heading}> ${inputText.value} <${heading}/>`;
//         }else if(heading === "h2"){
//             outputEl.innerHTML = `<${heading}> ${inputText.value} <${heading}/>`;
//         }else{
//             outputEl.innerHTML = `<${heading}> ${inputText.value} <${heading}/>`;
//         }
//     }


// }



// btnHeadingh1.addEventListener("click", ()=>handeInputheading("h1"));
// btnHeadingh2.addEventListener("click", ()=>handeInputheading("h2"));
// btnHeadingh3.addEventListener("click", ()=>handeInputheading("h3"));

//Sample Q4

// var inputEl = document.querySelector("#inputEl");
// var btn_Red = document.querySelector("#btn-red");
// var btn_Green = document.querySelector("#btn-green");
// var btn_Blue = document.querySelector("#btn-blue");
// var outputEl = document.querySelector("#outputEl");

// function clickHandlerForChangeColor(colour) {
//     outputEl.innerText = inputEl.value;
//     outputEl.style.color =
//         colour === "red" ? "red" : colour === "green" ? "green" : "blue";
// }



// btn_Red.addEventListener("click", () => clickHandlerForChangeColor("red"));
// btn_Green.addEventListener("click", () => clickHandlerForChangeColor("green"));
// btn_Blue.addEventListener("click", () => clickHandlerForChangeColor("blue"));

//Sample Q6

// var message = document.querySelector("#message");
// var btnLoaded = document.querySelector("#btn-loaded");

// function handleLoadingMessage(){
//  message.style.display ="none";

// }


// btnLoaded.addEventListener("click", handleLoadingMessage);

//Sample Q7
// let userName = "Hello";
// const url = "https://sanyamapi.sanyam04.repl.co/"
// const constructUrl = url + "name" + "?" + "text=" + userName; 

// fetch(constructUrl)
// .then(res => res.json())
// .then(data => document.write(data.contents.text));

//Sample Q9

// const url = "https://mystery-api.kushanksriraj.repl.co/get";
// fetch(url).then((res) => {
//     if (res.status == 404) {
//         document.write("page not found");
//     } else if (res.status == 401) {
//         document.write("You are not logged in");
//     }
// });


//Sample Q11

// var password = document.querySelector("#password");
// var confirmPassword = document.querySelector("#confirmPassword");
// var btn_Submit = document.querySelector("#submit");
// var error_message = document.querySelector("#error");
// var successMessage = document.querySelector("#successMessage")

// function checkPassword() {
//     if (password.value.length < 10) {
//         error_message.innerText = "Password should be greater than 10 character";
//         password.style.outlineColor = "#ff6666";
//         password.style.backgroundColor = "#ff666621";
//     } else {
//         error_message.innerText = " ";
//         password.style.backgroundColor = "#fff";
//         password.style.outlineColor = "#66cc66";
//     }

// }

// function checkConfirmPassword() {
//     if (password.value !== confirmPassword.value) {
//         error_message.innerText = "Password and ConfirmPassword are not matched"
//         confirmPassword.style.outlineColor = "#ff6666";
//         confirmPassword.style.backgroundColor = "#ff666621";
//         btn_Submit.disabled = true;
//     } else {
//         error_message.innerText = "";
//         confirmPassword.style.backgroundColor = "#fff";
//         confirmPassword.style.outlineColor = "#66cc66";
//         btn_Submit.disabled = false;
//     }


// }

// function handlepassword() {
//     if (password.value === confirmPassword.value) {
//         successMessage.innerText = "Login Successful";

//     } else {
//         successMessage.innerText = "Login failed";
//     }


// }
// confirmPassword.addEventListener("keyup", checkConfirmPassword);
// password.addEventListener("keyup", checkPassword);
// btn_Submit.addEventListener("click", handlepassword);



//Sample Q14


// var obj1 = {
//     name:"Ram",
//     age:25,
//     yuga:"Treta"
// }

// var obj2 = {
//     name:"Krishna",
//     age:31,
//     yuga:"Dwapar"
// }

// function maxAgePerson(obj1,obj2){
//     if(obj1.age>obj2.age){
//         console.log(`${obj1.name} is older`);
//     }
//      else{
//         console.log(`${obj2.name} is older`);
//      }
   


// }
// maxAgePerson(obj1,obj2);

//Sample 15

// var object1 = {
//     name:"Ram",
//     power:2500,
//     yuga:"Treta"
// }

// var object2 = {
//     name:"Krishna",
//     power:2325,
//     yuga:"Dwapar"
// }

// const findPowerful = (object1,object2)=>{
//  (object1.power>object2.power)? console.log(`${object1.name} is more powerful with ${object1.power} power`): console.log(`${object2.name} is more powerful with ${object2.power} power`);

// //    if(object1.power>object2.power)
// //    console.log(`${object1.name} is more powerful`);
// //    else
// //    console.log(`${object2.name} is more powerful`);


// }
// findPowerful(object1,object2);


// Sample 16

// var object1 = {
//     name:"Ram",
//     power:2500,
//     yuga:"Treta"
// }

// var object2 = {
//     name:"Krishna",
//     power:2325,
//     yuga:"Dwapar"
// }

// const findPowerful = (obj1,obj2)=>{

//     const power1 = (obj1.name.length)*35 + obj1.power;
//     const power2 = (obj2.name.length)*35 + obj2.power;
//     (power1>power2)? console.log(`${obj1.name} is more powerful with ${power1} power` ):console.log(`${obj1.name} is more powerful with ${power1} power`);
// }

// findPowerful(object1,object2);
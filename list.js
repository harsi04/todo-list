/*
 let input=document.getElementById("inp")
let text=document.querySelector(".text")
function add()
{
    if(input.value == "")
    {
        alert("enter the task");
    }
    else{
       let elem=document.createElement("ul");
        elem.innerHTML=`${inputs.value}`;
        text.appendchild(elem);


    }
}

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`
        
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}
*/
input=document.getElementById("inpt");
text=document.querySelector(".add-text")
function Add()
{
    if(input.value =="")
    {
        alert("Enter the task")
    }
    else{
        let el=document.createElement("ul");
        el.innerHTML=`${input.value} <i class="fa-solid fa-trash"></i>`
        text.append(el);
        input.value="";
        
        el.querySelector("i").addEventListener("click" , remove);
        function remove(){
            alert("you wil remove the task ")
            el.remove();
            console.log("haris")
        }

    }
}
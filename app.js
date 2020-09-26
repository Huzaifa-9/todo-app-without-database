var checkbox=document.getElementsByClassName('toggle-1__input');
var background=document.getElementById("background");

function background2(){
    if(checkbox[0].checked){
        background.setAttribute("class","bg")
    }
    else{
        background.setAttribute("class","bg1")
    }
}
var list=document.getElementById("ul");
var inp=document.getElementById("inp");

function addItem(){
    
    // Create li tag
    var li=document.createElement("li");
    var addtext=document.createTextNode(inp.value);
    // var span=document.createElement("span");
    // span.appendChild(addtext);
    li.appendChild(addtext);
    
    inp.value="";

    // Create Delete Button
    var deleteBtn=document.createElement("button");
    var deleteBtnText=document.createTextNode("Delete");
    deleteBtn.setAttribute("onclick","deletItem(this)");// **IMP**
    deleteBtn.setAttribute("class","D1")
    deleteBtn.appendChild(deleteBtnText);
    li.appendChild(deleteBtn);

    
    // Create Edit Button
    var editBtn=document.createElement("button");
    var  editBtntText=document.createTextNode("Edit Text");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.appendChild(editBtntText);
    li.appendChild(editBtn);
    
    // append li in ul
    list.appendChild(li);
}

function deletItem(huzaifa){
    // console.log(huzaifa)  delet li (nutton parent is li)T
    huzaifa.parentNode.remove()

};

function DeleteAll(){
    list.innerHTML=""
};

function editItem(huzaifa){
    var x=prompt("Enter Text",huzaifa.parentNode.firstChild.nodeValue);
    // console.log(huzaifa.parentNode.firstChild)
    // console.log(huzaifa.parentNode.firstChild.nodeValue )
    huzaifa.parentNode.firstChild.nodeValue = x
}


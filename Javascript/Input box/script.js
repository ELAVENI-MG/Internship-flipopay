// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const input3 = document.getElementById("input3");
// const addbtn = document.getElementById("button1");
// const input4 = document.getElementById("div-id");

// const yesbtn = document.getElementById("yesbtn");
// const nobtn = document.getElementById("nobtn");

// const finalArray=[];

// button1.addEventListener('click',()=>{

//     const inputs = document.querySelectorAll('.dynamic');
//     const inputvalues = Array.from(inputs).map(input => input.value.trim());

//     const content1 = input1.value;
//     const content2 = input2.value;

//     if(content1 && content2)
//     {
//         add(content1,content2);
//     }
//     else
//     {
//         alert('Enter the input in the box');
//     }
// })


// function add(e,f)
// {
    
//     const item1 = document.createElement('div');
//     item1.className = 'item';

//     const span1 = document.createElement('span1');
//     span1.textContent=e;
//     item1.appendChild(span1);
//     const span2 = document.createElement('span2');
//     span2.textContent=f;
//     item1.appendChild(span2);

//     const edit = document.createElement('button');
//     edit.textContent='Edit';
//     edit.className="edit_btn";

//     const modal1 = document.getElementById("modal1");
//     var span3 = document.getElementById("close1");

//     edit.onclick = function(){

//         input4.appendChild(span1);
//         input4.appendChild(span2);
//         modal1.style.display="block";
//         span1.contentEditable="true";
//         span2.contentEditable="true";
//     }
//     // edit.addEventListener('click',()=> editItem(span1));

//     // edit.onclick = function(){
//     //     span1.contentEditable="true";
//     //     span2.contentEditable="true";
//     // }

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.className="delete_btn";

//     const modal = document.getElementById("modal");
//     var span = document.getElementById("close");


//     deleteBtn.onclick = function(){
//         modal.style.display="block";

//         yesbtn.onclick = () =>{
//             item1.remove();
//             modal.style.display="none";
//         }

//         nobtn.onclick = () => {
//             modal.style.display="none";
//         }
       
//     }

//     span.onclick = function(){
//          modal.style.display = "none";
//     }

//     span3.onclick = function(){
//         modal1.style.display = "none";
//    }

//     // deleteBtn.addEventListener('click', () =>{

//     //     // if(confirm("Delete the content?"))
//     //     // {
//     //     //     item1.remove();
//     //     // }
//     //     confirm.style.display="block";
//     //     no.style.display="block";

//     //     // item1.remove();

//     // })
//     item1.appendChild(edit);
//     item1.appendChild(deleteBtn);
//     input3.appendChild(item1);

// }

// // function editItem(span1,span2,edit)
// // {
// //     span1.contentEditable="true";
// //     span2.contentEditable="true";
// // }



const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const addbtn = document.getElementById("button1");
const modal = document.getElementById("modal");
const modal1 = document.getElementById("modal1");
const input4 = document.getElementById("div-id");
const yesbtn = document.getElementById("yesbtn");
const nobtn = document.getElementById("nobtn");
const spanClose = document.getElementById("close");
const spanClose1 = document.getElementById("close1");

const finalArray = [];

addbtn.addEventListener("click", () => {
  const content1 = input1.value;
  const content2 = input2.value;

    if (content1 && content2) 
    {
        addItem(content1, content2);
    } 
    else 
    {
        alert("Please fill in both input fields.");
    }
})


function addItem(e, f) 
{
  const item1 = document.createElement("div");
  item1.className = "item";

  const span1 = document.createElement("span");
  span1.textContent = e;

  const span2 = document.createElement("span");
  span2.textContent = f;

  
  finalArray.push({ value1: e, value2: f });


  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit_btn";
  editBtn.onclick = () => {
    EditModal(span1, span2);
  };


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete_btn";
  deleteBtn.onclick = () => {
    DeleteModal(item1, e, f);
  };

  
  item1.appendChild(span1);
  item1.appendChild(span2);
  item1.appendChild(editBtn);
  item1.appendChild(deleteBtn);


  input3.appendChild(item1);
}


function EditModal(span1, span2) 
{
  input4.innerHTML = ""; 
  const inputEdit1 = document.createElement("input");
  const inputEdit2 = document.createElement("input");

  inputEdit1.value = span1.textContent;
  inputEdit2.value = span2.textContent;

  input4.appendChild(inputEdit1);
  input4.appendChild(inputEdit2);

  modal1.style.display = "block";

  const saveBtn = document.getElementById("save-btn");
  saveBtn.onclick = () => {
    span1.textContent = inputEdit1.value;
    span2.textContent = inputEdit2.value;
    modal1.style.display = "none";
  }
}


function DeleteModal(item1, e, f) 
{
  modal.style.display = "block";

  yesbtn.onclick = () => {
    item1.remove(); 
    const index = finalArray.findIndex(item => item.value1 === e && item.value2 === f);
    if (index !== -1) finalArray.splice(index, 1);
    modal.style.display = "none";
  }

  nobtn.onclick = () => {
    modal.style.display = "none";
  }
}

spanClose.onclick = () => {
  modal.style.display = "none";
}

spanClose1.onclick = () => {
  modal1.style.display = "none";
}
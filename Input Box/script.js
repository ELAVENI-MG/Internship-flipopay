const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const addbtn = document.getElementById("button1");

button1.addEventListener('click',()=>{
    const content1 = input1.value.trim();
    const content2 = input2.value.trim();

    if(content1 && content2)
    {
        add(`${content1}`);
        add(`${content2}`);
    }
    else
    {
        alert('Enter the input in the box');
    }
})

function add(e)
{
    const item1 = document.createElement('div');
    item1.className = 'item';

    const span = document.createElement('span');
    span.textContent=e;
    item1.appendChild(span)

    const edit = document.createElement('button');
    edit.textContent='Edit';
    edit.className="edit_btn";
    edit.addEventListener('click',()=> editItem(span));
   

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    edit.className="delete_btn";
    deleteBtn.addEventListener('click', () =>{

        if(confirm("Delete the content?"))
        {
            item1.remove();
        }

    })
    item1.appendChild(edit);
    item1.appendChild(deleteBtn);
    input3.appendChild(item1);

}

function editItem(span)
{
    const newContent = prompt('Edit your content:', span.textContent);
    if (newContent !== null && newContent.trim() !== '') 
    {
        span.textContent = newContent.trim();
    }
}



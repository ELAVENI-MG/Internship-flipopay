const input1 = document.getElementById("input");
const list = document.getElementById("list1");

function addtask() 
{
    if (input1.value === '') 
    {
        alert("Enter the input");
    } 
    else 
    {
        let li = document.createElement("li");
        li.innerHTML = input1.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; 
        span.style.cursor = "pointer"; 
        li.appendChild(span);
    }
    input1.value = ""; 
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") 
    {
        e.target.classList.toggle("checked");
    } 
    else if (e.target.tagName === "SPAN") 
    {
        e.target.parentElement.remove();
    }
}, false);

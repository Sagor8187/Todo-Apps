 function addtask(){
            const taskinput =document.getElementById("textinput");
            const tasktext = taskinput.value;
            if (tasktext === ''){
                alert("please add task");
                return;
            }
            const li =document.createElement("li")
            li.textContent =tasktext;

            const deletebtn =document.createElement("button")
            deletebtn.textContent ="❌"
            deletebtn.className ="delete"
            deletebtn.onclick =function(){
                li.remove();
            };

            li.appendChild(deletebtn);
            document.getElementById("tasklist").appendChild(li);
            taskinput.value ="";

        }
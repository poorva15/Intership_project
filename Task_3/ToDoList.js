document.getElementById('btn').addEventListener('click', function () {
    let input = document.getElementById('input');
    let inputValue = input.value;
    let priority = document.getElementById('priority').value;

    // Creating the todo list elements
    let elem = document.createElement('li');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let editButton = document.createElement('button');
    let status = document.createElement('span');
    let priorityText = document.createElement('span'); 

    btn1.innerText = "Done";
    btn2.innerText = "Delete";
    editButton.innerText = "Edit";
    status.innerText = "";

    // Set the priority text content and color
    priorityText.innerText = priority;
    switch (priority) {
        case 'Low':
            priorityText.style.color = '#008000';
            break;
        case 'Medium':
            priorityText.style.color = 'rgb(194 68 194 / 90%)';
            break;
        case 'High':
            priorityText.style.color = '#FF4500';
            break;
        default:
            priorityText.style.color = 'black'; 
            break;
    }

    elem.innerText = inputValue;

    // Set the priority text color
    priorityText.style.marginRight = "10px";
    priorityText.style.marginLeft = "15px"; 

    let ul = document.querySelector('ul');

    // Appending the created elements to html
    ul.appendChild(elem);
    elem.appendChild(priorityText); 
    elem.appendChild(editButton);
    elem.appendChild(status);
    elem.appendChild(btn1);
    elem.appendChild(btn2);

    // Adding style to list
    btn1.style.border = "none";
    btn1.style.marginLeft = "3%";
    btn1.style.borderRadius = "8px";
    btn1.style.backgroundColor = " #80808085";
    btn1.style.color = "white";

    btn2.style.border = "none";
    btn2.style.marginLeft = "3%";
    btn2.style.borderRadius = "8px";
    btn2.style.backgroundColor = " #80808085";
    btn2.style.color = "white";

    editButton.style.border = "none";
    editButton.style.marginLeft = "3%";
    editButton.style.borderRadius = "8px";
    editButton.style.backgroundColor = "#80808085";
    editButton.style.color = "white";

    // Reset input text color
    input.style.color = 'black';

    // Adding button functionality to created buttons
    btn1.addEventListener('click', function () {
        elem.style.textDecoration = "line-through";
    });

    btn2.addEventListener('click', function () {
        elem.remove();
    });

    editButton.addEventListener('click', function () {
        let newText = prompt("Edit task:", elem.innerText);
        if (newText !== null) {
            elem.innerText = newText;
            while (elem.firstChild) {
                elem.removeChild(elem.firstChild);
            }

            // Append the new text, priority text, and recreate the buttons
            elem.appendChild(document.createTextNode(newText));
            elem.appendChild(priorityText);
            elem.appendChild(editButton);
            elem.appendChild(btn1);
            elem.appendChild(btn2);
        }
    });

    document.getElementById('input').value = "";
});

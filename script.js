const selectAllButton = document.getElementById('test');
const inputElement = document.getElementById('input');
const ulElement = document.getElementById('list');

let toDoList = [];

inputElement.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 13) {
    toDoList.unshift({
        content: inputElement.value,
        done: false,
        selected: false,
    });
    inputElement.value='';

    upgradeView();
    }
})
selectAllButton.addEventListener('click', () => {
    console.log(selectAllButton)
});

function upgradeView () {
ulElement.innerHTML='';

for (let index = 0;  index  < toDoList.length; index++)  {
const toDoItem = toDoList[index];



const liElement = document.createElement('li'); 
liElement.className = 'list-group-item';
ulElement.append(liElement);

const divElement = document.createElement('div');
divElement.className = 'form-check form-check-inline';
liElement.append(divElement);

const checkboxElement = document.createElement('input');
checkboxElement.className = 'form-check-input';
checkboxElement.id = 'inlineCheckbox3';
checkboxElement.type = 'checkbox';
checkboxElement.id = 'toDoItem' + index;
checkboxElement.checked = toDoItem.selected;
divElement.append(checkboxElement);

const labelElement = document.createElement('label');
labelElement.className = 'form-check-label';
toDoItem.done ? labelElement.className = 'form-check-label todoDone': labelElement.className;
labelElement.innerHTML = `${toDoItem.content}&nbsp`
labelElement.setAttribute('for', 'toDoItem' + index);
divElement.append(labelElement);

const buttonDoneElement = document.createElement('button');
buttonDoneElement.type = 'button';
buttonDoneElement.className = 'btn btn-outline-primary';
buttonDoneElement.innerText = 'Done';
divElement.append(buttonDoneElement);

buttonDoneElement.addEventListener('click', () => {
    toDoItem.done = !toDoItem.done;
    upgradeView();
});



checkboxElement.addEventListener('change', () => {
    toDoItem.selected = checkboxElement.checked;
});

const buttonRemoveElement = document.createElement('button');
buttonRemoveElement.type = 'button';
buttonRemoveElement.className = 'btn btn-outline-danger';
buttonRemoveElement.innerText = 'Remove';
divElement.append(buttonRemoveElement);

buttonRemoveElement.addEventListener('click', () => {
    toDoList = toDoList.filter (currentToDoItem => currentToDoItem !== toDoItem);

    upgradeView();
});

};
};


document.getElementById('doneAction').addEventListener('click', () => {
    for (const toDoItem of toDoList) {
       if (toDoItem.selected) {
           toDoItem.done = true;
           toDoItem.selected =false;
       } 
    }
    upgradeView();
}); 
document.getElementById('restoreAction').addEventListener('click', () => {
    for (const toDoItem of toDoList) {
        if (toDoItem.selected) {
            toDoItem.done = false;
            toDoItem.selected =false;
        } 
     }
     upgradeView();
});
document.getElementById('removeAction').addEventListener('click', () => {
    toDoList = toDoList.filter(toDoItem => !toDoItem.selected);
    upgradeView();
}); 

selectAllButton.addEventListener('click', () => {
    for (const toDoItem of toDoList) {
            toDoItem.selected =true;
        upgradeView();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    loadFromLocalStorage();
    
    addDirection();

    deleteDirection();

    visitDirection();
});

function loadFromLocalStorage() {
    let directionsList = document.getElementById('directions-list');
    directionsList.innerHTML = localStorage.getItem('directions-list');
}

function saveToLocalStorage() {
    let directionsList = document.getElementById('directions-list');
    localStorage.setItem('directions-list', directionsList.innerHTML);
}

function addDirection() {
    document.getElementById('directions-form').addEventListener('submit', function (event) {
        event.preventDefault();
        let directionNameTemplate = document.getElementById('direction-name-template').content.cloneNode(true);
        let directionName = document.getElementById('direction-name');
        directionNameTemplate.querySelector('div > p').innerText = directionName.value;
        directionName.value = '';
        document.querySelector('article > section > div').appendChild(directionNameTemplate);
        console.log(directionNameTemplate.querySelector('div').childElementCount);
        saveToLocalStorage()
    })
}

function deleteDirection() {
    document.querySelectorAll('.delete__button').forEach(button => {
        button.addEventListener('click', function () {
            let parentDiv = button.parentElement;
            parentDiv.remove();
            saveToLocalStorage();
        })
    })
}

function visitDirection() {
    document.querySelectorAll('.visit__button').forEach(button => {
        button.addEventListener('click', function () {
            let parentDiv = button.parentElement;
            parentDiv.querySelector('p').classList.toggle('direction__item_visited');
            saveToLocalStorage();
        })
    })
}
document.addEventListener('DOMContentLoaded', function () {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        var fetchString = 'https://jsonplaceholder.typicode.com/users?id_gte=6'
    } else {
        var fetchString = 'https://jsonplaceholder.typicode.com/users?id_lte=5'
    }
    processUsers(fetchString)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            } else {
                return response.json();
            }
        })
        .then((json) => {
            json.forEach(user => {
                let userTemplate = document.getElementById('user-template').content.cloneNode(true);
                const userCard = userTemplate.querySelector('.user-card');
                const [userName, userFullName, userEmail, userCity, userCompany, userPhone] = userCard.querySelectorAll('.user-info');
                userName.innerText = "Имя пользователя: " + user.username;
                userFullName.innerText = "Имя: " + user.name;
                userEmail.innerText = "Почта: " + user.email;
                userCity.innerText = "Город: " + user.address.city;
                userCompany.innerText = "Компания: " + user.company.name;
                userPhone.innerText = "Телефон: " + user.phone;
                document.querySelector('.homepage__main__article').appendChild(userTemplate);
            });
        });
});

async function processUsers(fetchString) {
    try {
        const response = await fetch(fetchString);
        document.querySelector(".preloader-container").style.display = "none";
        return response
    } catch (error) {
        document.querySelector(".preloader-container").style.display = "none";
        document.querySelector(".error-message").style.display = "flex";
        console.log(error)
    }
}
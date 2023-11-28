document.addEventListener('DOMContentLoaded', function () {
    const randomNumber = Math.floor(Math.random() * 2);
    if (randomNumber === 0) {
        var fetchString = 'https://jsonplaceholder.typicode.com/users?id_gte=5'
    } else {
        var fetchString = 'https://jsonplaceholder.typicode.com/users?id_lte=5'
    }
    fetch(fetchString)
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
                const userCard = userTemplate.querySelector('.user-card')
                const userName = userCard.querySelectorAll('.user-info')[0];
                const userFullName = userCard.querySelectorAll('.user-info')[1];
                const userEmail = userCard.querySelectorAll('.user-info')[2];
                const userCity = userCard.querySelectorAll('.user-info')[3];
                const userCompany = userCard.querySelectorAll('.user-info')[4];
                const userPhone = userCard.querySelectorAll('.user-info')[5];
                userName.innerText = "Имя пользователя: " + user.username;
                userFullName.innerText = "Имя: " + user.name;
                userEmail.innerText = "Почта: " + user.email;
                userCity.innerText = "Город: " + user.address.city;
                userCompany.innerText = "Компания: " + user.company.name;
                userPhone.innerText = "Телефон: " + user.phone;
                document.querySelector('.homepage__main__article').appendChild(userTemplate);
            });
        })
        .catch((error) => {
            document.querySelector(".error-message").style.display = "flex";
            console.log(error)
        });
    document.querySelector(".preloader-container").style.display = "none";
});
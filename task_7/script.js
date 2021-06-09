//Задание 7

const getList = document.getElementById('getList');
const list = document.getElementById('list');

getList.addEventListener('click', function() {
    const inputID = document.getElementById('inputID').value;
    fetch(`https://jsonplaceholder.typicode.com/users/${inputID}/todos`)
        .then((response) => {
            const result = response.json();
            return result;
        })
        .then((data) => {
            //console.log(data);
            if (data.length === 0) {
                alert('Пользователь с указанным id не найден');
            } else {
                list.innerHTML = `<ul>`;
                for (let i = 0; i < data.length; i++) {
                    if (data[i]['completed'] === true) {
                        list.innerHTML += `<li><strike>${data[i]['title']}</strike></li><br>`;
                    } else {
                        list.innerHTML += `<li>${data[i]['title']}</li><br>`;
                    }
                }
                list.innerHTML += `</ul>`;
            }
        })
        .catch(() => {
            console.log('error');
        })
})

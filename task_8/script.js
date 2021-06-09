//Задание 8

const sendRequest = document.getElementById('requestButton');
const message = document.getElementById('message');
const picturesArea = document.getElementById('picturesArea');

console.log(localStorage.getItem('lastSuccessfullRequest'));
let lastSuccesfullRequest = localStorage.getItem('lastSuccessfullRequest');
picturesArea.innerHTML = lastSuccesfullRequest;

document.getElementById('clear').addEventListener('click', () => {
    localStorage.clear();
})


sendRequest.addEventListener('click', function() {
    const pageNumber = +document.getElementById('pageNumber').value;
    const limit = +document.getElementById('limit').value;
    
    //Для неправильных значений
    if (!isCorrectValue(pageNumber)) {
        if (isCorrectValue(limit)) {
            message.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        } else {
            message.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        }
    } else if (!isCorrectValue(limit)) {
        message.innerHTML = 'Лимит вне диапазона от 1 до 10';
    }

    //Для правильных значений
    if (isCorrectValue(pageNumber) && isCorrectValue(limit)) {
        message.innerHTML = '';
        picturesArea.innerHTML = '';
        fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                for (let i = 0; i < data.length; i++) {
                    picturesArea.innerHTML += `<img class="picture" src="${data[i]['download_url']}" alt="${data[i]['id']}">`;
                }
                localStorage.setItem('lastSuccessfullRequest', picturesArea.innerHTML);
            })
            .catch(() => {
                console.log('error')
            });
    }
});

//Проверка корректности введенного значения
function isCorrectValue(value) {
    if (value < 1 || value > 10) {
        return false;
    } else if (isNaN(value) || typeof(value) !== 'number') {
        return false;
    }
    return true;
}



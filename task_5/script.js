let userName = localStorage.getItem('userName');
let lastVisitDate = localStorage.getItem('lastVisitDate');
let currentDate;

if (!userName) {
    let currentName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
    localStorage.setItem('userName', currentName);
    currentDate = new Date();
    localStorage.setItem('lastVisitDate', currentDate);
} else {
    alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${lastVisitDate}`);
    currentDate = new Date();
    localStorage.setItem('lastVisitDate', currentDate);
}

document.getElementById('clear').addEventListener('click', function() {
    localStorage.clear();
})




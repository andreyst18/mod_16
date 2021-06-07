//Задание 6

const isEvenNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        const number = Math.floor(Math.random() * (100 - 1)) + 1;
        if (number % 2 === 0) {
            resolve(`Завершено успешно. Сгенерированное число — ${number}`);
        } else {
            reject(`Завершено с ошибкой. Сгенерированное число — ${number}`);
        }    
    }, 3000);
    
})

isEvenNumber
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
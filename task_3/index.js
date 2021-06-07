//Задание 3

let year = '';
let xhr = new XMLHttpRequest();
let result = document.getElementById('tableResult');

document.getElementById('years').addEventListener('click', function(){
    //console.log(year);
    year  = this.value;
});

document.getElementById('getReport').addEventListener('click', function() {
    //console.log(year);
    if (year === '') {
        alert('Выберите, пожалуйста, год')
    } else {
        xhr.open('GET', 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440');
        xhr.send();
        xhr.onload = function() {
            //console.log(JSON.parse(xhr.response));
            let data = JSON.parse(xhr.response);
            console.log(data);
            for (i = 0; i < data.length; i++) {
                if (data[i].year == year) {
                    result.innerHTML = `
                        <table>
                            <tr>
                                <td>1 кв.</td>
                                <td>2 кв.</td>
                                <td>3 кв.</td>
                                <td>4 кв.</td>
                            </tr>
                            <tr>
                                <td class="values">${data[i].sales.q1}</td>
                                <td class="values">${data[i].sales.q2}</td>
                                <td class="values">${data[i].sales.q3}</td>
                                <td class="values">${data[i].sales.q4}</td>
                            </tr>
                        </table>`;
                }
            }
        }
        
    }
});












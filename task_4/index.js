let year = '';
let xhr = new XMLHttpRequest();
let result = document.getElementById('tableResult');

let chart = document.getElementById('chart');

document.getElementById('years').addEventListener('click', function(){
    year  = this.value;
});

document.getElementById('getReport').addEventListener('click', function() {
    if (year === '') {
        alert('Выберите, пожалуйста, год')
    } else {
        xhr.open('GET', 'https://my.api.mockaroo.com/revenue_2017-2019.json?key=fd36b440');
        xhr.send();
        xhr.onload = function() {
            let data = JSON.parse(xhr.response);
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
                    chart.innerHTML = `<a href="https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:{labels:['Кв.1','Кв.2','Кв.3','Кв.4'],
                                        datasets:[{label:'Выручка за ${year} год',data:[${data[i].sales.q1}, ${data[i].sales.q2}, 
                                        ${data[i].sales.q3}, ${data[i].sales.q4}]}]}}">Открыть график</a>`;    
                    break;
                }
            }
        }
    }
});












// implementação de graficos, utilizando a biblioteca 

let ctx = document.getElementById('myChart');
const inputName = document.getElementById('name')
const inputValor = document.getElementById('valor')
const inputValor2 = document.getElementById('valor2')
const inputValor3 = document.getElementById('valor3')

const btn = document.getElementById('newGraph')

let dataNomes = []
let dataValor = []
let dataValor2 = []
let dataValor3 = []
let myChart

btn.addEventListener('click', () => {

    console.log(
    dataNomes.push(inputName.value),
    dataValor.push(inputValor.value),
    dataValor2.push(inputValor2.value),
    dataValor3.push(inputValor3.value)
    )
    myChart.destroy();



    createGraph()

})

createGraph()

function createGraph() {
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dataNomes,
            datasets: [
                {
                    label: '# of Votes',
                    data: dataValor,
                    borderWidth: 1
                }
                ,
                {
                    label: '# of Votes',
                    data: dataValor2,
                    borderWidth: 1
                }
                ,
                {
                    label: '# of Votes',
                    data: dataValor3,
                    borderWidth: 1
                }
            ]

        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

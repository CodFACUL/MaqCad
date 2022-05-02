

const configEstimativaLucro = (i, inicio) => {
    return {
        type: 'line',
        data: dataEstimativaLucro(i,inicio),
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, ticks) {
                            return 'R$' + value.toFixed(2);
                        }
                    }
                }               
            }
        }
    }
};

const configEstimativaProducao= (i, inicio) => {
    return {
        type: 'line',
        data: dataEstimativaProducao(i, inicio),
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    ticks: {
                        callback: function(value, index, ticks) {
                            return value+' Toneladas';
                        }
                    }
                }               
            }
        }
    }
};

const configMateriaProduto = (i, inicio) => {
    return {type: 'line',
            data: dataMateriaProduto(i, inicio),
            options: {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        ticks: {
                            callback: function(value, index, ticks) {
                                return value+' Toneladas';
                            }
                        },
                    }
                }
            },
        }
  };

const EstimativaProducao = (i) => {
    let chart = document.getElementById('EstimativaProducao');
    if(i != null){
        Chart.getChart("EstimativaProducao").destroy();
    }
    new Chart(
        chart,
        configEstimativaProducao(i)
    );
}
const EstimativaLucro = (i) => {
    let chart = document.getElementById('EstimativaLucro');
    if(i != null){
        Chart.getChart("EstimativaLucro").destroy();
    }
    new Chart(
        chart,
        configEstimativaLucro(i)
    );
}

const MateriaProduto = (i) =>{ 
    let chart = document.getElementById('MateriaProduto');
    if(i != null){
        Chart.getChart("MateriaProduto").destroy();
    }
    new Chart(
        chart,
        configMateriaProduto(i)
    );
}

const onClickChart = (i) => {
    EstimativaProducao(i);
    EstimativaLucro(i);
    MateriaProduto(i);
}  

const chartInicio = () => {
    let graficos = ['EstimativaProducao','EstimativaLucro', 'MateriaProduto'];
    for(i in graficos){

        let chart= new Chart(
            document.getElementById(graficos[i]),
            eval(`config`+graficos[i]+`(0, true)`)
        );
        for(var j=1; j<=2; j++){
            chart.data.datasets.push(eval(`data`+graficos[i]+`(j, true)`).datasets[0]);
            if(graficos[i]== graficos[2]){
                chart.data.datasets.push(eval(`data`+graficos[i]+`(j, true)`).datasets[1]);
            }
            chart.update();
        }
    }
}





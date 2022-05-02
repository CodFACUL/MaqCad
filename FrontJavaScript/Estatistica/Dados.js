const labelsMeses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
];

const producao0 = [0, 200, 150, 200, 250, 300, 550];
const producao1 = [0, 100, 111, 170, 200, 250, 300];
const producao2 = [0, 100, 320, 400, 300, 350, 750];
const materia0  = [0, 300, 250, 300, 350, 400, 650];
const materia1  = [0, 200, 211, 270, 300, 350, 400];
const materia2  = [0, 200, 420, 500, 500, 450, 850];
const lucro0    = [0, 10000, 15000, 18000, 22000, 30000, 45000];
const lucro1    = [0, 12000, 11000, 22000, 23000, 25000, 40000];
const lucro2    = [0, 15000, 10000, 17000, 25000, 27000, 30000];
const cor0      = 'rgb(55, 251, 55)';
const cor1      = 'rgb(255, 99, 132)';
const cor2      = 'rgb(255,215,0)';

const getValores = (nomeDados, i) => {
    return i < 3? eval(nomeDados+i): {}
}

const dataEstimativaLucro = (i, inicio) => {
    maqNum = parseInt(i) +1;
    return {labels: labelsMeses,
            datasets: [{
                label: inicio ? 'Máquina '+maqNum : 'Lucro',
                backgroundColor: inicio ? getValores('cor',i) : 'rgb(55, 251, 55)',
                borderColor: inicio ? getValores('cor',i) :'rgb(55, 251, 55)',
                data: getValores('lucro',i),
            }]}
};

const dataEstimativaProducao = (i, inicio) => {
    maqNum = parseInt(i) +1;
    return {labels: labelsMeses,
            datasets: [{
                label: inicio ? 'Máquina '+maqNum : 'Produção',
                backgroundColor: inicio ? getValores('cor',i) : 'rgb(255, 99, 132)',
                borderColor: inicio ? getValores('cor',i) : 'rgb(255, 99, 132)',
                data: getValores('producao',i),
            }]}
};

const dataMateriaProduto = (i,inicio) => {
    maqNum = parseInt(i) +1;
    return {labels: labelsMeses,
            datasets: [
            {
                label: inicio ? 'Máquina '+maqNum +' - Produção': 'Produção',
                data: getValores('producao',i),
                borderColor: inicio ? getValores('cor',i) : 'rgb(55, 251, 55)',
                backgroundColor: inicio ? getValores('cor',i) : 'rgb(55, 251, 55)',
                type: 'bar'
            },
            {
                label: inicio ? 'Máquina '+maqNum +' - Matéria': 'Matéria',
                data: getValores('materia',i),
                borderColor: inicio ? getValores('cor',i) : 'rgb(255, 99, 132)',
                backgroundColor: inicio ? getValores('cor',i) : 'rgb(255, 99, 132)',
                fill: false,
            }
            ]}
  };
class ModelMaquina{
    static dadosMaquina(){
        let fases     = document.getElementById('fases');
        let amperagem = document.getElementById('amperagem');
        let peso      = document.getElementById('peso');
        let voltagem  = document.getElementById('voltagem');
        let modelo    = document.getElementById('modelo');
        let cliente   = document.getElementById('cliente');

        let dados= {
                fases: fases.value,
                modelo: modelo.value,
                voltagem: voltagem.value,
                amperagem: amperagem.value,
                peso: peso.value,
                id_cli: cliente.value
            };
        if(dados.id_cli!=''){
            return dados;
        }else{
            document.getElementById('modal-body').insertAdjacentElement('afterbegin', MSG);
        }      
    }
}
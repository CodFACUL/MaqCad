class ModelVendedor{
    static dadosVendedor(){
        let nome = document.getElementById('nome');
        let cnpj = document.getElementById('cnpj');

        let dados= {
                cnpj_vend: cnpj.value,
                nome: nome.value
            };

        if(dados.cnpj_vend.length==18 && dados.nome!=''){
            return dados;
        }else{
            document.getElementById('modal-body').insertAdjacentElement('afterbegin', MSG);
            return false;
        }      
    }
}
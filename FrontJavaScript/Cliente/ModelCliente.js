class ModelCliente{
    static dadosCliente(){
        let nome    = document.getElementById('nome');
        let cnpj    = document.getElementById('cnpj');
        let vendedor = document.getElementById('vendedor');

        let dados= {
                cnpj_cli: cnpj.value,
                nome: nome.value,
                id_vend: vendedor.value                
            };

        if(dados.cnpj_cli.length==18 && dados.nome!=''){
            return dados;
        }else{
            document.getElementById('modal-body').insertAdjacentElement('afterbegin', MSG);
        }      
    }
}
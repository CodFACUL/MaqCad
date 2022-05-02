class Incluir{

    modulo;

    buttonsIncluir(){
        mfooter.innerHTML=`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" onclick="confirmaPost()" class="btn btn-success">Incluir</button>`;
    }

    postDados(){
        switch (this.modulo){
            case 'vendedor':
                let dadosVend = ModelVendedor.dadosVendedor();
                if(dadosVend){ 
                    this.postAjax(dadosVend,this.modulo);
                }
                break;
            case 'cliente':
                let dadosCli = ModelCliente.dadosCliente();
                if(dadosCli){ 
                    this.postAjax(dadosCli,this.modulo);
                }
                break;
            case 'maquina':
                let dadosMaq = ModelMaquina.dadosMaquina();
                if(dadosMaq){ 
                    this.postAjax(dadosMaq,this.modulo);
                }
                break;
        }
    }

    postAjax(dados,nome){
        fetch('http://127.0.0.1:8000/api/'+this.modulo,{
                method: 'POST',
                headers: headers,
                body: JSON.stringify(dados)
            })
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                modalSucesso('incluido',nome)
            })
    }

    

    modalIncluir(modulo){
        this.modulo = modulo;
        this.buttonsIncluir();
        switch(modulo){
            case 'vendedor':
                ViewVendedor.camposVendedor();
                titulo_modal.innerHTML= 'Cadastrar Vendedor';
                break;
            case 'cliente':
                ViewCliente.camposCliente();
                titulo_modal.innerHTML= 'Cadastrar Cliente';
                break;
            case 'maquina':
                ViewMaquina.camposMaquina();
                titulo_modal.innerHTML= 'Cadastrar Máquina';
                break;
        } 
         
    }
}


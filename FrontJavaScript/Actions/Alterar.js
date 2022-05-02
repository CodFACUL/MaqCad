class Alterar{

    id;
    modulo; 

    modalAlterar(id,modulo){
        this.id= id
        this.modulo=modulo;
        this.buttonsAlterar(id);
        if(id){
            Visualizar.viewAjax(id,modulo);
        }else{
            Visualizar.viewAjax(check[0],modulo);
        }  
        titulo_modal.innerHTML= 'Alterar '+modulo;
    }

    buttonsAlterar(){
        mfooter.innerHTML=`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" onclick="confirmaAlt()" class="btn btn-warning">Alterar</button>`;
    }

    putDados(){
        switch(this.modulo){
            case 'vendedor':
                this.putAjax(ModelVendedor.dadosVendedor(),this.modulo,this.id);
                break;
            case 'cliente':
                this.putAjax(ModelCliente.dadosCliente(),this.modulo,this.id);
                break;
            case 'maquina':
                this.putAjax(ModelMaquina.dadosMaquina(),this.modulo,this.id);
                break;
        }
        
    }

    putAjax(dados,nome,id=null){
        if(!id){
            id= check[0]
        }
        fetch('http://127.0.0.1:8000/api/'+nome+'/'+id,{
                method: 'PUT',
                headers: headers,
                body: JSON.stringify(dados)
            })
            .then(function(response){
                return response.json()
            })
            .then(function(response){     
                modalSucesso('alterado',nome);
            })
    }
}
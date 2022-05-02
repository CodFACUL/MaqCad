class Visualizar{

    id;
    modulo;

    modalVisualizar(id,modulo){
        this.id= id;
        this.modulo = modulo;
        if(id){
            Visualizar.viewAjax(id,modulo,true);
        }else{
            Visualizar.viewAjax(check[0],modulo,true);
        }
        
        mfooter.innerHTML=`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>`
        titulo_modal.innerHTML= 'Visualizar '+modulo; 
    }


    static viewAjax(id,modulo,disabled=false){
        fetch(`http://127.0.0.1:8000/api/`+modulo+`/`+id,{
                method: 'GET',
                headers: headers,
            })
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                function desabilitado(Campos){
                    if(disabled){
                        for(let obj in Campos){
                            Campos[obj].disabled=true;
                        }
                    }
                }
                switch(modulo){
                    case 'vendedor':
                        const CamposVend = ViewVendedor.camposVendedor();
                        desabilitado(CamposVend);
                        CamposVend[0].value = response.nome;
                        CamposVend[1].value = response.cnpj_vend;
                        break;
                    case 'cliente':
                        const CamposCli = ViewCliente.camposCliente();
                        desabilitado(CamposCli);
                        console.log(response)
                        CamposCli[0].value = response.nome;
                        CamposCli[1].value = response.cnpj_cli;
                        CamposCli[2].value = response.id_vend;debugger;
                        break;
                    case 'maquina':
                        const CamposMaq = ViewMaquina.camposMaquina();
                        desabilitado(CamposMaq);
                        CamposMaq[0].value = response.modelo;
                        CamposMaq[1].value = response.fases;
                        CamposMaq[2].value = response.amperagem;
                        CamposMaq[3].value = response.voltagem;
                        CamposMaq[4].value = response.peso;debugger;
                        CamposMaq[5].value = response.id_cli
                        break;
                }
            })    
    }
}


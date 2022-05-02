const MSG = document.createElement('div');
MSG.setAttribute('class','alert alert-danger');
MSG.innerHTML='<p>Preencha corretamente todos os campos</p>';

const headers = {
    "Content-Type": "application/json",                                                                                                
    "Access-Control-Origin": "*",
    'Authorization': 'Bearer '+localStorage.getItem('token')
 }
const tabela       = document.getElementById('tabela');
const titulobanner = document.getElementById('titulo-banner');
const mbody        = document.getElementById('modal-body'  );
const mfooter      = document.getElementById('modal-footer');
const titulo_modal = document.getElementById('titulo-modal');
const altera       = document.getElementById('alterar');
const visualiza    = document.getElementById('visualizar');
const deleta       = document.getElementById('deletar');
const check        = [];
const del = new Deletar();
const alt = new Alterar();
const vis = new Visualizar();
const inc = new Incluir();

const listaDados =[];

function rowSelected(event){
    if(event.target.checked){
        check.push(event.target.id);
    }else{
        check.splice(check.indexOf(event.target.id),1);
    } 
    if(check.length!=0){
        deleta.disabled=false;
    }else{
        deleta.disabled=true;
    }  
    if(check.length!=1){
        altera.disabled=true;
        visualiza.disabled=true;
    }else{
        altera.disabled=false;
        visualiza.disabled=false; 
    }
}

function modalSucesso(tipo,nome){
    let myModalEl = document.getElementById('staticBackdrop');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    let titulo_modal= document.getElementById('titulo-modal');
    titulo_modal.innerHTML= titulobanner.textContent;
    let mbody = document.getElementById('modal-body');
    mbody.innerHTML= '<p>'+nome+' '+tipo+' com sucesso!</p>';
    switch (nome){
        case 'vendedor':
            mfooter.innerHTML=`<button type="button" onclick="ViewVendedor.atualizaDados()" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>`;
            break;
        case 'cliente':
            mfooter.innerHTML=`<button type="button" onclick="ViewCliente.atualizaDados()" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>`;
            break;
        case 'maquina':
            mfooter.innerHTML=`<button type="button" onclick="ViewMaquina.atualizaDados()" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>`;
            break;
    }
    modal.show();
}

function modalErro(tipo,nome){
    let myModalEl = document.getElementById('staticBackdrop');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    let titulo_modal= document.getElementById('titulo-modal');
    titulo_modal.innerHTML= titulobanner.textContent;
    let mbody = document.getElementById('modal-body');
    mbody.innerHTML= '<p>Erro ao '+tipo+' '+nome+'!</p>';
    switch (nome){
        case 'vendedor':
            mfooter.innerHTML=`<button type="button" onclick="ViewVendedor.atualizaDados()" onclick="resetModal()" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>`;
            break;
        case 'cliente':
            mfooter.innerHTML=`<button type="button" onclick="ViewCliente.atualizaDados()" onclick="resetModal()" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>`;
            break;
        case 'maquina':
            mfooter.innerHTML=`<button type="button" onclick="ViewMaquina.atualizaDados()" onclick="resetModal()" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>`;
            break;
    }
    modal.show();
}

function resetModal(){
    document.getElementById('modal-body').innerHTML = '';
    document.getElementById('titulo-modal').innerHTML = '';
    mfooter.innerHTML = '';
}

function modalEstatistica(){
    let myModalEl = document.getElementById('view_estatisticas');
    let modal = bootstrap.Modal.getInstance(myModalEl);
    let titulo_modal= document.getElementById('titulo-modal-estatistica');
    titulo_modal.innerHTML= titulobanner.textContent;
    let mbody = document.getElementById('modal-body-estatistica');

    modal.show();
}
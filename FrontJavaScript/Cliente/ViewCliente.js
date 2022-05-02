class ViewCliente{

    constructor(){
        this.tabelaCliente();
    }

    tabelaCliente(){
        tabela.innerHTML=`<table class="table   table-hover">
                    <thead class="bg-primary">
                        <tr>
                            <th class="col-1"></th>
                            <th class=" justify-content-start col-1">Código</th>
                            <th style="width:200px">Cliente</th>
                            <th class="col-2">CNPJ Cliente</th>
                            <th style="width:200px">Vendedor</th>
                            <th class="col-2">CNPJ Vendedor</th>
                            <th class=" justify-content-end">Ações</th>
                        </tr>
                    </thead>
                    <tbody id="tbody" class="table-white bg-white text-dark">
            </tbody>
        </table>`;
        this.body();
    }

    body(){
        fetch('http://127.0.0.1:8000/api/cliente')
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            response.forEach((user) => {
            let tbody = document.getElementById('tbody');
            let tr = document.createElement('tr');
            tr.innerHTML=`<td>
                                <input class="form-check" type="checkbox" onclick="rowSelected(event)" name="row" id="`+user.id+`" >
                            </td>
                            <td>`+user.id+`</td>
                            <td><div class="d-inline-block text-truncate" style="margin-left:-0.5rem; margin-right:-0.5rem; width: 200px;">`+user.nome+`</div></td>
                            <td>`+user.cnpj_cli+`</td>
                            <td>`+user.vendedor_nome+`<div class="d-inline-block text-truncate" style="margin-left:-0.5rem; margin-right:-0.5rem; width: 200px;"></div></td>
                            <td>`+user.cnpj_vend+`</td>
                            <td class="col-1">
                                <i onclick="criaVisualizar('`+user.id+`')" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="bi  bi-search"></i>
                                <i onclick="criaAlterar('`+user.id+`')" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  class="bi ms-3 bi-pencil"></i>
                                <i onclick="criaDeletar('`+user.id+`')" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  class="bi ms-3 bi-trash"></i>
                            </td>` 
                tbody.appendChild(tr);
            })
        });
    }

    static camposCliente(){
        mbody.innerHTML=`<div class="input-group mb-3">
                                <label for="nome" class="input-group-text">Nome</label>
                                <input type="text" id="nome" required name="nome" class="form-control">
                            </div>
                            <div class="input-group mb-3">
                                <label for="cnpj" class="input-group-text">CNPJ</label>
                                <input type="text" onkeypress="mascaraCNPJ()" onchange="mascaraCNPJ()"  maxlength="18"  id="cnpj" required name="cnpj" class="form-control">
                            </div>
                            <div class="input-group mb-3">
                                <label for="vendedor" class="input-group-text">Vendedor</label>
                                <select id="vendedor" class="form-select">
                                </select>
                            </div>`
        const vendedor = document.getElementById('vendedor');
        for(let vend in listaDados[0]){
            const option = document.createElement('option');
            option.value = listaDados[0][vend].id;
            option.innerHTML = listaDados[0][vend].nome;
            vendedor.appendChild(option);
        }

        const nome     = document.getElementById('nome');
        const CNPJ     = document.getElementById('cnpj');

        return [nome,CNPJ,vendedor];
    }

    static atualizaDados(){
        new ViewCliente();
        altera.disabled=true;
        visualiza.disabled=true;
        deleta.disabled=true;
        check.length = 0;
    }
}
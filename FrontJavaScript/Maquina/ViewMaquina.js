class ViewMaquina{

  constructor(){
      this.tabelaMaquina();
  }

  tabelaMaquina(){
      tabela.innerHTML=`<table class="table   table-hover">
      <thead class="bg-primary">
          <tr>
              <th></th>
              <th>Código</th>
              <th class="col-1">Modelo</th>
              <th class="col-1">Fases</th>
              <th class="col-1">Voltagem</th>
              <th class="col-1">Amperagem</th>
              <th class="col-1">Peso</th>
              <th width="300px">Cliente</th>
              <th width="150px">Ações</th>
          </tr>
        </thead>
        <tbody  id="tbody" class="table-white bg-white text-dark"> 
        </tbody>
      </table>`;
      this.body();
  }

  body(){
      fetch('http://127.0.0.1:8000/api/maquina')
      .then(function(response){
          return response.json()
      })
      .then(function(response){
          response.forEach((user, index) => {
          let tbody = document.getElementById('tbody');
          let tr = document.createElement('tr');
          tr.innerHTML=`<td>
                              <input class="form-check" type="checkbox" onclick="rowSelected(event)" name="row" id="`+user.id+`" >
                          </td>
                          <td>`+user.id+`</td>
                          <td><div class="d-inline-block text-truncate" style="margin-left:-0.5rem; margin-right:-0.5rem; width: 200px;">`+user.modelo+`</div></td>
                          <td>`+user.fases+`</td>
                          <td>`+user.voltagem+` V</td>
                          <td>`+user.amperagem+` A</td>
                          <td>`+user.peso+` Kg</td>
                          <td>`+user.cliente_nome+`</td>
                          <td>
                              <i onclick="onClickChart(`+index+`)" data-bs-toggle="modal" data-bs-target="#view_estatisticas" class="bi bi-graph-up"></i>
                              <i onclick="criaVisualizar('`+user.id+`')" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="bi ms-3 bi-search"></i>
                              <i onclick="criaAlterar('`+user.id+`')" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  class="bi ms-3 bi-pencil"></i>
                              <i onclick="criaDeletar('`+user.id+`')" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  class="bi ms-3 bi-trash"></i>
                          </td>` 
          tbody.appendChild(tr);
          })
      });
  }

  static camposMaquina(){
    mbody.innerHTML=`<div class="input-group mb-3">
                            <label for="modelo" class="input-group-text">Modelo</label>
                            <select id="modelo" class="form-select me-5">
                              <option value="FTI-250">FTI-250</option>
                              <option value="FT-250">FT-250</option>
                              <option value="FTI-600">FTI-600</option>
                              <option value="FT-600">FT-600</option>
                            </select>
                            <label for="amperagem" class="input-group-text">Amperagem</label>
                            <select id="amperagem" class="form-select">
                              <option value="30">30A</option>
                              <option value="45">45A</option>
                              <option value="60">60A</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                          <label for="voltagem" class="input-group-text">Voltagem</label>
                          <select id="voltagem" class="form-select">
                            <option value="110">110V</option>
                            <option value="220">220V</option>
                            <option value="380">380V</option>
                          </select>
                          <label for="peso" class="input-group-text">Peso</label>
                          <select id="peso" class="form-select">
                            <option value="300">300Kg</option>
                            <option value="450">450Kg</option>
                            <option value="560">560Kg</option>
                          </select>
                            <label for="fases" class="input-group-text">Fases</label>
                            <select id="fases" class="form-select">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                            <label for="cliente" class="input-group-text">Cliente</label>
                            <select id="cliente" class="form-select">
                            </select>
                        </div>`
    const cliente = document.getElementById('cliente');
    for(let cli in listaDados[0]){
        const option = document.createElement('option');
        option.value = listaDados[0][cli].id;
        option.innerHTML = listaDados[0][cli].nome;
        cliente.appendChild(option);
    }

    const modelo    = document.getElementById('modelo');
    const fases     = document.getElementById('fases');
    const amperagem = document.getElementById('amperagem');
    const voltagem  = document.getElementById('voltagem');
    const peso      = document.getElementById('peso');
    
    return [modelo,fases,amperagem,voltagem,peso,cliente];
}


  static atualizaDados(){
      new ViewMaquina();
      altera.disabled=true;
      visualiza.disabled=true;
      deleta.disabled=true;
      check.length = 0;
  }
}

function criaDeletar(id){
    del.modalDeletar(id,'maquina');
  }
  function confirmaDel(){
    del.deletar();
  }
  function criaAlterar(id){
    alt.modalAlterar(id,'maquina');
  }
  function confirmaAlt(){
    alt.putDados();
  }
  function criaVisualizar(id){
    vis.modalVisualizar(id,'maquina');
  }
  function criaIncluir(){
    inc.modalIncluir('maquina');
  }
  function confirmaPost(){
    inc.postDados();
  }
  Listar.dados('cliente');
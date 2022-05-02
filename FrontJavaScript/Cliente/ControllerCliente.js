function criaDeletar(id){
    del.modalDeletar(id,'cliente');
  }
  function confirmaDel(){
    del.deletar();
  }
  function criaAlterar(id){
    alt.modalAlterar(id,'cliente');
  }
  function confirmaAlt(){
    alt.putDados();
  }
  function criaVisualizar(id){
    vis.modalVisualizar(id,'cliente');
  }
  function criaIncluir(){
    inc.modalIncluir('cliente');
  }
  function confirmaPost(){
    inc.postDados();
  }
  Listar.dados('vendedor');
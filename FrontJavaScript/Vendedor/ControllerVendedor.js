function criaDeletar(id){
    del.modalDeletar(id,'vendedor');
  }
  function confirmaDel(){
    del.deletar();
  }
  function criaAlterar(id){
    alt.modalAlterar(id,'vendedor');
  }
  function confirmaAlt(){
    alt.putDados();
  }
  function criaVisualizar(id){
    vis.modalVisualizar(id,'vendedor');
  }
  function criaIncluir(){
    inc.modalIncluir('vendedor');
  }
  function confirmaPost(){
    inc.postDados();
  }
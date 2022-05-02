class Listar{

    static dados(modulo){
        fetch('http://127.0.0.1:8000/api/'+modulo)
        .then(function(response){
            return response.json()
        })
        .then(function(response){
            listaDados[0]= response;
        });
        
        return listaDados[0];
    }

}

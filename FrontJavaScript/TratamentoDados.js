function mascaraCNPJ(){
    let input = document.getElementById('cnpj');
    input.value= input.value.replace(/\D/g,"");
    input.value= input.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
}
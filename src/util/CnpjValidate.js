const validarCNPJ = (cnpj) => {
 
    if(cnpj === '') return false;
     
    if (cnpj.length !== 14)
        return false;

    return true;
    
}

export default validarCNPJ;
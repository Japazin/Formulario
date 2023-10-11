class ValidaCPF {
  constructor(cpf) {
    Object.defineProperty(this, "cpflimpo", {
      writable: true,
      enumerable: true,
      configurable: true,
      value: cpf.replace(/\D+/g, ""),
    });
  }
  valida() {
    const cpfarray = Array.from(this.cpflimpo);
    let cpf09 = this.calculo9digitos(cpfarray);
    let cpf10 = this.calculo10digitos(cpfarray);
    const digito1verdadeiro = cpfarray[9];
    const digito2verdadeiro = cpfarray[10];
    //validação do CPF
    if (this.sequenciacpf(cpfarray)) return false;

    return cpf09 != digito1verdadeiro || cpf10 != digito2verdadeiro
      ? false
      : true;
  }
  calculo9digitos(cpfarray) {
    let cpf9 = cpfarray.slice(0, 9);
    let contadoor = cpf9.length + 2;
    cpf9 = cpf9.reduce(function (acul, valor) {
      contadoor = contadoor - 1;
      return acul + valor * contadoor; //mutiplicação e soma dos 9 digitos
    }, 0);
    cpf9 = cpf9 % 11;
    cpf9 < 2 ? (cpf9 = 0) : (cpf9 = 11 - cpf9); //verificando se é menor que 2 e retornando 0 se verdadeiro
    return cpf9;
  }
  calculo10digitos(cpfarray) {
    let cpf10 = cpfarray.slice(0, 10);
    let contadoor = cpf10.length + 2;
    cpf10 = cpf10.reduce(function (acul, valor) {
      contadoor = contadoor - 1;
      return acul + valor * contadoor; //mutiplicação e soma dos 9 digitos
    }, 0);
    cpf10 = cpf10 % 11;
    cpf10 < 2 ? (cpf10 = 0) : (cpf10 = 11 - cpf10); //verificando se é menor que 2 e retornando 0 se verdadeiro
    return cpf10;
  }
  sequenciacpf() {
    return this.cpflimpo.charAt(0).repeat(11) === this.cpflimpo;
  }
}

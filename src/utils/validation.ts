import dayjs from "dayjs";

export function isValidCPF(cpf: string): boolean {
  cpf = cpf.replace(/\D/g, "");
  if (cpf.length !== 11) {
    return false;
  }
  if (/^(\d)\1{10}$/.test(cpf)) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  let verifierDigit1 = remainder >= 10 ? 0 : remainder;
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  let verifierDigit2 = remainder >= 10 ? 0 : remainder;
  if (
    parseInt(cpf.charAt(9)) !== verifierDigit1 ||
    parseInt(cpf.charAt(10)) !== verifierDigit2
  ) {
    return false;
  }

  return true;
}

export function isValidBirthData(date: string): boolean {
  if (
    dayjs(date).isAfter(dayjs(new Date())) ||
    dayjs(date).isBefore(dayjs("1900-01-01"))
  ) {
    return false;
  }
  return true;
}

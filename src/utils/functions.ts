// convertir numeros ej 123765 a 123.765
export const formatNumber = (number: number) => {
  return new Intl.NumberFormat("es-AR").format(number);
};

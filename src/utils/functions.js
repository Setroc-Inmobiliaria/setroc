export const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
}


export const currencyFormatter =({ currency, value }) =>{
  const formatter = new Intl.NumberFormat("es-EU", {
    style: "currency",
    minimumFractionDigits: 0,
    currency,
  });

  const rounded = Math.round(value);
  return formatter.format(rounded);
}



function sortCarByYearDescendingly(cars) {
  const result = [...cars];
  // Tulis code-mu disini
  result.sort((x, y) => {
    if (x.year > y.year) {
      return -1;
    }
    if (x.year < y.year) {
      return 1;
    }
  
    return 0;
  });

  return result;
}

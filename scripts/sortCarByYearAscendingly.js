function sortCarByYearAscendingly(cars) {
  const result = [...cars];

  result.sort((x, y) => {
    if (x.year < y.year) {
      return -1;
    }
    if (x.year > y.year) {
      return 1;
    }
  
    return 0;
  });

  return result;
}

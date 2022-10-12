function filterCarByAvailability(cars) {
  // Tempat penampungan hasil
  // ga boleh pake result :")
  // const result = cars.filter((item) => {
  //   return item.available == true
  // });
  const result = []
  cars.forEach((item) => {
    if(item.available == true) {
      result.push(item)
    }
  })
  console.log(result);

  return result;
}

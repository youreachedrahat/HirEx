const DateConverter = (DateString, Type) => {
  if (DateString) {
    let text = DateString.toString();
    const myArray = text.split(".");
    const FResult1 = myArray[0].split("T");
    if (Type === "Date") {
      return FResult1[0];
    }
    if (Type === "Time") {
      return FResult1[1];
    }
  } else {
    return "found none";
  }
};

export default DateConverter;

const math = {};

math.generateRandomNum = (minimum, maximum) => {
  let min = minimum;
  let max = maximum;

  min = typeof min === "number" ? min : 0;
  max = typeof max === "number" ? max : 0;

  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default math;

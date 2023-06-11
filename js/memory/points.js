let points = {};
let addPoint = (name, value) => {
  if (points[name]) return 999;
  points[name] = value;
  return 100;
};
let getPoint = (name) => {
  if (!points[name])
    return {
      status: 999,
      data: "",
    };
  return { status: 100, data: points[name] };
};
let getAllPoint = () => {
  return points;
};
let removeAllPoint = () => {
  points = {};
};

export default { addPoint, getPoint, getAllPoint, removeAllPoint };

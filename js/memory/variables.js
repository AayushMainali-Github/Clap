let variables = {};
let addVariable = (name, value) => {
  if (variables[name]) return 999;
  variables[name] = value;
  return 100;
};
let getVariable = (name) => {
  if (!variables[name] && variables[name] !== 0)
    return {
      status: 999,
      data: "",
    };
  return {
    status: 100,
    data: variables[name],
  };
};
let changeVariable = (name, value) => {
  if (!variables[name] && variables[name] !== 0)
    return {
      status: 999,
      data: "",
    };
  variables[name] = value;
  return {
    status: 100,
    data: variables[name],
  };
};
let removeVariable = (name) => {
  if (!variables[name]) return 999;
  return 100;
};
let getAllVariable = () => {
  return variables;
};
let removeAllVariable = () => {
  variables = {};
};
export default { addVariable, getVariable, changeVariable, removeVariable, getAllVariable, removeAllVariable };

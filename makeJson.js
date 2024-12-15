// Two variables are given key and value. Return these values in JSON notation, but as a string, not an JSON object.

function firstJSON(key, value) {
  return `{"${key}":"${value}"}`;
}

function firstJSON(key, value) {
  const string = {
    [key]: value,
  };
  return JSON.stringify(string);
}
function firstJSON(key, value) {
  return JSON.stringify({ [key]: value });
}

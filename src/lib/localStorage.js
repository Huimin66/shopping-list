export function getFromLocal(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
}

export function setToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

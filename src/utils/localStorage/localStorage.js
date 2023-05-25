export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : [];
}

export function removeLocalStorage(key) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
  }
}

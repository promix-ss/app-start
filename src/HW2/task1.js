function LocalStorageManager() {}

LocalStorageManager.prototype.setItem = function(key, value) {
  if (localStorage) {
    localStorage.setItem(key, JSON.stringify(value));
    console.log(`Data with key '${key}' successfully saved to localStorage.`);
  } else {
    console.error('LocalStorage is not supported in this environment.');
  }
};

LocalStorageManager.prototype.getItem = function(key) {
  if (localStorage) {
    const value = JSON.parse(localStorage.getItem(key));
    console.log(`Data with key '${key}' successfully retrieved from localStorage.`);
    return value;
  } else {
    console.error('LocalStorage is not supported in this environment.');
    return null;
  }
};

const localStorageManager = new LocalStorageManager();

localStorageManager.setItem('username', 'john_doe');

const username = localStorageManager.getItem('username');
console.log('Username:', username);

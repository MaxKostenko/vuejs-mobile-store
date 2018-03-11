export function getData(key) {
  return new Promise((resolve, reject) => {
    let data = sessionStorage.getItem(key);
    if (data) {
      try {
        data = JSON.parse(data);
        resolve(data);
      } catch (error) {
        reject();
      }
    }
    reject();
  });
}

export function setData(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}

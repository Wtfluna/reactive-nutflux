export const authTokenKey = "authToken";

export function watchLocalStorage(callbackAfter = function () {}) {
  const original = localStorage["setItem"].bind(localStorage);
  const newMethod = function (key: string, value: string) {
    original(key, value);
    callbackAfter();
  };
  localStorage["setItem"] = newMethod.bind(localStorage);
}

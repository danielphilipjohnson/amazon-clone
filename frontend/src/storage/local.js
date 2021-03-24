export function getLocalStorageState(key, { deserialize = JSON.parse } = {}) {
  if (window.localStorage) {
    const serializedState = window.localStorage.getItem(key);
    if (serializedState) {
      try {
        if (serializedState === null) {
          return undefined;
        }
        return deserialize(serializedState);
      } catch (error) {
        window.localStorage.removeItem(key);
        return undefined;
      }
    }
  }
}

export function setLocalStorageState(
  key,
  value,
  { serialize = JSON.stringify } = {}
) {
  if (window.localStorage) {
    try {
      const serializedValue = serialize(value);
      window.localStorage.setItem(key, serializedValue);
    } catch (error) {
      window.localStorage.removeItem(key);
    }
  }
}

import { useState } from 'react';

export function useLocalStorage<T>(
  schedule: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(schedule);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(schedule, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export interface Counter {
  id: string;
  value: number;
}

export function createInitialState(): Counter {
  return {
    id: 'counter',
    value: 0
  };
}

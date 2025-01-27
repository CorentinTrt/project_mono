interface Repository<T> {
  create?: (object: T) => void;
  read?: (object: T) => T | undefined;
  readMultiple?: (object: T[]) => T[];
  update?: (object: T) => void;
  delete?: (object: T) => void;
}

export { Repository };

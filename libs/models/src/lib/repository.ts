interface Repository<T> {
  create?: ({}: T) => void;
  read?: ({}: T) => T | undefined;
  readMultiple?: ({}: T[]) => T[];
  update?: ({}: T) => void;
  delete?: ({}: T) => void;
}

export { Repository };

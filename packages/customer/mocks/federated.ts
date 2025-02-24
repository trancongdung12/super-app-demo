import {AppMock} from './App';

export default (module: string) => {
  switch (module) {
    case './App':
      return AppMock;
    default:
      throw new Error(`CustomerMock: unknown module: ${module}`);
  }
};

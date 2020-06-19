import { fetchConfigAsync, fetchMetroListAsync } from './actions';
import { reducer, initialState, DataState } from './reducer';
import { Config, MetroList } from './services';

describe('data reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as RootAction)).toEqual(initialState);
  });

  it(`should handle ${fetchConfigAsync.success}`, () => {
    const payload = {} as Config;

    expect(
      reducer({} as DataState, fetchConfigAsync.success(payload))
    ).toEqual({ config: payload });
  });

  it(`should handle ${fetchMetroListAsync.success}`, () => {
    const payload = [] as MetroList;

    expect(
      reducer({} as DataState, fetchMetroListAsync.success(payload))
    ).toEqual({ metroList: payload });
  });
});

import { getType } from 'typesafe-actions';
import { fetchStudioListAsync } from './actions';
import { reducer, initialState, ListState } from './reducer';
import { StudioList } from './types';

describe('list reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {} as RootAction)).toEqual(initialState);
  });

  it(`should handle ${getType(fetchStudioListAsync.success)}`, () => {
    const payload: StudioList = [{ studio: {} }] as StudioList;

    expect(
      reducer({} as ListState, fetchStudioListAsync.success(payload))
    ).toEqual({
      studioList: payload,
    });
  });
});

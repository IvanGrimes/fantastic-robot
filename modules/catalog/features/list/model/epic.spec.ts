import { http, ServiceError, testEpic } from '@shared';
import { mocked } from 'ts-jest/utils';
import { getType } from 'typesafe-actions';
import { StudioList } from './services';
import { fetchStudioListAsync } from './actions';
import { epic } from './epic';

const mockedHttp = mocked(http, true);

describe('list epic', () => {
  const entity: StudioList = [{ studio: {} }] as StudioList;

  mockedHttp.post.mockResolvedValue({
    data: { studios: [entity] },
  });

  it('should dispatch data when request succeed', (done) => {
    testEpic(epic, fetchStudioListAsync.request).subscribe(() => {
      expect(mockedHttp.post).toBeCalled();

      done();
    });
  });

  it('should dispatch the correct response on success', (done) => {
    testEpic(
      epic,
      fetchStudioListAsync.request,
      fetchStudioListAsync.success,
      ({ type }) => {
        expect(type).toBe(getType(fetchStudioListAsync.success));

        done();
      }
    );
  });

  it('should handle error', (done) => {
    mockedHttp.post.mockReset().mockRejectedValue(new Error());

    testEpic(
      epic,
      fetchStudioListAsync.request,
      fetchStudioListAsync.failure,
      ({ type, payload }) => {
        expect(type).toEqual(getType(fetchStudioListAsync.failure));
        expect(payload).toBeInstanceOf(ServiceError);

        done();
      }
    );
  });
});

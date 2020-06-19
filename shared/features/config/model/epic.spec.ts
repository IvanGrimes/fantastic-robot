import { mocked } from 'ts-jest/utils';
import { getType } from 'typesafe-actions';
import { http, ServiceError } from '../../../model';
import { testEpic } from '../../../utils';
import { fetchConfigAsync, fetchMetroListAsync } from './actions';
import { epic } from './epic';

const mockedHttp = mocked(http, true);

describe('data epic', () => {
  describe(getType(fetchConfigAsync.request), () => {
    it('should dispatch data when request succeed', (done) => {
      mockedHttp.get.mockResolvedValue(undefined);

      testEpic(epic, fetchConfigAsync.request).subscribe(() => {
        expect(mockedHttp.get).toBeCalled();

        done();
      });
    });

    it('should dispatch the correct response on success', (done) => {
      mockedHttp.get.mockResolvedValue({ data: {} });

      testEpic(
        epic,
        fetchConfigAsync.request,
        fetchConfigAsync.success,
        ({ type }) => {
          expect(type).toEqual(getType(fetchConfigAsync.success));

          done();
        }
      );
    });

    it('should handle error', (done) => {
      mockedHttp.get.mockRejectedValue(new Error());

      testEpic(
        epic,
        fetchConfigAsync.request,
        fetchConfigAsync.failure,
        ({ type, payload }) => {
          expect(type).toEqual(getType(fetchConfigAsync.failure));
          expect(payload).toBeInstanceOf(ServiceError);

          done();
        }
      );
    });
  });

  describe(getType(fetchMetroListAsync.request), () => {
    it('should dispatch data when request succeed', (done) => {
      mockedHttp.get.mockResolvedValueOnce(undefined);

      testEpic(epic, fetchMetroListAsync.request).subscribe(() => {
        expect(mockedHttp.get).toBeCalled();

        done();
      });
    });

    it('should dispatch the correct response on success', (done) => {
      mockedHttp.get.mockResolvedValueOnce({
        data: [],
      });

      testEpic(
        epic,
        fetchMetroListAsync.request,
        fetchMetroListAsync.success,
        ({ type }) => {
          expect(type).toEqual(getType(fetchMetroListAsync.success));

          done();
        }
      );
    });

    it('should handle error', (done) => {
      mockedHttp.get.mockRejectedValueOnce(new Error());

      testEpic(
        epic,
        fetchMetroListAsync.request,
        fetchMetroListAsync.failure,
        ({ type, payload }) => {
          expect(type).toEqual(getType(fetchMetroListAsync.failure));
          expect(payload).toBeInstanceOf(ServiceError);

          done();
        }
      );
    });
  });
});

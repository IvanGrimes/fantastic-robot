import { from } from 'rxjs';
import { FetchStudiosInput, mockStudios } from '../../studios/model/api';

export const fetchStudios = (input: FetchStudiosInput) => {
  return from(
    new Promise<ReturnType<typeof mockStudios>>(resolve => {
      setTimeout(
        () => {
          resolve(mockStudios(input));
        },
        typeof window !== 'undefined' ? 3000 : 0
      );
    })
  );
};
export const toggleFavorite = (id: string) =>
  from(
    new Promise<{ id: string; success: boolean }>(resolve => {
      setTimeout(() => {
        resolve({ id, success: true });
      }, 1000);
    }).then(({ id: _id, success }) => {
      if (!success) {
        throw new Error('Fail');
      }

      return { id: _id };
    })
  );

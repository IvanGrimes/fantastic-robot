import { Index } from '../../../components/index';
import { serverEpic } from '../../../lib/serverEpic';
import { fetchStudiosAsync } from '../../../redux/studios/actions';
import { SSRError } from '../../../lib/SSRError';

Index.getInitialProps = async ({ store, query, isServer }) => {
  if (!query.number) {
    return {};
  }

  if (isServer) {
    try {
      const number = parseInt(query.number, 10);

      if (Number.isNaN(number)) {
        throw new Error(
          `Parameter number should be a type of "number", but got: ${typeof number}`
        );
      }
      await serverEpic(store, fetchStudiosAsync.request({ page: number }));
    } catch (e) {
      throw new SSRError({ statusCode: 404 });

      return {
        statusCode: 404,
      };
    }
  }

  return {};
};

export default Index;

import { Index, getInitialProps } from '../../../src/pages/index';
import { SSRError } from '../../../src/lib/SSRError';

Index.getInitialProps = async ctx => {
  const { query, isServer } = ctx;

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

      await getInitialProps({ ...ctx, page: number });
    } catch (e) {
      throw new SSRError({ statusCode: 404 });
    }
  }

  return {};
};

export default Index;

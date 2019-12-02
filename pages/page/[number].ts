import { Index } from '../../src/pages/index';
import { SSRError } from '../../src/lib/SSRError';

Index.getInitialProps = async (ctx: { query: { number: string } }) => {
  const { query } = ctx;

  if (!query.number) {
    return {};
  }

  try {
    const number = parseInt(query.number, 10);

    if (Number.isNaN(number)) {
      throw new Error(
        `Parameter number should be a type of "number", but got: ${typeof number}`
      );
    }
  } catch (e) {
    throw new SSRError({ statusCode: 404 });
  }

  return {};
};

export default Index;

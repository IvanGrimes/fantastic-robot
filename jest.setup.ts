// @ts-ignore
import preloadAll from 'jest-next-dynamic';

function mockHttp() {
  jest.mock('./shared/model/http');
}

async function loadNextDynamicComponents() {
  await preloadAll();
}

loadNextDynamicComponents();
mockHttp();

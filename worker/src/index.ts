import { Router } from 'itty-router';

const router = Router();

router.post('/sync', async (request) => {
  const data = await request.json();
  console.log('Received sync payload', data);
  return new Response('ok');
});

router.all('*', () => new Response('Not Found', { status: 404 }));

export default {
  fetch: router.handle,
};

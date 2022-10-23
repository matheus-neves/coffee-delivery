import { rest } from 'msw';

import { coffees } from '@src/mocks/data/coffees';

export const handlers = [
  rest.get('/coffees', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(coffees));
  })
];

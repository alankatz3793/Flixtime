import Router from 'next/router';

export default function redirect(ctx, location) {
  if (ctx.req) { // if wer'e on the server
    ctx.res.writeHead(302, { Location: location }); // redirect with native node.js
    ctx.res.end();
  } else {
    Router.push(location);
  }
}

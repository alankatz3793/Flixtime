// import nextConnect from 'next-connect';
// import {
//   getAll, getDetails, getList, getSearch,
// } from '../../utils/fetchData';
// import {
//   ALL_ROUTE, DETAILS_ROUTE, LIST_ROUTE, SEARCH_ROUTE,
// } from './routes';
//
// function onError(err, req, res) {
//   console.log(err);
//   res.status(500).end(err.toString());
// }
//
// const handler = nextConnect({ onError });
// // handler.use(cacheApi());
//
// handler.get(async (req, res) => {
//   // const { url: key } = req;
//   const {
//     id, mediaType, page, route, sortBy, term, genre = '',
//   } = req.query;
//
//   let response;
//
//   switch (route) {
//     case ALL_ROUTE:
//       response = await getAll();
//       break;
//     case DETAILS_ROUTE:
//       response = await getDetails(id, mediaType);
//       break;
//     case LIST_ROUTE:
//       response = await getList(page, sortBy, genre, mediaType);
//       break;
//     case SEARCH_ROUTE:
//       response = await getSearch(term);
//       break;
//     default:
//       res.status(405).send(`Route ${route} not exist`);
//       return;
//   }
//   // console.log(`cache miss at ${key}, setting data`);
//   // if (redisStatus.isOk) {
//   //   redisSet(key, response);
//   // }
//   res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
//   res.status(200).json(response);
// });
//
// export default handler;

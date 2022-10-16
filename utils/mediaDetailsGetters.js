export function getDirectors(cast) {
  const directores = cast.crew.filter((e) => e.job === 'Director');
  return directores.slice(0, 2);
}

export function getProducers(cast) {
  const producers = cast.crew.filter((e) => e.job === 'Producer');
  return producers.slice(0, 2);
}

export function getWriters(cast) {
  const writers = cast.crew.filter((e) => e.job === 'Writer');
  return writers.slice(0, 2);
}

export function getCreators(details) {
  return details.created_by.slice(0, 3);
}

export function getActors(cast) {
  return cast.cast.slice(0, 6);
}

export function getTrailer(traliers) {
  const youtubeTrailers = traliers.find((trailer) => trailer.site && trailer.site.toLowerCase() === 'youtube');
  return youtubeTrailers ? youtubeTrailers.key : null;
}

export function getReviews(reviews) {
  return reviews
    .filter((review) => review.content.length < 4000 && review.content.length > 200)
    .slice(0, 2);
}

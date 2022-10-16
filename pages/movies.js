import SortPage, { getOption } from '../components/Shared/SortPage/SortPage';
import redirect from '../utils/redirect';
import { getList } from '../utils/fetchData';

export const sortOptions = [
  { label: 'Popularity', value: 'popularity.desc' },
  { label: 'Release date', value: 'primary_release_date.desc' },
  { label: 'Rating', value: 'vote_average.desc' },
  { label: 'Revenue', value: 'revenue.desc' },
];

function Movies({
  movies, mediaType, totalPages, genresOptions,
}) {
  return (
    <SortPage
      results={movies}
      sortOptions={sortOptions}
      mediaType={mediaType}
      totalPages={totalPages}
      genresOptions={genresOptions}
    />
  );
}

export async function getServerSideProps(ctx) {
  const { page = '1', sortBy = 'popularity.desc', genre = '' } = ctx.query;
  const mediaType = 'movie';
  const sortOption = getOption(sortOptions, sortBy);
  if (!sortOption) {
    redirect(ctx, '/movies');
  }

  const responseSorted = await getList(page, sortBy, genre, mediaType);

  const { sorted, genresOptions, totalPages } = responseSorted;
  if (!sorted.length) {
    redirect(ctx, '/movies');
  }

  return {
    props: {
      movies: sorted, mediaType, totalPages: Math.min(totalPages, 10), genresOptions,
    },
  };
}

export default Movies;

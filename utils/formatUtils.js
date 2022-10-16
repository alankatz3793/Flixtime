const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getYearAndMonth(releaseDate) {
  let parsedDate = '';
  try {
    const releseDateObj = new Date(releaseDate);
    parsedDate = `${months[releseDateObj.getMonth()]}, ${releseDateObj.getFullYear()}`;
  } catch (err) {
    console.log('date error', err);
    parsedDate = releaseDate;
  }
  return parsedDate;
}

export function getYear(releaseDate) {
  let parsedDate = '';
  try {
    const releseDateObj = new Date(releaseDate);
    parsedDate = `${releseDateObj.getFullYear()}`;
  } catch (err) {
    console.log('date error', err);
    parsedDate = releaseDate;
  }
  return parsedDate;
}

export function formatMinutes(min) {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  if (hours > 0 && minutes > 0) {
    return `${hours}hr ${minutes}min`;
  }
  if (hours > 0) {
    return `${hours}hr`;
  }

  if (minutes > 0) {
    return `${minutes}min`;
  }
  return null;
}

export function getStarColor(rating) {
  if (rating < 5) {
    return '#f44336';
  }
  if (rating < 8) {
    return '#009fb9';
  }

  return '#0fbd0fde';
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

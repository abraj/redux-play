import searchYT from 'youtube-search';

// selectBook is an "action creator" (a function that creates an action)
// It needs to return an action (an object with 'type' property)
export function selectBook(book) {

  // Actions must have a 'type' property that indicates the type of action being performed.
  // The 'type' property should typically be defined as a string constant.
  const action = {
    type: 'BOOK_SELECTED',
    payload: book,
  };

  return action;
}

function searchYoutube() {
  const API_KEY = 'AIgRxjxw4K48QhjU98Ae7jqUGJnu9piF_sj6tDQ';
  const term = 'jsconf';
  const opts = {
    maxResults: 5,
    key: API_KEY,
  };

  return new Promise((resolve, reject) => {
    searchYT(term, opts, function (err, results) {
      err ? reject(err.message) : resolve(results);
    });
  });
}

export function fetchBooks() {
  const promise = searchYoutube();
  const action = {
    type: 'FETCH_BOOK',
    payload: promise,
  };
  return action;
}

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

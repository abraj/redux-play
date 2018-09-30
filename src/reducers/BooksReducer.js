export default function(state = [], action) {
  if (action.type === 'FETCH_BOOK') {
    if (!action.error) {
      const videos = action.payload;
      return videos.map(({ title, description }) => ({ title, pages: description.length }));
    } else {
      alert('[Error] API Key may be invalid!');
    }
  }
  return state;  
}

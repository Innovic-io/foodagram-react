export default class CommentsService {

  getComments() {
    return fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
  }
}

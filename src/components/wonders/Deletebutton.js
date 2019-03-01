const React = require('react');

//new funstion, needs work
function CommentForm ({ handleDelete }) {
  return (
    <button onClick={this.handleDelete} className='deleteButton'>🗑</button>
  );
}

export default CommentForm;

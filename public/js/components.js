var CommentList = React.createClass({
  render: function() {
    return(
      <div className="commentList">
        Hello, world! I am a react js comment list component!
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return(
      <div className="commentForm">
        Hello, world! I am a react js comment form component!
      </div>
    );
  }
});

var CommentBox = React.createClass({

  render: function(){
    return(
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }

});
React.render(
  <CommentBox />,
  document.getElementById('content')
);

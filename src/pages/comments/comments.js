import React, { useEffect, useState } from "react";
import "./comments.css";
import { getComments } from "../../services/commentsService";
import useFetch from "../../customHooks/useFetch";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";
  const hookResponse = useFetch(commentsUrl, null);

  // Fetch comments from the API
  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      const response = await fetch(commentsUrl);
      const data = await response.json();
      console.log(data);
      setComments(data);
      setIsLoading(false);
    };

    // fetchComments();
  }, []);

  // Fetch comments from the API using the service
  useEffect(() => {
    const fetchCommentsFromService = async () => {
      setIsLoading(true);

      const data = await getComments();
      setComments(data);
      setIsLoading(false);
    };

    // fetchCommentsFromService();
  }, []);

  // Fetch comments using the custom hook
  useEffect(() => {
    setIsLoading(true);

    if (hookResponse) {
      setComments(hookResponse.data);
    }

    setIsLoading(hookResponse.isLoading);
  }, [hookResponse]);

  return (
    <div className="comments">
      <h1>Comments</h1>
      {isLoading && <p>Loading...</p>}

      {comments &&
        comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </div>
        ))}
    </div>
  );
}

export default Comments;

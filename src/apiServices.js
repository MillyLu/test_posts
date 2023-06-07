import axios from "axios";

export const getAllPosts = async (postTitle) => {
  const response = postTitle
    ? await axios.get(
        `https://jsonplaceholder.typicode.com/posts?title=${postTitle}`
      )
    : await axios.get(`https://jsonplaceholder.typicode.com/posts`);

  return response.data;
};

export const getCommentsById = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return response.data;
};

export const getUserInfoById = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );
  return response.data;
};


export const getCommentsByUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  return response.data;
};

export const loading = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });

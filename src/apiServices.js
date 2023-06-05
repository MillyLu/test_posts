export const getAllPosts = async () => {  
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);  
  return response.json();
};

export const getPostByPage = async (pageNumber, postLimit) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${postLimit}`
  );
  return response.json();
};

export const getCommentsById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  return response.json();
};

export const getUserInfoById = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?id=${id}`
  );
  return response.json();
};

export const getCommentsByUser = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    return response.json();
  };

  export const getPostByTitle = async (postTitle) => {  
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${postTitle}`);  
    return response.json();
  };  

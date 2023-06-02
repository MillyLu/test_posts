export const getAllPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}

export const getPostByPage = async(pageNumber, postLimit) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${postLimit}`);
    return response.json();
}
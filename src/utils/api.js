const API_URL = "https://my-json-server.typicode.com/parnaa/demodb";

export async function fetchPosts() {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return await res.json();
}

export async function fetchPostById(id) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return await res.json();
}

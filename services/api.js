export const fetchInfluencers = async () => {
  const res = await fetch("https://randomuser.me/api/?results=20");
  const data = await res.json();

  return data.results.map((user) => ({
    id: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    email: user.email,
    image: user.picture.large,
    followers: Math.floor(Math.random() * 100000),
    engagement: (Math.random() * 10).toFixed(2),
  }));
};

export const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.slice(0, 5);
};
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getPosts } from "./redux/features/postSlice";

function App() {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  // const data = useSelector((state) => state.post);

  console.log("posts :", posts, "loading", loading);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return (
      <div className="App-header">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="App-header">
        {posts && posts.map((post) => <h2 key={post.id}>{post.title}</h2>)}
      </div>
    </div>
  );
}

export default App;

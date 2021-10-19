const posts = (state = { isLoading: true, posts: [] }, action) => {
  console.log(state.posts, "Create")
  switch (action.type) {
    case "FETCH_ALL": return {
      ...state,
      posts: action.payload.data,
    };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload.data] };
    case "UPDATE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    default:
      return state;
  }
}

export default posts

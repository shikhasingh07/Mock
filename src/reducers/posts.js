const posts = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case "FETCH": return {
      ...state,
      posts: action.payload.data,
    };
    case "CREATE":
      return { ...state, posts: [...state.posts, action.payload] };
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

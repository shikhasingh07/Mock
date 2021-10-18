import * as api from "../api/index.js";
export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const {
      data: { data },
    } = await api.fetchPosts();
    dispatch({
      type: "FETCH_ALL",
      payload: { data },
    });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error.message);
  }
}
export const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const { data } = await api.creatPost(post);

    dispatch({ type: "CREATE", payload: data });

    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
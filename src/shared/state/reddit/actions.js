import fetch from 'isomorphic-fetch';

import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
} from '../constants';

export const selectSubreddit = subreddit => ({ type: SELECT_SUBREDDIT, subreddit });

export const invalidateSubreddit = subreddit => ({ type: INVALIDATE_SUBREDDIT, subreddit });

export const requestPosts = subreddit => ({ type: REQUEST_POSTS, subreddit });

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now(),
  subreddit,
});

export const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
};

export const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];

  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
};

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit));
  }
};
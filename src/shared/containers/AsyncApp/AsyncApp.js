import React, { Component } from 'react';
import { connect } from 'react-redux';

import Picker from '../../components/Picker/Picker';
import Posts from '../../components/Posts/Posts';

import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit,
} from '../../state/reddit/actions';

type Props = {
  selectedSubreddit: ?string,
  posts: ?Array<any>,
  isFetching: ?boolean,
  lastUpdated: number,
  dispatch: Function,
};

class AsyncApp extends Component {
  props: Props;
  componentDidMount(): void {
    const { dispatch, selectedSubreddit } = this.props;

    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentDidUpdate(prevProps: Object, prevState: Object): void {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props;

      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleChange = nextSubreddit => {
    this.props.dispatch(selectSubreddit(nextSubreddit));
    this.props.dispatch(fetchPostsIfNeeded(nextSubreddit));
  };

  handleRefreshClick = e => {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;

    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  };

  render() {
    const {
      selectedSubreddit,
      posts,
      isFetching,
      lastUpdated,
    } = this.props;

    return (
      <div>
        <Picker 
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={[ 'reactjs', 'frontend' ]}
        />
        <p>
          { lastUpdated &&
              <span>
                Last updated at { new Date(lastUpdated).toLocaleTimeString()}.
                {' '}
              </span>
          }
          { !isFetching &&
              <a
                href='#'
                onClick={this.handleRefreshClick}
              >
                Refresh
              </a>
          }
        </p>
        { isFetching && posts.length === 0 &&
            <h2>Loading...</h2>
        }
        { !isFetching && posts.length === 0 &&
            <h2>Empty.</h2>
        }
        { posts.length > 0 &&
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
        }
      </div>
    );
  }
};

const mapStateToProps = state => {
  const { selectedSubreddit, postsBySubreddit } = state;

  const {
    isFetching,
    lastUpdated,
    items: posts,
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: [],
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated,
  }
};

export default connect(mapStateToProps)(AsyncApp);
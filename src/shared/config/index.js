// @flow

export const isProd = process.env.NODE_ENV === 'production';
export const WEB_PORT = process.env.PORT || 8000;
export const STATIC_PATH = '/static';
export const APP_NAME = 'Pure SSR';
export const HOME_PAGE_ROUTE = '/';
export const TODO_LIST_PAGE_ROUTE = '/todolist';
export const REDDIT_API_PAGE_ROUTE = '/reddit';

export const WDS_PORT = 7000

export const APP_CONTAINER_CLASS = 'js-app'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`
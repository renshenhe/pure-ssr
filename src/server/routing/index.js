import renderApp from '../renderApp';

export default (app: Object) => {
  app.get('*', (req, res) => {
    res.send(renderApp(req.url));
  });
}
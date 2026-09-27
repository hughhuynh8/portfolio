import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
export { publicPaths, getMetadata, siteOrigin } from './config/metadata';

export function render(path: string) {
  return renderToString(<StaticRouter location={path}><App /></StaticRouter>);
}

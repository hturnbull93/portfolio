import type { Config, Context } from '@netlify/edge-functions';

export default async (request: Request, context: Context) => {
  const slug = Netlify.env.get('REMOTE_PAGE_SLUG');
  const password = Netlify.env.get('REMOTE_PAGE_PASSWORD');

  if (!slug || !password) {
    return context.next();
  }

  const url = new URL(request.url);

  if (url.pathname !== `/${slug}`) {
    return context.next();
  }

  const authHeader = request.headers.get('authorization') ?? '';
  const [, encoded] = authHeader.split(' ');
  const decoded = encoded ? atob(encoded) : '';
  const providedPassword = decoded.slice(decoded.indexOf(':') + 1);

  if (providedPassword !== password) {
    return new Response('Authentication required.', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Restricted"' },
    });
  }

  return context.next();
};

export const config: Config = { path: '/*' };

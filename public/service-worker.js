self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('upload')) {
      const newRequest = new Request(
        event.request.url.replace('https://testrepo-sable.vercel.app', 'http://192.168.1.78:5000'),
        {
          method: event.request.method,
          headers: event.request.headers,
          body: event.request.body,
        }
      );
      event.respondWith(fetch(newRequest));
    }
  });
  
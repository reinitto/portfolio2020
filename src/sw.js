import { registerRoute, NavigationRoute } from "workbox-routing";
import { NetworkFirst, StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";

// eslint-disable-next-line
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) =>
    request.destination === "script" || request.destination === "style",
  new StaleWhileRevalidate({
    cacheName: "static-resources",
  })
);

// This assumes /app-shell.html has been precached.
// const navigationStrategy = new NetworkFirst({
//   cacheName: "cached-navigations",
//   plugins: [
//     // Any plugins, like `ExpirationPlugin`, etc.
//   ],
// });

// const navigationRoute = new NavigationRoute(strategy, {
//   // Optionally, provide a allow/denylist of RegExps to determine
//   // which paths will match this route.
//   // allowlist: [],
//   // denylist: [],
// });

const handler = createHandlerBoundToURL("/index.html", true);
const navigationRoute = new NavigationRoute(handler, {
  allowlist: [
    new RegExp("about"),
    new RegExp("projects"),
    new RegExp("contact"),
  ],
});
registerRoute(
  navigationRoute,
  new NetworkFirst({
    cacheName: "cached-navigations",
    //   plugins: [
    //     // Any plugins, like `ExpirationPlugin`, etc.
    //   ],
  })
);

registerRoute(
  // Cache image files.
  ({ request }) => request.destination === "image",
  // Use the cache if it's available.
  new NetworkFirst({
    // Use a custom cache name.
    cacheName: "image-cache",
    plugins: [
      new ExpirationPlugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  })
);

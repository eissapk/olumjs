module.exports = {
  dest: "build",
  src: ".pre-build",
  port: 8000,
  livereload: true,
  fallback: "/",
  comments: false,
  hash: 5,
  title: "Olum - The VanillaJS developer’s platform.",
  asyncAwait: false,
  https: false,
  favicon:"./public/favicon.png",
  template: "./public/index.html",
  serviceWorker: true,
  manifest: {
    name: "Olum",
    short_name: "Olum",
    description: "Olum - The VanillaJS developer’s platform.",
    background_color: "#ffffff",
    publicPath: "./",
    display: "standalone",
    orientation: "any",
    start_url: "index.html",
    theme_color: "#ffffff",
    icons: [
      {
        src: "./public/manifest.png",
        sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
      },
    ],
  },
};
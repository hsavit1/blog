// // next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const imagePlugins = withPlugins([
  [
    optimizedImages,
    {
      // these are the default values so you don't have to provide them if they are good enough for your use-case.
      // but you can overwrite them here with any valid value you want.
      inlineImageLimit: 8192,
      imagesFolder: "images",
      imagesName: "[name]-[hash].[ext]",
      optimizeImagesInDev: false,
      mozjpeg: {
        quality: 80
      },
      optipng: {
        optimizationLevel: 3
      },
      pngquant: false,
      gifsicle: {
        interlaced: true,
        optimizationLevel: 3
      },
      svgo: {
        // enable/disable svgo plugins here
      },
      webp: {
        preset: "default",
        quality: 75
      }
    }
  ]
]);

const path = require("path");

const rehypePrism = require("@mapbox/rehype-prism");
const rehypeReadme = require("./lib/rehype-readme");
const nextMDX = require("@zeit/next-mdx");

// only enable rehypeReadme for this file
// because the github relative path replacement
// might break things in other markdowns
const withGitHubMDX = nextMDX({
  extension: path.join(__dirname, "components", "docs", "docs", "docs.mdx"),
  options: {
    hastPlugins: [
      rehypePrism,
      [
        rehypeReadme,
        {
          repo: "hsavit1/blog",
          branch: "master",
          level: 4
        }
      ]
    ]
  }
});

const withMDX = nextMDX({
  extension: /\/(pages)\/(.+)\.mdx?$/,
  options: {
    hastPlugins: [rehypePrism]
  }
});

// const { mapping: showcaseMapping } = require('./showcase-manifest');
const webpack = require("webpack");

var config = {
  pageExtensions: ["jsx", "js", "mdx"],
  webpack: (config, { dev, isServer }) => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /highlight\.js[\/\\]lib[\/\\]languages$/,
        new RegExp(`^./(${["javascript", "json", "xml"].join("|")})$`)
      )
    );

    if (isServer && !dev) {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = { ...(await originalEntry()) };
        // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
        // entries['./scripts/build-rss.js'] = './scripts/build-rss.js';
        return entries;
      };
    }

    return config;
  }
  //   exportPathMap(defaultPathMap, { dev, dir, outDir }) {
  //     // for (const route of Object.keys(showcaseMapping)) {
  //     //   defaultPathMap[`/showcase/${route}`] = {
  //     //     page: '/showcase',
  //     //     query: { item: route, from: 'url' }
  //     //   };
  //     // }

  //     if (!dev) {
  //       const generateRSS = require('./.next/server/scripts/build-rss.js')
  //         .default;
  //       generateRSS(outDir);
  //     }

  //     return defaultPathMap;
  //   }
};

// if (process.env.BUNDLE_ANALYZE) {
//   const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
//   config = withBundleAnalyzer({
//     analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
//     analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
//     bundleAnalyzerConfig: {
//       server: {
//         analyzerMode: 'static',
//         reportFilename: '../../bundles/server.html'
//       },
//       browser: {
//         analyzerMode: 'static',
//         reportFilename: '../bundles/client.html'
//       }
//     },
//     ...config
//   });
// }

module.exports = withGitHubMDX(withMDX(config)); //TODO: Also export the images optimizer

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /background-image-on-load/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }
const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "src", "index.js"),
        rules: [
          {
            enforce: "pre",
            use: { // 这里去掉use这一层也是可以的，因为loader和options就相当于use.loader和use.options。 写在这里只是为了表明，enforce是在rules这一级下面，跟use平级
              loader: path.resolve(__dirname, "loader"),
              options: {
                name: "a2",
              },
            }
          },
          {
            enforce: "pre",
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "a1",
            },
          },
          {
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "b2",
            },
          },
          {
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "b1",
            },
          },
          {
            enforce: "post",
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "d2",
            },
          },
          {
            enforce: "post",
            loader: path.resolve(__dirname, "loader"),
            options: {
              name: "d1",
            },
          },
        ],
      },
    ],
  },
};

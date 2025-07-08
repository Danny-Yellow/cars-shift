import type webpack from "webpack";

import "webpack-dev-server";

import type { BuildOptions } from "./@types/options";

import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;

  const isDev = mode === "development";

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name]-[contenthash].js",
      path: paths.output,
      clean: true,
      publicPath: isDev ? "/" : "/cars-shift/",
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(options),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev && "inline-source-map",
  };
};

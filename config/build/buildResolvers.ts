import type { Configuration } from "webpack";

import type { BuildOptions } from "./@types/options";

export const buildResolvers = (
  options: BuildOptions
): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": options.paths.src,
    },
  };
};

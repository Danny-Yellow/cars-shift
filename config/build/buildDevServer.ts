import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import type { BuildOptions } from "./@types/options";

export const buildDevServer = ({
  port,
}: BuildOptions): DevServerConfiguration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
};

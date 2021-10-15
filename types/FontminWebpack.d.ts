declare module 'fontmin-webpack' {
  import type { Compiler, WebpackPluginInstance } from 'webpack';

  interface Options {
    autodetect?: boolean;
    glyphs?: string[];
  }

  class FontminPlugin implements WebpackPluginInstance {
    constructor(options?: Options)
    apply: (compiler: Compiler) => void;
  }

  export default FontminPlugin;
}
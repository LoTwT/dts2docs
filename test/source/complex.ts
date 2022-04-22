export interface ComplexConfig {
  /**
   * Include globs for test files
   *
   * @default ['**\/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
   */
  include?: string[]
  /**
   * Exclude globs for test files
   * @default ['node_modules', 'dist', '.idea', '.git', '.cache']
   */
  exclude?: string[]
  /**
   * Include globs for in-source test files
   *
   * @default []
   */
  includeSource?: string[]
  /**
   * Handling for dependencies inlining or externalizing
   */
  deps?: {
    /**
     * Externalize means that Vite will bypass the package to native Node.
     *
     * Externalized dependencies will not be applied Vite's transformers and resolvers.
     * And does not support HMR on reload.
     *
     * Typically, packages under `node_modules` are externalized.
     */
    external?: (string | RegExp)[]
    /**
     * Vite will process inlined modules.
     *
     * This could be helpful to handle packages that ship `.js` in ESM format (that Node can't handle).
     */
    inline?: (string | RegExp)[]
    /**
     * Interpret CJS module's default as named exports
     *
     * @default true
     */
    interopDefault?: boolean
    /**
     * When a dependency is a valid ESM package, try to guess the cjs version based on the path.
     * This will significantly improve the performance in huge repo, but might potentially
     * cause some misalignment if a package have different logic in ESM and CJS mode.
     *
     * @default false
     */
    fallbackCJS?: boolean
  }
  /**
   * Base directory to scan for the test files
   *
   * @default `config.root`
   */
  dir?: string
  /**
   * Register apis globally
   *
   * @default false
   */
  globals?: boolean
  /**
   * Update snapshot
   *
   * @default false
   */
  update?: boolean
  /**
   * Watch mode
   *
   * @default true
   */
  watch?: boolean
  /**
   * Project root
   *
   * @default process.cwd()
   */
  root?: string
  /**
   * diff output length
   */
  outputTruncateLength?: number
  /**
   * Enable multi-threading
   *
   * @default true
   */
  threads?: boolean
  /**
   * Maximum number of threads
   *
   * @default available CPUs
   */
  maxThreads?: number
  /**
   * Minimum number of threads
   *
   * @default available CPUs
   */
  minThreads?: number
  /**
   * Default timeout of a test in milliseconds
   *
   * @default 5000
   */
  testTimeout?: number
  /**
   * Default timeout of a hook in milliseconds
   *
   * @default 10000
   */
  hookTimeout?: number
  /**
   * Silent mode
   *
   * @default false
   */
  silent?: boolean
  /**
   * Path to setup files
   */
  setupFiles?: string | string[]
  /**
   * Path to global setup files
   */
  globalSetup?: string | string[]
  /**
   * Pattern of file paths to be ignore from triggering watch rerun
   *
   * @default ['**\/node_modules\/**', '**\/dist/**']
   */
  watchIgnore?: (string | RegExp)[]
  /**
   * Isolate environment for each test file
   *
   * @default true
   */
  isolate?: boolean
  /**
   * run test names with the specified pattern
   */
  testNamePattern?: string | RegExp
  /**
   * Will call `.mockClear()` on all spies before each test
   * @default false
   */
  clearMocks?: boolean
  /**
   * Will call `.mockReset()` on all spies before each test
   * @default false
   */
  mockReset?: boolean
  /**
   * Will call `.mockRestore()` on all spies before each test
   * @default false
   */
  restoreMocks?: boolean
  /**
   * Enable Vitest UI
   * @internal WIP
   */
  ui?: boolean
  /**
   * Open UI automatically.
   *
   * @default true
   */
  open?: boolean
  /**
   * Base url for the UI
   *
   * @default '/__vitest__/'
   */
  uiBase?: string
  /**
   * Determine the transform method of modules
   */
  transformMode?: {
    /**
     * Use SSR transform pipeline for the specified files.
     * Vite plugins will receive `ssr: true` flag when processing those files.
     *
     * @default [/\.([cm]?[jt]sx?|json)$/]
     */
    ssr?: RegExp[]
    /**
     * First do a normal transform pipeline (targeting browser),
     * then then do a SSR rewrite to run the code in Node.
     * Vite plugins will receive `ssr: false` flag when processing those files.
     *
     * @default other than `ssr`
     */
    web?: RegExp[]
  }
  /**
   * Format options for snapshot testing.
   */
  snapshotFormat?: PrettyFormatOptions
  /**
   * Resolve custom snapshot path
   */
  resolveSnapshotPath?: (path: string, extension: string) => string
}

declare type CompareKeys = ((a: string, b: string) => number) | undefined
declare type ThemeReceived = {
  comment?: string
  content?: string
  prop?: string
  tag?: string
  value?: string
}

interface PrettyFormatOptions {
  callToJSON?: boolean
  compareKeys?: CompareKeys
  escapeRegex?: boolean
  escapeString?: boolean
  highlight?: boolean
  indent?: number
  maxDepth?: number
  min?: boolean
  printBasicPrototype?: boolean
  printFunctionName?: boolean
  theme?: ThemeReceived
}

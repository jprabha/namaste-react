# Namaste React

# npm

- It doesn't have full form. It doesn't stand for node package manager.

- npm manages packages i.e. it is a package manager for Node.js packages

- package.json is the configuration for npm. It keeps track of what version of package which is installed in your system.

# Bundler

- Our whole code needs to be bundled, compressed, cleaned, compressed so that it can be pushed to production. Bundlers do this.

- Bundlers are tools that help you optimize and organize your web development projects by transforming, bundling, and minifying your code and assets.

# What is `.parcel-cache`

- cache folder (or . parcel-cache in parcel v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

# What is `npx`?

- NPX stands for Node Package eXecute.

- It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

- npx referes to executing a package.

# What is difference between `dependencies` vs `devDependencies`?

- Dependencies are the crucial packages required for your application to function in a production environment.

- devDependencies are tools and utilities that aid in the development process but are not needed in production.

# What is Tree Shaking?

- Tree shaking is a process that eliminates unused code from your application bundle.

- It is a form of dead code elimination that aims to reduce the size of the final JavaScript bundle sent to the browser.

# What is HMR (Hot Module Replacement)?

- Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh.

-This means that application state can be retained as you change small things. Parcel's HMR implementation supports both JavaScript and CSS assets.

# What is `.gitignore`? What should we add and not add into it?

- A gitignore file specifies intentionally untracked files that Git should ignore.

^2.12.0 - Symbol is known as caret. It updates minor version of package.
~ (Tilde) - It updates major version of package.

package-lock.json - It keeps track of exact version of package which is installed in your system.

If we have package.json and package-lock.json, we an recreate the node_modules.

Transitive dependencies - Dependencies can have its own dependencies and so on.. This is called transitive dependencies.

CDN links are not preferred way to bring React into our code.

# Parcel

- Hot Module Replacement (HMR)
- File Watcher Algorithm - C++
- Bundling
- Minify Code
- Cleaning our code
- Dev and production build
- Super fast build algorithm
- Image Optimization
- Caching while development
- Compression
- Compatible with old browser versions
- Https on dev
- Consistency Hashing Algorithm
- Zero Config
- Tree Shaking

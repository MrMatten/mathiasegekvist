
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mathiasegekvist/go/src/mathiasegekvist/.cache/dev-404-page.js")),
  "component---src-pages-404-tsx": preferDefault(require("/Users/mathiasegekvist/go/src/mathiasegekvist/src/pages/404.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/mathiasegekvist/go/src/mathiasegekvist/src/pages/index.tsx"))
}


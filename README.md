# Next.js 15 Default Export Error

This repository demonstrates a breaking change in Next.js 15 related to page component exports.  In Next.js 13, the following code worked correctly. However, upgrading to Next.js 15 results in an error because the page component is not exported as a default export. This is a common issue when upgrading from older versions of Next.js.

## Bug
The `pages/index.js` file contains a simple Next.js page component that lacks the required `export default` statement.
```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a Next.js app.</p>
    </div>
  );
}
```
Simply adding the `export default` keyword before the `Home` function resolves the issue.  This ensures that the page component is correctly exported and recognized by Next.js 15.
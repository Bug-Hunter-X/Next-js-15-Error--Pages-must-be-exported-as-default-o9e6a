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
This code works fine in Next.js 13, but when upgraded to Next.js 15, it throws an error: `Error: Pages must be exported as default`.
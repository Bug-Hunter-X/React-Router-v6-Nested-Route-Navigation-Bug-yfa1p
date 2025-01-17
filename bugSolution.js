```javascript
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  //Clear search params on mount
  setSearchParams({});
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}
```
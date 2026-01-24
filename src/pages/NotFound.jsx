import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-3">Page not found</h1>
      <p className="text-gray-700 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link className="underline" to="/">Go back home</Link>
    </div>
  );
}

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="m-auto px-6 py-12 text-center font-semibold">
      <p className="text-lg text-gray-800">404</p>
      <h1 className="mt-4 text-4xl tracking-tight text-balance text-gray-900">
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-md bg-gray-800 px-3 py-2 text-sm text-white shadow-md hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;

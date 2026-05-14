import { useRouteError, useNavigate } from "react-router";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-blue-500 mb-4">
          {error?.status || "Oops!"}
        </h1>

        <p className="text-2xl text-white font-semibold mb-2">
          Something went wrong
        </p>

        {error?.status === 404 && (
          <p className="text-gray-400 mb-6">
            The page you're looking for doesn't exist.
          </p>
        )}

        {error?.status === 500 && (
          <p className="text-gray-400 mb-6">
            Server error. Please try again later.
          </p>
        )}

        {error?.message && (
          <p className="text-red-400 mb-6">Error: {error.message}</p>
        )}

        <button
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default Error;

export default function PostNotification() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg p-6 mt-10 rounded-xl sm:mt-14 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-700">
        Post a Notification
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write message..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Post
        </button>
      </form>
    </div>
  );
}

function VolunteerForm() {

  return (

    <form className="max-w-lg mx-auto p-8">

      <input
        type="text"
        placeholder="Name"
        className="w-full border p-3 mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 mb-4"
      />

      <button
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Join Us
      </button>

    </form>
  );
}

export default VolunteerForm;
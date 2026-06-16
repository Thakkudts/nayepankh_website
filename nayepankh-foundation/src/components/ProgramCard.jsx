function ProgramCard({ title, desc }) {
  return (

    <div className="shadow-lg p-6 rounded-lg">

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-gray-600">
        {desc}
      </p>

    </div>
  );
}

export default ProgramCard;
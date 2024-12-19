import Snowfall from 'react-snowfall';

export function AssignmentDisplay({ assignments }) {
  return (
    <>
    <Snowfall />
    <div className="relative p-6 bg-white bg-opacity-90 rounded-xl shadow-2xl max-w-lg mx-auto mt-12 z-10">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">Attributions des Cadeaux</h2>
      <ul className="space-y-4 transition-all duration-500">
        {assignments.map((assignment, index) => (
          <li key={index} className="flex justify-between items-center bg-green-100 p-4 rounded-lg shadow transition-transform transform hover:scale-105">
            <span className="font-south text-lg font-semibold">{assignment.giver}</span>
            <span className="font-south text-lg">offre à</span>
            <span className="font-south text-lg font-semibold">{assignment.receiver}</span>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

'use client';

import { useState } from 'react';

const Home = () => {
  const [workoutName, setWorkoutName] = useState('');
  const [sets, setSets] = useState<string[]>([]);

  const addSet = () => {
    setSets([...sets, '']);
  };

  const deleteSet = (index: number) => {
    const newSets = sets.filter((_, i) => i !== index);
    setSets(newSets);
  };

  const updateSet = (index: number, value: string) => {
    const newSets = [...sets];
    newSets[index] = value;
    setSets(newSets);
  };

  const saveWorkout = (sets: string[]) => {
    for(const i of sets){
      console.log(i);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">Workout Tracker</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Workout Name</label>
          <input
            type="text"
            value={workoutName}
            onChange={(e) => setWorkoutName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter workout name"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">Sets</h3>
          {sets.map((set, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={set}
                onChange={(e) => updateSet(index, e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mr-2"
                placeholder={`Set ${index + 1}`}
              />
              <button
                onClick={() => deleteSet(index)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          ))}
          <button
            onClick={addSet}
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Add Set
          </button>
          <button
            onClick={() => saveWorkout(sets)}
            className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Save Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

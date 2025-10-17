import { Play } from "lucide-react";

export const FeatureDemoModal = ({ feature }) => {
  return (
    <div className="text-center">
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-white font-semibold text-xl mb-3">{feature.title}</h3>
      <p className="text-gray-300 mb-4">{feature.description}</p>
      <div className="bg-gray-800 rounded-lg p-4 mb-4">
        <div className="text-sm text-gray-400 mb-2">Demo Preview:</div>
        <div className="bg-gray-700 rounded h-32 flex items-center justify-center">
          <Play className="w-8 h-8 text-blue-400" />
        </div>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
        Try Full Demo
      </button>
    </div>
  );
};

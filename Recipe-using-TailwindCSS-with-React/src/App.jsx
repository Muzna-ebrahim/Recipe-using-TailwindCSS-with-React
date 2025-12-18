function App() {
  return (
      <div className="bg-[#808000] min-h-screen p-6 text-center">
        <h1 className="text-2xl font-bold !text-black font-serif underline" style={{color: '#000000'}}>
          Chicken Sandwich Recipe
        </h1>

        <p className="text-gray-600 mt-2">
          A classic chicken sandwich recipe perfect for beginners.
        </p>

        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li>Bread</li>
          <li>Tomatoes</li>
          <li>Minced Chicken</li>
          <li>Onion</li>
          <li>Seasoning</li>
          <li>Lettuce</li>
          <li>Cheese</li>
        </ul>
        
      </div>
  );
}

export default App;

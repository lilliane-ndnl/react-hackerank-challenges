import React, { useState } from 'react';

const ItemListManager = () => {
  // State to store the list of items
  const [items, setItems] = useState([]);
  
  // State to store the current input value
  const [inputValue, setInputValue] = useState('');
  
  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  // Handle adding a new item
  const handleAddItem = () => {
    // Check if input is not empty
    if (inputValue.trim() !== '') {
      // Add new item to the items array
      setItems([...items, inputValue]);
      // Clear the input field
      setInputValue('');
    }
  };
  
  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="bg-gray-800 p-4 mb-6 flex items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-black flex items-center justify-center mr-2">
            <span className="text-white font-bold">H</span>
            <span className="h-full w-2 bg-green-500"></span>
          </div>
          <h1 className="text-green-500 text-xl font-medium">Item List Manager</h1>
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-6">Item List</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter item"
          className="w-full p-3 border border-gray-300 rounded bg-gray-100 mb-4"
          data-testid="input-field"
        />
        
        <button
          onClick={handleAddItem}
          className="w-full p-3 bg-green-500 text-white font-medium rounded hover:bg-green-600"
          data-testid="add-button"
        >
          Add Item
        </button>
      </div>
      
      <ul className="list-disc pl-5" data-testid="item-list">
        {items.map((item, index) => (
          <li key={index} className="mb-2" data-testid="list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;

"use client";
import React, { useState } from 'react';
import axios from 'axios';

function Page() {
  const [id, setId] = useState("");
  const [content, setContent] = useState("");
  const [result, setResult] = useState(null);
  const [idToDelete, setidToDelete] = useState("")

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/database/getData');
      setResult(response.data.fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const insertData = async () => {
    try {
      if (id !== undefined && content !== undefined && id !== null && content !== null) {
        const response = await axios.post('/api/database/insertData', { id, content });
        console.log(response.data);
        fetchData(); // Refresh data after insertion
      } else {
        console.error('ID or content is undefined or null');
      }
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  const updateData = async () => {
    try {
      if (id !== undefined && content !== undefined && id !== null && content !== null) {
        const response = await axios.post('/api/database/updateData', { id, content });
        console.log(response.data);
        fetchData(); // Refresh data after updating
      } else {
        console.error('ID or content is undefined or null');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const deleteData = async () => {
    try {
      if (idToDelete !== undefined && idToDelete !== null) {
        const response = await axios.post('/api/database/deleteData', { id: idToDelete });
        console.log(response.data);
        fetchData(); // Refresh data after deletion
      } else {
        console.error('ID to delete is undefined or null');
      }
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };


  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-purple-700">ID:</label>
        <input
          className="border-2 text-black border-gray-500 rounded px-4 py-2 w-full"
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-purple-700">Content:</label>
        <input
          className="border-2 text-black border-gray-500 rounded px-4 py-2 w-full"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={insertData}
      >
        Insert Data
      </button>
      
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        Fetch Data
      </button>
      <button
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 ml-2 rounded"
        onClick={updateData}
      >
        Update Data
      </button>
      
      <hr className='mt-5'/>
      <input
          className="border-2 text-black border-gray-500 rounded px-4 py-2 w-full mt-5 mb-4"
          type="text"
          value={idToDelete}
          onChange={(e) => setidToDelete(e.target.value)}
        />
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={deleteData}
      >
        Delete Data
      </button>
      

      <div className="mt-4">
        {result && result.length > 0 ? (
          <table className="table-auto border-collapse w-full">
            <thead>
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Content</th>
              </tr>
            </thead>
            <tbody>
              {result.map((item) => (
                <tr key={item.id}>
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-white">No data available</p>
        )}
      </div>

      <h2 className='text-center mt-5'>Raw Data</h2>
      <div className="mt-4 text-white">{JSON.stringify(result)}</div>

    </div>
    
  );
}

export default Page;

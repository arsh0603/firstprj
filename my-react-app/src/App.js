// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [id, setId] = useState('');
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null);
//     setData(null);
//     try {
//       const response = await fetch(`http://localhost:8000/api/fetch-details/?id=${id}`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError(error.toString());
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Fetch Details</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             placeholder="Enter ID"
//           />
//           <button type="submit">Submit</button>
//         </form>
//         {error && <p className="error">{error}</p>}
//         {data && (
//           <table>
//             <thead>
//               <tr>
//                 {Object.keys(data).map((key) => (
//                   <th key={key}>{key}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 {Object.values(data).map((value, index) => (
//                   <td key={index}>{value}</td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         )}
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [id1, setId1] = useState('');
  const [id2, setId2] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setData(null);
    
    try {
      const response = await fetch(`http://localhost:8000/api/fetch-details/?id1=${id1}&id2=${id2}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      
      setData(result);
    } catch (error) {
      setError(error.toString());
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Compare Run Details</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={id1}
            onChange={(e) => setId1(e.target.value)}
            placeholder="Enter first ID"
          />
          <input
            type="text"
            value={id2}
            onChange={(e) => setId2(e.target.value)}
            placeholder="Enter second ID"
          />
          <button type="submit">Submit</button>
        </form>
        {error && <p className="error">{error}</p>}
        {data && (
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>ID 1: {id1}</th>
                <th>ID 2: {id2}</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data.id1).map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{data.id1[key]}</td>
                  <td>{data.id2[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </header>
    </div>
  );
}

export default App;

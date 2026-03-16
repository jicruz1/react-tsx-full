import React, { useState, useEffect } from 'react'

// const Autocomplete: React.FC = () => {
//   const [nombre, setNombre] = useState('');
//   const [cocktails, setCocktails] = useState([]);

// useEffect(() => {
//   if (nombre.length > 3) {
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombre}`)
//       .then(resp => resp.json())
//       .then(({drinks}) => {
//          setCocktails(() => drinks || [])
//       })
//   }
// }, [nombre]);

// const listaCocktails = cocktails.map(c => <li key={c.idDrink}>{c.strDrink}</li>);

//     return (
//       <div>
//         <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
//         <ul>
//           {listaCocktails}
//         </ul>
//       </div>
//     )
// }

// export default Autocomplete
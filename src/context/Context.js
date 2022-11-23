// import React, { useState } from "react";
// import { Menu } from "../components/Item";
// import "./Context.css";

// const Context = ({ search }) => {
//   const [data, setData] = useState(Menu);
//   const filterResult = ({ search }) => {
//     const result = Menu.filter((curData) => {
//       return curData.cat === search;
//     });
//     setData(result);
//   };
//   return (
//     <div className="Menu">
//       {data.map((data) => {
//         return (
//           <div key={data.id}>
//             <div className="card-header">
//               <img src={data.img}></img>
//             </div>
//             <div className="card-body">
//               <h3>{data.name}</h3>
//               <span>${data.price}</span>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Context;

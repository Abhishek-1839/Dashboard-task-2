import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Appliances.css";
import SearchPagination from "./SearchPagination";

const AppliancesTable = () => {
  const [appliances, setAppliances] = useState([]);
  const [filteredAppliances, setFilteredAppliances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/appliances");
        const data = response.data;

        const appliancesData = Array.isArray(data) ? data : Array.isArray(data.appliances) ? data.appliances : [];
        setAppliances(appliancesData);
        setFilteredAppliances(appliancesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setAppliances([]);
        setFilteredAppliances([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="device-table-container">
      <SearchPagination data={appliances} setFilteredData={setFilteredAppliances} />
      <table className="device-table">
        <thead>
          <tr>
            <th>Device Serial</th>
            <th>Location</th>
            <th>Bandwidth</th>
            <th>Status</th>
            <th>Download Status</th>
            <th>OS Version</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppliances.map((appliance) => (
            <tr key={appliance.serialNo}>
              <td>{appliance.serialNo}</td>
              <td>
                {appliance.theatreName}
                <br />
                <span className="sub-location">
                  {appliance.location.city}, {appliance.location.state}, {appliance.location.country}
                </span>
              </td>
              <td>
                {appliance.bandwidth}
                <br />
                <span className="sub-bandwidth">{appliance.avgBandwidth}</span>
              </td>
              <td>
                <span
                  className={`status-indicators ${appliance.deviceStatus.toLowerCase()}-indicator`}
                ></span>
                <span className={`status ${appliance.deviceStatus}`}>
                  {appliance.deviceStatus}
                </span>
              </td>
              <td>
                <span
                  className={`download-status ${appliance.downloadStatus.toLowerCase()}-indicator`}
                ></span>
                <span className={`download ${appliance.downloadStat}`}>
                  {appliance.downloadStatus}
                </span>
              </td>
              <td>{appliance.osVersion}</td>
              <td>
                <button className="view-button">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppliancesTable;
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const AppliancesTable = () => {
//   const [appliances, setAppliances] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:9000/appliances");
//         const data = response.data;
//         const appliancesData = Array.isArray(data) ? data : (Array.isArray(data.appliances) ? data.appliances : []);

//         setAppliances(appliancesData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setAppliances([]);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="device-table-container">
//       <SearchPagination data={appliances} setFilteredData={setFilteredAppliances} />
//       <table className="device-table">
//         <thead>
//           <tr>
//             <th>Device Serial</th>
//             <th>Location</th>
//             <th>Bandwidth</th>
//             <th>Status</th>
//             <th>Download Status</th>
//             <th>OS Version</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appliances.map((appliance) => (
//             <tr key={appliance.serialNo}>
//               <td>{appliance.serialNo}</td>
//               <td>
//                 {appliance.theatreName}
//                 <br />
//                 <span className="sub-location">
//                   {appliance.location.city}, {appliance.location.state}, {appliance.location.country}
//                 </span>
//               </td>
//               <td>
//                 {appliance.bandwidth}
//                 <br />
//                 <span className="sub-bandwidth">{appliance.avgBandwidth}</span>
//               </td>
//               <td>
//                 <span
//                   className={`status-indicators ${appliance.deviceStatus.toLowerCase()}-indicator`}
//                 ></span>
//                 <span className={`status ${appliance.deviceStatus}`}>
//                   {appliance.deviceStatus}
//                 </span>
//               </td>
//               <td>
//                 <span
//                   className={`download-status ${appliance.downloadStatus.toLowerCase()}-indicator`}
//                 ></span>
//                 <span className={`download ${appliance.downloadStat}`}>
//                   {appliance.downloadStatus}
//                 </span>
//               </td>
//               <td>{appliance.osVersion}</td>
//               <td>
//                 <button className="view-button">View</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AppliancesTable;

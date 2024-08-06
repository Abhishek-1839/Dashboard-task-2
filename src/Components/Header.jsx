import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css"

const Header = () => {
  const [appliances, setAppliances] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9000/appliances");
        const data = response.data;
        console.log("Fetched data:", data);

        if (Array.isArray(data)) {
          setAppliances(data);
        } else {
          console.error("Data fetched is not an array:", data);
          const transformedData = Array.isArray(data.appliances)
            ? data.appliances
            : [];
          setAppliances(transformedData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setAppliances([]);
      }
    };

    fetchData();
  }, []);

  return (
    <table className="device-table">
      <thead>
        <tr>
          <th>Device Serial</th>
          <th>Location</th>
          <th>Bandwidth</th>
          <th>Status</th>
          <th>Download Status</th>
          <th>OS Version</th>
        </tr>
      </thead>
      <tbody>
        {appliances?.map((appliance) => (
          <tr key={appliance.serialNo}>
            <td>{appliance.serialNo}</td>
            <td>
              {appliance.theatreName}
              <br />
              <br />
              <span className="sub-location">
                {appliance.location.city}, {appliance.location.state},{" "}
                {appliance.location.country}
              </span>
            </td>
            <td>
              {appliance.bandwidth}
              <br />
              <br />
              <span className="sub-bandwidth">{appliance.avgBandwidth}</span>
            </td>
            <td>
              <span
                className={`status-indicators ${appliance.deviceStatus.toLowerCase()}-indicator`}
              ></span>
              <span
                className={`status ${appliance.deviceStatus}`}
              >
                {appliance.deviceStatus}
              </span>
            </td>
            <td>
              <span
                className={`download-status ${appliance.downloadStatus.toLowerCase()}-indicator`}
              ></span>
              <span
                className={`download ${appliance.downloadStat}`}
              >
                {appliance.downloadStatus}
              </span>
            </td>
            <td>{appliance.osVersion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Header;

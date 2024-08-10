import storageIcon from "../assets/pie-chart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faFileAlt } from "@fortawesome/free-solid-svg-icons";


export const HeaderCard = ({ appliance }) => {
    if (!appliance) {
        return <div>Loading...</div>;
    }

    return (
        <div className="header">
            <div className="header-content">
                <h1>{appliance.serialNo}</h1>
                <p className="theatre-name">{appliance.theatreName}</p>
                <p className="theatre-location">
                    {appliance.location.city}, {appliance.location.state},{" "}
                    {appliance.location.country}
                </p>
                <div className="status-bar">
                    <span className="status-text">
                        <span
                            className={`status-indicator ${appliance.deviceStatus.toLowerCase()}`}
                        ></span>     
                        {appliance.deviceStatus}
                    </span>
                    <span className="storage-text">
                        <span className="storage-indicator">
                            <img
                                src={storageIcon}
                                alt="Storage Icon"
                                style={{ width: "12px", height: "12px" }}
                            />
                        </span>
                        {appliance.storage}
                    </span>
                </div>
                <div className="bottom-line"></div>
            </div>
            <div className="header-actions">
                <button className="action-button">
                    <FontAwesomeIcon icon={faArrowTrendUp} /> Speedtest
                </button>
                <button className="action-button">
                    <FontAwesomeIcon icon={faFileAlt} /> Logs
                </button>
            </div>
            <div className="tabs">
                <button className="active">Details</button>
                <button>Content</button>
                <button>Bandwidth</button>
            </div>
        </div>
    );
};

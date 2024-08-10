import React from 'react'
import "./Appliances.css";

const StatusSummary = () => {
    return (
        <div className="device-status-summary">
            <span className="failed">1 Failed</span>
            <span className="cancelled">1 Cancelled</span>
            <span className="scheduled">1 Scheduled</span>
            <span className="downloading">14 Downloading</span>
            <span className="downloaded">32 Downloaded</span>
        </div>
    );

}

export default StatusSummary

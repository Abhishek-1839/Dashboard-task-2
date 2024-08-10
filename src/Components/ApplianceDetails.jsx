import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ApplianceDetails() {
    const { id } = useParams();
    const [appliance, setAppliance] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        axios.get(`http://localhost:9000/appliances/${id}`)
            .then(response => {
                setAppliance(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching data: {error.message}</div>;
    if (!appliance) return <div>No device found</div>;

    return (
        <div>
            
        </div>
    );
}

export default ApplianceDetails;

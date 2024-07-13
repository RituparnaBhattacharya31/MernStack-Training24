import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData()
    }, [url]);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data)
            setLoading(false);
            setData(response.data);
        } catch (error) {
            setLoading(false);
            setError(error)
        }
    }

    return { data, loading, error };
}

export default useFetch;
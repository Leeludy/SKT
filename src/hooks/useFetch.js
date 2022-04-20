
import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3030';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((res) => {
                if (res.statusText !== "OK") {
                    throw new Error(res.statusText);
                }
                setData(res.data);
            })
            .catch((err) => {
                if (err.response) {
                    // Request made and server responded
                    setError(`Sorry: ${err.message} - Please try again later.`);
                setError(err);
            } else if (err.request) {
                    setError('Sorry: Server is not responding - Please try again later.');

            } else {
                    // The request was made but no response was received
                    // console.log(err.data);
            }
            setError(`Sorry: ${err.message} - Please try again later.`);
            
        })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);


    return { data, loading, error };
}

export default useFetch;
import { useState,useCallback } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        
        setProcess('loading');
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }
            const response = await fetch(url, { method, body, headers });
            const data = await response.json();
            if (!response.ok) {
                setProcess('error');
                throw new Error(data.message || 'Something went wrong');
            }
    
            return data;
        } catch (e) {
            setProcess('error');
            throw e;
        }
    }, []);

    const clearError = useCallback(() => { setProcess('loading');}, []);

    return { request, clearError, process, setProcess };
}
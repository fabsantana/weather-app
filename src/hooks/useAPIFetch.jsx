import React from 'react';

const useAPIFetch = (API_URL) => {
  const [json, setJson] = React.useState();

  if (typeof API_URL !== 'string') {
    throw new Error('useAPIFetch paramater must be a string');
  } else {
    React.useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();

        setJson(data);
      };

      fetchData()
      
    }, [API_URL]);

    return json;
  }
  
};

export default useAPIFetch;

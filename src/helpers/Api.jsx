import axios from 'axios';
import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:8089';

const api = axios.create({
  baseURL: BASE_URL,
});

export const useFetchEmployeeDetails = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await api.get('/employees');
        setEmployeeData(response.data);
        console.log(employeeData)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching employee details:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchEmployeeDetails();

  }, []);

  return { employeeData, loading, error };
};


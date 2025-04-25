import axios from 'axios';

export const fetchLowesReport = async (
  productId: string,
  startDate: string,
  endDate: string
) => {
  const response = await axios.get('/api/mock-lowes-report', {
    params: {
      productId,
      startDate,
      endDate,
    },
  });

  return response.data;
};

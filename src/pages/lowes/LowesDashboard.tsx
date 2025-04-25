import { useState } from 'react';
import ProductSelector from '../../components/ProductSelector';
import DateRangePicker from '../../components/DateRangePicker';
import { fetchLowesReport } from '../../services/lowesService';

export default function LowesDashboard() {

  const [reportData, setReportData] = useState<
    { store: string; qty:number; sales: number }[]
    >([]);

  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [dateRange, setDateRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({ startDate: null, endDate: null });

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product); // ✅ You forgot to set the selected product!
    console.log('Selected product:', product);
  };

  const handleDateRange = ({
    startDate,
    endDate,
  }: {
    startDate: Date | null;
    endDate: Date | null;
  }) => {
    setDateRange({ startDate, endDate });
    console.log('Selected range:', startDate, endDate);
  };

  const handleSubmit = async () => {
    if (!selectedProduct || !dateRange.startDate || !dateRange.endDate) {
      alert('Please select product and both dates.');
      return;
    }

    const start = dateRange.startDate.toISOString().split('T')[0];
    const end = dateRange.endDate.toISOString().split('T')[0];

    console.log('Fetching data for: ');
    console.log('Product:', selectedProduct);
    console.log('Date Range:', start, '→', end);

    try {
      const result = await fetchLowesReport(selectedProduct, start, end);
      console.log('📦 Mock API result:', result);
      setReportData(result.report);
      alert(`Got ${result.report.length} records from mock API!`);
    } catch (error) {
      console.error('API error:', error);
      alert('Failed to fetch report');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">📦 Lowe’s Product Tracker</h1>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <ProductSelector onSelect={handleProductSelect} />
        <DateRangePicker onRangeChange={handleDateRange} />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Fetch Report
      </button>

      {reportData.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">📊 Report Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-300">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">Store</th>
                  <th className="px-4 py-2 border border-gray-300">Quantity</th>
                  <th className="px-4 py-2 border border-gray-300">Sales</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="px-4 py-2 border border-gray-300">{row.store}</td>
                    <td className="px-4 py-2 border border-gray-300">{row.qty}</td>
                    <td className="px-4 py-2 border border-gray-300">{row.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
  }

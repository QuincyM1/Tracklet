import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  onRangeChange: (range: { startDate: Date | null; endDate: Date | null }) => void;
}

export default function DateRangePicker({ onRangeChange }: Props) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartChange = (date: Date | null) => {
    setStartDate(date);
    onRangeChange({ startDate: date, endDate });
  };

  const handleEndChange = (date: Date | null) => {
    setEndDate(date);
    onRangeChange({ startDate, endDate: date });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <DatePicker
          selected={startDate}
          onChange={handleStartChange}
          placeholderText="Select start date"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
          maxDate={new Date()}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          End Date
        </label>
        <DatePicker
          selected={endDate}
          onChange={handleEndChange}
          placeholderText="Select end date"
          className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
          minDate={startDate}
          maxDate={new Date()}
        />
      </div>
    </div>
  );
}

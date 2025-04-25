import {useState} from 'react';

const products = ['GL22BLKS1', 'GL36BLKS1', 'GL46BLKS1'];

interface ProductSelectorProps{
    onSelect: (product: string) => void;
    }

export default function ProductSelector({ onSelect }: ProductSelectorProps){
    const[selected, setSelected] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelected(value);
        onSelect(value);
        }

    return (
        <div className="w-full max-w-xs">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Select a ProductSelectorProp
            </label>
            <select
              value={selected}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
        <option value="">-- Choose a Product --</option>
        {products.map((product) => (
          <option key={product} value={product}>
            {product}
          </option>
        ))}
      </select>
    </div>
  );
}
import React, { useState } from 'react';

interface Row {
  [key: string]: any;
}

interface Props {
  data: Row[];
  editable?: boolean;
  onDelete?: (index: number) => void;
  onApply?: (index: number, newData: Row) => void;
}

const GenericTable: React.FC<Props> = ({ data, editable = false, onDelete, onApply }) => {
  const [editedData, setEditedData] = useState<Row[]>(new Array(data.length).fill({}));

  const handleInputChange = (rowIndex: number, key: string, value: any) => {
    setEditedData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex] = { ...newData[rowIndex], [key]: value };
      return newData;
    });
  };

  const handleApply = (index: number) => {
    if (onApply) {
      onApply(index, editedData[index]);
      setEditedData((prevData) => {
        const newData = [...prevData];
        newData[index] = {};
        return newData;
      });
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
          {editable && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.keys(row).map((key) => (
              <td key={key}>
                {editable ? (
                  <input
                    type="text"
                    value={editedData[index][key] !== undefined ? editedData[index][key] : row[key]}
                    onChange={(e) => handleInputChange(index, key, e.target.value)}
                  />
                ) : (
                  row[key]
                )}
              </td>
            ))}
            {editable ? (
              <td>
                <button onClick={() => handleApply(index)}>Apply</button>
              </td>
            ) : (
              <td>
                {onDelete && <button onClick={() => onDelete(index)}>Delete</button>}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GenericTable;

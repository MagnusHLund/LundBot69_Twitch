import React, { useState } from 'react'
import './DataTable.css'
import TextField from './Inputs/TextField'

// TODO: Add editable functionality, like maxLength. Or maybe both should be changed to be based on column instead of row.

interface Row {
  [key: string]: {
    value: any
    maxLength?: number
  }
}

interface Props {
  data: Row[]
  editable?: boolean
  onDelete?: (index: number) => void
  onApply?: (index: number, newData: Row) => void
}

const DataTable: React.FC<Props> = ({
  data,
  editable = false,
  onDelete,
  onApply,
}) => {
  const [editedData, setEditedData] = useState<Row[]>(
    new Array(data.length).fill({})
  )

  const handleInputChange = (rowIndex: number, key: string, value: any) => {
    setEditedData((prevData) => {
      const newData = [...prevData]
      newData[rowIndex] = { ...newData[rowIndex], [key]: value }
      return newData
    })
  }

  const handleApply = (index: number) => {
    if (onApply) {
      onApply(index, editedData[index])
      setEditedData((prevData) => {
        const newData = [...prevData]
        newData[index] = {}
        return newData
      })
    }
  }

  const handleDelete = (index: number) => {
    if (onDelete) {
      onDelete(index)
    }
  }

  return (
    <table className="DataTable">
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
                  <TextField
                    value={
                      editedData[index][key] !== undefined
                        ? editedData[index][key]
                        : row[key].value
                    }
                    onChange={(e) =>
                      handleInputChange(index, key, e.target.value)
                    }
                    editable={editable}
                    maxLength={row[key].maxLength}
                  />
                ) : (
                  row[key].value
                )}
              </td>
            ))}
            {editable ? (
              <td>
                <button onClick={() => handleApply(index)}>Apply</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            ) : (
              <td>
                {onDelete && (
                  <button onClick={() => onDelete(index)}>Delete</button>
                )}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable

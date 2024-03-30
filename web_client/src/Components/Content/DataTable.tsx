import React, { useState } from 'react'
import './DataTable.scss'
import TextField from '../Inputs/TextField'
import Button from '../Inputs/Button'

// TODO: Add search, forward and back buttons, max items per page

interface Row {
  [key: string]: {
    value: string | number
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
    new Array(data.length).fill({}),
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
    <table className="data-table">
      <thead>
        <tr className="data-table__tr">
          {Object.keys(data[0]).map((key) => (
            <th className="data-table__th" key={key}>
              {key}
            </th>
          ))}
          {(editable || onDelete) && <th className="data-table__th">Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="data-table__tr">
            {Object.keys(row).map((key) => (
              <td key={key} className="data-table__td">
                {editable ? (
                  <TextField
                    value={
                      editedData[index][key] !== undefined
                        ? String(editedData[index][key])
                        : String(row[key].value)
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
            {editable && (
              <td style={{ width: 'auto' }} className="data-table__td">
                <Button
                  onClick={() => handleApply(index)}
                  className="data-table__button"
                  width="auto"
                >
                  Apply
                </Button>
                <Button
                  onClick={() => handleDelete(index)}
                  className="data-table__button"
                  width="auto"
                >
                  Delete
                </Button>
              </td>
            )}
            {!editable && onDelete && (
              <td style={{ width: '0px' }} className="data-table__td">
                <Button
                  onClick={() => onDelete(index)}
                  className="data-table__button"
                  width="auto"
                >
                  Delete
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable

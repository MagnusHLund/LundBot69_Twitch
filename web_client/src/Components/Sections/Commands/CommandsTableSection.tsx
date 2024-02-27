import ContentBox from '../../Content/ContentBox'
import DataTable from '../../Content/DataTable'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './CommandsTableSection.scss'

const CommandsTableSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="commands-table-section">
        <Title text="Commands" />
        <div className="commands-table-section__container">
          <RowHandler className="commands-table-section__row-handler--">
            <DataTable
              data={[
                {
                  id: { value: 1 },
                  name: { value: 'John', maxLength: 10 },
                  age: { value: 30, maxLength: 2 },
                },
                {
                  id: { value: 2 },
                  name: { value: 'Jane', maxLength: 15 },
                  age: { value: 25, maxLength: 2 },
                },
                {
                  id: { value: 3 },
                  name: { value: 'Doe', maxLength: 10 },
                  age: { value: 40, maxLength: 2 },
                },
              ]}
              onDelete={() => {}}
              // editable={true}
              onApply={() => {}}
            />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default CommandsTableSection

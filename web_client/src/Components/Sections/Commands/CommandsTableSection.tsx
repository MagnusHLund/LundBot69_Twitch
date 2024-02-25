import ContentBox from '../../Content/ContentBox'
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
            Table of commands
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default CommandsTableSection

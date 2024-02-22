import ContentBox from '../../Content/ContentBox'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './CommandsTableSection.scss'

const CommandsTableSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-info-section">
        <Title text="Commands" />
        <div className="home-info-section__container">
          <RowHandler className="home-info-section__row-handler--">
            Table of commands
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default CommandsTableSection

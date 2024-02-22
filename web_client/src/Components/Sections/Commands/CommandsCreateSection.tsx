import ContentBox from '../../Content/ContentBox'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './CommandsCreateSection.scss'

const CommandsCreateSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-info-section">
        <Title text="Create and edit commands" />
        <div className="home-info-section__container">
          <RowHandler className="home-info-section__row-handler--">
            Form to edit/create commands
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default CommandsCreateSection

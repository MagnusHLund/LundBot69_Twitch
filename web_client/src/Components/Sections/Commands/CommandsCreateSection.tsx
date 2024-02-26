import ContentBox from '../../Content/ContentBox'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './CommandsCreateSection.scss'
import CommandsCreateForm from './Subsections/CommandsCreateForm'

const CommandsCreateSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="commands-create-section">
        <Title text="Create and edit commands" />
        <div className="commands-create-section__container">
          <RowHandler className="commands-create-section__row-handler--">
            <CommandsCreateForm />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default CommandsCreateSection

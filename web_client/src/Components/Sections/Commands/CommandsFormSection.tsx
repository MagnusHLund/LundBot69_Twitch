import ContentBox from '../../Content/ContentBox'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './CommandsFormSection.scss'
import CommandsForm from './Subsections/CommandsForm'

// TODO: Maybe there should be some tags, which would @ the person that entered the command, or other options. A list of these should be displayed somewhere too.

const CommandsCreateSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="commands-create-section">
        <Title text="Create and edit commands" />
        <div className="commands-create-section__container">
          <RowHandler className="commands-create-section__row-handler--">
            <CommandsForm />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default CommandsCreateSection

import ContentBox from '../../Content/ContentBox'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './HomeGoalsSection.scss'

const HomeGoalsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-info-section">
        <Title text="GOALS!" />
        <div className="home-info-section__container">
          <RowHandler className="home-info-section__row-handler--">
            Sub goal, follower goal
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default HomeGoalsSection

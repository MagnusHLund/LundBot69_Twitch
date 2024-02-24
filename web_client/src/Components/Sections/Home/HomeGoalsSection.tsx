import ContentBox from '../../Content/ContentBox'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './HomeGoalsSection.scss'
import HomeGoals from './Subsections/Goals/HomeGoals'
import cn from 'classnames'

// TODO: Change "container" to content instead

const HomeGoalsSection: React.FC = () => {
  const goalReached = true
  return (
    <ContentBox>
      <div
        className={cn('home-goals-section', { 'goal-reached': goalReached })}
      >
        <Title text="GOALS!" />
        <div className="home-goals-section--content">
          <RowHandler className="home-goals-section--content--sub">
            <HomeGoals goalType="sub" />
          </RowHandler>
          <RowHandler className="home-goals-section--content--follower">
            <HomeGoals goalType="follower" />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default HomeGoalsSection

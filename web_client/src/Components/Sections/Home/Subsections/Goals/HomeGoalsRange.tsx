import './HomeGoalsRange.scss'

interface IHomeGoalsRange {
  width: string
}

const HomeGoalsRange: React.FC<IHomeGoalsRange> = ({ width }) => {
  return (
    <div className="home-goals-range">
      <div className="home-goals-range--filled" style={{ width: width }}></div>
    </div>
  )
}

export default HomeGoalsRange

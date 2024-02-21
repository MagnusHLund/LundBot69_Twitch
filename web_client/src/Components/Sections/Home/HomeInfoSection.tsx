// Info can include most used commands, sub/follower goal being reached

import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'

const HomeInfoSection: React.FC = () => {
  return (
    <div className="home-music-section">
      <Title text="Info" />
      <div className="home-music-section__container">
        <RowHandler className="home-music-section__row-handler--video">
          t
        </RowHandler>
        <RowHandler className="home-music-section__row-handler--info">
          t
        </RowHandler>
      </div>
    </div>
  )
}

export default HomeInfoSection

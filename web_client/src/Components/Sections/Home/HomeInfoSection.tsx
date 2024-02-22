import ContentBox from '../../Content/ContentBox'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './HomeInfoSection.scss'

const HomeInfoSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-info-section">
        <Title text="Info" />
        <div className="home-info-section__container">
          <RowHandler className="home-info-section__row-handler--">
            Most used command? What kind of info?
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default HomeInfoSection

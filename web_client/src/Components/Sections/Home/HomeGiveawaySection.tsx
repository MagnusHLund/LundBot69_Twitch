import ContentBox from '../../Content/ContentBox'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import './HomeGiveawaySection.scss'

const HomeGiveawaySection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-giveaway-section">
        <Title text="Giveaways" />
        <div className="home-giveaway-section__container">
          <RowHandler className="home-giveaway-section__row-handler--table">
            Show people in a table, that have entered the giveaway.
          </RowHandler>
          <div>
            <RowHandler className="home-giveaway-section__row-handler--buttons">
              <button className="home-giveaway-section__row-handler--buttons-winner" />
              <button className="home-giveaway-section__row-handler--buttons-reset" />
            </RowHandler>
            <RowHandler>
              <Title text="winnner is" />
              <p>name</p>
            </RowHandler>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}

export default HomeGiveawaySection

import ContentBox from '../../Content/ContentBox'
import DataTable from '../../Content/DataTable'
import RowHandler from '../../Content/RowHandler'
import Title from '../../Content/Title'
import Button from '../../Inputs/Button'
import './HomeGiveawaySection.scss'

const HomeGiveawaySection: React.FC = () => {
  return (
    <ContentBox>
      <div className="home-giveaway-section">
        <Title text="Giveaways" />
        <div className="home-giveaway-section__container">
          <div>
            <RowHandler className="home-giveaway-section__row-handler--buttons">
              <Button
                className="home-giveaway-section__row-handler--buttons-winner"
                width="115px"
              >
                Pick winner
              </Button>
              <Button
                className="home-giveaway-section__row-handler--buttons-reset"
                width="115px"
              >
                Reset
              </Button>
            </RowHandler>
            <RowHandler>
              <Title text="winnner is" />
              <p>name</p>
            </RowHandler>
          </div>
          <RowHandler className="home-giveaway-section__row-handler--table">
            <DataTable
              data={[
                {
                  id: { value: 1 },
                  name: { value: 'John', maxLength: 10 },
                  age: { value: 30, maxLength: 2 },
                },
                {
                  id: { value: 2 },
                  name: { value: 'Jane', maxLength: 15 },
                  age: { value: 25, maxLength: 2 },
                },
                {
                  id: { value: 3 },
                  name: { value: 'Doe', maxLength: 10 },
                  age: { value: 40, maxLength: 2 },
                },
              ]}
              onDelete={() => {}}
            />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default HomeGiveawaySection

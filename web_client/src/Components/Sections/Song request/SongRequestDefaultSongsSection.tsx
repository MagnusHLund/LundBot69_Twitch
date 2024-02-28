import React from 'react'
import './SongRequestDefaultSongsSection.scss'
import Title from '../../Content/Title'
import RowHandler from '../../Content/RowHandler'
import ContentBox from '../../Content/ContentBox'
import SongRequestRefresh from '../../Content/SongRequestRefresh'
import DataTable from '../../Content/DataTable'

const SongRequestDefaultSongsSection: React.FC = () => {
  return (
    <ContentBox>
      <div className="sr-default-songs-section">
        <Title text="Default songs" />
        <div className="sr-default-songs-section__container">
          <RowHandler className="sr-default-songs-section__row-handler--buttons">
            <SongRequestRefresh />
          </RowHandler>
          <RowHandler className="sr-default-songs-section__row-handler--volume">
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
              // editable={true}
              onApply={() => {}}
            />
          </RowHandler>
        </div>
      </div>
    </ContentBox>
  )
}

export default SongRequestDefaultSongsSection

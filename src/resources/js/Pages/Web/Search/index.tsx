
import React, { useCallback } from 'react';
import { useSearch } from './hooks';
import SearchArea from '@/Components/SearchArea';
import WebLayout from '@/Layouts/WebLayout';
import ModalView from '@/Components/ModalView';
import HouseModal from './components/HouseModal';
import { items } from './sample';
import Selector from '@/Components/Selector';
import soccerImage from './img/soccer.jpg';

import { Card2 } from '@/Components/Card2';
import Accordion from '@/Components/Accordion';

export const Search = React.memo(function Search() {
    const { handleHouseClick, selectHouseId, setSelectHouseId, handleModalClose } = useSearch()
    const onJoinClick = useCallback(() => {
        console.log("click")
    }, [])

    return (
        <WebLayout>
            {/* <SearchArea /> */}

            <div className='grid gap-2 bg-white p-2 rounded-md'>
                <Accordion title="絞り込み">
                    <Selector
                        title="時間"
                        items={[
                            'React',
                            'Vue',
                            'Angular',
                            'Svelte',
                            'Ember',
                            'Preact'
                        ]}
                    />
                    <Selector
                        title="場所"
                        items={[
                            'React',
                            'Vue',
                            'Angular',
                            'Svelte',
                            'Ember',
                            'Preact'
                        ]}
                    />
                    <Selector
                        title="タグ"
                        items={[
                            'React',
                            'Vue',
                            'Angular',
                            'Svelte',
                            'Ember',
                            'Preact'
                        ]}
                    />
                </Accordion>
            </div>
            <div className="grid grid-cols-1 gap-4 place-items-center mt-5">
                {items.map((item) => {
                    return <Card2
                        key={item.key}
                        sportImage={item.sportImage}
                        sportName={item.sportName}
                        dateTime={item.dateTime}
                        currentParticipants={item.currentParticipants}
                        location={item.location}
                        nearestStation={item.nearestStation}
                        deadline={item.deadline}
                        fee={item.fee}
                        tags={item.tags}
                        onJoinClick={onJoinClick}
                    />
                })}
            </div>
        </WebLayout>
    );
})
export default Search

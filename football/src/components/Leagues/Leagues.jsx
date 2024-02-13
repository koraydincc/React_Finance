import React from 'react'
import { useFetchLeaguesQuery } from '../../store'
import { Skeleton } from 'antd';
import LeagueItem from './LeagueItem';

function Leagues() {
    const { data, error, isLoading } = useFetchLeaguesQuery();

    let content;

    console.log(data)

    if (isLoading) {
        content = <Skeleton active size='large' style={{ width: '100%', height: '500px' }} />

    } else if (error) {
        content = <div>Error: {error.message}</div>;
    } else {
        
        const leagues = data.result; 
        content = leagues.map((league, index) => (
             <div key={league.key + index}>
                <h3>Lig: {league.league}</h3>
                
             </div>
        ));
    }

    return <div>{content}</div>;
}

export default Leagues

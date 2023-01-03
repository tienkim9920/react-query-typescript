import React from 'react';
import { useHeroList } from '../../hooks/useHeros';

const ListHero = () => {

    const _successHeros = () => {
        console.log("Call api heros success!");
    }

    const _errorHeros = () => {
        console.log("Call api heros erorr!");
    }

    const { data: heros, isLoading, isError, isFetching } = useHeroList(_successHeros, _errorHeros);


    return (
        <>
            <h1>This is list page</h1>
        </>
    )
}

export default ListHero;
import { useQueryClient } from 'react-query';
import { useDeleteHero, useHeroList } from '../../hooks/useHeros';
import { IHero } from '../../interfaces/hero.interface';

const ListHero = () => {
    const queryClient = useQueryClient();

    const _successHeros = () => {
        console.log("Call api heros success!");
    }

    const _errorHeros = () => {
        console.log("Call api heros erorr!");
    }

    const _successDeleteHero = () => {
        console.log("You have been delete hero successfully!");
    }

    const _errorDeleteHero = () => {
        console.log("Can't delete hero!");
    }

    const { mutate: deleteHero } = useDeleteHero(_successDeleteHero, _errorDeleteHero);

    const { data: heros, isLoading: isLoadingHeros, isError: isErrorHeros, isFetching } = useHeroList(_successHeros, _errorHeros);

    const handleDeleteHero = (id: string) => {
        deleteHero(id);
    }

    return (
        <>
            <h1>This is list page</h1>
            <div className='hero-wrapper'>
                {!isFetching && heros?.map((hero: IHero) => (
                    <div className='hero-list' key={hero?._id}>
                        <div>{hero?.title || ''}</div>
                        <div>{hero?.body || ''}</div>
                        <div>{hero?.phone || ''}</div>
                        <div className='btn-wrapper'>
                            <div className='btn-primary' onClick={() => handleDeleteHero(hero?._id || '')}>Delete</div>
                        </div>
                    </div>
                ))}
            </div>

            {isLoadingHeros && <div>Loading...</div>}
            {isErrorHeros && <div>Error...</div>}
        </>
    )
}

export default ListHero;
import { useQueryClient } from 'react-query';
import { useHeroList } from '../../hooks/useHeros';
import { IHero } from '../../interfaces/hero.interface';

const ListHero = () => {
    const queryClient = useQueryClient();

    const _successHeros = () => {
        console.log("Call api heros success!");
    }

    const _errorHeros = () => {
        console.log("Call api heros erorr!");
    }

    const { data: heros, isLoading: isLoadingHeros, isError: isErrorHeros, isFetching } = useHeroList(_successHeros, _errorHeros);

    return (
        <>
            <h1>This is list page</h1>
            {!isFetching && heros?.map((hero: IHero) => (
                <div>
                    <div>{hero.title}</div>
                    <div>{hero.body}</div>
                    <div>{hero.phone}</div>
                </div>
            ))}
            {isLoadingHeros && <div>Loading...</div>}
            {isErrorHeros && <div>Error...</div>}
        </>
    )
}

export default ListHero;
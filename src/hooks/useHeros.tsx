import { useMutation, useQuery, useQueryClient } from 'react-query';
import { IHero } from '../interfaces/hero.interface';
import { fetchAddHero, fetchDeleteHero, fetchHeroList } from '../services/HeroService';

export const useHeroList = (onSuccess: () => void, onError: () => void) => {
    return useQuery<IHero[]>({
        queryKey: ['heros'],
        queryFn: fetchHeroList,
        staleTime: Infinity,
        refetchOnWindowFocus: 'always',
        onSuccess,
        onError,
    })
}

export const useAddHero = (onSuccess: () => void, onError: () => void) => {
    const queryClient = useQueryClient();
    return useMutation((hero: IHero) => fetchAddHero(hero), {
        onSettled(_data, error, variables) {
            queryClient.setQueryData<IHero[] | undefined>('heros', (old) => {
                if (old) {
                    return [...old, (_data?._id ? _data : {})];
                } else {
                    return [];
                }
            });
        },
        onSuccess,
        onError,
    });
}

export const useDeleteHero = (onSuccess: () => void, onError: () => void) => {
    const queryClient = useQueryClient();
    return useMutation((id: string) => fetchDeleteHero(id), {
        onMutate: async (id: string) => {
            queryClient.setQueryData<IHero[] | undefined>('heros', (old) => {
                if (old) {
                    return [...old.filter(item => item._id !== id)];
                } else {
                    return [];
                }
            });
        },
        onSuccess,
        onError,
    });
}
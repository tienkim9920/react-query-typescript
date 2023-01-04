import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { IBody } from '../interfaces/body.interface';
import { IHero } from '../interfaces/hero.interface';
import { ConfigAxios } from '../services/ConfigService';
const mainURL = `http://localhost:8000`;

const urlHeroList = mainURL + '/blogs';
const bodyHeroList: IBody = ConfigAxios.GET_AXIOS(urlHeroList);
const fetchHeroList = (): Promise<IHero[]> => axios(bodyHeroList).then((response) => response.data);

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
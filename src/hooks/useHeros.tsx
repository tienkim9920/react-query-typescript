import axios from 'axios';
import { useQuery } from 'react-query';
import { IHero } from '../interfaces/hero.interface';
import { ConfigAxios } from '../services/ConfigService';
const mainURL = `http://localhost:8000`;

const urlHeroList = mainURL + '/blogs';
const bodyHeroList = ConfigAxios.GET_AXIOS(urlHeroList).method.toString();
const fetchHeroList = (): Promise<IHero[]> => axios.get(bodyHeroList).then((response) => response.data);

export const useHeroList = (onSuccess, onError) => {
    return useQuery<IHero[]>('heros', fetchHeroList, {
        onSuccess,
        onError,
    })
}
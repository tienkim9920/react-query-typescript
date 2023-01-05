import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import { IBody } from '../interfaces/body.interface';
import { IHero } from '../interfaces/hero.interface';
import { ConfigAxios } from '../services/ConfigService';
const mainURL = `http://localhost:8000`;


// const postHeroList: IBody = ConfigAxios.POST_AXIOS(urlHeroList);

const fetchHeroList = async (): Promise<IHero[]> => {
    const url = mainURL + '/blogs';
    const dataBody: IBody = ConfigAxios.GET_AXIOS(url);
    const res = await axios(dataBody);
    return res.data ?? [];
};

// const addHero = (hero: IHero): Promise<IHero[]> => {
//     const url = mainURL + '/blogs';
//     const dataBody: IBody = ConfigAxios.POST_AXIOS(url, hero);
//     return axios(dataBody).then((response) => response.data);
// }

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

// export const mutationCreateHero = (onSuccess: () => void, onError: () => void) => {
//     return useMutation<IHero>({
//         mutationFn:
//     })
// }

// const mutation = useMutation({
//     mutationFn: (newTodo) => {
//       return axios.post('/todos', newTodo)
//     },
//   })
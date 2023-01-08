import axios from 'axios';
import { IBody } from '../interfaces/body.interface';
import { IHero } from '../interfaces/hero.interface';
import { ConfigAxios } from '../services/ConfigService';
const mainURL = process.env.REACT_APP_API_URL;

export const fetchHeroList = async (): Promise<IHero[]> => {
    const url = mainURL + '/blogs';
    const dataBody: IBody = ConfigAxios.GET_AXIOS(url);
    const res = await axios(dataBody);
    if (res.status === 200) {
        return res.data;
    } else {
        return [];
    }
};

export const fetchAddHero = async (hero: IHero): Promise<IHero> => {
    const url = mainURL + '/blogs';
    const dataBody: IBody = ConfigAxios.POST_AXIOS(url, hero);
    const res = await axios(dataBody);
    if (res.status === 200) {
        return res.data;
    } else {
        throw new Error("Fail Add Hero");
    }
}

export const fetchDeleteHero = async (id: string): Promise<IHero> => {
    const url = mainURL + `/blogs/${id}`;
    const dataBody: IBody = ConfigAxios.DELETE_AXIOS(url);
    const res = await axios(dataBody);
    if (res.status === 200) {
        return res.data;
    } else {
        throw new Error("Fail Delete Hero");
    }
}
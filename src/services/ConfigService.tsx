import { IBody } from "../interfaces/body.interface";

export class ConfigAxios {
    public static GET_AXIOS(url: string): IBody {
        const body: IBody = {
            method: 'get',
            url,
            headers: { 
                'Content-Type': 'application/json'
            }
        }
        return body;
    }

    static POST_AXIOS(url: string, data: object) {
        const body = {
            method: 'post',
            url,
            headers: { 
                'Content-Type': 'application/json', 
            },
            data
        }
        return body;
    }

    static PUT_AXIOS(url: string, data: object) {
        const body = {
            method: 'put',
            url,
            headers: { 
                'Content-Type': 'application/json' 
            },
            data
        }
        return body;
    }

    static DELETE_AXIOS(url: string) {
        const body = {
            method: 'delete',
            url,
            headers: { 
                'Content-Type': 'application/json'
            }
        }
        return body;
    }
}
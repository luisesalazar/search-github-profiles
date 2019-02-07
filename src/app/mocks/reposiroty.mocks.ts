import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryList: Repository[] = [
    {
        name: 'Ionic 3 camera',
        description: 'lorem ipsum',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 sms',
        description: 'lorem ipsum',
        owner: USER_LIST[0]
    },
    {
        name: 'Ionic 3 geolocation',
        description: 'lorem ipsum',
        owner: USER_LIST[1]
    },

];

export const REPOSITORY_LIST = repositoryList;

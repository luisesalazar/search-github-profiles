import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name: 'luisesalazar',
        company: 'PWH',
        location: 'Valles, SLP',
        bio: 'I like to make web apps',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'info@correo.com'
    },
    {
        name: 'johndoe',
        company: 'Freelance',
        location: 'Mexico, Mexico',
        bio: 'I don\'t now what i do',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'info@correo.com'
    },
    {
        name: 'demo',
        company: 'Google Inc.',
        location: 'Mty, Nuevo Leon',
        bio: 'Everybody, yeah',
        avatar_url: 'http://i.imgur.com/jav62p6.jpg',
        email: 'info@correo.com'
    },

];

export const USER_LIST = userList;

import { localhostUserToModel } from '../mappers/localhost-user.mapper';
import { User } from '../models/user';

/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */ 
export const loadUsersByPage = async( page = 1 ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    const res = await fetch(url);
    const data2 = await res.json();
    const isData = data2.data
    // console.log(isData);
    // const users = data2.map(localhostUserToModel);
    const users = isData.map(localhostUserToModel);

    return users;
}
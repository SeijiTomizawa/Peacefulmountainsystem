import enJson from './en.json';
import { membersDataEN } from '../data/membersData';

/**
 * English translations
 * Static text is stored in en.json.
 * Dynamic data (members list) is merged here from membersData.ts.
 */
export const en = {
  ...enJson,
  members: {
    ...enJson.members,
    page: {
      ...enJson.members.page,
      items: membersDataEN,
    },
  },
};

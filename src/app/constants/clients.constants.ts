import { Client } from '../models/client.model';

export const EX_CLIENTS_LIST = [
  'Airbnb',
  'ClassDojo',
  'Puma',
  'Škoda',
  'Twitter'
];
export const FEATURED_CLIENTS_LIST = [
  'Airbnb',
  'ClassDojo',
  'Puma',
  'Škoda',
  'Twitter'
];
export const CLIENTS: Client[] = [
  {
    name: 'Client 1',
    link: '#',
    image: {
      width: 50,
      height: 50,
      src: 'assets/images/clients/client-1@2x.png',
      srcset:
        'assets/images/clients/client-1.png, assets/images/clients/client-1@2x.png 2x'
    }
  },
  {
    name: 'Client 2',
    link: '#',
    image: {
      width: 147,
      height: 50,
      src: 'assets/images/clients/client-2@2x.png',
      srcset:
        'assets/images/clients/client-2.png, assets/images/clients/client-2@2x.png 2x'
    }
  },
  {
    name: 'Client 3',
    link: '#',
    image: {
      width: 142,
      height: 50,
      src: 'assets/images/clients/client-3@2x.png',
      srcset:
        'assets/images/clients/client-3.png, assets/images/clients/client-3@2x.png 2x'
    }
  },
  {
    name: 'Client 4',
    link: '#',
    image: {
      width: 44,
      height: 50,
      src: 'assets/images/clients/client-4@2x.png',
      srcset:
        'assets/images/clients/client-4.png, assets/images/clients/client-4@2x.png 2x'
    }
  }
];

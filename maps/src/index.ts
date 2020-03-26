// import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './User';

const customMap = new CustomMap('map');

customMap.addMarker(new User());
customMap.addMarker(new Company());

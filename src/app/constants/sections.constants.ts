import { SectionId } from '../enums/section.enum';
import { Section } from '../models/section.model';

export const SECTIONS: ReadonlyArray<Section> = [
  {
    title: 'About',
    id: SectionId.About
  },
  {
    title: 'Work',
    id: SectionId.Work
  },
  {
    title: 'Experience',
    id: SectionId.Experience
  },
  {
    title: 'Clients',
    id: SectionId.Clients
  },
  {
    title: 'Contact',
    id: SectionId.Contact
  }
];

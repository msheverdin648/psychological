import { FC, ReactNode } from 'react';
import { ServiceBlockNames } from '../ServicesSlice';


export interface IService {
    name: ServiceBlockNames;
    block: FC;
    title: string;
}


export interface ServiceState {
    services: IService[];
    activeService: IService;

}
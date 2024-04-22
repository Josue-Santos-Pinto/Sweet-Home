import { Tour } from "@/types/tour";

export const apiTeste: Tour[] = [{
    id: 1,
    title: 'Viagem para Rio de Janeiro',
    address: {
        state: 'RJ',
        country: 'Brasil',
        city: 'Rio de Janeiro',
    },
    date: {
        start: new Date(),
        finish: new Date()
    },
    price: 2447,
    images: [
        {id: 1, img: '/images/riodejaneiro.jpg'},
        {id: 2, img: '/images/riodejaneiro.jpg'},
        {id: 3, img: '/images/riodejaneiro.jpg'},
        {id: 4, img: '/images/riodejaneiro.jpg'},
        {id: 5, img: '/images/riodejaneiro.jpg'},
        {id: 6, img: '/images/riodejaneiro.jpg'},
    ],
    host: 'Josué Santos Pinto'
},
{
    id: 2,
    title: 'Viagem para Rio de Janeiro',
    address: {
        state: 'São Paulo',
        country: 'Brasil',
        city: 'São Paulo',
    },
    date: {
        start: new Date(),
        finish: new Date()
    },
    price: 1800,
    images: [
        {id: 1, img: '/images/riodejaneiro.jpg'},
        {id: 2, img: '/images/riodejaneiro.jpg'},
        {id: 3, img: '/images/riodejaneiro.jpg'},
        {id: 4, img: '/images/riodejaneiro.jpg'},
        {id: 5, img: '/images/riodejaneiro.jpg'},
        {id: 6, img: '/images/riodejaneiro.jpg'},
    ],
    host: 'Josué Santos Pinto'
}]
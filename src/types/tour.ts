export type Image = {
    id: number,
    img: string
}


export type Tour = {
    id: number,
    address: {
        state: string,
        country: string,
        city: string,
    },
    date: {
        start: Date,
        finish: Date
    },
    price: number,
    images: Image[],
    host: string
}
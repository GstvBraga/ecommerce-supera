class ItemCart{
    constructor(
        public id: number,
        public image: string,
        public name: string,
        public score: number,
        public price: number,
        public quantity: number
    ){}
}

export {ItemCart}

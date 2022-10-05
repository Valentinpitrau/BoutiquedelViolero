const products = [
    {id: 1, title:'Ibanez', description:'string', price:'100', pictureUrl:'', stock:'number'},
    {id: 2, title:'PRS', description:'string', price:'100', pictureUrl:'', stock:'number'},
    {id: 3, title:'Fender', description:'string', price:'100', pictureUrl:'', stock:'number'},
    {id: 4, title:'LesPaul', description:'string', price:'100', pictureUrl:'',  stock:'number'},
]

export const getProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            return resolve (products);
        })
    })
    return promise
};

export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === id)
        setTimeout (() => {
            return resolve(result);
        })
    })
    return promise
};


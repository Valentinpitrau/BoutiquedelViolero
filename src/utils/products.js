const products = [
    {id: 1, title:'Ibanez', description:'string', price:'100', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_688902-MLA47682926715_092021-O.jpg', stock:'number'},
    {id: 2, title:'PRS', description:'string', price:'100', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_824668-MLA47681169880_092021-O.webp', stock:'number'},
    {id: 3, title:'Fender', description:'string', price:'100', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_688482-MLA46351892719_062021-W.jpg', stock:'number'},
    {id: 4, title:'LesPaul', description:'string', price:'100', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_910707-MLA46363239084_062021-O.jpg',  stock:'number'},
]

    export const getProduct = (id) => {
        const promise = new Promise((resolve) => {
            const result = products.find((product) => product.id === parseInt(id))
            setTimeout(() => {
            return resolve(result);
            }, 2000)
        })


    return promise
    };


    export const getProducts = () => {
    const promise = new Promise((resolve) => {
       setTimeout(() => {
        return resolve(products);
        }, 2000)
    })


    return promise
    };


 

    export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
        const results = products.filter((product) => product.category === categoryId);
        setTimeout(() => {
        return resolve(results);
        }, 2000)
    })


    return promise
    };

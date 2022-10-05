const products = [
    {id: 1, title:'Ibanez', description:'string', price:'100', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_688902-MLA47682926715_092021-O.jpg', stock:'number'},
    {id: 2, title:'PRS', description:'string', price:'100', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_824668-MLA47681169880_092021-O.webp', stock:'number'},
    {id: 3, title:'Fender', description:'string', price:'100', pictureUrl:'https://bairesrocks.vteximg.com.br/arquivos/ids/236803/0147312323_fen_ins_frt_1_rr.jpg?v=637883341598800000', stock:'number'},
    {id: 4, title:'LesPaul', description:'string', price:'100', pictureUrl:'https://images.reverb.com/image/upload/s--avkozGQ3--/f_auto,t_supersize/v1567715486/qu9fmrubhf6paiuvj9pc.jpg',  stock:'number'},
]

export const getProducts = () => {
    const promise = new Promise ((resolve) => {
        setTimeout(() => {
            return resolve (products);
        }, 2000)
    })
    return promise
};

export const getProduct = (id) => {
    const promise = new Promise ((resolve) => {
        const result = products.find((product) => product.id === id)
        setTimeout (() => {
            return resolve(result);
        }, 2000)
    })
    return promise
};


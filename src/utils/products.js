import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const products = [
    {id: 1, title:'Ibanez', description:'string', price:'100', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_688902-MLA47682926715_092021-O.jpg', stock:'number'},
    {id: 2, title:'PRS', description:'string', price:'100', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_824668-MLA47681169880_092021-O.webp', stock:'number'},
    {id: 3, title:'Fender', description:'string', price:'100', pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_688482-MLA46351892719_062021-W.jpg', stock:'number'},
    {id: 4, title:'LesPaul', description:'string', price:'100', pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_910707-MLA46363239084_062021-O.jpg',  stock:'number'},
]


export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');
  

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log(list);
      return list;
    })
    .catch(error => console.warn(error))
};
export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};


export const getProductsByCategory = (categoryId) => {
    // obtenemos la basedatos
    const database = getFirestore();
  
    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
  
    // crear query/consulta con el filtro que queremos aplicar
    const collectionQuery = query(collectionReference, where('category', '==', categoryId))
  
    // obtenemos los datos desde firestore
    return getDocs(collectionQuery)
      .then(snapshot => {
        if (snapshot.size === 0)
          return [];
  
        const list = snapshot
          .docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
        return list;
      })
      .catch(error => console.warn(error))
  };
  
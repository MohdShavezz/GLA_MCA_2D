
let products = [
    { id: 1, name: 'jug', price: 10 },
    { id: 2, name: 'pen', price: 11 },
    { id: 3, name: 'phone', price: 12 },
]

export function getProducts(req, res) {
    res.status(200).json(products)
}
export function getProduct(req, res) {
    try {
        const { id } = req.params
        const prod = products.find(ele => ele.id == id)
        // throw Error('my eror')
        if (!prod) {
            res.status(404).send('product not found')
        }
        res.status(200).json(prod)
    } catch (error) {
        console.log('error in getProduct: ', error.message)
    }
}
export function deleteProduct(req, res) {
    try {
        const { id } = req.params
        const ind = products.findIndex(ele => ele.id == id)
        products.splice(ind,1)
        res.status(200).json(products)
    } catch (error) {
        console.log('error in getProduct: ', error.message)
    }
}
export function addProduct(req, res) {
    const data=req.body
    // console.log(data)
    res.status(201).send([...products,data])

}
export function updateProduct(req, res) {

    const payload=req.body
    const { id } = req.params
    const prod = products.find(ele => ele.id == id)
    const ind = products.findIndex(ele => ele.id == id)
     if (!prod) {
            res.status(404).send('product not found')
        }
    const prodObj={
        ...prod,   // { id: 1, price: 10 } ,{name:'pen'}
        ...payload
    }

    products.splice(ind,1,prodObj)
    res.status(201).send(products)

}
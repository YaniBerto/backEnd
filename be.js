class ProductManager{
        constructor(){
        this.products = [];
        this.id = 1;
    }
    addProduct(title, description,price,url,code,stock){
        if (title && description && price && url && code && stock){
            const verificationCode = this.products.some(product => product.code === code)
            if (verificationCode) {
                this.console.error("Error: El código está repetido")
            }
            else {
                let id = this.id++;
                const newProduct = { id,title, description, price, url, code, stock};
                this.products.push(newProduct);
            }
     }else { this.console.error("Error: Debe completar todos los campos")
    }
}
    getProducts(){
        return this.products
    }
    getProductById(id){
        const productID = this.products.find(product=>product.id === id);
        if (!productID){
            return console.error("Not found")
        }
        else{
            return console.log("Producto con el ID solicitado: ", productID)
        }
    }
}
const pMAnager = new ProductManager()
    pMAnager.addProduct("camperaCruz","campera negra cierre cruzado", 50000, "url", 1,10);
    pMAnager.addProduct("pantalon wide", "pantalon oxford negro", 20000, "url", 2, 20);
    pMAnager.addProduct("botas lady", "botas texanas marron", 40000, "url", 3,10);
    pMAnager.addProduct("cinto negro", "cinturon hombre negro clásico", 10000, "url", 4,20);
    pMAnager.addProduct("cinturon mujer negro", "cinturon hebilla corazon negro", 12000, "url", 5,15);
   
    pMAnager.getProductById(22)



console.log(ProductManager);
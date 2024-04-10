const Category = require("../models/category.model");
import { products } from './../../../frontend/src/costumer/components/Product/ProductCards/Productdata';
const Product = require("../models/product.model");


async function createProduct(reqData) {
    let topLevel = await Category.findOne({ name: reqData.topLevelCategory });
    if (!topLevel) {
        topLevel = new Category({
            name: reqData.topLevelCategory,
            level: 1
        })
    }
    let secondLevel = await Category.findOne({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel._id,
    })

    if (!secondLevel) {
        secondLevel = new Category({
            name: reqData.secondLevelCategory,
            parentCategory: topLevel._id,
            level: 2
        })
    }
    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel._id,
    })
    if (!thirdLevel) {
        thirdLevel = new Category({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLevel._id,
            level: 3
        })
    }

    const product = new Product({
        title: reqData.title,
        description: reqData.description,
        discountedPrice: reqData.discountedPrice,
        discountPersent: reqData.discountPersent,
        imageUrl:reqData.imageUrl,
        price: reqData.price,
        sized:reqData.size,
        quantity: reqData.quantity,
        category:thirdLevel._id,
    })
    return await product.save();
}

async function deleteProduct(productId){
    const product = await findProductById(productId);

    await Product.findByIdAndDelete(productId);
    return "Product deleted Succeddfully";
}

async function updateProduct(productId, reqData){
    const updateProduct = await Product.findByIdAndUpdate(productId, reqData);

}
async function findProductById(id){
    const product = await Product.findById(id).populate("category").exec();

    if(!product){
        throw new Error("Product not found with id "+ id);
    }
    return product;
}
async function getAllProducts(reqQuery){
    let {category, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize } = reqQuery;
    
    pageSize = pageSize || 10;

    let query = Product.find().populate("catergory");

    if(catergory){
        const existCategory = await Category.findOne({name: category});
        if(existCategory){
            query = query.where("cetegory").equals(existCategory._id);
        }else{
            return {content: [], currentPage:1, totalPages:0}
        }
    }
    if(sizes){
        const sizesSet = new Set(sizes);
        query.query.where("sizes.name").in([...sizesSet]);

    }
    if(minPrice && maxPrice){
        query = query.where('dicountedPrice').gt(minPrice).lte(maxPrice);
    }
    if(minDiscount){
        query = query.where("discountPersent").gt(minDiscount);
    }
    if(stock){
        if(stock==='in_stock'){
            query = (await query.where("quantity")).gt(0);
        }else if(stock=='out_of_stock'){
            query = query.where(quantity).gt(1);
        }
    }

    if(sort){
        const sortDirection = sort === 'price_hight'?-1:1;
        query = query.sort({discountedPrice: sortDirection})
    }

    const totalProducts = await Product.countDocuments(query);

    const skip = (pageNumber-1)*pageSize;

    query = query.skip(skip).limit(pageSize);

    const products = await query.exec();

    const totalPages = Math.ceil(totalProducts/pageSize);

    return {content: products, currrentPage: pageNumber, totalPages}
}

async function createMultipleProduct(products){
    for(let product of products){
        await createProduct(product);
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    findProductById,
    createMultipleProduct
}
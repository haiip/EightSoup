class Product {
  constructor(id, ownerdId, title, imageUrl, description, price) {
    this.id = id;
    this.ownerdId = ownerdId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

export default Product;

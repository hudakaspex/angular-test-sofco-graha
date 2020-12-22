export class Book {
  private id: number;
  private author: string;
  private title: string;
  private imgUrl: string;
  private price: number;
  private stok: number;

  get getId() {
    return this.id;
  }

  set setId(id: number) {
    this.id = id;
  }

  set setAuthor(author: string) {
    this.author = author;
  }

  get getAuthor() {
    return this.author;
  }

  set setTitle(title: string) {
    this.title = title;
  }

  get getTitle() {
    return this.title;
  }

  set setImgUrl(url: string) {
    this.imgUrl = url;
  }

  get getImgUrl() {
    return this.imgUrl;
  }

  set setPrice(price: number) {
    this.price = price;
  }

  get getPrice() {
    return this.price;
  }

  set setStok(stok: number) {
    this.stok = stok;
  }

  get getStok() {
    return this.stok;
  }
}

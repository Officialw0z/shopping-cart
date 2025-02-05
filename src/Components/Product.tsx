import ProductList from "./Productlist";

export interface Products {
    title: string,
    author: string,
    text: string
}

const Product = ({ addToCart }: { addToCart: (title: string) => void }) => {
    const ProductProps = [
        {
          title: "A Sign of Four",
          author: "Av Sir Arthur Conan Doyle",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, excepturi sapiente beatae iure nemo nulla dolore obcaecati nesciunt dignissimos tenetur quidem illum inventore voluptatem, iusto cumque fugit vel ad voluptates.",
        },
        {
          title: "A Study in Scarlet",
          author: "Av Sir Arthur Conan Doyle",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, excepturi sapiente beatae iure nemo nulla dolore obcaecati nesciunt dignissimos tenetur quidem illum inventore voluptatem, iusto cumque fugit vel ad voluptates.",
        },
        {
          title: "Baskervilles Hound",
          author: "Av Sir Arthur Conan Doyle",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, excepturi sapiente beatae iure nemo nulla dolore obcaecati nesciunt dignissimos tenetur quidem illum inventore voluptatem, iusto cumque fugit vel ad voluptates.",
        },
        {
          title: "The Adventures of Sherlock Holmes",
          author: "Av Sir Arthur Conan Doyle",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, excepturi sapiente beatae iure nemo nulla dolore obcaecati nesciunt dignissimos tenetur quidem illum inventore voluptatem, iusto cumque fugit vel ad voluptates.",
        },
      ];
  return (
   <ProductList ProductProps={ ProductProps} addToCart={addToCart}/>
  )
}

export default Product

import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import ProductsList from "@/components/ProductsList";
import Gallery from "@/components/gallery";
import Container from "@/components/ui/Container";
import ProductInfo from "@/components/ProductInfo";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({params}) => {
  const product = await getProduct(params.productId);
  const relatedProducts = await getProducts({ categoryId: product.category.id, isFeatured: true });

  return (
    <div>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-[1fr_2fr]">
        <Gallery images={product.images} />
        <ProductInfo product={product} />
      </div>
      <ProductsList title='Related Products' products={relatedProducts} />
    </div>
  )
}

export default ProductPage;
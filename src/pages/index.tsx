import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="bg-[#1c2532] h-full">
        <div className="flex items-center gap-2 containerLayout py-5">
          <h1 className="font-bold w-fit whitespace-nowrap text-xl md:text-3xl">
            Series de TV Más Populares
          </h1>
          <span className="w-full h-[2px] rounded-full mt-2 bg-white" />
        </div>
        <div className="w-full pb-5 containerLayout  grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
          {/* {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))} */}
          Contenido
        </div>
      </div>
    </Layout>
  );
}

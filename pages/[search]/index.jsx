import DisplayItem from "@/components/DisplayItem";


const Search = ({ data }) => {

    if (typeof data === "string") {
        return <div>Item not exists</div>;
    }

  return(
    <section className="flex flex-col items-center justify-center gap-12 py-6 px-6 sm:px-8 md:px-12 xl:px-24 2xl:px-32">
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-3 md:gap-x-8 lg:grid-cols-4 xl:gap-x-24">
        {data.map(item => (
            <DisplayItem item={item} />
        ))}
      </div>
    </section>
  )
}

export default Search

export async function getServerSideProps(context) {
    const searchValue = context.params.search;
    const dataFetch = await import("../api/rent.json");
    const dataFind = await dataFetch.houses;

    const data = dataFind.filter((item) => item.city.toLowerCase().includes(searchValue) || item.country.toLowerCase().includes(searchValue));
  
    if (data) {
      return {
        props: {
          data,
        },
      };
    } else {
      return {
        props: {
          data: "Data not found",
        },
      };
    }
  }
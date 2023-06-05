import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { FiChevronDown } from "react-icons/fi";
import DropDownItems from "./dropDownItems";

const Home = () => {
  const API_URL = "https://dummyjson.com/products?limit=100";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  let brands = [];
  let categories = [];
  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      console.log("response", data.products);
      setPosts(data.products);
      // insertAllBrands(data.products);
    } catch (error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
    console.log(brands.length);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div>
          <div className="flex gap-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5">
            <div></div>
            <div>
              <div
                className="flex items-baseline hover:cursor-pointer  gap-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                <button>Brands</button>
                <FiChevronDown />
              </div>
              {isOpen && (
                <div className="gap-2 flex flex-col mt-2">
                  <DropDownItems posts={posts} param={"brand"} />
                </div>
              )}
            </div>
            <div>discount</div>
            <div>
              <div
                className="flex items-baseline hover:cursor-pointer  gap-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                <button>Categories</button>
                <FiChevronDown />
              </div>
              {isOpen && (
                <div className="gap-2 flex flex-col mt-2">
                  <DropDownItems posts={posts} param={"categories"} />
                </div>
              )}
            </div>
          </div>
          <div className="max-w-6xl p-2 mx-auto">
            <div className="flex ml-8 gap-4 items-baseline">
              <div>Filter:</div>
              <div className="p-1 bg-red-500 rounded-lg">All</div>
              <div className="p-1 bg-red-500 rounded-lg">Smartphone</div>
            </div>
          </div>
          <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {posts.map((post) => (
              <Product key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default Home;

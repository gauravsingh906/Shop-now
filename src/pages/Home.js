import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
    const API_URL = "https://dummyjson.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data.products);
            console.log(posts)
        }
        catch (err) {
            console.error("Error fetching data:", err);
            setPosts([]);
        }

        setLoading(false);

    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className=" flex justify-center  items-center">
            {loading ? (
                <Spinner />
            ) : posts.length > 0 ? (
                <div className="grid md:grid-cols-3 sm:grid-cols-2 xs:lg-grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                    {posts.map((post) => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <p>No Data Found</p></div>
            )}
        </div>
    );
}

export default Home;

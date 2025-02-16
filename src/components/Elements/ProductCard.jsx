import { Link } from "react-router-dom";
import { Rating } from "./Rating";

export const ProductCard = () => {
  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to="/" className="relative" >
            <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>
            <img className="rounded-t-lg w-full h-64" src="/assets/images/10001.avif" alt="alt text" />
        </Link>
        <div className="p-5">
            <Link to="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">alt text</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">overview</p>
            
            <div className="flex items-center my-2">
                <Rating rating={5} />
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>price</span>
                </span>
            </p>
        </div>
    </div>
  )
}

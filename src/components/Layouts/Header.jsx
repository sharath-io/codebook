import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="CodeBook" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-cente">
            <span className="bi bi-gear-wide-connected cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
            <span className="bi bi-search cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  0
                </span>
              </span>
            </Link>
            <span className="bi bi-person-circle cursor-pointer text-xl text-gray-700 dark:text-white mr-5"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

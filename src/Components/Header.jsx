import { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

// import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import "../assets/scss/header.scss"

function Header() {
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleSideBar = () => {
    setSideBarVisible(!sideBarVisible);
  }
  const handleShowSearch = () => {
    setShowSearchForm(!showSearchForm);
  }
  const handleSearch = () => {
    setSearchProduct("");
  }
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    if (searchProduct.length > 0) {
      const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
      );
      setfilteredProducts(filteredProducts);
    } else {
      setfilteredProducts([])
    }
  }, [searchProduct])

  return (
    <div>
      <header className='header'>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p>Welcome to <span>VRS Pickels</span> </p>
            </div>
            <div className="carousel-item">
              <p>100% Natural, No Preservatives Added!</p>
            </div>
            <div className="carousel-item">
              <p>We are shipping to India, US, Australia, and beyond.</p>
            </div>
          </div>
        </div>
      </header>
      <div className="sub__header">
        {
          sideBarVisible ? (<div className="bars_" onClick={handleSideBar}><IoMdClose /></div>) : (<div className="bars_" onClick={handleSideBar}><FaBars /></div>)
        }


        <div className={`sidebar__menu ${sideBarVisible ? 'visible' : 'hidden'}`}>
          <div className="sidebar__">
            {/* <div className="close__icon" onClick={handleSideBar}><FaBars /></div> */}
            <Link to="/" ><li className="sidebar__item">Home</li></Link>
            <Link to="/category/?name1=Non veg&&cat1=Non veg" className="sidebar__item"><li >Non Vegan</li></Link>
            <Link to="/category/?name1=veg&&cat1=veg" className="sidebar__item"><li >Vegan</li></Link>
            <Link to="/category/?name1=Powders&&cat1=Powder" className="sidebar__item"><li >Powders</li></Link>
            <Link to="/category/?name1=Snackz&&cat1=Snackz" className="sidebar__item"><li >Snackz</li></Link>
          </div>
        </div>

        <div className="logo">
          <img src={logo} alt="not found" className='logo__img' />
        </div>
        <p> <span>Order Now </span> 9290066555</p>
        {/* <div className="search__icon"> <IoSearch onClick={handleShowSearch} /> </div> */}
        {/* {showSearchForm ?
                    <form className='search__product'>
                        <div className="search_wrapper">
                            <div className="innersearch__icon"> <IoSearch /></div>
                            <input type="text" name="product" value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)} autoComplete='off' id="product" />
                            {searchProduct.length > 0 ? <div className="removesearch__icon"> <IoSearch onClick={handleSearch} /></div> : null}
                        </div>
                    </form> : null}

                {searchProduct.length > 0 ? <h4 className='search_results' >Search results for {searchProduct}</h4> : null}
                {searchProduct.length > 0 && filteredProducts.length == 0 ? <h6 className='search_results'>Sorry to say no results found </h6> : null} */}
      </div>

    </div>
  )
}

export default Header
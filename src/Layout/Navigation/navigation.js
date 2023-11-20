import { CiHeart } from 'react-icons/ci';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { AiOutlineUserAdd } from 'react-icons/ai';
import style from './navigation.module.css';
function Navigation({ handleInputChange, query }) {
  
  return (
    <nav className={style.wrapper}>
      <div className={style.search}> 
      <input
          className={style.inputt}
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>

      <div className={style.profile}>
        <a href="#">
          <CiHeart className={style.icon}></CiHeart>
        </a>
        <a href="#">
          <MdOutlineShoppingCart className={style.icon}></MdOutlineShoppingCart>
        </a>
        <a href="#">
          <AiOutlineUserAdd className={style.icon}></AiOutlineUserAdd>
        </a>
      </div>
    </nav>
  );
}

export default Navigation;

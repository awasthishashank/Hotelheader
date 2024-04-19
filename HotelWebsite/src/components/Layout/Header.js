import {Fragment} from "react";
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {

    return(
      <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
      <HeaderCartButton />
      </header>
         <div className= {classes['main-image']}>
            <img src="meals.jpg" alt="Courteous treatment will make a customer a walking advertisement"/>
         </div>
      </Fragment>
    )
};
export default Header;
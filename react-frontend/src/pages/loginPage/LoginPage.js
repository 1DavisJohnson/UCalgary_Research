import "./LoginPage.css";
import book from "../../images/loginPageImages/guy-with-book.png";
import horn from "../../images/loginPageImages/guy-with-horn.png";
import uofcLogo from "../../images/loginPageImages/uofcLogo.png";
import LoginForm from "../../components/loginPageComponents/LoginForm";

function LoginPage(props) {
  return (
    <div>
      <div className="initialFrame">
        <div className="leftFrame">
          <div className="image-stack-loginPage">
            <p>Find research oppurtunities here!</p>
            <img
              src={book}
              alt="cartoon with book"
              className="image-stack image-with-book"
            />
            <img
              src={horn}
              alt="cartoon with horn"
              className="image-stack image-with-horn"
            />
          </div>
        </div>
        <div className="rightFrame">
          <img src={uofcLogo} alt="logo for uofc" />
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
export default LoginPage;

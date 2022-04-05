import "./login.css";
import ctaLoginOne from "../../resources/login/cta-logo-one.svg";
import ctaLogoTwo from "../../resources/login/cta-logo-two.png";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-page__outer-content-container">
        <div className="login-page__content-container">
          <img src={ctaLoginOne} alt="cta-logo-one" id="cta-logo-one" />
          <div id="content-container__btn">GET ALL THERE</div>
          <div className="content-container__description">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. From 20/03/22, the price of Disney+ and
            The Disney Bundle will increase by ₹899/year.
          </div>
          <img src={ctaLogoTwo} alt="cta-logo-two" id="cta-logo-two" />
        </div>
      </div>
    </div>
  );
};

export default Login;

import MiniCart from './MiniCart';

export default () => (
  <div className="header">
    <div className="container">
      <div className="head">
        <div className="logo">
          <a href=""><img src="~/Content/images/logo.png" alt=""></a>
        </div>
      </div>
    </div>
    <div className="header-top">
      <div className="container">
        <div className="col-sm-5 col-md-offset-2  header-login">
          <ul>
            <li><a href="#">Login</a></li>
            <li><a href="#">Register</a></li>
          </ul>
        </div>
        <div className="col-sm-5 header-social">
          <ul>
            <li><a href="#"><i></i></a></li>
            <li><a href="#"><i className="ic1"></i></a></li>
            <li><a href="#"><i className="ic2"></i></a></li>
            <li><a href="#"><i className="ic3"></i></a></li>
            <li><a href="#"><i className="ic4"></i></a></li>
          </ul>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
    <div className="container">
      <div className="head-top">
        <div className="col-sm-8 col-md-offset-2 h_menu4">
          <nav className="navbar nav_bottom" role="navigation">
            <div className="navbar-header nav_2">
              <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
              <ul className="nav navbar-nav nav_1">
                <li><a className="color" href="#">Home</a></li>
                <li><a className="color3" href="#">Sale</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-sm-2 search-right">
          <MiniCart />
          <div className="clearfix"></div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  </div>
);

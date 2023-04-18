import "./ConsoleButton.scss";

const ConsoleButton = () => {
  return (
    <div className="row">
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
        <img src="/public/switch-icon.png" alt="Logo" className="img-fluid" />
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
        <img src="/public/ps4-icon.png" alt="Logo" className="img-fluid" />
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
        <img src="/public/ps5-icon.png" alt="Logo" className="img-fluid" />
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
        <img src="/public/xbox-icon.png" alt="Logo" className="img-fluid" />
      </div>
      <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
        <img src="/public/pc-icon.png" alt="Logo" className="img-fluid" />
      </div>
    </div>
  );
};

export default ConsoleButton;

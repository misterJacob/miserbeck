import React, { useState, useRef, createElement } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Select from "react-select";

const options = [
  { value: 100, label: "100" },
  { value: 200, label: "200" },
  { value: 300, label: "300" },
  { value: 400, label: "400" },
  { value: 500, label: "500" },
  { value: 600, label: "600" },
  { value: 700, label: "700" },
];

///////////////////////////////////////
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "2px solid #2bff01",
    color: state.isSelected ? "#1b01ffea" : "#2bff01",
    backgroundColor: state.isSelected ? "#2bff01" : "#1b01ffea",
  }),
  control: (provided) => ({
    ...provided,
    marginTop: "5%",
  }),
};

///////////////////////////////////////

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const [size, setSize] = useState(300);
  const [alert, setAlert] = useState(false);
  const [bgColor, setBgColor] = useState("#ff0000");
  const [color, setColor] = useState("#000000");
  const qrRef = useRef();

  const downLoadQRCode = (e) => {
    e.preventDefault();
    if (url === "") {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    } else {
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    setUrl("");
    console.log(document.body.appendChild(anchor));
    }
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };
  const onSelect = ({ value }) => {
    setSize(value);
  };
  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={size}
      level={"L"}
      bgColor={bgColor}
      fgColor={color}
      style={{ height: { size }, width: { size } }}
    />
  );

  return (
    <div className="qrcode-wrapper">
      <h1>QR Code Generator</h1>

      <div className="input-container">
        <form onSubmit={downLoadQRCode}>

          <label htmlFor="url">Insert a URL</label>
          <input
            type="url"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="Insert your Awesome website"
          />

          <label htmlFor="size">Size</label>
          <Select
            styles={customStyles}
            defaultValue={options[2]}
            onChange={onSelect}
            options={options}
          />

          <div className="background-color">
            <label htmlFor="color">Select a BackGround color</label>

            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>

          <div className="font-color">
            <label htmlFor="color">Select a color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <button
            type="submit"
            onClick={() => setShowQRCode(!showQRCode)}
          >
            DownLoad QR Code
          </button>
          {alert && <p className="alert-url">Please insert a valid URL</p>}
        </form>
        <div className="img-container">
          <img src="../../assets/images/images/qr-pic.jpg" alt="" />
        </div>
      </div>

        <div className={url ? "qrcode-container show" : "qrcode-container"}>
          <div className="canvas" ref={qrRef}>
            {qrcode}
          </div>
        </div>
    </div>
  );
};

export default QRCodeGenerator;

import "../uy ishi/burger.css";
import React from "react";

class Burg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kokat: 0,
      pomidor: 0,
      pishloq: 0,
      gosht: 0,
    };
  }
  
  //2.3
  render() {
    const kok = () => {
      this.setState({ kokat: this.state.kokat + 0.1 });
    };
    const kokMinus = () => {
      this.setState({ kokat: this.state.kokat - 0.1 });
    };

    const pom = () => {
      this.setState({ pomidor: this.state.pomidor + 0.4 });
    };
    const pomMinus = () => {
      this.setState({ pomidor: this.state.pomidor - 0.4 });
    };

    const pish = () => {
      this.setState({ pishloq: this.state.pishloq + 0.6 });
    };
    const pishMinus = () => {
      this.setState({ pishloq: this.state.pishloq - 0.6 });
    };

    const gosh = () => {
      this.setState({ gosht: this.state.gosht + 1.2 });
    };
    const goshMinus = () => {
      this.setState({ gosht: this.state.gosht - 1.2 });
    };

    
    return (
      <div className="car">
        <div className="jami">
          <h1>Umumiy hisob {this.state.kokat + this.state.pomidor + this.state.pishloq + this.state.gosht }$</h1>
        </div>
        <div className="ca">
          <div className="cal">
            <div className="ko">
              <p>
                Kokatlar <span>0.1$</span>
              </p>
              <button id="1" onClick={kok}>
                Qoshish
              </button>
              <button id="01" onClick={kokMinus}>
                Ochirish
              </button>
            </div>
            <div className="po">
              <p>
                Pomidor <span>0.4$</span>
              </p>
              <button id="2" onClick={pom}>
                Qoshish
              </button>
              <button id="02" onClick={pomMinus}>
                Ochirish
              </button>
            </div>
            <div className="pi">
              <p>
                Pishloq <span>0.6$</span>
              </p>
              <button id="3" onClick={pish}>
                Qoshish
              </button>
              <button id="03" onClick={pishMinus}>
                Ochirish
              </button>
            </div>
            <div className="go">
              <p>
                Gosht <span>1.2$</span>
              </p>
              <button id="4" onClick={gosh}>
                Qoshish
              </button>
              <button id="04" onClick={goshMinus}>
                Ochirish
              </button>
            </div>
          </div>
          <div className="carr">
            <div className="wrapper">
              <div className="tb"></div>
              <div className="k"></div>
              <div className="pomi"></div>
              <div className="sir"></div>
              <div className="g"></div>
              <div className="bb"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Burg;

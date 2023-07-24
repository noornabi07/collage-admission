import { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { MDBCard, MDBCardBody } from "mdbreact";
import './autocounter.css'
import img from '../../../public/bg-02.jpg'

const AutoCounter = () => {
  const [onScroll, setOnScroll] = useState(false);

  return (
    <div >
      <div className="featured-item bg-fixed text-white pt-8 my-20 mx-10 md:mx-0">

        <div className="md:flex justify-center items-center  bg-opacity-60 pb-20 pt-12 md:px-36">

          <div className="md:ml-10 p-5 md:p-0">
            <ReactVisibilitySensor>
              {({ isVisible }) => (
                <MDBCard>
                  <h3 className="text-center text-3xl font-bold my-10">IMPORTANT FACTS</h3>
                  <MDBCardBody>
                    <div className="flex justify-between items-center gap-16">
                      <div className="col-3">
                        <h3 className="text-2xl font-bold text-center px-2 mb-5 bg-yellow-300 text-black rounded-md">Teachers</h3>
                        <div className=" bg-slate-500 p-5 rounded-md">

                          <h4 className="text-5xl font-bold text-lime-400 text-center">
                            {isVisible && !onScroll ? (
                              <CountUp start={0} end={1000} onEnd={() => setOnScroll(true)} />
                            ) : (
                              1000
                            )}
                          </h4>
                        </div>
                      </div>
                      <div className="col-3">
                        <h3 className="text-2xl font-bold text-center mb-5 bg-yellow-300 px-2 text-black rounded-md">Million Graduates</h3>
                        <div className=" bg-slate-500 p-5 rounded-md">

                          <h4 className="text-5xl font-bold text-lime-400 text-center">
                            {isVisible && !onScroll ? (
                              <CountUp start={0} end={12548} onEnd={() => setOnScroll(true)} />
                            ) : (
                              12548
                            )}
                          </h4>
                        </div>
                      </div>
                      <div className="col-3">
                        <h3 className="text-2xl font-bold text-center mb-5 bg-yellow-300 px-2 text-black rounded-md">Admissions</h3>
                        <div className=" bg-slate-500 p-5 rounded-md">

                          <h4 className="text-5xl font-bold text-lime-400 text-center">
                            {isVisible && !onScroll ? (
                              <CountUp start={0} end={1045} onEnd={() => setOnScroll(true)} />
                            ) : (
                              1045
                            )}
                          </h4>
                        </div>
                      </div>
                      <div className="col-3">
                        <h3 className="text-2xl font-bold text-center mb-5 bg-yellow-300 px-2 text-black rounded-md">Countries</h3>
                        <div className=" bg-slate-500 p-5 rounded-md">

                          <h4 className="text-5xl font-bold text-lime-400 text-center">
                            {isVisible && !onScroll ? (
                              <CountUp start={0} end={345} onEnd={() => setOnScroll(true)} />
                            ) : (
                              345
                            )}
                          </h4>
                        </div>
                      </div>

                    </div>
                  </MDBCardBody>
                </MDBCard>
              )}
            </ReactVisibilitySensor>
          </div>
        </div>
      </div>
      <div className="mx-10 mt-20 flex justify-between gap-10">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div >
          <h1 className="text-6xl font-bold my-5">Find the right <br />learning option</h1>
          <p className="font-semibold text-2xl my-5">Start one of our 1000 high quality courses
            from the worlds leading experts today!</p>
            <button className="btn btn-outline btn-warning">Find Course</button>
        </div>
      </div>
    </div>
  );
};


export default AutoCounter;


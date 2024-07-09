import React from "react";
import FormComponent from "./Formcomponent";

function Section() {
  return (
    <>
      <div className="w-full bg-white flex row-span-1">
        <div className="w-1/3  ">
          <img className="h-full" src="pexels-olly-3756679.jpg"></img>
        </div>
        <div className="w-1/3"></div>
        <div className="w-1/3">
          <div>
            <h2 className="line">
              Empower Your Present and Future with Our Skills. Start Your
              Journey Today.
            </h2>
          </div>
          <div className="w-full">
            <button className="bg-violet-700 p-2 rounded-md w-full ">
              Get first class worth $50 for free
            </button>
          </div>

          <div className="bg-slate-300 mt-1  ">
            <div className="App">
              <FormComponent />
            </div>
            {/* <div className=" mb-1">
              <input type="text" placeholder="Name"></input>
            </div>
            <div className="mb-1">
              <input type="email" placeholder="email"></input>
            </div>
            <div className="mb-1">
              <input type="number" placeholder="number"></input>
            </div>
            <div className="mb-1">
              <input type="date" placeholder="dd/mm/yyyy"></input>
            </div>
            <div className="mb-1">
     

              <label for="cars"> </label>

              <select name="cars" id="cars">
                <option>select</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div> */}

            {/* <div className="w-full ">
              <button className="bg-indigo-400 p-2 rounded-md w-full ">
                submit
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;

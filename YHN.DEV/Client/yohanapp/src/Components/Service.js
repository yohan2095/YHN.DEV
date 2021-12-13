import React from "react";
import "./Service.css";
import fsd from "../Images/icons/full-stack-developer.svg";

function Service() {
  return (
    <div className='service'>
      <h1 className='service_title'>
        <span className='service_index'>03. </span>Service
      </h1>

      <p className='service_header'>
        You like my work ? You'd like to have your own personal web application
        ? You need a Web Program to solve a problem you face ?{" "}
        <span className='marker'>We could work together !</span>
      </p>

      <table className='service_table'>
        <thead>
          <tr>
            <th>Product</th>
            <th className='marker'>Single page Web App</th>
            <th className='marker'>Complex Web Program</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Pages</th>
            <td>1</td>
            <td>up to 10</td>
          </tr>
          <tr>
            <th>Revisions</th>
            <td>3</td>
            <td>6</td>
          </tr>
          <tr>
            <th>Delivery time</th>
            <td>2-4 business days</td>
            <td>7-14 business days</td>
          </tr>
          <tr>
            <th>Prices</th>
            <td>100$-250$</td>
            <td>400$-1500$</td>
          </tr>
        </tbody>
      </table>
      <p className='service_tableNote'>
        *Prices and Delivery times depends on the complexity of the project.
      </p>
      <p className='service_footer'>
        Intersted ? Contact me with a description of your project and I will
        send you an offer within 24 hours.
      </p>
      <img src={fsd} alt="full stack developer" className="service_image" />
    </div>
  );
}

export default Service;

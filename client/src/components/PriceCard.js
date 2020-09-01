import React from 'react';

const PriceCard = (props) => {
  const value =
    typeof parseInt(props.value) === 'number' && !isNaN(parseInt(props.value))
      ? Math.round(parseInt(props.value))
      : props.value;
  return (
    <div className="bg-white mr4-l mr2-m w-25-m w-20-l dib-ns bg-white br3 pa2 mw6 mv3 ba b--black-10">
      <div className="card-body">
        <img src={props.src} alt={props.src} className="img-responsive fr" />
        <h5 className="card-title mb3 center">{props.header} </h5>

        <h2 className="mb-1 text-primary mb3general">${value}</h2>
        <p className="card-text">
          <small className="text-muted">{props.label}</small>
        </p>
      </div>
    </div>
  );
};

export default PriceCard;

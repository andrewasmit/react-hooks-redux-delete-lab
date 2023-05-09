import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import Band from "./Band";
import { bandAdded } from "./bandsSlice";

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
  }

  const bandsToDisplay = bands.map((band) => {
    return <Band key={band.id} id={band.id} band={band.text} />;
  });

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>{bandsToDisplay}</ul>
    </div>
  );
}

export default BandsContainer;

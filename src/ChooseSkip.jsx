import React, { useState } from "react";
import SkipCard from "./components/SkipCard";
import skips from "./data/skips.json";
import "./ChooseSkip.css";

const ChooseSkip = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <div className="skip-grid">
            <h2>Choose Your Skip Size</h2>
            <p>Select the skip size that best suits your needs</p>

            <div className="grid">
                {skips.map((skip) => (
                    <SkipCard
                        key={skip.id}
                        skip={skip}
                        isSelected={selectedId === skip.id}
                        onSelect={setSelectedId}
                    />
                ))}
            </div>
        </div>
    );
};

export default ChooseSkip;

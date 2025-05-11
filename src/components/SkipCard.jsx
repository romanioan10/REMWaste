import React from "react";
import "./SkipCard.css";

const SkipCard = ({ skip, isSelected, onSelect }) => {
    const {
        size,
        hire_period_days,
        price_before_vat,
        vat,
        allowed_on_road,
        allows_heavy_waste
    } = skip;

    const imageSrc = `/images/${size}-yarder-skip.jpg`;
    const price = Math.round(price_before_vat * (1 + vat / 100));

    return (
        <div className={`skip-card-horizontal ${isSelected ? "selected" : ""}`}>
            <div className="skip-image-col">
                <img src={imageSrc} alt={`${size} yard skip`} />
            </div>

            <div className="skip-details-col">
                <div className="skip-top">
                    <div className="skip-title">{size} Yard Skip</div>
                    <div className="skip-price">£{price}</div>
                </div>

                <div className="skip-info">
                    <p>{hire_period_days} day hire period</p>
                    <p className="heavy-ok">{allows_heavy_waste ? "✔ Allows heavy waste" : "\u00A0"}</p>
                    {!allowed_on_road && <p className="not-road">🚫 Not allowed on the road</p>}
                </div>

                <div className="skip-actions">
                    <button onClick={() => onSelect(skip.id)}>
                        {isSelected ? "Selected" : "Select ▶"}
                    </button>
                </div>
            </div>
        </div>

    );
};

export default SkipCard;
import React from "react";

function TheTeam() {
    return (
        <div className="w3-container" style={{ padding: "128px 16px" }} id="team">
            <h3 className="w3-center">THE TEAM</h3>
            <p className="w3-center w3-large">The ones who run this company</p>
            <div className="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-card">
                        <img src="./img/Moo.jpg" alt="John" width="300" height="400" />
                        <div className="w3-container">
                            <h3>John Doe</h3>
                            <p className="w3-opacity">CEO & Founder</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p>
                                <button className="w3-button w3-light-grey w3-block">
                                    <i className="fa fa-envelope"></i> Contact
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-card">
                        <img src="./img/CP.jpg" alt="Jane" style={{ width: "100%" }} />
                        <div className="w3-container">
                            <h3>Anja Doe</h3>
                            <p className="w3-opacity">Art Director</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p>
                                <button className="w3-button w3-light-grey w3-block">
                                    <i className="fa fa-envelope"></i> Contact
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-card">
                        <img src="./img/Alpaca.jpg" alt="Mike" style={{ width: "100%" }} />
                        <div className="w3-container">
                            <h3>Mike Ross</h3>
                            <p className="w3-opacity">Web Designer</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p>
                                <button className="w3-button w3-light-grey w3-block">
                                    <i className="fa fa-envelope"></i> Contact
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-card">
                        <img src="./img/Alpaca1.jpg" alt="Dan" style={{ width: "100%" }} />
                        <div className="w3-container">
                            <h3>Dan Star</h3>
                            <p className="w3-opacity">Designer</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p>
                                <button className="w3-button w3-light-grey w3-block">
                                    <i className="fa fa-envelope"></i> Contact
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TheTeam;

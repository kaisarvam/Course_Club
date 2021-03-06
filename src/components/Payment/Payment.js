import React from 'react';
import './Payment.css';

const Payment = () => {
    return (
        <div className="mt-5 pt-5">
           <h1 className="pb-0 mb-2"> <strong> <span className="text-warning">Payment</span> Page </strong> </h1>
           <div className="container">
           <div className="container px-0 mt-0" id="bg-div">
    <div className="row justify-content-center">
        <div className="col-lg-9 col-12 ">
            <div className="card card0">
                <div className="d-flex" id="wrapper">
                    <div className="bg-light border-right" id="sidebar-wrapper">
                        <div className="sidebar-heading pt-5 pb-4"><strong>PAY WITH</strong></div>
                        <div className="list-group list-group-flush"> <a data-toggle="tab" href="#menu1" id="tab1" className="tabs list-group-item bg-light">
                                <div className="list-div my-2">
                                    <div className="fa fa-home"></div> &nbsp;&nbsp; Bank
                                </div>
                            </a> <a data-toggle="tab" href="#menu2" id="tab2" className="tabs list-group-item active1">
                                <div className="list-div my-2">
                                    <div className="fa fa-credit-card"></div> &nbsp;&nbsp; Card
                                </div>
                            </a> <a data-toggle="tab" href="#menu3" id="tab3" className="tabs list-group-item bg-light">
                                <div className="list-div my-2">
                                    <div className="fa fa-qrcode"></div> &nbsp;&nbsp;&nbsp; Visa QR <span id="new-label">NEW</span>
                                </div>
                            </a> </div>
                    </div> 
                    <div id="page-content-wrapper">
                        <div className="row pt-3" id="border-btm">
                            <div className="col-4"> <button className="btn btn-success mt-4 ml-3 mb-3" id="menu-toggle">
                                    <div className="bar4"></div>
                                    <div className="bar4"></div>
                                    <div className="bar4"></div>
                                </button> </div>
                            <div className="col-8">
                                <div className="row justify-content-right">
                                    <div className="col-12">
                                        <p className="mb-0 mr-4 mt-4 text-right">customer@email.com</p>
                                    </div>
                                </div>
                                <div className="row justify-content-right">
                                    <div className="col-12">
                                        <p className="mb-0 mr-4 text-right">Pay <span className="top-highlight">$ 100</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="text-center" id="test">Pay</div>
                        </div>
                        <div className="tab-content">
                            <div id="menu1" className="tab-pane">
                                <div className="row justify-content-center">
                                    <div className="col-11">
                                        <div className="form-card">
                                            <h3 className="mt-0 mb-4 text-center">Enter bank details to pay</h3>
                                            <form onsubmit="event.preventDefault()">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="input-group"> <input type="text" id="bk_nm" placeholder="BBB Bank" /> <label>BANK NAME</label> </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="input-group"> <input type="text" name="ben_nm" id="ben-nm" placeholder="John Smith" /> <label>BENEFICIARY NAME</label> </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="input-group"> <input type="text" name="scode" placeholder="ABCDAB1S" className="placeicon" minlength="8" maxlength="11" /> <label>SWIFT CODE</label> </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12"> <input type="submit" value="Pay $ 100" className="btn btn-success placeicon" /> </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p className="text-center mb-5" id="below-btn"><a href="#">Use a test card</a></p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu2" className="tab-pane in active">
                                <div className="row justify-content-center">
                                    <div className="col-11">
                                        <div className="form-card">
                                            <h3 className="mt-0 mb-4 text-center pt-4"><strong className="text-light "> Enter your card details to pay </strong></h3>
                                            <form onsubmit="event.preventDefault()">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="input-group"> <input type="text" id="cr_no" placeholder="0000 0000 0000 0000" minlength="19" maxlength="19" /> <label>CARD NUMBER</label> </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="input-group"> <input type="text" name="exp" id="exp" placeholder="MM/YY" minlength="5" maxlength="5" /> <label>CARD EXPIRY</label> </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="input-group"> <input type="password" name="cvcpwd" placeholder="&#9679;&#9679;&#9679;" className="placeicon" minlength="3" maxlength="3" /> <label>CVV</label> </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12"> <input type="submit" value="Pay $ 100" className="btn btn-success placeicon" /> </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p className="text-center mb-5" id="below-btn"><a href="#">Use a test card</a></p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="menu3" className="tab-pane">
                                <div className="row justify-content-center">
                                    <div className="col-11">
                                        <h3 className="mt-0 mb-4 text-center">Scan the QR code to pay</h3>
                                        <div className="row justify-content-center">
                                            <div id="qr"> <img src="https://i.imgur.com/DD4Npfw.jpg" width="200px" height="200px" alt="" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
           </div>
        </div>
    );
};

export default Payment;
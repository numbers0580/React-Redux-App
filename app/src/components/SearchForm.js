import React from 'react';
import {connect} from 'react-redux';
import {getTicker} from '../actions/ticker'

var tempTicker = '';

const SearchForm = props => {
    const submitData = evt => {
        evt.preventDefault();

        if(document.getElementById('manualCompany').value !== '') {
            // Search for manually entered ticker symbol
            tempTicker = document.getElementById('manualCompany').value;
            props.getTicker();
        } else if(document.getElementById('companyList').value !== '0') {
            // Search for pre-defined ticker symbol
            tempTicker = document.getElementById('companyList').value;
            props.getTicker();
        } else {
            // Form is not filled out
        }
    };

    return (
        <form>
            <div>
                {/* <label>Enter your Alpha Vantage API key:</label>
                <div>
                    <input type='password' />
                    <input type='button' value="Use Peter's" />
                </div> */}
            </div>
            <div>
                <label>Enter Ticker:&nbsp;</label>
                <input type='text' id='manualCompany' />
            </div>
            <div>
                <label>Or select one from the list:</label>
                <select id='companyList'>
                    <option value='0'>--- Manual Entry ---</option>
                    <option value='MMM'>3M</option>
                    <option value='ADBE'>Adobe, Inc</option>
                    <option value='AMZN'>Amazon.com, Inc</option>
                    <option value='AAL'>American Airlines</option>
                    <option value='AMT'>American Tower Corp</option>
                    <option value='ANTM'>Anthem</option>
                    <option value='AAPL'>Apple</option>
                    <option value='T'>AT&T</option>
                    <option value='BAC'>Bank of America</option>
                    <option value='BRK-B'>Berkshire Hathaway</option>
                    <option value='BA'>Boeing Co</option>
                    <option value='KMX'>Carmax</option>
                    <option value='CCL'>Carnival Corp</option>
                    <option value='CHTR'>Charter Communications</option>
                    <option value='CVX'>Chevron Corp</option>
                    <option value='CSCO'>Cisco Systems</option>
                    <option value='KO'>Coca Cola</option>
                    <option value='CMCSA'>Comcast Corp</option>
                    <option value='COP'>Conoco Phillips</option>
                    <option value='COST'>Costco</option>
                    <option value='CVS'>CVS Health Corp</option>
                    <option value='DAL'>Delta Airlines</option>
                    <option value='DISH'>Dish Network</option>
                    <option value='DIS'>Disney</option>
                    <option value='XOM'>Exxon Mobil</option>
                    <option value='FB'>Facebook, Inc</option>
                    <option value='FDX'>FedEx Corp</option>
                    <option value='F'>Ford Motor Co</option>
                    <option value='GE'>General Electric</option>
                    <option value='GM'>General Motors</option>
                    <option value='GILD'>Gilead Sciences</option>
                    <option value='GS'>Goldman Sachs</option>
                    <option value='GOOGL'>Google, Inc</option>
                    <option value='HD'>Home Depot, Inc</option>
                    <option value='HON'>Honeywell</option>
                    <option value='IBM'>International Business Machines</option>
                    <option value='INTC'>Intel Corp</option>
                    <option value='JNJ'>Johnson & Johnson</option>
                    <option value='JPM'>JP Morgan</option>
                    <option value='LVS'>Las Vegas Sands</option>
                    <option value='LOW'>Lowe's Corp</option>
                    <option value='MA'>Mastercard, Inc</option>
                    <option value='MCD'>McDonald's Corp</option>
                    <option value='MRK'>Merck & Co</option>
                    <option value='MSFT'>Microsoft Corp</option>
                    <option value='MS'>Morgan Stanley</option>
                    <option value='NFLX'>Netflix</option>
                    <option value='NKE'>Nike</option>
                    <option value='NKLA'>Nikola Motor Co</option>
                    <option value='ORCL'>Oracle</option>
                    <option value='PEP'>Pepsi Co</option>
                    <option value='PFE'>Pfizer</option>
                    <option value='PM'>Phillip Morris Int'l</option>
                    <option value='PG'>Proctor Gamble</option>
                    <option value='QCOM'>Qualcomm Inc</option>
                    <option value='RCL'>Royal Caribbeam Cruises</option>
                    <option value='SBUX'>Starbucks Corp</option>
                    <option value='TGT'>Target</option>
                    <option value='TSLA'>Tesla</option>
                    <option value='TMUS'>T-Mobile US</option>
                    <option value='UNH'>United Healthcare</option>
                    <option value='UPS'>United Parcel Service</option>
                    <option value='VZ'>Verizon Communications</option>
                    <option value='V'>Visa, Inc</option>
                    <option value='WMT'>Walmart, Inc</option>
                    <option value='WFC'>Wells Fargo & Co</option>
                    <option value='XEL'>Xcel Energy</option>
                    <option value='YUM'>Yum! Brands</option>
                    <option value='ZM'>Zoom Video Communications</option>
                </select>
            </div>
            <button onClick={submitData}>Submit</button>
        </form>
    );
};

const mapStateToProps = state => {
    console.log('Current tempTicker value:', tempTicker);

    return {
        gettingData: true,
        name: tempTicker
    };
};

export default connect(mapStateToProps, {getTicker})(SearchForm);
import React from "react";

// eslint-disable-next-line
const Activities = () => {
    const fillBox =  {display: 'none'}
        return (
            <div>
                <div className="hotel-search">
                <div id="findhotels">Find hotels in:</div>
                <div id="locationField">
                    <input id="autocomplete" placeholder="Enter a city" type="text" />
                </div>
                </div>

                <div id="map"></div>
                
                <div id="listing">
                <table id="resultsTable">
                    <tbody id="results"></tbody>
                </table>
                </div>

                <div style={fillBox}>
                <div id="info-content">
                    <table>
                    <tbody>
                    <tr id="iw-url-row" className="iw_table_row">
                        <td id="iw-icon" className="iw_table_icon"></td>
                        <td id="iw-url"></td>
                    </tr>
                    <tr id="iw-address-row" className="iw_table_row">
                        <td className="iw_attribute_name">Address:</td>
                        <td id="iw-address"></td>
                    </tr>
                    <tr id="iw-phone-row" className="iw_table_row">
                        <td className="iw_attribute_name">Telephone:</td>
                        <td id="iw-phone"></td>
                    </tr>
                    <tr id="iw-rating-row" className="iw_table_row">
                        <td className="iw_attribute_name">Rating:</td>
                        <td id="iw-rating"></td>
                    </tr>
                    <tr id="iw-website-row" className="iw_table_row">
                        <td className="iw_attribute_name">Website:</td>
                        <td id="iw-website"></td>
                    </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            
        );
}

export default Activities;

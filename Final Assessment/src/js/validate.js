/*
  Name: Jason Jun
  Student Number: 126683200
  Email: jjun10@myseneca.ca
*/

function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  //console.log('TODO - validate the longitude, latitude values before submitting');

  // Getting the values of the longitude and latitude values
  var long_value = document.querySelector("#observation_form").o_longitude
    .value;
  var lat_value = document.querySelector("#observation_form").o_latitude.value;

  // Getting the spans of the longitude and latitude
  var long_span = document
    .querySelector("#observation_form")
    .querySelector("#s_longitude > span");
  var lat_span = document
    .querySelector("#observation_form")
    .querySelector("#s_latitude > span");

  if (lat_value < -90 || lat_value > 90 || isNaN(lat_value)) {
    lat_span.innerHTML = "* must be a valid Latitude (-90 to 90)";
    return false;
  } else lat_span.innerHTML = "*";

  if (long_value < -180 || long_value > 180 || isNaN(long_value)) {
    long_span.innerHTML = "* must be a valide Longitude (-180 to 180)";
    return false;
  } else long_span.innerHTML = "*";

  return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};

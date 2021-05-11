/*
  Name: Jason Jun
  Student Number: 126683200
  Email: jjun10@myseneca.ca
*/

// Add the text to the <span>...<span> element in the element with id=table-title
function updateCardTitle(title) {
  var cardTitle = document.querySelector("#card-title span");
  cardTitle.innerHTML = title;
}

// Add the given <tr>...</tr> element to the table body element with id=rows
// function addRowToTable(row) {
//   var tableBody = document.getElementById("row");
//   tableBody.appendChild(row);
// }

// Remove all content from the card div
function clearAllCards() {
  var clearCard = document.querySelector("#card-data");

  if (clearCard.hasChildNodes()) clearCard.innerHTML = "";
}

// Creates a new card and adds
function createNewCard(n_card) {
  var newCard = document.querySelector("#card-data");
  newCard.appendChild(n_card);
}

/*
// Given a child element, create a <td> and add this child to it. Return the <td>.
function createTableCell(child) {
  var tdElement = document.createElement("td");
  tdElement.appendChild(child);
  return tdElement;
}

// Wraps a child element in a <td>...</td> and adds it to the table row
function addContentToRow(child, row) {
  row.appendChild(createTableCell(child));
}*/

// Given a URL src string and alt text string, create an <img> element and return:
// <img src="https://static.inaturalist.org/photos/109319291/square.jpg?1609877680" alt="Muskrat">
function createImg(src, alt) {
  var imgElement = document.createElement("img");
  imgElement.setAttribute("src", src);
  imgElement.setAttribute("alt", alt);

  return imgElement;
}

// Given a string of text, create and return a TextNode
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode
// function createText(text) {
//   var txtNode = document.createTextNode(text);
//   return txtNode;
// }

// create and return an anchor element.
// <a href="http://en.wikipedia.org/wiki/Muskrat">Muskrat</a>.  NOTE:
// The innerContent will be a TextNode or HTML Img Element (i.e., it
// won't be simple text).
function createAnchor(href, innerContent) {
  let anchorElement = document.createElement("a");
  anchorElement.setAttribute("href", href);
  anchorElement.innerText = innerContent;
  return anchorElement;
}

// Return a proper time element with its dateTime property set:
// <time datetime="2020-09-18">2020-09-18</time>
// function createTime(formatted) {
//   let newDate = formatted.replace(
//     /^(?<year>\d+)-(?<month>\d+)-(?<day>\d+)T.*$/,
//     "$<year>-$<month>-$<day>"
//   );

//   let timeElement = document.createElement("time");
//   timeElement.setAttribute("datetime", newDate);
//   timeElement.innerHTML = newDate;

//   return timeElement;
// }

// Given a boolean value (true/false) return a string "Yes" or "No"
// function toYesNo(value) {
//   let strResult = "No";

//   if (value == true) strResult = "Yes";
//   return strResult;
// }

// Converts an Observation object into DOM nodes that produce the following HTML:
//
//  <tr id="67868131">
//    <td>
//      <a href="https://www.inaturalist.org/observations/67868131">
//        <img
//          src="https://static.inaturalist.org/photos/109319291/square.jpg?1609877680"
//          alt="Muskrat">
//      </a>
//    </td>
//    <td>
//      <time datetime="2020-09-18">2020-09-18</time>
//    </td>
//    <td>
//      <a href="http://en.wikipedia.org/wiki/Muskrat">Muskrat</a>
//    </td>
//    <td>No</td>
//    <td>Yes</td>
//    <td>No</td>
//    <td>No</td>
//  </tr>
//
// Things to note in your solution:
//
// - Give the table row an id, using the observation's id
// - Create an anchor so you can click the photo and go to the observation's uri
// - Use the observation's name as the alt text of the image, and photoUrl as its src
// - Use a proper <time> element, and format the observation's date using a locale aware format, see
//   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
// - Use the observation's wikipediaUrl to provide a link when you click the name
// - Convert all the boolean values for endangered, native, threatened, introduced to "Yes" or "No" strings
// function buildRowForObservation(observation) {
//   // 1. Create the row for this observation with correct id: <tr id="67868131">...</tr>
//   const row = createTableRow(observation.id);

//   // 2. Create the photo, make it a link to the observation page, and put it in the first cell
//   // <img src="https://static.inaturalist.org/photos/109762131/square.jpg?1610308133">
//   // TODO: complete the code to create an img element using the other functions
//   // in this file, and assign the return value to photo.
//   const photo = createImg(observation.photoUrl, observation.name);

//   //3. <a href="https://www.inaturalist.org/observations/67868131">...</a>
//   const observationLink = createAnchor(observation.uri, photo);
//   // <td>...</td>
//   addContentToRow(observationLink, row);

//   // 4. Create the date and put in the second cell
//   const time = createTime(observation.date.toLocaleDateString());
//   addContentToRow(time, row);

//   // 5. Create the name with a link to its Wikipedia page in the third cell
//   const name = createText(observation.name);
//   const wikipediaLink = createAnchor(observation.wikipediaUrl, name);
//   addContentToRow(wikipediaLink, row);

//   // 4-9. Create a Yes/No text cell for each of the characteristics in the array
//   ["isEndangered", "isNative", "isThreatened", "isIntroduced"].forEach(
//     (characteristic) => {
//       const yesNoText = toYesNo(observation[characteristic]);
//       const yesNoNode = createText(yesNoText);
//       addContentToRow(yesNoNode, row);
//     }
//   );

//   // 10. TODO: replace this with a return of the fully built row for this observation
//   return row;
// }

function cardImg(url) {
  url = url.replace("square", "medium");
  let ci_Div = document.createElement("div");
  ci_Div.setAttribute("class", "card-img");
  ci_Div.setAttribute("style", `background-image: url(${url})`);

  return ci_Div;
}

function cardBody(name, date, uri, wikipediaUrl) {
  let cb_Div = document.createElement("div");
  cb_Div.setAttribute("class", "card-body");

  let t_header = document.createElement("h3");
  let t_anchor = createAnchor(wikipediaUrl, name);
  t_header.appendChild(t_anchor);
  cb_Div.appendChild(t_header);

  let f_header = document.createElement("h4");
  let f_anchor = createAnchor(uri, date.toLocaleDateString());
  f_header.appendChild(f_anchor);
  cb_Div.appendChild(f_header);

  return cb_Div;
}

function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  let ci_Div = document.createElement("div");
  ci_Div.className = "card-icons";

  if (isNative) {
    let n_icon = document.createElement("i");
    n_icon.setAttribute("class", "fas fa-leaf");
    n_icon.setAttribute("title", "Native");
    ci_Div.appendChild(n_icon);
  }

  if (isIntroduced) {
    let n_icon = document.createElement("i");
    n_icon.setAttribute("class", "fas fa-frog");
    n_icon.setAttribute("title", "Introduced");
    ci_Div.appendChild(n_icon);
  }

  if (isThreatened) {
    let n_icon = document.createElement("i");
    n_icon.setAttribute("class", "fas fa-radiation-alt");
    n_icon.setAttribute("title", "Threatened");
    ci_Div.appendChild(n_icon);
  }

  if (isEndangered) {
    let n_icon = document.createElement("i");
    n_icon.setAttribute("class", "fas fa-skull-crossbones");
    n_icon.setAttribute("title", "Endangered");
    ci_Div.appendChild(n_icon);
  }

  return ci_Div;
}

function buildCardForObservation(observation) {
  let observation_card = document.createElement("div");
  observation_card.setAttribute("class", "card");
  observation_card.setAttribute("id", observation.id);

  let c_image = cardImg(observation.photoUrl);
  observation_card.appendChild(c_image);

  let c_body = cardBody(
    observation.name,
    observation.date,
    observation.uri,
    observation.wikipediaUrl
  );
  observation_card.appendChild(c_body);

  let c_icon = cardIcons(
    observation.isNative,
    observation.isIntroduced,
    observation.isThreatened,
    observation.isEndangered
  );
  observation_card.appendChild(c_icon);

  return observation_card;
}

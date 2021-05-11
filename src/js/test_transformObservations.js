// const days = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', true];
// const smilmingDays = days.map(function (day, index) {
//   let obj = {
//     index: "",
//     day: ""
//   };

//   obj.index = index;
//   obj.day = day;

//   return obj;
// });
// console.log(smilmingDays);
// console.log(typeof smilmingDays[5].day);

function titleCase(s) {
  let result = "";

  if (s.search(/\s/) != -1) {
    const temp = s.split(" ");
    temp.forEach(
      (ele) => (result = result + ele[0].toUpperCase() + ele.slice(1) + " ")
    );
    result.trim();
  } else result = s[0].toUpperCase() + s.slice(1);

  return result;
}

function filterObservations(observations) {
  return observations.filter(function (observation) {
    // TODO
    return observation.taxon && observation.taxon.default_photo;
  });
}

/*
function transformObservations(observations) {
  return observations.map(function (observation) {
    let obj = {
      id: '',
      uri: '',
      coords: '',
      date: '',
      name: '',
      photoUrl: '',
      wikipediaUrl: '',
      isNative: '',
      isIntroduced: '',
      isThreatened: '',
    };

    obj.id = observation.id;
    obj.uri = observation.uri;
    obj.coords = observation.geojson.coordinates;

    // let _yyyy = observation.taxon.created_at.substr(0, 4);
    // let _mm = observation.taxon.created_at.substr(5, 2);
    // let _dd = observation.taxon.created_at.substr(8, 2);
    // let _newDate = new Date(_yyyy, (_mm - 1), _dd);
    // obj.date = "Date " + _newDate;
    // obj.date = new Date(Date.parse(observation.taxon.created_at));

    if (observation.taxon.preferred_common_name)
      obj.name = titleCase(observation.taxon.preferred_common_name);
    else if (observation.taxon.name)
      obj.name = titleCase(observation.taxon.name);
    else obj.name = null;

    if (observation.taxon.default_photo) {
      let _keys = Object.keys(observation.taxon.default_photo);
      let _values = Object.values(observation.taxon.default_photo);
      for (let i in _keys) {
        if (_keys[i] === 'square_url')
          obj.photoUrl = _values[i];
      }
    }
    else obj.photoUrl = null;

    // obj.photoUrl = observation.taxon.default_photo;
    obj.wikipediaUrl = observation.taxon.wikipedia_url;
    obj.isNative = Boolean(observation.taxon.native);
    obj.isIntroduced = observation.taxon.introduced;
    obj.isThreatened = observation.taxon.threatened;

    return obj;
  });
}
*/

function transformObservations(observations) {
  return observations.map(function (observation) {
    let obj = {
      id: observation.id,
      uri: observation.uri,
      coords: observation.geojson.coordinates,
      date: new Date(Date.parse(observation.taxon.created_at)),
      name: "",
      photoUrl: observation.taxon.default_photo.square_url,
      wikipediaUrl: observation.taxon.wikipedia_url,
      isNative: Boolean(observation.taxon.native),
      isIntroduced: Boolean(observation.taxon.introduced),
      isThreatened: Boolean(observation.taxon.threatened),
    };

    //* Insert Name
    if (observation.taxon.preferred_common_name)
      obj.name = titleCase(observation.taxon.preferred_common_name);
    else if (observation.taxon.name)
      obj.name = titleCase(observation.taxon.name);

    return obj;
  });
}

function filterOnlyNative(observations) {
  return observations.filter((obj) => obj.isNative);
}

const data = require("./data");
const filtered = filterObservations(data.results);
const transformed = transformObservations(filtered);
console.log(transformed);
// console.log(transformed[0].coords[0])

// console.log(filterOnlyNative(transformed));

// console.log(typeof transformObservations(data)[0].isNative);
// console.log(typeof transformObservations(data)[0].isIntroduced);

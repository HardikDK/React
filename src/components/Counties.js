import React, { useState } from 'react';
import { getCountryCode, getCountryDataList, continents, languages } from 'countries-list';
import countries2to3 from 'countries-list/minimal/countries.2to3.min.json';
import countries3to2 from 'countries-list/minimal/countries.3to2.min.json';
import languageNames from 'countries-list/minimal/languages.native.min';

const Countries = () => {
	const country = getCountryCode("India");
	const countriesDataList = getCountryDataList();
	// console.log('country', country);
	countriesDataList.map((country, key)=>console.log(country))
	// console.log('countriesDataList', countriesDataList);
	// console.log('countries2to3', countries2to3);
	// console.log('countries3to2', countries3to2);
	// console.log('languageNames', languageNames);
	// console.log('languages', languages);
	// console.log('countries2to3 length - ', Object.values(countries2to3));
	// console.log('countries3to2 length - ', Object.values(countries3to2));
	// console.log('languageNames length - ', Object.values(languageNames));
	// console.log('languages length - ', Object.values(languages));
	// console.log('continents', continents);
	// console.log('continents length - ', Object.values(continents));
	return (
		<div>
			<p>{country}</p>
			<ul>{countriesDataList.map((country, key) => 
				<li key={key} id={country.iso2}>{country.name}</li>
			)}</ul>
		</div>
	);
}

export default Countries;
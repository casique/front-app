export interface Results<Country> {
    next: string;
    previous: string;
    results: Country[];
}

export interface Person<T = string | Country> {
    name: string;
    country: T[];
}

export interface Country {
    name: string;
}

export const Countries:any = [
    "Bonaire, San Eustaquio y Saba",
    "China",
    "Islas Heard y McDonald",
    "Chipre",
    "Guinea Bisáu",
    "Santo Tomé y Príncipe",
    "Laos",
    "Albania",
    "Sudán",
    "Omán",
    "Ciudad del Vaticano",
    "Nigeria",
    "Egipto",
    "Chile",
    "Costa de Marfil",
    "Cabo Verde",
    "Japón",
    "Islas Ultramarinas Menores de Estados Unidos",
    "España",
    "República Centroafricana",
    "Djibouti",
    "Dinamarca",
    "Rusia",
    "Timor Oriental",
    "Sint Maarten",
    "Nueva Zelanda",
    "Togo",
    "Antártida",
    "Malawi",
    "Azerbaiyán",
    "Barbados",
    "Kosovo",
    "Mongolia",
    "Santa Elena, Ascensión y Tristán de Acuña",
    "Guayana Francesa",
    "Gabón",
    "Austria",
    "Arabia Saudita",
    "Samoa",
    "Bután",
    "Congo",
    "Fiyi",
    "Paraguay",
    "Alandia",
    "Surinam",
    "Islas Turcas y Caicos",
    "Chad",
    "San Marino",
    "Macao",
    "Australia",
    "Eritrea",
    "Guernsey",
    "Micronesia",
    "Venezuela",
    "San Pedro y Miquelón",
    "Sierra Leona",
    "Ecuador",
    "Senegal",
    "Libia",
    "Indonesia",
    "Bangladesh",
    "Islas Svalbard y Jan Mayen",
    "Tanzania",
    "Madagascar",
    "Islas Cook",
    "Suecia",
    "Honduras",
    "Panamá",
    "Aruba",
    "Macedonia del Norte",
    "Angola",
    "Jersey",
    "Dominica",
    "Palestina",
    "Uzbekistán",
    "Islas Malvinas",
    "Malta",
    "Líbano",
    "Islas Georgias del Sur y Sandwich del Sur",
    "Georgia",
    "Italia",
    "Maldivas",
    "Islas Marianas del Norte",
    "Kirguizistán",
    "Islas Marshall",
    "Perú",
    "Emiratos Árabes Unidos",
    "Islas Pitcairn",
    "Noruega",
    "Nauru",
    "Uganda",
    "Uruguay",
    "Croacia",
    "Kuwait",
    "Papúa Nueva Guinea",
    "Irlanda",
    "Armenia",
    "Groenlandia",
    "Islas Vírgenes de los Estados Unidos",
    "Guam",
    "Israel",
    "Brunei",
    "Hungría",
    "Isla de Man",
    "Ucrania",
    "Botswana",
    "Bélgica",
    "Tonga",
    "Benín",
    "Antigua y Barbuda",
    "Tailandia",
    "Cuba",
    "Zambia",
    "Isla de Navidad",
    "Kenia",
    "Suazilandia",
    "Nueva Caledonia",
    "Sudán del Sur",
    "Polonia",
    "Samoa Americana",
    "Mali",
    "Nicaragua",
    "Tokelau",
    "Guatemala",
    "Jordania",
    "Bolivia",
    "Isla de Norfolk",
    "Ghana",
    "Andorra",
    "Mozambique",
    "República Dominicana",
    "Territorio Británico del Océano Índico",
    "Gibraltar",
    "Catar",
    "Filipinas",
    "República Eslovaca",
    "Argentina",
    "Sudáfrica",
    "San Cristóbal y Nieves",
    "Santa Lucía",
    "Ruanda",
    "Martinica",
    "Kazajistán",
    "Grecia",
    "Malasia",
    "Lesotho",
    "Islas Feroe",
    "Países Bajos",
    "Canadá",
    "India",
    "Siria",
    "Islandia",
    "Mónaco",
    "Irak",
    "Marruecos",
    "Curazao",
    "Finlandia",
    "Bahamas",
    "Eslovenia",
    "Bulgaria",
    "Jamaica",
    "Bahrein",
    "Francia",
    "Comoras",
    "Brasil",
    "Etiopía",
    "Liechtenstein",
    "Gambia",
    "Níger",
    "Estonia",
    "Vietnam",
    "Bermudas",
    "Montenegro",
    "Islas Caimán",
    "Corea del Norte",
    "Luxemburgo",
    "Turkmenistán",
    "Palau",
    "Túnez",
    "Sahara Occidental",
    "Letonia",
    "Camerún",
    "Saint Martin",
    "Tierras Australes y Antárticas Francesas",
    "Iran",
    "Mauritania",
    "Estados Unidos de América",
    "Mauricio",
    "Islas Vírgenes",
    "San Bartolomé",
    "Reino Unido",
    "Montserrat",
    "Trinidad y Tobago",
    "Corea del Sur",
    "El Salvador",
    "Taiwán",
    "Isla de la Reunión",
    "Seychelles",
    "Serbia",
    "Afganistán",
    "Colombia",
    "Pakistán",
    "Lituania",
    "Hong Kong",
    "Congo (Rep. Dem.)",
    "Tuvalu",
    "Zimbabue",
    "Burkina Faso",
    "Bosnia y Herzegovina",
    "Guadalupe",
    "Singapur",
    "Guinea Ecuatorial",
    "Anguila",
    "Tayikistán",
    "Islas Cocos o Islas Keeling",
    "Niue",
    "Alemania",
    "Moldavia",
    "Somalia",
    "Myanmar",
    "República Checa",
    "Rumania",
    "Turquía",
    "Bielorrusia",
    "Mayotte",
    "Isla Bouvet",
    "Guyana",
    "Camboya",
    "Granada",
    "México",
    "Burundi",
    "Polinesia Francesa",
    "Sri Lanka",
    "Namibia",
    "San Vicente y Granadinas",
    "Yemen",
    "Guinea",
    "Suiza",
    "Kiribati",
    "Costa Rica",
    "Vanuatu",
    "Islas Salomón",
    "Wallis y Futuna",
    "Belice",
    "Puerto Rico",
    "Argelia",
    "Liberia",
    "Portugal"
]
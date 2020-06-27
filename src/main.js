const Apify = require("apify");
const rp = require("request-promise");
const municipiosData = [
  {
    clave: "16046",
    nombre: "Juarez, Michoacan"
  },
  {
    clave: "16047",
    nombre: "Jungapeo, Michoacan"
  },
  {
    clave: "16048",
    nombre: "Lagunillas, Michoacan"
  },
  {
    clave: "16049",
    nombre: "Madero, Michoacan"
  },
  {
    clave: "05035",
    nombre: "Torreon, Coahuila"
  },
  {
    clave: "05036",
    nombre: "Viesca, Coahuila"
  },
  {
    clave: "07012",
    nombre: "Berriozabal, Chiapas"
  },
  {
    clave: "11038",
    nombre: "Tarandacuao, Guanajuato"
  },
  {
    clave: "11039",
    nombre: "Tarimoro, Guanajuato"
  },
  {
    clave: "11040",
    nombre: "Tierra Blanca, Guanajuato"
  },
  {
    clave: "07061",
    nombre: "Ocozocoautla de Espinosa, Chiapas"
  },
  {
    clave: "07062",
    nombre: "Ostuacan, Chiapas"
  },
  {
    clave: "12009",
    nombre: "Atlamajalcingo del Monte, Guerrero"
  },
  {
    clave: "12010",
    nombre: "Atlixtac, Guerrero"
  },
  {
    clave: "12013",
    nombre: "Azoyu, Guerrero"
  },
  {
    clave: "07092",
    nombre: "Tecpatan, Chiapas"
  },
  {
    clave: "07093",
    nombre: "Tenejapa, Chiapas"
  },
  {
    clave: "07094",
    nombre: "Teopisca, Chiapas"
  },
  {
    clave: "07096",
    nombre: "Tila, Chiapas"
  },
  {
    clave: "07097",
    nombre: "Tonala, Chiapas"
  },
  {
    clave: "07098",
    nombre: "Totolapa, Chiapas"
  },
  {
    clave: "07099",
    nombre: "La Trinitaria, Chiapas"
  },
  {
    clave: "07100",
    nombre: "Tumbala, Chiapas"
  },
  {
    clave: "13047",
    nombre: "Pacula, Hidalgo"
  },
  {
    clave: "08054",
    nombre: "Riva Palacio, Chihuahua"
  },
  {
    clave: "08055",
    nombre: "Rosales, Chihuahua"
  },
  {
    clave: "08056",
    nombre: "Rosario, Chihuahua"
  },
  {
    clave: "13061",
    nombre: "Tepeapulco, Hidalgo"
  },
  {
    clave: "14011",
    nombre: "Atengo, Jalisco"
  },
  {
    clave: "14051",
    nombre: "Juanacatlan, Jalisco"
  },
  {
    clave: "10037",
    nombre: "Topia, Durango"
  },
  {
    clave: "14120",
    nombre: "Zapopan, Jalisco"
  },
  {
    clave: "14121",
    nombre: "Zapotiltic, Jalisco"
  },
  {
    clave: "14122",
    nombre: "Zapotitlan de Vadillo, Jalisco"
  },
  {
    clave: "14123",
    nombre: "Zapotlan del Rey, Jalisco"
  },
  {
    clave: "14124",
    nombre: "Zapotlanejo, Jalisco"
  },
  {
    clave: "13071",
    nombre: "Tlahuiltepa, Hidalgo"
  },
  {
    clave: "13072",
    nombre: "Tlanalapa, Hidalgo"
  },
  {
    clave: "15021",
    nombre: "Coatepec Harinas, Estado de Mexico"
  },
  {
    clave: "15029",
    nombre: "Chicoloapan, Estado de Mexico"
  },
  {
    clave: "15075",
    nombre: "San Martin de las Piramides, Estado de Mexico"
  },
  {
    clave: "17024",
    nombre: "Tlaltizapan de Zapata, Morelos"
  },
  {
    clave: "17025",
    nombre: "Tlaquiltenango, Morelos"
  },
  {
    clave: "19002",
    nombre: "Agualeguas, Nuevo Leon"
  },
  {
    clave: "19003",
    nombre: "Los Aldamas, Nuevo Leon"
  },
  {
    clave: "19004",
    nombre: "Allende, Nuevo Leon"
  },
  {
    clave: "19005",
    nombre: "Anahuac, Nuevo Leon"
  },
  {
    clave: "19009",
    nombre: "Cadereyta Jimenez, Nuevo Leon"
  },
  {
    clave: "19011",
    nombre: "Cerralvo, Nuevo Leon"
  },
  {
    clave: "19012",
    nombre: "Cienega de Flores, Nuevo Leon"
  },
  {
    clave: "19013",
    nombre: "China, Nuevo Leon"
  },
  {
    clave: "19014",
    nombre: "Doctor Arroyo, Nuevo Leon"
  },
  {
    clave: "19015",
    nombre: "Doctor Coss, Nuevo Leon"
  },
  {
    clave: "19031",
    nombre: "Juarez, Nuevo Leon"
  },
  {
    clave: "19032",
    nombre: "Lampazos de Naranjo, Nuevo Leon"
  },
  {
    clave: "19033",
    nombre: "Linares, Nuevo Leon"
  },
  {
    clave: "19034",
    nombre: "Marin, Nuevo Leon"
  },
  {
    clave: "20028",
    nombre: "Heroica Ciudad de Ejutla de Crespo, Oaxaca"
  },
  {
    clave: "19037",
    nombre: "Mina, Nuevo Leon"
  },
  {
    clave: "19038",
    nombre: "Montemorelos, Nuevo Leon"
  },
  {
    clave: "19039",
    nombre: "Monterrey, Nuevo Leon"
  },
  {
    clave: "19048",
    nombre: "Santa Catarina, Nuevo Leon"
  },
  {
    clave: "19049",
    nombre: "Santiago, Nuevo Leon"
  },
  {
    clave: "19050",
    nombre: "Vallecillo, Nuevo Leon"
  },
  {
    clave: "19051",
    nombre: "Villaldama, Nuevo Leon"
  },
  {
    clave: "20068",
    nombre: "Ocotlan de Morelos, Oaxaca"
  },
  {
    clave: "20002",
    nombre: "Acatlan de Perez Figueroa, Oaxaca"
  },
  {
    clave: "20031",
    nombre: "Tamazulapam del Espiritu Santo, Oaxaca"
  },
  {
    clave: "20005",
    nombre: "Asuncion Ixtaltepec, Oaxaca"
  },
  {
    clave: "20006",
    nombre: "Asuncion Nochixtlan, Oaxaca"
  },
  {
    clave: "20008",
    nombre: "Asuncion Tlacolulita, Oaxaca"
  },
  {
    clave: "20009",
    nombre: "Ayotzintepec, Oaxaca"
  },
  {
    clave: "20010",
    nombre: "El Barrio de la Soledad, Oaxaca"
  },
  {
    clave: "20012",
    nombre: "Candelaria Loxicha, Oaxaca"
  },
  {
    clave: "20015",
    nombre: "Coatecas Altas, Oaxaca"
  },
  {
    clave: "20018",
    nombre: "Concepcion Buenavista, Oaxaca"
  },
  {
    clave: "20113",
    nombre: "San Baltazar Loxicha, Oaxaca"
  },
  {
    clave: "20036",
    nombre: "Guevea de Humboldt, Oaxaca"
  },
  {
    clave: "20039",
    nombre: "Heroica Ciudad de Huajuapan de Leon, Oaxaca"
  },
  {
    clave: "20041",
    nombre: "Huautla de Jimenez, Oaxaca"
  },
  {
    clave: "20042",
    nombre: "Ixtlan de Juarez, Oaxaca"
  },
  {
    clave: "20043",
    nombre: "Heroica Ciudad de Juchitan de Zaragoza, Oaxaca"
  },
  {
    clave: "20044",
    nombre: "Loma Bonita, Oaxaca"
  },
  {
    clave: "20059",
    nombre: "Miahuatlan de Porfirio Diaz, Oaxaca"
  },
  {
    clave: "20073",
    nombre: "Putla Villa de Guerrero, Oaxaca"
  },
  {
    clave: "20093",
    nombre: "San Andres Lagunas, Oaxaca"
  },
  {
    clave: "20198",
    nombre: "San Juan Guichicovi, Oaxaca"
  },
  {
    clave: "20085",
    nombre: "San Agustin Loxicha, Oaxaca"
  },
  {
    clave: "20098",
    nombre: "San Andres Teotilalpam, Oaxaca"
  },
  {
    clave: "20104",
    nombre: "San Antonino el Alto, Oaxaca"
  },
  {
    clave: "20205",
    nombre: "San Juan Lalana, Oaxaca"
  },
  {
    clave: "20207",
    nombre: "San Juan Mazatlan, Oaxaca"
  },
  {
    clave: "20152",
    nombre: "San Francisco Tlapancingo, Oaxaca"
  },
  {
    clave: "20161",
    nombre: "San Jeronimo Sosola, Oaxaca"
  },
  {
    clave: "20175",
    nombre: "San Juan Bautista Atatlahuca, Oaxaca"
  },
  {
    clave: "20141",
    nombre: "San Francisco del Mar, Oaxaca"
  },
  {
    clave: "20177",
    nombre: "San Juan Bautista Cuicatlan, Oaxaca"
  },
  {
    clave: "20147",
    nombre: "San Francisco Nuxaño, Oaxaca"
  },
  {
    clave: "20149",
    nombre: "San Francisco Sola, Oaxaca"
  },
  {
    clave: "20155",
    nombre: "San Ildefonso Sola, Oaxaca"
  },
  {
    clave: "20156",
    nombre: "San Ildefonso Villa Alta, Oaxaca"
  },
  {
    clave: "20159",
    nombre: "San Jeronimo Coatlan, Oaxaca"
  },
  {
    clave: "20164",
    nombre: "San Jorge Nuchita, Oaxaca"
  },
  {
    clave: "20184",
    nombre: "San Juan Bautista Tuxtepec, Oaxaca"
  },
  {
    clave: "20185",
    nombre: "San Juan Cacahuatepec, Oaxaca"
  },
  {
    clave: "20186",
    nombre: "San Juan Cieneguilla, Oaxaca"
  },
  {
    clave: "20190",
    nombre: "San Juan Cotzocon, Oaxaca"
  },
  {
    clave: "20211",
    nombre: "San Juan Ozolotepec, Oaxaca"
  },
  {
    clave: "20212",
    nombre: "San Juan Petlapa, Oaxaca"
  },
  {
    clave: "20213",
    nombre: "San Juan Quiahije, Oaxaca"
  },
  {
    clave: "20214",
    nombre: "San Juan Quiotepec, Oaxaca"
  },
  {
    clave: "20202",
    nombre: "San Juan Lachao, Oaxaca"
  },
  {
    clave: "20217",
    nombre: "San Juan Tamazola, Oaxaca"
  },
  {
    clave: "20515",
    nombre: "Santo Domingo Tehuantepec, Oaxaca"
  },
  {
    clave: "20526",
    nombre: "Santos Reyes Nopala, Oaxaca"
  },
  {
    clave: "20457",
    nombre: "Santiago Camotlan, Oaxaca"
  },
  {
    clave: "20229",
    nombre: "San Lorenzo Texmelucan, Oaxaca"
  },
  {
    clave: "20230",
    nombre: "San Lorenzo Victoria, Oaxaca"
  },
  {
    clave: "20232",
    nombre: "San Lucas Ojitlan, Oaxaca"
  },
  {
    clave: "20277",
    nombre: "Villa Sola de Vega, Oaxaca"
  },
  {
    clave: "20278",
    nombre: "San Miguel Soyaltepec, Oaxaca"
  },
  {
    clave: "20279",
    nombre: "San Miguel Suchixtepec, Oaxaca"
  },
  {
    clave: "20261",
    nombre: "San Miguel Amatitlan, Oaxaca"
  },
  {
    clave: "20272",
    nombre: "San Miguel Panixtlahuaca, Oaxaca"
  },
  {
    clave: "20273",
    nombre: "San Miguel Peras, Oaxaca"
  },
  {
    clave: "20275",
    nombre: "San Miguel Quetzaltepec, Oaxaca"
  },
  {
    clave: "20290",
    nombre: "San Nicolas Hidalgo, Oaxaca"
  },
  {
    clave: "20291",
    nombre: "San Pablo Coatlan, Oaxaca"
  },
  {
    clave: "20549",
    nombre: "Villa Tezoatlan de Segura y Luna, Oaxaca"
  },
  {
    clave: "20306",
    nombre: "San Pedro el Alto, Oaxaca"
  },
  {
    clave: "20309",
    nombre: "San Pedro Ixcatlan, Oaxaca"
  },
  {
    clave: "20334",
    nombre: "Villa de Tututepec de Melchor Ocampo, Oaxaca"
  },
  {
    clave: "20318",
    nombre: "San Pedro Mixtepec Distrito 22, Oaxaca"
  },
  {
    clave: "20324",
    nombre: "San Pedro Pochutla, Oaxaca"
  },
  {
    clave: "20337",
    nombre: "San Pedro y San Pablo Ayutla, Oaxaca"
  },
  {
    clave: "20340",
    nombre: "San Pedro y San Pablo Tequixtepec, Oaxaca"
  },
  {
    clave: "20341",
    nombre: "San Pedro Yucunama, Oaxaca"
  },
  {
    clave: "26024",
    nombre: "Divisaderos, Sonora"
  },
  {
    clave: "26025",
    nombre: "Empalme, Sonora"
  },
  {
    clave: "26026",
    nombre: "Etchojoa, Sonora"
  },
  {
    clave: "20364",
    nombre: "Santa Catarina Juquila, Oaxaca"
  },
  {
    clave: "20366",
    nombre: "Santa Catarina Loxicha, Oaxaca"
  },
  {
    clave: "20401",
    nombre: "Santa Maria Colotepec, Oaxaca"
  },
  {
    clave: "20371",
    nombre: "Santa Catarina Ticua, Oaxaca"
  },
  {
    clave: "20377",
    nombre: "Santa Cruz Itundujia, Oaxaca"
  },
  {
    clave: "20378",
    nombre: "Santa Cruz Mixtepec, Oaxaca"
  },
  {
    clave: "20385",
    nombre: "Santa Cruz Xoxocotlan, Oaxaca"
  },
  {
    clave: "20386",
    nombre: "Santa Cruz Zenzontepec, Oaxaca"
  },
  {
    clave: "20389",
    nombre: "Santa Ines Yatzeche, Oaxaca"
  },
  {
    clave: "20394",
    nombre: "Santa Maria Alotepec, Oaxaca"
  },
  {
    clave: "20397",
    nombre: "Heroica Ciudad de Tlaxiaco, Oaxaca"
  },
  {
    clave: "20406",
    nombre: "Santa Maria Chilchotla, Oaxaca"
  },
  {
    clave: "20407",
    nombre: "Santa Maria Chimalapa, Oaxaca"
  },
  {
    clave: "20410",
    nombre: "Santa Maria Ecatepec, Oaxaca"
  },
  {
    clave: "20413",
    nombre: "Santa Maria Huatulco, Oaxaca"
  },
  {
    clave: "20417",
    nombre: "Santa Maria Jacatepec, Oaxaca"
  },
  {
    clave: "20424",
    nombre: "Santa Maria Ozolotepec, Oaxaca"
  },
  {
    clave: "20426",
    nombre: "Santa Maria Peñoles, Oaxaca"
  },
  {
    clave: "20427",
    nombre: "Santa Maria Petapa, Oaxaca"
  },
  {
    clave: "20435",
    nombre: "Santa Maria Tepantlali, Oaxaca"
  },
  {
    clave: "20447",
    nombre: "Santa Maria Zacatepec, Oaxaca"
  },
  {
    clave: "20450",
    nombre: "Santiago Amoltepec, Oaxaca"
  },
  {
    clave: "20459",
    nombre: "Santiago Chazumba, Oaxaca"
  },
  {
    clave: "20460",
    nombre: "Santiago Choapam, Oaxaca"
  },
  {
    clave: "20466",
    nombre: "Santiago Ixtayutla, Oaxaca"
  },
  {
    clave: "20467",
    nombre: "Santiago Jamiltepec, Oaxaca"
  },
  {
    clave: "20470",
    nombre: "Santiago Lachiguiri, Oaxaca"
  },
  {
    clave: "20477",
    nombre: "Santiago Minas, Oaxaca"
  },
  {
    clave: "20479",
    nombre: "Santiago Nejapilla, Oaxaca"
  },
  {
    clave: "20481",
    nombre: "Santiago Nuyoo, Oaxaca"
  },
  {
    clave: "20484",
    nombre: "Santiago Tamazola, Oaxaca"
  },
  {
    clave: "20498",
    nombre: "Santiago Yaveo, Oaxaca"
  },
  {
    clave: "20492",
    nombre: "Santiago Tilantongo, Oaxaca"
  },
  {
    clave: "20495",
    nombre: "Santiago Xanica, Oaxaca"
  },
  {
    clave: "20500",
    nombre: "Santiago Yosondua, Oaxaca"
  },
  {
    clave: "20513",
    nombre: "Santo Domingo Petapa, Oaxaca"
  },
  {
    clave: "20543",
    nombre: "Tataltepec de Valdes, Oaxaca"
  },
  {
    clave: "21017",
    nombre: "Atempan, Puebla"
  },
  {
    clave: "21018",
    nombre: "Atexcal, Puebla"
  },
  {
    clave: "21019",
    nombre: "Atlixco, Puebla"
  },
  {
    clave: "21071",
    nombre: "Huauchinango, Puebla"
  },
  {
    clave: "21072",
    nombre: "Huehuetla, Puebla"
  },
  {
    clave: "21022",
    nombre: "Atzitzihuacan, Puebla"
  },
  {
    clave: "21023",
    nombre: "Atzitzintla, Puebla"
  },
  {
    clave: "21024",
    nombre: "Axutla, Puebla"
  },
  {
    clave: "21025",
    nombre: "Ayotoxco de Guerrero, Puebla"
  },
  {
    clave: "21026",
    nombre: "Calpan, Puebla"
  },
  {
    clave: "21027",
    nombre: "Caltepec, Puebla"
  },
  {
    clave: "21031",
    nombre: "Coatzingo, Puebla"
  },
  {
    clave: "21032",
    nombre: "Cohetzala, Puebla"
  },
  {
    clave: "21033",
    nombre: "Cohuecan, Puebla"
  },
  {
    clave: "21035",
    nombre: "Coxcatlan, Puebla"
  },
  {
    clave: "21036",
    nombre: "Coyomeapan, Puebla"
  },
  {
    clave: "21037",
    nombre: "Coyotepec, Puebla"
  },
  {
    clave: "21081",
    nombre: "Ixcamilpa de Guerrero, Puebla"
  },
  {
    clave: "21082",
    nombre: "Ixcaquixtla, Puebla"
  },
  {
    clave: "21083",
    nombre: "Ixtacamaxtitlan, Puebla"
  },
  {
    clave: "21092",
    nombre: "Juan N. Mendez, Puebla"
  },
  {
    clave: "21093",
    nombre: "Lafragua, Puebla"
  },
  {
    clave: "21094",
    nombre: "Libres, Puebla"
  },
  {
    clave: "21096",
    nombre: "Mazapiltepec de Juarez, Puebla"
  },
  {
    clave: "21098",
    nombre: "Molcaxac, Puebla"
  },
  {
    clave: "21126",
    nombre: "San Jeronimo Tecuanipan, Puebla"
  },
  {
    clave: "21127",
    nombre: "San Jeronimo Xayacatlan, Puebla"
  },
  {
    clave: "21128",
    nombre: "San Jose Chiapa, Puebla"
  },
  {
    clave: "21129",
    nombre: "San Jose Miahuatlan, Puebla"
  },
  {
    clave: "21130",
    nombre: "San Juan Atenco, Puebla"
  },
  {
    clave: "21119",
    nombre: "San Andres Cholula, Puebla"
  },
  {
    clave: "21120",
    nombre: "San Antonio Cañada, Puebla"
  },
  {
    clave: "21121",
    nombre: "San Diego la Mesa Tochimiltzingo, Puebla"
  },
  {
    clave: "21122",
    nombre: "San Felipe Teotlalcingo, Puebla"
  },
  {
    clave: "21123",
    nombre: "San Felipe Tepatlan, Puebla"
  },
  {
    clave: "21145",
    nombre: "San Sebastian Tlacotepec, Puebla"
  },
  {
    clave: "21146",
    nombre: "Santa Catarina Tlaltempan, Puebla"
  },
  {
    clave: "21147",
    nombre: "Santa Ines Ahuatempan, Puebla"
  },
  {
    clave: "21148",
    nombre: "Santa Isabel Cholula, Puebla"
  },
  {
    clave: "21149",
    nombre: "Santiago Miahuatlan, Puebla"
  },
  {
    clave: "21150",
    nombre: "Huehuetlan el Grande, Puebla"
  },
  {
    clave: "22003",
    nombre: "Arroyo Seco, Queretaro"
  },
  {
    clave: "23007",
    nombre: "Lazaro Cardenas, Quintana Roo"
  },
  {
    clave: "23008",
    nombre: "Solidaridad, Quintana Roo"
  },
  {
    clave: "23009",
    nombre: "Tulum, Quintana Roo"
  },
  {
    clave: "24008",
    nombre: "Cerritos, San Luis Potosi"
  },
  {
    clave: "24009",
    nombre: "Cerro de San Pedro, San Luis Potosi"
  },
  {
    clave: "24010",
    nombre: "Ciudad del Maiz, San Luis Potosi"
  },
  {
    clave: "24011",
    nombre: "Ciudad Fernandez, San Luis Potosi"
  },
  {
    clave: "24012",
    nombre: "Tancanhuitz, San Luis Potosi"
  },
  {
    clave: "24013",
    nombre: "Ciudad Valles, San Luis Potosi"
  },
  {
    clave: "24015",
    nombre: "Charcas, San Luis Potosi"
  },
  {
    clave: "24016",
    nombre: "Ebano, San Luis Potosi"
  },
  {
    clave: "24017",
    nombre: "Guadalcazar, San Luis Potosi"
  },
  {
    clave: "24019",
    nombre: "Lagunillas, San Luis Potosi"
  },
  {
    clave: "24046",
    nombre: "Villa de Arriaga, San Luis Potosi"
  },
  {
    clave: "24047",
    nombre: "Villa de Guadalupe, San Luis Potosi"
  },
  {
    clave: "24051",
    nombre: "Villa Hidalgo, San Luis Potosi"
  },
  {
    clave: "24052",
    nombre: "Villa Juarez, San Luis Potosi"
  },
  {
    clave: "24053",
    nombre: "Axtla de Terrazas, San Luis Potosi"
  },
  {
    clave: "24057",
    nombre: "Matlapa, San Luis Potosi"
  },
  {
    clave: "26006",
    nombre: "Arizpe, Sonora"
  },
  {
    clave: "26008",
    nombre: "Bacadehuachi, Sonora"
  },
  {
    clave: "26022",
    nombre: "Cucurpe, Sonora"
  },
  {
    clave: "26029",
    nombre: "Guaymas, Sonora"
  },
  {
    clave: "26033",
    nombre: "Huatabampo, Sonora"
  },
  {
    clave: "26036",
    nombre: "Magdalena, Sonora"
  },
  {
    clave: "26040",
    nombre: "Nacori Chico, Sonora"
  },
  {
    clave: "26045",
    nombre: "Opodepe, Sonora"
  },
  {
    clave: "26051",
    nombre: "Rosario, Sonora"
  },
  {
    clave: "26052",
    nombre: "Sahuaripa, Sonora"
  },
  {
    clave: "26055",
    nombre: "San Luis Rio Colorado, Sonora"
  },
  {
    clave: "26062",
    nombre: "Suaqui Grande, Sonora"
  },
  {
    clave: "26064",
    nombre: "Trincheras, Sonora"
  },
  {
    clave: "26058",
    nombre: "Santa Ana, Sonora"
  },
  {
    clave: "28037",
    nombre: "Soto la Marina, Tamaulipas"
  },
  {
    clave: "28038",
    nombre: "Tampico, Tamaulipas"
  },
  {
    clave: "28039",
    nombre: "Tula, Tamaulipas"
  },
  {
    clave: "29015",
    nombre: "Ixtacuixtla de Mariano Matamoros, Tlaxcala"
  },
  {
    clave: "29016",
    nombre: "Ixtenco, Tlaxcala"
  },
  {
    clave: "29017",
    nombre: "Mazatecochco de Jose Maria Morelos, Tlaxcala"
  },
  {
    clave: "29018",
    nombre: "Contla de Juan Cuamatzi, Tlaxcala"
  },
  {
    clave: "26069",
    nombre: "Yecora, Sonora"
  },
  {
    clave: "26071",
    nombre: "Benito Juarez, Sonora"
  },
  {
    clave: "26072",
    nombre: "San Ignacio Rio Muerto, Sonora"
  },
  {
    clave: "27001",
    nombre: "Balancan, Tabasco"
  },
  {
    clave: "28005",
    nombre: "Burgos, Tamaulipas"
  },
  {
    clave: "28007",
    nombre: "Camargo, Tamaulipas"
  },
  {
    clave: "28008",
    nombre: "Casas, Tamaulipas"
  },
  {
    clave: "28010",
    nombre: "Cruillas, Tamaulipas"
  },
  {
    clave: "28011",
    nombre: "Gomez Farias, Tamaulipas"
  },
  {
    clave: "28012",
    nombre: "Gonzalez, Tamaulipas"
  },
  {
    clave: "28013",
    nombre: "Güemez, Tamaulipas"
  },
  {
    clave: "28014",
    nombre: "Guerrero, Tamaulipas"
  },
  {
    clave: "28015",
    nombre: "Gustavo Diaz Ordaz, Tamaulipas"
  },
  {
    clave: "28016",
    nombre: "Hidalgo, Tamaulipas"
  },
  {
    clave: "29055",
    nombre: "San Lucas Tecopilco, Tlaxcala"
  },
  {
    clave: "30012",
    nombre: "Amatitlan, Veracruz"
  },
  {
    clave: "30013",
    nombre: "Naranjos Amatlan, Veracruz"
  },
  {
    clave: "30014",
    nombre: "Amatlan de los Reyes, Veracruz"
  },
  {
    clave: "30015",
    nombre: "Angel R. Cabada, Veracruz"
  },
  {
    clave: "30016",
    nombre: "La Antigua, Veracruz"
  },
  {
    clave: "30017",
    nombre: "Apazapan, Veracruz"
  },
  {
    clave: "30093",
    nombre: "Jilotepec, Veracruz"
  },
  {
    clave: "30094",
    nombre: "Juan Rodriguez Clara, Veracruz"
  },
  {
    clave: "30095",
    nombre: "Juchique de Ferrer, Veracruz"
  },
  {
    clave: "29020",
    nombre: "Sanctorum de Lazaro Cardenas, Tlaxcala"
  },
  {
    clave: "29021",
    nombre: "Nanacamilpa de Mariano Arista, Tlaxcala"
  },
  {
    clave: "29022",
    nombre: "Acuamanala de Miguel Hidalgo, Tlaxcala"
  },
  {
    clave: "29023",
    nombre: "Nativitas, Tlaxcala"
  },
  {
    clave: "29024",
    nombre: "Panotla, Tlaxcala"
  },
  {
    clave: "29025",
    nombre: "San Pablo del Monte, Tlaxcala"
  },
  {
    clave: "29026",
    nombre: "Santa Cruz Tlaxcala, Tlaxcala"
  },
  {
    clave: "30097",
    nombre: "Lerdo de Tejada, Veracruz"
  },
  {
    clave: "29028",
    nombre: "Teolocholco, Tlaxcala"
  },
  {
    clave: "29029",
    nombre: "Tepeyanco, Tlaxcala"
  },
  {
    clave: "29030",
    nombre: "Terrenate, Tlaxcala"
  },
  {
    clave: "29031",
    nombre: "Tetla de la Solidaridad, Tlaxcala"
  },
  {
    clave: "29032",
    nombre: "Tetlatlahuca, Tlaxcala"
  },
  {
    clave: "29033",
    nombre: "Tlaxcala, Tlaxcala"
  },
  {
    clave: "29043",
    nombre: "Yauhquemehcan, Tlaxcala"
  },
  {
    clave: "29044",
    nombre: "Zacatelco, Tlaxcala"
  },
  {
    clave: "30177",
    nombre: "Tlacolulan, Veracruz"
  },
  {
    clave: "30178",
    nombre: "Tlacotalpan, Veracruz"
  },
  {
    clave: "30179",
    nombre: "Tlacotepec de Mejia, Veracruz"
  },
  {
    clave: "30180",
    nombre: "Tlachichilco, Veracruz"
  },
  {
    clave: "30181",
    nombre: "Tlalixcoyan, Veracruz"
  },
  {
    clave: "30182",
    nombre: "Tlalnelhuayocan, Veracruz"
  },
  {
    clave: "30183",
    nombre: "Tlapacoyan, Veracruz"
  },
  {
    clave: "30184",
    nombre: "Tlaquilpa, Veracruz"
  },
  {
    clave: "29046",
    nombre: "Emiliano Zapata, Tlaxcala"
  },
  {
    clave: "29050",
    nombre: "San Francisco Tetlanohcan, Tlaxcala"
  },
  {
    clave: "29052",
    nombre: "San Jose Teacalco, Tlaxcala"
  },
  {
    clave: "30001",
    nombre: "Acajete, Veracruz"
  },
  {
    clave: "30019",
    nombre: "Astacinga, Veracruz"
  },
  {
    clave: "30020",
    nombre: "Atlahuilco, Veracruz"
  },
  {
    clave: "30021",
    nombre: "Atoyac, Veracruz"
  },
  {
    clave: "30022",
    nombre: "Atzacan, Veracruz"
  },
  {
    clave: "30023",
    nombre: "Atzalan, Veracruz"
  },
  {
    clave: "30024",
    nombre: "Tlaltetela, Veracruz"
  },
  {
    clave: "30025",
    nombre: "Ayahualulco, Veracruz"
  },
  {
    clave: "30026",
    nombre: "Banderilla, Veracruz"
  },
  {
    clave: "30042",
    nombre: "Colipa, Veracruz"
  },
  {
    clave: "30043",
    nombre: "Comapa, Veracruz"
  },
  {
    clave: "30044",
    nombre: "Cordoba, Veracruz"
  },
  {
    clave: "30045",
    nombre: "Cosamaloapan de Carpio, Veracruz"
  },
  {
    clave: "30046",
    nombre: "Cosautlan de Carvajal, Veracruz"
  },
  {
    clave: "30047",
    nombre: "Coscomatepec, Veracruz"
  },
  {
    clave: "30048",
    nombre: "Cosoleacaque, Veracruz"
  },
  {
    clave: "30049",
    nombre: "Cotaxtla, Veracruz"
  },
  {
    clave: "30050",
    nombre: "Coxquihui, Veracruz"
  },
  {
    clave: "30051",
    nombre: "Coyutla, Veracruz"
  },
  {
    clave: "30052",
    nombre: "Cuichapa, Veracruz"
  },
  {
    clave: "30053",
    nombre: "Cuitlahuac, Veracruz"
  },
  {
    clave: "30054",
    nombre: "Chacaltianguis, Veracruz"
  },
  {
    clave: "30055",
    nombre: "Chalma, Veracruz"
  },
  {
    clave: "30056",
    nombre: "Chiconamel, Veracruz"
  },
  {
    clave: "30065",
    nombre: "Emiliano Zapata, Veracruz"
  },
  {
    clave: "30066",
    nombre: "Espinal, Veracruz"
  },
  {
    clave: "30067",
    nombre: "Filomeno Mata, Veracruz"
  },
  {
    clave: "30068",
    nombre: "Fortin, Veracruz"
  },
  {
    clave: "30069",
    nombre: "Gutierrez Zamora, Veracruz"
  },
  {
    clave: "30070",
    nombre: "Hidalgotitlan, Veracruz"
  },
  {
    clave: "30071",
    nombre: "Huatusco, Veracruz"
  },
  {
    clave: "30072",
    nombre: "Huayacocotla, Veracruz"
  },
  {
    clave: "30073",
    nombre: "Hueyapan de Ocampo, Veracruz"
  },
  {
    clave: "30099",
    nombre: "Maltrata, Veracruz"
  },
  {
    clave: "30100",
    nombre: "Manlio Fabio Altamirano, Veracruz"
  },
  {
    clave: "30101",
    nombre: "Mariano Escobedo, Veracruz"
  },
  {
    clave: "30102",
    nombre: "Martinez de la Torre, Veracruz"
  },
  {
    clave: "30103",
    nombre: "Mecatlan, Veracruz"
  },
  {
    clave: "30104",
    nombre: "Mecayapan, Veracruz"
  },
  {
    clave: "30105",
    nombre: "Medellin, Veracruz"
  },
  {
    clave: "30106",
    nombre: "Miahuatlan, Veracruz"
  },
  {
    clave: "30117",
    nombre: "Omealca, Veracruz"
  },
  {
    clave: "30121",
    nombre: "Ozuluama de Mascareñas, Veracruz"
  },
  {
    clave: "30122",
    nombre: "Pajapan, Veracruz"
  },
  {
    clave: "30123",
    nombre: "Panuco, Veracruz"
  },
  {
    clave: "30124",
    nombre: "Papantla, Veracruz"
  },
  {
    clave: "30132",
    nombre: "Las Vigas de Ramirez, Veracruz"
  },
  {
    clave: "30137",
    nombre: "Los Reyes, Veracruz"
  },
  {
    clave: "30139",
    nombre: "Saltabarranca, Veracruz"
  },
  {
    clave: "30186",
    nombre: "Tomatlan, Veracruz"
  },
  {
    clave: "30187",
    nombre: "Tonayan, Veracruz"
  },
  {
    clave: "30188",
    nombre: "Totutla, Veracruz"
  },
  {
    clave: "30189",
    nombre: "Tuxpan, Veracruz"
  },
  {
    clave: "30191",
    nombre: "Ursulo Galvan, Veracruz"
  },
  {
    clave: "30195",
    nombre: "Xoxocotla, Veracruz"
  },
  {
    clave: "30200",
    nombre: "Zentla, Veracruz"
  },
  {
    clave: "30201",
    nombre: "Zongolica, Veracruz"
  },
  {
    clave: "30202",
    nombre: "Zontecomatlan de Lopez y Fuentes, Veracruz"
  },
  {
    clave: "30203",
    nombre: "Zozocolco de Hidalgo, Veracruz"
  },
  {
    clave: "30204",
    nombre: "Agua Dulce, Veracruz"
  },
  {
    clave: "30205",
    nombre: "El Higo, Veracruz"
  },
  {
    clave: "30207",
    nombre: "Tres Valles, Veracruz"
  },
  {
    clave: "30208",
    nombre: "Carlos A. Carrillo, Veracruz"
  },
  {
    clave: "30209",
    nombre: "Tatahuicapan de Juarez, Veracruz"
  },
  {
    clave: "30210",
    nombre: "Uxpanapa, Veracruz"
  },
  {
    clave: "30211",
    nombre: "San Rafael, Veracruz"
  },
  {
    clave: "30212",
    nombre: "Santiago Sochiapan, Veracruz"
  },
  {
    clave: "31006",
    nombre: "Buctzotz, Yucatan"
  },
  {
    clave: "31050",
    nombre: "Merida, Yucatan"
  },
  {
    clave: "31008",
    nombre: "Calotmul, Yucatan"
  },
  {
    clave: "31011",
    nombre: "Celestun, Yucatan"
  },
  {
    clave: "31058",
    nombre: "Peto, Yucatan"
  },
  {
    clave: "31059",
    nombre: "Progreso, Yucatan"
  },
  {
    clave: "31017",
    nombre: "Chankom, Yucatan"
  },
  {
    clave: "31019",
    nombre: "Chemax, Yucatan"
  },
  {
    clave: "31065",
    nombre: "San Felipe, Yucatan"
  },
  {
    clave: "31028",
    nombre: "Dzilam de Bravo, Yucatan"
  },
  {
    clave: "31029",
    nombre: "Dzilam Gonzalez, Yucatan"
  },
  {
    clave: "31030",
    nombre: "Dzitas, Yucatan"
  },
  {
    clave: "31032",
    nombre: "Espita, Yucatan"
  },
  {
    clave: "31036",
    nombre: "Homun, Yucatan"
  },
  {
    clave: "31040",
    nombre: "Izamal, Yucatan"
  },
  {
    clave: "31047",
    nombre: "Mani, Yucatan"
  },
  {
    clave: "31052",
    nombre: "Motul, Yucatan"
  },
  {
    clave: "31101",
    nombre: "Uman, Yucatan"
  },
  {
    clave: "31102",
    nombre: "Valladolid, Yucatan"
  },
  {
    clave: "31061",
    nombre: "Rio Lagartos, Yucatan"
  },
  {
    clave: "32037",
    nombre: "Panuco, Zacatecas"
  },
  {
    clave: "32038",
    nombre: "Pinos, Zacatecas"
  },
  {
    clave: "32039",
    nombre: "Rio Grande, Zacatecas"
  },
  {
    clave: "32040",
    nombre: "Sain Alto, Zacatecas"
  },
  {
    clave: "31066",
    nombre: "Santa Elena, Yucatan"
  },
  {
    clave: "31067",
    nombre: "Seye, Yucatan"
  },
  {
    clave: "31069",
    nombre: "Sotuta, Yucatan"
  },
  {
    clave: "31071",
    nombre: "Sudzal, Yucatan"
  },
  {
    clave: "31079",
    nombre: "Tekax, Yucatan"
  },
  {
    clave: "31081",
    nombre: "Tekom, Yucatan"
  },
  {
    clave: "31084",
    nombre: "Temax, Yucatan"
  },
  {
    clave: "31085",
    nombre: "Temozon, Yucatan"
  },
  {
    clave: "31089",
    nombre: "Ticul, Yucatan"
  },
  {
    clave: "31091",
    nombre: "Tinum, Yucatan"
  },
  {
    clave: "31092",
    nombre: "Tixcacalcupul, Yucatan"
  },
  {
    clave: "31093",
    nombre: "Tixkokob, Yucatan"
  },
  {
    clave: "31096",
    nombre: "Tizimin, Yucatan"
  },
  {
    clave: "31098",
    nombre: "Tzucacab, Yucatan"
  },
  {
    clave: "31099",
    nombre: "Uayma, Yucatan"
  },
  {
    clave: "31104",
    nombre: "Yaxcaba, Yucatan"
  },
  {
    clave: "32001",
    nombre: "Apozol, Zacatecas"
  },
  {
    clave: "32002",
    nombre: "Apulco, Zacatecas"
  },
  {
    clave: "32042",
    nombre: "Sombrerete, Zacatecas"
  },
  {
    clave: "32043",
    nombre: "Susticacan, Zacatecas"
  },
  {
    clave: "32044",
    nombre: "Tabasco, Zacatecas"
  },
  {
    clave: "32045",
    nombre: "Tepechitlan, Zacatecas"
  },
  {
    clave: "32046",
    nombre: "Tepetongo, Zacatecas"
  },
  {
    clave: "32047",
    nombre: "Teul de Gonzalez Ortega, Zacatecas"
  },
  {
    clave: "32048",
    nombre: "Tlaltenango de Sanchez Roman, Zacatecas"
  },
  {
    clave: "32049",
    nombre: "Valparaiso, Zacatecas"
  },
  {
    clave: "32050",
    nombre: "Vetagrande, Zacatecas"
  },
  {
    clave: "32051",
    nombre: "Villa de Cos, Zacatecas"
  },
  {
    clave: "01001",
    nombre: "Aguascalientes, Aguascalientes"
  },
  {
    clave: "01002",
    nombre: "Asientos, Aguascalientes"
  },
  {
    clave: "01003",
    nombre: "Calvillo, Aguascalientes"
  },
  {
    clave: "01008",
    nombre: "San Jose de Gracia, Aguascalientes"
  },
  {
    clave: "01009",
    nombre: "Tepezala, Aguascalientes"
  },
  {
    clave: "01010",
    nombre: "El Llano, Aguascalientes"
  },
  {
    clave: "01011",
    nombre: "San Francisco de los Romo, Aguascalientes"
  },
  {
    clave: "02001",
    nombre: "Ensenada, Baja California"
  },
  {
    clave: "02002",
    nombre: "Mexicali, Baja California"
  },
  {
    clave: "02003",
    nombre: "Tecate, Baja California"
  },
  {
    clave: "02004",
    nombre: "Tijuana, Baja California"
  },
  {
    clave: "02005",
    nombre: "Playas de Rosarito, Baja California"
  },
  {
    clave: "03001",
    nombre: "Comondu, Baja California Sur"
  },
  {
    clave: "03002",
    nombre: "Mulege, Baja California Sur"
  },
  {
    clave: "03003",
    nombre: "La Paz, Baja California Sur"
  },
  {
    clave: "03008",
    nombre: "Los Cabos, Baja California Sur"
  },
  {
    clave: "03009",
    nombre: "Loreto, Baja California Sur"
  },
  {
    clave: "04001",
    nombre: "Calkini, Campeche"
  },
  {
    clave: "04002",
    nombre: "Campeche, Campeche"
  },
  {
    clave: "04003",
    nombre: "Carmen, Campeche"
  },
  {
    clave: "04004",
    nombre: "Champoton, Campeche"
  },
  {
    clave: "04005",
    nombre: "Hecelchakan, Campeche"
  },
  {
    clave: "07046",
    nombre: "Jiquipilas, Chiapas"
  },
  {
    clave: "07112",
    nombre: "San Juan Cancuc, Chiapas"
  },
  {
    clave: "17004",
    nombre: "Ayala, Morelos"
  },
  {
    clave: "18006",
    nombre: "Ixtlan del Rio, Nayarit"
  },
  {
    clave: "13018",
    nombre: "Chapulhuacan, Hidalgo"
  },
  {
    clave: "16015",
    nombre: "Coalcoman de Vazquez Pallares, Michoacan"
  },
  {
    clave: "16016",
    nombre: "Coeneo, Michoacan"
  },
  {
    clave: "16017",
    nombre: "Contepec, Michoacan"
  },
  {
    clave: "16018",
    nombre: "Copandaro, Michoacan"
  },
  {
    clave: "01004",
    nombre: "Cosio, Aguascalientes"
  },
  {
    clave: "01005",
    nombre: "Jesus Maria, Aguascalientes"
  },
  {
    clave: "01006",
    nombre: "Pabellon de Arteaga, Aguascalientes"
  },
  {
    clave: "01007",
    nombre: "Rincon de Romos, Aguascalientes"
  },
  {
    clave: "04006",
    nombre: "Hopelchen, Campeche"
  },
  {
    clave: "04007",
    nombre: "Palizada, Campeche"
  },
  {
    clave: "04008",
    nombre: "Tenabo, Campeche"
  },
  {
    clave: "04009",
    nombre: "Escarcega, Campeche"
  },
  {
    clave: "05002",
    nombre: "Acuña, Coahuila"
  },
  {
    clave: "16041",
    nombre: "Irimbo, Michoacan"
  },
  {
    clave: "16042",
    nombre: "Ixtlan, Michoacan"
  },
  {
    clave: "16043",
    nombre: "Jacona, Michoacan"
  },
  {
    clave: "16044",
    nombre: "Jimenez, Michoacan"
  },
  {
    clave: "16067",
    nombre: "Penjamillo, Michoacan"
  },
  {
    clave: "16092",
    nombre: "Tiquicheo de Nicolas Romero, Michoacan"
  },
  {
    clave: "16109",
    nombre: "Zinaparo, Michoacan"
  },
  {
    clave: "08030",
    nombre: "Guazapares, Chihuahua"
  },
  {
    clave: "18010",
    nombre: "Rosamorada, Nayarit"
  },
  {
    clave: "14119",
    nombre: "Zacoalco de Torres, Jalisco"
  },
  {
    clave: "16019",
    nombre: "Cotija, Michoacan"
  },
  {
    clave: "16020",
    nombre: "Cuitzeo, Michoacan"
  },
  {
    clave: "16021",
    nombre: "Charapan, Michoacan"
  },
  {
    clave: "16022",
    nombre: "Charo, Michoacan"
  },
  {
    clave: "15115",
    nombre: "Xonacatlan, Estado de Mexico"
  },
  {
    clave: "04010",
    nombre: "Calakmul, Campeche"
  },
  {
    clave: "04011",
    nombre: "Candelaria, Campeche"
  },
  {
    clave: "05001",
    nombre: "Abasolo, Coahuila"
  },
  {
    clave: "05003",
    nombre: "Allende, Coahuila"
  },
  {
    clave: "05004",
    nombre: "Arteaga, Coahuila"
  },
  {
    clave: "05005",
    nombre: "Candela, Coahuila"
  },
  {
    clave: "05006",
    nombre: "Castaños, Coahuila"
  },
  {
    clave: "05019",
    nombre: "Morelos, Coahuila"
  },
  {
    clave: "05020",
    nombre: "Muzquiz, Coahuila"
  },
  {
    clave: "16045",
    nombre: "Jiquilpan, Michoacan"
  },
  {
    clave: "05007",
    nombre: "Cuatro Cienegas, Coahuila"
  },
  {
    clave: "16050",
    nombre: "Maravatio, Michoacan"
  },
  {
    clave: "16051",
    nombre: "Marcos Castellanos, Michoacan"
  },
  {
    clave: "16052",
    nombre: "Lazaro Cardenas, Michoacan"
  },
  {
    clave: "16053",
    nombre: "Morelia, Michoacan"
  },
  {
    clave: "20049",
    nombre: "Magdalena Ocotlan, Oaxaca"
  },
  {
    clave: "16088",
    nombre: "Tarimbaro, Michoacan"
  },
  {
    clave: "16089",
    nombre: "Tepalcatepec, Michoacan"
  },
  {
    clave: "07072",
    nombre: "Pueblo Nuevo Solistahuacan, Chiapas"
  },
  {
    clave: "16112",
    nombre: "Zitacuaro, Michoacan"
  },
  {
    clave: "08048",
    nombre: "Namiquipa, Chihuahua"
  },
  {
    clave: "11024",
    nombre: "Pueblo Nuevo, Guanajuato"
  },
  {
    clave: "14006",
    nombre: "Ameca, Jalisco"
  },
  {
    clave: "05008",
    nombre: "Escobedo, Coahuila"
  },
  {
    clave: "05009",
    nombre: "Francisco I. Madero, Coahuila"
  },
  {
    clave: "05021",
    nombre: "Nadadores, Coahuila"
  },
  {
    clave: "16059",
    nombre: "Nuevo Urecho, Michoacan"
  },
  {
    clave: "16060",
    nombre: "Numaran, Michoacan"
  },
  {
    clave: "16061",
    nombre: "Ocampo, Michoacan"
  },
  {
    clave: "16062",
    nombre: "Pajacuaran, Michoacan"
  },
  {
    clave: "16063",
    nombre: "Panindicuaro, Michoacan"
  },
  {
    clave: "16064",
    nombre: "Paracuaro, Michoacan"
  },
  {
    clave: "16065",
    nombre: "Paracho, Michoacan"
  },
  {
    clave: "16066",
    nombre: "Patzcuaro, Michoacan"
  },
  {
    clave: "05010",
    nombre: "Frontera, Coahuila"
  },
  {
    clave: "05029",
    nombre: "Sacramento, Coahuila"
  },
  {
    clave: "05030",
    nombre: "Saltillo, Coahuila"
  },
  {
    clave: "05031",
    nombre: "San Buenaventura, Coahuila"
  },
  {
    clave: "05032",
    nombre: "San Juan de Sabinas, Coahuila"
  },
  {
    clave: "16068",
    nombre: "Periban, Michoacan"
  },
  {
    clave: "05011",
    nombre: "General Cepeda, Coahuila"
  },
  {
    clave: "05012",
    nombre: "Guerrero, Coahuila"
  },
  {
    clave: "07008",
    nombre: "Angel Albino Corzo, Chiapas"
  },
  {
    clave: "07009",
    nombre: "Arriaga, Chiapas"
  },
  {
    clave: "16069",
    nombre: "La Piedad, Michoacan"
  },
  {
    clave: "16070",
    nombre: "Purepero, Michoacan"
  },
  {
    clave: "16071",
    nombre: "Puruandiro, Michoacan"
  },
  {
    clave: "16072",
    nombre: "Querendaro, Michoacan"
  },
  {
    clave: "16073",
    nombre: "Quiroga, Michoacan"
  },
  {
    clave: "16074",
    nombre: "Cojumatlan de Regules, Michoacan"
  },
  {
    clave: "16075",
    nombre: "Los Reyes, Michoacan"
  },
  {
    clave: "16076",
    nombre: "Sahuayo, Michoacan"
  },
  {
    clave: "16077",
    nombre: "San Lucas, Michoacan"
  },
  {
    clave: "16078",
    nombre: "Santa Ana Maya, Michoacan"
  },
  {
    clave: "16079",
    nombre: "Salvador Escalante, Michoacan"
  },
  {
    clave: "16080",
    nombre: "Senguio, Michoacan"
  },
  {
    clave: "16081",
    nombre: "Susupuato, Michoacan"
  },
  {
    clave: "16082",
    nombre: "Tacambaro, Michoacan"
  },
  {
    clave: "16083",
    nombre: "Tancitaro, Michoacan"
  },
  {
    clave: "16084",
    nombre: "Tangamandapio, Michoacan"
  },
  {
    clave: "16085",
    nombre: "Tangancicuaro, Michoacan"
  },
  {
    clave: "16086",
    nombre: "Tanhuato, Michoacan"
  },
  {
    clave: "16087",
    nombre: "Taretan, Michoacan"
  },
  {
    clave: "05013",
    nombre: "Hidalgo, Coahuila"
  },
  {
    clave: "05014",
    nombre: "Jimenez, Coahuila"
  },
  {
    clave: "07036",
    nombre: "La Grandeza, Chiapas"
  },
  {
    clave: "07037",
    nombre: "Huehuetan, Chiapas"
  },
  {
    clave: "05015",
    nombre: "Juarez, Coahuila"
  },
  {
    clave: "05016",
    nombre: "Lamadrid, Coahuila"
  },
  {
    clave: "05017",
    nombre: "Matamoros, Coahuila"
  },
  {
    clave: "07038",
    nombre: "Huixtan, Chiapas"
  },
  {
    clave: "07039",
    nombre: "Huitiupan, Chiapas"
  },
  {
    clave: "07040",
    nombre: "Huixtla, Chiapas"
  },
  {
    clave: "07041",
    nombre: "La Independencia, Chiapas"
  },
  {
    clave: "07042",
    nombre: "Ixhuatan, Chiapas"
  },
  {
    clave: "07043",
    nombre: "Ixtacomitan, Chiapas"
  },
  {
    clave: "07044",
    nombre: "Ixtapa, Chiapas"
  },
  {
    clave: "07045",
    nombre: "Ixtapangajoya, Chiapas"
  },
  {
    clave: "05018",
    nombre: "Monclova, Coahuila"
  },
  {
    clave: "07047",
    nombre: "Jitotol, Chiapas"
  },
  {
    clave: "07048",
    nombre: "Juarez, Chiapas"
  },
  {
    clave: "07049",
    nombre: "Larrainzar, Chiapas"
  },
  {
    clave: "07050",
    nombre: "La Libertad, Chiapas"
  },
  {
    clave: "07051",
    nombre: "Mapastepec, Chiapas"
  },
  {
    clave: "07052",
    nombre: "Las Margaritas, Chiapas"
  },
  {
    clave: "16090",
    nombre: "Tingambato, Michoacan"
  },
  {
    clave: "16091",
    nombre: "Tingüindin, Michoacan"
  },
  {
    clave: "05022",
    nombre: "Nava, Coahuila"
  },
  {
    clave: "05023",
    nombre: "Ocampo, Coahuila"
  },
  {
    clave: "07070",
    nombre: "El Porvenir, Chiapas"
  },
  {
    clave: "07071",
    nombre: "Villa Comaltitlan, Chiapas"
  },
  {
    clave: "05024",
    nombre: "Parras, Coahuila"
  },
  {
    clave: "05025",
    nombre: "Piedras Negras, Coahuila"
  },
  {
    clave: "07106",
    nombre: "Venustiano Carranza, Chiapas"
  },
  {
    clave: "07107",
    nombre: "Villa Corzo, Chiapas"
  },
  {
    clave: "07108",
    nombre: "Villaflores, Chiapas"
  },
  {
    clave: "07109",
    nombre: "Yajalon, Chiapas"
  },
  {
    clave: "07110",
    nombre: "San Lucas, Chiapas"
  },
  {
    clave: "07111",
    nombre: "Zinacantan, Chiapas"
  },
  {
    clave: "05026",
    nombre: "Progreso, Coahuila"
  },
  {
    clave: "05027",
    nombre: "Ramos Arizpe, Coahuila"
  },
  {
    clave: "16093",
    nombre: "Tlalpujahua, Michoacan"
  },
  {
    clave: "16094",
    nombre: "Tlazazalca, Michoacan"
  },
  {
    clave: "16095",
    nombre: "Tocumbo, Michoacan"
  },
  {
    clave: "16096",
    nombre: "Tumbiscatio, Michoacan"
  },
  {
    clave: "16097",
    nombre: "Turicato, Michoacan"
  },
  {
    clave: "16098",
    nombre: "Tuxpan, Michoacan"
  },
  {
    clave: "16099",
    nombre: "Tuzantla, Michoacan"
  },
  {
    clave: "16100",
    nombre: "Tzintzuntzan, Michoacan"
  },
  {
    clave: "16101",
    nombre: "Tzitzio, Michoacan"
  },
  {
    clave: "16102",
    nombre: "Uruapan, Michoacan"
  },
  {
    clave: "16103",
    nombre: "Venustiano Carranza, Michoacan"
  },
  {
    clave: "16104",
    nombre: "Villamar, Michoacan"
  },
  {
    clave: "16105",
    nombre: "Vista Hermosa, Michoacan"
  },
  {
    clave: "16106",
    nombre: "Yurecuaro, Michoacan"
  },
  {
    clave: "16107",
    nombre: "Zacapu, Michoacan"
  },
  {
    clave: "16108",
    nombre: "Zamora, Michoacan"
  },
  {
    clave: "05028",
    nombre: "Sabinas, Coahuila"
  },
  {
    clave: "16110",
    nombre: "Zinapecuaro, Michoacan"
  },
  {
    clave: "16111",
    nombre: "Ziracuaretiro, Michoacan"
  },
  {
    clave: "05033",
    nombre: "San Pedro, Coahuila"
  },
  {
    clave: "16113",
    nombre: "Jose Sixto Verduzco, Michoacan"
  },
  {
    clave: "17001",
    nombre: "Amacuzac, Morelos"
  },
  {
    clave: "17002",
    nombre: "Atlatlahucan, Morelos"
  },
  {
    clave: "17003",
    nombre: "Axochiapan, Morelos"
  },
  {
    clave: "05034",
    nombre: "Sierra Mojada, Coahuila"
  },
  {
    clave: "17019",
    nombre: "Tepalcingo, Morelos"
  },
  {
    clave: "12055",
    nombre: "Taxco de Alarcon, Guerrero"
  },
  {
    clave: "15051",
    nombre: "Lerma, Estado de Mexico"
  },
  {
    clave: "16040",
    nombre: "Indaparapeo, Michoacan"
  },
  {
    clave: "05037",
    nombre: "Villa Union, Coahuila"
  },
  {
    clave: "07113",
    nombre: "Aldama, Chiapas"
  },
  {
    clave: "07114",
    nombre: "Benemerito de las Americas, Chiapas"
  },
  {
    clave: "05038",
    nombre: "Zaragoza, Coahuila"
  },
  {
    clave: "06001",
    nombre: "Armeria, Colima"
  },
  {
    clave: "06002",
    nombre: "Colima, Colima"
  },
  {
    clave: "06003",
    nombre: "Comala, Colima"
  },
  {
    clave: "06004",
    nombre: "Coquimatlan, Colima"
  },
  {
    clave: "06005",
    nombre: "Cuauhtemoc, Colima"
  },
  {
    clave: "06006",
    nombre: "Ixtlahuacan, Colima"
  },
  {
    clave: "06007",
    nombre: "Manzanillo, Colima"
  },
  {
    clave: "06008",
    nombre: "Minatitlan, Colima"
  },
  {
    clave: "06009",
    nombre: "Tecoman, Colima"
  },
  {
    clave: "06010",
    nombre: "Villa de Alvarez, Colima"
  },
  {
    clave: "07001",
    nombre: "Acacoyagua, Chiapas"
  },
  {
    clave: "07002",
    nombre: "Acala, Chiapas"
  },
  {
    clave: "07003",
    nombre: "Acapetahua, Chiapas"
  },
  {
    clave: "07004",
    nombre: "Altamirano, Chiapas"
  },
  {
    clave: "07005",
    nombre: "Amatan, Chiapas"
  },
  {
    clave: "08020",
    nombre: "Chinipas, Chihuahua"
  },
  {
    clave: "08021",
    nombre: "Delicias, Chihuahua"
  },
  {
    clave: "08022",
    nombre: "Dr. Belisario Dominguez, Chihuahua"
  },
  {
    clave: "08023",
    nombre: "Galeana, Chihuahua"
  },
  {
    clave: "08024",
    nombre: "Santa Isabel, Chihuahua"
  },
  {
    clave: "08025",
    nombre: "Gomez Farias, Chihuahua"
  },
  {
    clave: "08026",
    nombre: "Gran Morelos, Chihuahua"
  },
  {
    clave: "08027",
    nombre: "Guachochi, Chihuahua"
  },
  {
    clave: "08028",
    nombre: "Guadalupe, Chihuahua"
  },
  {
    clave: "08029",
    nombre: "Guadalupe y Calvo, Chihuahua"
  },
  {
    clave: "07006",
    nombre: "Amatenango de la Frontera, Chiapas"
  },
  {
    clave: "08031",
    nombre: "Guerrero, Chihuahua"
  },
  {
    clave: "08032",
    nombre: "Hidalgo del Parral, Chihuahua"
  },
  {
    clave: "08033",
    nombre: "Huejotitan, Chihuahua"
  },
  {
    clave: "08034",
    nombre: "Ignacio Zaragoza, Chihuahua"
  },
  {
    clave: "08035",
    nombre: "Janos, Chihuahua"
  },
  {
    clave: "08036",
    nombre: "Jimenez, Chihuahua"
  },
  {
    clave: "08037",
    nombre: "Juarez, Chihuahua"
  },
  {
    clave: "08038",
    nombre: "Julimes, Chihuahua"
  },
  {
    clave: "08039",
    nombre: "Lopez, Chihuahua"
  },
  {
    clave: "08040",
    nombre: "Madera, Chihuahua"
  },
  {
    clave: "08041",
    nombre: "Maguarichi, Chihuahua"
  },
  {
    clave: "08042",
    nombre: "Manuel Benavides, Chihuahua"
  },
  {
    clave: "08043",
    nombre: "Matachi, Chihuahua"
  },
  {
    clave: "08044",
    nombre: "Matamoros, Chihuahua"
  },
  {
    clave: "08045",
    nombre: "Meoqui, Chihuahua"
  },
  {
    clave: "08046",
    nombre: "Morelos, Chihuahua"
  },
  {
    clave: "08047",
    nombre: "Moris, Chihuahua"
  },
  {
    clave: "07007",
    nombre: "Amatenango del Valle, Chiapas"
  },
  {
    clave: "07010",
    nombre: "Bejucal de Ocampo, Chiapas"
  },
  {
    clave: "08049",
    nombre: "Nonoava, Chihuahua"
  },
  {
    clave: "08050",
    nombre: "Nuevo Casas Grandes, Chihuahua"
  },
  {
    clave: "08051",
    nombre: "Ocampo, Chihuahua"
  },
  {
    clave: "08052",
    nombre: "Ojinaga, Chihuahua"
  },
  {
    clave: "17009",
    nombre: "Huitzilac, Morelos"
  },
  {
    clave: "17010",
    nombre: "Jantetelco, Morelos"
  },
  {
    clave: "17011",
    nombre: "Jiutepec, Morelos"
  },
  {
    clave: "17012",
    nombre: "Jojutla, Morelos"
  },
  {
    clave: "17013",
    nombre: "Jonacatepec, Morelos"
  },
  {
    clave: "17014",
    nombre: "Mazatepec, Morelos"
  },
  {
    clave: "17015",
    nombre: "Miacatlan, Morelos"
  },
  {
    clave: "17016",
    nombre: "Ocuituco, Morelos"
  },
  {
    clave: "17017",
    nombre: "Puente de Ixtla, Morelos"
  },
  {
    clave: "17018",
    nombre: "Temixco, Morelos"
  },
  {
    clave: "07011",
    nombre: "Bella Vista, Chiapas"
  },
  {
    clave: "07013",
    nombre: "Bochil, Chiapas"
  },
  {
    clave: "07014",
    nombre: "El Bosque, Chiapas"
  },
  {
    clave: "07015",
    nombre: "Cacahoatan, Chiapas"
  },
  {
    clave: "07016",
    nombre: "Catazaja, Chiapas"
  },
  {
    clave: "07017",
    nombre: "Cintalapa, Chiapas"
  },
  {
    clave: "07018",
    nombre: "Coapilla, Chiapas"
  },
  {
    clave: "07019",
    nombre: "Comitan de Dominguez, Chiapas"
  },
  {
    clave: "07020",
    nombre: "La Concordia, Chiapas"
  },
  {
    clave: "07021",
    nombre: "Copainala, Chiapas"
  },
  {
    clave: "07022",
    nombre: "Chalchihuitan, Chiapas"
  },
  {
    clave: "07023",
    nombre: "Chamula, Chiapas"
  },
  {
    clave: "09013",
    nombre: "Xochimilco, Ciudad de Mexico"
  },
  {
    clave: "17020",
    nombre: "Tepoztlan, Morelos"
  },
  {
    clave: "17021",
    nombre: "Tetecala, Morelos"
  },
  {
    clave: "17022",
    nombre: "Tetela del Volcan, Morelos"
  },
  {
    clave: "20050",
    nombre: "Magdalena Peñasco, Oaxaca"
  },
  {
    clave: "10010",
    nombre: "Hidalgo, Durango"
  },
  {
    clave: "07024",
    nombre: "Chanal, Chiapas"
  },
  {
    clave: "07025",
    nombre: "Chapultenango, Chiapas"
  },
  {
    clave: "07026",
    nombre: "Chenalho, Chiapas"
  },
  {
    clave: "07027",
    nombre: "Chiapa de Corzo, Chiapas"
  },
  {
    clave: "07028",
    nombre: "Chiapilla, Chiapas"
  },
  {
    clave: "10003",
    nombre: "Coneto de Comonfort, Durango"
  },
  {
    clave: "10004",
    nombre: "Cuencame, Durango"
  },
  {
    clave: "10005",
    nombre: "Durango, Durango"
  },
  {
    clave: "10006",
    nombre: "General Simon Bolivar, Durango"
  },
  {
    clave: "10007",
    nombre: "Gomez Palacio, Durango"
  },
  {
    clave: "10008",
    nombre: "Guadalupe Victoria, Durango"
  },
  {
    clave: "10009",
    nombre: "Guanacevi, Durango"
  },
  {
    clave: "07029",
    nombre: "Chicoasen, Chiapas"
  },
  {
    clave: "07030",
    nombre: "Chicomuselo, Chiapas"
  },
  {
    clave: "07031",
    nombre: "Chilon, Chiapas"
  },
  {
    clave: "07032",
    nombre: "Escuintla, Chiapas"
  },
  {
    clave: "10011",
    nombre: "Inde, Durango"
  },
  {
    clave: "10012",
    nombre: "Lerdo, Durango"
  },
  {
    clave: "10013",
    nombre: "Mapimi, Durango"
  },
  {
    clave: "10014",
    nombre: "Mezquital, Durango"
  },
  {
    clave: "10015",
    nombre: "Nazas, Durango"
  },
  {
    clave: "10016",
    nombre: "Nombre de Dios, Durango"
  },
  {
    clave: "10017",
    nombre: "Ocampo, Durango"
  },
  {
    clave: "10018",
    nombre: "El Oro, Durango"
  },
  {
    clave: "10019",
    nombre: "Otaez, Durango"
  },
  {
    clave: "10020",
    nombre: "Panuco de Coronado, Durango"
  },
  {
    clave: "10021",
    nombre: "Peñon Blanco, Durango"
  },
  {
    clave: "10022",
    nombre: "Poanas, Durango"
  },
  {
    clave: "10023",
    nombre: "Pueblo Nuevo, Durango"
  },
  {
    clave: "10024",
    nombre: "Rodeo, Durango"
  },
  {
    clave: "10025",
    nombre: "San Bernardo, Durango"
  },
  {
    clave: "10026",
    nombre: "San Dimas, Durango"
  },
  {
    clave: "10027",
    nombre: "San Juan de Guadalupe, Durango"
  },
  {
    clave: "10028",
    nombre: "San Juan del Rio, Durango"
  },
  {
    clave: "18003",
    nombre: "Amatlan de Cañas, Nayarit"
  },
  {
    clave: "18004",
    nombre: "Compostela, Nayarit"
  },
  {
    clave: "18005",
    nombre: "Huajicori, Nayarit"
  },
  {
    clave: "07033",
    nombre: "Francisco Leon, Chiapas"
  },
  {
    clave: "07034",
    nombre: "Frontera Comalapa, Chiapas"
  },
  {
    clave: "07035",
    nombre: "Frontera Hidalgo, Chiapas"
  },
  {
    clave: "10033",
    nombre: "Suchil, Durango"
  },
  {
    clave: "10034",
    nombre: "Tamazula, Durango"
  },
  {
    clave: "10035",
    nombre: "Tepehuanes, Durango"
  },
  {
    clave: "18007",
    nombre: "Jala, Nayarit"
  },
  {
    clave: "18008",
    nombre: "Xalisco, Nayarit"
  },
  {
    clave: "18009",
    nombre: "Del Nayar, Nayarit"
  },
  {
    clave: "07053",
    nombre: "Mazapa de Madero, Chiapas"
  },
  {
    clave: "11010",
    nombre: "Coroneo, Guanajuato"
  },
  {
    clave: "11011",
    nombre: "Cortazar, Guanajuato"
  },
  {
    clave: "11012",
    nombre: "Cueramaro, Guanajuato"
  },
  {
    clave: "11013",
    nombre: "Doctor Mora, Guanajuato"
  },
  {
    clave: "11014",
    nombre: "Dolores Hidalgo Cuna de la Independencia Nacional, Guanajuato"
  },
  {
    clave: "11015",
    nombre: "Guanajuato, Guanajuato"
  },
  {
    clave: "11016",
    nombre: "Huanimaro, Guanajuato"
  },
  {
    clave: "11017",
    nombre: "Irapuato, Guanajuato"
  },
  {
    clave: "11018",
    nombre: "Jaral del Progreso, Guanajuato"
  },
  {
    clave: "11019",
    nombre: "Jerecuaro, Guanajuato"
  },
  {
    clave: "11020",
    nombre: "Leon, Guanajuato"
  },
  {
    clave: "11021",
    nombre: "Moroleon, Guanajuato"
  },
  {
    clave: "11022",
    nombre: "Ocampo, Guanajuato"
  },
  {
    clave: "11023",
    nombre: "Penjamo, Guanajuato"
  },
  {
    clave: "07054",
    nombre: "Mazatan, Chiapas"
  },
  {
    clave: "11025",
    nombre: "Purisima del Rincon, Guanajuato"
  },
  {
    clave: "11026",
    nombre: "Romita, Guanajuato"
  },
  {
    clave: "11027",
    nombre: "Salamanca, Guanajuato"
  },
  {
    clave: "11028",
    nombre: "Salvatierra, Guanajuato"
  },
  {
    clave: "11029",
    nombre: "San Diego de la Union, Guanajuato"
  },
  {
    clave: "11030",
    nombre: "San Felipe, Guanajuato"
  },
  {
    clave: "11031",
    nombre: "San Francisco del Rincon, Guanajuato"
  },
  {
    clave: "11032",
    nombre: "San Jose Iturbide, Guanajuato"
  },
  {
    clave: "11033",
    nombre: "San Luis de la Paz, Guanajuato"
  },
  {
    clave: "11034",
    nombre: "Santa Catarina, Guanajuato"
  },
  {
    clave: "11035",
    nombre: "Santa Cruz de Juventino Rosas, Guanajuato"
  },
  {
    clave: "11036",
    nombre: "Santiago Maravatio, Guanajuato"
  },
  {
    clave: "11037",
    nombre: "Silao de la Victoria, Guanajuato"
  },
  {
    clave: "07055",
    nombre: "Metapa, Chiapas"
  },
  {
    clave: "11041",
    nombre: "Uriangato, Guanajuato"
  },
  {
    clave: "11042",
    nombre: "Valle de Santiago, Guanajuato"
  },
  {
    clave: "11043",
    nombre: "Victoria, Guanajuato"
  },
  {
    clave: "11044",
    nombre: "Villagran, Guanajuato"
  },
  {
    clave: "11045",
    nombre: "Xichu, Guanajuato"
  },
  {
    clave: "11046",
    nombre: "Yuriria, Guanajuato"
  },
  {
    clave: "12001",
    nombre: "Acapulco de Juarez, Guerrero"
  },
  {
    clave: "12002",
    nombre: "Ahuacuotzingo, Guerrero"
  },
  {
    clave: "12003",
    nombre: "Ajuchitlan del Progreso, Guerrero"
  },
  {
    clave: "12004",
    nombre: "Alcozauca de Guerrero, Guerrero"
  },
  {
    clave: "18011",
    nombre: "Ruiz, Nayarit"
  },
  {
    clave: "18012",
    nombre: "San Blas, Nayarit"
  },
  {
    clave: "18013",
    nombre: "San Pedro Lagunillas, Nayarit"
  },
  {
    clave: "18014",
    nombre: "Santa Maria del Oro, Nayarit"
  },
  {
    clave: "18015",
    nombre: "Santiago Ixcuintla, Nayarit"
  },
  {
    clave: "18016",
    nombre: "Tecuala, Nayarit"
  },
  {
    clave: "18017",
    nombre: "Tepic, Nayarit"
  },
  {
    clave: "18018",
    nombre: "Tuxpan, Nayarit"
  },
  {
    clave: "18019",
    nombre: "La Yesca, Nayarit"
  },
  {
    clave: "18020",
    nombre: "Bahia de Banderas, Nayarit"
  },
  {
    clave: "20051",
    nombre: "Magdalena Teitipac, Oaxaca"
  },
  {
    clave: "13028",
    nombre: "Huejutla de Reyes, Hidalgo"
  },
  {
    clave: "15013",
    nombre: "Atizapan de Zaragoza, Estado de Mexico"
  },
  {
    clave: "16031",
    nombre: "Epitacio Huerta, Michoacan"
  },
  {
    clave: "07056",
    nombre: "Mitontic, Chiapas"
  },
  {
    clave: "07057",
    nombre: "Motozintla, Chiapas"
  },
  {
    clave: "12005",
    nombre: "Alpoyeca, Guerrero"
  },
  {
    clave: "12006",
    nombre: "Apaxtla, Guerrero"
  },
  {
    clave: "07058",
    nombre: "Nicolas Ruiz, Chiapas"
  },
  {
    clave: "07059",
    nombre: "Ocosingo, Chiapas"
  },
  {
    clave: "12007",
    nombre: "Arcelia, Guerrero"
  },
  {
    clave: "12008",
    nombre: "Atenango del Rio, Guerrero"
  },
  {
    clave: "07060",
    nombre: "Ocotepec, Chiapas"
  },
  {
    clave: "12011",
    nombre: "Atoyac de Alvarez, Guerrero"
  },
  {
    clave: "12012",
    nombre: "Ayutla de los Libres, Guerrero"
  },
  {
    clave: "12014",
    nombre: "Benito Juarez, Guerrero"
  },
  {
    clave: "12015",
    nombre: "Buenavista de Cuellar, Guerrero"
  },
  {
    clave: "12016",
    nombre: "Coahuayutla de Jose Maria Izazaga, Guerrero"
  },
  {
    clave: "12017",
    nombre: "Cocula, Guerrero"
  },
  {
    clave: "12018",
    nombre: "Copala, Guerrero"
  },
  {
    clave: "12019",
    nombre: "Copalillo, Guerrero"
  },
  {
    clave: "12020",
    nombre: "Copanatoyac, Guerrero"
  },
  {
    clave: "12021",
    nombre: "Coyuca de Benitez, Guerrero"
  },
  {
    clave: "12022",
    nombre: "Coyuca de Catalan, Guerrero"
  },
  {
    clave: "12023",
    nombre: "Cuajinicuilapa, Guerrero"
  },
  {
    clave: "14041",
    nombre: "Huejucar, Jalisco"
  },
  {
    clave: "26013",
    nombre: "Banamichi, Sonora"
  },
  {
    clave: "18002",
    nombre: "Ahuacatlan, Nayarit"
  },
  {
    clave: "07063",
    nombre: "Osumacinta, Chiapas"
  },
  {
    clave: "07064",
    nombre: "Oxchuc, Chiapas"
  },
  {
    clave: "07065",
    nombre: "Palenque, Chiapas"
  },
  {
    clave: "07066",
    nombre: "Pantelho, Chiapas"
  },
  {
    clave: "07067",
    nombre: "Pantepec, Chiapas"
  },
  {
    clave: "07068",
    nombre: "Pichucalco, Chiapas"
  },
  {
    clave: "07069",
    nombre: "Pijijiapan, Chiapas"
  },
  {
    clave: "12053",
    nombre: "San Marcos, Guerrero"
  },
  {
    clave: "12054",
    nombre: "San Miguel Totolapan, Guerrero"
  },
  {
    clave: "07073",
    nombre: "Rayon, Chiapas"
  },
  {
    clave: "07074",
    nombre: "Reforma, Chiapas"
  },
  {
    clave: "07075",
    nombre: "Las Rosas, Chiapas"
  },
  {
    clave: "07076",
    nombre: "Sabanilla, Chiapas"
  },
  {
    clave: "07077",
    nombre: "Salto de Agua, Chiapas"
  },
  {
    clave: "07078",
    nombre: "San Cristobal de las Casas, Chiapas"
  },
  {
    clave: "07079",
    nombre: "San Fernando, Chiapas"
  },
  {
    clave: "07080",
    nombre: "Siltepec, Chiapas"
  },
  {
    clave: "07081",
    nombre: "Simojovel, Chiapas"
  },
  {
    clave: "07082",
    nombre: "Sitala, Chiapas"
  },
  {
    clave: "07083",
    nombre: "Socoltenango, Chiapas"
  },
  {
    clave: "07084",
    nombre: "Solosuchiapa, Chiapas"
  },
  {
    clave: "07085",
    nombre: "Soyalo, Chiapas"
  },
  {
    clave: "07086",
    nombre: "Suchiapa, Chiapas"
  },
  {
    clave: "07087",
    nombre: "Suchiate, Chiapas"
  },
  {
    clave: "07088",
    nombre: "Sunuapa, Chiapas"
  },
  {
    clave: "07089",
    nombre: "Tapachula, Chiapas"
  },
  {
    clave: "07090",
    nombre: "Tapalapa, Chiapas"
  },
  {
    clave: "12056",
    nombre: "Tecoanapa, Guerrero"
  },
  {
    clave: "12057",
    nombre: "Tecpan de Galeana, Guerrero"
  },
  {
    clave: "12058",
    nombre: "Teloloapan, Guerrero"
  },
  {
    clave: "12059",
    nombre: "Tepecoacuilco de Trujano, Guerrero"
  },
  {
    clave: "12060",
    nombre: "Tetipac, Guerrero"
  },
  {
    clave: "12061",
    nombre: "Tixtla de Guerrero, Guerrero"
  },
  {
    clave: "12062",
    nombre: "Tlacoachistlahuaca, Guerrero"
  },
  {
    clave: "12063",
    nombre: "Tlacoapa, Guerrero"
  },
  {
    clave: "12064",
    nombre: "Tlalchapa, Guerrero"
  },
  {
    clave: "19024",
    nombre: "General Zaragoza, Nuevo Leon"
  },
  {
    clave: "19025",
    nombre: "General Zuazua, Nuevo Leon"
  },
  {
    clave: "07091",
    nombre: "Tapilula, Chiapas"
  },
  {
    clave: "07101",
    nombre: "Tuxtla Gutierrez, Chiapas"
  },
  {
    clave: "07102",
    nombre: "Tuxtla Chico, Chiapas"
  },
  {
    clave: "07103",
    nombre: "Tuzantan, Chiapas"
  },
  {
    clave: "07104",
    nombre: "Tzimol, Chiapas"
  },
  {
    clave: "12071",
    nombre: "Xochistlahuaca, Guerrero"
  },
  {
    clave: "12072",
    nombre: "Zapotitlan Tablas, Guerrero"
  },
  {
    clave: "12073",
    nombre: "Zirandaro, Guerrero"
  },
  {
    clave: "12074",
    nombre: "Zitlala, Guerrero"
  },
  {
    clave: "12075",
    nombre: "Eduardo Neri, Guerrero"
  },
  {
    clave: "12076",
    nombre: "Acatepec, Guerrero"
  },
  {
    clave: "12077",
    nombre: "Marquelia, Guerrero"
  },
  {
    clave: "12078",
    nombre: "Cochoapa el Grande, Guerrero"
  },
  {
    clave: "12079",
    nombre: "Jose Joaquin de Herrera, Guerrero"
  },
  {
    clave: "19026",
    nombre: "Guadalupe, Nuevo Leon"
  },
  {
    clave: "19027",
    nombre: "Los Herreras, Nuevo Leon"
  },
  {
    clave: "19028",
    nombre: "Higueras, Nuevo Leon"
  },
  {
    clave: "14050",
    nombre: "Jocotepec, Jalisco"
  },
  {
    clave: "16005",
    nombre: "Angangueo, Michoacan"
  },
  {
    clave: "07105",
    nombre: "Union Juarez, Chiapas"
  },
  {
    clave: "07115",
    nombre: "Maravilla Tenejapa, Chiapas"
  },
  {
    clave: "07116",
    nombre: "Marques de Comillas, Chiapas"
  },
  {
    clave: "13019",
    nombre: "Chilcuautla, Hidalgo"
  },
  {
    clave: "13020",
    nombre: "Eloxochitlan, Hidalgo"
  },
  {
    clave: "13021",
    nombre: "Emiliano Zapata, Hidalgo"
  },
  {
    clave: "13022",
    nombre: "Epazoyucan, Hidalgo"
  },
  {
    clave: "13023",
    nombre: "Francisco I. Madero, Hidalgo"
  },
  {
    clave: "13024",
    nombre: "Huasca de Ocampo, Hidalgo"
  },
  {
    clave: "13025",
    nombre: "Huautla, Hidalgo"
  },
  {
    clave: "13026",
    nombre: "Huazalingo, Hidalgo"
  },
  {
    clave: "13027",
    nombre: "Huehuetla, Hidalgo"
  },
  {
    clave: "07117",
    nombre: "Montecristo de Guerrero, Chiapas"
  },
  {
    clave: "13029",
    nombre: "Huichapan, Hidalgo"
  },
  {
    clave: "13030",
    nombre: "Ixmiquilpan, Hidalgo"
  },
  {
    clave: "13031",
    nombre: "Jacala de Ledezma, Hidalgo"
  },
  {
    clave: "13032",
    nombre: "Jaltocan, Hidalgo"
  },
  {
    clave: "13033",
    nombre: "Juarez Hidalgo, Hidalgo"
  },
  {
    clave: "13034",
    nombre: "Lolotla, Hidalgo"
  },
  {
    clave: "13035",
    nombre: "Metepec, Hidalgo"
  },
  {
    clave: "13036",
    nombre: "San Agustin Metzquititlan, Hidalgo"
  },
  {
    clave: "13037",
    nombre: "Metztitlan, Hidalgo"
  },
  {
    clave: "13038",
    nombre: "Mineral del Chico, Hidalgo"
  },
  {
    clave: "13039",
    nombre: "Mineral del Monte, Hidalgo"
  },
  {
    clave: "13040",
    nombre: "La Mision, Hidalgo"
  },
  {
    clave: "13041",
    nombre: "Mixquiahuala de Juarez, Hidalgo"
  },
  {
    clave: "13042",
    nombre: "Molango de Escamilla, Hidalgo"
  },
  {
    clave: "13043",
    nombre: "Nicolas Flores, Hidalgo"
  },
  {
    clave: "13044",
    nombre: "Nopala de Villagran, Hidalgo"
  },
  {
    clave: "13045",
    nombre: "Omitlan de Juarez, Hidalgo"
  },
  {
    clave: "13046",
    nombre: "San Felipe Orizatlan, Hidalgo"
  },
  {
    clave: "13048",
    nombre: "Pachuca de Soto, Hidalgo"
  },
  {
    clave: "13049",
    nombre: "Pisaflores, Hidalgo"
  },
  {
    clave: "13050",
    nombre: "Progreso de Obregon, Hidalgo"
  },
  {
    clave: "13051",
    nombre: "Mineral de la Reforma, Hidalgo"
  },
  {
    clave: "13052",
    nombre: "San Agustin Tlaxiaca, Hidalgo"
  },
  {
    clave: "13053",
    nombre: "San Bartolo Tutotepec, Hidalgo"
  },
  {
    clave: "13054",
    nombre: "San Salvador, Hidalgo"
  },
  {
    clave: "13055",
    nombre: "Santiago de Anaya, Hidalgo"
  },
  {
    clave: "13056",
    nombre: "Santiago Tulantepec de Lugo Guerrero, Hidalgo"
  },
  {
    clave: "13057",
    nombre: "Singuilucan, Hidalgo"
  },
  {
    clave: "13058",
    nombre: "Tasquillo, Hidalgo"
  },
  {
    clave: "13059",
    nombre: "Tecozautla, Hidalgo"
  },
  {
    clave: "07118",
    nombre: "San Andres Duraznal, Chiapas"
  },
  {
    clave: "07119",
    nombre: "Santiago el Pinar, Chiapas"
  },
  {
    clave: "08001",
    nombre: "Ahumada, Chihuahua"
  },
  {
    clave: "08002",
    nombre: "Aldama, Chihuahua"
  },
  {
    clave: "08003",
    nombre: "Allende, Chihuahua"
  },
  {
    clave: "13060",
    nombre: "Tenango de Doria, Hidalgo"
  },
  {
    clave: "08004",
    nombre: "Aquiles Serdan, Chihuahua"
  },
  {
    clave: "08005",
    nombre: "Ascension, Chihuahua"
  },
  {
    clave: "08006",
    nombre: "Bachiniva, Chihuahua"
  },
  {
    clave: "08007",
    nombre: "Balleza, Chihuahua"
  },
  {
    clave: "08008",
    nombre: "Batopilas, Chihuahua"
  },
  {
    clave: "08009",
    nombre: "Bocoyna, Chihuahua"
  },
  {
    clave: "08010",
    nombre: "Buenaventura, Chihuahua"
  },
  {
    clave: "08011",
    nombre: "Camargo, Chihuahua"
  },
  {
    clave: "08012",
    nombre: "Carichi, Chihuahua"
  },
  {
    clave: "08013",
    nombre: "Casas Grandes, Chihuahua"
  },
  {
    clave: "08014",
    nombre: "Coronado, Chihuahua"
  },
  {
    clave: "08015",
    nombre: "Coyame del Sotol, Chihuahua"
  },
  {
    clave: "08016",
    nombre: "La Cruz, Chihuahua"
  },
  {
    clave: "08017",
    nombre: "Cuauhtemoc, Chihuahua"
  },
  {
    clave: "08018",
    nombre: "Cusihuiriachi, Chihuahua"
  },
  {
    clave: "08019",
    nombre: "Chihuahua, Chihuahua"
  },
  {
    clave: "08053",
    nombre: "Praxedis G. Guerrero, Chihuahua"
  },
  {
    clave: "13062",
    nombre: "Tepehuacan de Guerrero, Hidalgo"
  },
  {
    clave: "13063",
    nombre: "Tepeji del Rio de Ocampo, Hidalgo"
  },
  {
    clave: "13064",
    nombre: "Tepetitlan, Hidalgo"
  },
  {
    clave: "11009",
    nombre: "Comonfort, Guanajuato"
  },
  {
    clave: "08057",
    nombre: "San Francisco de Borja, Chihuahua"
  },
  {
    clave: "08058",
    nombre: "San Francisco de Conchos, Chihuahua"
  },
  {
    clave: "08059",
    nombre: "San Francisco del Oro, Chihuahua"
  },
  {
    clave: "14007",
    nombre: "San Juanito de Escobedo, Jalisco"
  },
  {
    clave: "14008",
    nombre: "Arandas, Jalisco"
  },
  {
    clave: "14009",
    nombre: "El Arenal, Jalisco"
  },
  {
    clave: "14010",
    nombre: "Atemajac de Brizuela, Jalisco"
  },
  {
    clave: "14012",
    nombre: "Atenguillo, Jalisco"
  },
  {
    clave: "14013",
    nombre: "Atotonilco el Alto, Jalisco"
  },
  {
    clave: "14014",
    nombre: "Atoyac, Jalisco"
  },
  {
    clave: "14015",
    nombre: "Autlan de Navarro, Jalisco"
  },
  {
    clave: "14016",
    nombre: "Ayotlan, Jalisco"
  },
  {
    clave: "14017",
    nombre: "Ayutla, Jalisco"
  },
  {
    clave: "14018",
    nombre: "La Barca, Jalisco"
  },
  {
    clave: "14019",
    nombre: "Bolaños, Jalisco"
  },
  {
    clave: "14020",
    nombre: "Cabo Corrientes, Jalisco"
  },
  {
    clave: "14021",
    nombre: "Casimiro Castillo, Jalisco"
  },
  {
    clave: "14022",
    nombre: "Cihuatlan, Jalisco"
  },
  {
    clave: "14023",
    nombre: "Zapotlan el Grande, Jalisco"
  },
  {
    clave: "14024",
    nombre: "Cocula, Jalisco"
  },
  {
    clave: "14025",
    nombre: "Colotlan, Jalisco"
  },
  {
    clave: "14026",
    nombre: "Concepcion de Buenos Aires, Jalisco"
  },
  {
    clave: "14027",
    nombre: "Cuautitlan de Garcia Barragan, Jalisco"
  },
  {
    clave: "14028",
    nombre: "Cuautla, Jalisco"
  },
  {
    clave: "14029",
    nombre: "Cuquio, Jalisco"
  },
  {
    clave: "14030",
    nombre: "Chapala, Jalisco"
  },
  {
    clave: "14031",
    nombre: "Chimaltitan, Jalisco"
  },
  {
    clave: "14032",
    nombre: "Chiquilistlan, Jalisco"
  },
  {
    clave: "08060",
    nombre: "Santa Barbara, Chihuahua"
  },
  {
    clave: "08061",
    nombre: "Satevo, Chihuahua"
  },
  {
    clave: "08062",
    nombre: "Saucillo, Chihuahua"
  },
  {
    clave: "08063",
    nombre: "Temosachic, Chihuahua"
  },
  {
    clave: "08064",
    nombre: "El Tule, Chihuahua"
  },
  {
    clave: "08065",
    nombre: "Urique, Chihuahua"
  },
  {
    clave: "08066",
    nombre: "Uruachi, Chihuahua"
  },
  {
    clave: "08067",
    nombre: "Valle de Zaragoza, Chihuahua"
  },
  {
    clave: "14033",
    nombre: "Degollado, Jalisco"
  },
  {
    clave: "14034",
    nombre: "Ejutla, Jalisco"
  },
  {
    clave: "14035",
    nombre: "Encarnacion de Diaz, Jalisco"
  },
  {
    clave: "14036",
    nombre: "Etzatlan, Jalisco"
  },
  {
    clave: "14037",
    nombre: "El Grullo, Jalisco"
  },
  {
    clave: "14038",
    nombre: "Guachinango, Jalisco"
  },
  {
    clave: "14039",
    nombre: "Guadalajara, Jalisco"
  },
  {
    clave: "14040",
    nombre: "Hostotipaquillo, Jalisco"
  },
  {
    clave: "09002",
    nombre: "Azcapotzalco, Ciudad de Mexico"
  },
  {
    clave: "09003",
    nombre: "Coyoacan, Ciudad de Mexico"
  },
  {
    clave: "09004",
    nombre: "Cuajimalpa de Morelos, Ciudad de Mexico"
  },
  {
    clave: "09005",
    nombre: "Gustavo A. Madero, Ciudad de Mexico"
  },
  {
    clave: "09006",
    nombre: "Iztacalco, Ciudad de Mexico"
  },
  {
    clave: "09007",
    nombre: "Iztapalapa, Ciudad de Mexico"
  },
  {
    clave: "09008",
    nombre: "La Magdalena Contreras, Ciudad de Mexico"
  },
  {
    clave: "14042",
    nombre: "Huejuquilla el Alto, Jalisco"
  },
  {
    clave: "14043",
    nombre: "La Huerta, Jalisco"
  },
  {
    clave: "14044",
    nombre: "Ixtlahuacan de los Membrillos, Jalisco"
  },
  {
    clave: "14045",
    nombre: "Ixtlahuacan del Rio, Jalisco"
  },
  {
    clave: "14046",
    nombre: "Jalostotitlan, Jalisco"
  },
  {
    clave: "14047",
    nombre: "Jamay, Jalisco"
  },
  {
    clave: "14048",
    nombre: "Jesus Maria, Jalisco"
  },
  {
    clave: "14049",
    nombre: "Jilotlan de los Dolores, Jalisco"
  },
  {
    clave: "09009",
    nombre: "Milpa Alta, Ciudad de Mexico"
  },
  {
    clave: "09010",
    nombre: "Alvaro Obregon, Ciudad de Mexico"
  },
  {
    clave: "09011",
    nombre: "Tlahuac, Ciudad de Mexico"
  },
  {
    clave: "09012",
    nombre: "Tlalpan, Ciudad de Mexico"
  },
  {
    clave: "09014",
    nombre: "Benito Juarez, Ciudad de Mexico"
  },
  {
    clave: "14052",
    nombre: "Juchitlan, Jalisco"
  },
  {
    clave: "14053",
    nombre: "Lagos de Moreno, Jalisco"
  },
  {
    clave: "14054",
    nombre: "El Limon, Jalisco"
  },
  {
    clave: "14055",
    nombre: "Magdalena, Jalisco"
  },
  {
    clave: "14056",
    nombre: "Santa Maria del Oro, Jalisco"
  },
  {
    clave: "14057",
    nombre: "La Manzanilla de la Paz, Jalisco"
  },
  {
    clave: "14058",
    nombre: "Mascota, Jalisco"
  },
  {
    clave: "14059",
    nombre: "Mazamitla, Jalisco"
  },
  {
    clave: "14060",
    nombre: "Mexticacan, Jalisco"
  },
  {
    clave: "14061",
    nombre: "Mezquitic, Jalisco"
  },
  {
    clave: "14062",
    nombre: "Mixtlan, Jalisco"
  },
  {
    clave: "14063",
    nombre: "Ocotlan, Jalisco"
  },
  {
    clave: "14064",
    nombre: "Ojuelos de Jalisco, Jalisco"
  },
  {
    clave: "14065",
    nombre: "Pihuamo, Jalisco"
  },
  {
    clave: "14066",
    nombre: "Poncitlan, Jalisco"
  },
  {
    clave: "12052",
    nombre: "San Luis Acatlan, Guerrero"
  },
  {
    clave: "09015",
    nombre: "Cuauhtemoc, Ciudad de Mexico"
  },
  {
    clave: "09016",
    nombre: "Miguel Hidalgo, Ciudad de Mexico"
  },
  {
    clave: "14067",
    nombre: "Puerto Vallarta, Jalisco"
  },
  {
    clave: "14068",
    nombre: "Villa Purificacion, Jalisco"
  },
  {
    clave: "14069",
    nombre: "Quitupan, Jalisco"
  },
  {
    clave: "14070",
    nombre: "El Salto, Jalisco"
  },
  {
    clave: "14071",
    nombre: "San Cristobal de la Barranca, Jalisco"
  },
  {
    clave: "14072",
    nombre: "San Diego de Alejandria, Jalisco"
  },
  {
    clave: "14073",
    nombre: "San Juan de los Lagos, Jalisco"
  },
  {
    clave: "14074",
    nombre: "San Julian, Jalisco"
  },
  {
    clave: "09017",
    nombre: "Venustiano Carranza, Ciudad de Mexico"
  },
  {
    clave: "10001",
    nombre: "Canatlan, Durango"
  },
  {
    clave: "10002",
    nombre: "Canelas, Durango"
  },
  {
    clave: "10029",
    nombre: "San Luis del Cordero, Durango"
  },
  {
    clave: "10030",
    nombre: "San Pedro del Gallo, Durango"
  },
  {
    clave: "10031",
    nombre: "Santa Clara, Durango"
  },
  {
    clave: "10032",
    nombre: "Santiago Papasquiaro, Durango"
  },
  {
    clave: "10036",
    nombre: "Tlahualilo, Durango"
  },
  {
    clave: "14075",
    nombre: "San Marcos, Jalisco"
  },
  {
    clave: "14076",
    nombre: "San Martin de Bolaños, Jalisco"
  },
  {
    clave: "14077",
    nombre: "San Martin Hidalgo, Jalisco"
  },
  {
    clave: "14078",
    nombre: "San Miguel el Alto, Jalisco"
  },
  {
    clave: "14079",
    nombre: "Gomez Farias, Jalisco"
  },
  {
    clave: "14080",
    nombre: "San Sebastian del Oeste, Jalisco"
  },
  {
    clave: "14081",
    nombre: "Santa Maria de los Angeles, Jalisco"
  },
  {
    clave: "14082",
    nombre: "Sayula, Jalisco"
  },
  {
    clave: "14083",
    nombre: "Tala, Jalisco"
  },
  {
    clave: "14084",
    nombre: "Talpa de Allende, Jalisco"
  },
  {
    clave: "14085",
    nombre: "Tamazula de Gordiano, Jalisco"
  },
  {
    clave: "14086",
    nombre: "Tapalpa, Jalisco"
  },
  {
    clave: "14087",
    nombre: "Tecalitlan, Jalisco"
  },
  {
    clave: "14088",
    nombre: "Tecolotlan, Jalisco"
  },
  {
    clave: "14089",
    nombre: "Techaluta de Montenegro, Jalisco"
  },
  {
    clave: "14090",
    nombre: "Tenamaxtlan, Jalisco"
  },
  {
    clave: "14091",
    nombre: "Teocaltiche, Jalisco"
  },
  {
    clave: "14092",
    nombre: "Teocuitatlan de Corona, Jalisco"
  },
  {
    clave: "14093",
    nombre: "Tepatitlan de Morelos, Jalisco"
  },
  {
    clave: "14094",
    nombre: "Tequila, Jalisco"
  },
  {
    clave: "14095",
    nombre: "Teuchitlan, Jalisco"
  },
  {
    clave: "14096",
    nombre: "Tizapan el Alto, Jalisco"
  },
  {
    clave: "14097",
    nombre: "Tlajomulco de Zuñiga, Jalisco"
  },
  {
    clave: "14098",
    nombre: "San Pedro Tlaquepaque, Jalisco"
  },
  {
    clave: "14099",
    nombre: "Toliman, Jalisco"
  },
  {
    clave: "14100",
    nombre: "Tomatlan, Jalisco"
  },
  {
    clave: "14101",
    nombre: "Tonala, Jalisco"
  },
  {
    clave: "14102",
    nombre: "Tonaya, Jalisco"
  },
  {
    clave: "14103",
    nombre: "Tonila, Jalisco"
  },
  {
    clave: "14104",
    nombre: "Totatiche, Jalisco"
  },
  {
    clave: "14105",
    nombre: "Tototlan, Jalisco"
  },
  {
    clave: "14106",
    nombre: "Tuxcacuesco, Jalisco"
  },
  {
    clave: "14107",
    nombre: "Tuxcueca, Jalisco"
  },
  {
    clave: "14108",
    nombre: "Tuxpan, Jalisco"
  },
  {
    clave: "10038",
    nombre: "Vicente Guerrero, Durango"
  },
  {
    clave: "10039",
    nombre: "Nuevo Ideal, Durango"
  },
  {
    clave: "11001",
    nombre: "Abasolo, Guanajuato"
  },
  {
    clave: "11002",
    nombre: "Acambaro, Guanajuato"
  },
  {
    clave: "11003",
    nombre: "San Miguel de Allende, Guanajuato"
  },
  {
    clave: "11004",
    nombre: "Apaseo el Alto, Guanajuato"
  },
  {
    clave: "11005",
    nombre: "Apaseo el Grande, Guanajuato"
  },
  {
    clave: "11006",
    nombre: "Atarjea, Guanajuato"
  },
  {
    clave: "11007",
    nombre: "Celaya, Guanajuato"
  },
  {
    clave: "11008",
    nombre: "Manuel Doblado, Guanajuato"
  },
  {
    clave: "12024",
    nombre: "Cualac, Guerrero"
  },
  {
    clave: "12025",
    nombre: "Cuautepec, Guerrero"
  },
  {
    clave: "12026",
    nombre: "Cuetzala del Progreso, Guerrero"
  },
  {
    clave: "12027",
    nombre: "Cutzamala de Pinzon, Guerrero"
  },
  {
    clave: "12028",
    nombre: "Chilapa de Alvarez, Guerrero"
  },
  {
    clave: "12029",
    nombre: "Chilpancingo de los Bravo, Guerrero"
  },
  {
    clave: "12030",
    nombre: "Florencio Villarreal, Guerrero"
  },
  {
    clave: "12031",
    nombre: "General Canuto A. Neri, Guerrero"
  },
  {
    clave: "12032",
    nombre: "General Heliodoro Castillo, Guerrero"
  },
  {
    clave: "12033",
    nombre: "Huamuxtitlan, Guerrero"
  },
  {
    clave: "12034",
    nombre: "Huitzuco de los Figueroa, Guerrero"
  },
  {
    clave: "12035",
    nombre: "Iguala de la Independencia, Guerrero"
  },
  {
    clave: "12036",
    nombre: "Igualapa, Guerrero"
  },
  {
    clave: "12037",
    nombre: "Ixcateopan de Cuauhtemoc, Guerrero"
  },
  {
    clave: "12038",
    nombre: "Zihuatanejo de Azueta, Guerrero"
  },
  {
    clave: "12039",
    nombre: "Juan R. Escudero, Guerrero"
  },
  {
    clave: "12040",
    nombre: "Leonardo Bravo, Guerrero"
  },
  {
    clave: "12041",
    nombre: "Malinaltepec, Guerrero"
  },
  {
    clave: "12042",
    nombre: "Martir de Cuilapan, Guerrero"
  },
  {
    clave: "12043",
    nombre: "Metlatonoc, Guerrero"
  },
  {
    clave: "12044",
    nombre: "Mochitlan, Guerrero"
  },
  {
    clave: "12045",
    nombre: "Olinala, Guerrero"
  },
  {
    clave: "12046",
    nombre: "Ometepec, Guerrero"
  },
  {
    clave: "12047",
    nombre: "Pedro Ascencio Alquisiras, Guerrero"
  },
  {
    clave: "12048",
    nombre: "Petatlan, Guerrero"
  },
  {
    clave: "12049",
    nombre: "Pilcaya, Guerrero"
  },
  {
    clave: "12050",
    nombre: "Pungarabato, Guerrero"
  },
  {
    clave: "12051",
    nombre: "Quechultenango, Guerrero"
  },
  {
    clave: "12065",
    nombre: "Tlalixtaquilla de Maldonado, Guerrero"
  },
  {
    clave: "12066",
    nombre: "Tlapa de Comonfort, Guerrero"
  },
  {
    clave: "12067",
    nombre: "Tlapehuala, Guerrero"
  },
  {
    clave: "12068",
    nombre: "La Union de Isidoro Montes de Oca, Guerrero"
  },
  {
    clave: "12069",
    nombre: "Xalpatlahuac, Guerrero"
  },
  {
    clave: "12070",
    nombre: "Xochihuehuetlan, Guerrero"
  },
  {
    clave: "12080",
    nombre: "Juchitan, Guerrero"
  },
  {
    clave: "12081",
    nombre: "Iliatenco, Guerrero"
  },
  {
    clave: "13001",
    nombre: "Acatlan, Hidalgo"
  },
  {
    clave: "13002",
    nombre: "Acaxochitlan, Hidalgo"
  },
  {
    clave: "13003",
    nombre: "Actopan, Hidalgo"
  },
  {
    clave: "13004",
    nombre: "Agua Blanca de Iturbide, Hidalgo"
  },
  {
    clave: "13005",
    nombre: "Ajacuba, Hidalgo"
  },
  {
    clave: "13006",
    nombre: "Alfajayucan, Hidalgo"
  },
  {
    clave: "13007",
    nombre: "Almoloya, Hidalgo"
  },
  {
    clave: "13008",
    nombre: "Apan, Hidalgo"
  },
  {
    clave: "13009",
    nombre: "El Arenal, Hidalgo"
  },
  {
    clave: "13010",
    nombre: "Atitalaquia, Hidalgo"
  },
  {
    clave: "13011",
    nombre: "Atlapexco, Hidalgo"
  },
  {
    clave: "13012",
    nombre: "Atotonilco el Grande, Hidalgo"
  },
  {
    clave: "13013",
    nombre: "Atotonilco de Tula, Hidalgo"
  },
  {
    clave: "13014",
    nombre: "Calnali, Hidalgo"
  },
  {
    clave: "13015",
    nombre: "Cardonal, Hidalgo"
  },
  {
    clave: "13016",
    nombre: "Cuautepec de Hinojosa, Hidalgo"
  },
  {
    clave: "13017",
    nombre: "Chapantongo, Hidalgo"
  },
  {
    clave: "13065",
    nombre: "Tetepango, Hidalgo"
  },
  {
    clave: "13066",
    nombre: "Villa de Tezontepec, Hidalgo"
  },
  {
    clave: "13067",
    nombre: "Tezontepec de Aldama, Hidalgo"
  },
  {
    clave: "13068",
    nombre: "Tianguistengo, Hidalgo"
  },
  {
    clave: "14109",
    nombre: "Union de San Antonio, Jalisco"
  },
  {
    clave: "14110",
    nombre: "Union de Tula, Jalisco"
  },
  {
    clave: "14111",
    nombre: "Valle de Guadalupe, Jalisco"
  },
  {
    clave: "14112",
    nombre: "Valle de Juarez, Jalisco"
  },
  {
    clave: "14113",
    nombre: "San Gabriel, Jalisco"
  },
  {
    clave: "14114",
    nombre: "Villa Corona, Jalisco"
  },
  {
    clave: "14115",
    nombre: "Villa Guerrero, Jalisco"
  },
  {
    clave: "14116",
    nombre: "Villa Hidalgo, Jalisco"
  },
  {
    clave: "14117",
    nombre: "Cañadas de Obregon, Jalisco"
  },
  {
    clave: "14118",
    nombre: "Yahualica de Gonzalez Gallo, Jalisco"
  },
  {
    clave: "13069",
    nombre: "Tizayuca, Hidalgo"
  },
  {
    clave: "13070",
    nombre: "Tlahuelilpan, Hidalgo"
  },
  {
    clave: "13073",
    nombre: "Tlanchinol, Hidalgo"
  },
  {
    clave: "15014",
    nombre: "Atlacomulco, Estado de Mexico"
  },
  {
    clave: "15015",
    nombre: "Atlautla, Estado de Mexico"
  },
  {
    clave: "15016",
    nombre: "Axapusco, Estado de Mexico"
  },
  {
    clave: "15017",
    nombre: "Ayapango, Estado de Mexico"
  },
  {
    clave: "15018",
    nombre: "Calimaya, Estado de Mexico"
  },
  {
    clave: "15019",
    nombre: "Capulhuac, Estado de Mexico"
  },
  {
    clave: "20440",
    nombre: "Santa Maria Totolapilla, Oaxaca"
  },
  {
    clave: "20441",
    nombre: "Santa Maria Xadani, Oaxaca"
  },
  {
    clave: "13074",
    nombre: "Tlaxcoapan, Hidalgo"
  },
  {
    clave: "13075",
    nombre: "Tolcayuca, Hidalgo"
  },
  {
    clave: "13076",
    nombre: "Tula de Allende, Hidalgo"
  },
  {
    clave: "13077",
    nombre: "Tulancingo de Bravo, Hidalgo"
  },
  {
    clave: "13078",
    nombre: "Xochiatipan, Hidalgo"
  },
  {
    clave: "13079",
    nombre: "Xochicoatlan, Hidalgo"
  },
  {
    clave: "13080",
    nombre: "Yahualica, Hidalgo"
  },
  {
    clave: "13081",
    nombre: "Zacualtipan de Angeles, Hidalgo"
  },
  {
    clave: "13082",
    nombre: "Zapotlan de Juarez, Hidalgo"
  },
  {
    clave: "13083",
    nombre: "Zempoala, Hidalgo"
  },
  {
    clave: "13084",
    nombre: "Zimapan, Hidalgo"
  },
  {
    clave: "14001",
    nombre: "Acatic, Jalisco"
  },
  {
    clave: "14002",
    nombre: "Acatlan de Juarez, Jalisco"
  },
  {
    clave: "14003",
    nombre: "Ahualulco de Mercado, Jalisco"
  },
  {
    clave: "14004",
    nombre: "Amacueca, Jalisco"
  },
  {
    clave: "14005",
    nombre: "Amatitan, Jalisco"
  },
  {
    clave: "14125",
    nombre: "San Ignacio Cerro Gordo, Jalisco"
  },
  {
    clave: "15001",
    nombre: "Acambay de Ruiz Castañeda, Estado de Mexico"
  },
  {
    clave: "15002",
    nombre: "Acolman, Estado de Mexico"
  },
  {
    clave: "15003",
    nombre: "Aculco, Estado de Mexico"
  },
  {
    clave: "15004",
    nombre: "Almoloya de Alquisiras, Estado de Mexico"
  },
  {
    clave: "15005",
    nombre: "Almoloya de Juarez, Estado de Mexico"
  },
  {
    clave: "15044",
    nombre: "Jaltenco, Estado de Mexico"
  },
  {
    clave: "15045",
    nombre: "Jilotepec, Estado de Mexico"
  },
  {
    clave: "15046",
    nombre: "Jilotzingo, Estado de Mexico"
  },
  {
    clave: "15047",
    nombre: "Jiquipilco, Estado de Mexico"
  },
  {
    clave: "15048",
    nombre: "Jocotitlan, Estado de Mexico"
  },
  {
    clave: "15049",
    nombre: "Joquicingo, Estado de Mexico"
  },
  {
    clave: "15050",
    nombre: "Juchitepec, Estado de Mexico"
  },
  {
    clave: "15006",
    nombre: "Almoloya del Rio, Estado de Mexico"
  },
  {
    clave: "15007",
    nombre: "Amanalco, Estado de Mexico"
  },
  {
    clave: "15008",
    nombre: "Amatepec, Estado de Mexico"
  },
  {
    clave: "15009",
    nombre: "Amecameca, Estado de Mexico"
  },
  {
    clave: "15010",
    nombre: "Apaxco, Estado de Mexico"
  },
  {
    clave: "15011",
    nombre: "Atenco, Estado de Mexico"
  },
  {
    clave: "15012",
    nombre: "Atizapan, Estado de Mexico"
  },
  {
    clave: "15020",
    nombre: "Coacalco de Berriozabal, Estado de Mexico"
  },
  {
    clave: "15052",
    nombre: "Malinalco, Estado de Mexico"
  },
  {
    clave: "15022",
    nombre: "Cocotitlan, Estado de Mexico"
  },
  {
    clave: "15023",
    nombre: "Coyotepec, Estado de Mexico"
  },
  {
    clave: "15024",
    nombre: "Cuautitlan, Estado de Mexico"
  },
  {
    clave: "15025",
    nombre: "Chalco, Estado de Mexico"
  },
  {
    clave: "15026",
    nombre: "Chapa de Mota, Estado de Mexico"
  },
  {
    clave: "15058",
    nombre: "Nezahualcoyotl, Estado de Mexico"
  },
  {
    clave: "20086",
    nombre: "San Agustin Tlacotepec, Oaxaca"
  },
  {
    clave: "15027",
    nombre: "Chapultepec, Estado de Mexico"
  },
  {
    clave: "15063",
    nombre: "Ocuilan, Estado de Mexico"
  },
  {
    clave: "15064",
    nombre: "El Oro, Estado de Mexico"
  },
  {
    clave: "15065",
    nombre: "Otumba, Estado de Mexico"
  },
  {
    clave: "15066",
    nombre: "Otzoloapan, Estado de Mexico"
  },
  {
    clave: "15067",
    nombre: "Otzolotepec, Estado de Mexico"
  },
  {
    clave: "15068",
    nombre: "Ozumba, Estado de Mexico"
  },
  {
    clave: "15069",
    nombre: "Papalotla, Estado de Mexico"
  },
  {
    clave: "15070",
    nombre: "La Paz, Estado de Mexico"
  },
  {
    clave: "15071",
    nombre: "Polotitlan, Estado de Mexico"
  },
  {
    clave: "15072",
    nombre: "Rayon, Estado de Mexico"
  },
  {
    clave: "15073",
    nombre: "San Antonio la Isla, Estado de Mexico"
  },
  {
    clave: "15074",
    nombre: "San Felipe del Progreso, Estado de Mexico"
  },
  {
    clave: "15028",
    nombre: "Chiautla, Estado de Mexico"
  },
  {
    clave: "15030",
    nombre: "Chiconcuac, Estado de Mexico"
  },
  {
    clave: "15031",
    nombre: "Chimalhuacan, Estado de Mexico"
  },
  {
    clave: "15032",
    nombre: "Donato Guerra, Estado de Mexico"
  },
  {
    clave: "15033",
    nombre: "Ecatepec de Morelos, Estado de Mexico"
  },
  {
    clave: "15034",
    nombre: "Ecatzingo, Estado de Mexico"
  },
  {
    clave: "15035",
    nombre: "Huehuetoca, Estado de Mexico"
  },
  {
    clave: "15036",
    nombre: "Hueypoxtla, Estado de Mexico"
  },
  {
    clave: "15037",
    nombre: "Huixquilucan, Estado de Mexico"
  },
  {
    clave: "15038",
    nombre: "Isidro Fabela, Estado de Mexico"
  },
  {
    clave: "15039",
    nombre: "Ixtapaluca, Estado de Mexico"
  },
  {
    clave: "15040",
    nombre: "Ixtapan de la Sal, Estado de Mexico"
  },
  {
    clave: "15041",
    nombre: "Ixtapan del Oro, Estado de Mexico"
  },
  {
    clave: "15042",
    nombre: "Ixtlahuaca, Estado de Mexico"
  },
  {
    clave: "15043",
    nombre: "Xalatlaco, Estado de Mexico"
  },
  {
    clave: "15116",
    nombre: "Zacazonapan, Estado de Mexico"
  },
  {
    clave: "15117",
    nombre: "Zacualpan, Estado de Mexico"
  },
  {
    clave: "15118",
    nombre: "Zinacantepec, Estado de Mexico"
  },
  {
    clave: "15119",
    nombre: "Zumpahuacan, Estado de Mexico"
  },
  {
    clave: "15120",
    nombre: "Zumpango, Estado de Mexico"
  },
  {
    clave: "15121",
    nombre: "Cuautitlan Izcalli, Estado de Mexico"
  },
  {
    clave: "26011",
    nombre: "Bacoachi, Sonora"
  },
  {
    clave: "26012",
    nombre: "Bacum, Sonora"
  },
  {
    clave: "15053",
    nombre: "Melchor Ocampo, Estado de Mexico"
  },
  {
    clave: "15054",
    nombre: "Metepec, Estado de Mexico"
  },
  {
    clave: "15055",
    nombre: "Mexicaltzingo, Estado de Mexico"
  },
  {
    clave: "15056",
    nombre: "Morelos, Estado de Mexico"
  },
  {
    clave: "15057",
    nombre: "Naucalpan de Juarez, Estado de Mexico"
  },
  {
    clave: "15059",
    nombre: "Nextlalpan, Estado de Mexico"
  },
  {
    clave: "15060",
    nombre: "Nicolas Romero, Estado de Mexico"
  },
  {
    clave: "15061",
    nombre: "Nopaltepec, Estado de Mexico"
  },
  {
    clave: "15062",
    nombre: "Ocoyoacac, Estado de Mexico"
  },
  {
    clave: "15076",
    nombre: "San Mateo Atenco, Estado de Mexico"
  },
  {
    clave: "15077",
    nombre: "San Simon de Guerrero, Estado de Mexico"
  },
  {
    clave: "15078",
    nombre: "Santo Tomas, Estado de Mexico"
  },
  {
    clave: "15079",
    nombre: "Soyaniquilpan de Juarez, Estado de Mexico"
  },
  {
    clave: "15080",
    nombre: "Sultepec, Estado de Mexico"
  },
  {
    clave: "15081",
    nombre: "Tecamac, Estado de Mexico"
  },
  {
    clave: "15082",
    nombre: "Tejupilco, Estado de Mexico"
  },
  {
    clave: "26014",
    nombre: "Baviacora, Sonora"
  },
  {
    clave: "15125",
    nombre: "Tonanitla, Estado de Mexico"
  },
  {
    clave: "15098",
    nombre: "Texcalyacac, Estado de Mexico"
  },
  {
    clave: "15099",
    nombre: "Texcoco, Estado de Mexico"
  },
  {
    clave: "16009",
    nombre: "Ario, Michoacan"
  },
  {
    clave: "16010",
    nombre: "Arteaga, Michoacan"
  },
  {
    clave: "16011",
    nombre: "Briseñas, Michoacan"
  },
  {
    clave: "16012",
    nombre: "Buenavista, Michoacan"
  },
  {
    clave: "16013",
    nombre: "Caracuaro, Michoacan"
  },
  {
    clave: "16014",
    nombre: "Coahuayana, Michoacan"
  },
  {
    clave: "15083",
    nombre: "Temamatla, Estado de Mexico"
  },
  {
    clave: "15084",
    nombre: "Temascalapa, Estado de Mexico"
  },
  {
    clave: "15085",
    nombre: "Temascalcingo, Estado de Mexico"
  },
  {
    clave: "15086",
    nombre: "Temascaltepec, Estado de Mexico"
  },
  {
    clave: "15087",
    nombre: "Temoaya, Estado de Mexico"
  },
  {
    clave: "15088",
    nombre: "Tenancingo, Estado de Mexico"
  },
  {
    clave: "15089",
    nombre: "Tenango del Aire, Estado de Mexico"
  },
  {
    clave: "15090",
    nombre: "Tenango del Valle, Estado de Mexico"
  },
  {
    clave: "16001",
    nombre: "Acuitzio, Michoacan"
  },
  {
    clave: "16002",
    nombre: "Aguililla, Michoacan"
  },
  {
    clave: "15091",
    nombre: "Teoloyucan, Estado de Mexico"
  },
  {
    clave: "15092",
    nombre: "Teotihuacan, Estado de Mexico"
  },
  {
    clave: "15093",
    nombre: "Tepetlaoxtoc, Estado de Mexico"
  },
  {
    clave: "15094",
    nombre: "Tepetlixpa, Estado de Mexico"
  },
  {
    clave: "15095",
    nombre: "Tepotzotlan, Estado de Mexico"
  },
  {
    clave: "15096",
    nombre: "Tequixquiac, Estado de Mexico"
  },
  {
    clave: "15097",
    nombre: "Texcaltitlan, Estado de Mexico"
  },
  {
    clave: "16003",
    nombre: "Alvaro Obregon, Michoacan"
  },
  {
    clave: "16004",
    nombre: "Angamacutiro, Michoacan"
  },
  {
    clave: "15100",
    nombre: "Tezoyuca, Estado de Mexico"
  },
  {
    clave: "15101",
    nombre: "Tianguistenco, Estado de Mexico"
  },
  {
    clave: "15102",
    nombre: "Timilpan, Estado de Mexico"
  },
  {
    clave: "15103",
    nombre: "Tlalmanalco, Estado de Mexico"
  },
  {
    clave: "15104",
    nombre: "Tlalnepantla de Baz, Estado de Mexico"
  },
  {
    clave: "15105",
    nombre: "Tlatlaya, Estado de Mexico"
  },
  {
    clave: "15106",
    nombre: "Toluca, Estado de Mexico"
  },
  {
    clave: "15107",
    nombre: "Tonatico, Estado de Mexico"
  },
  {
    clave: "15108",
    nombre: "Tultepec, Estado de Mexico"
  },
  {
    clave: "15109",
    nombre: "Tultitlan, Estado de Mexico"
  },
  {
    clave: "15110",
    nombre: "Valle de Bravo, Estado de Mexico"
  },
  {
    clave: "15111",
    nombre: "Villa de Allende, Estado de Mexico"
  },
  {
    clave: "15112",
    nombre: "Villa del Carbon, Estado de Mexico"
  },
  {
    clave: "15113",
    nombre: "Villa Guerrero, Estado de Mexico"
  },
  {
    clave: "15114",
    nombre: "Villa Victoria, Estado de Mexico"
  },
  {
    clave: "15122",
    nombre: "Valle de Chalco Solidaridad, Estado de Mexico"
  },
  {
    clave: "15123",
    nombre: "Luvianos, Estado de Mexico"
  },
  {
    clave: "15124",
    nombre: "San Jose del Rincon, Estado de Mexico"
  },
  {
    clave: "16006",
    nombre: "Apatzingan, Michoacan"
  },
  {
    clave: "16032",
    nombre: "Erongaricuaro, Michoacan"
  },
  {
    clave: "16033",
    nombre: "Gabriel Zamora, Michoacan"
  },
  {
    clave: "16034",
    nombre: "Hidalgo, Michoacan"
  },
  {
    clave: "16035",
    nombre: "La Huacana, Michoacan"
  },
  {
    clave: "16036",
    nombre: "Huandacareo, Michoacan"
  },
  {
    clave: "16037",
    nombre: "Huaniqueo, Michoacan"
  },
  {
    clave: "16038",
    nombre: "Huetamo, Michoacan"
  },
  {
    clave: "16039",
    nombre: "Huiramba, Michoacan"
  },
  {
    clave: "16007",
    nombre: "Aporo, Michoacan"
  },
  {
    clave: "16008",
    nombre: "Aquila, Michoacan"
  },
  {
    clave: "16023",
    nombre: "Chavinda, Michoacan"
  },
  {
    clave: "16024",
    nombre: "Cheran, Michoacan"
  },
  {
    clave: "16025",
    nombre: "Chilchota, Michoacan"
  },
  {
    clave: "16026",
    nombre: "Chinicuila, Michoacan"
  },
  {
    clave: "16027",
    nombre: "Chucandiro, Michoacan"
  },
  {
    clave: "16028",
    nombre: "Churintzio, Michoacan"
  },
  {
    clave: "16029",
    nombre: "Churumuco, Michoacan"
  },
  {
    clave: "16030",
    nombre: "Ecuandureo, Michoacan"
  },
  {
    clave: "16054",
    nombre: "Morelos, Michoacan"
  },
  {
    clave: "16055",
    nombre: "Mugica, Michoacan"
  },
  {
    clave: "16056",
    nombre: "Nahuatzen, Michoacan"
  },
  {
    clave: "16057",
    nombre: "Nocupetaro, Michoacan"
  },
  {
    clave: "16058",
    nombre: "Nuevo Parangaricutiro, Michoacan"
  },
  {
    clave: "17005",
    nombre: "Coatlan del Rio, Morelos"
  },
  {
    clave: "17006",
    nombre: "Cuautla, Morelos"
  },
  {
    clave: "17007",
    nombre: "Cuernavaca, Morelos"
  },
  {
    clave: "17008",
    nombre: "Emiliano Zapata, Morelos"
  },
  {
    clave: "26015",
    nombre: "Bavispe, Sonora"
  },
  {
    clave: "26016",
    nombre: "Benjamin Hill, Sonora"
  },
  {
    clave: "17023",
    nombre: "Tlalnepantla, Morelos"
  },
  {
    clave: "17026",
    nombre: "Tlayacapan, Morelos"
  },
  {
    clave: "20053",
    nombre: "Magdalena Tlacotepec, Oaxaca"
  },
  {
    clave: "26017",
    nombre: "Caborca, Sonora"
  },
  {
    clave: "26018",
    nombre: "Cajeme, Sonora"
  },
  {
    clave: "17027",
    nombre: "Totolapan, Morelos"
  },
  {
    clave: "17028",
    nombre: "Xochitepec, Morelos"
  },
  {
    clave: "17029",
    nombre: "Yautepec, Morelos"
  },
  {
    clave: "17030",
    nombre: "Yecapixtla, Morelos"
  },
  {
    clave: "17031",
    nombre: "Zacatepec, Morelos"
  },
  {
    clave: "17032",
    nombre: "Zacualpan, Morelos"
  },
  {
    clave: "17033",
    nombre: "Temoac, Morelos"
  },
  {
    clave: "18001",
    nombre: "Acaponeta, Nayarit"
  },
  {
    clave: "19001",
    nombre: "Abasolo, Nuevo Leon"
  },
  {
    clave: "19006",
    nombre: "Apodaca, Nuevo Leon"
  },
  {
    clave: "19007",
    nombre: "Aramberri, Nuevo Leon"
  },
  {
    clave: "19008",
    nombre: "Bustamante, Nuevo Leon"
  },
  {
    clave: "19029",
    nombre: "Hualahuises, Nuevo Leon"
  },
  {
    clave: "19010",
    nombre: "El Carmen, Nuevo Leon"
  },
  {
    clave: "19016",
    nombre: "Doctor Gonzalez, Nuevo Leon"
  },
  {
    clave: "19017",
    nombre: "Galeana, Nuevo Leon"
  },
  {
    clave: "19018",
    nombre: "Garcia, Nuevo Leon"
  },
  {
    clave: "19019",
    nombre: "San Pedro Garza Garcia, Nuevo Leon"
  },
  {
    clave: "19020",
    nombre: "General Bravo, Nuevo Leon"
  },
  {
    clave: "19021",
    nombre: "General Escobedo, Nuevo Leon"
  },
  {
    clave: "19022",
    nombre: "General Teran, Nuevo Leon"
  },
  {
    clave: "19023",
    nombre: "General Treviño, Nuevo Leon"
  },
  {
    clave: "20021",
    nombre: "Cosolapa, Oaxaca"
  },
  {
    clave: "20054",
    nombre: "Magdalena Zahuatlan, Oaxaca"
  },
  {
    clave: "20055",
    nombre: "Mariscala de Juarez, Oaxaca"
  },
  {
    clave: "19030",
    nombre: "Iturbide, Nuevo Leon"
  },
  {
    clave: "19035",
    nombre: "Melchor Ocampo, Nuevo Leon"
  },
  {
    clave: "20027",
    nombre: "Chiquihuitlan de Benito Juarez, Oaxaca"
  },
  {
    clave: "19036",
    nombre: "Mier y Noriega, Nuevo Leon"
  },
  {
    clave: "19040",
    nombre: "Paras, Nuevo Leon"
  },
  {
    clave: "19041",
    nombre: "Pesqueria, Nuevo Leon"
  },
  {
    clave: "19042",
    nombre: "Los Ramones, Nuevo Leon"
  },
  {
    clave: "20056",
    nombre: "Martires de Tacubaya, Oaxaca"
  },
  {
    clave: "20057",
    nombre: "Matias Romero Avendaño, Oaxaca"
  },
  {
    clave: "19043",
    nombre: "Rayones, Nuevo Leon"
  },
  {
    clave: "19044",
    nombre: "Sabinas Hidalgo, Nuevo Leon"
  },
  {
    clave: "19045",
    nombre: "Salinas Victoria, Nuevo Leon"
  },
  {
    clave: "19046",
    nombre: "San Nicolas de los Garza, Nuevo Leon"
  },
  {
    clave: "20063",
    nombre: "Nazareno Etla, Oaxaca"
  },
  {
    clave: "20064",
    nombre: "Nejapa de Madero, Oaxaca"
  },
  {
    clave: "19047",
    nombre: "Hidalgo, Nuevo Leon"
  },
  {
    clave: "20001",
    nombre: "Abejones, Oaxaca"
  },
  {
    clave: "20089",
    nombre: "San Andres Dinicuiti, Oaxaca"
  },
  {
    clave: "20003",
    nombre: "Asuncion Cacalotepec, Oaxaca"
  },
  {
    clave: "20030",
    nombre: "El Espinal, Oaxaca"
  },
  {
    clave: "20004",
    nombre: "Asuncion Cuyotepeji, Oaxaca"
  },
  {
    clave: "20007",
    nombre: "Asuncion Ocotlan, Oaxaca"
  },
  {
    clave: "20011",
    nombre: "Calihuala, Oaxaca"
  },
  {
    clave: "20033",
    nombre: "Guadalupe Etla, Oaxaca"
  },
  {
    clave: "20013",
    nombre: "Cienega de Zimatlan, Oaxaca"
  },
  {
    clave: "20014",
    nombre: "Ciudad Ixtepec, Oaxaca"
  },
  {
    clave: "20016",
    nombre: "Coicoyan de las Flores, Oaxaca"
  },
  {
    clave: "20017",
    nombre: "La Compañia, Oaxaca"
  },
  {
    clave: "20091",
    nombre: "San Andres Huayapam, Oaxaca"
  },
  {
    clave: "20019",
    nombre: "Concepcion Papalo, Oaxaca"
  },
  {
    clave: "20020",
    nombre: "Constancia del Rosario, Oaxaca"
  },
  {
    clave: "20022",
    nombre: "Cosoltepec, Oaxaca"
  },
  {
    clave: "20023",
    nombre: "Cuilapam de Guerrero, Oaxaca"
  },
  {
    clave: "20024",
    nombre: "Cuyamecalco Villa de Zaragoza, Oaxaca"
  },
  {
    clave: "20025",
    nombre: "Chahuites, Oaxaca"
  },
  {
    clave: "20112",
    nombre: "San Baltazar Chichicapam, Oaxaca"
  },
  {
    clave: "20026",
    nombre: "Chalcatongo de Hidalgo, Oaxaca"
  },
  {
    clave: "20281",
    nombre: "San Miguel Tecomatlan, Oaxaca"
  },
  {
    clave: "20029",
    nombre: "Eloxochitlan de Flores Magon, Oaxaca"
  },
  {
    clave: "20196",
    nombre: "San Juan Evangelista Analco, Oaxaca"
  },
  {
    clave: "20032",
    nombre: "Fresnillo de Trujano, Oaxaca"
  },
  {
    clave: "20117",
    nombre: "San Bartolome Loxicha, Oaxaca"
  },
  {
    clave: "20034",
    nombre: "Guadalupe de Ramirez, Oaxaca"
  },
  {
    clave: "20035",
    nombre: "Guelatao de Juarez, Oaxaca"
  },
  {
    clave: "20075",
    nombre: "Reforma de Pineda, Oaxaca"
  },
  {
    clave: "20037",
    nombre: "Mesones Hidalgo, Oaxaca"
  },
  {
    clave: "20118",
    nombre: "San Bartolome Quialana, Oaxaca"
  },
  {
    clave: "20038",
    nombre: "Villa Hidalgo, Oaxaca"
  },
  {
    clave: "20040",
    nombre: "Huautepec, Oaxaca"
  },
  {
    clave: "20045",
    nombre: "Magdalena Apasco, Oaxaca"
  },
  {
    clave: "20047",
    nombre: "Santa Magdalena Jicotlan, Oaxaca"
  },
  {
    clave: "20046",
    nombre: "Magdalena Jaltepec, Oaxaca"
  },
  {
    clave: "20048",
    nombre: "Magdalena Mixtepec, Oaxaca"
  },
  {
    clave: "20052",
    nombre: "Magdalena Tequisistlan, Oaxaca"
  },
  {
    clave: "20058",
    nombre: "Mazatlan Villa de Flores, Oaxaca"
  },
  {
    clave: "20060",
    nombre: "Mixistlan de la Reforma, Oaxaca"
  },
  {
    clave: "20061",
    nombre: "Monjas, Oaxaca"
  },
  {
    clave: "20062",
    nombre: "Natividad, Oaxaca"
  },
  {
    clave: "20065",
    nombre: "Ixpantepec Nieves, Oaxaca"
  },
  {
    clave: "20066",
    nombre: "Santiago Niltepec, Oaxaca"
  },
  {
    clave: "20067",
    nombre: "Oaxaca de Juarez, Oaxaca"
  },
  {
    clave: "20069",
    nombre: "La Pe, Oaxaca"
  },
  {
    clave: "20070",
    nombre: "Pinotepa de Don Luis, Oaxaca"
  },
  {
    clave: "20071",
    nombre: "Pluma Hidalgo, Oaxaca"
  },
  {
    clave: "20092",
    nombre: "San Andres Ixtlahuaca, Oaxaca"
  },
  {
    clave: "20072",
    nombre: "San Jose del Progreso, Oaxaca"
  },
  {
    clave: "20074",
    nombre: "Santa Catarina Quioquitani, Oaxaca"
  },
  {
    clave: "20076",
    nombre: "La Reforma, Oaxaca"
  },
  {
    clave: "20078",
    nombre: "Rojas de Cuauhtemoc, Oaxaca"
  },
  {
    clave: "20099",
    nombre: "San Andres Tepetlapa, Oaxaca"
  },
  {
    clave: "20077",
    nombre: "Reyes Etla, Oaxaca"
  },
  {
    clave: "20197",
    nombre: "San Juan Guelavia, Oaxaca"
  },
  {
    clave: "20079",
    nombre: "Salina Cruz, Oaxaca"
  },
  {
    clave: "20081",
    nombre: "San Agustin Atenango, Oaxaca"
  },
  {
    clave: "20080",
    nombre: "San Agustin Amatengo, Oaxaca"
  },
  {
    clave: "20084",
    nombre: "San Agustin Etla, Oaxaca"
  },
  {
    clave: "20082",
    nombre: "San Agustin Chayuco, Oaxaca"
  },
  {
    clave: "20083",
    nombre: "San Agustin de las Juntas, Oaxaca"
  },
  {
    clave: "20087",
    nombre: "San Agustin Yatareni, Oaxaca"
  },
  {
    clave: "20090",
    nombre: "San Andres Huaxpaltepec, Oaxaca"
  },
  {
    clave: "20088",
    nombre: "San Andres Cabecera Nueva, Oaxaca"
  },
  {
    clave: "20094",
    nombre: "San Andres Nuxiño, Oaxaca"
  },
  {
    clave: "20100",
    nombre: "San Andres Yaa, Oaxaca"
  },
  {
    clave: "20101",
    nombre: "San Andres Zabache, Oaxaca"
  },
  {
    clave: "20095",
    nombre: "San Andres Paxtlan, Oaxaca"
  },
  {
    clave: "20096",
    nombre: "San Andres Sinaxtla, Oaxaca"
  },
  {
    clave: "20097",
    nombre: "San Andres Solaga, Oaxaca"
  },
  {
    clave: "20102",
    nombre: "San Andres Zautla, Oaxaca"
  },
  {
    clave: "20103",
    nombre: "San Antonino Castillo Velasco, Oaxaca"
  },
  {
    clave: "20204",
    nombre: "San Juan Lajarcia, Oaxaca"
  },
  {
    clave: "20105",
    nombre: "San Antonino Monte Verde, Oaxaca"
  },
  {
    clave: "20106",
    nombre: "San Antonio Acutla, Oaxaca"
  },
  {
    clave: "20107",
    nombre: "San Antonio de la Cal, Oaxaca"
  },
  {
    clave: "20108",
    nombre: "San Antonio Huitepec, Oaxaca"
  },
  {
    clave: "20206",
    nombre: "San Juan de los Cues, Oaxaca"
  },
  {
    clave: "20109",
    nombre: "San Antonio Nanahuatipam, Oaxaca"
  },
  {
    clave: "20110",
    nombre: "San Antonio Sinicahua, Oaxaca"
  },
  {
    clave: "20111",
    nombre: "San Antonio Tepetlapa, Oaxaca"
  },
  {
    clave: "20114",
    nombre: "San Baltazar Yatzachi el Bajo, Oaxaca"
  },
  {
    clave: "20131",
    nombre: "San Dionisio Ocotepec, Oaxaca"
  },
  {
    clave: "20115",
    nombre: "San Bartolo Coyotepec, Oaxaca"
  },
  {
    clave: "20116",
    nombre: "San Bartolome Ayautla, Oaxaca"
  },
  {
    clave: "20119",
    nombre: "San Bartolome Yucuañe, Oaxaca"
  },
  {
    clave: "20120",
    nombre: "San Bartolome Zoogocho, Oaxaca"
  },
  {
    clave: "20452",
    nombre: "Santiago Apostol, Oaxaca"
  },
  {
    clave: "20121",
    nombre: "San Bartolo Soyaltepec, Oaxaca"
  },
  {
    clave: "20122",
    nombre: "San Bartolo Yautepec, Oaxaca"
  },
  {
    clave: "20123",
    nombre: "San Bernardo Mixtepec, Oaxaca"
  },
  {
    clave: "20124",
    nombre: "San Blas Atempa, Oaxaca"
  },
  {
    clave: "20125",
    nombre: "San Carlos Yautepec, Oaxaca"
  },
  {
    clave: "20199",
    nombre: "San Juan Ihualtepec, Oaxaca"
  },
  {
    clave: "20139",
    nombre: "San Francisco Chapulapa, Oaxaca"
  },
  {
    clave: "20135",
    nombre: "San Felipe Tejalapam, Oaxaca"
  },
  {
    clave: "20126",
    nombre: "San Cristobal Amatlan, Oaxaca"
  },
  {
    clave: "20127",
    nombre: "San Cristobal Amoltepec, Oaxaca"
  },
  {
    clave: "20153",
    nombre: "San Gabriel Mixtepec, Oaxaca"
  },
  {
    clave: "20172",
    nombre: "San Juan Achiutla, Oaxaca"
  },
  {
    clave: "20128",
    nombre: "San Cristobal Lachirioag, Oaxaca"
  },
  {
    clave: "20129",
    nombre: "San Cristobal Suchixtlahuaca, Oaxaca"
  },
  {
    clave: "20130",
    nombre: "San Dionisio del Mar, Oaxaca"
  },
  {
    clave: "20132",
    nombre: "San Dionisio Ocotlan, Oaxaca"
  },
  {
    clave: "20160",
    nombre: "San Jeronimo Silacayoapilla, Oaxaca"
  },
  {
    clave: "20133",
    nombre: "San Esteban Atatlahuca, Oaxaca"
  },
  {
    clave: "20134",
    nombre: "San Felipe Jalapa de Diaz, Oaxaca"
  },
  {
    clave: "20136",
    nombre: "San Felipe Usila, Oaxaca"
  },
  {
    clave: "20174",
    nombre: "Animas Trujano, Oaxaca"
  },
  {
    clave: "20137",
    nombre: "San Francisco Cahuacua, Oaxaca"
  },
  {
    clave: "20138",
    nombre: "San Francisco Cajonos, Oaxaca"
  },
  {
    clave: "20140",
    nombre: "San Francisco Chindua, Oaxaca"
  },
  {
    clave: "20176",
    nombre: "San Juan Bautista Coixtlahuaca, Oaxaca"
  },
  {
    clave: "20142",
    nombre: "San Francisco Huehuetlan, Oaxaca"
  },
  {
    clave: "20143",
    nombre: "San Francisco Ixhuatan, Oaxaca"
  },
  {
    clave: "20144",
    nombre: "San Francisco Jaltepetongo, Oaxaca"
  },
  {
    clave: "20145",
    nombre: "San Francisco Lachigolo, Oaxaca"
  },
  {
    clave: "20146",
    nombre: "San Francisco Logueche, Oaxaca"
  },
  {
    clave: "20223",
    nombre: "San Juan Yatzona, Oaxaca"
  },
  {
    clave: "20148",
    nombre: "San Francisco Ozolotepec, Oaxaca"
  },
  {
    clave: "20150",
    nombre: "San Francisco Telixtlahuaca, Oaxaca"
  },
  {
    clave: "20151",
    nombre: "San Francisco Teopan, Oaxaca"
  },
  {
    clave: "20154",
    nombre: "San Ildefonso Amatlan, Oaxaca"
  },
  {
    clave: "20157",
    nombre: "San Jacinto Amilpas, Oaxaca"
  },
  {
    clave: "20178",
    nombre: "San Juan Bautista Guelache, Oaxaca"
  },
  {
    clave: "20158",
    nombre: "San Jacinto Tlacotepec, Oaxaca"
  },
  {
    clave: "20162",
    nombre: "San Jeronimo Taviche, Oaxaca"
  },
  {
    clave: "20179",
    nombre: "San Juan Bautista Jayacatlan, Oaxaca"
  },
  {
    clave: "20249",
    nombre: "San Mateo Yoloxochitlan, Oaxaca"
  },
  {
    clave: "20163",
    nombre: "San Jeronimo Tecoatl, Oaxaca"
  },
  {
    clave: "20165",
    nombre: "San Jose Ayuquila, Oaxaca"
  },
  {
    clave: "20187",
    nombre: "San Juan Coatzospam, Oaxaca"
  },
  {
    clave: "20166",
    nombre: "San Jose Chiltepec, Oaxaca"
  },
  {
    clave: "20167",
    nombre: "San Jose del Peñasco, Oaxaca"
  },
  {
    clave: "20168",
    nombre: "San Jose Estancia Grande, Oaxaca"
  },
  {
    clave: "20263",
    nombre: "San Miguel Coatlan, Oaxaca"
  },
  {
    clave: "20264",
    nombre: "San Miguel Chicahua, Oaxaca"
  },
  {
    clave: "20169",
    nombre: "San Jose Independencia, Oaxaca"
  },
  {
    clave: "20267",
    nombre: "San Miguel del Rio, Oaxaca"
  },
  {
    clave: "20170",
    nombre: "San Jose Lachiguiri, Oaxaca"
  },
  {
    clave: "20171",
    nombre: "San Jose Tenango, Oaxaca"
  },
  {
    clave: "20173",
    nombre: "San Juan Atepec, Oaxaca"
  },
  {
    clave: "20180",
    nombre: "San Juan Bautista Lo de Soto, Oaxaca"
  },
  {
    clave: "20188",
    nombre: "San Juan Colorado, Oaxaca"
  },
  {
    clave: "20181",
    nombre: "San Juan Bautista Suchitepec, Oaxaca"
  },
  {
    clave: "20191",
    nombre: "San Juan Chicomezuchil, Oaxaca"
  },
  {
    clave: "20182",
    nombre: "San Juan Bautista Tlacoatzintepec, Oaxaca"
  },
  {
    clave: "20192",
    nombre: "San Juan Chilateca, Oaxaca"
  },
  {
    clave: "20183",
    nombre: "San Juan Bautista Tlachichilco, Oaxaca"
  },
  {
    clave: "20189",
    nombre: "San Juan Comaltepec, Oaxaca"
  },
  {
    clave: "20193",
    nombre: "San Juan del Estado, Oaxaca"
  },
  {
    clave: "20194",
    nombre: "San Juan del Rio, Oaxaca"
  },
  {
    clave: "20195",
    nombre: "San Juan Diuxi, Oaxaca"
  },
  {
    clave: "20210",
    nombre: "San Juan Ñumi, Oaxaca"
  },
  {
    clave: "20219",
    nombre: "San Juan Teitipac, Oaxaca"
  },
  {
    clave: "20220",
    nombre: "San Juan Tepeuxila, Oaxaca"
  },
  {
    clave: "20200",
    nombre: "San Juan Juquila Mixes, Oaxaca"
  },
  {
    clave: "20201",
    nombre: "San Juan Juquila Vijanos, Oaxaca"
  },
  {
    clave: "20203",
    nombre: "San Juan Lachigalla, Oaxaca"
  },
  {
    clave: "20208",
    nombre: "San Juan Mixtepec Distrito 08, Oaxaca"
  },
  {
    clave: "20215",
    nombre: "San Juan Sayultepec, Oaxaca"
  },
  {
    clave: "20209",
    nombre: "San Juan Mixtepec Distrito 26, Oaxaca"
  },
  {
    clave: "20514",
    nombre: "Santo Domingo Roayaga, Oaxaca"
  },
  {
    clave: "20216",
    nombre: "San Juan Tabaa, Oaxaca"
  },
  {
    clave: "20218",
    nombre: "San Juan Teita, Oaxaca"
  },
  {
    clave: "20516",
    nombre: "Santo Domingo Teojomulco, Oaxaca"
  },
  {
    clave: "20517",
    nombre: "Santo Domingo Tepuxtepec, Oaxaca"
  },
  {
    clave: "20221",
    nombre: "San Juan Teposcolula, Oaxaca"
  },
  {
    clave: "20524",
    nombre: "Santo Domingo Yodohino, Oaxaca"
  },
  {
    clave: "20525",
    nombre: "Santo Domingo Zanatepec, Oaxaca"
  },
  {
    clave: "20222",
    nombre: "San Juan Yaee, Oaxaca"
  },
  {
    clave: "20233",
    nombre: "San Lucas Quiavini, Oaxaca"
  },
  {
    clave: "20224",
    nombre: "San Juan Yucuita, Oaxaca"
  },
  {
    clave: "20239",
    nombre: "San Martin Huamelulpam, Oaxaca"
  },
  {
    clave: "20242",
    nombre: "San Martin Peras, Oaxaca"
  },
  {
    clave: "20225",
    nombre: "San Lorenzo, Oaxaca"
  },
  {
    clave: "20244",
    nombre: "San Martin Toxpalan, Oaxaca"
  },
  {
    clave: "20226",
    nombre: "San Lorenzo Albarradas, Oaxaca"
  },
  {
    clave: "20456",
    nombre: "Santiago Cacaloxtepec, Oaxaca"
  },
  {
    clave: "20227",
    nombre: "San Lorenzo Cacaotepec, Oaxaca"
  },
  {
    clave: "20228",
    nombre: "San Lorenzo Cuaunecuiltitla, Oaxaca"
  },
  {
    clave: "20231",
    nombre: "San Lucas Camotlan, Oaxaca"
  },
  {
    clave: "20234",
    nombre: "San Lucas Zoquiapam, Oaxaca"
  },
  {
    clave: "20235",
    nombre: "San Luis Amatlan, Oaxaca"
  },
  {
    clave: "20236",
    nombre: "San Marcial Ozolotepec, Oaxaca"
  },
  {
    clave: "20237",
    nombre: "San Marcos Arteaga, Oaxaca"
  },
  {
    clave: "20238",
    nombre: "San Martin de los Cansecos, Oaxaca"
  },
  {
    clave: "20240",
    nombre: "San Martin Itunyoso, Oaxaca"
  },
  {
    clave: "20241",
    nombre: "San Martin Lachila, Oaxaca"
  },
  {
    clave: "20243",
    nombre: "San Martin Tilcajete, Oaxaca"
  },
  {
    clave: "20245",
    nombre: "San Martin Zacatepec, Oaxaca"
  },
  {
    clave: "20246",
    nombre: "San Mateo Cajonos, Oaxaca"
  },
  {
    clave: "20248",
    nombre: "San Mateo del Mar, Oaxaca"
  },
  {
    clave: "20250",
    nombre: "San Mateo Etlatongo, Oaxaca"
  },
  {
    clave: "20251",
    nombre: "San Mateo Nejapam, Oaxaca"
  },
  {
    clave: "20247",
    nombre: "Capulalpam de Mendez, Oaxaca"
  },
  {
    clave: "20270",
    nombre: "San Miguel Huautla, Oaxaca"
  },
  {
    clave: "20255",
    nombre: "San Mateo Sindihui, Oaxaca"
  },
  {
    clave: "20252",
    nombre: "San Mateo Peñasco, Oaxaca"
  },
  {
    clave: "20253",
    nombre: "San Mateo Piñas, Oaxaca"
  },
  {
    clave: "20254",
    nombre: "San Mateo Rio Hondo, Oaxaca"
  },
  {
    clave: "20276",
    nombre: "San Miguel Santa Flor, Oaxaca"
  },
  {
    clave: "20256",
    nombre: "San Mateo Tlapiltepec, Oaxaca"
  },
  {
    clave: "20258",
    nombre: "San Miguel Achiutla, Oaxaca"
  },
  {
    clave: "20257",
    nombre: "San Melchor Betaza, Oaxaca"
  },
  {
    clave: "20259",
    nombre: "San Miguel Ahuehuetitlan, Oaxaca"
  },
  {
    clave: "20260",
    nombre: "San Miguel Aloapam, Oaxaca"
  },
  {
    clave: "20262",
    nombre: "San Miguel Amatlan, Oaxaca"
  },
  {
    clave: "20284",
    nombre: "San Miguel Tilquiapam, Oaxaca"
  },
  {
    clave: "20265",
    nombre: "San Miguel Chimalapa, Oaxaca"
  },
  {
    clave: "20266",
    nombre: "San Miguel del Puerto, Oaxaca"
  },
  {
    clave: "20268",
    nombre: "San Miguel Ejutla, Oaxaca"
  },
  {
    clave: "20269",
    nombre: "San Miguel el Grande, Oaxaca"
  },
  {
    clave: "20271",
    nombre: "San Miguel Mixtepec, Oaxaca"
  },
  {
    clave: "20274",
    nombre: "San Miguel Piedras, Oaxaca"
  },
  {
    clave: "20280",
    nombre: "Villa Talea de Castro, Oaxaca"
  },
  {
    clave: "20282",
    nombre: "San Miguel Tenango, Oaxaca"
  },
  {
    clave: "20283",
    nombre: "San Miguel Tequixtepec, Oaxaca"
  },
  {
    clave: "20547",
    nombre: "Teotongo, Oaxaca"
  },
  {
    clave: "20285",
    nombre: "San Miguel Tlacamama, Oaxaca"
  },
  {
    clave: "20548",
    nombre: "Tepelmeme Villa de Morelos, Oaxaca"
  },
  {
    clave: "20388",
    nombre: "Santa Ines del Monte, Oaxaca"
  },
  {
    clave: "20286",
    nombre: "San Miguel Tlacotepec, Oaxaca"
  },
  {
    clave: "20287",
    nombre: "San Miguel Tulancingo, Oaxaca"
  },
  {
    clave: "20288",
    nombre: "San Miguel Yotao, Oaxaca"
  },
  {
    clave: "20462",
    nombre: "Santiago Huajolotitlan, Oaxaca"
  },
  {
    clave: "20289",
    nombre: "San Nicolas, Oaxaca"
  },
  {
    clave: "20292",
    nombre: "San Pablo Cuatro Venados, Oaxaca"
  },
  {
    clave: "20295",
    nombre: "San Pablo Huixtepec, Oaxaca"
  },
  {
    clave: "20293",
    nombre: "San Pablo Etla, Oaxaca"
  },
  {
    clave: "20294",
    nombre: "San Pablo Huitzo, Oaxaca"
  },
  {
    clave: "20296",
    nombre: "San Pablo Macuiltianguis, Oaxaca"
  },
  {
    clave: "20297",
    nombre: "San Pablo Tijaltepec, Oaxaca"
  },
  {
    clave: "20299",
    nombre: "San Pablo Yaganiza, Oaxaca"
  },
  {
    clave: "20298",
    nombre: "San Pablo Villa de Mitla, Oaxaca"
  },
  {
    clave: "20300",
    nombre: "San Pedro Amuzgos, Oaxaca"
  },
  {
    clave: "20303",
    nombre: "San Pedro Cajonos, Oaxaca"
  },
  {
    clave: "20301",
    nombre: "San Pedro Apostol, Oaxaca"
  },
  {
    clave: "20302",
    nombre: "San Pedro Atoyac, Oaxaca"
  },
  {
    clave: "20304",
    nombre: "San Pedro Coxcaltepec Cantaros, Oaxaca"
  },
  {
    clave: "20305",
    nombre: "San Pedro Comitancillo, Oaxaca"
  },
  {
    clave: "20331",
    nombre: "San Pedro Tidaa, Oaxaca"
  },
  {
    clave: "20307",
    nombre: "San Pedro Huamelula, Oaxaca"
  },
  {
    clave: "20308",
    nombre: "San Pedro Huilotepec, Oaxaca"
  },
  {
    clave: "20332",
    nombre: "San Pedro Topiltepec, Oaxaca"
  },
  {
    clave: "20310",
    nombre: "San Pedro Ixtlahuaca, Oaxaca"
  },
  {
    clave: "20311",
    nombre: "San Pedro Jaltepetongo, Oaxaca"
  },
  {
    clave: "20333",
    nombre: "San Pedro Totolapam, Oaxaca"
  },
  {
    clave: "20312",
    nombre: "San Pedro Jicayan, Oaxaca"
  },
  {
    clave: "20313",
    nombre: "San Pedro Jocotipac, Oaxaca"
  },
  {
    clave: "20314",
    nombre: "San Pedro Juchatengo, Oaxaca"
  },
  {
    clave: "20555",
    nombre: "Trinidad Zaachila, Oaxaca"
  },
  {
    clave: "20315",
    nombre: "San Pedro Martir, Oaxaca"
  },
  {
    clave: "20316",
    nombre: "San Pedro Martir Quiechapa, Oaxaca"
  },
  {
    clave: "20556",
    nombre: "La Trinidad Vista Hermosa, Oaxaca"
  },
  {
    clave: "20317",
    nombre: "San Pedro Martir Yucuxaco, Oaxaca"
  },
  {
    clave: "20362",
    nombre: "Santa Catarina Cuixtla, Oaxaca"
  },
  {
    clave: "20319",
    nombre: "San Pedro Mixtepec Distrito 26, Oaxaca"
  },
  {
    clave: "20320",
    nombre: "San Pedro Molinos, Oaxaca"
  },
  {
    clave: "20321",
    nombre: "San Pedro Nopala, Oaxaca"
  },
  {
    clave: "20322",
    nombre: "San Pedro Ocopetatillo, Oaxaca"
  },
  {
    clave: "20323",
    nombre: "San Pedro Ocotepec, Oaxaca"
  },
  {
    clave: "20325",
    nombre: "San Pedro Quiatoni, Oaxaca"
  },
  {
    clave: "20342",
    nombre: "San Raymundo Jalpan, Oaxaca"
  },
  {
    clave: "20326",
    nombre: "San Pedro Sochiapam, Oaxaca"
  },
  {
    clave: "20327",
    nombre: "San Pedro Tapanatepec, Oaxaca"
  },
  {
    clave: "20328",
    nombre: "San Pedro Taviche, Oaxaca"
  },
  {
    clave: "20329",
    nombre: "San Pedro Teozacoalco, Oaxaca"
  },
  {
    clave: "20330",
    nombre: "San Pedro Teutila, Oaxaca"
  },
  {
    clave: "20335",
    nombre: "San Pedro Yaneri, Oaxaca"
  },
  {
    clave: "20367",
    nombre: "Santa Catarina Mechoacan, Oaxaca"
  },
  {
    clave: "20336",
    nombre: "San Pedro Yolox, Oaxaca"
  },
  {
    clave: "20368",
    nombre: "Santa Catarina Minas, Oaxaca"
  },
  {
    clave: "20338",
    nombre: "Villa de Etla, Oaxaca"
  },
  {
    clave: "20339",
    nombre: "San Pedro y San Pablo Teposcolula, Oaxaca"
  },
  {
    clave: "20343",
    nombre: "San Sebastian Abasolo, Oaxaca"
  },
  {
    clave: "20346",
    nombre: "San Sebastian Nicananduta, Oaxaca"
  },
  {
    clave: "20344",
    nombre: "San Sebastian Coatlan, Oaxaca"
  },
  {
    clave: "20345",
    nombre: "San Sebastian Ixcapa, Oaxaca"
  },
  {
    clave: "20356",
    nombre: "Santa Ana del Valle, Oaxaca"
  },
  {
    clave: "20357",
    nombre: "Santa Ana Tavela, Oaxaca"
  },
  {
    clave: "20347",
    nombre: "San Sebastian Rio Hondo, Oaxaca"
  },
  {
    clave: "20348",
    nombre: "San Sebastian Tecomaxtlahuaca, Oaxaca"
  },
  {
    clave: "26023",
    nombre: "Cumpas, Sonora"
  },
  {
    clave: "20349",
    nombre: "San Sebastian Teitipac, Oaxaca"
  },
  {
    clave: "20360",
    nombre: "Santa Ana Zegache, Oaxaca"
  },
  {
    clave: "20350",
    nombre: "San Sebastian Tutla, Oaxaca"
  },
  {
    clave: "20351",
    nombre: "San Simon Almolongas, Oaxaca"
  },
  {
    clave: "20540",
    nombre: "Villa de Tamazulapam del Progreso, Oaxaca"
  },
  {
    clave: "20352",
    nombre: "San Simon Zahuatlan, Oaxaca"
  },
  {
    clave: "20353",
    nombre: "Santa Ana, Oaxaca"
  },
  {
    clave: "20354",
    nombre: "Santa Ana Ateixtlahuaca, Oaxaca"
  },
  {
    clave: "20355",
    nombre: "Santa Ana Cuauhtemoc, Oaxaca"
  },
  {
    clave: "20358",
    nombre: "Santa Ana Tlapacoyan, Oaxaca"
  },
  {
    clave: "20359",
    nombre: "Santa Ana Yareni, Oaxaca"
  },
  {
    clave: "20361",
    nombre: "Santa Catalina Quieri, Oaxaca"
  },
  {
    clave: "20363",
    nombre: "Santa Catarina Ixtepeji, Oaxaca"
  },
  {
    clave: "20369",
    nombre: "Santa Catarina Quiane, Oaxaca"
  },
  {
    clave: "20365",
    nombre: "Santa Catarina Lachatao, Oaxaca"
  },
  {
    clave: "20370",
    nombre: "Santa Catarina Tayata, Oaxaca"
  },
  {
    clave: "20376",
    nombre: "Santa Cruz de Bravo, Oaxaca"
  },
  {
    clave: "20372",
    nombre: "Santa Catarina Yosonotu, Oaxaca"
  },
  {
    clave: "20373",
    nombre: "Santa Catarina Zapoquila, Oaxaca"
  },
  {
    clave: "20374",
    nombre: "Santa Cruz Acatepec, Oaxaca"
  },
  {
    clave: "20375",
    nombre: "Santa Cruz Amilpas, Oaxaca"
  },
  {
    clave: "20379",
    nombre: "Santa Cruz Nundaco, Oaxaca"
  },
  {
    clave: "20380",
    nombre: "Santa Cruz Papalutla, Oaxaca"
  },
  {
    clave: "20381",
    nombre: "Santa Cruz Tacache de Mina, Oaxaca"
  },
  {
    clave: "20382",
    nombre: "Santa Cruz Tacahua, Oaxaca"
  },
  {
    clave: "20383",
    nombre: "Santa Cruz Tayata, Oaxaca"
  },
  {
    clave: "20403",
    nombre: "Santa Maria Coyotepec, Oaxaca"
  },
  {
    clave: "20387",
    nombre: "Santa Gertrudis, Oaxaca"
  },
  {
    clave: "20384",
    nombre: "Santa Cruz Xitla, Oaxaca"
  },
  {
    clave: "20390",
    nombre: "Santa Lucia del Camino, Oaxaca"
  },
  {
    clave: "20391",
    nombre: "Santa Lucia Miahuatlan, Oaxaca"
  },
  {
    clave: "20408",
    nombre: "Santa Maria del Rosario, Oaxaca"
  },
  {
    clave: "20392",
    nombre: "Santa Lucia Monteverde, Oaxaca"
  },
  {
    clave: "20393",
    nombre: "Santa Lucia Ocotlan, Oaxaca"
  },
  {
    clave: "20395",
    nombre: "Santa Maria Apazco, Oaxaca"
  },
  {
    clave: "20396",
    nombre: "Santa Maria la Asuncion, Oaxaca"
  },
  {
    clave: "20418",
    nombre: "Santa Maria Jalapa del Marques, Oaxaca"
  },
  {
    clave: "20398",
    nombre: "Ayoquezco de Aldama, Oaxaca"
  },
  {
    clave: "20399",
    nombre: "Santa Maria Atzompa, Oaxaca"
  },
  {
    clave: "20400",
    nombre: "Santa Maria Camotlan, Oaxaca"
  },
  {
    clave: "20402",
    nombre: "Santa Maria Cortijo, Oaxaca"
  },
  {
    clave: "20419",
    nombre: "Santa Maria Jaltianguis, Oaxaca"
  },
  {
    clave: "20404",
    nombre: "Santa Maria Chachoapam, Oaxaca"
  },
  {
    clave: "20405",
    nombre: "Villa de Chilapa de Diaz, Oaxaca"
  },
  {
    clave: "20432",
    nombre: "Santa Maria Temaxcalapa, Oaxaca"
  },
  {
    clave: "20409",
    nombre: "Santa Maria del Tule, Oaxaca"
  },
  {
    clave: "20411",
    nombre: "Santa Maria Guelace, Oaxaca"
  },
  {
    clave: "20436",
    nombre: "Santa Maria Texcatitlan, Oaxaca"
  },
  {
    clave: "20437",
    nombre: "Santa Maria Tlahuitoltepec, Oaxaca"
  },
  {
    clave: "20412",
    nombre: "Santa Maria Guienagati, Oaxaca"
  },
  {
    clave: "20414",
    nombre: "Santa Maria Huazolotitlan, Oaxaca"
  },
  {
    clave: "20415",
    nombre: "Santa Maria Ipalapa, Oaxaca"
  },
  {
    clave: "20416",
    nombre: "Santa Maria Ixcatlan, Oaxaca"
  },
  {
    clave: "20420",
    nombre: "Santa Maria Lachixio, Oaxaca"
  },
  {
    clave: "20421",
    nombre: "Santa Maria Mixtequilla, Oaxaca"
  },
  {
    clave: "20422",
    nombre: "Santa Maria Nativitas, Oaxaca"
  },
  {
    clave: "20423",
    nombre: "Santa Maria Nduayaco, Oaxaca"
  },
  {
    clave: "20425",
    nombre: "Santa Maria Papalo, Oaxaca"
  },
  {
    clave: "20518",
    nombre: "Santo Domingo Tlatayapam, Oaxaca"
  },
  {
    clave: "20428",
    nombre: "Santa Maria Quiegolani, Oaxaca"
  },
  {
    clave: "20429",
    nombre: "Santa Maria Sola, Oaxaca"
  },
  {
    clave: "20430",
    nombre: "Santa Maria Tataltepec, Oaxaca"
  },
  {
    clave: "21058",
    nombre: "Chilchotla, Puebla"
  },
  {
    clave: "20431",
    nombre: "Santa Maria Tecomavaca, Oaxaca"
  },
  {
    clave: "22002",
    nombre: "Pinal de Amoles, Queretaro"
  },
  {
    clave: "20433",
    nombre: "Santa Maria Temaxcaltepec, Oaxaca"
  },
  {
    clave: "20438",
    nombre: "Santa Maria Tlalixtac, Oaxaca"
  },
  {
    clave: "24034",
    nombre: "San Vicente Tancuayalab, San Luis Potosi"
  },
  {
    clave: "20434",
    nombre: "Santa Maria Teopoxco, Oaxaca"
  },
  {
    clave: "24041",
    nombre: "Tanlajas, San Luis Potosi"
  },
  {
    clave: "20439",
    nombre: "Santa Maria Tonameca, Oaxaca"
  },
  {
    clave: "21200",
    nombre: "Xochiapulco, Puebla"
  },
  {
    clave: "20442",
    nombre: "Santa Maria Yalina, Oaxaca"
  },
  {
    clave: "20444",
    nombre: "Santa Maria Yolotepec, Oaxaca"
  },
  {
    clave: "25016",
    nombre: "San Ignacio, Sinaloa"
  },
  {
    clave: "20443",
    nombre: "Santa Maria Yavesia, Oaxaca"
  },
  {
    clave: "20445",
    nombre: "Santa Maria Yosoyua, Oaxaca"
  },
  {
    clave: "20446",
    nombre: "Santa Maria Yucuhiti, Oaxaca"
  },
  {
    clave: "20448",
    nombre: "Santa Maria Zaniza, Oaxaca"
  },
  {
    clave: "20449",
    nombre: "Santa Maria Zoquitlan, Oaxaca"
  },
  {
    clave: "20451",
    nombre: "Santiago Apoala, Oaxaca"
  },
  {
    clave: "20453",
    nombre: "Santiago Astata, Oaxaca"
  },
  {
    clave: "20463",
    nombre: "Santiago Huauclilla, Oaxaca"
  },
  {
    clave: "20454",
    nombre: "Santiago Atitlan, Oaxaca"
  },
  {
    clave: "20464",
    nombre: "Santiago Ihuitlan Plumas, Oaxaca"
  },
  {
    clave: "20455",
    nombre: "Santiago Ayuquililla, Oaxaca"
  },
  {
    clave: "20458",
    nombre: "Santiago Comaltepec, Oaxaca"
  },
  {
    clave: "20461",
    nombre: "Santiago del Rio, Oaxaca"
  },
  {
    clave: "20465",
    nombre: "Santiago Ixcuintepec, Oaxaca"
  },
  {
    clave: "20468",
    nombre: "Santiago Jocotepec, Oaxaca"
  },
  {
    clave: "20469",
    nombre: "Santiago Juxtlahuaca, Oaxaca"
  },
  {
    clave: "20471",
    nombre: "Santiago Lalopa, Oaxaca"
  },
  {
    clave: "20472",
    nombre: "Santiago Laollaga, Oaxaca"
  },
  {
    clave: "20486",
    nombre: "Villa Tejupam de la Union, Oaxaca"
  },
  {
    clave: "20473",
    nombre: "Santiago Laxopa, Oaxaca"
  },
  {
    clave: "20474",
    nombre: "Santiago Llano Grande, Oaxaca"
  },
  {
    clave: "20475",
    nombre: "Santiago Matatlan, Oaxaca"
  },
  {
    clave: "20476",
    nombre: "Santiago Miltepec, Oaxaca"
  },
  {
    clave: "20493",
    nombre: "Santiago Tillo, Oaxaca"
  },
  {
    clave: "20478",
    nombre: "Santiago Nacaltepec, Oaxaca"
  },
  {
    clave: "20480",
    nombre: "Santiago Nundiche, Oaxaca"
  },
  {
    clave: "20482",
    nombre: "Santiago Pinotepa Nacional, Oaxaca"
  },
  {
    clave: "20483",
    nombre: "Santiago Suchilquitongo, Oaxaca"
  },
  {
    clave: "20497",
    nombre: "Santiago Yaitepec, Oaxaca"
  },
  {
    clave: "20485",
    nombre: "Santiago Tapextla, Oaxaca"
  },
  {
    clave: "20487",
    nombre: "Santiago Tenango, Oaxaca"
  },
  {
    clave: "20488",
    nombre: "Santiago Tepetlapa, Oaxaca"
  },
  {
    clave: "20502",
    nombre: "Santiago Zacatepec, Oaxaca"
  },
  {
    clave: "20489",
    nombre: "Santiago Tetepec, Oaxaca"
  },
  {
    clave: "20490",
    nombre: "Santiago Texcalcingo, Oaxaca"
  },
  {
    clave: "20503",
    nombre: "Santiago Zoochila, Oaxaca"
  },
  {
    clave: "20491",
    nombre: "Santiago nombreitlan, Oaxaca"
  },
  {
    clave: "20494",
    nombre: "Santiago Tlazoyaltepec, Oaxaca"
  },
  {
    clave: "20496",
    nombre: "Santiago Xiacui, Oaxaca"
  },
  {
    clave: "20499",
    nombre: "Santiago Yolomecatl, Oaxaca"
  },
  {
    clave: "20504",
    nombre: "Nuevo Zoquiapam, Oaxaca"
  },
  {
    clave: "20501",
    nombre: "Santiago Yucuyachi, Oaxaca"
  },
  {
    clave: "20505",
    nombre: "Santo Domingo Ingenio, Oaxaca"
  },
  {
    clave: "20506",
    nombre: "Santo Domingo Albarradas, Oaxaca"
  },
  {
    clave: "20507",
    nombre: "Santo Domingo Armenta, Oaxaca"
  },
  {
    clave: "20508",
    nombre: "Santo Domingo Chihuitan, Oaxaca"
  },
  {
    clave: "20509",
    nombre: "Santo Domingo de Morelos, Oaxaca"
  },
  {
    clave: "20510",
    nombre: "Santo Domingo Ixcatlan, Oaxaca"
  },
  {
    clave: "20511",
    nombre: "Santo Domingo Nuxaa, Oaxaca"
  },
  {
    clave: "20512",
    nombre: "Santo Domingo Ozolotepec, Oaxaca"
  },
  {
    clave: "20519",
    nombre: "Santo Domingo Tomaltepec, Oaxaca"
  },
  {
    clave: "20541",
    nombre: "Tanetze de Zaragoza, Oaxaca"
  },
  {
    clave: "20520",
    nombre: "Santo Domingo Tonala, Oaxaca"
  },
  {
    clave: "20521",
    nombre: "Santo Domingo Tonaltepec, Oaxaca"
  },
  {
    clave: "20522",
    nombre: "Santo Domingo Xagacia, Oaxaca"
  },
  {
    clave: "20523",
    nombre: "Santo Domingo Yanhuitlan, Oaxaca"
  },
  {
    clave: "20527",
    nombre: "Santos Reyes Papalo, Oaxaca"
  },
  {
    clave: "20528",
    nombre: "Santos Reyes Tepejillo, Oaxaca"
  },
  {
    clave: "20529",
    nombre: "Santos Reyes Yucuna, Oaxaca"
  },
  {
    clave: "20535",
    nombre: "San Vicente Lachixio, Oaxaca"
  },
  {
    clave: "20530",
    nombre: "Santo Tomas Jalieza, Oaxaca"
  },
  {
    clave: "20531",
    nombre: "Santo Tomas Mazaltepec, Oaxaca"
  },
  {
    clave: "20536",
    nombre: "San Vicente Nuñu, Oaxaca"
  },
  {
    clave: "20532",
    nombre: "Santo Tomas Ocotepec, Oaxaca"
  },
  {
    clave: "20537",
    nombre: "Silacayoapam, Oaxaca"
  },
  {
    clave: "20538",
    nombre: "Sitio de Xitlapehua, Oaxaca"
  },
  {
    clave: "20533",
    nombre: "Santo Tomas Tamazulapan, Oaxaca"
  },
  {
    clave: "20539",
    nombre: "Soledad Etla, Oaxaca"
  },
  {
    clave: "20534",
    nombre: "San Vicente Coatlan, Oaxaca"
  },
  {
    clave: "20542",
    nombre: "Taniche, Oaxaca"
  },
  {
    clave: "20544",
    nombre: "Teococuilco de Marcos Perez, Oaxaca"
  },
  {
    clave: "20546",
    nombre: "Teotitlan del Valle, Oaxaca"
  },
  {
    clave: "20545",
    nombre: "Teotitlan de Flores Magon, Oaxaca"
  },
  {
    clave: "20550",
    nombre: "San Jeronimo Tlacochahuaya, Oaxaca"
  },
  {
    clave: "20558",
    nombre: "Valerio Trujano, Oaxaca"
  },
  {
    clave: "20551",
    nombre: "Tlacolula de Matamoros, Oaxaca"
  },
  {
    clave: "20552",
    nombre: "Tlacotepec Plumas, Oaxaca"
  },
  {
    clave: "20553",
    nombre: "Tlalixtac de Cabrera, Oaxaca"
  },
  {
    clave: "20561",
    nombre: "Yaxe, Oaxaca"
  },
  {
    clave: "20562",
    nombre: "Magdalena Yodocono de Porfirio Diaz, Oaxaca"
  },
  {
    clave: "20554",
    nombre: "Totontepec Villa de Morelos, Oaxaca"
  },
  {
    clave: "20568",
    nombre: "Zapotitlan Palmas, Oaxaca"
  },
  {
    clave: "20557",
    nombre: "Union Hidalgo, Oaxaca"
  },
  {
    clave: "20559",
    nombre: "San Juan Bautista Valle Nacional, Oaxaca"
  },
  {
    clave: "20560",
    nombre: "Villa Diaz Ordaz, Oaxaca"
  },
  {
    clave: "20563",
    nombre: "Yogana, Oaxaca"
  },
  {
    clave: "20569",
    nombre: "Santa Ines de Zaragoza, Oaxaca"
  },
  {
    clave: "20570",
    nombre: "Zimatlan de Alvarez, Oaxaca"
  },
  {
    clave: "21001",
    nombre: "Acajete, Puebla"
  },
  {
    clave: "21002",
    nombre: "Acateno, Puebla"
  },
  {
    clave: "21003",
    nombre: "Acatlan, Puebla"
  },
  {
    clave: "21004",
    nombre: "Acatzingo, Puebla"
  },
  {
    clave: "21005",
    nombre: "Acteopan, Puebla"
  },
  {
    clave: "21006",
    nombre: "Ahuacatlan, Puebla"
  },
  {
    clave: "21007",
    nombre: "Ahuatlan, Puebla"
  },
  {
    clave: "21008",
    nombre: "Ahuazotepec, Puebla"
  },
  {
    clave: "21009",
    nombre: "Ahuehuetitla, Puebla"
  },
  {
    clave: "21010",
    nombre: "Ajalpan, Puebla"
  },
  {
    clave: "21011",
    nombre: "Albino Zertuche, Puebla"
  },
  {
    clave: "21012",
    nombre: "Aljojuca, Puebla"
  },
  {
    clave: "21013",
    nombre: "Altepexi, Puebla"
  },
  {
    clave: "21014",
    nombre: "Amixtlan, Puebla"
  },
  {
    clave: "21015",
    nombre: "Amozoc, Puebla"
  },
  {
    clave: "21016",
    nombre: "Aquixtla, Puebla"
  },
  {
    clave: "20564",
    nombre: "Yutanduchi de Guerrero, Oaxaca"
  },
  {
    clave: "20565",
    nombre: "Villa de Zaachila, Oaxaca"
  },
  {
    clave: "20566",
    nombre: "San Mateo Yucutindoo, Oaxaca"
  },
  {
    clave: "21059",
    nombre: "Chinantla, Puebla"
  },
  {
    clave: "21060",
    nombre: "Domingo Arenas, Puebla"
  },
  {
    clave: "21061",
    nombre: "Eloxochitlan, Puebla"
  },
  {
    clave: "21062",
    nombre: "Epatlan, Puebla"
  },
  {
    clave: "21063",
    nombre: "Esperanza, Puebla"
  },
  {
    clave: "21064",
    nombre: "Francisco Z. Mena, Puebla"
  },
  {
    clave: "21065",
    nombre: "General Felipe Angeles, Puebla"
  },
  {
    clave: "21066",
    nombre: "Guadalupe, Puebla"
  },
  {
    clave: "21067",
    nombre: "Guadalupe Victoria, Puebla"
  },
  {
    clave: "21068",
    nombre: "Hermenegildo Galeana, Puebla"
  },
  {
    clave: "21069",
    nombre: "Huaquechula, Puebla"
  },
  {
    clave: "21070",
    nombre: "Huatlatlauca, Puebla"
  },
  {
    clave: "20567",
    nombre: "Zapotitlan Lagunas, Oaxaca"
  },
  {
    clave: "21073",
    nombre: "Huehuetlan el Chico, Puebla"
  },
  {
    clave: "21074",
    nombre: "Huejotzingo, Puebla"
  },
  {
    clave: "21075",
    nombre: "Hueyapan, Puebla"
  },
  {
    clave: "21076",
    nombre: "Hueytamalco, Puebla"
  },
  {
    clave: "21077",
    nombre: "Hueytlalpan, Puebla"
  },
  {
    clave: "21078",
    nombre: "Huitzilan de Serdan, Puebla"
  },
  {
    clave: "21079",
    nombre: "Huitziltepec, Puebla"
  },
  {
    clave: "21020",
    nombre: "Atoyatempan, Puebla"
  },
  {
    clave: "21021",
    nombre: "Atzala, Puebla"
  },
  {
    clave: "26038",
    nombre: "Moctezuma, Sonora"
  },
  {
    clave: "21028",
    nombre: "Camocuautla, Puebla"
  },
  {
    clave: "21029",
    nombre: "Caxhuacan, Puebla"
  },
  {
    clave: "21030",
    nombre: "Coatepec, Puebla"
  },
  {
    clave: "21034",
    nombre: "Coronango, Puebla"
  },
  {
    clave: "26039",
    nombre: "Naco, Sonora"
  },
  {
    clave: "21038",
    nombre: "Cuapiaxtla de Madero, Puebla"
  },
  {
    clave: "21039",
    nombre: "Cuautempan, Puebla"
  },
  {
    clave: "21040",
    nombre: "Cuautinchan, Puebla"
  },
  {
    clave: "21041",
    nombre: "Cuautlancingo, Puebla"
  },
  {
    clave: "21042",
    nombre: "Cuayuca de Andrade, Puebla"
  },
  {
    clave: "21043",
    nombre: "Cuetzalan del Progreso, Puebla"
  },
  {
    clave: "21044",
    nombre: "Cuyoaco, Puebla"
  },
  {
    clave: "21045",
    nombre: "Chalchicomula de Sesma, Puebla"
  },
  {
    clave: "21046",
    nombre: "Chapulco, Puebla"
  },
  {
    clave: "21047",
    nombre: "Chiautla, Puebla"
  },
  {
    clave: "21048",
    nombre: "Chiautzingo, Puebla"
  },
  {
    clave: "21049",
    nombre: "Chiconcuautla, Puebla"
  },
  {
    clave: "21050",
    nombre: "Chichiquila, Puebla"
  },
  {
    clave: "21051",
    nombre: "Chietla, Puebla"
  },
  {
    clave: "21052",
    nombre: "Chigmecatitlan, Puebla"
  },
  {
    clave: "21053",
    nombre: "Chignahuapan, Puebla"
  },
  {
    clave: "21054",
    nombre: "Chignautla, Puebla"
  },
  {
    clave: "21055",
    nombre: "Chila, Puebla"
  },
  {
    clave: "21056",
    nombre: "Chila de la Sal, Puebla"
  },
  {
    clave: "21057",
    nombre: "Honey, Puebla"
  },
  {
    clave: "21080",
    nombre: "Atlequizayan, Puebla"
  },
  {
    clave: "21084",
    nombre: "Ixtepec, Puebla"
  },
  {
    clave: "21085",
    nombre: "Izucar de Matamoros, Puebla"
  },
  {
    clave: "21086",
    nombre: "Jalpan, Puebla"
  },
  {
    clave: "21087",
    nombre: "Jolalpan, Puebla"
  },
  {
    clave: "21088",
    nombre: "Jonotla, Puebla"
  },
  {
    clave: "21089",
    nombre: "Jopala, Puebla"
  },
  {
    clave: "21090",
    nombre: "Juan C. Bonilla, Puebla"
  },
  {
    clave: "26041",
    nombre: "Nacozari de Garcia, Sonora"
  },
  {
    clave: "21091",
    nombre: "Juan Galindo, Puebla"
  },
  {
    clave: "26042",
    nombre: "Navojoa, Sonora"
  },
  {
    clave: "21095",
    nombre: "La Magdalena Tlatlauquitepec, Puebla"
  },
  {
    clave: "30092",
    nombre: "Xico, Veracruz"
  },
  {
    clave: "21097",
    nombre: "Mixtla, Puebla"
  },
  {
    clave: "21099",
    nombre: "Cañada Morelos, Puebla"
  },
  {
    clave: "21100",
    nombre: "Naupan, Puebla"
  },
  {
    clave: "21101",
    nombre: "Nauzontla, Puebla"
  },
  {
    clave: "21102",
    nombre: "Nealtican, Puebla"
  },
  {
    clave: "21103",
    nombre: "Nicolas Bravo, Puebla"
  },
  {
    clave: "21104",
    nombre: "Nopalucan, Puebla"
  },
  {
    clave: "21105",
    nombre: "Ocotepec, Puebla"
  },
  {
    clave: "21106",
    nombre: "Ocoyucan, Puebla"
  },
  {
    clave: "21107",
    nombre: "Olintla, Puebla"
  },
  {
    clave: "21108",
    nombre: "Oriental, Puebla"
  },
  {
    clave: "21109",
    nombre: "Pahuatlan, Puebla"
  },
  {
    clave: "21110",
    nombre: "Palmar de Bravo, Puebla"
  },
  {
    clave: "21111",
    nombre: "Pantepec, Puebla"
  },
  {
    clave: "21112",
    nombre: "Petlalcingo, Puebla"
  },
  {
    clave: "21113",
    nombre: "Piaxtla, Puebla"
  },
  {
    clave: "21114",
    nombre: "Puebla, Puebla"
  },
  {
    clave: "21115",
    nombre: "Quecholac, Puebla"
  },
  {
    clave: "21116",
    nombre: "Quimixtlan, Puebla"
  },
  {
    clave: "26031",
    nombre: "Huachinera, Sonora"
  },
  {
    clave: "30176",
    nombre: "Tlacojalpan, Veracruz"
  },
  {
    clave: "21117",
    nombre: "Rafael Lara Grajales, Puebla"
  },
  {
    clave: "21125",
    nombre: "San Gregorio Atzompa, Puebla"
  },
  {
    clave: "21131",
    nombre: "San Juan Atzompa, Puebla"
  },
  {
    clave: "21132",
    nombre: "San Martin Texmelucan, Puebla"
  },
  {
    clave: "26048",
    nombre: "Puerto Peñasco, Sonora"
  },
  {
    clave: "26049",
    nombre: "Quiriego, Sonora"
  },
  {
    clave: "29047",
    nombre: "Lazaro Cardenas, Tlaxcala"
  },
  {
    clave: "29048",
    nombre: "La Magdalena Tlaltelulco, Tlaxcala"
  },
  {
    clave: "21118",
    nombre: "Los Reyes de Juarez, Puebla"
  },
  {
    clave: "21124",
    nombre: "San Gabriel Chilac, Puebla"
  },
  {
    clave: "21201",
    nombre: "Xochiltepec, Puebla"
  },
  {
    clave: "21202",
    nombre: "Xochitlan de Vicente Suarez, Puebla"
  },
  {
    clave: "21203",
    nombre: "Xochitlan Todos Santos, Puebla"
  },
  {
    clave: "21204",
    nombre: "Yaonahuac, Puebla"
  },
  {
    clave: "21205",
    nombre: "Yehualtepec, Puebla"
  },
  {
    clave: "21206",
    nombre: "Zacapala, Puebla"
  },
  {
    clave: "21207",
    nombre: "Zacapoaxtla, Puebla"
  },
  {
    clave: "21208",
    nombre: "Zacatlan, Puebla"
  },
  {
    clave: "21209",
    nombre: "Zapotitlan, Puebla"
  },
  {
    clave: "21210",
    nombre: "Zapotitlan de Mendez, Puebla"
  },
  {
    clave: "21211",
    nombre: "Zaragoza, Puebla"
  },
  {
    clave: "21212",
    nombre: "Zautla, Puebla"
  },
  {
    clave: "21213",
    nombre: "Zihuateutla, Puebla"
  },
  {
    clave: "21133",
    nombre: "San Martin Totoltepec, Puebla"
  },
  {
    clave: "21134",
    nombre: "San Matias Tlalancaleca, Puebla"
  },
  {
    clave: "21135",
    nombre: "San Miguel Ixitlan, Puebla"
  },
  {
    clave: "21136",
    nombre: "San Miguel Xoxtla, Puebla"
  },
  {
    clave: "21137",
    nombre: "San Nicolas Buenos Aires, Puebla"
  },
  {
    clave: "21138",
    nombre: "San Nicolas de los Ranchos, Puebla"
  },
  {
    clave: "21139",
    nombre: "San Pablo Anicano, Puebla"
  },
  {
    clave: "21140",
    nombre: "San Pedro Cholula, Puebla"
  },
  {
    clave: "21141",
    nombre: "San Pedro Yeloixtlahuaca, Puebla"
  },
  {
    clave: "21142",
    nombre: "San Salvador el Seco, Puebla"
  },
  {
    clave: "21143",
    nombre: "San Salvador el Verde, Puebla"
  },
  {
    clave: "22001",
    nombre: "Amealco de Bonfil, Queretaro"
  },
  {
    clave: "21144",
    nombre: "San Salvador Huixcolotla, Puebla"
  },
  {
    clave: "22004",
    nombre: "Cadereyta de Montes, Queretaro"
  },
  {
    clave: "22005",
    nombre: "Colon, Queretaro"
  },
  {
    clave: "22006",
    nombre: "Corregidora, Queretaro"
  },
  {
    clave: "22007",
    nombre: "Ezequiel Montes, Queretaro"
  },
  {
    clave: "22008",
    nombre: "Huimilpan, Queretaro"
  },
  {
    clave: "22009",
    nombre: "Jalpan de Serra, Queretaro"
  },
  {
    clave: "22010",
    nombre: "Landa de Matamoros, Queretaro"
  },
  {
    clave: "22011",
    nombre: "El Marques, Queretaro"
  },
  {
    clave: "22012",
    nombre: "Pedro Escobedo, Queretaro"
  },
  {
    clave: "22013",
    nombre: "Peñamiller, Queretaro"
  },
  {
    clave: "22014",
    nombre: "Queretaro, Queretaro"
  },
  {
    clave: "22015",
    nombre: "San Joaquin, Queretaro"
  },
  {
    clave: "22016",
    nombre: "San Juan del Rio, Queretaro"
  },
  {
    clave: "22017",
    nombre: "Tequisquiapan, Queretaro"
  },
  {
    clave: "22018",
    nombre: "Toliman, Queretaro"
  },
  {
    clave: "23001",
    nombre: "Cozumel, Quintana Roo"
  },
  {
    clave: "23002",
    nombre: "Felipe Carrillo Puerto, Quintana Roo"
  },
  {
    clave: "23003",
    nombre: "Isla Mujeres, Quintana Roo"
  },
  {
    clave: "23004",
    nombre: "Othon P. Blanco, Quintana Roo"
  },
  {
    clave: "23005",
    nombre: "Benito Juarez, Quintana Roo"
  },
  {
    clave: "21151",
    nombre: "Santo Tomas Hueyotlipan, Puebla"
  },
  {
    clave: "21152",
    nombre: "Soltepec, Puebla"
  },
  {
    clave: "21153",
    nombre: "Tecali de Herrera, Puebla"
  },
  {
    clave: "21154",
    nombre: "Tecamachalco, Puebla"
  },
  {
    clave: "21155",
    nombre: "Tecomatlan, Puebla"
  },
  {
    clave: "21156",
    nombre: "Tehuacan, Puebla"
  },
  {
    clave: "21157",
    nombre: "Tehuitzingo, Puebla"
  },
  {
    clave: "21158",
    nombre: "Tenampulco, Puebla"
  },
  {
    clave: "21159",
    nombre: "Teopantlan, Puebla"
  },
  {
    clave: "21160",
    nombre: "Teotlalco, Puebla"
  },
  {
    clave: "21161",
    nombre: "Tepanco de Lopez, Puebla"
  },
  {
    clave: "21162",
    nombre: "Tepango de Rodriguez, Puebla"
  },
  {
    clave: "21163",
    nombre: "Tepatlaxco de Hidalgo, Puebla"
  },
  {
    clave: "21164",
    nombre: "Tepeaca, Puebla"
  },
  {
    clave: "21165",
    nombre: "Tepemaxalco, Puebla"
  },
  {
    clave: "21166",
    nombre: "Tepeojuma, Puebla"
  },
  {
    clave: "21167",
    nombre: "Tepetzintla, Puebla"
  },
  {
    clave: "21168",
    nombre: "Tepexco, Puebla"
  },
  {
    clave: "21169",
    nombre: "Tepexi de Rodriguez, Puebla"
  },
  {
    clave: "21170",
    nombre: "Tepeyahualco, Puebla"
  },
  {
    clave: "24023",
    nombre: "Rayon, San Luis Potosi"
  },
  {
    clave: "24024",
    nombre: "Rioverde, San Luis Potosi"
  },
  {
    clave: "24025",
    nombre: "Salinas, San Luis Potosi"
  },
  {
    clave: "24026",
    nombre: "San Antonio, San Luis Potosi"
  },
  {
    clave: "24027",
    nombre: "San Ciro de Acosta, San Luis Potosi"
  },
  {
    clave: "24028",
    nombre: "San Luis Potosi, San Luis Potosi"
  },
  {
    clave: "24029",
    nombre: "San Martin Chalchicuautla, San Luis Potosi"
  },
  {
    clave: "24030",
    nombre: "San Nicolas Tolentino, San Luis Potosi"
  },
  {
    clave: "24031",
    nombre: "Santa Catarina, San Luis Potosi"
  },
  {
    clave: "24032",
    nombre: "Santa Maria del Rio, San Luis Potosi"
  },
  {
    clave: "24033",
    nombre: "Santo Domingo, San Luis Potosi"
  },
  {
    clave: "21171",
    nombre: "Tepeyahualco de Cuauhtemoc, Puebla"
  },
  {
    clave: "21172",
    nombre: "Tetela de Ocampo, Puebla"
  },
  {
    clave: "21173",
    nombre: "Teteles de Avila Castillo, Puebla"
  },
  {
    clave: "21174",
    nombre: "Teziutlan, Puebla"
  },
  {
    clave: "21175",
    nombre: "Tianguismanalco, Puebla"
  },
  {
    clave: "21176",
    nombre: "Tilapa, Puebla"
  },
  {
    clave: "21177",
    nombre: "Tlacotepec de Benito Juarez, Puebla"
  },
  {
    clave: "21178",
    nombre: "Tlacuilotepec, Puebla"
  },
  {
    clave: "21179",
    nombre: "Tlachichuca, Puebla"
  },
  {
    clave: "21180",
    nombre: "Tlahuapan, Puebla"
  },
  {
    clave: "21181",
    nombre: "Tlaltenango, Puebla"
  },
  {
    clave: "24035",
    nombre: "Soledad de Graciano Sanchez, San Luis Potosi"
  },
  {
    clave: "24036",
    nombre: "Tamasopo, San Luis Potosi"
  },
  {
    clave: "24037",
    nombre: "Tamazunchale, San Luis Potosi"
  },
  {
    clave: "24038",
    nombre: "Tampacan, San Luis Potosi"
  },
  {
    clave: "24039",
    nombre: "Tampamolon Corona, San Luis Potosi"
  },
  {
    clave: "24040",
    nombre: "Tamuin, San Luis Potosi"
  },
  {
    clave: "21182",
    nombre: "Tlanepantla, Puebla"
  },
  {
    clave: "21183",
    nombre: "Tlaola, Puebla"
  },
  {
    clave: "21184",
    nombre: "Tlapacoya, Puebla"
  },
  {
    clave: "21185",
    nombre: "Tlapanala, Puebla"
  },
  {
    clave: "21186",
    nombre: "Tlatlauquitepec, Puebla"
  },
  {
    clave: "21187",
    nombre: "Tlaxco, Puebla"
  },
  {
    clave: "21188",
    nombre: "Tochimilco, Puebla"
  },
  {
    clave: "21189",
    nombre: "Tochtepec, Puebla"
  },
  {
    clave: "21190",
    nombre: "Totoltepec de Guerrero, Puebla"
  },
  {
    clave: "21191",
    nombre: "Tulcingo, Puebla"
  },
  {
    clave: "21192",
    nombre: "Tuzamapan de Galeana, Puebla"
  },
  {
    clave: "21193",
    nombre: "Tzicatlacoyan, Puebla"
  },
  {
    clave: "21194",
    nombre: "Venustiano Carranza, Puebla"
  },
  {
    clave: "21195",
    nombre: "Vicente Guerrero, Puebla"
  },
  {
    clave: "21196",
    nombre: "Xayacatlan de Bravo, Puebla"
  },
  {
    clave: "21197",
    nombre: "Xicotepec, Puebla"
  },
  {
    clave: "21198",
    nombre: "Xicotlan, Puebla"
  },
  {
    clave: "21199",
    nombre: "Xiutetelco, Puebla"
  },
  {
    clave: "21214",
    nombre: "Zinacatepec, Puebla"
  },
  {
    clave: "21215",
    nombre: "Zongozotla, Puebla"
  },
  {
    clave: "21216",
    nombre: "Zoquiapan, Puebla"
  },
  {
    clave: "21217",
    nombre: "Zoquitlan, Puebla"
  },
  {
    clave: "23006",
    nombre: "Jose Maria Morelos, Quintana Roo"
  },
  {
    clave: "23010",
    nombre: "Bacalar, Quintana Roo"
  },
  {
    clave: "24001",
    nombre: "Ahualulco, San Luis Potosi"
  },
  {
    clave: "24002",
    nombre: "Alaquines, San Luis Potosi"
  },
  {
    clave: "24003",
    nombre: "Aquismon, San Luis Potosi"
  },
  {
    clave: "24004",
    nombre: "Armadillo de los Infante, San Luis Potosi"
  },
  {
    clave: "24042",
    nombre: "Tanquian de Escobedo, San Luis Potosi"
  },
  {
    clave: "24043",
    nombre: "Tierra Nueva, San Luis Potosi"
  },
  {
    clave: "24005",
    nombre: "Cardenas, San Luis Potosi"
  },
  {
    clave: "24006",
    nombre: "Catorce, San Luis Potosi"
  },
  {
    clave: "24048",
    nombre: "Villa de la Paz, San Luis Potosi"
  },
  {
    clave: "24007",
    nombre: "Cedral, San Luis Potosi"
  },
  {
    clave: "25017",
    nombre: "Sinaloa, Sinaloa"
  },
  {
    clave: "25018",
    nombre: "Navolato, Sinaloa"
  },
  {
    clave: "26001",
    nombre: "Aconchi, Sonora"
  },
  {
    clave: "26002",
    nombre: "Agua Prieta, Sonora"
  },
  {
    clave: "26003",
    nombre: "Alamos, Sonora"
  },
  {
    clave: "26004",
    nombre: "Altar, Sonora"
  },
  {
    clave: "24014",
    nombre: "Coxcatlan, San Luis Potosi"
  },
  {
    clave: "24018",
    nombre: "Huehuetlan, San Luis Potosi"
  },
  {
    clave: "24020",
    nombre: "Matehuala, San Luis Potosi"
  },
  {
    clave: "24021",
    nombre: "Mexquitic de Carmona, San Luis Potosi"
  },
  {
    clave: "24022",
    nombre: "Moctezuma, San Luis Potosi"
  },
  {
    clave: "24044",
    nombre: "Vanegas, San Luis Potosi"
  },
  {
    clave: "24045",
    nombre: "Venado, San Luis Potosi"
  },
  {
    clave: "24049",
    nombre: "Villa de Ramos, San Luis Potosi"
  },
  {
    clave: "24050",
    nombre: "Villa de Reyes, San Luis Potosi"
  },
  {
    clave: "24054",
    nombre: "Xilitla, San Luis Potosi"
  },
  {
    clave: "24055",
    nombre: "Zaragoza, San Luis Potosi"
  },
  {
    clave: "24056",
    nombre: "Villa de Arista, San Luis Potosi"
  },
  {
    clave: "26005",
    nombre: "Arivechi, Sonora"
  },
  {
    clave: "24058",
    nombre: "El Naranjo, San Luis Potosi"
  },
  {
    clave: "25001",
    nombre: "Ahome, Sinaloa"
  },
  {
    clave: "25002",
    nombre: "Angostura, Sinaloa"
  },
  {
    clave: "25003",
    nombre: "Badiraguato, Sinaloa"
  },
  {
    clave: "25004",
    nombre: "Concordia, Sinaloa"
  },
  {
    clave: "25005",
    nombre: "Cosala, Sinaloa"
  },
  {
    clave: "25006",
    nombre: "Culiacan, Sinaloa"
  },
  {
    clave: "25007",
    nombre: "Choix, Sinaloa"
  },
  {
    clave: "25008",
    nombre: "Elota, Sinaloa"
  },
  {
    clave: "25009",
    nombre: "Escuinapa, Sinaloa"
  },
  {
    clave: "25010",
    nombre: "El Fuerte, Sinaloa"
  },
  {
    clave: "25011",
    nombre: "Guasave, Sinaloa"
  },
  {
    clave: "25012",
    nombre: "Mazatlan, Sinaloa"
  },
  {
    clave: "25013",
    nombre: "Mocorito, Sinaloa"
  },
  {
    clave: "25014",
    nombre: "Rosario, Sinaloa"
  },
  {
    clave: "25015",
    nombre: "Salvador Alvarado, Sinaloa"
  },
  {
    clave: "26007",
    nombre: "Atil, Sonora"
  },
  {
    clave: "26010",
    nombre: "Bacerac, Sonora"
  },
  {
    clave: "26009",
    nombre: "Bacanora, Sonora"
  },
  {
    clave: "26019",
    nombre: "Cananea, Sonora"
  },
  {
    clave: "26027",
    nombre: "Fronteras, Sonora"
  },
  {
    clave: "26020",
    nombre: "Carbo, Sonora"
  },
  {
    clave: "26021",
    nombre: "La Colorada, Sonora"
  },
  {
    clave: "26028",
    nombre: "Granados, Sonora"
  },
  {
    clave: "26030",
    nombre: "Hermosillo, Sonora"
  },
  {
    clave: "26032",
    nombre: "Huasabas, Sonora"
  },
  {
    clave: "26034",
    nombre: "Huepac, Sonora"
  },
  {
    clave: "26035",
    nombre: "Imuris, Sonora"
  },
  {
    clave: "26037",
    nombre: "Mazatan, Sonora"
  },
  {
    clave: "26043",
    nombre: "Nogales, Sonora"
  },
  {
    clave: "26044",
    nombre: "Onavas, Sonora"
  },
  {
    clave: "26046",
    nombre: "Oquitoa, Sonora"
  },
  {
    clave: "26047",
    nombre: "Pitiquito, Sonora"
  },
  {
    clave: "26050",
    nombre: "Rayon, Sonora"
  },
  {
    clave: "26053",
    nombre: "San Felipe de Jesus, Sonora"
  },
  {
    clave: "26054",
    nombre: "San Javier, Sonora"
  },
  {
    clave: "26061",
    nombre: "Soyopa, Sonora"
  },
  {
    clave: "26056",
    nombre: "San Miguel de Horcasitas, Sonora"
  },
  {
    clave: "26063",
    nombre: "Tepache, Sonora"
  },
  {
    clave: "26057",
    nombre: "San Pedro de la Cueva, Sonora"
  },
  {
    clave: "26059",
    nombre: "Santa Cruz, Sonora"
  },
  {
    clave: "26060",
    nombre: "Saric, Sonora"
  },
  {
    clave: "28028",
    nombre: "Nuevo Morelos, Tamaulipas"
  },
  {
    clave: "26065",
    nombre: "Tubutama, Sonora"
  },
  {
    clave: "28036",
    nombre: "San Nicolas, Tamaulipas"
  },
  {
    clave: "26066",
    nombre: "Ures, Sonora"
  },
  {
    clave: "26067",
    nombre: "Villa Hidalgo, Sonora"
  },
  {
    clave: "26068",
    nombre: "Villa Pesqueira, Sonora"
  },
  {
    clave: "26070",
    nombre: "General Plutarco Elias Calles, Sonora"
  },
  {
    clave: "27002",
    nombre: "Cardenas, Tabasco"
  },
  {
    clave: "27003",
    nombre: "Centla, Tabasco"
  },
  {
    clave: "27004",
    nombre: "Centro, Tabasco"
  },
  {
    clave: "27005",
    nombre: "Comalcalco, Tabasco"
  },
  {
    clave: "27006",
    nombre: "Cunduacan, Tabasco"
  },
  {
    clave: "27007",
    nombre: "Emiliano Zapata, Tabasco"
  },
  {
    clave: "27008",
    nombre: "Huimanguillo, Tabasco"
  },
  {
    clave: "27009",
    nombre: "Jalapa, Tabasco"
  },
  {
    clave: "27010",
    nombre: "Jalpa de Mendez, Tabasco"
  },
  {
    clave: "27011",
    nombre: "Jonuta, Tabasco"
  },
  {
    clave: "27012",
    nombre: "Macuspana, Tabasco"
  },
  {
    clave: "27013",
    nombre: "Nacajuca, Tabasco"
  },
  {
    clave: "27014",
    nombre: "Paraiso, Tabasco"
  },
  {
    clave: "27015",
    nombre: "Tacotalpa, Tabasco"
  },
  {
    clave: "27016",
    nombre: "Teapa, Tabasco"
  },
  {
    clave: "27017",
    nombre: "Tenosique, Tabasco"
  },
  {
    clave: "28001",
    nombre: "Abasolo, Tamaulipas"
  },
  {
    clave: "28002",
    nombre: "Aldama, Tamaulipas"
  },
  {
    clave: "28003",
    nombre: "Altamira, Tamaulipas"
  },
  {
    clave: "28004",
    nombre: "Antiguo Morelos, Tamaulipas"
  },
  {
    clave: "28006",
    nombre: "Bustamante, Tamaulipas"
  },
  {
    clave: "28009",
    nombre: "Ciudad Madero, Tamaulipas"
  },
  {
    clave: "28017",
    nombre: "Jaumave, Tamaulipas"
  },
  {
    clave: "29054",
    nombre: "San Lorenzo Axocomanitla, Tlaxcala"
  },
  {
    clave: "28018",
    nombre: "Jimenez, Tamaulipas"
  },
  {
    clave: "28019",
    nombre: "Llera, Tamaulipas"
  },
  {
    clave: "28020",
    nombre: "Mainero, Tamaulipas"
  },
  {
    clave: "28021",
    nombre: "El Mante, Tamaulipas"
  },
  {
    clave: "28022",
    nombre: "Matamoros, Tamaulipas"
  },
  {
    clave: "28023",
    nombre: "Mendez, Tamaulipas"
  },
  {
    clave: "28024",
    nombre: "Mier, Tamaulipas"
  },
  {
    clave: "28025",
    nombre: "Miguel Aleman, Tamaulipas"
  },
  {
    clave: "28026",
    nombre: "Miquihuana, Tamaulipas"
  },
  {
    clave: "28027",
    nombre: "Nuevo Laredo, Tamaulipas"
  },
  {
    clave: "30079",
    nombre: "Ixhuacan de los Reyes, Veracruz"
  },
  {
    clave: "30080",
    nombre: "Ixhuatlan del Cafe, Veracruz"
  },
  {
    clave: "30081",
    nombre: "Ixhuatlancillo, Veracruz"
  },
  {
    clave: "28029",
    nombre: "Ocampo, Tamaulipas"
  },
  {
    clave: "28030",
    nombre: "Padilla, Tamaulipas"
  },
  {
    clave: "28031",
    nombre: "Palmillas, Tamaulipas"
  },
  {
    clave: "28032",
    nombre: "Reynosa, Tamaulipas"
  },
  {
    clave: "28033",
    nombre: "Rio Bravo, Tamaulipas"
  },
  {
    clave: "28034",
    nombre: "San Carlos, Tamaulipas"
  },
  {
    clave: "28035",
    nombre: "San Fernando, Tamaulipas"
  },
  {
    clave: "30082",
    nombre: "Ixhuatlan del Sureste, Veracruz"
  },
  {
    clave: "30083",
    nombre: "Ixhuatlan de Madero, Veracruz"
  },
  {
    clave: "30084",
    nombre: "Ixmatlahuacan, Veracruz"
  },
  {
    clave: "30085",
    nombre: "Ixtaczoquitlan, Veracruz"
  },
  {
    clave: "30086",
    nombre: "Jalacingo, Veracruz"
  },
  {
    clave: "30087",
    nombre: "Xalapa, Veracruz"
  },
  {
    clave: "30088",
    nombre: "Jalcomulco, Veracruz"
  },
  {
    clave: "30089",
    nombre: "Jaltipan, Veracruz"
  },
  {
    clave: "30090",
    nombre: "Jamapa, Veracruz"
  },
  {
    clave: "30091",
    nombre: "Jesus Carranza, Veracruz"
  },
  {
    clave: "28040",
    nombre: "Valle Hermoso, Tamaulipas"
  },
  {
    clave: "28041",
    nombre: "Victoria, Tamaulipas"
  },
  {
    clave: "28042",
    nombre: "Villagran, Tamaulipas"
  },
  {
    clave: "28043",
    nombre: "Xicotencatl, Tamaulipas"
  },
  {
    clave: "29001",
    nombre: "Amaxac de Guerrero, Tlaxcala"
  },
  {
    clave: "29002",
    nombre: "Apetatitlan de Antonio Carvajal, Tlaxcala"
  },
  {
    clave: "29003",
    nombre: "Atlangatepec, Tlaxcala"
  },
  {
    clave: "29004",
    nombre: "Altzayanca, Tlaxcala"
  },
  {
    clave: "29005",
    nombre: "Apizaco, Tlaxcala"
  },
  {
    clave: "29006",
    nombre: "Calpulalpan, Tlaxcala"
  },
  {
    clave: "29007",
    nombre: "El Carmen Tequexquitla, Tlaxcala"
  },
  {
    clave: "29008",
    nombre: "Cuapiaxtla, Tlaxcala"
  },
  {
    clave: "29009",
    nombre: "Cuaxomulco, Tlaxcala"
  },
  {
    clave: "29010",
    nombre: "Chiautempan, Tlaxcala"
  },
  {
    clave: "29011",
    nombre: "Muñoz de Domingo Arenas, Tlaxcala"
  },
  {
    clave: "29012",
    nombre: "Españita, Tlaxcala"
  },
  {
    clave: "29013",
    nombre: "Huamantla, Tlaxcala"
  },
  {
    clave: "29014",
    nombre: "Hueyotlipan, Tlaxcala"
  },
  {
    clave: "29019",
    nombre: "Tepetitla de Lardizabal, Tlaxcala"
  },
  {
    clave: "29027",
    nombre: "Tenancingo, Tlaxcala"
  },
  {
    clave: "29034",
    nombre: "Tlaxco, Tlaxcala"
  },
  {
    clave: "30115",
    nombre: "Nogales, Veracruz"
  },
  {
    clave: "29035",
    nombre: "Tocatlan, Tlaxcala"
  },
  {
    clave: "29036",
    nombre: "Totolac, Tlaxcala"
  },
  {
    clave: "29037",
    nombre: "Ziltlaltepec de Trinidad Sanchez Santos, Tlaxcala"
  },
  {
    clave: "29038",
    nombre: "Tzompantepec, Tlaxcala"
  },
  {
    clave: "29039",
    nombre: "Xaloztoc, Tlaxcala"
  },
  {
    clave: "29040",
    nombre: "Xaltocan, Tlaxcala"
  },
  {
    clave: "29041",
    nombre: "Papalotla de Xicohtencatl, Tlaxcala"
  },
  {
    clave: "30166",
    nombre: "Tepetlan, Veracruz"
  },
  {
    clave: "30167",
    nombre: "Tepetzintla, Veracruz"
  },
  {
    clave: "30168",
    nombre: "Tequila, Veracruz"
  },
  {
    clave: "30169",
    nombre: "Jose Azueta, Veracruz"
  },
  {
    clave: "30170",
    nombre: "Texcatepec, Veracruz"
  },
  {
    clave: "30171",
    nombre: "Texhuacan, Veracruz"
  },
  {
    clave: "30172",
    nombre: "Texistepec, Veracruz"
  },
  {
    clave: "30173",
    nombre: "Tezonapa, Veracruz"
  },
  {
    clave: "30174",
    nombre: "Tierra Blanca, Veracruz"
  },
  {
    clave: "30175",
    nombre: "Tihuatlan, Veracruz"
  },
  {
    clave: "29042",
    nombre: "Xicohtzinco, Tlaxcala"
  },
  {
    clave: "29045",
    nombre: "Benito Juarez, Tlaxcala"
  },
  {
    clave: "31020",
    nombre: "Chicxulub Pueblo, Yucatan"
  },
  {
    clave: "31021",
    nombre: "Chichimila, Yucatan"
  },
  {
    clave: "29057",
    nombre: "Santa Apolonia Teacalco, Tlaxcala"
  },
  {
    clave: "29049",
    nombre: "San Damian Texoloc, Tlaxcala"
  },
  {
    clave: "29051",
    nombre: "San Jeronimo Zacualpan, Tlaxcala"
  },
  {
    clave: "29053",
    nombre: "San Juan Huactzinco, Tlaxcala"
  },
  {
    clave: "29056",
    nombre: "Santa Ana Nopalucan, Tlaxcala"
  },
  {
    clave: "31024",
    nombre: "Chumayel, Yucatan"
  },
  {
    clave: "30041",
    nombre: "Coetzala, Veracruz"
  },
  {
    clave: "30057",
    nombre: "Chiconquiaco, Veracruz"
  },
  {
    clave: "30058",
    nombre: "Chicontepec, Veracruz"
  },
  {
    clave: "29058",
    nombre: "Santa Catarina Ayometla, Tlaxcala"
  },
  {
    clave: "29059",
    nombre: "Santa Cruz Quilehtla, Tlaxcala"
  },
  {
    clave: "30059",
    nombre: "Chinameca, Veracruz"
  },
  {
    clave: "30060",
    nombre: "Chinampa de Gorostiza, Veracruz"
  },
  {
    clave: "29060",
    nombre: "Santa Isabel Xiloxoxtla, Tlaxcala"
  },
  {
    clave: "30061",
    nombre: "Las Choapas, Veracruz"
  },
  {
    clave: "30062",
    nombre: "Chocaman, Veracruz"
  },
  {
    clave: "30063",
    nombre: "Chontla, Veracruz"
  },
  {
    clave: "30002",
    nombre: "Acatlan, Veracruz"
  },
  {
    clave: "30003",
    nombre: "Acayucan, Veracruz"
  },
  {
    clave: "30004",
    nombre: "Actopan, Veracruz"
  },
  {
    clave: "30005",
    nombre: "Acula, Veracruz"
  },
  {
    clave: "30006",
    nombre: "Acultzingo, Veracruz"
  },
  {
    clave: "30007",
    nombre: "Camaron de Tejeda, Veracruz"
  },
  {
    clave: "30008",
    nombre: "Alpatlahuac, Veracruz"
  },
  {
    clave: "30009",
    nombre: "Alto Lucero de Gutierrez Barrios, Veracruz"
  },
  {
    clave: "30010",
    nombre: "Altotonga, Veracruz"
  },
  {
    clave: "30011",
    nombre: "Alvarado, Veracruz"
  },
  {
    clave: "30018",
    nombre: "Aquila, Veracruz"
  },
  {
    clave: "30027",
    nombre: "Benito Juarez, Veracruz"
  },
  {
    clave: "30028",
    nombre: "Boca del Rio, Veracruz"
  },
  {
    clave: "30029",
    nombre: "Calcahualco, Veracruz"
  },
  {
    clave: "30030",
    nombre: "Camerino Z. Mendoza, Veracruz"
  },
  {
    clave: "30031",
    nombre: "Carrillo Puerto, Veracruz"
  },
  {
    clave: "30032",
    nombre: "Catemaco, Veracruz"
  },
  {
    clave: "30033",
    nombre: "Cazones de Herrera, Veracruz"
  },
  {
    clave: "30034",
    nombre: "Cerro Azul, Veracruz"
  },
  {
    clave: "30035",
    nombre: "Citlaltepetl, Veracruz"
  },
  {
    clave: "30036",
    nombre: "Coacoatzintla, Veracruz"
  },
  {
    clave: "30037",
    nombre: "Coahuitlan, Veracruz"
  },
  {
    clave: "30038",
    nombre: "Coatepec, Veracruz"
  },
  {
    clave: "30039",
    nombre: "Coatzacoalcos, Veracruz"
  },
  {
    clave: "30040",
    nombre: "Coatzintla, Veracruz"
  },
  {
    clave: "30165",
    nombre: "Tepatlaxco, Veracruz"
  },
  {
    clave: "30064",
    nombre: "Chumatlan, Veracruz"
  },
  {
    clave: "32036",
    nombre: "Ojocaliente, Zacatecas"
  },
  {
    clave: "30074",
    nombre: "Huiloapan de Cuauhtemoc, Veracruz"
  },
  {
    clave: "30075",
    nombre: "Ignacio de la Llave, Veracruz"
  },
  {
    clave: "30076",
    nombre: "Ilamatlan, Veracruz"
  },
  {
    clave: "30077",
    nombre: "Isla, Veracruz"
  },
  {
    clave: "30078",
    nombre: "Ixcatepec, Veracruz"
  },
  {
    clave: "30096",
    nombre: "Landero y Coss, Veracruz"
  },
  {
    clave: "30098",
    nombre: "Magdalena, Veracruz"
  },
  {
    clave: "30107",
    nombre: "Las Minas, Veracruz"
  },
  {
    clave: "30108",
    nombre: "Minatitlan, Veracruz"
  },
  {
    clave: "30109",
    nombre: "Misantla, Veracruz"
  },
  {
    clave: "30110",
    nombre: "Mixtla de Altamirano, Veracruz"
  },
  {
    clave: "30111",
    nombre: "Moloacan, Veracruz"
  },
  {
    clave: "30112",
    nombre: "Naolinco, Veracruz"
  },
  {
    clave: "30113",
    nombre: "Naranjal, Veracruz"
  },
  {
    clave: "30114",
    nombre: "Nautla, Veracruz"
  },
  {
    clave: "30116",
    nombre: "Oluta, Veracruz"
  },
  {
    clave: "30118",
    nombre: "Orizaba, Veracruz"
  },
  {
    clave: "30119",
    nombre: "Otatitlan, Veracruz"
  },
  {
    clave: "30120",
    nombre: "Oteapan, Veracruz"
  },
  {
    clave: "30125",
    nombre: "Paso del Macho, Veracruz"
  },
  {
    clave: "30126",
    nombre: "Paso de Ovejas, Veracruz"
  },
  {
    clave: "30127",
    nombre: "La Perla, Veracruz"
  },
  {
    clave: "30128",
    nombre: "Perote, Veracruz"
  },
  {
    clave: "30129",
    nombre: "Platon Sanchez, Veracruz"
  },
  {
    clave: "30130",
    nombre: "Playa Vicente, Veracruz"
  },
  {
    clave: "30131",
    nombre: "Poza Rica de Hidalgo, Veracruz"
  },
  {
    clave: "30133",
    nombre: "Pueblo Viejo, Veracruz"
  },
  {
    clave: "30134",
    nombre: "Puente Nacional, Veracruz"
  },
  {
    clave: "30135",
    nombre: "Rafael Delgado, Veracruz"
  },
  {
    clave: "30136",
    nombre: "Rafael Lucio, Veracruz"
  },
  {
    clave: "30138",
    nombre: "Rio Blanco, Veracruz"
  },
  {
    clave: "30140",
    nombre: "San Andres Tenejapan, Veracruz"
  },
  {
    clave: "30141",
    nombre: "San Andres Tuxtla, Veracruz"
  },
  {
    clave: "30142",
    nombre: "San Juan Evangelista, Veracruz"
  },
  {
    clave: "30143",
    nombre: "Santiago Tuxtla, Veracruz"
  },
  {
    clave: "30144",
    nombre: "Sayula de Aleman, Veracruz"
  },
  {
    clave: "30145",
    nombre: "Soconusco, Veracruz"
  },
  {
    clave: "30146",
    nombre: "Sochiapa, Veracruz"
  },
  {
    clave: "30147",
    nombre: "Soledad Atzompa, Veracruz"
  },
  {
    clave: "30148",
    nombre: "Soledad de Doblado, Veracruz"
  },
  {
    clave: "30149",
    nombre: "Soteapan, Veracruz"
  },
  {
    clave: "30150",
    nombre: "Tamalin, Veracruz"
  },
  {
    clave: "30151",
    nombre: "Tamiahua, Veracruz"
  },
  {
    clave: "30152",
    nombre: "Tampico Alto, Veracruz"
  },
  {
    clave: "30153",
    nombre: "Tancoco, Veracruz"
  },
  {
    clave: "30154",
    nombre: "Tantima, Veracruz"
  },
  {
    clave: "30155",
    nombre: "Tantoyuca, Veracruz"
  },
  {
    clave: "30156",
    nombre: "Tatatila, Veracruz"
  },
  {
    clave: "30157",
    nombre: "Castillo de Teayo, Veracruz"
  },
  {
    clave: "30158",
    nombre: "Tecolutla, Veracruz"
  },
  {
    clave: "30159",
    nombre: "Tehuipango, Veracruz"
  },
  {
    clave: "30160",
    nombre: "Alamo Temapache, Veracruz"
  },
  {
    clave: "30161",
    nombre: "Tempoal, Veracruz"
  },
  {
    clave: "30162",
    nombre: "Tenampa, Veracruz"
  },
  {
    clave: "30163",
    nombre: "Tenochtitlan, Veracruz"
  },
  {
    clave: "30164",
    nombre: "Teocelo, Veracruz"
  },
  {
    clave: "30185",
    nombre: "Tlilapan, Veracruz"
  },
  {
    clave: "30190",
    nombre: "Tuxtilla, Veracruz"
  },
  {
    clave: "30192",
    nombre: "Vega de Alatorre, Veracruz"
  },
  {
    clave: "30193",
    nombre: "Veracruz, Veracruz"
  },
  {
    clave: "30194",
    nombre: "Villa Aldama, Veracruz"
  },
  {
    clave: "30196",
    nombre: "Yanga, Veracruz"
  },
  {
    clave: "30197",
    nombre: "Yecuatla, Veracruz"
  },
  {
    clave: "30198",
    nombre: "Zacualpan, Veracruz"
  },
  {
    clave: "30199",
    nombre: "Zaragoza, Veracruz"
  },
  {
    clave: "30206",
    nombre: "Nanchital de Lazaro Cardenas del Rio, Veracruz"
  },
  {
    clave: "31001",
    nombre: "Abala, Yucatan"
  },
  {
    clave: "31002",
    nombre: "Acanceh, Yucatan"
  },
  {
    clave: "31003",
    nombre: "Akil, Yucatan"
  },
  {
    clave: "31004",
    nombre: "Baca, Yucatan"
  },
  {
    clave: "31005",
    nombre: "Bokoba, Yucatan"
  },
  {
    clave: "31049",
    nombre: "Mayapan, Yucatan"
  },
  {
    clave: "31007",
    nombre: "Cacalchen, Yucatan"
  },
  {
    clave: "31009",
    nombre: "Cansahcab, Yucatan"
  },
  {
    clave: "31055",
    nombre: "Opichen, Yucatan"
  },
  {
    clave: "31056",
    nombre: "Oxkutzcab, Yucatan"
  },
  {
    clave: "31057",
    nombre: "Panaba, Yucatan"
  },
  {
    clave: "31010",
    nombre: "Cantamayec, Yucatan"
  },
  {
    clave: "31012",
    nombre: "Cenotillo, Yucatan"
  },
  {
    clave: "31013",
    nombre: "Conkal, Yucatan"
  },
  {
    clave: "31014",
    nombre: "Cuncunul, Yucatan"
  },
  {
    clave: "31015",
    nombre: "Cuzama, Yucatan"
  },
  {
    clave: "31016",
    nombre: "Chacsinkin, Yucatan"
  },
  {
    clave: "31018",
    nombre: "Chapab, Yucatan"
  },
  {
    clave: "31022",
    nombre: "Chikindzonot, Yucatan"
  },
  {
    clave: "31064",
    nombre: "Sanahcat, Yucatan"
  },
  {
    clave: "31023",
    nombre: "Chochola, Yucatan"
  },
  {
    clave: "31025",
    nombre: "Dzan, Yucatan"
  },
  {
    clave: "31026",
    nombre: "Dzemul, Yucatan"
  },
  {
    clave: "31027",
    nombre: "Dzidzantun, Yucatan"
  },
  {
    clave: "31031",
    nombre: "Dzoncauich, Yucatan"
  },
  {
    clave: "31033",
    nombre: "Halacho, Yucatan"
  },
  {
    clave: "31034",
    nombre: "Hocaba, Yucatan"
  },
  {
    clave: "31035",
    nombre: "Hoctun, Yucatan"
  },
  {
    clave: "31037",
    nombre: "Huhi, Yucatan"
  },
  {
    clave: "31038",
    nombre: "Hunucma, Yucatan"
  },
  {
    clave: "31039",
    nombre: "Ixil, Yucatan"
  },
  {
    clave: "31041",
    nombre: "Kanasin, Yucatan"
  },
  {
    clave: "31042",
    nombre: "Kantunil, Yucatan"
  },
  {
    clave: "31072",
    nombre: "Suma, Yucatan"
  },
  {
    clave: "31043",
    nombre: "Kaua, Yucatan"
  },
  {
    clave: "31044",
    nombre: "Kinchil, Yucatan"
  },
  {
    clave: "31045",
    nombre: "Kopoma, Yucatan"
  },
  {
    clave: "31046",
    nombre: "Mama, Yucatan"
  },
  {
    clave: "31048",
    nombre: "Maxcanu, Yucatan"
  },
  {
    clave: "31073",
    nombre: "Tahdziu, Yucatan"
  },
  {
    clave: "31051",
    nombre: "Mococha, Yucatan"
  },
  {
    clave: "31053",
    nombre: "Muna, Yucatan"
  },
  {
    clave: "31100",
    nombre: "Ucu, Yucatan"
  },
  {
    clave: "31054",
    nombre: "Muxupip, Yucatan"
  },
  {
    clave: "32017",
    nombre: "Guadalupe, Zacatecas"
  },
  {
    clave: "32018",
    nombre: "Huanusco, Zacatecas"
  },
  {
    clave: "32019",
    nombre: "Jalpa, Zacatecas"
  },
  {
    clave: "32020",
    nombre: "Jerez, Zacatecas"
  },
  {
    clave: "32021",
    nombre: "Jimenez del Teul, Zacatecas"
  },
  {
    clave: "32022",
    nombre: "Juan Aldama, Zacatecas"
  },
  {
    clave: "32023",
    nombre: "Juchipila, Zacatecas"
  },
  {
    clave: "32024",
    nombre: "Loreto, Zacatecas"
  },
  {
    clave: "32025",
    nombre: "Luis Moya, Zacatecas"
  },
  {
    clave: "32026",
    nombre: "Mazapil, Zacatecas"
  },
  {
    clave: "32027",
    nombre: "Melchor Ocampo, Zacatecas"
  },
  {
    clave: "32028",
    nombre: "Mezquital del Oro, Zacatecas"
  },
  {
    clave: "32029",
    nombre: "Miguel Auza, Zacatecas"
  },
  {
    clave: "32030",
    nombre: "Momax, Zacatecas"
  },
  {
    clave: "32031",
    nombre: "Monte Escobedo, Zacatecas"
  },
  {
    clave: "32032",
    nombre: "Morelos, Zacatecas"
  },
  {
    clave: "32033",
    nombre: "Moyahua de Estrada, Zacatecas"
  },
  {
    clave: "32034",
    nombre: "Nochistlan de Mejia, Zacatecas"
  },
  {
    clave: "32035",
    nombre: "Noria de Angeles, Zacatecas"
  },
  {
    clave: "31060",
    nombre: "Quintana Roo, Yucatan"
  },
  {
    clave: "31062",
    nombre: "Sacalum, Yucatan"
  },
  {
    clave: "31063",
    nombre: "Samahil, Yucatan"
  },
  {
    clave: "32057",
    nombre: "Trancoso, Zacatecas"
  },
  {
    clave: "31068",
    nombre: "Sinanche, Yucatan"
  },
  {
    clave: "31070",
    nombre: "Sucila, Yucatan"
  },
  {
    clave: "31074",
    nombre: "Tahmek, Yucatan"
  },
  {
    clave: "31075",
    nombre: "Teabo, Yucatan"
  },
  {
    clave: "31076",
    nombre: "Tecoh, Yucatan"
  },
  {
    clave: "31077",
    nombre: "Tekal de Venegas, Yucatan"
  },
  {
    clave: "31078",
    nombre: "Tekanto, Yucatan"
  },
  {
    clave: "31080",
    nombre: "Tekit, Yucatan"
  },
  {
    clave: "31082",
    nombre: "Telchac Pueblo, Yucatan"
  },
  {
    clave: "31083",
    nombre: "Telchac Puerto, Yucatan"
  },
  {
    clave: "31086",
    nombre: "Tepakan, Yucatan"
  },
  {
    clave: "31087",
    nombre: "Tetiz, Yucatan"
  },
  {
    clave: "31088",
    nombre: "Teya, Yucatan"
  },
  {
    clave: "31090",
    nombre: "Timucuy, Yucatan"
  },
  {
    clave: "31094",
    nombre: "Tixmehuac, Yucatan"
  },
  {
    clave: "31095",
    nombre: "Tixpehual, Yucatan"
  },
  {
    clave: "31097",
    nombre: "Tunkas, Yucatan"
  },
  {
    clave: "31103",
    nombre: "Xocchel, Yucatan"
  },
  {
    clave: "31105",
    nombre: "Yaxkukul, Yucatan"
  },
  {
    clave: "31106",
    nombre: "Yobain, Yucatan"
  },
  {
    clave: "32003",
    nombre: "Atolinga, Zacatecas"
  },
  {
    clave: "32004",
    nombre: "Benito Juarez, Zacatecas"
  },
  {
    clave: "32005",
    nombre: "Calera, Zacatecas"
  },
  {
    clave: "32006",
    nombre: "Cañitas de Felipe Pescador, Zacatecas"
  },
  {
    clave: "32007",
    nombre: "Concepcion del Oro, Zacatecas"
  },
  {
    clave: "32008",
    nombre: "Cuauhtemoc, Zacatecas"
  },
  {
    clave: "32009",
    nombre: "Chalchihuites, Zacatecas"
  },
  {
    clave: "32010",
    nombre: "Fresnillo, Zacatecas"
  },
  {
    clave: "32011",
    nombre: "Trinidad Garcia de la Cadena, Zacatecas"
  },
  {
    clave: "32012",
    nombre: "Genaro Codina, Zacatecas"
  },
  {
    clave: "32013",
    nombre: "General Enrique Estrada, Zacatecas"
  },
  {
    clave: "32014",
    nombre: "General Francisco R. Murguia, Zacatecas"
  },
  {
    clave: "32015",
    nombre: "El Plateado de Joaquin Amaro, Zacatecas"
  },
  {
    clave: "32016",
    nombre: "General Panfilo Natera, Zacatecas"
  },
  {
    clave: "32041",
    nombre: "El Salvador, Zacatecas"
  },
  {
    clave: "32052",
    nombre: "Villa Garcia, Zacatecas"
  },
  {
    clave: "32053",
    nombre: "Villa Gonzalez Ortega, Zacatecas"
  },
  {
    clave: "32054",
    nombre: "Villa Hidalgo, Zacatecas"
  },
  {
    clave: "32055",
    nombre: "Villanueva, Zacatecas"
  },
  {
    clave: "32056",
    nombre: "Zacatecas, Zacatecas"
  },
  {
    clave: "32058",
    nombre: "Santa Maria de la Paz, Zacatecas"
  }
];
const municipios = municipiosData.filter(municipio =>
  municipio.nombre.includes("Yucatan")
);
Apify.main(async () => {
  const res = {};
  res.State = {};

  const confirmados = [];
  const confirmadosxMunicipio = [];

  const kvStore = await Apify.openKeyValueStore("COVID-19-MEXICO");
  const dataset = await Apify.openDataset("COVID-19-MEXICO-HISTORY");

  // Find total
  const infectedOptions = {
    method: "POST",
    uri: "https://coronavirus.gob.mx/datos/Overview/info/getInfo.php",
    form: {
      cve: "31",
      nom: "Yucatan",
      sPatType: "Confirmados"
    }
  };

  const parsedBody = await rp(infectedOptions);
  const stripped = parsedBody.replace("<script>", "").replace("</script>", "");
  const statements = stripped.split(";");

  for (let i = 1; i < statements.length; i++) {
    const st = statements[i];

    const TotalMun = /TotalMun/;

    const ATotalMun = TotalMun.exec(st);

    if (ATotalMun != null) {
      confirmados.push(ATotalMun);
    }
  }
  confirmados.shift();
  confirmados.pop();
  confirmados.forEach(municipio => {
    confirmadosxMunicipio.push({
      clave: municipio["input"]
        .toString()
        .trim()
        .slice(10, 16)
        .replace("'", ""),
      cantidad: municipio["input"]
        .toString()
        .trim()
        .slice(18, municipio["input"].toString().length)
    });
  });

  const estadisticas = [];

  municipios.forEach(municipio => {
    let confirm = confirmadosxMunicipio.find(
      elemento => elemento.clave === municipio.clave
    );
    if (!confirm) confirm = 0;
    estadisticas.push({
      clave: municipio.clave,
      nombre: municipio.nombre.slice(0, municipio.nombre.length - 9),
      confirmados: confirm ? confirm.cantidad : confirm
    });
  });

  // try to discover updated date

  // validate result
  res.State = estadisticas;
  await Apify.setValue("LATEST", res);
  await kvStore.setValue("LATEST", res);
  await dataset.pushData(res);
  console.log(res);
});

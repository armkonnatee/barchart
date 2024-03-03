import { Injectable } from '@nestjs/common';
import { CreateChartDto } from './dto/create-chart.dto';
import { UpdateChartDto } from './dto/update-chart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chart } from './entities/chart.entity';
import { Repository } from 'typeorm';
import e from 'express';

@Injectable()
export class ChartService {
  constructor(
    @InjectRepository(Chart)
    private repository: Repository<Chart>,
  ) {}

  // create(createChartDto: CreateChartDto) {
  //   return 'This action adds a new chart';
  // }

  async findAll() {
    let data = [
      {
          "Afghanistan": []
      },
      {
          "Africa (UN)": []
      },
      {
          "Albania": []
      },
      {
          "Algeria": []
      },
      {
          "American Samoa": []
      },
      {
          "Andorra": []
      },
      {
          "Angola": []
      },
      {
          "Anguilla": []
      },
      {
          "Antigua and Barbuda": "Antigua and Barbuda"
      },
      {
          "Argentina": "Argentina"
      },
      {
          "Armenia": "Armenia"
      },
      {
          "Aruba": "Aruba"
      },
      {
          "Asia (UN)": "Asia (UN)"
      },
      {
          "Australia": "Australia"
      },
      {
          "Austria": "Austria"
      },
      {
          "Azerbaijan": "Azerbaijan"
      },
      {
          "Bahamas": "Bahamas"
      },
      {
          "Bahrain": "Bahrain"
      },
      {
          "Bangladesh": "Bangladesh"
      },
      {
          "Barbados": "Barbados"
      },
      {
          "Belarus": "Belarus"
      },
      {
          "Belgium": "Belgium"
      },
      {
          "Belize": "Belize"
      },
      {
          "Benin": "Benin"
      },
      {
          "Bermuda": "Bermuda"
      },
      {
          "Bhutan": "Bhutan"
      },
      {
          "Bolivia": "Bolivia"
      },
      {
          "Bonaire Sint Eustatius and Saba": "Bonaire Sint Eustatius and Saba"
      },
      {
          "Bosnia and Herzegovina": "Bosnia and Herzegovina"
      },
      {
          "Botswana": "Botswana"
      },
      {
          "Brazil": "Brazil"
      },
      {
          "British Virgin Islands": "British Virgin Islands"
      },
      {
          "Brunei": "Brunei"
      },
      {
          "Bulgaria": "Bulgaria"
      },
      {
          "Burkina Faso": "Burkina Faso"
      },
      {
          "Burundi": "Burundi"
      },
      {
          "Cambodia": "Cambodia"
      },
      {
          "Cameroon": "Cameroon"
      },
      {
          "Canada": "Canada"
      },
      {
          "Cape Verde": "Cape Verde"
      },
      {
          "Cayman Islands": "Cayman Islands"
      },
      {
          "Central African Republic": "Central African Republic"
      },
      {
          "Chad": "Chad"
      },
      {
          "Chile": "Chile"
      },
      {
          "China": "China"
      },
      {
          "Colombia": "Colombia"
      },
      {
          "Comoros": "Comoros"
      },
      {
          "Congo": "Congo"
      },
      {
          "Cook Islands": "Cook Islands"
      },
      {
          "Costa Rica": "Costa Rica"
      },
      {
          "Cote d'Ivoire": "Cote d'Ivoire"
      },
      {
          "Croatia": "Croatia"
      },
      {
          "Cuba": "Cuba"
      },
      {
          "Curacao": "Curacao"
      },
      {
          "Cyprus": "Cyprus"
      },
      {
          "Czechia": "Czechia"
      },
      {
          "Democratic Republic of Congo": "Democratic Republic of Congo"
      },
      {
          "Denmark": "Denmark"
      },
      {
          "Djibouti": "Djibouti"
      },
      {
          "Dominica": "Dominica"
      },
      {
          "Dominican Republic": "Dominican Republic"
      },
      {
          "East Timor": "East Timor"
      },
      {
          "Ecuador": "Ecuador"
      },
      {
          "Egypt": "Egypt"
      },
      {
          "El Salvador": "El Salvador"
      },
      {
          "Equatorial Guinea": "Equatorial Guinea"
      },
      {
          "Eritrea": "Eritrea"
      },
      {
          "Estonia": "Estonia"
      },
      {
          "Eswatini": "Eswatini"
      },
      {
          "Ethiopia": "Ethiopia"
      },
      {
          "Europe (UN)": "Europe (UN)"
      },
      {
          "Falkland Islands": "Falkland Islands"
      },
      {
          "Faroe Islands": "Faroe Islands"
      },
      {
          "Fiji": "Fiji"
      },
      {
          "Finland": "Finland"
      },
      {
          "France": "France"
      },
      {
          "French Guiana": "French Guiana"
      },
      {
          "French Polynesia": "French Polynesia"
      },
      {
          "Gabon": "Gabon"
      },
      {
          "Gambia": "Gambia"
      },
      {
          "Georgia": "Georgia"
      },
      {
          "Germany": "Germany"
      },
      {
          "Ghana": "Ghana"
      },
      {
          "Gibraltar": "Gibraltar"
      },
      {
          "Greece": "Greece"
      },
      {
          "Greenland": "Greenland"
      },
      {
          "Grenada": "Grenada"
      },
      {
          "Guadeloupe": "Guadeloupe"
      },
      {
          "Guam": "Guam"
      },
      {
          "Guatemala": "Guatemala"
      },
      {
          "Guernsey": "Guernsey"
      },
      {
          "Guinea": "Guinea"
      },
      {
          "Guinea-Bissau": "Guinea-Bissau"
      },
      {
          "Guyana": "Guyana"
      },
      {
          "Haiti": "Haiti"
      },
      {
          "High-income countries": "High-income countries"
      },
      {
          "Honduras": "Honduras"
      },
      {
          "Hong Kong": "Hong Kong"
      },
      {
          "Hungary": "Hungary"
      },
      {
          "Iceland": "Iceland"
      },
      {
          "India": "India"
      },
      {
          "Indonesia": "Indonesia"
      },
      {
          "Iran": "Iran"
      },
      {
          "Iraq": "Iraq"
      },
      {
          "Ireland": "Ireland"
      },
      {
          "Isle of Man": "Isle of Man"
      },
      {
          "Israel": "Israel"
      },
      {
          "Italy": "Italy"
      },
      {
          "Jamaica": "Jamaica"
      },
      {
          "Japan": "Japan"
      },
      {
          "Jersey": "Jersey"
      },
      {
          "Jordan": "Jordan"
      },
      {
          "Kazakhstan": "Kazakhstan"
      },
      {
          "Kenya": "Kenya"
      },
      {
          "Kiribati": "Kiribati"
      },
      {
          "Kosovo": "Kosovo"
      },
      {
          "Kuwait": "Kuwait"
      },
      {
          "Kyrgyzstan": "Kyrgyzstan"
      },
      {
          "Land-locked developing countries (LLDC)": "Land-locked developing countries (LLDC)"
      },
      {
          "Laos": "Laos"
      },
      {
          "Latin America and the Caribbean (UN)": "Latin America and the Caribbean (UN)"
      },
      {
          "Latvia": "Latvia"
      },
      {
          "countryName": "Least developed countries"
      },
      {
          "countryName": "Lebanon"
      },
      {
          "countryName": "Lesotho"
      },
      {
          "countryName": "Less developed regions"
      },
      {
          "countryName": "Less developed regions, excluding China"
      },
      {
          "countryName": "Less developed regions, excluding least developed countries"
      },
      {
          "countryName": "Liberia"
      },
      {
          "countryName": "Libya"
      },
      {
          "countryName": "Liechtenstein"
      },
      {
          "countryName": "Lithuania"
      },
      {
          "countryName": "Low-income countries"
      },
      {
          "countryName": "Lower-middle-income countries"
      },
      {
          "countryName": "Luxembourg"
      },
      {
          "countryName": "Macao"
      },
      {
          "countryName": "Madagascar"
      },
      {
          "countryName": "Malawi"
      },
      {
          "countryName": "Malaysia"
      },
      {
          "countryName": "Maldives"
      },
      {
          "countryName": "Mali"
      },
      {
          "countryName": "Malta"
      },
      {
          "countryName": "Marshall Islands"
      },
      {
          "countryName": "Martinique"
      },
      {
          "countryName": "Mauritania"
      },
      {
          "countryName": "Mauritius"
      },
      {
          "countryName": "Mayotte"
      },
      {
          "countryName": "Mexico"
      },
      {
          "countryName": "Micronesia (country)"
      },
      {
          "countryName": "Moldova"
      },
      {
          "countryName": "Monaco"
      },
      {
          "countryName": "Mongolia"
      },
      {
          "countryName": "Montenegro"
      },
      {
          "countryName": "Montserrat"
      },
      {
          "countryName": "More developed regions"
      },
      {
          "countryName": "Morocco"
      },
      {
          "countryName": "Mozambique"
      },
      {
          "countryName": "Myanmar"
      },
      {
          "countryName": "Namibia"
      },
      {
          "countryName": "Nauru"
      },
      {
          "countryName": "Nepal"
      },
      {
          "countryName": "Netherlands"
      },
      {
          "countryName": "New Caledonia"
      },
      {
          "countryName": "New Zealand"
      },
      {
          "countryName": "Nicaragua"
      },
      {
          "countryName": "Niger"
      },
      {
          "countryName": "Nigeria"
      },
      {
          "countryName": "Niue"
      },
      {
          "countryName": "North Korea"
      },
      {
          "countryName": "North Macedonia"
      },
      {
          "countryName": "Northern America (UN)"
      },
      {
          "countryName": "Northern Mariana Islands"
      },
      {
          "countryName": "Norway"
      },
      {
          "countryName": "Oceania (UN)"
      },
      {
          "countryName": "Oman"
      },
      {
          "countryName": "Pakistan"
      },
      {
          "countryName": "Palau"
      },
      {
          "countryName": "Palestine"
      },
      {
          "countryName": "Panama"
      },
      {
          "countryName": "Papua New Guinea"
      },
      {
          "countryName": "Paraguay"
      },
      {
          "countryName": "Peru"
      },
      {
          "countryName": "Philippines"
      },
      {
          "countryName": "Poland"
      },
      {
          "countryName": "Portugal"
      },
      {
          "countryName": "Puerto Rico"
      },
      {
          "countryName": "Qatar"
      },
      {
          "countryName": "Reunion"
      },
      {
          "countryName": "Romania"
      },
      {
          "countryName": "Russia"
      },
      {
          "countryName": "Rwanda"
      },
      {
          "countryName": "Saint Barthelemy"
      },
      {
          "countryName": "Saint Helena"
      },
      {
          "countryName": "Saint Kitts and Nevis"
      },
      {
          "countryName": "Saint Lucia"
      },
      {
          "countryName": "Saint Martin (French part)"
      },
      {
          "countryName": "Saint Pierre and Miquelon"
      },
      {
          "countryName": "Saint Vincent and the Grenadines"
      },
      {
          "countryName": "Samoa"
      },
      {
          "countryName": "San Marino"
      },
      {
          "countryName": "Sao Tome and Principe"
      },
      {
          "countryName": "Saudi Arabia"
      },
      {
          "countryName": "Senegal"
      },
      {
          "countryName": "Serbia"
      },
      {
          "countryName": "Seychelles"
      },
      {
          "countryName": "Sierra Leone"
      },
      {
          "countryName": "Singapore"
      },
      {
          "countryName": "Sint Maarten (Dutch part)"
      },
      {
          "countryName": "Slovakia"
      },
      {
          "countryName": "Slovenia"
      },
      {
          "countryName": "Small island developing states (SIDS)"
      },
      {
          "countryName": "Solomon Islands"
      },
      {
          "countryName": "Somalia"
      },
      {
          "countryName": "South Africa"
      },
      {
          "countryName": "South Korea"
      },
      {
          "countryName": "South Sudan"
      },
      {
          "countryName": "Spain"
      },
      {
          "countryName": "Sri Lanka"
      },
      {
          "countryName": "Sudan"
      },
      {
          "countryName": "Suriname"
      },
      {
          "countryName": "Sweden"
      },
      {
          "countryName": "Switzerland"
      },
      {
          "countryName": "Syria"
      },
      {
          "countryName": "Taiwan"
      },
      {
          "countryName": "Tajikistan"
      },
      {
          "countryName": "Tanzania"
      },
      {
          "countryName": "Thailand"
      },
      {
          "countryName": "Togo"
      },
      {
          "countryName": "Tokelau"
      },
      {
          "countryName": "Tonga"
      },
      {
          "countryName": "Trinidad and Tobago"
      },
      {
          "countryName": "Tunisia"
      },
      {
          "countryName": "Turkey"
      },
      {
          "countryName": "Turkmenistan"
      },
      {
          "countryName": "Turks and Caicos Islands"
      },
      {
          "countryName": "Tuvalu"
      },
      {
          "countryName": "Uganda"
      },
      {
          "countryName": "Ukraine"
      },
      {
          "countryName": "United Arab Emirates"
      },
      {
          "countryName": "United Kingdom"
      },
      {
          "countryName": "United States"
      },
      {
          "countryName": "United States Virgin Islands"
      },
      {
          "countryName": "Upper-middle-income countries"
      },
      {
          "countryName": "Uruguay"
      },
      {
          "countryName": "Uzbekistan"
      },
      {
          "countryName": "Vanuatu"
      },
      {
          "countryName": "Venezuela"
      },
      {
          "countryName": "Vietnam"
      },
      {
          "countryName": "Wallis and Futuna"
      },
      {
          "countryName": "Western Sahara"
      },
      {
          "countryName": "World"
      },
      {
          "countryName": "Yemen"
      },
      {
          "countryName": "Zambia"
      },
      {
          "countryName": "Zimbabwe"
      }
    ]
    const allData = await this.repository.find({
      select: {
        countryName: true,
        year: true,
        population: true
      },
    })

    return allData;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} chart`;
  // }

  // update(id: number, updateChartDto: UpdateChartDto) {
  //   return `This action updates a #${id} chart`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} chart`;
  // }
}

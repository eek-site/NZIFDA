// NZIFDA Vehicle Database - Comprehensive Make/Model Listing
// All vehicles follow manufacturer-prescribed fuel system access procedures

const vehicleDatabase = {
  "Toyota": {
    group: "Toyota Motor Corporation",
    groupUrl: "/oem/toyota-group/index.html",
    models: {
      "Hilux": { years: "1997-2024", fuelTypes: ["Petrol", "Diesel"], platform: "IMV Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "80L", relatedModels: "Fortuner, Innova share platform" },
      "Corolla": { years: "1995-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-C", antiSiphon: "Yes", accessPanel: "Yes - Under rear seat", tankCapacity: "50L", relatedModels: "Corolla Cross, Auris, Levin" },
      "RAV4": { years: "1994-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-K", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Vanguard, Harrier" },
      "Camry": { years: "1995-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-K", antiSiphon: "Yes", accessPanel: "Yes - Under rear seat", tankCapacity: "60L", relatedModels: "Aurion, Avalon" },
      "Hiace": { years: "1995-2024", fuelTypes: ["Petrol", "Diesel"], platform: "H200/H300", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "Regius, Granvia, RegiusAce" },
      "Prius": { years: "1997-2024", fuelTypes: ["Hybrid"], platform: "TNGA-C", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "43L", relatedModels: "Prius Alpha, Prius C/Aqua" },
      "Aqua": { years: "2011-2024", fuelTypes: ["Hybrid"], platform: "TNGA-B", antiSiphon: "Yes", accessPanel: "Yes - Under rear seat", tankCapacity: "36L", relatedModels: "Prius C, Yaris Hybrid" },
      "Land Cruiser": { years: "1990-2024", fuelTypes: ["Petrol", "Diesel"], platform: "F Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "93L (main) + 45L (sub)", relatedModels: "Land Cruiser Prado, Lexus LX" },
      "Prado": { years: "1996-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Land Cruiser Prado", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "87L", relatedModels: "Land Cruiser, Lexus GX" },
      "Yaris": { years: "1999-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-B", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Vitz, Echo, Yaris Cross" },
      "Vitz": { years: "1999-2019", fuelTypes: ["Petrol"], platform: "NBC/B Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Yaris, Echo" },
      "86": { years: "2012-2024", fuelTypes: ["Petrol"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Subaru BRZ, Scion FR-S, GR86" },
      "C-HR": { years: "2016-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-C", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Corolla Cross" },
      "Fortuner": { years: "2005-2024", fuelTypes: ["Petrol", "Diesel"], platform: "IMV Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "Hilux, Innova" },
      "Highlander": { years: "2000-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-K", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "68L", relatedModels: "Kluger" },
      "Estima": { years: "1990-2019", fuelTypes: ["Petrol", "Hybrid"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "65L", relatedModels: "Previa, Tarago" },
      "Wish": { years: "2003-2017", fuelTypes: ["Petrol"], platform: "MC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Isis" },
      "Mark X": { years: "2004-2019", fuelTypes: ["Petrol"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "71L", relatedModels: "Crown, Lexus IS" },
      "Crown": { years: "1995-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-L/N", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "Mark X, Majesta" },
      "Alphard": { years: "2002-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Vellfire" },
      "Vellfire": { years: "2008-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Alphard" },
      "Auris": { years: "2006-2019", fuelTypes: ["Petrol", "Hybrid", "Diesel"], platform: "MC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Corolla Hatch" },
      "Avensis": { years: "1997-2018", fuelTypes: ["Petrol", "Diesel"], platform: "MC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Caldina" },
      "Caldina": { years: "1992-2007", fuelTypes: ["Petrol"], platform: "T Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "55L", relatedModels: "Avensis, Corona" },
      "Ipsum": { years: "1996-2009", fuelTypes: ["Petrol"], platform: "MC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "Picnic, Avensis Verso" },
      "Ractis": { years: "2005-2016", fuelTypes: ["Petrol"], platform: "NBC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Verso-S" },
      "Sienta": { years: "2003-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "B Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Spacio" },
      "Passo": { years: "2004-2024", fuelTypes: ["Petrol"], platform: "B Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "Daihatsu Boon" },
      "IST": { years: "2002-2016", fuelTypes: ["Petrol"], platform: "NBC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "Urban Cruiser, Scion xB" },
      "Dyna": { years: "1995-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Toyoace, Hino Dutro" },
      "Toyoace": { years: "1997-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Dyna" },
      "Coaster": { years: "1993-2024", fuelTypes: ["Diesel"], platform: "Bus Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "90L", relatedModels: "None" },
      "Regius": { years: "1997-2024", fuelTypes: ["Petrol", "Diesel"], platform: "H100/H200", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "Hiace, Granvia" },
      "Previa": { years: "1990-2019", fuelTypes: ["Petrol"], platform: "Estima Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "65L", relatedModels: "Estima, Tarago" },
      "Fun Cargo": { years: "1999-2005", fuelTypes: ["Petrol"], platform: "NBC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Yaris Verso" },
      "Raum": { years: "1997-2011", fuelTypes: ["Petrol"], platform: "NBC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "None" },
      "Sprinter": { years: "1991-2002", fuelTypes: ["Petrol", "Diesel"], platform: "E Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Corolla, Trueno, Levin" },
      "Altezza": { years: "1998-2005", fuelTypes: ["Petrol"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Lexus IS" },
      "Blade": { years: "2006-2012", fuelTypes: ["Petrol"], platform: "MC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Auris" },
      "SAI": { years: "2009-2017", fuelTypes: ["Hybrid"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Camry Hybrid" },
      "Corolla Fielder": { years: "2000-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-C", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Corolla Wagon" },
      "Rumion": { years: "2007-2015", fuelTypes: ["Petrol"], platform: "MC Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Scion xB" },
      "GR Corolla": { years: "2022-2024", fuelTypes: ["Petrol"], platform: "TNGA-C", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Corolla, GR Yaris" }
    }
  },
  "Ford": {
    group: "Ford Motor Company",
    groupUrl: "/oem/ford-group/index.html",
    models: {
      "Ranger": { years: "1998-2024", fuelTypes: ["Petrol", "Diesel"], platform: "T6/T7 Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "80L", relatedModels: "Mazda BT-50, Everest" },
      "Falcon": { years: "1960-2016", fuelTypes: ["Petrol", "LPG"], platform: "EA-FG Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "68L", relatedModels: "Territory, Fairlane, LTD" },
      "Focus": { years: "1998-2024", fuelTypes: ["Petrol", "Diesel"], platform: "C2 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "53L", relatedModels: "C-Max, Kuga" },
      "Fiesta": { years: "1995-2023", fuelTypes: ["Petrol", "Diesel"], platform: "B3 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Puma" },
      "Transit": { years: "1995-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Transit Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "Transit Custom, Transit Connect" },
      "Everest": { years: "2015-2024", fuelTypes: ["Diesel"], platform: "T6/T7 Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "Ranger" },
      "Mondeo": { years: "1993-2022", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "CD4 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Fusion" },
      "Territory": { years: "2004-2016", fuelTypes: ["Petrol"], platform: "EA Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "72L", relatedModels: "Falcon" },
      "Kuga": { years: "2008-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "C2 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "54L", relatedModels: "Escape, Focus" },
      "Escape": { years: "2000-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "C2 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "54L", relatedModels: "Kuga" },
      "Mustang": { years: "1964-2024", fuelTypes: ["Petrol"], platform: "S650 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "61L", relatedModels: "Mustang Mach-E" },
      "Puma": { years: "2019-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "B3 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Fiesta" },
      "Courier": { years: "1985-2006", fuelTypes: ["Petrol", "Diesel"], platform: "Mazda B-Series", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "60L", relatedModels: "Mazda Bounty" },
      "Trader": { years: "1981-1999", fuelTypes: ["Diesel"], platform: "Mazda T-Series", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Mazda T-Series" },
      "Laser": { years: "1981-2002", fuelTypes: ["Petrol"], platform: "Mazda 323", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Mazda 323, Familia" }
    }
  },
  "Mazda": {
    group: "Mazda Motor Corporation",
    groupUrl: "/oem/mazda/index.html",
    models: {
      "CX-5": { years: "2012-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Skyactiv Platform", antiSiphon: "Yes", accessPanel: "Yes - Under rear seat", tankCapacity: "56L", relatedModels: "CX-50" },
      "BT-50": { years: "2006-2024", fuelTypes: ["Diesel"], platform: "T6/T7 (Ford)", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "80L", relatedModels: "Ford Ranger, Isuzu D-Max (new)" },
      "Mazda3": { years: "2003-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "Skyactiv Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "51L", relatedModels: "Axela" },
      "Axela": { years: "2003-2019", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "Skyactiv Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "51L", relatedModels: "Mazda3" },
      "Mazda2": { years: "2002-2024", fuelTypes: ["Petrol"], platform: "Demio Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "44L", relatedModels: "Demio" },
      "Demio": { years: "1996-2019", fuelTypes: ["Petrol", "Diesel"], platform: "DE/DJ Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "44L", relatedModels: "Mazda2" },
      "Mazda6": { years: "2002-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Skyactiv Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "62L", relatedModels: "Atenza" },
      "Atenza": { years: "2002-2019", fuelTypes: ["Petrol", "Diesel"], platform: "GG/GH/GJ Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "62L", relatedModels: "Mazda6" },
      "CX-3": { years: "2015-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Skyactiv Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "44L", relatedModels: "Mazda2" },
      "CX-30": { years: "2019-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Skyactiv Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "48L", relatedModels: "Mazda3" },
      "CX-7": { years: "2006-2012", fuelTypes: ["Petrol", "Diesel"], platform: "Ford CD3", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "69L", relatedModels: "Ford Edge" },
      "CX-8": { years: "2017-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Skyactiv Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "72L", relatedModels: "CX-9" },
      "CX-60": { years: "2022-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "Large Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "CX-70" },
      "CX-90": { years: "2023-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Large Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "68L", relatedModels: "CX-80" },
      "MX-5": { years: "1989-2024", fuelTypes: ["Petrol"], platform: "Roadster Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "MX-5 RF" },
      "MX-30": { years: "2020-2024", fuelTypes: ["Electric", "Hybrid"], platform: "Skyactiv Platform", antiSiphon: "N/A (Electric)", accessPanel: "Yes", tankCapacity: "N/A / 50L PHEV", relatedModels: "None" },
      "Premacy": { years: "1999-2018", fuelTypes: ["Petrol"], platform: "C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Mazda5" },
      "MPV": { years: "1988-2016", fuelTypes: ["Petrol"], platform: "J Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "75L", relatedModels: "None" },
      "Tribute": { years: "2000-2011", fuelTypes: ["Petrol"], platform: "Ford CD2", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "62L", relatedModels: "Ford Escape" },
      "Familia": { years: "1963-2003", fuelTypes: ["Petrol", "Diesel"], platform: "BJ Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "50L", relatedModels: "323, Protege" },
      "Verisa": { years: "2004-2015", fuelTypes: ["Petrol"], platform: "DE Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "43L", relatedModels: "Demio" },
      "Biante": { years: "2008-2018", fuelTypes: ["Petrol"], platform: "C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Premacy, Mazda5" },
      "Bounty": { years: "1996-2006", fuelTypes: ["Petrol", "Diesel"], platform: "B-Series", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "60L", relatedModels: "Ford Courier" },
      "RX-8": { years: "2003-2012", fuelTypes: ["Petrol"], platform: "FE Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "None" },
      "Eunos 800": { years: "1993-2000", fuelTypes: ["Petrol"], platform: "TA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Millenia" }
    }
  },
  "Nissan": {
    group: "Renault-Nissan-Mitsubishi Alliance",
    groupUrl: "/oem/renault-nissan-mitsubishi/index.html",
    models: {
      "Navara": { years: "1997-2024", fuelTypes: ["Petrol", "Diesel"], platform: "D40/D23 Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "80L", relatedModels: "Frontier, NP300" },
      "X-Trail": { years: "2000-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "CMF-C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Rogue" },
      "Qashqai": { years: "2006-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "CMF-C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Dualis" },
      "Dualis": { years: "2006-2013", fuelTypes: ["Petrol"], platform: "C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Qashqai" },
      "Leaf": { years: "2010-2024", fuelTypes: ["Electric"], platform: "EV Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "Ariya" },
      "Skyline": { years: "1989-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "FM Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Infiniti Q50/G35" },
      "Tiida": { years: "2004-2015", fuelTypes: ["Petrol"], platform: "B Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "52L", relatedModels: "Versa, Latio" },
      "Latio": { years: "2012-2016", fuelTypes: ["Petrol"], platform: "V Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "41L", relatedModels: "Tiida, Versa" },
      "Note": { years: "2004-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "V Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "41L", relatedModels: "Versa Note" },
      "March": { years: "1982-2024", fuelTypes: ["Petrol"], platform: "V Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "41L", relatedModels: "Micra" },
      "Micra": { years: "1982-2024", fuelTypes: ["Petrol"], platform: "V Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "41L", relatedModels: "March" },
      "Pulsar": { years: "1978-2020", fuelTypes: ["Petrol", "Diesel"], platform: "C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Sentra, Almera" },
      "Elgrand": { years: "1997-2024", fuelTypes: ["Petrol"], platform: "E Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "73L", relatedModels: "Quest" },
      "Serena": { years: "1991-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Vanette Serena" },
      "Murano": { years: "2002-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "D Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "82L", relatedModels: "None" },
      "Pathfinder": { years: "1986-2024", fuelTypes: ["Petrol", "Diesel"], platform: "D Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "Terrano" },
      "Terrano": { years: "1986-2006", fuelTypes: ["Petrol", "Diesel"], platform: "Pathfinder Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "Pathfinder" },
      "Patrol": { years: "1951-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Y62 Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "140L", relatedModels: "Armada, Infiniti QX80" },
      "Juke": { years: "2010-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "B Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "46L", relatedModels: "Kicks" },
      "Bluebird": { years: "1959-2012", fuelTypes: ["Petrol"], platform: "U Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Sylphy, Altima" },
      "Teana": { years: "2003-2020", fuelTypes: ["Petrol"], platform: "D Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Maxima, Altima" },
      "Maxima": { years: "1981-2023", fuelTypes: ["Petrol"], platform: "D Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "76L", relatedModels: "Teana" },
      "Fuga": { years: "2004-2022", fuelTypes: ["Petrol", "Hybrid"], platform: "FM Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "Infiniti M/Q70" },
      "Primera": { years: "1990-2008", fuelTypes: ["Petrol", "Diesel"], platform: "P Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "None" },
      "Wingroad": { years: "1996-2018", fuelTypes: ["Petrol"], platform: "B Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "AD Van" },
      "Presage": { years: "1998-2009", fuelTypes: ["Petrol"], platform: "U Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Bassara" },
      "Caravan": { years: "1986-2024", fuelTypes: ["Petrol", "Diesel"], platform: "E Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "NV350, Urvan" },
      "NV200": { years: "2009-2024", fuelTypes: ["Petrol", "Electric"], platform: "ME Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "e-NV200" },
      "Cefiro": { years: "1988-2003", fuelTypes: ["Petrol"], platform: "A Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Maxima" },
      "Laurel": { years: "1968-2002", fuelTypes: ["Petrol"], platform: "C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Skyline" },
      "Silvia": { years: "1964-2002", fuelTypes: ["Petrol"], platform: "S Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "200SX, 240SX" },
      "Fairlady Z": { years: "1969-2024", fuelTypes: ["Petrol"], platform: "FM Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "72L", relatedModels: "350Z, 370Z, Z" },
      "Cube": { years: "1998-2020", fuelTypes: ["Petrol"], platform: "B Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "46L", relatedModels: "None" },
      "Lafesta": { years: "2004-2018", fuelTypes: ["Petrol"], platform: "C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "None" },
      "Civilian": { years: "1971-2024", fuelTypes: ["Diesel"], platform: "Bus Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "100L", relatedModels: "None" },
      "Safari": { years: "1980-2007", fuelTypes: ["Petrol", "Diesel"], platform: "Y60/Y61", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "95L", relatedModels: "Patrol" },
      "Infiniti": { years: "Various", fuelTypes: ["Petrol", "Hybrid"], platform: "Various", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "Varies", relatedModels: "Q50, Q60, QX series" },
      "Condor": { years: "1975-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "UD Trucks" },
      "Atlas": { years: "1982-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Cabstar" }
    }
  },
  "Holden": {
    group: "General Motors (Discontinued 2020)",
    groupUrl: "/oem/general-motors/index.html",
    models: {
      "Commodore": { years: "1978-2020", fuelTypes: ["Petrol", "LPG"], platform: "VE/VF/ZB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "71L", relatedModels: "Caprice, HSV models" },
      "Colorado": { years: "2008-2020", fuelTypes: ["Petrol", "Diesel"], platform: "GMT31XX Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "76L", relatedModels: "Isuzu D-Max, Chevrolet Colorado" },
      "Captiva": { years: "2006-2018", fuelTypes: ["Petrol", "Diesel"], platform: "Theta Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Chevrolet Captiva" },
      "Cruze": { years: "2009-2017", fuelTypes: ["Petrol", "Diesel"], platform: "Delta II Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "59L", relatedModels: "Chevrolet Cruze" },
      "Astra": { years: "1996-2020", fuelTypes: ["Petrol", "Diesel"], platform: "D2XX Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "52L", relatedModels: "Opel Astra" },
      "Barina": { years: "1985-2018", fuelTypes: ["Petrol"], platform: "Gamma II Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "Chevrolet Sonic" },
      "Rodeo": { years: "1988-2008", fuelTypes: ["Petrol", "Diesel"], platform: "Isuzu Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "75L", relatedModels: "Isuzu Rodeo" },
      "Trax": { years: "2013-2020", fuelTypes: ["Petrol", "Diesel"], platform: "Gamma II Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "53L", relatedModels: "Chevrolet Trax" },
      "Epica": { years: "2006-2011", fuelTypes: ["Petrol", "Diesel"], platform: "Epsilon Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Chevrolet Epica" },
      "Vectra": { years: "1997-2009", fuelTypes: ["Petrol", "Diesel"], platform: "Epsilon Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Opel Vectra" },
      "Viva": { years: "2005-2009", fuelTypes: ["Petrol"], platform: "T Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "48L", relatedModels: "Daewoo Lacetti" },
      "Statesman": { years: "1990-2010", fuelTypes: ["Petrol"], platform: "VN-WM Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "75L", relatedModels: "Caprice" },
      "Ute": { years: "2000-2017", fuelTypes: ["Petrol"], platform: "VE/VF Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "71L", relatedModels: "Commodore Ute" },
      "Acadia": { years: "2018-2020", fuelTypes: ["Petrol"], platform: "C1XX Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "83L", relatedModels: "GMC Acadia" }
    }
  },
  "Mitsubishi": {
    group: "Renault-Nissan-Mitsubishi Alliance",
    groupUrl: "/oem/renault-nissan-mitsubishi/index.html",
    models: {
      "Triton": { years: "1978-2024", fuelTypes: ["Petrol", "Diesel"], platform: "ML/MN/MQ/MR Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "75L", relatedModels: "L200, Strada" },
      "Outlander": { years: "2001-2024", fuelTypes: ["Petrol", "Diesel", "PHEV"], platform: "GS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Eclipse Cross" },
      "ASX": { years: "2010-2024", fuelTypes: ["Petrol", "Diesel"], platform: "GS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "RVR" },
      "Pajero": { years: "1982-2021", fuelTypes: ["Petrol", "Diesel"], platform: "Pajero Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "88L", relatedModels: "Montero, Shogun" },
      "Pajero Sport": { years: "1996-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Triton Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "68L", relatedModels: "Challenger, Montero Sport" },
      "Lancer": { years: "1973-2017", fuelTypes: ["Petrol", "Diesel"], platform: "GS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "59L", relatedModels: "Lancer Evolution, Galant Fortis" },
      "Eclipse Cross": { years: "2017-2024", fuelTypes: ["Petrol", "PHEV"], platform: "GS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "Outlander" },
      "Delica": { years: "1968-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Delica Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "64L", relatedModels: "L300, Space Gear" },
      "Grandis": { years: "2003-2011", fuelTypes: ["Petrol"], platform: "DGS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "None" },
      "Colt": { years: "1962-2013", fuelTypes: ["Petrol"], platform: "GS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "47L", relatedModels: "Smart ForFour" },
      "Galant": { years: "1969-2012", fuelTypes: ["Petrol"], platform: "DGS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "67L", relatedModels: "Legnum, Galant Fortis" },
      "L200": { years: "1978-2024", fuelTypes: ["Diesel"], platform: "Triton Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "75L", relatedModels: "Triton" },
      "L300": { years: "1979-2024", fuelTypes: ["Petrol", "Diesel"], platform: "L300 Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "55L", relatedModels: "Express, Delica" },
      "Challenger": { years: "1996-2015", fuelTypes: ["Petrol", "Diesel"], platform: "Triton Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "75L", relatedModels: "Pajero Sport" },
      "RVR": { years: "1991-2024", fuelTypes: ["Petrol"], platform: "GS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "ASX" },
      "Canter": { years: "1963-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Fuso Canter" },
      "Rosa": { years: "1985-2024", fuelTypes: ["Diesel"], platform: "Bus Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "100L", relatedModels: "Fuso Rosa" },
      "Fuso": { years: "Various", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Fighter, Canter" }
    }
  },
  "Honda": {
    group: "Honda Motor Company",
    groupUrl: "/oem/honda-group/index.html",
    models: {
      "CR-V": { years: "1995-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Light Truck Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "57L", relatedModels: "HR-V" },
      "Fit": { years: "2001-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "Jazz" },
      "Jazz": { years: "2001-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "Fit" },
      "Accord": { years: "1976-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Large Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "56L", relatedModels: "Inspire" },
      "Civic": { years: "1972-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Compact Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "47L", relatedModels: "Integra" },
      "Odyssey": { years: "1994-2024", fuelTypes: ["Petrol"], platform: "Honda Light Truck Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Elysion" },
      "HR-V": { years: "1999-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "Vezel" },
      "Vezel": { years: "2013-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "HR-V" },
      "Stream": { years: "2000-2014", fuelTypes: ["Petrol"], platform: "Honda Global Compact Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "None" },
      "Insight": { years: "1999-2022", fuelTypes: ["Hybrid"], platform: "Honda Global Compact Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "None" },
      "Stepwgn": { years: "1996-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Compact Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "52L", relatedModels: "None" },
      "Freed": { years: "2008-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "36L", relatedModels: "None" },
      "Elysion": { years: "2004-2013", fuelTypes: ["Petrol"], platform: "Honda Light Truck Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Odyssey" },
      "Airwave": { years: "2005-2010", fuelTypes: ["Petrol"], platform: "Honda Global Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Fit/Jazz Shuttle" },
      "Spike": { years: "2002-2008", fuelTypes: ["Petrol"], platform: "Honda Global Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "42L", relatedModels: "Mobilio" },
      "Crossroad": { years: "2007-2010", fuelTypes: ["Petrol"], platform: "Honda Light Truck Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "57L", relatedModels: "None" },
      "Edix": { years: "2004-2009", fuelTypes: ["Petrol"], platform: "Honda Global Compact Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "FR-V" },
      "Logo": { years: "1996-2001", fuelTypes: ["Petrol"], platform: "Honda Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "None" },
      "Torneo": { years: "1997-2002", fuelTypes: ["Petrol"], platform: "Honda Global Large Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Accord" },
      "Grace": { years: "2014-2020", fuelTypes: ["Petrol", "Hybrid"], platform: "Honda Global Compact Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "City" }
    }
  },
  "Hyundai": {
    group: "Hyundai Motor Group",
    groupUrl: "/oem/hyundai-group/index.html",
    models: {
      "Tucson": { years: "2004-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "54L", relatedModels: "ix35" },
      "Santa Fe": { years: "2000-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "67L", relatedModels: "None" },
      "i30": { years: "2007-2024", fuelTypes: ["Petrol", "Diesel"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Elantra GT" },
      "iLoad": { years: "2008-2024", fuelTypes: ["Petrol", "Diesel"], platform: "H1 Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "75L", relatedModels: "H-1, Starex" },
      "iMax": { years: "2008-2024", fuelTypes: ["Diesel"], platform: "H1 Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "75L", relatedModels: "H-1, Staria" },
      "Staria": { years: "2021-2024", fuelTypes: ["Petrol", "Diesel"], platform: "S Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "75L", relatedModels: "iMax successor" },
      "Accent": { years: "1994-2024", fuelTypes: ["Petrol", "Diesel"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "Verna" },
      "Getz": { years: "2002-2011", fuelTypes: ["Petrol", "Diesel"], platform: "TB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "Click" },
      "ix35": { years: "2009-2015", fuelTypes: ["Petrol", "Diesel"], platform: "LM Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "Tucson" },
      "Sonata": { years: "1985-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "i45" },
      "i40": { years: "2011-2019", fuelTypes: ["Petrol", "Diesel"], platform: "YF Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Sonata" },
      "i45": { years: "2009-2014", fuelTypes: ["Petrol"], platform: "YF Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Sonata" },
      "Kona": { years: "2017-2024", fuelTypes: ["Petrol", "Electric", "Hybrid"], platform: "K Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "50L/N/A", relatedModels: "None" },
      "Ioniq": { years: "2016-2024", fuelTypes: ["Hybrid", "Electric"], platform: "K Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "45L/N/A", relatedModels: "Ioniq 5, Ioniq 6" },
      "Terracan": { years: "2001-2007", fuelTypes: ["Petrol", "Diesel"], platform: "JX Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "None" },
      "Venue": { years: "2019-2024", fuelTypes: ["Petrol"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "None" },
      "Palisade": { years: "2019-2024", fuelTypes: ["Petrol", "Diesel"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "71L", relatedModels: "Kia Telluride" }
    }
  },
  "Kia": {
    group: "Hyundai Motor Group",
    groupUrl: "/oem/hyundai-group/index.html",
    models: {
      "Sportage": { years: "1993-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "54L", relatedModels: "Hyundai Tucson" },
      "Sorento": { years: "2002-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "67L", relatedModels: "Hyundai Santa Fe" },
      "Rio": { years: "2000-2024", fuelTypes: ["Petrol", "Diesel"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "Hyundai Accent" },
      "Cerato": { years: "2003-2024", fuelTypes: ["Petrol", "Diesel"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Forte" },
      "Carnival": { years: "1998-2024", fuelTypes: ["Petrol", "Diesel"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "Sedona" },
      "Stinger": { years: "2017-2024", fuelTypes: ["Petrol"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Genesis G70" },
      "EV6": { years: "2021-2024", fuelTypes: ["Electric"], platform: "E-GMP", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "Hyundai Ioniq 5" },
      "Niro": { years: "2016-2024", fuelTypes: ["Hybrid", "PHEV", "Electric"], platform: "K Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "45L/N/A", relatedModels: "Hyundai Ioniq" },
      "Seltos": { years: "2019-2024", fuelTypes: ["Petrol"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Hyundai Venue" },
      "Optima": { years: "2000-2020", fuelTypes: ["Petrol", "Hybrid"], platform: "Y Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "K5" },
      "Picanto": { years: "2004-2024", fuelTypes: ["Petrol"], platform: "SA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "35L", relatedModels: "Morning" }
    }
  },
  "Volkswagen": {
    group: "Volkswagen Group",
    groupUrl: "/oem/volkswagen-group/index.html",
    models: {
      "Golf": { years: "1974-2024", fuelTypes: ["Petrol", "Diesel", "Electric"], platform: "MQB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "GTI, R, e-Golf" },
      "Polo": { years: "1975-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MQB A0 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "GTI" },
      "Tiguan": { years: "2007-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MQB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "Tiguan Allspace" },
      "Amarok": { years: "2010-2024", fuelTypes: ["Petrol", "Diesel"], platform: "T6/T7 (Ford)", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "80L", relatedModels: "Ford Ranger" },
      "Touareg": { years: "2002-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "75L", relatedModels: "Audi Q7, Porsche Cayenne" },
      "Passat": { years: "1973-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MQB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "Arteon" },
      "T-Cross": { years: "2018-2024", fuelTypes: ["Petrol"], platform: "MQB A0 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "Polo" },
      "T-Roc": { years: "2017-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MQB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Golf" },
      "Transporter": { years: "1950-2024", fuelTypes: ["Petrol", "Diesel"], platform: "T6.1 Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "Multivan, Caravelle" },
      "Crafter": { years: "2006-2024", fuelTypes: ["Diesel"], platform: "MAN TGE Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "75L", relatedModels: "MAN TGE" },
      "Caddy": { years: "1979-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MQB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Caddy Maxi" },
      "Beetle": { years: "1938-2019", fuelTypes: ["Petrol", "Diesel"], platform: "PQ35/A5 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "New Beetle" },
      "ID.3": { years: "2020-2024", fuelTypes: ["Electric"], platform: "MEB Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "ID.4" },
      "ID.4": { years: "2020-2024", fuelTypes: ["Electric"], platform: "MEB Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "ID.5" }
    }
  },
  "Audi": {
    group: "Volkswagen Group",
    groupUrl: "/oem/volkswagen-group/index.html",
    models: {
      "A3": { years: "1996-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MQB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "S3, RS3" },
      "A4": { years: "1994-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "S4, RS4" },
      "A5": { years: "2007-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "S5, RS5" },
      "A6": { years: "1994-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "S6, RS6" },
      "A7": { years: "2010-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "S7, RS7" },
      "Q3": { years: "2011-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MQB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "RSQ3" },
      "Q5": { years: "2008-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "SQ5" },
      "Q7": { years: "2005-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "85L", relatedModels: "SQ7" },
      "TT": { years: "1998-2024", fuelTypes: ["Petrol"], platform: "MQB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "TTS, TTRS" },
      "S4": { years: "1991-2024", fuelTypes: ["Petrol"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "A4, RS4" },
      "S5": { years: "2007-2024", fuelTypes: ["Petrol"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "A5, RS5" },
      "RS6": { years: "2002-2024", fuelTypes: ["Petrol"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "73L", relatedModels: "A6, S6" },
      "RS Q8": { years: "2019-2024", fuelTypes: ["Petrol"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "85L", relatedModels: "Q8, SQ8" },
      "e-tron": { years: "2018-2024", fuelTypes: ["Electric"], platform: "MLB evo", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "e-tron GT, Q8 e-tron" }
    }
  },
  "BMW": {
    group: "BMW Group",
    groupUrl: "/oem/bmw-group/index.html",
    models: {
      "3 Series": { years: "1975-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "59L", relatedModels: "320i, 330i, M3" },
      "320i": { years: "1975-2024", fuelTypes: ["Petrol"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "59L", relatedModels: "3 Series" },
      "323i": { years: "1977-2012", fuelTypes: ["Petrol"], platform: "E46/E90 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "3 Series" },
      "325i": { years: "1987-2013", fuelTypes: ["Petrol"], platform: "E46/E90 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "3 Series" },
      "328i": { years: "1995-2016", fuelTypes: ["Petrol"], platform: "E46/F30 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "3 Series" },
      "330e": { years: "2016-2024", fuelTypes: ["Hybrid"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "3 Series PHEV" },
      "335i": { years: "2006-2015", fuelTypes: ["Petrol"], platform: "E90/F30 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "3 Series" },
      "318i": { years: "1983-2024", fuelTypes: ["Petrol"], platform: "Various", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "52L", relatedModels: "1 Series, 3 Series" },
      "1 Series": { years: "2004-2024", fuelTypes: ["Petrol", "Diesel"], platform: "UKL Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "116i, 118i, M135i" },
      "116i": { years: "2004-2024", fuelTypes: ["Petrol"], platform: "UKL Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "1 Series" },
      "5 Series": { years: "1972-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "68L", relatedModels: "520i, 530i, M5" },
      "525i": { years: "1981-2010", fuelTypes: ["Petrol"], platform: "E60 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "5 Series" },
      "528i": { years: "1995-2017", fuelTypes: ["Petrol"], platform: "E39/F10 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "5 Series" },
      "530i": { years: "1992-2024", fuelTypes: ["Petrol"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "68L", relatedModels: "5 Series" },
      "550i": { years: "2005-2017", fuelTypes: ["Petrol"], platform: "E60/F10 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "5 Series" },
      "7 Series": { years: "1977-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "78L", relatedModels: "740i, 750Li, i7" },
      "X1": { years: "2009-2024", fuelTypes: ["Petrol", "Diesel"], platform: "UKL/FAAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "51L", relatedModels: "iX1" },
      "X3": { years: "2003-2024", fuelTypes: ["Petrol", "Diesel", "PHEV"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "iX3" },
      "X5": { years: "1999-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "83L", relatedModels: "X5M" },
      "X6": { years: "2008-2024", fuelTypes: ["Petrol", "Diesel"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "85L", relatedModels: "X6M" },
      "Z4": { years: "2002-2024", fuelTypes: ["Petrol"], platform: "CLAR Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "52L", relatedModels: "Toyota Supra" },
      "i3": { years: "2013-2022", fuelTypes: ["Electric", "Hybrid"], platform: "LifeDrive", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A", relatedModels: "None" }
    }
  },
  "Mercedes-Benz": {
    group: "Mercedes-Benz Group",
    groupUrl: "/oem/mercedes-benz-group/index.html",
    models: {
      "C-Class": { years: "1993-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "C180, C200, C300, AMG C43/C63" },
      "C180": { years: "1993-2024", fuelTypes: ["Petrol"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "C-Class" },
      "C200": { years: "1993-2024", fuelTypes: ["Petrol"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "C-Class" },
      "C300": { years: "2007-2024", fuelTypes: ["Petrol"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "C-Class" },
      "E-Class": { years: "1993-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "E220, E280, E350, AMG E53/E63" },
      "E220": { years: "1993-2024", fuelTypes: ["Diesel"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "E-Class" },
      "E280": { years: "1993-2009", fuelTypes: ["Petrol"], platform: "W211 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "E-Class" },
      "E350": { years: "2003-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "E-Class" },
      "E500": { years: "1992-2016", fuelTypes: ["Petrol"], platform: "W212 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "E-Class" },
      "A-Class": { years: "1997-2024", fuelTypes: ["Petrol", "Diesel"], platform: "MFA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "43L", relatedModels: "A160, A180, A200, AMG A35/A45" },
      "A160": { years: "1997-2018", fuelTypes: ["Petrol"], platform: "MFA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "43L", relatedModels: "A-Class" },
      "A200": { years: "2004-2024", fuelTypes: ["Petrol"], platform: "MFA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "43L", relatedModels: "A-Class" },
      "CLA45 AMG": { years: "2013-2024", fuelTypes: ["Petrol"], platform: "MFA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "CLA-Class, A45 AMG" },
      "GLC": { years: "2015-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "GLK successor, GLC Coupe" },
      "GLE": { years: "2015-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MHA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "85L", relatedModels: "M-Class successor, GLE Coupe" },
      "GL-Class": { years: "2006-2015", fuelTypes: ["Petrol", "Diesel"], platform: "MHA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "100L", relatedModels: "GLS" },
      "ML": { years: "1997-2015", fuelTypes: ["Petrol", "Diesel"], platform: "MHA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "83L", relatedModels: "M-Class, GLE predecessor" },
      "S-Class": { years: "1972-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MRA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "76L", relatedModels: "S280, S350, S500, Maybach" },
      "Sprinter": { years: "1995-2024", fuelTypes: ["Diesel"], platform: "Sprinter Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "75L", relatedModels: "Vito, Viano" },
      "Vito": { years: "1996-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Vito Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "V-Class" },
      "V-Class": { years: "2014-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Vito Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "Vito, Viano" },
      "X-Class": { years: "2017-2020", fuelTypes: ["Diesel"], platform: "Nissan Navara", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "Nissan Navara" },
      "CLS550": { years: "2004-2018", fuelTypes: ["Petrol"], platform: "E-Class Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "CLS-Class" }
    }
  },
  "Subaru": {
    group: "Subaru Corporation",
    groupUrl: "/oem/subaru/index.html",
    models: {
      "Impreza": { years: "1992-2024", fuelTypes: ["Petrol"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "WRX, STI" },
      "Legacy": { years: "1989-2024", fuelTypes: ["Petrol"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Liberty" },
      "Forester": { years: "1997-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "None" },
      "Outback": { years: "1994-2024", fuelTypes: ["Petrol"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Legacy Outback" },
      "XV": { years: "2012-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "Crosstrek" },
      "Crosstrek": { years: "2012-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "XV" },
      "WRX": { years: "1992-2024", fuelTypes: ["Petrol"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Impreza WRX, STI" },
      "BRZ": { years: "2012-2024", fuelTypes: ["Petrol"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Toyota 86/GR86" },
      "Levorg": { years: "2014-2024", fuelTypes: ["Petrol"], platform: "Subaru Global Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Legacy Touring" },
      "Exiga": { years: "2008-2018", fuelTypes: ["Petrol"], platform: "SI Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "None" },
      "Solterra": { years: "2022-2024", fuelTypes: ["Electric"], platform: "e-TNGA", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "Toyota bZ4X" }
    }
  },
  "Suzuki": {
    group: "Suzuki Motor Corporation",
    groupUrl: "/oem/suzuki/index.html",
    models: {
      "Swift": { years: "2000-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "HEARTECT Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "37L", relatedModels: "Swift Sport" },
      "Vitara": { years: "1988-2024", fuelTypes: ["Petrol"], platform: "Global C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "47L", relatedModels: "Grand Vitara, Escudo" },
      "Jimny": { years: "1970-2024", fuelTypes: ["Petrol"], platform: "Ladder Frame", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "40L", relatedModels: "None" },
      "S-Cross": { years: "2013-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Global C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "47L", relatedModels: "SX4 S-Cross" },
      "SX4": { years: "2006-2024", fuelTypes: ["Petrol"], platform: "Global C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "S-Cross" },
      "Escudo": { years: "1988-2024", fuelTypes: ["Petrol"], platform: "Global C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "Vitara, Grand Vitara" },
      "Grand Vitara": { years: "1998-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Global C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "Escudo" },
      "Ignis": { years: "2000-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "HEARTECT Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "32L", relatedModels: "None" },
      "Baleno": { years: "1995-2024", fuelTypes: ["Petrol"], platform: "HEARTECT Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "37L", relatedModels: "Swift" },
      "Splash": { years: "2008-2014", fuelTypes: ["Petrol"], platform: "A Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "Ritz" },
      "Across": { years: "2020-2024", fuelTypes: ["Hybrid"], platform: "TNGA-K (Toyota)", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "Toyota RAV4 PHEV" },
      "Celerio": { years: "2014-2024", fuelTypes: ["Petrol"], platform: "HEARTECT Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "35L", relatedModels: "Alto" }
    }
  },
  "Isuzu": {
    group: "Isuzu Motors",
    groupUrl: "/oem/isuzu/index.html",
    models: {
      "D-Max": { years: "2002-2024", fuelTypes: ["Diesel"], platform: "ISUZU DMAX Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "76L", relatedModels: "MU-X, Holden Colorado" },
      "MU-X": { years: "2013-2024", fuelTypes: ["Diesel"], platform: "ISUZU DMAX Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "65L", relatedModels: "D-Max" },
      "N Series": { years: "1980-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "NPR, NQR, NRR" },
      "F Series": { years: "1980-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "FRR, FSR, FVR" },
      "Elf": { years: "1959-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "N Series" },
      "Forward": { years: "1970-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "F Series" },
      "Bighorn": { years: "1981-2002", fuelTypes: ["Petrol", "Diesel"], platform: "Trooper Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "Trooper" },
      "Wizard": { years: "1995-2003", fuelTypes: ["Petrol", "Diesel"], platform: "Rodeo Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "65L", relatedModels: "Rodeo" },
      "Journey": { years: "1971-2024", fuelTypes: ["Diesel"], platform: "Bus Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "100L", relatedModels: "None" }
    }
  },
  "Lexus": {
    group: "Toyota Motor Corporation",
    groupUrl: "/oem/toyota-group/index.html",
    models: {
      "IS250": { years: "2005-2015", fuelTypes: ["Petrol"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "IS Series" },
      "IS300h": { years: "2013-2024", fuelTypes: ["Hybrid"], platform: "TNGA-L", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "IS Series" },
      "IS350": { years: "2005-2024", fuelTypes: ["Petrol"], platform: "TNGA-L", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "IS Series" },
      "GS350": { years: "2005-2020", fuelTypes: ["Petrol"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "71L", relatedModels: "GS Series" },
      "GS460": { years: "2007-2012", fuelTypes: ["Petrol"], platform: "N Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "71L", relatedModels: "GS Series" },
      "RX350": { years: "2003-2024", fuelTypes: ["Petrol"], platform: "TNGA-K", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "72L", relatedModels: "RX Series" },
      "NX": { years: "2014-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "TNGA-K", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "56L", relatedModels: "None" },
      "UX": { years: "2018-2024", fuelTypes: ["Petrol", "Hybrid", "Electric"], platform: "TNGA-C", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "43L", relatedModels: "None" },
      "SC430": { years: "2001-2010", fuelTypes: ["Petrol"], platform: "Z Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "75L", relatedModels: "None" }
    }
  },
  "Land Rover": {
    group: "Tata Motors (JLR)",
    groupUrl: "/oem/tata-jlr/index.html",
    models: {
      "Discovery": { years: "1989-2024", fuelTypes: ["Petrol", "Diesel"], platform: "D7x Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop usually required", tankCapacity: "89L", relatedModels: "Discovery Sport" },
      "Discovery Sport": { years: "2014-2024", fuelTypes: ["Petrol", "Diesel"], platform: "PTA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Discovery" },
      "Range Rover": { years: "1970-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MLA Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "90L", relatedModels: "Range Rover Sport" },
      "Range Rover Sport": { years: "2005-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MLA Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "86L", relatedModels: "Range Rover" },
      "Range Rover Evoque": { years: "2011-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "PTA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "67L", relatedModels: "None" },
      "Range Rover Velar": { years: "2017-2024", fuelTypes: ["Petrol", "Diesel"], platform: "iQ Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "82L", relatedModels: "None" },
      "Defender": { years: "1983-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "D7x Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "90L", relatedModels: "None" },
      "Freelander": { years: "1997-2014", fuelTypes: ["Petrol", "Diesel"], platform: "LR-L Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "Discovery Sport" }
    }
  },
  "Jaguar": {
    group: "Tata Motors (JLR)",
    groupUrl: "/oem/tata-jlr/index.html",
    models: {
      "XF": { years: "2007-2024", fuelTypes: ["Petrol", "Diesel"], platform: "iQ Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "74L", relatedModels: "None" },
      "XE": { years: "2015-2024", fuelTypes: ["Petrol", "Diesel"], platform: "iQ Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "63L", relatedModels: "None" },
      "XJ": { years: "1968-2020", fuelTypes: ["Petrol", "Diesel"], platform: "iQ Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "82L", relatedModels: "XJ6, XJ8" },
      "F-Pace": { years: "2016-2024", fuelTypes: ["Petrol", "Diesel"], platform: "iQ Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "82L", relatedModels: "None" },
      "E-Pace": { years: "2017-2024", fuelTypes: ["Petrol", "Diesel"], platform: "D8 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "67L", relatedModels: "None" },
      "I-Pace": { years: "2018-2024", fuelTypes: ["Electric"], platform: "I-Pace Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "None" },
      "F-Type": { years: "2013-2024", fuelTypes: ["Petrol"], platform: "iQ Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "72L", relatedModels: "None" },
      "X-Type": { years: "2001-2009", fuelTypes: ["Petrol", "Diesel"], platform: "Ford CD132 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "61L", relatedModels: "None" },
      "S-Type": { years: "1999-2008", fuelTypes: ["Petrol", "Diesel"], platform: "DEW98 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "69L", relatedModels: "None" }
    }
  },
  "Tesla": {
    group: "Tesla Inc.",
    groupUrl: "/oem/tesla/index.html",
    models: {
      "Model 3": { years: "2017-2024", fuelTypes: ["Electric"], platform: "Tesla Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "None" },
      "Model Y": { years: "2020-2024", fuelTypes: ["Electric"], platform: "Tesla Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "Model 3" },
      "Model S": { years: "2012-2024", fuelTypes: ["Electric"], platform: "Tesla Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "None" },
      "Model X": { years: "2015-2024", fuelTypes: ["Electric"], platform: "Tesla Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "Model S" }
    }
  },
  "Volvo": {
    group: "Geely Holding Group",
    groupUrl: "/oem/geely-group/index.html",
    models: {
      "XC60": { years: "2008-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "SPA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "71L", relatedModels: "None" },
      "XC90": { years: "2002-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "SPA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "71L", relatedModels: "None" },
      "XC40": { years: "2017-2024", fuelTypes: ["Petrol", "Hybrid", "Electric"], platform: "CMA Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "54L/N/A", relatedModels: "EX40" },
      "XC70": { years: "2000-2016", fuelTypes: ["Petrol", "Diesel"], platform: "P3 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "V70" },
      "V70": { years: "1996-2016", fuelTypes: ["Petrol", "Diesel"], platform: "P3 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "XC70" },
      "V60": { years: "2010-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "SPA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "S60" },
      "S60": { years: "2000-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "SPA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "V60" },
      "S90": { years: "2016-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "SPA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "V90" },
      "C30": { years: "2006-2013", fuelTypes: ["Petrol", "Diesel"], platform: "P1 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "None" }
    }
  },
  "Polestar": {
    group: "Geely Holding Group",
    groupUrl: "/oem/geely-group/index.html",
    models: {
      "Polestar 2": { years: "2019-2024", fuelTypes: ["Electric"], platform: "CMA Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "Volvo XC40 Recharge" }
    }
  },
  "LDV": {
    group: "SAIC Motor",
    groupUrl: "/oem/chinese-manufacturers/index.html",
    models: {
      "T60": { years: "2017-2024", fuelTypes: ["Diesel"], platform: "SAIC Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "75L", relatedModels: "None" },
      "G10": { years: "2014-2024", fuelTypes: ["Petrol", "Diesel"], platform: "SAIC Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "75L", relatedModels: "None" },
      "V80": { years: "2011-2024", fuelTypes: ["Diesel"], platform: "SAIC Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "None" },
      "Deliver 9": { years: "2020-2024", fuelTypes: ["Diesel"], platform: "SAIC Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "80L", relatedModels: "None" }
    }
  },
  "MG": {
    group: "SAIC Motor",
    groupUrl: "/oem/chinese-manufacturers/index.html",
    models: {
      "MG3": { years: "2011-2024", fuelTypes: ["Petrol"], platform: "A Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "None" },
      "MG4": { years: "2022-2024", fuelTypes: ["Electric"], platform: "MSP Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "None" },
      "ZS": { years: "2017-2024", fuelTypes: ["Petrol", "Electric"], platform: "A Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "45L/N/A", relatedModels: "ZS EV" },
      "HS": { years: "2018-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "A Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "None" }
    }
  },
  "GWM": {
    group: "Great Wall Motor",
    groupUrl: "/oem/chinese-manufacturers/index.html",
    models: {
      "Cannon": { years: "2020-2024", fuelTypes: ["Diesel"], platform: "P71 Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "80L", relatedModels: "Ute" }
    }
  },
  "Haval": {
    group: "Great Wall Motor",
    groupUrl: "/oem/chinese-manufacturers/index.html",
    models: {
      "H6": { years: "2017-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "L Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "None" },
      "H2": { years: "2015-2020", fuelTypes: ["Petrol"], platform: "C Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "None" },
      "Jolion": { years: "2020-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "L Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "None" }
    }
  },
  "SsangYong": {
    group: "SsangYong Motor",
    groupUrl: "/oem/chinese-manufacturers/index.html",
    models: {
      "Korando": { years: "1996-2024", fuelTypes: ["Petrol", "Diesel"], platform: "K Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "55L", relatedModels: "None" },
      "Rexton": { years: "2001-2024", fuelTypes: ["Diesel"], platform: "Y400 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "77L", relatedModels: "G4 Rexton" },
      "Actyon": { years: "2005-2018", fuelTypes: ["Diesel"], platform: "Y200 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "65L", relatedModels: "Korando Sports" },
      "Musso": { years: "1993-2024", fuelTypes: ["Diesel"], platform: "Q200 Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "75L", relatedModels: "None" }
    }
  },
  "Peugeot": {
    group: "Stellantis",
    groupUrl: "/oem/stellantis/index.html",
    models: {
      "308": { years: "2007-2024", fuelTypes: ["Petrol", "Diesel"], platform: "EMP2 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "53L", relatedModels: "None" },
      "3008": { years: "2008-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "EMP2 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "53L", relatedModels: "5008" },
      "5008": { years: "2009-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "EMP2 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "56L", relatedModels: "3008" },
      "208": { years: "2012-2024", fuelTypes: ["Petrol", "Electric"], platform: "CMP Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "44L/N/A", relatedModels: "e-208" },
      "206": { years: "1998-2012", fuelTypes: ["Petrol", "Diesel"], platform: "PF1 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "None" },
      "Expert": { years: "1995-2024", fuelTypes: ["Diesel"], platform: "EMP2 Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "Traveller" },
      "Partner": { years: "1996-2024", fuelTypes: ["Petrol", "Diesel"], platform: "EMP2 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "50L", relatedModels: "Rifter" },
      "Boxer": { years: "1994-2024", fuelTypes: ["Diesel"], platform: "SEVEL Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "90L", relatedModels: "Fiat Ducato" }
    }
  },
  "Citroen": {
    group: "Stellantis",
    groupUrl: "/oem/stellantis/index.html",
    models: {
      "C3": { years: "2002-2024", fuelTypes: ["Petrol"], platform: "CMP Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "45L", relatedModels: "C3 Aircross" },
      "C4": { years: "2004-2024", fuelTypes: ["Petrol", "Diesel", "Electric"], platform: "CMP/EMP2 Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "50L/N/A", relatedModels: "e-C4" },
      "Dispatch": { years: "1994-2024", fuelTypes: ["Diesel"], platform: "EMP2 Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "Space Tourer" },
      "Berlingo": { years: "1996-2024", fuelTypes: ["Petrol", "Diesel", "Electric"], platform: "EMP2 Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "50L/N/A", relatedModels: "ë-Berlingo" }
    }
  },
  "Fiat": {
    group: "Stellantis",
    groupUrl: "/oem/stellantis/index.html",
    models: {
      "Ducato": { years: "1981-2024", fuelTypes: ["Diesel"], platform: "SEVEL Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "90L", relatedModels: "Peugeot Boxer, Citroen Relay" },
      "500": { years: "2007-2024", fuelTypes: ["Petrol", "Electric"], platform: "FCA Small Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "35L/N/A", relatedModels: "500e" },
      "Doblo": { years: "2000-2024", fuelTypes: ["Petrol", "Diesel"], platform: "SUSW Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Fiorino" },
      "Scudo": { years: "1995-2024", fuelTypes: ["Diesel"], platform: "EMP2 Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "70L", relatedModels: "Ulysse" }
    }
  },
  "Jeep": {
    group: "Stellantis",
    groupUrl: "/oem/stellantis/index.html",
    models: {
      "Wrangler": { years: "1986-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Body-on-frame", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "81L", relatedModels: "Gladiator" },
      "Grand Cherokee": { years: "1992-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "STLA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "93L", relatedModels: "None" },
      "Cherokee": { years: "1974-2024", fuelTypes: ["Petrol"], platform: "Compact Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "None" },
      "Renegade": { years: "2014-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "48L", relatedModels: "Fiat 500X" },
      "Compass": { years: "2006-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Small Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "51L", relatedModels: "None" }
    }
  },
  "Dodge": {
    group: "Stellantis",
    groupUrl: "/oem/stellantis/index.html",
    models: {
      "Journey": { years: "2008-2020", fuelTypes: ["Petrol"], platform: "JS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "78L", relatedModels: "None" },
      "Nitro": { years: "2007-2012", fuelTypes: ["Petrol", "Diesel"], platform: "KA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "74L", relatedModels: "Jeep Liberty" }
    }
  },
  "Alfa Romeo": {
    group: "Stellantis",
    groupUrl: "/oem/stellantis/index.html",
    models: {
      "Giulia": { years: "2015-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Giorgio Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "58L", relatedModels: "Quadrifoglio" },
      "Stelvio": { years: "2016-2024", fuelTypes: ["Petrol", "Diesel"], platform: "Giorgio Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "64L", relatedModels: "Quadrifoglio" },
      "Spider": { years: "1966-2010", fuelTypes: ["Petrol"], platform: "939 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "None" }
    }
  },
  "Renault": {
    group: "Renault-Nissan-Mitsubishi Alliance",
    groupUrl: "/oem/renault-nissan-mitsubishi/index.html",
    models: {
      "Megane": { years: "1995-2024", fuelTypes: ["Petrol", "Diesel", "Electric"], platform: "CMF-CD Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "50L/N/A", relatedModels: "Scenic" },
      "Scenic": { years: "1996-2024", fuelTypes: ["Petrol", "Diesel"], platform: "CMF-CD Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Megane" },
      "Koleos": { years: "2008-2024", fuelTypes: ["Petrol", "Diesel"], platform: "CMF-CD Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "60L", relatedModels: "Nissan X-Trail" },
      "Captur": { years: "2013-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "CMF-B Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "48L", relatedModels: "None" },
      "Master": { years: "1980-2024", fuelTypes: ["Diesel"], platform: "Master Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "100L", relatedModels: "Nissan NV400" },
      "Trafic": { years: "1980-2024", fuelTypes: ["Diesel"], platform: "Trafic Platform", antiSiphon: "Yes", accessPanel: "Varies", tankCapacity: "80L", relatedModels: "Nissan NV300" }
    }
  },
  "MINI": {
    group: "BMW Group",
    groupUrl: "/oem/bmw-group/index.html",
    models: {
      "Cooper": { years: "2000-2024", fuelTypes: ["Petrol", "Diesel", "Electric"], platform: "UKL Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "44L/N/A", relatedModels: "Cooper S, JCW" },
      "Countryman": { years: "2010-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "UKL Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "51L", relatedModels: "None" },
      "Clubman": { years: "2007-2024", fuelTypes: ["Petrol", "Diesel"], platform: "UKL Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "48L", relatedModels: "None" },
      "Hatch": { years: "2014-2024", fuelTypes: ["Petrol", "Diesel"], platform: "UKL Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "44L", relatedModels: "Cooper, One" }
    }
  },
  "Porsche": {
    group: "Volkswagen Group",
    groupUrl: "/oem/volkswagen-group/index.html",
    models: {
      "911": { years: "1964-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "911 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "64L", relatedModels: "Carrera, Turbo, GT3" },
      "Cayenne": { years: "2002-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "MLB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "90L", relatedModels: "VW Touareg" },
      "Macan": { years: "2014-2024", fuelTypes: ["Petrol", "Electric"], platform: "MLB/PPE Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "65L/N/A", relatedModels: "Audi Q5" },
      "Panamera": { years: "2009-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "MSB Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "None" },
      "993": { years: "1993-1998", fuelTypes: ["Petrol"], platform: "Air-cooled 911", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "74L", relatedModels: "911" },
      "Taycan": { years: "2019-2024", fuelTypes: ["Electric"], platform: "J1 Platform", antiSiphon: "N/A", accessPanel: "N/A", tankCapacity: "N/A (Electric)", relatedModels: "Audi e-tron GT" }
    }
  },
  "Maserati": {
    group: "Stellantis",
    groupUrl: "/oem/stellantis/index.html",
    models: {
      "Ghibli": { years: "2013-2024", fuelTypes: ["Petrol", "Diesel"], platform: "E-Segment Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "Quattroporte" },
      "Quattroporte": { years: "1963-2024", fuelTypes: ["Petrol", "Diesel"], platform: "E-Segment Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "Ghibli" },
      "Levante": { years: "2016-2024", fuelTypes: ["Petrol", "Diesel", "Hybrid"], platform: "Giorgio Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "80L", relatedModels: "None" },
      "Grecale": { years: "2022-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "Giorgio Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "66L", relatedModels: "Alfa Stelvio" }
    }
  },
  "Hino": {
    group: "Toyota Motor Corporation",
    groupUrl: "/oem/toyota-group/index.html",
    models: {
      "Dutro": { years: "1999-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Toyota Dyna" },
      "300 Series": { years: "1999-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Dutro" },
      "500 Series": { years: "1999-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Ranger" },
      "Ranger": { years: "1964-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "500 Series" },
      "FD": { years: "1985-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "None" },
      "Rainbow": { years: "1980-2024", fuelTypes: ["Diesel"], platform: "Bus Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Poncho" }
    }
  },
  "DAF": {
    group: "PACCAR",
    groupUrl: "/oem/index.html",
    models: {
      "LF": { years: "2001-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "None" },
      "CF": { years: "1997-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "None" },
      "XF": { years: "1997-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "None" }
    }
  },
  "Scania": {
    group: "Volkswagen Group",
    groupUrl: "/oem/index.html",
    models: {
      "R Series": { years: "2004-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies up to 1500L", relatedModels: "S Series" },
      "K Series": { years: "1990-2024", fuelTypes: ["Diesel"], platform: "Bus Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Irizar coaches" }
    }
  },
  "Chevrolet": {
    group: "General Motors",
    groupUrl: "/oem/general-motors/index.html",
    models: {
      "Silverado": { years: "1999-2024", fuelTypes: ["Petrol", "Diesel"], platform: "GMT T1XX Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "98L", relatedModels: "GMC Sierra" },
      "Colorado": { years: "2004-2024", fuelTypes: ["Petrol", "Diesel"], platform: "GMT31XX Platform", antiSiphon: "Yes", accessPanel: "No - Tank drop required", tankCapacity: "76L", relatedModels: "Holden Colorado, GMC Canyon" },
      "Suburban": { years: "1935-2024", fuelTypes: ["Petrol"], platform: "GMT T1XX Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "117L", relatedModels: "Tahoe" },
      "Impala": { years: "1958-2020", fuelTypes: ["Petrol"], platform: "Epsilon II Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "None" },
      "Camaro": { years: "1966-2024", fuelTypes: ["Petrol"], platform: "Alpha Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "72L", relatedModels: "None" }
    }
  },
  "Cadillac": {
    group: "General Motors",
    groupUrl: "/oem/general-motors/index.html",
    models: {
      "CTS": { years: "2002-2019", fuelTypes: ["Petrol"], platform: "Alpha/Sigma Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "68L", relatedModels: "CT5" },
      "Escalade": { years: "1999-2024", fuelTypes: ["Petrol"], platform: "GMT T1XX Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "91L", relatedModels: "Chevrolet Tahoe" }
    }
  },
  "Buick": {
    group: "General Motors",
    groupUrl: "/oem/general-motors/index.html",
    models: {
      "LaCrosse": { years: "2004-2019", fuelTypes: ["Petrol"], platform: "Epsilon II Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "72L", relatedModels: "None" }
    }
  },
  "RAM": {
    group: "Stellantis",
    groupUrl: "/oem/stellantis/index.html",
    models: {
      "1500": { years: "1981-2024", fuelTypes: ["Petrol", "Diesel"], platform: "DT Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "98L", relatedModels: "2500, 3500" }
    }
  },
  "Freightliner": {
    group: "Daimler Truck",
    groupUrl: "/oem/index.html",
    models: {
      "Cascadia": { years: "2007-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies up to 757L", relatedModels: "None" }
    }
  },
  "Daihatsu": {
    group: "Toyota Motor Corporation",
    groupUrl: "/oem/toyota-group/index.html",
    models: {
      "Sirion": { years: "1998-2024", fuelTypes: ["Petrol"], platform: "DNGA Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "36L", relatedModels: "None" },
      "Terios": { years: "1997-2017", fuelTypes: ["Petrol"], platform: "F Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "43L", relatedModels: "Toyota Rush" }
    }
  },
  "Saab": {
    group: "Defunct (formerly GM)",
    groupUrl: "/oem/index.html",
    models: {
      "9-3": { years: "1998-2014", fuelTypes: ["Petrol", "Diesel"], platform: "Epsilon Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "62L", relatedModels: "None" },
      "9-5": { years: "1997-2012", fuelTypes: ["Petrol", "Diesel"], platform: "Epsilon II Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "70L", relatedModels: "None" }
    }
  },
  "Smart": {
    group: "Mercedes-Benz Group / Geely",
    groupUrl: "/oem/mercedes-benz-group/index.html",
    models: {
      "ForTwo": { years: "1998-2024", fuelTypes: ["Petrol", "Electric"], platform: "Smart Platform", antiSiphon: "Yes/N/A", accessPanel: "Yes", tankCapacity: "28L/N/A", relatedModels: "ForFour" }
    }
  },
  "Western Star": {
    group: "Daimler Truck",
    groupUrl: "/oem/index.html",
    models: {
      "4864FX": { years: "2000-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "4900 Series" }
    }
  },
  "UD Trucks": {
    group: "Isuzu Motors",
    groupUrl: "/oem/isuzu/index.html",
    models: {
      "PK Series": { years: "2000-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Quon" },
      "Condor": { years: "1990-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Nissan Diesel" }
    }
  },
  "Fuso": {
    group: "Daimler Truck",
    groupUrl: "/oem/index.html",
    models: {
      "Canter": { years: "1963-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Mitsubishi Fuso" },
      "Fighter": { years: "1984-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "FK Series" },
      "Rosa": { years: "1985-2024", fuelTypes: ["Diesel"], platform: "Bus Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "Mitsubishi Rosa" },
      "Shogun": { years: "2000-2024", fuelTypes: ["Diesel"], platform: "Commercial", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "Varies", relatedModels: "None" }
    }
  },
  "Iveco": {
    group: "CNH Industrial",
    groupUrl: "/oem/index.html",
    models: {
      "Daily": { years: "1978-2024", fuelTypes: ["Diesel"], platform: "Daily Platform", antiSiphon: "Yes", accessPanel: "No", tankCapacity: "90L", relatedModels: "None" }
    }
  },
  "Ferrari": {
    group: "Ferrari",
    groupUrl: "/oem/index.html",
    models: {
      "488": { years: "2015-2020", fuelTypes: ["Petrol"], platform: "Ferrari Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "78L", relatedModels: "F8 Tributo" }
    }
  },
  "Lamborghini": {
    group: "Volkswagen Group",
    groupUrl: "/oem/volkswagen-group/index.html",
    models: {
      "Gallardo": { years: "2003-2013", fuelTypes: ["Petrol"], platform: "Audi R8 Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "90L", relatedModels: "Huracan" },
      "Huracan": { years: "2014-2024", fuelTypes: ["Petrol"], platform: "MSS Platform", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "83L", relatedModels: "Audi R8" },
      "Urus": { years: "2018-2024", fuelTypes: ["Petrol", "Hybrid"], platform: "MLB Evo", antiSiphon: "Yes", accessPanel: "Yes", tankCapacity: "85L", relatedModels: "Audi Q8, Bentley Bentayga" }
    }
  }
};

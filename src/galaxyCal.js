// Planet Age Formula 
const planetYears = {
  mercuryAge: 0.24,
  venusAge: 0.62,
  marsAge: 1.88,
  jupiterAge: 11.86
};

// Life Expectancy 
const lifeExpectancy = {
  marsLimit: 3,
  mercuryLimit: 7,
  venusLimit: 9,
  jupiterLimit: 12
};

// Main 
export class galaxyCal {
  constructor(age, status) {
    this.age = age;
    this.status = status;
  }


  // Mercury Planet
  ConvertMercuryAge() {
    return (this.age / planetYears.mercuryAge.toFixed(2));
  }

  MercuryAgeLimit() {
    return (this.age * lifeExpectancy.mercuryLimit / planetYears.mercuryAge.toFixed(2));
  }

  // Mars Planet
  ConvertMarsAge() {
    return (this.age / planetYears.marsAge.toFixed(2));
  }

  MarsAgeLimit() {
    return (this.age * lifeExpectancy.marsLimit / planetYears.marsAge.toFixed(2));
  }

  // Venus Limit
  ConvertMarsAge() {
    return (this.age / planetYears.venusAge.toFixed(2));
  }

  VenusAgeLimit() {
    return (this.age * lifeExpectancy.venusLimit / planetYears.venusAge.toFixed(2));
  }

  //   Jupiter Planet
  ConvertJupiterAge() {
    return (this.age / planetYears.jupiterAge.toFixed(2));
  }

  JupiterAgeLimit() {
    return (this.age * lifeExpectancy.jupiterLimit / planetYears.jupiterAge.toFixed(2));
  }

  //  Years Left
  PlanetYearsLeft() {
    var earthAge = 75;
    if ((this.MercuryAgeLimit() || this.MarsAgeLimit() || this.JupiterAgeLimit() || this.VenusAgeLimit() <= earthAge))
      return true;
    else {
      return false;
    }

  }

}
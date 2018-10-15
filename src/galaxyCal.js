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
  constructor(age) {
    this.age = age;
  }


  // Mercury Planet
  ConvertMercuryAge() {
    return Math.floor((this.age / planetYears.mercuryAge));
  }

  MercuryAgeLimit() {
    return Math.floor((this.age * lifeExpectancy.mercuryLimit / planetYears.mercuryAge));
  }

  // Mars Planet
  ConvertMarsAge() {
    return Math.floor((this.age / planetYears.marsAge));
  }

  MarsAgeLimit() {
    return Math.floor((this.age * lifeExpectancy.marsLimit / planetYears.marsAge));
  }

  // Venus Limit
  ConvertMarsAge() {
    return Math.floor((this.age / planetYears.venusAge));
  }

  VenusAgeLimit() {
    return Math.floor((this.age * lifeExpectancy.venusLimit / planetYears.venusAge));
  }

  //   Jupiter Planet
  ConvertJupiterAge() {
    return Math.floor((this.age / planetYears.jupiterAge));
  }

  JupiterAgeLimit() {
    return Math.floor((this.age * lifeExpectancy.jupiterLimit / planetYears.jupiterAge));
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
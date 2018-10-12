// Planet Age Formula 
const planetYears = {
    mercuryAge: 0.24,
    venusAge: 0.62,
    marsAge: 1.88,
    jupiterAge: 11.86
  };

// Life Expectancy Option
const lifeExpLimit = {
    healthy: 80,
    unhealthy: 40
};

export const lifeExpStatus = {
    healthy: 1,
    unhealthy: 2
}

// Main 
export class galaxyCal {
    constructor(age, status) {
        this.age = age;
        this.status = status;
    }

// Check Life Expectancy
CheckLifeExpectancy () {
    if (this.status === lifeExpStatus.healthy) {
        return  lifeExpLimit.healthy;
    }
    else {
        return lifeExpLimit.unhealthy;
    }
}

get lifeExpectancy(){
    return this.lifeExpectancy();
}

// Mercury Planet
ConvertMercuryAge() {
    return (this.age / planetYears.mercuryAge.toFixed(2));
  }

get MercuryAge() {
    return this.ConvertMercuryAge();
  }

get MercuryLifeExp() {
    return this.MercuryLimit();
  }

get MercuryLimit() {
    return Math.abs(this.lifeExpectancy);
  }

MercuryAgeLimit() {
    return (this.lifeExpectancy / planetYears.mercuryAge - this.MercuryAge.toFixed(2));
  }

// Mars Planet
ConvertMarsAge() {
    return (this.age / planetYears.marsAge.toFixed(2));
  }

get MarsAge() {
    return this.ConvertMarsAge();
  }

get MarsLifeExp() {
    return this.MarsLimit();
  }

get MarsLimit() {
    return Math.abs(this.lifeExpectancy);
  }

MarsAgeLimit() {
    return (this.lifeExpectancy / planetYears.MarsAge - this.MarsAge.toFixed(2));
  }

// Venus Limit
ConvertMarsAge() {
    return (this.age / planetYears.venusAge.toFixed(2));
  }

get VenusAge() {
    return this.ConvertVenusAge();
  }

get VenusLifeExp() {
    return this.VenusLimit();
  }

get VenusLimit() {
    return Math.abs(this.lifeExpectancy);
  }

VenusAgeLimit() {
    return (this.lifeExpectancy / planetYears.venusAge - this.VenusAge.toFixed(2));
  }

//   Jupiter Planet
ConvertJupiterAge() {
    return (this.age / planetYears.jupiterAge.toFixed(2));
  }

get JupiterAge() {
    return this.ConvertJupiterAge();
  }

get JupiterLifeExp() {
    return this.JupiterLimit();
  }

get JupiterLimit() {
    return Math.abs(this.lifeExpectancy);
  }

JupiterAgeLimit() {
    return (this.lifeExpectancy / planetYears.jupiterAge - this.JupiterAge.toFixed(2));
  }


}
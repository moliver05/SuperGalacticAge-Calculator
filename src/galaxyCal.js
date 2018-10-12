const planetYears = {
    mercuryAge: 0.24,
    venusAge: 0.62,
    marsAge: 1.88,
    jupiterAge: 11.86
  };

const lifeExpLimit = {
    healthy: 80,
    unhealthy: 40
};

export const lifeExpStatus = {
    healthy: yes,
    unhealthy: no
}


export class galaxyCal {
    constructor(age, status) {
        this.age = age;
        this.status = status;
    }


get lifeExpectancy(){
    return this.lifeExpectancy();
}

CheckLifeExpectancy () {
    if (this.status === lifeExpStatus.healthy) {
        return  lifeExpLimit.healthy;
    }
    else {
        return lifeExpLimit.unhealthy;
    }
}

ConvertMercuryAge() {
    return (this.age / planetYears.mercuryAge);
  }

get mercuryAge() {
    return this.ConvertMercuryAge();
  }

ConvertMarsAge() {
    return (this.age / planetYears.marsAge);
  }

get marsAge() {
    return this.ConvertMarsAge();
  }

ConvertVenusAge() {
    return (this.age / planetYears.venusAge);
  }

get venusAge() {
    return this.ConvertVenusAge();
  }

ConvertJupiterAge() {
    return (this.age / planetYears.jupiterAge);
  }

get jupiterAge() {
    return this.ConvertJupiterAge();
  }

}
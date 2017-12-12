export class Training {
  static nextId = 0;

  static trainings: Training[] = [
    new Training(
      null,
      'Hercules',
      'happy',
      new Date(1970, 1, 25),
      'http://www.imdb.com/title/tt0065832/',
      325
    ),
    new Training(1, 'Mr. Nice',  'happy'),
    new Training(2, 'Narco',     'sad' ),
    new Training(3, 'Windstorm', 'confused' ),
    new Training(4, 'Magneta')
  ];


  constructor(
    public id?: number,
    public name?: string,
    public emotion?: string,
    public birthdate?: Date,
    public url?: string,
    public rate = 100,
    ) {
    this.id = id ? id : Training.nextId++;
  }

  clone(): Training {
    return Object.assign(new Training(), this);
  }
}

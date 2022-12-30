import { Injectable } from '@angular/core';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
  age:string;
  state:string;
  country:string;
  mobile:string;
}

@Injectable()
export class DataService {
  private readonly colors = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
  ];
  private readonly names = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth'
  ];

  constructor() {}

  createNewUser(id: number): UserData {
    const name =
      this.names[this.getRandomArrayIndex(this.names.length)] +
      ' ' +
      this.names[this.getRandomArrayIndex(this.names.length)].charAt(0) +
      '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: this.colors[this.getRandomArrayIndex(this.colors.length)],
      age: this.colors[this.getRandomArrayIndex(this.colors.length)],
      state: this.colors[this.getRandomArrayIndex(this.colors.length)],
      country: this.colors[this.getRandomArrayIndex(this.colors.length)],
      mobile: Math.round(Math.random() * 100).toString(),
    };
  }

  create100Users(): UserData[] {
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) {
      users.push(this.createNewUser(i));
    }
    return users;
  }

  private getRandomArrayIndex(length: number): number {
    return Math.round(Math.random() * (length - 1));
  }
}

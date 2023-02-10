import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface Annonce {
  id: number;
  image: string;
  titre: string;
  prix: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false
    }
  ];

  public annonces: Annonce[] = [
    {
      id: 0,
      image: "",
      titre: "Très bel appartement T3 - vue moselle",
      prix: 250000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices congue porta. Fusce in arcu a purus tempus congue. Mauris at imperdiet diam, quis varius dolor. Nullam rhoncus diam lectus, eu elementum urna tincidunt sed. Nunc feugiat et augue at condimentum. Maecenas pharetra, neque vel ultrices finibus, dui nisi facilisis mauris, ac suscipit nulla turpis ut orci. Phasellus iaculis elit elit, vel commodo velit pellentesque vitae"
    },
    {
      id: 1,
      image: "",
      titre: "Maison familiale T5 idéal famille, quartier calme",
      prix: 500000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices congue porta. Fusce in arcu a purus tempus congue. Mauris at imperdiet diam, quis varius dolor. Nullam rhoncus diam lectus, eu elementum urna tincidunt sed. Nunc feugiat et augue at condimentum. Maecenas pharetra, neque vel ultrices finibus, dui nisi facilisis mauris, ac suscipit nulla turpis ut orci. Phasellus iaculis elit elit, vel commodo velit pellentesque vitae"
    },
    {
      id: 2,
      image: "",
      titre: "Investissement locatif : immeuble de rapport - 18 bails en cours",
      prix: 2500000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices congue porta. Fusce in arcu a purus tempus congue. Mauris at imperdiet diam, quis varius dolor. Nullam rhoncus diam lectus, eu elementum urna tincidunt sed. Nunc feugiat et augue at condimentum. Maecenas pharetra, neque vel ultrices finibus, dui nisi facilisis mauris, ac suscipit nulla turpis ut orci. Phasellus iaculis elit elit, vel commodo velit pellentesque vitae"
    }
  ]

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getAnnonces(): Annonce[] {
      return this.annonces;
  }

  public getAnnonceById(id: number): Annonce {
    return this.annonces[id];
  }
}

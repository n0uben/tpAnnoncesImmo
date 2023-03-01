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
  superficie: number;
  nbPieces: number;
  chauffage: string;
  ascenseur: boolean;
  piscine: boolean;
  jardin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public annonces: Annonce[] = [
    {
      id: 0,
      image: "../assets/img/appartement.jpg",
      titre: "Très bel appartement T3 - vue moselle",
      prix: 250000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices congue porta. Fusce in arcu a purus tempus congue. Mauris at imperdiet diam, quis varius dolor. Nullam rhoncus diam lectus, eu elementum urna tincidunt sed. Nunc feugiat et augue at condimentum. Maecenas pharetra, neque vel ultrices finibus, dui nisi facilisis mauris, ac suscipit nulla turpis ut orci. Phasellus iaculis elit elit, vel commodo velit pellentesque vitae",
      superficie: 120,
      nbPieces: 3,
      chauffage: "collectif",
      ascenseur: true,
      piscine: false,
      jardin: false
    },
    {
      id: 1,
      image: "../assets/img/maison.jpg",
      titre: "Maison familiale T5 idéal famille, quartier calme",
      prix: 500000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices congue porta. Fusce in arcu a purus tempus congue. Mauris at imperdiet diam, quis varius dolor. Nullam rhoncus diam lectus, eu elementum urna tincidunt sed. Nunc feugiat et augue at condimentum. Maecenas pharetra, neque vel ultrices finibus, dui nisi facilisis mauris, ac suscipit nulla turpis ut orci. Phasellus iaculis elit elit, vel commodo velit pellentesque vitae",
      superficie: 120,
      nbPieces: 5,
      chauffage: "individuel gaz",
      ascenseur: false,
      piscine: true,
      jardin: true
    },
    {
      id: 2,
      image: "../assets/img/immeuble.jpg",
      titre: "Investissement locatif : immeuble de rapport - 18 bails en cours",
      prix: 2500000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices congue porta. Fusce in arcu a purus tempus congue. Mauris at imperdiet diam, quis varius dolor. Nullam rhoncus diam lectus, eu elementum urna tincidunt sed. Nunc feugiat et augue at condimentum. Maecenas pharetra, neque vel ultrices finibus, dui nisi facilisis mauris, ac suscipit nulla turpis ut orci. Phasellus iaculis elit elit, vel commodo velit pellentesque vitae",
      superficie: 1200,
      nbPieces: 34,
      chauffage: "collectif fioul",
      ascenseur: true,
      piscine: false,
      jardin: false
    },
    {
      id: 3,
      image: "../assets/img/hotelparticulier.jpg",
      titre: "Magnifique Hotel particulier, tout confort",
      prix: 12000000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices congue porta. Fusce in arcu a purus tempus congue. Mauris at imperdiet diam, quis varius dolor. Nullam rhoncus diam lectus, eu elementum urna tincidunt sed. Nunc feugiat et augue at condimentum. Maecenas pharetra, neque vel ultrices finibus, dui nisi facilisis mauris, ac suscipit nulla turpis ut orci. Phasellus iaculis elit elit, vel commodo velit pellentesque vitae",
      superficie: 600,
      nbPieces: 16,
      chauffage: "individuel gaz",
      ascenseur: true,
      piscine: true,
      jardin: true
    }
  ]

  constructor() { }

  public getAnnonces(): Annonce[] {
      return this.annonces;
  }

  public getAnnonceById(id: number): Annonce {
    return this.annonces[id];
  }
}

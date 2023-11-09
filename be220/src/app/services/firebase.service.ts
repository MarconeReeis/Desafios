import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getCollectionWithMetadata(collectionName: string) {
    return this.firestore.collection(collectionName).snapshotChanges()
      .pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        })),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Deu erro!:', error); 
    return throwError(() => new Error('Erro ao comunicar com o servidor'));
  }
}

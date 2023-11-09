import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  getCollectionData(collectionName: string): Observable<any[]> {
    return this.firestore.collection(collectionName).valueChanges({ idField: 'id' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    // Aqui você pode adicionar a lógica de log de erros ou outro processamento necessário
    console.error('Deu erro!:', error); // Log para o console do navegador
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { map } from "rxjs/operators";

import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EscritorioGuard implements CanActivate {
    /**
     * Escritorio Guard
     */
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
    }

    canActivate(next: ActivatedRouteSnapshot) {
        const escritorio: number = Number(next.paramMap.get('id'));

        if (escritorio <= 0)
        {
            this.router.navigate(['/home']);
            return false;
        }
  
        return true;
        /*return this.http.post(`${environment.apiURL}/asignar-escritorio`, { escritorio })
                   .pipe(
                        map((resp) => {
                            if (resp !== 'OK') {
                                alert('Escritorio ya se encuentra activo en otro lugar');
                                return false;
                            }

                            return true;
                        })
                   );*/
    }
}
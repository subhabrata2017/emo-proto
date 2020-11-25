import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../service/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    
    user: User;
    parentName: string = undefined;
    constructor( private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router ) { }
    
    ngOnInit() {
        this.activatedRoute.params.subscribe(val => {
            if( val && val.userId ) {
                this.user = this.userService.getUser( val.userId );
                if( this.user.parentId ) {
                    this.parentName = this.getParentName( this.user.parentId );        
                } else {
                    this.parentName = undefined;
                }                
            }
        });
    }
    
    showChildren() {
        if( this.user ) {            
            this.router.navigate([ 'child-tree/'+ this.user.id ]);
        }
    }
    
    getParentName( parentId: string ):string {        
        return this.userService.getUser( parentId ).name;
    }
    
    addChild() {
        this.router.navigate([ 'add-user/'+ this.user.id ]);
    }
    
    logout() {
        this.router.navigate([ 'login/' ]);
    }
    
    getUserPost( userId: string ): string {
        let childUserCount = 0;
        childUserCount = this.userService.getChildUserCount( userId );
        if ( childUserCount == 5 || childUserCount > 5 ) {
            return "BCO";
        } else {
            return "JCO";
        }
    }

}

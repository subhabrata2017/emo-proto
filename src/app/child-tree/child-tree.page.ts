import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../service/user.model';


@Component({
    selector: 'app-child-tree',
    templateUrl: './child-tree.page.html',
    styleUrls: ['./child-tree.page.scss'],
})
export class ChildTreePage implements OnInit {

    user: User;
    childUsers: User[] = [];
    constructor( private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(val => {
            if( val && val.userId ) {
                this.user = this.userService.getUser( val.userId );
                this.childUsers = this.userService.getChildUsers( val.userId );
            }
        });
    }
    
    backToPrevious() {
        this.router.navigate( ['/home/'+ this.user.id ] );
    }

}

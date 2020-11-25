import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../service/user.model';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    
    userEmail: string = "";
    userPassword: string = "";
    
    constructor( private userService: UserService, private alertController: AlertController, private router: Router ) { }

    ngOnInit() {
        localStorage.setItem( "emoinu-data", JSON.stringify(  this.userService.getAllUsers() ) );
    }
    
    async loginUser() {
        let user: User = this.userService.getUser( this.userEmail );
        if( user ) {
            if( user.password == this.userPassword ) {
                this.router.navigate( ['/home/'+ user.id ] );
            } else {
                const alert = await this.alertController.create({                    
                    header: 'Login Error',                    
                    message: 'Password is incorrect',
                    buttons: ['OK']
                });
                await alert.present();
            }
        }
    }

}

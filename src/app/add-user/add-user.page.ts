import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../service/user.model';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.page.html',
	styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
	userId: string = "";
	newUserName: string = "";
	constructor( private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private alertController: AlertController ) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(val => {
            if( val && val.userId ) {
                this.userId = val.userId;             
            }
        });
	}
	
	getNewUserId(): string {
		return (parseInt ( this.userService.getLastUserId() ) + 1).toString();
	}
	
	getParentName(): string {		
		return this.userService.getUser( this.userId ).name;
	}
	
	backToPrevious() {
        this.router.navigate( ['/home/'+ this.userId ] );
	}
	
	async addUser() {
		let newUser:User = new User();
		let users: User[] = JSON.parse( localStorage.getItem( "emoinu-data" ) );		
		newUser.id = this.getNewUserId();
		newUser.name = this.newUserName;
		newUser.post = "JCO";
		newUser.parentId = this.userId;
		newUser.password = "welcome";
		
		users.push( newUser );
		
		localStorage.removeItem( "emoinu-data" );
		localStorage.setItem( "emoinu-data", JSON.stringify( users ) );
		
		const alert = await this.alertController.create({                    
			header: 'Success',                    
			message: 'User '+this.newUserName+' Successfully added',
			buttons: [{
				text: 'Okay',
				handler: () => {
					this.backToPrevious();
				}
			}]
		});
		await alert.present();
	}

}

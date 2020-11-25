import { Injectable } from '@angular/core';
import { User } from './user.model'

@Injectable({
    providedIn: 'root'
})
export class UserService {    
    constructor() { }

    private users: User[] = [
        {
            id: '1',
            name: 'Dummy User 1',
            password: 'welcome',
            post: 'JCO',
            parentId: ''
        }, {
            id: '2',
            name: 'Dummy User 2',
            password: 'welcome',
            post: 'JCO',
            parentId: '1'
        }, {
            id: '3',
            name: 'Dummy User 3',
            password: 'welcome',
            post: 'JCO',
            parentId: '1'
        }, {
            id: '4',
            name: 'Dummy User 4',
            password: 'welcome',
            post: 'JCO',
            parentId: '2'
        }, {
            id: '5',
            name: 'Dummy User 5',
            password: 'welcome',
            post: 'JCO',
            parentId: '2'
        }, {
            id: '6',
            name: 'Dummy User 6',
            password: 'welcome',
            post: 'JCO',
            parentId: '2'
        }, {
            id: '7',
            name: 'Dummy User 7',
            password: 'welcome',
            post: 'JCO',
            parentId: '2'
        }, {
            id: '8',
            name: 'Dummy User 8',
            password: 'welcome',
            post: 'JCO',
            parentId: '2'
        }
    ]

    getUser(userId: string): User {
        return {
            ...this.users.find(user => {
                return user.id == userId;
            })
        };
    }

    getChildUsers(parentId: string): User[] {
        let childList: User[] = [];
        let storedUsers: User[] = JSON.parse( localStorage.getItem( "emoinu-data" ) );
        for (let eachUser of storedUsers) {
            if (eachUser.parentId && eachUser.parentId == parentId) {
                childList.push(eachUser);
            }
        }
        return childList;
    }
    
    getChildUserCount( parentId: string ): number {
        let storedUsers: User[] = JSON.parse( localStorage.getItem( "emoinu-data" ) );
        let count: number = 0;
        for (let eachUser of storedUsers) {
            if (eachUser.parentId && eachUser.parentId == parentId) {
                count++
            }
        }
        return count;
    }
    
    getLastUserId(): string {         
        return this.users[ (this.users.length - 1) ].id;
    }
    
    getAllUsers(): User[] {
        return this.users;
    }
}

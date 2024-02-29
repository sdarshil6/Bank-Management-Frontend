export class DTOCustomerAdd{

        firstName?: string
        lastName?: string;
        dateOfBirth?: Date;
        gender?: string;
        address?: string;
        city?: string;
        state?: string;
        country?: string ;
        phoneNumber?: string;
        postalCode?: string;
        emailAddress?: string;
        martitalStatus?: string;

        constructor();

        constructor(firstName?:string, lastName?:string, gender?: string, address?: string, city?: string, state?: string, country?: string, phoneNumber?: string, postalCode?:string, emailAddress?:string, maritalStatus?: string );

        constructor(firstName?:string, lastName?:string, gender?: string, address?: string, city?: string, state?: string, country?: string, phoneNumber?: string, postalCode?:string, emailAddress?:string, maritalStatus?: string ){
                this.firstName = firstName;
                this.lastName = lastName;
                this.dateOfBirth = new Date();
                this.gender = gender;
                this.address = address;
                this.city = city;
                this.state = state;
                this.country = country;
                this.phoneNumber = phoneNumber;
                this.postalCode = postalCode;
                this.emailAddress = emailAddress;
                this.martitalStatus = maritalStatus;
        }

        

        

}
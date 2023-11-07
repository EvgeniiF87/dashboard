

export interface UserModel  {
  id: string;
  name: string;
  email: string;
}


export class USerEntity {
  id: string | null;
  name: string;
  email: string;

  constructor({  name, email }:{ name: string, email: string }) {
      this.id = null
      this.name = name
      this.email = email
      
  }
  get userCreateFields(): { name:string, email: string }  {
    return {
      name: this.name,
      email: this.email,
    };
  }
}

export class UserEntity {
  email:string;
  username: string;
  avatarUrl: string;


  constructor(email: string, username: string, avatarUrl: string) {
    this.email = email;
    this.username = username;
    this.avatarUrl = avatarUrl;
  }

  setUsername(name: string) {
    this.username = name;
  }

  setAvatarUrl(url: string) {
    this.avatarUrl = url;
  }
}

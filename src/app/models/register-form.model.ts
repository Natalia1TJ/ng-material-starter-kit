export interface RegisterFormModel {
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly name: {
    readonly firstname: string;
    readonly lastname: string;}
  readonly address: {
    readonly city: string;
    readonly street: string;
    readonly number: string;
    readonly zipcode: string;}
  readonly phone: string;
}

export interface User {
  id:string;
  name:string;
  email:string;
  // isDone:boolean;
  // category:string;
}

export interface UserMutation {
  name:string;
  email:string
  isDone:boolean;
  category:string;
}
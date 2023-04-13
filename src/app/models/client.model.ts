export interface Client {
  name: string;
  link: string;
  image: {
    width: number;
    height: number;
    src: string;
    srcset: string;
  };
}

export type FlowerAtCart = {
  id: number;
  name: string;
  price: string;
  size: string;
  src: string;
  category: string;
};

export interface FlowersAtCartState {
  flowersAtCart: FlowerAtCart[];
  status: "success" | "loading" | "failed";
}
export type AlreadyAtCart = {
  id: number;
  price: string;
  size: string;
};

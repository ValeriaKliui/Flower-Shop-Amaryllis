export type Flower = {
  id: number;
  name: string;
  price: string[];
  size: string[];
  src: string;
  category: string;
};

export interface FlowersState {
  flowers: Flower[];
  status: "success" | "loading" | "failed";
}

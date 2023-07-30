export type Flower = {
  id: number;
  name: string;
  price: string[];
  size: string[];
  src: string;
  category: string;
  amount?: number;
};

export interface FlowersState {
  flowers: Flower[];
  status: 'success' | 'loading' | 'failed';
}
export type params = {
  category?: string;
  _sort?: string;
  _order?: string;
};

export type last = {
  id: string;
  name: string;
  score: number;
  same_name: number;
};
export type the_last = last[];

export class duplication {
  count: number;
}

class return_DTO {
  id: string;
  name: string;
  score: number;
  same_name: number;
  sec: number;
}

export type _return = return_DTO[];

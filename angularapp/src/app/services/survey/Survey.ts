import { Response } from '../response/Response';

export interface Survey {
  question: string;
  url: string;
  responses: Response[];
}

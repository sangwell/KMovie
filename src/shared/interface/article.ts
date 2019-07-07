import {DisplayType} from './enum';

export interface Article {
  Id?: string;
  Title?: string;
  Author?: string;
  ImageSrc?: string;
  DisplayType?: DisplayType;
  CreateTime?: string;
}

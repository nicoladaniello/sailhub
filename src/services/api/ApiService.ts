/**
 * ApiService.ts
 * This is an abstract class that provides an API call interface.
 * It enables implementation of param types for each method.
 *
 * @author Nicola D'Aniello
 * nicoladaniello.github.io
 */

import HttpService, { HTTPResonse } from "./httpService";
import { ApiParams } from "./types/ApiParams";
import config from "../../config.json";

const apiEndPoint = config.apiEndPoint;

export default abstract class ApiService<
  T,
  L extends ApiParams,
  G extends ApiParams,
  C extends ApiParams,
  U extends ApiParams
> {
  private endPoint: string;

  constructor(resource: string) {
    this.endPoint = `${apiEndPoint}/${resource}`;
  }

  list(params?: L): Promise<HTTPResonse<T[]>> {
    let uri = this.endPoint;
    if (params) uri += this._serialize(params);
    return HttpService.get<T[]>(uri);
  }

  get(id: string, params?: G): Promise<HTTPResonse<T>> {
    let uri = `${this.endPoint}/${id}`;
    if (params) uri += this._serialize(params);
    return HttpService.get(`${uri}${params}`);
  }

  create(data: T, params?: C): Promise<HTTPResonse<T>> {
    let uri = this.endPoint;
    if (params) uri += this._serialize(params);
    return HttpService.post(uri, data);
  }

  update(id: string, data: T, params?: U): Promise<HTTPResonse<T>> {
    let uri = `${this.endPoint}/${id}`;
    if (params) uri += this._serialize(params);
    return HttpService.post(`${uri}${params}`, data);
  }

  delete(id: string): Promise<HTTPResonse<T[]>> {
    return HttpService.delete(`${this.endPoint}/${id}`);
  }

  private _serialize(params: ApiParams): string {
    let str = [];

    for (let p in params) {
      let v = params[p];
      if (v === undefined) continue;
      if (Array.isArray(v)) v = v.join(",");
      if (v instanceof Date) v = v.toISOString();
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(v));
    }
    return "?" + str.join("&");
  }
}

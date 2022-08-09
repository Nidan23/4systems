import {SortColumnName, Sorting} from "../type/sorting";

export interface GetUsersRequestParams {
  offset: number,
  limit: number,
  sortDirection: Sorting,
  sortColumnName: SortColumnName,
}

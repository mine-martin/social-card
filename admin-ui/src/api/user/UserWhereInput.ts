import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  lastName?: StringNullableFilter;
  Martin?: StringNullableFilter;
  username?: StringFilter;
};

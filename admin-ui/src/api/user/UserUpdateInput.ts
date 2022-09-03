export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  roles?: Array<string>;
  username?: string;
};

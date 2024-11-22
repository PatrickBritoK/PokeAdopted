import EnumType from "../enum/enumType";

type TypePoke = {
  id: number;
  name: string;
  type: EnumType;
  adopted: boolean;
  age: number;
  birthDate: Date;
};

export default TypePoke;
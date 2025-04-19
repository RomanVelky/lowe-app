export type Database = {
  public: {
    Tables: {
      instruments: {
        Row: {
          id: number;
          name: string;
        };
      };
      wages: {
        id: number;
        name: string;
        wage: number;
      };
    };
  };
};

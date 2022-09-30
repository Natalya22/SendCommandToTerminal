export class Command {
  constructor(
    public id: number,
    public name: string,
    public parameter_name1?: string,
    public parameter_name2?: string,
    public parameter_name3?: string,
    public parameter_default_value1?: number,
    public parameter_default_value2?: number,
    public parameter_default_value3?: number
  ) {}
}

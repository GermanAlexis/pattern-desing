import { COLORS } from "../helpers/colors";

class QueryBuilder {
  private readonly table: string;
  private fields: string[] = [];
  private readonly conditions: string[] = [];
  private readonly orderFields: string[] = [];
  private limitCount?: number;

  constructor(table: string) {
    this.table = table;
  }

  select(...fields: string[]): this {
    this.fields = fields;
    return this;
  }

  where(condition: string): this {
    this.conditions.push(condition);
    return this;
  }

  orderBy(field: string, direction: "ASC" | "DESC" = "ASC"): this {
    this.orderFields.push(`${field} ${direction}`);
    return this;
  }

  limit(count: number): this {
    this.limitCount = count;
    return this;
  }

  execute(): string {
    // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
    let limit = this.limitCount ? ` limit ${this.limitCount}` : "";
    let conditions = this.conditions.join(" AND ");
    let fieldsQuery = this.fields.join(", ");
    let ordersBys =
      this.orderFields.length > 0
        ? `order by ${this.orderFields.join(", ")}`
        : "";
    const query = `Select ${fieldsQuery} from ${this.table} where ${conditions} ${ordersBys}${limit};`;
    return query;
  }
}

function main() {
  const usersQuery = new QueryBuilder("users")
    .select("id", "name", "email")
    .where("age > 18")
    .where("age < 19")
    .where("country = 'Cri'") // Esto debe de hacer una condición AND
    .orderBy("name", "ASC")
    .orderBy("id", "ASC")
    .execute();

  console.log("%cConsulta:\n", COLORS.red);
  console.log(usersQuery);
}

main();

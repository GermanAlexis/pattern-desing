import { COLORS } from "../helpers/colors.ts";

interface Report {
  generate(): void;
}

class SalesReport implements Report {
  generate(): void {
    console.log("Generanding Sales Report");
  }
}

class InventoryReport implements Report {
  generate(): void {
    console.log("Generanding Inventory Report");
  }
}

abstract class ReportFactory {
  abstract createReport(): Report;

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

class SalesReportFactory extends ReportFactory {
  createReport(): Report {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  createReport(): Report {
    return new InventoryReport();
  }
}

// 5. Código Cliente para Probar

function main() {
  let reportFactory: ReportFactory;

  console.log("¿Qué tipo de reporte deseas? %c(sales/inventory)", COLORS.red);
  const reportType = prompt("Escribe tu respuesta aquí:");

  if (reportType === "sales") {
    reportFactory = new SalesReportFactory();
  } else {
    reportFactory = new InventoryReportFactory();
  }

  reportFactory.generateReport();
}

main();

import { DocumentProcessingFacade } from "./facades/DocumentProcessingFacade";
import { FileType } from "./models/Document/FileType";

function main(): void {
  const facade = new DocumentProcessingFacade();

  facade.processDocument("contrato_servicios_2024.pdf", FileType.ContratoLegal, {
    author: "Juan Pérez",
    version: "2.1.0",
    FileSize: 2
  });
  facade.getReport();
}

main();

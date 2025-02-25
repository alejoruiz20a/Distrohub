export class Formatter {
    static formatDate(date: string | Date) {
      return new Date(date).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  }
  
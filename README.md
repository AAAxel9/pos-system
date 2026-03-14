# Sistema de punto de venta (POS)

Sistema robusto diseñado para la gestión de inventario y punto de venta (POS) orientado a comercios minoristas. Permite la resolución de problemas de gestión al mantener un registro histórico de ventas y control de stock automático.

## User Story (Funcionalidades principales)

- **Control de stock:** Automatización de inventario tras una venta, eliminando el error humano y garantizando la consistencia de los datos en tiempo real.
- **Distinción de roles:** Asigna roles por usuario, permitiendo al dueño identificar al responsable de cada venta y así evaluar su desempeño laboral en una auditoría de caja.
- **Gestión de proveedores y productos:** Registra tanto datos de los productos por entrada y salida como de sus proveedores, permitiendo automatizar cálculos de ganancias y pérdidas.
- **Precios congelados:** Historial inmutable de costos y ventas para permitirle al dueño calcular ganancias reales sin que la inflación afecte los reportes financieros.

## Arquitectura de datos
Diagrama Entidad-Relación con normalización 3FN aplicada

![Diagrama Entidad-Relación](/assets/pos_system_schema_v2.png)

## Stack tecnológico
* **Frontend:** HTML, TailwindCSS, JS
* **Backend:** TypeScript, Express (NodeJS)
* **Base de datos:** PostgreSQL
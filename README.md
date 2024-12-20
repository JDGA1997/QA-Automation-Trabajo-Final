# QA Automation | Trabajo Final

Este repositorio contiene el trabajo final del curso de QA Automation. El objetivo es generar un plan de pruebas, automatizarlo utilizando Cypress y reportar defectos o mejoras detectadas utilizando Trello.

## Requisitos

1. **Generar un plan de pruebas para posteriormente automatizarlo**
2. **Tener instalado Cypress**
3. **Crear el test `myTestSaucedemo.cy.js`**
4. **En el siguiente sitio: [Saucedemo](https://www.saucedemo.com), generar los tests:**
    - **Compra con user 1**
        - Login con el usuario “standard_user”
        - Agregar los productos al carrito
        - Hacer el checkout
        - Validar que se haya realizado el checkout
        - Realizar el logout
    - **Compra con user 2**
        - Ingresar con el usuario “problem_user”
        - Repetir los puntos 4.1.2, 4.1.3, 4.1.4, 4.1.5
5. **Utilizar la herramienta de gestión de incidencias Trello y reportar los defectos o mejoras detectadas en la siguiente plantilla de incidentes:**
    - [Enlace para acceder al template de reporte de bugs/improvements](https://drive.google.com/file/d/1D303ARjNwdtkdxDrNf4k72jGsGVEKjoN/view?usp=drive_link)
6. **Formato de entrega: Subir el trabajo a GitHub y adjuntar el link del repositorio a la entrega**

## Criterios de Evaluación

### Aplicar todo lo aprendido
- **Comprensión y aplicación:** Se evaluará la comprensión y correcta aplicación de los conceptos aprendidos durante el curso, reflejados en el trabajo final.
- **Uso de buenas prácticas:** El código debe demostrar buenas prácticas en automatización de pruebas.

### Uso de Herramientas
- **Flexibilidad en la elección de herramientas:** Los estudiantes pueden utilizar cualquier herramienta adicional que consideren útil para completar el trabajo, además de Cypress.

### Plan de Pruebas
- **Presencia de un plan de pruebas:** Es fundamental contar con un plan de pruebas bien definido.
- **Claridad y detalle:** El plan de pruebas debe ser claro y detallado, con una descripción precisa de los casos de prueba.

### Automatización de Pruebas
- **Cumplimiento de los requisitos:** Las pruebas automatizadas deben cumplir con los requisitos especificados en el trabajo final.
- **Validaciones y Verificaciones:** Las pruebas deben incluir validaciones y verificaciones adecuadas para asegurar que los resultados sean correctos.

## Estructura del Proyecto

```
qa-automation-final/
│
├── cypress/
│   ├── e2e/
│   │   └── myTestSaucedemo.cy.js
│   ├── fixtures/
│   └── support/
│
├── Challenge Cohorte ll.pdf
├── Plan de Pruebas - Juan Diego Gonzalez Antoniazzi.pdf
├── Plan de Pruebas - Juan Diego Gonzalez Antoniazzi.xlsx
├── README.md
└── cypress.json
```

## Instalación

1. **Clonar el repositorio:**
    ```bash
    git clone <https://github.com/JDGA1997/QA-Automation-Trabajo-Final>
    cd QA-Automation-Trabajo-Final
    ```

2. **Instalar las dependencias:**
    ```bash
    npm install
    ```

3. **Ejecutar Cypress:**
    ```bash
    npx cypress open
    ```

## Uso

1. **Abrir Cypress:**
    ```bash
    npx cypress open
    ```

2. **Ejecutar las pruebas:**
    - Selecciona el archivo `myTestSaucedemo.cy.js` en la interfaz de Cypress y haz clic en "Run".

## Reporte de Incidencias

- **Trello:** Utilice la plantilla de reporte de bugs/improvements para reportar los defectos y/o mejoras que fui detectadando durante las pruebas.
- **Enlace al Tablero de Trello:** [QA Automation | Trabajo Final](https://trello.com/b/OCWOFNY5/qa-automation-trabajo-final)

## Entrega

- **Subir el trabajo a GitHub:** Asegúrate de subir todo el código y los archivos necesarios a un repositorio de GitHub.
- **Adjuntar el link del repositorio a la entrega:** Proporciona el enlace al repositorio en la plataforma de entrega del curso.

## Contacto

Para cualquier consulta o sugerencia, puedes contactarme a través de [mi perfil de GitHub](https://github.com/JDGA1997).

---

¡Muchas gracias profes por revisar mi trabajo final!
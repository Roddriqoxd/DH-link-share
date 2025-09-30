# Project - Link Share

Static web application developed with **Angular 19** that allows link management, profile preview, and basic authentication (login/register). 
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.
---

## Technologies Used
- [Angular 19](https://v19.angular.dev/overview)
- [TypeScript](https://www.typescriptlang.org/)
- SCSS for styling

---

## Project Structure

```bash
src/
├── app/
│ ├── core/ 
│ ├── modules/
│ │ ├── auth/
│ │ ├── home/
│ │ └── preview/
│ ├── shared/
│ ├── app.component.* 
│ ├── app.routes.ts
│ └── app.config.ts
├── styles/
└── index.html
```
---
## Installation & Local Development
1. Clone the repository:
```bash
git clone https://github.com/Roddriqoxd/DH-link-share.git
```
2. Install dependencies:
```bash
npm install
```
3. To start a local development server, run:

```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Build for Production

Generate the optimized build:
```bash
ng build --configuration production
```
## Build Docker image

Generate the optimized build:
```bash
docker build -t dh-link-share .
```

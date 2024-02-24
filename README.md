# 🛒 AngularCommerceTableApp

A streamlined Angular project showcasing a dynamic data table of commerce entries fetched from [random-data-api.com](https://random-data-api.com/), enhanced with Angular Material and state management via NgRx.

## 🚀 Quick Start

Clone the project:

```sh
git clone https://github.com/itkrivoshei/AngularCommerceTableApp.git
```

Change directory:

```sh
cd AngularCommerceTableApp
```

Install dependencies:

```sh
npm install
```

Serve the project locally:

```sh
ng serve
```

Navigate to `http://localhost:4200/` to view the app.

## 🏭 Build and Deploy

Build the project:

```sh
ng build --configuration production --base-href "https://itkrivoshei.github.io/AngularCommerceTableApp/"
```

Deploy to GitHub Pages:

```sh
ngh --dir=dist/AngularCommerceTableApp
```

## 🧪 Unit Tests

Run unit tests with the following command:

```sh
ng test
```

Tests are detailed for:

- [Commerce Table Component](src/app/components/commerce-table/commerce-table.component.spec.ts)
- [App Component](src/app/app.component.spec.ts)
- [Commerce Service](src/app/services/commerce.service.spec.ts)

## ⚙️ Environment Configuration

Configured for development and production environments:

- [Development](src/environments/environment.ts)
- [Production](src/environments/environment.prod.ts)

## 🎨 Features

- Fetches and displays over 100 commerce entries.
- Utilizes Angular Material for UI components.
- Incorporates NgRx for state management.
- "Load More Commerces" button to fetch additional entries.
- Custom styling for a unique user experience.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# 🛒 AngularCommerceTableApp

A streamlined Angular project showcasing a dynamic data table of commerce entries. Initially fetching data from [random-data-api.com](https://random-data-api.com/), this app now integrates a serverless backend with AWS Lambda and API Gateway, enhanced with Angular Material and state management via NgRx.

## 🔗 Live Demo

Check out the live demo [here](https://itkrivoshei.github.io/AngularCommerceTableApp/).

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

## 🛠 AWS Configuration

Configured AWS Lambda and API Gateway for backend services to bypass CORS issues and securely fetch data for the application.

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

Configured for development and production environments with respective AWS API Gateway endpoints:

- [Development](src/environments/environment.ts)
- [Production](src/environments/environment.prod.ts)

## 🎨 Features

- Fetches and displays over 100 commerce entries from a serverless AWS backend.
- Utilizes Angular Material for UI components.
- Incorporates NgRx for state management.
- "Load More Commerces" button to fetch additional entries.
- Custom styling for a unique user experience.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

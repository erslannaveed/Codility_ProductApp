# ProductApp - Source Code Structure

This directory contains the source code for the ProductApp React Native application.

## 📁 Folder Structure

```
src/
├── components/          # Reusable UI components
├── navigation/          # Navigation configuration
│   └── AppNavigator.tsx # Main navigation setup
├── screens/             # Screen components
│   ├── ProductsListScreen.tsx    # Products listing screen
│   └── ProductDetailsScreen.tsx  # Product details screen
├── services/            # API and data services
│   └── productService.ts         # Product data service with mock data
├── store/               # Redux store configuration
│   ├── index.ts                 # Store setup with Redux persist
│   └── productSlice.ts          # Product state management
├── types/               # TypeScript type definitions
│   └── index.ts                 # All type definitions
├── utils/               # Utility functions and constants
│   ├── constants.ts             # App constants (colors, spacing, etc.)
│   └── helpers.ts               # Helper functions
├── index.ts             # Main exports
└── README.md            # This file
```

## 🚀 Features

- **React Navigation**: Stack navigator with two screens
- **Redux Toolkit**: State management with async thunks
- **Redux Persist**: Data persistence across app sessions
- **TypeScript**: Full type safety
- **Mock Data**: Realistic product data for testing
- **Modern UI**: Clean and responsive design
- **Search & Filter**: Product search and category filtering
- **Pull to Refresh**: Refresh functionality
- **Error Handling**: Comprehensive error handling

## 📱 Screens

### ProductsListScreen
- Displays grid of products
- Search functionality
- Category filtering
- Pull-to-refresh
- Navigation to product details

### ProductDetailsScreen
- Detailed product view
- Product specifications
- Add to cart functionality
- Buy now functionality
- Stock status display

## 🔧 Technologies Used

- React Native 0.82.0
- React Navigation 7.x
- Redux Toolkit 2.x
- Redux Persist 6.x
- TypeScript 5.x
- AsyncStorage for persistence

## 📦 Dependencies

All required dependencies are already installed in the project:
- @react-navigation/native
- @reduxjs/toolkit
- react-redux
- redux-persist
- @react-native-async-storage/async-storage
- react-native-safe-area-context
- react-native-screens
- react-native-gesture-handler

## 🏃‍♂️ Getting Started

1. Install dependencies: `npm install` or `yarn install`
2. Run on iOS: `npm run ios` or `yarn ios`
3. Run on Android: `npm run android` or `yarn android`
4. Start Metro: `npm start` or `yarn start`

The app will automatically load with the ProductsList screen and fetch mock product data.

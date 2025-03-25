# DOF Robotics Mobile App – React Native

This repository documents the development of a mobile application built for DOF Robotics using **React Native** and **Android Studio** as part of a software internship project conducted

# 🚀 Getting Started with React Native & Android Studio

This mobile app was developed using **React Native CLI** (not Expo) and built/tested on **Android Studio Emulator**. Below is a full setup guide and the key packages used during development.

---

## 🔧 Environment Setup

### 1. Install Prerequisites:
- **Node.js** (v18+): https://nodejs.org
- **Java Development Kit (JDK)** – Java 11 recommended
- **Android Studio** with Android SDK and emulator
- **React Native CLI** (not Expo)

```
npm install -g react-native-cli
```

### 📁 Project Initialization
Create a new React Native project:

```
npx react-native init STAJGOSTERIM
cd STAJGOSTERIM
```

### ⚙️ Running on Android Emulator
Open Android Studio and start an Android Virtual Device (AVD).

In the terminal:

```
npx react-native run-android
```
Note: Make sure adb is in your system path and emulator is running.

### 📦 Packages Used
🧭 React Navigation (Stack & Drawer)
```
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler react-native-reanimated
npm install @react-navigation/native-stack
npm install @react-navigation/drawer
```

Reanimated setup:
Add this at the top of index.js:
```
import 'react-native-gesture-handler';
```

Then enable Reanimated plugin in babel.config.js:
```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
```

### 🎬 YouTube Embed
```
npm install react-native-youtube-iframe
```
 -  Use for embedding videos in detail screens:
```
import YoutubePlayer from "react-native-youtube-iframe";

<YoutubePlayer height={200} play={false} videoId={"VIDEO_ID"} />
```

### 🗺️ MapView Integration
```
npm install react-native-maps
```

 - Display office locations on map:
```     
<MapView
  initialRegion={{
    latitude: 41.015137,
    longitude: 28.979530,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  style={{ flex: 1 }}
>
  <Marker coordinate={{ latitude: 41.015137, longitude: 28.979530 }} />
</MapView>
```



### 🖼️ Image Zoom & Viewer
```
npm install react-native-image-viewing
```
- Use this for product image gallery with zoom:

```
import ImageViewing from "react-native-image-viewing";

<ImageViewing
  images={[{ uri: 'https://example.com/image1.jpg' }]}
  imageIndex={0}
  visible={visible}
  onRequestClose={() => setVisible(false)}
/>
```

### 🧪 Running the App
Start Metro Server
```
npx react-native start
```

Launch on Emulator or Physical Device
```
npx react-native run-android
```

### 🧠 Developer Notes
* All navigation flows are controlled by Stack.Navigator and Drawer.Navigator.

* All screens are responsive and use ScrollView or FlatList for data rendering.

* Emulators tested: Pixel 6 API 33 & API 30.
















## 📅 Weekly Progress Overview

### ✅ Day 1: Project Setup & Initial Pages
- Project initialized as `STAJGOSTERIM`.
- Navigation setup using `Stack Navigator` and `Drawer Navigator`.
- Developed:
  - **Login Page** with `useState` for form fields.
  - **Products Page** displaying categories and images.
  - **Custom Drawer Menu** with icons and screen transitions.

### 🎯 Day 2: Product Details & Entertainment Section
- Created individual screens for 4 product categories.
- Built the **Entertainment Screen**:
  - Fetched data using `FlatList` from a local JSON.
  - Displayed project cards with `TouchableOpacity`.
  - Navigated to detailed views with `YouTube iframe`, project descriptions, and awards.
  - Added features like auto-scrolling banners and zoomable images.

### 🧩 Day 3: Additional Categories & About Us Page
- Designed and implemented:
  - **VR**, **Dome Films**, **Airplane** categories.
  - **AGV (Automated Guided Vehicles)** info screen.
  - **About Us** section with sub-pages: Company Info, References, Awards.
  - Used `FlatList`, `ScrollView`, and `MapView` for content rendering and interaction.

### 📍 Day 4: Contact & ROI Screens
- Implemented:
  - **Contact Page** with `MapView` markers for Istanbul, USA, and Netherlands offices.
  - **ROI Page** explaining return on investment with styled sections.
  - Added final screens to Drawer menu for smooth navigation.

## 🛠️ Technologies Used
- **React Native**
- **React Navigation** (`Stack`, `Drawer`)
- **Android Studio**
- `react-native-youtube-iframe`, `react-native-image-viewing`, `MapView`, `FlatList`, `ScrollView`

## 📸 Screenshots & UI Design
All UI components and navigation flows were developed according to DOF Robotics’ branding and are supported with screenshots in this repository.

## 👨‍💻 Developer Note
This project reflects the full-cycle experience of designing and developing a cross-platform mobile app from scratch. It also demonstrates strong usage of React Native ecosystem tools, performance-optimized components, and advanced navigation practices.

---

📌 For more details, please check the related project files and images in this repository.




![Image](https://github.com/user-attachments/assets/ac8fafa0-23ab-40e4-859c-537bb7f5224c)
![Image](https://github.com/user-attachments/assets/952d8aef-4d2a-4579-9801-59cda00adae5)
![Image](https://github.com/user-attachments/assets/28eda627-6a2f-41b1-8973-6265e14ee323)
![Image](https://github.com/user-attachments/assets/c3fe3fc9-ec28-44f3-a004-11b0e856f971)
![Image](https://github.com/user-attachments/assets/1e72bbdf-47a9-45d0-a25f-650788cf4995)

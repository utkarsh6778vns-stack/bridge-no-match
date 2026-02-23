# Bridge - Match Screen

This is a pixel-perfect React Native (Expo) implementation of the Match screen for the Bridge application. This variant features the "New match" status, updated layout, and premium aesthetics as per the latest design.

## 📱 Preview

![Match Screen Design](./match_screen_design.png)

## 🚀 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS) & Vanilla CSS
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit)
- **Icons**: Custom SVG icons
- **Animations**: [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## ✨ Features

- **"New match" State**: Specialized UI with a semi-transparent badge and clean layout.
- **Pixel-Perfect Styling**: Precise implementation of border radius, spacing, and typography to match the design.
- **Action Button**: Standardized white circular action button with a directional arrow.
- **Premium Aesthetics**: Smooth gradients and high-quality image handling.
- **Responsive Navigation**: Bottom tab bar with active state indicators.

## 🛠️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run start
   ```

3. **Open the project**:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## 📂 Project Structure

- `src/components/matches/MatchCard.tsx`: The core component handling match card UI variants.
- `src/screens/MatchesScreen.tsx`: Manages the screen layout and match data.
- `src/components/Icons/Icons.tsx`: Custom SVG icon components.
- `src/components/Community/BottomTabBar.tsx`: Custom bottom navigation bar.

---
Created with ❤️ by Antigravity
